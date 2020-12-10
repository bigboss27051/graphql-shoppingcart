import { gql } from 'apollo-server-express'

const typeDefs = gql`
  type User {
    id: ID
    username: String
    password: String
    fullname: String,
    createAt: String,
    updateAt: String
  }
  type Query {
    getAll: [User]
  }
  type Mutation {
    createUser(username: String!, password: String!, fullname: String!): Auth
  }
`

export default typeDefs