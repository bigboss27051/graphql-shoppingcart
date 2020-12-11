import { gql } from 'apollo-server-express'
const typeDefs = gql`
  scalar DateTime
  type Token {
    tokenType: String
    accessToken: String
    refreshToken: String
    expiresIn: DateTime
  }
  type User {
    _id: ID!
    username: String
    fullname: String
    token: Token
    createdAt: DateTime
    updatedAt: DateTime
  }
  type Query {
    getUsers: [User]
  }
  type Mutation {
    register(username: String!, password: String!, fullname: String!): User
    login(username: String!, password: String!): User
    refresh(username: String!, refreshToken: String!): Token
  }
`

export default typeDefs
