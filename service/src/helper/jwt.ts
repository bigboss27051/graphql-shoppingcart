import RefreshToken from "../models/refrerashToken"
import dayjs from 'dayjs'
import config from "../configs"

export const generateToken = async (user: any, accessToken: string) => {
  const refreshTokenModel = new RefreshToken()
  const tokenType = 'Bearer'
  const result = await refreshTokenModel.generate(user)
  const expiresIn = dayjs().add(config.jwt.jwtExpirationInterval, 'm').toDate()
  return {
    tokenType,
    accessToken,
    refreshToken: result.get('token'),
    expiresIn
  }
}

