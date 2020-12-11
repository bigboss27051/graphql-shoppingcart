import mongoose, { Document } from 'mongoose'
import * as bcrypt from 'bcryptjs'
import { SALT_WORK_FACTOR } from '../common/constanst'
import IUser from '../interfaces/user'

const Schema = mongoose.Schema
const UserSchema = new Schema({
  username: { type: String, required: true, index: { unique: true } },
  password: { type: String, required: true },
  fullname: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
})

UserSchema.pre<IUser & Document>('save', async function (next) {
  // only hash the password if it has been modified (or is new)
  if (!this.isModified('password')) return next()

  // generate a salt
  const salt = await bcrypt.genSalt(SALT_WORK_FACTOR)

  // hash the password using our new salt
  const hash = await bcrypt.hash(this.password, salt)
  this.password = hash
  next()
})

UserSchema.methods.comparePassword = async function (
  candidatePassword: string
): Promise<boolean> {
  console.log('this.password', this.password)
  const isMatch = await bcrypt.compare(candidatePassword, this.password)
  return isMatch
}

export default mongoose.model<IUser & Document>('User', UserSchema)
