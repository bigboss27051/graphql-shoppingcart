import { ForbiddenError } from 'apollo-server-express';
import { createUser as createUserService } from '../../repositories/user'
import User from '../../models/user'
import { RESPONSE_MESSAGE } from '../../common/constanst'

const resolvers = {
  Query: {
    getAll: async (root, args: any, context: any) => {
      if (!context.loggedInUser) throw new ForbiddenError(RESPONSE_MESSAGE.AUTH_FAIL);
      return User.find({});
    },
  },
  Mutation: {
    createUser: async (root, args: any) => {
      try {
        const { username = '', password = '', fullname = '' } = args
        const result = await createUserService(username, password, fullname)
        return result
      } catch (error) {
        throw error
      }
    },
  },
}

export default resolvers