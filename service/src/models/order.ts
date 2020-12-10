import mongoose from 'mongoose'

const Schema = mongoose.Schema
const OrderSchema  = new Schema({
  orderItem: { type: [Schema.Types.Mixed] },
  _customerId: Schema.Types.ObjectId,
  quantity: { type: Number, default: 0 },
  status: { type: String },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
}, {
  timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
})

export default mongoose.model('Order', OrderSchema);