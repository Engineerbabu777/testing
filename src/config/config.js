import fastifySession from '@fastify/session'
import ConnectMongoDBSession from 'connect-mongodb-session'
import 'dotenv/config'
import { Admin } from '../models/user.model.js'

const MongoDBStore = ConnectMongoDBSession(fastifySession)

export const sessionStore = new MongoDBStore({
  uri: process.env.MONGO_URI,
  collection: 'sessions'
})

sessionStore.on('error', error => {
  console.log(error)
})

export const authenticate = async (email, password) => {
  if (email && password) {
    const user = await Admin.findOne({email});

    if(!user){return null}
    if(user?.password !== password){return null}

    return Promise.resolve({email,password});
  }

  return null
}

export const PORT = process.env.PORT || 3000
export const COOKIE_PASSWORD = process.env.COOKIE_PASSWORD
