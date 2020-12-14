import { ForbiddenError } from 'apollo-server-express'
import { RESPONSE_MESSAGE } from '../../common/constanst'
import Product from '../../models/prodcut'
const resolver = {
  Query: {
    getProducts: async (root, args: any, context: any) => {
      return await Product.find({}).exec()
    },
    getProduct: async (root, args: any, context: any) => {
      if (!context.loggedInUser)
        throw new ForbiddenError(RESPONSE_MESSAGE.AUTH_FAIL)
      const { id } = args
      return await Product.findById(id).exec()
    },
  },
  Mutation: {
    createProduct: async (root, args: any, context: any) => {
      if (!context.loggedInUser)
        throw new ForbiddenError(RESPONSE_MESSAGE.AUTH_FAIL)
      const {
        input: {
          name = '',
          detail = '',
          imageUrl = '',
          price = '',
          quantity = '',
        },
      } = args
      const productMdel = new Product({
        name,
        detail,
        imageUrl,
        price,
        quantity,
      })
      const res = await productMdel.save()
      return {
        _id: res.id,
        name,
        detail,
        imageUrl,
        price,
        quantity,
        createdAt: res.get('createdAt'),
        updatedAt: res.get('updatedAt'),
      }
    },
    updateProduct: async (root, args: any, context: any) => {
      if (!context.loggedInUser)
        throw new ForbiddenError(RESPONSE_MESSAGE.AUTH_FAIL)
      const { id, dateUpdate } = args
      const res = await Product.findByIdAndUpdate(id, dateUpdate).exec()
      return res
    },
  },
}

export default resolver
