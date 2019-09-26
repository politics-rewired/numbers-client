import ql from 'superagent-graphql';

import { CREATE_REQUEST } from './queries';
import { Request } from './Request';
import { RequestWrapper } from '../NumbersClient';

export const LOOKUP_GRAPHQL_PATH = '/lookup/graphql';

type LookupClientConstructor = {
  requestWrapper: RequestWrapper;
  lookupGraphqlPath?: string;
};

class LookupClient {
  _requestWrapper: RequestWrapper = null;
  lookupGraphqlPath: string = LOOKUP_GRAPHQL_PATH;

  /**
   * @param options LookupClient initialization options
   */
  constructor(options: LookupClientConstructor) {
    const { requestWrapper, lookupGraphqlPath } = options;

    if (!requestWrapper) {
      throw new Error('Parameter `request` required in constructor');
    }

    this._requestWrapper = requestWrapper;

    if (lookupGraphqlPath) {
      this.lookupGraphqlPath = lookupGraphqlPath;
    }
  }

  _request() {
    return this._requestWrapper(this.lookupGraphqlPath);
  }

  async createRequest() {
    const response = await this._request().use(ql(CREATE_REQUEST));
    return new Request({
      request: this._request,
      requestId: response.body.data.createRequest.request.id
    });
  }
}

export { LookupClient };
