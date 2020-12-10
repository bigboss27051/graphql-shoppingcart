require('dotenv').config()

const configs = {
  'develop': {
    database: {
      host: 'localhost',
      port: 27017,
      name: 'shoppingcart'
    },
    service: {
      port: 3600
    },
    jwt: {
      secretKey: 'sh@pp1ngCartSecret'
    }
  }
}

const env = process.env.NODE_ENV
console.log({ env });
let config: any
if (env) {
  config = configs[env]
}
export default config 