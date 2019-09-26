import request from 'superagent';
import ql from 'superagent-graphql';

import { CREATE_REQUEST } from './queries';
import { Request } from './Request';

type LookupClientConstructor = {
  request: () => request.SuperAgentRequest;
};

class LookupClient {
  _request: () => request.SuperAgentRequest = null;

  /**
   * @param options LookupClient initialization options
   */
  constructor(options: LookupClientConstructor) {
    const { request } = options;

    if (!request) {
      throw new Error('Parameter `request` required in constructor');
    }

    this._request = request;
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
