import { ForbiddenError, ValidationError } from 'apollo-server-express'
import { GraphQLDateTime } from 'graphql-iso-date'
import jwt from 'jsonwebtoken'
import { createUser as createUserService } from '../../repositories/user'
import User from '../../models/user'
import { RESPONSE_MESSAGE } from '../../common/constanst'
import config from '../../configs'
import { generateToken } from '../../helper/jwt'
import RefreshToken from '../../models/refrerashToken'
import dayjs from 'dayjs'

const resolvers = {
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
      const tokenStr = jwt.sign(
        {
          data: result,
        },
        config.jwt.secretKey,
        { expiresIn: '1h' }
      )
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
      const tokenStr = jwt.sign(
        {
          data: result,
        },
        config.jwt.secretKey,
        { expiresIn: config.jwt.expiresIn }
      )
      const token = await generateToken(result, tokenStr)
      console.log({
        ...result.toObject(),
        token
      })
      return {
        ...result.toObject(),
        token
      }
    },
    refresh: async (root, args) => {
      const { username = '', refreshToken = '' } = args
      const refreshObject = await RefreshToken.findOneAndRemove({
        username,
        token: refreshToken
      })
      if (refreshObject && (refreshObject.username === username) && dayjs().isBefore(refreshObject.expires)) {
        throw new ValidationError(RESPONSE_MESSAGE.INVALID_REFRESH_TOKEN)
      }
    
      const res = await User.findOne({ username })
      const user = res?.toObject()
      const tokenStr = jwt.sign(
        {
          data: user,
        },
        config.jwt.secretKey,
        { expiresIn: config.jwt.expiresIn }
      )
      const response = await generateToken(user, tokenStr)
      return response
    },
  },
  DateTime: GraphQLDateTime,
}

export default resolvers
