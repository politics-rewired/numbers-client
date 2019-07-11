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

  /**
   * @param options NumbersClient initialization options
   */
  constructor(options: NumbersClientConstructor) {
    const { apiKey, endpointUrl } = options;
    if (!apiKey) {
      throw new Error('Parameter `apiKey` required in constructor');
    }

    this.apiKey = apiKey;

    if (endpointUrl) {
      this.endpointUrl = endpointUrl;
    }
  }

  /**
   * @hidden
   */
  _request() {
    return request.post(this.endpointUrl).set('token', this.apiKey);
  }

  async createRequest() {
    const response = await this._request().use(ql(CREATE_REQUEST));
    return new Request({
      apiKey: this.apiKey,
      endpointUrl: this.endpointUrl,
      requestId: response.body.data.createRequest.request.id
    });
  }

  /**
   * If you need to make a rawGraphQL request for some access pattern
   * not supported, you can use this endpoint
   * @param query a GraphQL query string to run
   * @param variables variables matching your graphql query
   */
  async rawGraphQLRequest(query, variables) {
    const response = this._request().use(ql(query, variables));
    return response.body.data;
  }
}

export { NumbersClient };
