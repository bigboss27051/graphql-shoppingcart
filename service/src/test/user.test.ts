import { createTestClient } from 'apollo-server-testing'
import { ApolloServer } from 'apollo-server-express'
import { schema } from '../graphql'

const { query } = createTestClient(new ApolloServer({ schema, mocks: true }))

test('get user check return value type', async () => {
  const GET_USERS = `
    {
      getUsers {
        username
      }
    }
  `
  const {
    data: { getUsers },
  } = await query({ query: GET_USERS })
  expect(typeof getUsers).toEqual('object')
})


test('get user check return value username', async () => {
  const GET_USERS = `
    {
      getUsers {
        username
      }
    }
  `
  const {
    data: { getUsers },
  } = await query({ query: GET_USERS })
  expect(getUsers[0].username).toEqual('Hello World')
})
