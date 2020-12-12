import { gql } from 'apollo-server-express'
const typeDefs = gql`
  type Order {
    _id: ID!
    orderItem: [Product]
    _customerId: String
    status: String
    createdAt: DateTime
    updatedAt: DateTime
  }
  type Query {
    getAllOrders: [Order]
    getOrder: Order
    getOrdersByCondition(input: OrderInput): [Order]
  }
  input InputProductInOrder {
    _id: String!
    name: String!
    detail: String
    imageUrl: String!
    pricePerItem: Float!
    quantity: Float!
  }
  input OrderInput {
    orderItem: [InputProductInOrder]
    _customerId: String
    status: String
  }
  type Mutation {
    createOrder(input: OrderInput): Order
    updateOrder(id: ID!, dataUpdate: OrderInput): Order
  }
`

export default typeDefs
