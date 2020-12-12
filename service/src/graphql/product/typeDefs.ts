import { gql } from 'apollo-server-express'
const typeDefs = gql`
  type Product {
    _id: ID!
    name: String
    detail: String
    imageUrl: String
    price: Float
    quantity: Float
    createdAt: DateTime
    updatedAt: DateTime
  }
  type Query {
    getProduct: Product
    getProducts: [Product]
  }
  input ProductInput {
    name: String
    detail: String
    imageUrl: String
    price: Float
    quantity: Float
  }
  type Mutation {
    createProduct(input: ProductInput): Product
    updateProduct(id: ID!, dataUpdate: ProductInput): Product
  }
`

export default typeDefs
