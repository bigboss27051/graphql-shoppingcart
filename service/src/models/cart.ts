import mongoose from 'mongoose'

const Schema = mongoose.Schema
const CartSchema  = new Schema({
  items: { type: [Schema.Types.Mixed] },
  isHold: { type: Boolean, },
  _customerId: Schema.Types.ObjectId,
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
})

export default mongoose.model('Cart', CartSchema);