import express from 'express'
import { ApolloServer } from 'apollo-server-express'
import config from './configs'
import connectDB from './database/connection'
import context from './graphql/context'
import { schema } from './graphql'
connectDB()

// apollo server
const server = new ApolloServer({
  schema,
  context,
})
const app = express()
const path = '/graphql'
server.applyMiddleware({ app, path })

app.listen({ port: config.service.port }, () =>
  console.log(`Server ready at http://localhost:4000${server.graphqlPath}`)
)

export default server
