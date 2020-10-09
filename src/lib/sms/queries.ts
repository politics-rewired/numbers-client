export const GET_SENDING_LOCATIONS = `
  query sendingLocations ($profileId: UUID!) {
    sendingLocations(condition: {profileId: $profileId}) {
      nodes {
        id
        center
        areaCodes
        referenceName
      }
    }
  }
`;

export const CREATE_SENDING_LOCATION = `
  mutation createSendingLocation($profileId: UUID!, $referenceName: String!, $purchasingStrategy: NumberPurchasingStrategy!, $center: ZipCode!) {
    createSendingLocation(input: { sendingLocation: { profileId: $profileId,  referenceName: $referenceName, purchasingStrategy: $purchasingStrategy, center: $center }}) {
      sendingLocation {
        areaCodes
        id
        center
        referenceName
      }
    }
  }
`;

export const UPDATE_SENDING_LOCATION = `
  mutation updateSendingLocation ($id: UUID!, $patch: SendingLocationPatch!) {
    updateSendingLocation(input: {id: $id, patch: $patch}) {
      sendingLocation {
        areaCodes
        id
        center
        referenceName
      }
    }
  }
`;

export const DELETE_SENDING_LOCATION = `
  mutation deleteSendingLocation ($id: UUID!) {
    deleteSendingLocation(input: {id: $id}) {
      sendingLocation {
        id
      }
    }
  }
`;

export const SEND_MESSAGE = `
  mutation sendMessage($profileId: UUID!, $to: PhoneNumber!, $body: String!, $contactZipCode: ZipCode, $mediaUrls: [Url], $sendBefore: String!) {
    sendMessage(input: {profileId: $profileId, to: $to, body: $body, contactZipCode: $contactZipCode, mediaUrls: $mediaUrls, sendBefore: $sendBefore}) {
      outboundMessage {
        id
      }
    }
  }
`;
