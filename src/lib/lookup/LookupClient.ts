import ql from 'superagent-graphql';

import { CREATE_REQUEST } from './queries';
import { Request } from './Request';
import { RequestFactoryWrapper, RequestFactory } from '../NumbersClient';
import { raiseGqlErrors } from '../util';

export const LOOKUP_GRAPHQL_PATH = '/lookup/graphql';

type LookupClientConstructor = {
  requestWrapper: RequestFactoryWrapper;
  lookupGraphqlPath?: string;
};

class LookupClient {
  _requestFactory: RequestFactory = null;
  lookupGraphqlPath: string = LOOKUP_GRAPHQL_PATH;

  /**
   * @param options LookupClient initialization options
   */
  constructor(options: LookupClientConstructor) {
    const { requestWrapper, lookupGraphqlPath } = options;

    if (!requestWrapper) {
      throw new Error('Parameter `request` required in constructor');
    }

    if (lookupGraphqlPath) {
      this.lookupGraphqlPath = lookupGraphqlPath;
    }

    this._requestFactory = requestWrapper(this.lookupGraphqlPath);
  }

  async createRequest() {
    const response = await this._requestFactory()
      .use(ql(CREATE_REQUEST))
      .then(raiseGqlErrors);
    return new Request({
      requestFactory: this._requestFactory,
      requestId: response.body.data.createRequest.request.id
    });
  }
}

export { LookupClient };
