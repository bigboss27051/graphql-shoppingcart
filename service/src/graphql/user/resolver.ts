import { ForbiddenError, ValidationError } from 'apollo-server-express'
import { GraphQLDateTime } from 'graphql-iso-date'
import dayjs from 'dayjs'
import { createUser as createUserService } from '../../repositories/user'
import User from '../../models/user'
import { RESPONSE_MESSAGE } from '../../common/constanst'
import { generateAccessToken, generateToken } from '../../helper/jwt'
import RefreshToken from '../../models/refrerashToken'

const resolver = {
  Query: {
    getUsers: async (root, args: any, context: any) => {
      if (!context.loggedInUser)
        throw new ForbiddenError(RESPONSE_MESSAGE.AUTH_FAIL)
      return await User.find({})
    },
  },
  Mutation: {
    register: async (root, args) => {
      const { username = '', password = '', fullname = '' } = args
      const result = await createUserService(username, password, fullname)
      const tokenStr = generateAccessToken(result)
      const token = generateToken(result, tokenStr)
      return { ...result, token }
    },
    login: async (root, args) => {
      const { username = '', password = '' } = args
      let result = await User.findOne({ username })
      if (result == null) {
        console.log('result null')
        throw new ForbiddenError(RESPONSE_MESSAGE.INVALIDE_USER_OR_PASSWORD)
      }
      const isMatch = await result.comparePassword(password)
      if (!isMatch) {
        console.log('no match')
        throw new ForbiddenError(RESPONSE_MESSAGE.INVALIDE_USER_OR_PASSWORD)
      }
      const tokenStr = generateAccessToken(result)
      const token = await generateToken(result, tokenStr)
      return {
        ...result.toObject(),
        token,
      }
    },
    refresh: async (root, args) => {
      const { username = '', refreshToken = '' } = args
      const refreshObject = await RefreshToken.findOneAndDelete({
        username,
        token: refreshToken,
      })
      if (refreshObject !== null) {
        const isBefore = dayjs().isBefore(dayjs(refreshObject.expires).locale())
        if (refreshObject && refreshObject.username === username && isBefore) {
          throw new ValidationError(RESPONSE_MESSAGE.INVALID_REFRESH_TOKEN)
        }

        const user = await User.findOne({ username }).exec()
        const tokenStr = generateAccessToken(user)
        const response = await generateToken(user, tokenStr)
        return response
      } else {
        throw new ValidationError(RESPONSE_MESSAGE.INVALID_REFRESH_TOKEN)
      }
    },
  },
  DateTime: GraphQLDateTime,
}

export default resolver
