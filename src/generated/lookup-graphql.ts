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
  /** A universally unique identifier as defined by [RFC 4122](https://tools.ietf.org/html/rfc4122). */
  UUID: any,
  PhoneNumber: any,
  /** 
 * A point in time as described by the [ISO
   * 8601](https://en.wikipedia.org/wiki/ISO_8601) standard. May or may not include a timezone.
 **/
  Datetime: any,
  /** A floating point number that requires more precision than IEEE 754 binary 64 */
  BigFloat: any,
  /** A JavaScript object encoded in the JSON format as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any,
};

export type Access = Node & {
   __typename?: 'Access',
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'],
  id: Scalars['UUID'],
  clientId: Scalars['UUID'],
  requestId?: Maybe<Scalars['UUID']>,
  phoneNumber: Scalars['PhoneNumber'],
  accessedAt: Scalars['Datetime'],
  state: AccessFulfillmentState,
  billingStatus?: Maybe<BillingStatusEnum>,
  /** Reads a single `Request` that is related to this `Access`. */
  request?: Maybe<Request>,
};

/** A condition to be used against `Access` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type AccessCondition = {
  /** Checks for equality with the object’s `id` field. */
  id?: Maybe<Scalars['UUID']>,
  /** Checks for equality with the object’s `clientId` field. */
  clientId?: Maybe<Scalars['UUID']>,
  /** Checks for equality with the object’s `requestId` field. */
  requestId?: Maybe<Scalars['UUID']>,
  /** Checks for equality with the object’s `phoneNumber` field. */
  phoneNumber?: Maybe<Scalars['PhoneNumber']>,
  /** Checks for equality with the object’s `accessedAt` field. */
  accessedAt?: Maybe<Scalars['Datetime']>,
  /** Checks for equality with the object’s `state` field. */
  state?: Maybe<AccessFulfillmentState>,
  /** Checks for equality with the object’s `billingStatus` field. */
  billingStatus?: Maybe<BillingStatusEnum>,
};

/** A connection to a list of `Access` values. */
export type AccessesConnection = {
   __typename?: 'AccessesConnection',
  /** A list of `Access` objects. */
  nodes: Array<Maybe<Access>>,
  /** A list of edges which contains the `Access` and cursor to aid in pagination. */
  edges: Array<AccessesEdge>,
  /** Information to aid in pagination. */
  pageInfo: PageInfo,
  /** The count of *all* `Access` you could get from the connection. */
  totalCount: Scalars['Int'],
};

/** A `Access` edge in the connection. */
export type AccessesEdge = {
   __typename?: 'AccessesEdge',
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>,
  /** The `Access` at the end of the edge. */
  node?: Maybe<Access>,
};

