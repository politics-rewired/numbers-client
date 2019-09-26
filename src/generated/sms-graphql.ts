export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
  /** A location in a connection that can be used for resuming pagination. */
  Cursor: any,
  PhoneNumber: any,
  /** 
 * A point in time as described by the [ISO
   * 8601](https://en.wikipedia.org/wiki/ISO_8601) standard. May or may not include a timezone.
 **/
  Datetime: any,
  /** A universally unique identifier as defined by [RFC 4122](https://tools.ietf.org/html/rfc4122). */
  UUID: any,
  AreaCode: any,
  ZipCode: any,
  Url: any,
  /** A JavaScript object encoded in the JSON format as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any,
};


/** All input for the create `SendingLocation` mutation. */
export type CreateSendingLocationInput = {
  /** 
 * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
 **/
  clientMutationId?: Maybe<Scalars['String']>,
  /** The `SendingLocation` to be created by this mutation. */
  sendingLocation: SendingLocationInput,
};

/** The output of our create `SendingLocation` mutation. */
export type CreateSendingLocationPayload = {
   __typename?: 'CreateSendingLocationPayload',
  /** 
 * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
 **/
  clientMutationId?: Maybe<Scalars['String']>,
  /** The `SendingLocation` that was created by this mutation. */
  sendingLocation?: Maybe<SendingLocation>,
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>,
  /** An edge for our `SendingLocation`. May be used by Relay 1. */
  sendingLocationEdge?: Maybe<SendingLocationsEdge>,
};


/** The output of our create `SendingLocation` mutation. */
export type CreateSendingLocationPayloadSendingLocationEdgeArgs = {
  orderBy?: Maybe<Array<SendingLocationsOrderBy>>
};



/** All input for the `deleteSendingLocationByNodeId` mutation. */
export type DeleteSendingLocationByNodeIdInput = {
  /** 
 * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
 **/
  clientMutationId?: Maybe<Scalars['String']>,
  /** The globally unique `ID` which will identify a single `SendingLocation` to be deleted. */
  nodeId: Scalars['ID'],
};

/** All input for the `deleteSendingLocation` mutation. */
export type DeleteSendingLocationInput = {
  /** 
 * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
 **/
  clientMutationId?: Maybe<Scalars['String']>,
  id: Scalars['UUID'],
};

/** The output of our delete `SendingLocation` mutation. */
export type DeleteSendingLocationPayload = {
   __typename?: 'DeleteSendingLocationPayload',
  /** 
 * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
 **/
  clientMutationId?: Maybe<Scalars['String']>,
  /** The `SendingLocation` that was deleted by this mutation. */
  sendingLocation?: Maybe<SendingLocation>,
  deletedSendingLocationNodeId?: Maybe<Scalars['ID']>,
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>,
  /** An edge for our `SendingLocation`. May be used by Relay 1. */
  sendingLocationEdge?: Maybe<SendingLocationsEdge>,
};


/** The output of our delete `SendingLocation` mutation. */
export type DeleteSendingLocationPayloadSendingLocationEdgeArgs = {
  orderBy?: Maybe<Array<SendingLocationsOrderBy>>
};


