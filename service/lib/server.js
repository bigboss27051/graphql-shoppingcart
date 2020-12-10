"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const configs_1 = __importDefault(require("./configs"));
const connection_1 = __importDefault(require("./database/connection"));
const server = express_1.default();
connection_1.default();
server.get('/', (req, res) => {
    res.send(`Server is now running on http://localhost:${configs_1.default.service.port}`);
});
server.listen(configs_1.default.service.port, () => console.log(`Server is now running on http://localhost:${configs_1.default.service.port}`));
//# sourceMappingURL=server.js.map