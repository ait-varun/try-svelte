// @ts-nocheck
import type { RootGenqlSelection, Root } from './schema'
import {
  linkTypeMap,
  createClient as createClientOriginal,
  generateGraphqlOperation,
  type FieldsSelection,
  type GraphqlOperation,
  type ClientOptions,
  GenqlError,
} from './runtime'
export type { FieldsSelection } from './runtime'
export { GenqlError }

import types from './types'
export * from './schema'
const typeMap = linkTypeMap(types as any)

export interface Client {
  query<R extends RootGenqlSelection>(
    request: R & { __name?: string },
  ): Promise<FieldsSelection<Root, R>>
}

export const createClient = function (options?: ClientOptions): Client {
  return createClientOriginal({
    url: 'https://swapi-graphql.netlify.app/.netlify/functions/index',

    ...options,
    queryRoot: typeMap.Query!,
    mutationRoot: typeMap.Mutation!,
    subscriptionRoot: typeMap.Subscription!,
  }) as any
}

export const everything = {
  __scalar: true,
}

export type QueryResult<fields extends RootGenqlSelection> = FieldsSelection<
  Root,
  fields
>
export const generateQueryOp: (
  fields: RootGenqlSelection & { __name?: string },
) => GraphqlOperation = function (fields) {
  return generateGraphqlOperation('query', typeMap.Query!, fields as any)
}
