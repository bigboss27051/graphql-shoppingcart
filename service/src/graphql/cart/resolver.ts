import { ForbiddenError } from 'apollo-server-express'
import { RESPONSE_MESSAGE } from '../../common/constanst'
import Cart from '../../models/prodcut'
const resolver = {
  Query: {
    getCart: async (root, args: any, context: any) => {
      if (!context.loggedInUser)
        throw new ForbiddenError(RESPONSE_MESSAGE.AUTH_FAIL)
      const { customerId } = args
      return await Cart.findOne({ _customerId: customerId, isHold: true }).exec()
    },
  },
  Mutation: {
    createCart: async (root, args: any, context: any) => {
      if (!context.loggedInUser)
        throw new ForbiddenError(RESPONSE_MESSAGE.AUTH_FAIL)
      const {
        input: { customerId = '', isHold = false, items = [] },
      } = args
      const CartModel = new Cart({
        _customerId: customerId,
        isHold,
        items,
      })
      const res = await CartModel.save()
      return {
        _id: res.id,
        _customerId: customerId,
        isHold,
        items,
        createdAt: res.get('createdAt'),
        updatedAt: res.get('updatedAt'),
      }
    },
    updateCart: async (root, args: any, context: any) => {
      if (!context.loggedInUser)
        throw new ForbiddenError(RESPONSE_MESSAGE.AUTH_FAIL)
      const { id, dateUpdate } = args
      const res = await Cart.findByIdAndUpdate(id, dateUpdate).exec()
      return res
    },
  },
}

export default resolver
