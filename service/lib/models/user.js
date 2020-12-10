"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const constanst_1 = require("../common/constanst");
const Schema = mongoose_1.default.Schema;
const UserSchema = new Schema({
    username: { type: String, required: true, index: { unique: true } },
    password: { type: String, required: true },
    fullname: { type: String, required: true },
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now },
}, {
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
});
UserSchema.pre('save', async function (next) {
    // only hash the password if it has been modified (or is new)
    if (!this.isModified('password'))
        return next();
    // generate a salt
    const salt = await bcryptjs_1.default.genSalt(constanst_1.SALT_WORK_FACTOR);
    // hash the password using our new salt
    const hash = await bcryptjs_1.default.hash(this.password, salt);
    this.password = hash;
    next();
});
UserSchema.methods.comparePassword = async function (candidatePassword) {
    const isMatch = await bcryptjs_1.default.compare(this.password, candidatePassword);
    return isMatch;
};
exports.default = mongoose_1.default.model('User', UserSchema);
//# sourceMappingURL=user.js.map