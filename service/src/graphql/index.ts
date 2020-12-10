import userResolver from './user/resolver'

export const resolvers = Object.assign(
  {
    Query: Object.assign({}, userResolver.Query, ),
    Mutation: Object.assign({}, userResolver.Mutation)
  })
