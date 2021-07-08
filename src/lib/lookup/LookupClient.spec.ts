import test from 'ava';
import request from 'superagent';

import { LookupClient } from './LookupClient';
import { RequestFactoryWrapper, DEFAULT_BASE_URL } from '../NumbersClient';

if (!process.env.TEST_API_KEY) {
  console.log('Must set env var TEST_API_KEY to run tests');
  process.exit(1);
}

const REQUEST: RequestFactoryWrapper = (path) => () =>
  request
    .post(`${DEFAULT_BASE_URL}${path}`)
    .set('token', process.env.TEST_API_KEY);

test('can create request', async (t) => {
  const client = new LookupClient({ requestWrapper: REQUEST });
  const request = await client.createRequest();
  t.is(typeof request.requestId, 'string');
});

test('can add numbers to request', async (t) => {
  const client = new LookupClient({ requestWrapper: REQUEST });
  const request = await client.createRequest();
  const addResponse = await request.addPhoneNumbers(['+12147010869']);
  t.is(typeof addResponse.countAdded, 'number');
});

test('can close request', async (t) => {
  const client = new LookupClient({ requestWrapper: REQUEST });
  const request = await client.createRequest();
  await request.addPhoneNumbers(['+12147010869']);
  const closeResponse = await request.close();
  t.is(typeof closeResponse, 'undefined');
});

test('can wait until done', async (t) => {
  const client = new LookupClient({ requestWrapper: REQUEST });
  const request = await client.createRequest();
  await request.addPhoneNumbers(['+12147010869']);
  await request.close();
  const waitUntilDoneResponse = await request.waitUntilDone({});
  t.is(typeof waitUntilDoneResponse, 'undefined');
});

test('can paginate through mobiles', async (t) => {
  const client = new LookupClient({ requestWrapper: REQUEST });
  const request = await client.createRequest();
  await request.addPhoneNumbers(['+12147010869']);
  await request.close();
  await request.waitUntilDone({});

  const mobiles = [];

  await request.mobiles.eachPage({
    onPage: async (numbers) => {
      numbers.forEach((n) => mobiles.push(n));
    },
  });

  t.is(typeof mobiles, 'object');
  t.is(typeof mobiles[0].phoneNumber, 'string');
});
