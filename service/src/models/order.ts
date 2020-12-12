import mongoose from 'mongoose'

const Schema = mongoose.Schema
const OrderSchema  = new Schema({
  orderItem: { type: [Schema.Types.Mixed] },
  _customerId: Schema.Types.ObjectId,
  status: { type: String },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
})

export default mongoose.model('Order', OrderSchema);