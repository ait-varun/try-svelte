// @ts-nocheck
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type Scalars = {
    Int: number,
    String: string,
    Float: number,
    Boolean: boolean,
}

export interface Query {
    /** Get a user by id */
    user: (User | null)
    /** Get all users */
    users: ((User | null)[] | null)
    /** Get all todos */
    todos: ((Todo | null)[] | null)
    __typename: 'Query'
}

export interface User {
    id: (Scalars['String'] | null)
    name: (Scalars['String'] | null)
    email: (Scalars['String'] | null)
    todos: ((Todo | null)[] | null)
    __typename: 'User'
}

export interface Todo {
    id: (Scalars['String'] | null)
    description: (Scalars['String'] | null)
    done: (Scalars['Boolean'] | null)
    __typename: 'Todo'
}

export interface Mutation {
    updateTodo: (Todo | null)
    __typename: 'Mutation'
}

export interface QueryGenqlSelection{
    /** Get a user by id */
    user?: (UserGenqlSelection & { __args?: {
    /** The id of the user */
    id?: (Scalars['String'] | null)} })
    /** Get all users */
    users?: UserGenqlSelection
    /** Get all todos */
    todos?: TodoGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface UpdateTodoInput {id?: (Scalars['String'] | null),description?: (Scalars['String'] | null),done?: (Scalars['Boolean'] | null)}

export interface UserGenqlSelection{
    id?: boolean | number
    name?: boolean | number
    email?: boolean | number
    todos?: TodoGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface TodoGenqlSelection{
    id?: boolean | number
    description?: boolean | number
    done?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface MutationGenqlSelection{
    updateTodo?: (TodoGenqlSelection & { __args: {
    /** Todo input */
    input: UpdateTodoInput} })
    __typename?: boolean | number
    __scalar?: boolean | number
}


    const Query_possibleTypes: string[] = ['Query']
    export const isQuery = (obj?: { __typename?: any } | null): obj is Query => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isQuery"')
      return Query_possibleTypes.includes(obj.__typename)
    }
    


    const User_possibleTypes: string[] = ['User']
    export const isUser = (obj?: { __typename?: any } | null): obj is User => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isUser"')
      return User_possibleTypes.includes(obj.__typename)
    }
    


    const Todo_possibleTypes: string[] = ['Todo']
    export const isTodo = (obj?: { __typename?: any } | null): obj is Todo => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isTodo"')
      return Todo_possibleTypes.includes(obj.__typename)
    }
    


    const Mutation_possibleTypes: string[] = ['Mutation']
    export const isMutation = (obj?: { __typename?: any } | null): obj is Mutation => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isMutation"')
      return Mutation_possibleTypes.includes(obj.__typename)
    }
    