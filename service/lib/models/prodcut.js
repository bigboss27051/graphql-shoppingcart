"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
const ProductSchema = new Schema({
    name: { type: String },
    imageUrl: { type: String },
    price: { type: Number, default: 0 },
    quantity: { type: Number, default: 0 },
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now },
}, {
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
});
exports.default = mongoose_1.default.model('Product', ProductSchema);
//# sourceMappingURL=prodcut.js.map