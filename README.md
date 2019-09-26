# Assemble Numbers Client

For P2P texting and calling applications, it’s useful to lookup information about a phone number before you text or call it, since it lets you know whether the number is reachable by the desired method.

Under most circumstances, it will save you money – suppose

- sending texts costs \$0.0075 per segment
- 50% of your numbers are landlines (a reasonable assumption when working with voter file data)
- it costs \$0.0025 to look up a number
- you are going to text 100,000 people

With prior validation of numbers, it will cost you:

    (50,000 * .0025) + (50,000 * (.0025 + .0075)) = 625

Without prior validation, it will cost:

    100,000 * .0075 = 750

Savings!

However, you are probably going to text the same contacts over and over again – without validating, you may end up re-texting landlines, if you are not meticulously tracking and handling response codes from the SMS service.

Assemble Numbers is a small service in Beta for looking up and storing carrier information about cell phone numbers. It provides an asynchronous, batch-based API for requesting information about large amounts of numbers at a time.

To get an API key, head to https://airtable.com/shruW0ZhyOSw3KzIw.

# Usage

Fetching data from Assemble Numbers is done via batched requests. You create a request, add numbers to the request, close the request, and then await its completion.

If using batch requests and the Assemble service, lookups can run as fast as 500 numbers/second.

## Batch Requests

```javascript
// ES Module style
import NumbersClient from 'assemble-numbers-client';

const options = {
  apiKey: 'YOUR_ASSEMBLE_NUMBERS_API_KEY'
};

const numbersClient = new NumbersClient(options);

async function filterNumbersForType(phoneNumbers: [string], type: string) {
  const request = await numbersClient.lookup.createRequest();

  // addPhoneNumbers to request accepts a maximum of 500 numbers
  // at a time
  // you can put up to 500,000 numbers in a single request
  await request.addPhoneNumbers(phoneNumbers);

  await request.close();

  await request.waitUntilDone({
    onProgressUpdate: percentComplete => {
      console.log(`Completed ${percentComplete}`);
    }
  });

  return await request.mobiles.eachPage({
    pageSize: n,
    onPage: async (numbers, pageNumber) => {
      // all of these numbers are mobiles
      // do something with them!
    }
  });

  // other methods on a finished request include:
  // request.landlines.each();
  // request.others.each();
}
```

# Full Documentation

Full documentation is available [here](https://politics-rewired.github.io/numbers-client/).

# Additional Details

## Additional Carrier Info

When we look up a number, we not only get information about the phone type (mobile, landline, or VOIP (other)), but we also learn the carrier and some other data.

Although at the moment (beginning of July), the Assemble API only exposes the phone type, we will be incorporating additional information into the API soon, and you will be able to access all of that information for numbers you have already looked up without additional charges.

If you need that information now, please get in touch via email at admin@politicsrewired.com.

# Can This Also Do **\_**?

If you are interested in a different or expanded use case for Assemble LRN, we’re likely interested!

Examples include:

- A version of this library in a different programming language (Python, Ruby, etc.)
- A service that would use this library to clean and annotate the numbers in my CRM

Contact admin@politicsrewired.com with inquiries!
