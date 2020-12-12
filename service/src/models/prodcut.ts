import mongoose from 'mongoose'

const Schema = mongoose.Schema
const ProductSchema = new Schema({
  name: { type: String },
  detail: { type: String },
  imageUrl: { type: String },
  price: { type: Number, default: 0 },
  quantity: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
})

export default mongoose.model('Product', ProductSchema)
