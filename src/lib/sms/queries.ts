export const CREATE_SENDING_LOCATION = `
  mutation createSendingLocation($profileId: UUID!, $referenceName: String!, $center: ZipCode!) {
    createSendingLocation(input: { sendingLocation: { profileId: $profileId,  referenceName: $referenceName, center: $center }}) {
      sendingLocation {
        id
      }
    }
  }
`;
