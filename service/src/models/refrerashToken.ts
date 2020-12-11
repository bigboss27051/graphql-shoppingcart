import mongoose from 'mongoose'
import dayjs from 'dayjs'
import crypto from 'crypto'
import IRefreshToken from '../interfaces/refreshToken'
const RefreshTokenSchema = new mongoose.Schema({
  token: {
    type: String,
    required: true,
    index: true,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  username: {
    type: 'String',
    ref: 'User',
    required: true,
  },
  expires: { type: Date },
})

RefreshTokenSchema.methods.generate = async function (
  user: any
): Promise<Document> {
  const userId = user._id
  const { username } = user
  const token = `${userId}.${crypto.randomBytes(40).toString('hex')}`
  const expires = dayjs().add(7, 'day').toDate()
  const tokenObject = new RefreshToken({
    token,
    userId,
    username,
    expires,
  })
  const result = await tokenObject.save()
  console.log('refresh', { result })
  return result
}
const RefreshToken = mongoose.model<IRefreshToken & Document>(
  'RefreshToken',
  RefreshTokenSchema
)
export default RefreshToken
