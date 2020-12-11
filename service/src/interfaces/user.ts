import mongoose from 'mongoose'
export default interface IUser extends mongoose.Document {
  _id: string
  username: string
  password?: string
  fullname: string
  createdAt: string
  updatedAt: string
  comparePassword(candidatePassword: string): Promise<boolean>
}