/** Methods to use when ordering `Access`. */
export enum AccessesOrderBy {
  Natural = 'NATURAL',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  ClientIdAsc = 'CLIENT_ID_ASC',
  ClientIdDesc = 'CLIENT_ID_DESC',
  RequestIdAsc = 'REQUEST_ID_ASC',
  RequestIdDesc = 'REQUEST_ID_DESC',
  PhoneNumberAsc = 'PHONE_NUMBER_ASC',
  PhoneNumberDesc = 'PHONE_NUMBER_DESC',
  AccessedAtAsc = 'ACCESSED_AT_ASC',
  AccessedAtDesc = 'ACCESSED_AT_DESC',
  StateAsc = 'STATE_ASC',
  StateDesc = 'STATE_DESC',
  BillingStatusAsc = 'BILLING_STATUS_ASC',
  BillingStatusDesc = 'BILLING_STATUS_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

export enum AccessFulfillmentState {
  Done = 'DONE',
  Waiting = 'WAITING',
  Fetching = 'FETCHING'
}

/** An input for mutations affecting `Access` */
export type AccessInput = {
  id?: Maybe<Scalars['UUID']>,
  clientId?: Maybe<Scalars['UUID']>,
  requestId?: Maybe<Scalars['UUID']>,
  phoneNumber: Scalars['PhoneNumber'],
  accessedAt?: Maybe<Scalars['Datetime']>,
  state?: Maybe<AccessFulfillmentState>,
  billingStatus?: Maybe<BillingStatusEnum>,
};

/** Represents an update to a `Access`. Fields that are set will be updated. */
export type AccessPatch = {
  id?: Maybe<Scalars['UUID']>,
  clientId?: Maybe<Scalars['UUID']>,
  requestId?: Maybe<Scalars['UUID']>,
  phoneNumber?: Maybe<Scalars['PhoneNumber']>,
  accessedAt?: Maybe<Scalars['Datetime']>,
  state?: Maybe<AccessFulfillmentState>,
  billingStatus?: Maybe<BillingStatusEnum>,
};

export type AddPhoneNumbersToRequestInput = {
  requestId: Scalars['UUID'],
  phoneNumbers?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type AddPhoneNumbersToRequestPayload = {
   __typename?: 'AddPhoneNumbersToRequestPayload',
  request: Request,
  countAdded: Scalars['Int'],
  invalidNumbers?: Maybe<Array<Maybe<Scalars['String']>>>,
};


export enum BillingStatusEnum {
  Billed = 'BILLED',
  Cached = 'CACHED'
}

/** All input for the `closeRequest` mutation. */
export type CloseRequestInput = {
  /** 
 * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
 **/
  clientMutationId?: Maybe<Scalars['String']>,
  requestId: Scalars['UUID'],
};

/** The output of our `closeRequest` mutation. */
export type CloseRequestPayload = {
   __typename?: 'CloseRequestPayload',
  /** 
 * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
 **/
  clientMutationId?: Maybe<Scalars['String']>,
  request?: Maybe<Request>,
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>,
  /** An edge for our `Request`. May be used by Relay 1. */
  requestEdge?: Maybe<RequestsEdge>,
};


/** The output of our `closeRequest` mutation. */
export type CloseRequestPayloadRequestEdgeArgs = {
  orderBy?: Maybe<Array<RequestsOrderBy>>
};

/** All input for the create `Access` mutation. */
export type CreateAccessInput = {
  /** 
 * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
 **/
  clientMutationId?: Maybe<Scalars['String']>,
  /** The `Access` to be created by this mutation. */
  access: AccessInput,
};

/** The output of our create `Access` mutation. */
export type CreateAccessPayload = {
   __typename?: 'CreateAccessPayload',
  /** 
 * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
 **/
  clientMutationId?: Maybe<Scalars['String']>,
  /** The `Access` that was created by this mutation. */
  access?: Maybe<Access>,
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>,
  /** Reads a single `Request` that is related to this `Access`. */
  request?: Maybe<Request>,
  /** An edge for our `Access`. May be used by Relay 1. */
  accessEdge?: Maybe<AccessesEdge>,
};


/** The output of our create `Access` mutation. */
export type CreateAccessPayloadAccessEdgeArgs = {
  orderBy?: Maybe<Array<AccessesOrderBy>>
};

/** All input for the create `Lookup` mutation. */
export type CreateLookupInput = {
  /** 
 * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
 **/
  clientMutationId?: Maybe<Scalars['String']>,
  /** The `Lookup` to be created by this mutation. */
  lookup: LookupInput,
};

/** The output of our create `Lookup` mutation. */
export type CreateLookupPayload = {
   __typename?: 'CreateLookupPayload',
  /** 
 * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
 **/
  clientMutationId?: Maybe<Scalars['String']>,
  /** The `Lookup` that was created by this mutation. */
  lookup?: Maybe<Lookup>,
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>,
  /** An edge for our `Lookup`. May be used by Relay 1. */
  lookupEdge?: Maybe<LookupsEdge>,
};


/** The output of our create `Lookup` mutation. */
export type CreateLookupPayloadLookupEdgeArgs = {
  orderBy?: Maybe<Array<LookupsOrderBy>>
};

/** All input for the create `Request` mutation. */
export type CreateRequestInput = {
  /** 
 * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
 **/
  clientMutationId?: Maybe<Scalars['String']>,
  /** The `Request` to be created by this mutation. */
  request: RequestInput,
};

/** The output of our create `Request` mutation. */
export type CreateRequestPayload = {
   __typename?: 'CreateRequestPayload',
  /** 
 * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
 **/
  clientMutationId?: Maybe<Scalars['String']>,
  /** The `Request` that was created by this mutation. */
  request?: Maybe<Request>,
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>,
  /** An edge for our `Request`. May be used by Relay 1. */
  requestEdge?: Maybe<RequestsEdge>,
};


/** The output of our create `Request` mutation. */
export type CreateRequestPayloadRequestEdgeArgs = {
  orderBy?: Maybe<Array<RequestsOrderBy>>
};



/** All input for the `deleteAccessByNodeId` mutation. */
export type DeleteAccessByNodeIdInput = {
  /** 
 * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
 **/
  clientMutationId?: Maybe<Scalars['String']>,
  /** The globally unique `ID` which will identify a single `Access` to be deleted. */
  nodeId: Scalars['ID'],
};

/** All input for the `deleteAccessByPhoneNumberAndRequestId` mutation. */
export type DeleteAccessByPhoneNumberAndRequestIdInput = {
  /** 
 * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
 **/
  clientMutationId?: Maybe<Scalars['String']>,
  phoneNumber: Scalars['PhoneNumber'],
  requestId: Scalars['UUID'],
};

/** All input for the `deleteAccess` mutation. */
export type DeleteAccessInput = {
  /** 
 * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
 **/
  clientMutationId?: Maybe<Scalars['String']>,
  id: Scalars['UUID'],
};

/** The output of our delete `Access` mutation. */
export type DeleteAccessPayload = {
   __typename?: 'DeleteAccessPayload',
  /** 
 * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
 **/
  clientMutationId?: Maybe<Scalars['String']>,
  /** The `Access` that was deleted by this mutation. */
  access?: Maybe<Access>,
  deletedAccessNodeId?: Maybe<Scalars['ID']>,
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>,
  /** Reads a single `Request` that is related to this `Access`. */
  request?: Maybe<Request>,
  /** An edge for our `Access`. May be used by Relay 1. */
  accessEdge?: Maybe<AccessesEdge>,
};


/** The output of our delete `Access` mutation. */
export type DeleteAccessPayloadAccessEdgeArgs = {
  orderBy?: Maybe<Array<AccessesOrderBy>>
};

/** All input for the `deleteRequestByNodeId` mutation. */
export type DeleteRequestByNodeIdInput = {
  /** 
 * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
 **/
  clientMutationId?: Maybe<Scalars['String']>,
  /** The globally unique `ID` which will identify a single `Request` to be deleted. */
  nodeId: Scalars['ID'],
};

/** All input for the `deleteRequest` mutation. */
export type DeleteRequestInput = {
  /** 
 * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
 **/
  clientMutationId?: Maybe<Scalars['String']>,
  id: Scalars['UUID'],
};

/** The output of our delete `Request` mutation. */
export type DeleteRequestPayload = {
   __typename?: 'DeleteRequestPayload',
  /** 
 * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
 **/
  clientMutationId?: Maybe<Scalars['String']>,
  /** The `Request` that was deleted by this mutation. */
  request?: Maybe<Request>,
  deletedRequestNodeId?: Maybe<Scalars['ID']>,
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>,
  /** An edge for our `Request`. May be used by Relay 1. */
  requestEdge?: Maybe<RequestsEdge>,
};


/** The output of our delete `Request` mutation. */
export type DeleteRequestPayloadRequestEdgeArgs = {
  orderBy?: Maybe<Array<RequestsOrderBy>>
};


export type Lookup = {
   __typename?: 'Lookup',
  phoneNumber?: Maybe<Scalars['PhoneNumber']>,
  performedAt: Scalars['Datetime'],
  viaService: ServiceOption,
  carrierName?: Maybe<Scalars['String']>,
  phoneType: PhoneTypeEnum,
  rawResult?: Maybe<Scalars['JSON']>,
};

/** A condition to be used against `Lookup` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type LookupCondition = {
  /** Checks for equality with the object’s `phoneNumber` field. */
  phoneNumber?: Maybe<Scalars['PhoneNumber']>,
  /** Checks for equality with the object’s `performedAt` field. */
  performedAt?: Maybe<Scalars['Datetime']>,
  /** Checks for equality with the object’s `viaService` field. */
  viaService?: Maybe<ServiceOption>,
  /** Checks for equality with the object’s `carrierName` field. */
  carrierName?: Maybe<Scalars['String']>,
  /** Checks for equality with the object’s `phoneType` field. */
  phoneType?: Maybe<PhoneTypeEnum>,
  /** Checks for equality with the object’s `rawResult` field. */
  rawResult?: Maybe<Scalars['JSON']>,
};

/** An input for mutations affecting `Lookup` */
export type LookupInput = {
  phoneNumber?: Maybe<Scalars['PhoneNumber']>,
  performedAt?: Maybe<Scalars['Datetime']>,
  viaService?: Maybe<ServiceOption>,
  carrierName?: Maybe<Scalars['String']>,
  phoneType: PhoneTypeEnum,
  rawResult?: Maybe<Scalars['JSON']>,
};

/** A connection to a list of `Lookup` values. */
export type LookupsConnection = {
   __typename?: 'LookupsConnection',
  /** A list of `Lookup` objects. */
  nodes: Array<Maybe<Lookup>>,
  /** A list of edges which contains the `Lookup` and cursor to aid in pagination. */
  edges: Array<LookupsEdge>,
  /** Information to aid in pagination. */
  pageInfo: PageInfo,
  /** The count of *all* `Lookup` you could get from the connection. */
  totalCount: Scalars['Int'],
};

/** A `Lookup` edge in the connection. */
export type LookupsEdge = {
   __typename?: 'LookupsEdge',
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>,
  /** The `Lookup` at the end of the edge. */
  node?: Maybe<Lookup>,
};

/** Methods to use when ordering `Lookup`. */
export enum LookupsOrderBy {
  Natural = 'NATURAL',
  PhoneNumberAsc = 'PHONE_NUMBER_ASC',
  PhoneNumberDesc = 'PHONE_NUMBER_DESC',
  PerformedAtAsc = 'PERFORMED_AT_ASC',
  PerformedAtDesc = 'PERFORMED_AT_DESC',
  ViaServiceAsc = 'VIA_SERVICE_ASC',
  ViaServiceDesc = 'VIA_SERVICE_DESC',
  CarrierNameAsc = 'CARRIER_NAME_ASC',
  CarrierNameDesc = 'CARRIER_NAME_DESC',
  PhoneTypeAsc = 'PHONE_TYPE_ASC',
  PhoneTypeDesc = 'PHONE_TYPE_DESC',
  RawResultAsc = 'RAW_RESULT_ASC',
  RawResultDesc = 'RAW_RESULT_DESC'
}

/** The root mutation type which contains root level fields which mutate data. */
export type Mutation = {
   __typename?: 'Mutation',
  /** Creates a single `Access`. */
  createAccess?: Maybe<CreateAccessPayload>,
  /** Creates a single `Lookup`. */
  createLookup?: Maybe<CreateLookupPayload>,
  /** Creates a single `Request`. */
  createRequest?: Maybe<CreateRequestPayload>,
  /** Updates a single `Access` using its globally unique id and a patch. */
  updateAccessByNodeId?: Maybe<UpdateAccessPayload>,
  /** Updates a single `Access` using a unique key and a patch. */
  updateAccess?: Maybe<UpdateAccessPayload>,
  /** Updates a single `Access` using a unique key and a patch. */
  updateAccessByPhoneNumberAndRequestId?: Maybe<UpdateAccessPayload>,
  /** Deletes a single `Access` using its globally unique id. */
  deleteAccessByNodeId?: Maybe<DeleteAccessPayload>,
  /** Deletes a single `Access` using a unique key. */
  deleteAccess?: Maybe<DeleteAccessPayload>,
  /** Deletes a single `Access` using a unique key. */
  deleteAccessByPhoneNumberAndRequestId?: Maybe<DeleteAccessPayload>,
  /** Deletes a single `Request` using its globally unique id. */
  deleteRequestByNodeId?: Maybe<DeleteRequestPayload>,
  /** Deletes a single `Request` using a unique key. */
  deleteRequest?: Maybe<DeleteRequestPayload>,
  closeRequest?: Maybe<CloseRequestPayload>,
  requestProgress?: Maybe<RequestProgressPayload>,
  addPhoneNumbersToRequest: AddPhoneNumbersToRequestPayload,
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateAccessArgs = {
  input: CreateAccessInput
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateLookupArgs = {
  input: CreateLookupInput
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateRequestArgs = {
  input: CreateRequestInput
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateAccessByNodeIdArgs = {
  input: UpdateAccessByNodeIdInput
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateAccessArgs = {
  input: UpdateAccessInput
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateAccessByPhoneNumberAndRequestIdArgs = {
  input: UpdateAccessByPhoneNumberAndRequestIdInput
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteAccessByNodeIdArgs = {
  input: DeleteAccessByNodeIdInput
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteAccessArgs = {
  input: DeleteAccessInput
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteAccessByPhoneNumberAndRequestIdArgs = {
  input: DeleteAccessByPhoneNumberAndRequestIdInput
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteRequestByNodeIdArgs = {
  input: DeleteRequestByNodeIdInput
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteRequestArgs = {
  input: DeleteRequestInput
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCloseRequestArgs = {
  input: CloseRequestInput
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationRequestProgressArgs = {
  input: RequestProgressInput
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationAddPhoneNumbersToRequestArgs = {
  input: AddPhoneNumbersToRequestInput
};

/** An object with a globally unique `ID`. */
export type Node = {
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'],
};

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


export enum PhoneTypeEnum {
  Landline = 'LANDLINE',
  Mobile = 'MOBILE',
  Voip = 'VOIP',
  Unknown = 'UNKNOWN',
  Invalid = 'INVALID'
}

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
  /** Reads and enables pagination through a set of `Access`. */
  accesses?: Maybe<AccessesConnection>,
  /** Reads and enables pagination through a set of `Lookup`. */
  lookups?: Maybe<LookupsConnection>,
  /** Reads and enables pagination through a set of `RequestResult`. */
  requestResults?: Maybe<RequestResultsConnection>,
  /** Reads and enables pagination through a set of `Request`. */
  requests?: Maybe<RequestsConnection>,
  access?: Maybe<Access>,
  accessByPhoneNumberAndRequestId?: Maybe<Access>,
  requestResult?: Maybe<RequestResult>,
  request?: Maybe<Request>,
  /** Reads a single `Access` using its globally unique `ID`. */
  accessByNodeId?: Maybe<Access>,
  /** Reads a single `RequestResult` using its globally unique `ID`. */
  requestResultByNodeId?: Maybe<RequestResult>,
  /** Reads a single `Request` using its globally unique `ID`. */
  requestByNodeId?: Maybe<Request>,
};


/** The root query type which gives access points into the data universe. */
export type QueryNodeArgs = {
  nodeId: Scalars['ID']
};


/** The root query type which gives access points into the data universe. */
export type QueryAccessesArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['Cursor']>,
  after?: Maybe<Scalars['Cursor']>,
  orderBy?: Maybe<Array<AccessesOrderBy>>,
  condition?: Maybe<AccessCondition>
};


/** The root query type which gives access points into the data universe. */
export type QueryLookupsArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['Cursor']>,
  after?: Maybe<Scalars['Cursor']>,
  orderBy?: Maybe<Array<LookupsOrderBy>>,
  condition?: Maybe<LookupCondition>
};


/** The root query type which gives access points into the data universe. */
export type QueryRequestResultsArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['Cursor']>,
  after?: Maybe<Scalars['Cursor']>,
  orderBy?: Maybe<Array<RequestResultsOrderBy>>,
  condition?: Maybe<RequestResultCondition>
};


/** The root query type which gives access points into the data universe. */
export type QueryRequestsArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['Cursor']>,
  after?: Maybe<Scalars['Cursor']>,
  orderBy?: Maybe<Array<RequestsOrderBy>>,
  condition?: Maybe<RequestCondition>
};


/** The root query type which gives access points into the data universe. */
export type QueryAccessArgs = {
  id: Scalars['UUID']
};


/** The root query type which gives access points into the data universe. */
export type QueryAccessByPhoneNumberAndRequestIdArgs = {
  phoneNumber: Scalars['PhoneNumber'],
  requestId: Scalars['UUID']
};


/** The root query type which gives access points into the data universe. */
export type QueryRequestResultArgs = {
  phoneNumber: Scalars['PhoneNumber']
};


/** The root query type which gives access points into the data universe. */
export type QueryRequestArgs = {
  id: Scalars['UUID']
};


/** The root query type which gives access points into the data universe. */
export type QueryAccessByNodeIdArgs = {
  nodeId: Scalars['ID']
};


/** The root query type which gives access points into the data universe. */
export type QueryRequestResultByNodeIdArgs = {
  nodeId: Scalars['ID']
};


/** The root query type which gives access points into the data universe. */
export type QueryRequestByNodeIdArgs = {
  nodeId: Scalars['ID']
};

export type Request = Node & {
   __typename?: 'Request',
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'],
  id: Scalars['UUID'],
  clientId: Scalars['UUID'],
  createdAt: Scalars['Datetime'],
  closedAt?: Maybe<Scalars['Datetime']>,
  completedAt?: Maybe<Scalars['Datetime']>,
  /** Reads and enables pagination through a set of `Access`. */
  accesses: AccessesConnection,
  /** Reads and enables pagination through a set of `RequestResult`. */
  requestResults: RequestResultsConnection,
  progress?: Maybe<Scalars['BigFloat']>,
};


export type RequestAccessesArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['Cursor']>,
  after?: Maybe<Scalars['Cursor']>,
  orderBy?: Maybe<Array<AccessesOrderBy>>,
  condition?: Maybe<AccessCondition>
};


export type RequestRequestResultsArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['Cursor']>,
  after?: Maybe<Scalars['Cursor']>,
  orderBy?: Maybe<Array<RequestResultsOrderBy>>,
  condition?: Maybe<RequestResultCondition>
};

/** A condition to be used against `Request` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type RequestCondition = {
  /** Checks for equality with the object’s `id` field. */
  id?: Maybe<Scalars['UUID']>,
  /** Checks for equality with the object’s `clientId` field. */
  clientId?: Maybe<Scalars['UUID']>,
  /** Checks for equality with the object’s `createdAt` field. */
  createdAt?: Maybe<Scalars['Datetime']>,
  /** Checks for equality with the object’s `closedAt` field. */
  closedAt?: Maybe<Scalars['Datetime']>,
  /** Checks for equality with the object’s `completedAt` field. */
  completedAt?: Maybe<Scalars['Datetime']>,
};

/** An input for mutations affecting `Request` */
export type RequestInput = {
  id?: Maybe<Scalars['UUID']>,
  clientId?: Maybe<Scalars['UUID']>,
  createdAt?: Maybe<Scalars['Datetime']>,
  closedAt?: Maybe<Scalars['Datetime']>,
  completedAt?: Maybe<Scalars['Datetime']>,
};

/** All input for the `requestProgress` mutation. */
export type RequestProgressInput = {
  /** 
 * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
 **/
  clientMutationId?: Maybe<Scalars['String']>,
  requestId?: Maybe<Scalars['UUID']>,
};

/** The output of our `requestProgress` mutation. */
export type RequestProgressPayload = {
   __typename?: 'RequestProgressPayload',
  /** 
 * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
 **/
  clientMutationId?: Maybe<Scalars['String']>,
  requestProgressResult?: Maybe<RequestProgressResult>,
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>,
};

export type RequestProgressResult = {
   __typename?: 'RequestProgressResult',
  completedAt?: Maybe<Scalars['Datetime']>,
  progress?: Maybe<Scalars['BigFloat']>,
};

export type RequestResult = Node & {
   __typename?: 'RequestResult',
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'],
  requestId?: Maybe<Scalars['UUID']>,
  phoneNumber: Scalars['PhoneNumber'],
  phoneType?: Maybe<PhoneTypeEnum>,
  /** Reads a single `Request` that is related to this `RequestResult`. */
  request?: Maybe<Request>,
};

/** 
 * A condition to be used against `RequestResult` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 **/
export type RequestResultCondition = {
  /** Checks for equality with the object’s `requestId` field. */
  requestId?: Maybe<Scalars['UUID']>,
  /** Checks for equality with the object’s `phoneNumber` field. */
  phoneNumber?: Maybe<Scalars['PhoneNumber']>,
  /** Checks for equality with the object’s `phoneType` field. */
  phoneType?: Maybe<PhoneTypeEnum>,
};

/** A connection to a list of `RequestResult` values. */
export type RequestResultsConnection = {
   __typename?: 'RequestResultsConnection',
  /** A list of `RequestResult` objects. */
  nodes: Array<Maybe<RequestResult>>,
  /** A list of edges which contains the `RequestResult` and cursor to aid in pagination. */
  edges: Array<RequestResultsEdge>,
  /** Information to aid in pagination. */
  pageInfo: PageInfo,
  /** The count of *all* `RequestResult` you could get from the connection. */
  totalCount: Scalars['Int'],
};

/** A `RequestResult` edge in the connection. */
export type RequestResultsEdge = {
   __typename?: 'RequestResultsEdge',
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>,
  /** The `RequestResult` at the end of the edge. */
  node?: Maybe<RequestResult>,
};

/** Methods to use when ordering `RequestResult`. */
export enum RequestResultsOrderBy {
  Natural = 'NATURAL',
  RequestIdAsc = 'REQUEST_ID_ASC',
  RequestIdDesc = 'REQUEST_ID_DESC',
  PhoneNumberAsc = 'PHONE_NUMBER_ASC',
  PhoneNumberDesc = 'PHONE_NUMBER_DESC',
  PhoneTypeAsc = 'PHONE_TYPE_ASC',
  PhoneTypeDesc = 'PHONE_TYPE_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

/** A connection to a list of `Request` values. */
export type RequestsConnection = {
   __typename?: 'RequestsConnection',
  /** A list of `Request` objects. */
  nodes: Array<Maybe<Request>>,
  /** A list of edges which contains the `Request` and cursor to aid in pagination. */
  edges: Array<RequestsEdge>,
  /** Information to aid in pagination. */
  pageInfo: PageInfo,
  /** The count of *all* `Request` you could get from the connection. */
  totalCount: Scalars['Int'],
};

/** A `Request` edge in the connection. */
export type RequestsEdge = {
   __typename?: 'RequestsEdge',
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>,
  /** The `Request` at the end of the edge. */
  node?: Maybe<Request>,
};

/** Methods to use when ordering `Request`. */
export enum RequestsOrderBy {
  Natural = 'NATURAL',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  ClientIdAsc = 'CLIENT_ID_ASC',
  ClientIdDesc = 'CLIENT_ID_DESC',
  CreatedAtAsc = 'CREATED_AT_ASC',
  CreatedAtDesc = 'CREATED_AT_DESC',
  ClosedAtAsc = 'CLOSED_AT_ASC',
  ClosedAtDesc = 'CLOSED_AT_DESC',
  CompletedAtAsc = 'COMPLETED_AT_ASC',
  CompletedAtDesc = 'COMPLETED_AT_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

export enum ServiceOption {
  Telnyx = 'TELNYX'
}

/** All input for the `updateAccessByNodeId` mutation. */
export type UpdateAccessByNodeIdInput = {
  /** 
 * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
 **/
  clientMutationId?: Maybe<Scalars['String']>,
  /** The globally unique `ID` which will identify a single `Access` to be updated. */
  nodeId: Scalars['ID'],
  /** An object where the defined keys will be set on the `Access` being updated. */
  patch: AccessPatch,
};

/** All input for the `updateAccessByPhoneNumberAndRequestId` mutation. */
export type UpdateAccessByPhoneNumberAndRequestIdInput = {
  /** 
 * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
 **/
  clientMutationId?: Maybe<Scalars['String']>,
  /** An object where the defined keys will be set on the `Access` being updated. */
  patch: AccessPatch,
  phoneNumber: Scalars['PhoneNumber'],
  requestId: Scalars['UUID'],
};

/** All input for the `updateAccess` mutation. */
export type UpdateAccessInput = {
  /** 
 * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
 **/
  clientMutationId?: Maybe<Scalars['String']>,
  /** An object where the defined keys will be set on the `Access` being updated. */
  patch: AccessPatch,
  id: Scalars['UUID'],
};

/** The output of our update `Access` mutation. */
export type UpdateAccessPayload = {
   __typename?: 'UpdateAccessPayload',
  /** 
 * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
 **/
  clientMutationId?: Maybe<Scalars['String']>,
  /** The `Access` that was updated by this mutation. */
  access?: Maybe<Access>,
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>,
  /** Reads a single `Request` that is related to this `Access`. */
  request?: Maybe<Request>,
  /** An edge for our `Access`. May be used by Relay 1. */
  accessEdge?: Maybe<AccessesEdge>,
};


/** The output of our update `Access` mutation. */
export type UpdateAccessPayloadAccessEdgeArgs = {
  orderBy?: Maybe<Array<AccessesOrderBy>>
};

