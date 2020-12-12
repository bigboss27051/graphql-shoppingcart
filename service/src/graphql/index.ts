import { makeExecutableSchema } from 'apollo-server-express'
import { mergeTypeDefs } from 'graphql-tools-merge-typedefs'
import merge from 'lodash.merge'
import userResolver from './user/resolver'
import userTypeDefs from './user/typeDefs'
import productResolver from './product/resolver'
import productTypeDefs from './product/typeDefs'
import cartResolver from './cart/resolver'
import cartTypeDefs from './cart/typeDefs'
import orderResolver from './order/resolver'
import orderTypeDefs from './order/typeDefs'

const resolvers = merge([
  userResolver,
  productResolver,
  cartResolver,
  orderResolver,
])

const typeDefs = mergeTypeDefs([
  userTypeDefs,
  productTypeDefs,
  cartTypeDefs,
  orderTypeDefs,
])

export const schema = makeExecutableSchema({ resolvers, typeDefs })
