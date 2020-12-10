import mongoose from 'mongoose'

const Schema = mongoose.Schema
const ProductSchema  = new Schema({
  name: { type: String },
  imageUrl: { type: String },
  price: { type: Number, default: 0},
  quantity: { type: Number, default: 0 },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
}, {
  timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
})

export default mongoose.model('Product', ProductSchema);