/** The root mutation type which contains root level fields which mutate data. */
export type Mutation = {
   __typename?: 'Mutation',
  /** Creates a single `SendingLocation`. */
  createSendingLocation?: Maybe<CreateSendingLocationPayload>,
  /** Updates a single `SendingLocation` using its globally unique id and a patch. */
  updateSendingLocationByNodeId?: Maybe<UpdateSendingLocationPayload>,
  /** Updates a single `SendingLocation` using a unique key and a patch. */
  updateSendingLocation?: Maybe<UpdateSendingLocationPayload>,
  /** Deletes a single `SendingLocation` using its globally unique id. */
  deleteSendingLocationByNodeId?: Maybe<DeleteSendingLocationPayload>,
  /** Deletes a single `SendingLocation` using a unique key. */
  deleteSendingLocation?: Maybe<DeleteSendingLocationPayload>,
  sendMessage?: Maybe<SendMessagePayload>,
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateSendingLocationArgs = {
  input: CreateSendingLocationInput
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateSendingLocationByNodeIdArgs = {
  input: UpdateSendingLocationByNodeIdInput
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateSendingLocationArgs = {
  input: UpdateSendingLocationInput
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteSendingLocationByNodeIdArgs = {
  input: DeleteSendingLocationByNodeIdInput
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteSendingLocationArgs = {
  input: DeleteSendingLocationInput
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationSendMessageArgs = {
  input: SendMessageInput
};

/** An object with a globally unique `ID`. */
export type Node = {
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'],
};

export type OutboundMessage = Node & {
   __typename?: 'OutboundMessage',
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'],
  id: Scalars['UUID'],
  sendingLocationId: Scalars['UUID'],
  createdAt?: Maybe<Scalars['Datetime']>,
  contactZipCode: Scalars['ZipCode'],
  stage: OutboundMessageStages,
  toNumber: Scalars['PhoneNumber'],
  fromNumber?: Maybe<Scalars['PhoneNumber']>,
  pendingNumberRequestId?: Maybe<Scalars['UUID']>,
  body: Scalars['String'],
  mediaUrls?: Maybe<Array<Maybe<Scalars['Url']>>>,
  serviceId?: Maybe<Scalars['String']>,
  numSegments?: Maybe<Scalars['Int']>,
  numMedia?: Maybe<Scalars['Int']>,
  extra?: Maybe<Scalars['JSON']>,
  /** Reads a single `SendingLocation` that is related to this `OutboundMessage`. */
  sendingLocation?: Maybe<SendingLocation>,
  /** Reads a single `SendingPhoneNumber` that is related to this `OutboundMessage`. */
  sendingPhoneNumberByFromNumber?: Maybe<SendingPhoneNumber>,
};

export enum OutboundMessageStages {
  AwaitingNumber = 'AWAITING_NUMBER',
  Queued = 'QUEUED',
  Sent = 'SENT'
}

/** Information about pagination in a connection. */
export type PageInfo = {
   __typename?: 'PageInfo',
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'],
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'],
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['Cursor']>,
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['Cursor']>,
};


/** The root query type which gives access points into the data universe. */
export type Query = Node & {
   __typename?: 'Query',
  /** 
 * Exposes the root query type nested one level down. This is helpful for Relay 1
   * which can only query top level fields if they are in a particular form.
 **/
  query: Query,
  /** The root query type must be a `Node` to work well with Relay 1 mutations. This just resolves to `query`. */
  nodeId: Scalars['ID'],
  /** Fetches an object given its globally unique `ID`. */
  node?: Maybe<Node>,
  /** Reads and enables pagination through a set of `SendingPhoneNumber`. */
  sendingPhoneNumbers?: Maybe<SendingPhoneNumbersConnection>,
  /** Reads and enables pagination through a set of `SendingLocation`. */
  sendingLocations?: Maybe<SendingLocationsConnection>,
  sendingPhoneNumber?: Maybe<SendingPhoneNumber>,
  sendingLocation?: Maybe<SendingLocation>,
  /** Reads a single `SendingPhoneNumber` using its globally unique `ID`. */
  sendingPhoneNumberByNodeId?: Maybe<SendingPhoneNumber>,
  /** Reads a single `SendingLocation` using its globally unique `ID`. */
  sendingLocationByNodeId?: Maybe<SendingLocation>,
};


/** The root query type which gives access points into the data universe. */
export type QueryNodeArgs = {
  nodeId: Scalars['ID']
};


/** The root query type which gives access points into the data universe. */
export type QuerySendingPhoneNumbersArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['Cursor']>,
  after?: Maybe<Scalars['Cursor']>,
  orderBy?: Maybe<Array<SendingPhoneNumbersOrderBy>>,
  condition?: Maybe<SendingPhoneNumberCondition>
};


/** The root query type which gives access points into the data universe. */
export type QuerySendingLocationsArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['Cursor']>,
  after?: Maybe<Scalars['Cursor']>,
  orderBy?: Maybe<Array<SendingLocationsOrderBy>>,
  condition?: Maybe<SendingLocationCondition>
};


/** The root query type which gives access points into the data universe. */
export type QuerySendingPhoneNumberArgs = {
  phoneNumber: Scalars['PhoneNumber']
};


/** The root query type which gives access points into the data universe. */
export type QuerySendingLocationArgs = {
  id: Scalars['UUID']
};


/** The root query type which gives access points into the data universe. */
export type QuerySendingPhoneNumberByNodeIdArgs = {
  nodeId: Scalars['ID']
};


/** The root query type which gives access points into the data universe. */
export type QuerySendingLocationByNodeIdArgs = {
  nodeId: Scalars['ID']
};

export type SendingLocation = Node & {
   __typename?: 'SendingLocation',
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'],
  id: Scalars['UUID'],
  profileId: Scalars['UUID'],
  referenceName: Scalars['String'],
  areaCodes?: Maybe<Array<Maybe<Scalars['AreaCode']>>>,
  center: Scalars['ZipCode'],
  /** Reads and enables pagination through a set of `SendingPhoneNumber`. */
  sendingPhoneNumbers: SendingPhoneNumbersConnection,
};


export type SendingLocationSendingPhoneNumbersArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['Cursor']>,
  after?: Maybe<Scalars['Cursor']>,
  orderBy?: Maybe<Array<SendingPhoneNumbersOrderBy>>,
  condition?: Maybe<SendingPhoneNumberCondition>
};

/** 
 * A condition to be used against `SendingLocation` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 **/
export type SendingLocationCondition = {
  /** Checks for equality with the object’s `id` field. */
  id?: Maybe<Scalars['UUID']>,
  /** Checks for equality with the object’s `profileId` field. */
  profileId?: Maybe<Scalars['UUID']>,
  /** Checks for equality with the object’s `referenceName` field. */
  referenceName?: Maybe<Scalars['String']>,
  /** Checks for equality with the object’s `areaCodes` field. */
  areaCodes?: Maybe<Array<Maybe<Scalars['AreaCode']>>>,
  /** Checks for equality with the object’s `center` field. */
  center?: Maybe<Scalars['ZipCode']>,
};

/** An input for mutations affecting `SendingLocation` */
export type SendingLocationInput = {
  id?: Maybe<Scalars['UUID']>,
  profileId: Scalars['UUID'],
  referenceName: Scalars['String'],
  areaCodes?: Maybe<Array<Maybe<Scalars['AreaCode']>>>,
  center: Scalars['ZipCode'],
};

/** Represents an update to a `SendingLocation`. Fields that are set will be updated. */
export type SendingLocationPatch = {
  id?: Maybe<Scalars['UUID']>,
  profileId?: Maybe<Scalars['UUID']>,
  referenceName?: Maybe<Scalars['String']>,
  areaCodes?: Maybe<Array<Maybe<Scalars['AreaCode']>>>,
  center?: Maybe<Scalars['ZipCode']>,
};

/** A connection to a list of `SendingLocation` values. */
export type SendingLocationsConnection = {
   __typename?: 'SendingLocationsConnection',
  /** A list of `SendingLocation` objects. */
  nodes: Array<Maybe<SendingLocation>>,
  /** A list of edges which contains the `SendingLocation` and cursor to aid in pagination. */
  edges: Array<SendingLocationsEdge>,
  /** Information to aid in pagination. */
  pageInfo: PageInfo,
  /** The count of *all* `SendingLocation` you could get from the connection. */
  totalCount: Scalars['Int'],
};

/** A `SendingLocation` edge in the connection. */
export type SendingLocationsEdge = {
   __typename?: 'SendingLocationsEdge',
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>,
  /** The `SendingLocation` at the end of the edge. */
  node?: Maybe<SendingLocation>,
};

/** Methods to use when ordering `SendingLocation`. */
export enum SendingLocationsOrderBy {
  Natural = 'NATURAL',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  ProfileIdAsc = 'PROFILE_ID_ASC',
  ProfileIdDesc = 'PROFILE_ID_DESC',
  ReferenceNameAsc = 'REFERENCE_NAME_ASC',
  ReferenceNameDesc = 'REFERENCE_NAME_DESC',
  AreaCodesAsc = 'AREA_CODES_ASC',
  AreaCodesDesc = 'AREA_CODES_DESC',
  CenterAsc = 'CENTER_ASC',
  CenterDesc = 'CENTER_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

export type SendingPhoneNumber = Node & {
   __typename?: 'SendingPhoneNumber',
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'],
  phoneNumber: Scalars['PhoneNumber'],
  createdAt: Scalars['Datetime'],
  releasedAt?: Maybe<Scalars['Datetime']>,
  sendingLocationId: Scalars['UUID'],
  /** Reads a single `SendingLocation` that is related to this `SendingPhoneNumber`. */
  sendingLocation?: Maybe<SendingLocation>,
};

/** 
 * A condition to be used against `SendingPhoneNumber` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 **/
export type SendingPhoneNumberCondition = {
  /** Checks for equality with the object’s `phoneNumber` field. */
  phoneNumber?: Maybe<Scalars['PhoneNumber']>,
  /** Checks for equality with the object’s `createdAt` field. */
  createdAt?: Maybe<Scalars['Datetime']>,
  /** Checks for equality with the object’s `releasedAt` field. */
  releasedAt?: Maybe<Scalars['Datetime']>,
  /** Checks for equality with the object’s `sendingLocationId` field. */
  sendingLocationId?: Maybe<Scalars['UUID']>,
};

/** A connection to a list of `SendingPhoneNumber` values. */
export type SendingPhoneNumbersConnection = {
   __typename?: 'SendingPhoneNumbersConnection',
  /** A list of `SendingPhoneNumber` objects. */
  nodes: Array<Maybe<SendingPhoneNumber>>,
  /** A list of edges which contains the `SendingPhoneNumber` and cursor to aid in pagination. */
  edges: Array<SendingPhoneNumbersEdge>,
  /** Information to aid in pagination. */
  pageInfo: PageInfo,
  /** The count of *all* `SendingPhoneNumber` you could get from the connection. */
  totalCount: Scalars['Int'],
};

/** A `SendingPhoneNumber` edge in the connection. */
export type SendingPhoneNumbersEdge = {
   __typename?: 'SendingPhoneNumbersEdge',
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>,
  /** The `SendingPhoneNumber` at the end of the edge. */
  node?: Maybe<SendingPhoneNumber>,
};

/** Methods to use when ordering `SendingPhoneNumber`. */
export enum SendingPhoneNumbersOrderBy {
  Natural = 'NATURAL',
  PhoneNumberAsc = 'PHONE_NUMBER_ASC',
  PhoneNumberDesc = 'PHONE_NUMBER_DESC',
  CreatedAtAsc = 'CREATED_AT_ASC',
  CreatedAtDesc = 'CREATED_AT_DESC',
  ReleasedAtAsc = 'RELEASED_AT_ASC',
  ReleasedAtDesc = 'RELEASED_AT_DESC',
  SendingLocationIdAsc = 'SENDING_LOCATION_ID_ASC',
  SendingLocationIdDesc = 'SENDING_LOCATION_ID_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

/** All input for the `sendMessage` mutation. */
export type SendMessageInput = {
  /** 
 * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
 **/
  clientMutationId?: Maybe<Scalars['String']>,
  profileName?: Maybe<Scalars['String']>,
  to?: Maybe<Scalars['PhoneNumber']>,
  body?: Maybe<Scalars['String']>,
  mediaUrls?: Maybe<Array<Maybe<Scalars['Url']>>>,
  contactZipCode?: Maybe<Scalars['ZipCode']>,
};

/** The output of our `sendMessage` mutation. */
export type SendMessagePayload = {
   __typename?: 'SendMessagePayload',
  /** 
 * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
 **/
  clientMutationId?: Maybe<Scalars['String']>,
  outboundMessage?: Maybe<OutboundMessage>,
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>,
  /** Reads a single `SendingLocation` that is related to this `OutboundMessage`. */
  sendingLocation?: Maybe<SendingLocation>,
  /** Reads a single `SendingPhoneNumber` that is related to this `OutboundMessage`. */
  sendingPhoneNumberByFromNumber?: Maybe<SendingPhoneNumber>,
};

/** All input for the `updateSendingLocationByNodeId` mutation. */
export type UpdateSendingLocationByNodeIdInput = {
  /** 
 * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
 **/
  clientMutationId?: Maybe<Scalars['String']>,
  /** The globally unique `ID` which will identify a single `SendingLocation` to be updated. */
  nodeId: Scalars['ID'],
  /** An object where the defined keys will be set on the `SendingLocation` being updated. */
  patch: SendingLocationPatch,
};

/** All input for the `updateSendingLocation` mutation. */
export type UpdateSendingLocationInput = {
  /** 
 * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
 **/
  clientMutationId?: Maybe<Scalars['String']>,
  /** An object where the defined keys will be set on the `SendingLocation` being updated. */
  patch: SendingLocationPatch,
  id: Scalars['UUID'],
};

/** The output of our update `SendingLocation` mutation. */
export type UpdateSendingLocationPayload = {
   __typename?: 'UpdateSendingLocationPayload',
  /** 
 * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
 **/
  clientMutationId?: Maybe<Scalars['String']>,
  /** The `SendingLocation` that was updated by this mutation. */
  sendingLocation?: Maybe<SendingLocation>,
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>,
  /** An edge for our `SendingLocation`. May be used by Relay 1. */
  sendingLocationEdge?: Maybe<SendingLocationsEdge>,
};


/** The output of our update `SendingLocation` mutation. */
export type UpdateSendingLocationPayloadSendingLocationEdgeArgs = {
  orderBy?: Maybe<Array<SendingLocationsOrderBy>>
};



