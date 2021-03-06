require('dotenv').config()

const configs = {
  'develop': {
    database: {
      host: 'localhost',
      port: 27017,
      name: 'shoppingcart'
    },
    service: {
      port: 4000
    },
    jwt: {
      secretKey: 'sh@pp1ngCartSecret',
      jwtExpirationInterval: 1, 
      expiresIn: '1m'
    }
  }
}

const env = process.env.NODE_ENV
let config: any
if (env) {
  config = configs[env]
}
export default config 