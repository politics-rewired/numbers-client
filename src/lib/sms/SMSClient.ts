import ql from 'superagent-graphql';

import { CREATE_SENDING_LOCATION } from './queries';
import { RequestFactoryWrapper, RequestFactory } from '../NumbersClient';

export const SMS_GRAPHQL_PATH = '/sms/graphql';

interface CreateSendingLocationInput {
  profileId: string;
  referenceName: string;
  center: string;
}

type SMSClientConstructor = {
  requestWrapper: RequestFactoryWrapper;
  smsGraphqlPath?: string;
};

class SMSClient {
  _requestFactory: RequestFactory = null;
  smsGraphqlPath: string = SMS_GRAPHQL_PATH;

  /**
   * @param options SMSClient initialization options
   */
  constructor(options: SMSClientConstructor) {
    const { requestWrapper, smsGraphqlPath } = options;

    if (!requestWrapper) {
      throw new Error('Parameter `request` required in constructor');
    }

    if (smsGraphqlPath) {
      this.smsGraphqlPath = smsGraphqlPath;
    }

    this._requestFactory = requestWrapper(this.smsGraphqlPath);
  }

  async createSendingLocation(args: CreateSendingLocationInput) {
    const response = await this._requestFactory().use(
      ql(CREATE_SENDING_LOCATION, args)
    );
    return response.body;
  }

  async sendMessage() {
    // TODO: stub
  }
}

export { SMSClient };
