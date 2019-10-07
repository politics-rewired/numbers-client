import test from 'ava';
import request from 'superagent';

import { SMSClient } from './SMSClient';
import { RequestFactoryWrapper, DEFAULT_BASE_URL } from '../NumbersClient';

if (!process.env.TEST_API_KEY) {
  console.log('Must set env var TEST_API_KEY to run tests');
  process.exit(1);
}

const REQUEST: RequestFactoryWrapper = path => () =>
  request
    .post(`${DEFAULT_BASE_URL}${path}`)
    .set('token', process.env.TEST_API_KEY);

test('can create sending location', async t => {
  const client = new SMSClient({ requestWrapper: REQUEST });
  const request = await client.createSendingLocation({
    profileId: '38803b9a-e46a-11e9-8963-cf859c103d6e',
    referenceName: 'Testing This Thing Right Here',
    center: '11205'
  });
  console.log(request);
  t.is(typeof request.requestId, 'string');
});
