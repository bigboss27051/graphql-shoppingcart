import express, { Request, Response } from 'express'
import { ApolloServer } from 'apollo-server-express'
import config from './configs'
import connectDB from './database/connection'
const app = express()
connectDB()
app.get('/', (req: Request, res: Response) => {
  res.send(`Server is now running on http://localhost:${config.service.port}`)
})

// apollo server
const server = new ApolloServer({ 
  typeDefs, 
  resolvers,
  context
});
server.applyMiddleware({ app });

app.listen(config.service.port, () => console.log(`Server is now running on http://localhost:${config.service.port}`))