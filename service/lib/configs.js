"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config();
const configs = {
    'develop': {
        database: {
            host: 'localhost',
            port: 27017,
            name: 'shoppingcart'
        },
        service: {
            port: 3600
        }
    }
};
const env = process.env.NODE_ENV;
console.log({ env });
let config;
if (env) {
    config = configs[env];
}
exports.default = config;
//# sourceMappingURL=configs.js.map