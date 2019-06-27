export const CREATE_REQUEST = `
  mutation {
    createRequest(input: {request: {}}) {
      request {
        id
      }
    }
  }
`;

export const ADD_PHONE_NUMBERS_TO_REQUEST = `
  mutation addPhoneNumbersToRequest($requestId: UUID!, $phoneNumbers: [String]) {
    addPhoneNumbersToRequest(input: {requestId: $requestId, phoneNumbers: $phoneNumbers}) {
      countAdded
      invalidNumbers
    }
  }
`;

export const CLOSE_REQUEST = `
  mutation closeRequest($requestId: UUID!) {
    closeRequest(input: {requestId: $requestId}) {
      request {
        closedAt
        id
      }
    }
  }
`;

export const REQUEST_PROGRESS = `
  query requestProgress($requestId: UUID!) {
    requestById(requestId: $requestId) {
      progress
      completedAt
    }
  }
`;

export const REQUEST_RESULTS_BY_TYPE = `
  query requestResultsByType($requestId: UUID!, phoneType: String!, pageSize: Int!, cursor: Cursor) {
    requestResults(
      condition: {requestId: $requestId, phoneType: $phoneType}
      first: $pageSize,
      after: $cursor
    ) {
      nodes {
        phoneNumber
      }
      pageInfo {
        endCursor
        hasNextPage
      }
    }
  }
`;
