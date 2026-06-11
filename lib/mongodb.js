// lib/mongodb.js

// import { MongoClient } from 'mongodb'

// const uri = process.env.MONGODB_URI
// const options = {
//    // useNewUrlParser: true,
// }

// //let MongoClient
// let client
// let clientPromise

// if (!process.env.MONGODB_URI) {
//     throw new Error('Add Mongo URI to .env.local')
// }

// if (process.env.NODE_ENV === 'development') {
//     if (!global._mongoClientPromise) {
//         client = new MongoClient(uri, options)
//         global._mongoClientPromise = client.connect()
//     }
//     clientPromise = global._mongoClientPromise
// } else {
//     client = new MongoClient(uri, options)
//     clientPromise = client.connect()
// }

// export default clientPromise




import { MongoClient } from 'mongodb'

const uri = process.env.MONGODB_URI
const options = {}

let clientPromise

// Only connect if we're NOT in build phase
if (process.env.NEXT_PHASE !== 'phase-production-build') {
  if (!uri) {
    throw new Error('Add Mongo URI to .env.local')
  }
  
  const client = new MongoClient(uri, options)
  clientPromise = client.connect()
}

export default clientPromise