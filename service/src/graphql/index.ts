import { gql, makeExecutableSchema } from 'apollo-server-express'
import { mergeTypeDefs } from 'graphql-tools-merge-typedefs'
import merge  from 'lodash.merge'
import userResolver from './user/resolver'
import userTypeDefs from './user/typeDefs'

const root = gql`
  type Query {
    root: String
  }
  type Mutation {
    root: String
  }
`
const resolvers = merge ([userResolver])

const typeDefs = mergeTypeDefs([root, userTypeDefs, ])

export const schema = makeExecutableSchema({ resolvers, typeDefs })
