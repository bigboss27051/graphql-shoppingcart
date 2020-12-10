import mongoose from 'mongoose'

const Schema = mongoose.Schema
const CartSchema  = new Schema({
  items: { type: [Schema.Types.Mixed] },
  isHold: { type: Boolean, },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
}, {
  timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
})

export default mongoose.model('Cart', CartSchema);