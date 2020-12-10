import mongoose, { Document } from 'mongoose'
import bcrypt from 'bcryptjs'
import { SALT_WORK_FACTOR } from '../common/constanst'
import IUser from '../interfaces/user'


const Schema = mongoose.Schema
const UserSchema = new Schema(
  {
    username: { type: String, required: true, index: { unique: true } },
    password: { type: String, required: true },
    fullname: { type: String, required: true },
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now },
  },
  {
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
  }
)

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
  const isMatch = await bcrypt.compare(this.password, candidatePassword)
  return isMatch
}

export default mongoose.model('User', UserSchema)