import request from 'superagent';
import ql from 'superagent-graphql';
import {
  ADD_PHONE_NUMBERS_TO_REQUEST,
  CLOSE_REQUEST,
  REQUEST_PROGRESS,
  REQUEST_RESULTS_BY_TYPE
} from './queries';

const MAX_NUMBERS_PER_REQUEST = 1000;
const DEFAULT_POLL_INTERVAL = 1000;
const DEFAULT_PAGE_SIZE = 100;

type RequestConstructor = {
  apiKey: string;
  endpointUrl?: string;
  requestId: string;
};

type EachPageOptions = {
  pageSize?: number;
  onPage: Function;
};

class Request {
  apiKey: string = undefined;
  endpointUrl: string = undefined;
  requestId: string = undefined;
  closed: boolean = false;
  done: boolean = false;

  constructor({ apiKey, endpointUrl, requestId }: RequestConstructor) {
    this.apiKey = apiKey;
    this.endpointUrl = endpointUrl;
    this.requestId = requestId;
  }

  _request() {
    return request.set('token', this.apiKey).post(this.endpointUrl);
  }

  async addPhoneNumbers(phoneNumbers: [string]) {
    if (this.closed) {
      throw new Error(`You cannot add numbers to a closed request`);
    }

    if (phoneNumbers.length > MAX_NUMBERS_PER_REQUEST) {
      throw new Error(
        `Please only add ${MAX_NUMBERS_PER_REQUEST} numbers at a time`
      );
    }

    const response = await this._request().use(
      ql(ADD_PHONE_NUMBERS_TO_REQUEST, {
        phoneNumbers,
        requestId: this.requestId
      })
    );

    return response.data.addPhoneNumbersToRequest;
  }

  async close() {
    await this._request().use(
      ql(CLOSE_REQUEST, {
        requestId: this.requestId
      })
    );

    this.closed = true;
  }

  async poll() {
    const response = await this._request().use(
      ql(REQUEST_PROGRESS, {
        requestId: this.requestId
      })
    );

    return response.data.requestProgress;
  }

  sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async waitUntilDone({
    onProgressUpdate,
    pollInterval = DEFAULT_POLL_INTERVAL
  }) {
    if (!this.closed) {
      throw new Error(
        'You must close a request before awaiting its completion'
      );
    }

    let usePollingFunction = typeof onProgressUpdate === 'function';

    while (!this.done) {
      const { completedAt, progress } = await this.poll();
      if (completedAt != null) {
        this.done = true;
      }

      if (usePollingFunction) {
        onProgressUpdate(progress);
      }

      this.sleep(pollInterval);
    }
  }

  wrapEachPage(phoneType: string) {
    return async function eachPage({
      pageSize = DEFAULT_PAGE_SIZE,
      onPage
    }: EachPageOptions) {
      let cursor: string;
      let hasNextPage = true;

      while (hasNextPage) {
        const response = this._request().use(
          ql(REQUEST_RESULTS_BY_TYPE, {
            cursor,
            pageSize,
            phoneType,
            requestId: this.requestId
          })
        );

        const pageInfo = response.body.data.pageInfo;
        const numbers = response.body.data.nodes;

        hasNextPage = pageInfo.hasNextPage;
        cursor = pageInfo.cursor;

        await onPage(numbers);
      }
    };
  }

  mobiles = {
    eachPage: this.wrapEachPage('mobile')
  };

  landlines = {
    eachPage: this.wrapEachPage('landline')
  };

  others = {
    eachPage: this.wrapEachPage('other')
  };
}

export { Request };
