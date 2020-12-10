"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const configs_1 = __importDefault(require("../configs"));
const connectDB = async () => {
    try {
        mongoose_1.default.Promise = global.Promise;
        mongoose_1.default.connect(`mongodb://${configs_1.default.database.host}:${configs_1.default.database.port}/${configs_1.default.database.name}`, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
        });
        // Connection MongoDB URL
        const db = mongoose_1.default.connection;
        db.on('error', console.error.bind(console, 'connection error:'));
        db.once('open', () => {
            console.log(`DB Connected on ${configs_1.default.database.host}:${configs_1.default.database.port}/${configs_1.default.database.name}`);
        });
    }
    catch (error) {
        console.log('error database');
        console.log({ error });
    }
};
exports.default = connectDB;
//# sourceMappingURL=connection.js.map