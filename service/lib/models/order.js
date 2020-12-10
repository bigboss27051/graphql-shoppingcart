"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
const OrderSchema = new Schema({
    orderItem: { type: [Schema.Types.Mixed] },
    _customerId: Schema.Types.ObjectId,
    quantity: { type: Number, default: 0 },
    status: { type: String },
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now },
}, {
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
});
exports.default = mongoose_1.default.model('Order', OrderSchema);
//# sourceMappingURL=order.js.map