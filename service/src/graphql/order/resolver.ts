import { ForbiddenError } from 'apollo-server-express'
import { RESPONSE_MESSAGE } from '../../common/constanst'
import Order from '../../models/order'
const resolver = {
  Query: {
    getAllOrders: async (root, args: any, context: any) => {
      if (!context.loggedInUser)
        throw new ForbiddenError(RESPONSE_MESSAGE.AUTH_FAIL)
      return await Order.find({}).exec()
    },
    getOrder: async (root, args: any, context: any) => {
      if (!context.loggedInUser)
        throw new ForbiddenError(RESPONSE_MESSAGE.AUTH_FAIL)
      const { id } = args
      return await Order.findById(id).exec()
    },
    getOrdersByCondition: async (root, args: any, context: any) => {
      if (!context.loggedInUser)
        throw new ForbiddenError(RESPONSE_MESSAGE.AUTH_FAIL)
      const { input } = args
      return await Order.find(input).exec()
    },
  },
  Mutation: {
    createOrder: async (root, args: any, context: any) => {
      if (!context.loggedInUser)
        throw new ForbiddenError(RESPONSE_MESSAGE.AUTH_FAIL)
      const {
        input: { customerId = '', status = '', orderItem = [] },
      } = args
      const cartModel = new Order({
        _customerId: customerId,
        status,
        orderItem,
      })
      const res = await cartModel.save()
      return {
        _id: res.id,
        _customerId: customerId,
        status,
        orderItem,
        createdAt: res.get('createdAt'),
        updatedAt: res.get('updatedAt'),
      }
    },
    updateOrder: async (root, args: any, context: any) => {
      if (!context.loggedInUser)
        throw new ForbiddenError(RESPONSE_MESSAGE.AUTH_FAIL)
      const { id, dateUpdate } = args
      const res = await Order.findByIdAndUpdate(id, dateUpdate).exec()
      return res
    },
  },
}

export default resolver
