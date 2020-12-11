import mongoose from 'mongoose'
export default interface IRefreshToken extends mongoose.Document {
  _id: string
  userId: string
  username: string
  fullname: string
  expires: string
  generate(user: any): Promise<mongoose.Document>
}
