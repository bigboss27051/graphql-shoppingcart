import { gql } from 'apollo-server-express'
const typeDefs = gql`
  type Cart {
    _id: ID!
    items: [Product]
    isHold: Boolean
    _customerId: String
    createdAt: DateTime
    updatedAt: DateTime
  }
  type Query {
    getCart: Cart
  }
  input InputProductInCart {
    _id: String!
    name: String!
    detail: String
    imageUrl: String!
    pricePerItem: Float!
    quantity: Float!
  }
  input CartInput {
    items: [InputProductInCart]
    isHold: Boolean
    _customerId: String
  }
  type Mutation {
    createCart(input: CartInput): Cart
    updateCart(id: ID!, dataUpdate: CartInput): Cart
  }
`

export default typeDefs
