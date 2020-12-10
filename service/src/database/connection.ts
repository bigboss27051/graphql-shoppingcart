import mongoose from 'mongoose'
import config from '../configs'

const connectDB = async (): Promise<void> => {
  try {
    mongoose.Promise = global.Promise
    mongoose.connect(
      `mongodb://${config.database.host}:${config.database.port}/${config.database.name}`,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
      }
    )

    // Connection MongoDB URL
    const db = mongoose.connection
    db.on('error', console.error.bind(console, 'connection error:'))
    db.once('open', () => {
      console.log(
        `DB Connected on ${config.database.host}:${config.database.port}/${config.database.name}`
      )
    })
  } catch (error) {
    console.log('error database')
    console.log({ error })
  }
}

export default connectDB
