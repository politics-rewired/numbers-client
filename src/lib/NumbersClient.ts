import request from 'superagent';
import ql from 'superagent-graphql';
const DEFAULT_ENDPOINT = 'https://numbers.assemble.live/graphql';
import { CREATE_REQUEST } from './queries';
import { Request } from './Request';

type NumbersClientConstructor = {
  apiKey: string;
  endpointUrl?: string;
};

class NumbersClient {
  apiKey: string = null;
  endpointUrl: string = DEFAULT_ENDPOINT;

  constructor({ apiKey, endpointUrl }: NumbersClientConstructor) {
    if (!apiKey) {
      throw new Error('Parameter `apiKey` required in constructor');
    }

    this.apiKey = apiKey;

    if (endpointUrl) {
      this.endpointUrl = endpointUrl;
    }
  }

  _request() {
    return request.set('token', this.apiKey).post(this.endpointUrl);
  }

  async createRequest() {
    const response = await this._request().use(ql(CREATE_REQUEST));
    return new Request({
      apiKey: this.apiKey,
      endpointUrl: this.endpointUrl,
      requestId: response.data.createRequest.request.id
    });
  }

  async rawGraphQLRequest(query, variables) {
    const response = this._request().use(ql(query, variables));
    return response.body.data;
  }
}

export { NumbersClient };
