import request from 'superagent';
import ql from 'superagent-graphql';

import { LookupClient } from './lookup/LookupClient';

export const DEFAULT_BASE_URL = 'https://numbers.assemble.live';

export type NumbersRequest = () => request.SuperAgentRequest;
export type RequestWrapper = (path?: string) => request.SuperAgentRequest;

type NumbersClientConstructor = {
  apiKey: string;
  endpointBaseUrl?: string;
};

class NumbersClient {
  apiKey: string = null;
  endpointBaseUrl: string = DEFAULT_BASE_URL;
  lookup: LookupClient = null;

  /**
   * @param options NumbersClient initialization options
   */
  constructor(options: NumbersClientConstructor) {
    const { apiKey, endpointBaseUrl } = options;
    if (!apiKey) {
      throw new Error('Parameter `apiKey` required in constructor');
    }

    this.apiKey = apiKey;

    if (endpointBaseUrl) {
      this.endpointBaseUrl = endpointBaseUrl;
    }

    this.lookup = new LookupClient({ requestWrapper: this._requestWrapper });
  }

  /**
   * @hidden
   */
  _requestWrapper(path: string = '') {
    return request
      .post(`${this.endpointBaseUrl}${path}`)
      .set('token', this.apiKey);
  }

  /**
   * If you need to make a rawGraphQL request for some access pattern
   * not supported, you can use this endpoint
   * @param query a GraphQL query string to run
   * @param variables variables matching your graphql query
   */
  async rawGraphQLRequest(path: string, query, variables) {
    const response = await this._requestWrapper(path).use(ql(query, variables));
    return response.body.data;
  }
}

export { NumbersClient };
