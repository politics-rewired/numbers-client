import test from 'ava';
import request from 'superagent';

import { SMSClient } from './SMSClient';
import { RequestFactoryWrapper, DEFAULT_BASE_URL } from '../NumbersClient';

if (!process.env.TEST_API_KEY) {
  console.log('Must set env var TEST_API_KEY to run tests');
  process.exit(1);
}

if (!process.env.TEST_PROFILE_ID) {
  console.log('Must set env var TEST_PROFILE_ID to run tests');
  process.exit(1);
}

if (!process.env.TEST_DESTINATION_PHONE_NUMBER) {
  console.log('Must set env var TEST_DESTINATION_PHONE_NUMBER to run tests');
  process.exit(1);
}

const {
  TEST_API_KEY,
  TEST_PROFILE_ID,
  TEST_DESTINATION_PHONE_NUMBER
} = process.env;
const TEST_CENTER = '11205';
const OTHER_AREA_CODE = '212';

const REQUEST: RequestFactoryWrapper = path => () =>
  request.post(`${DEFAULT_BASE_URL}${path}`).set('token', TEST_API_KEY);

const client = new SMSClient({ requestWrapper: REQUEST });

test('can create sending location', async t => {
  const response = await client.createSendingLocation({
    profileId: TEST_PROFILE_ID,
    referenceName: 'Testing This Thing Right Here',
    center: TEST_CENTER
  });

  t.is(typeof response.data.createSendingLocation.sendingLocation, 'object');
  t.is(
    Array.isArray(
      response.data.createSendingLocation.sendingLocation.areaCodes
    ),
    true
  );
});

test('can fetch and edit sending location', async t => {
  const response = await client.getSendingLocations(TEST_PROFILE_ID);
  const sendingLocations = response.data.sendingLocations.nodes;
  t.is(Array.isArray(sendingLocations), true);

  const sendingLocationId = sendingLocations[0].id;
  t.is(typeof sendingLocationId, 'string');

  const areaCodes = sendingLocations[0].areaCodes;
  areaCodes.push(OTHER_AREA_CODE);
  const updateResonse = await client.updateSendingLocation(sendingLocationId, {
    areaCodes
  });

  t.deepEqual(
    updateResonse.data.updateSendingLocation.sendingLocation.areaCodes,
    areaCodes
  );
});

test('can delete sending locations', async t => {
  const response = await client.getSendingLocations(TEST_PROFILE_ID);
  const sendingLocationId = response.data.sendingLocations.nodes[0].id;

  const deleteResponse = await client.deleteSendingLocation(sendingLocationId);
  t.is(
    deleteResponse.data.deleteSendingLocation.sendingLocation.id,
    sendingLocationId
  );
});

test('can send messages', async t => {
  const response = await client.sendMessage({
    to: TEST_DESTINATION_PHONE_NUMBER,
    profileId: TEST_PROFILE_ID,
    body: 'hello! the test was run.'
  });

  /**
   * Failure is a success for the client
   * - it failed because we deleted the sending location in the previous test
   */
  t.is(
    response.errors[0].message,
    'Must create a sending location before sending messages'
  );
});
