import { MongoClient, ServerApiVersion } from 'mongodb'
import { collection, getDocs } from 'firebase/firestore'

import { config } from '$lib/mongodb/config'
import { db } from '$lib/firebase/db'

async function useMongoDB() {
  const client = new MongoClient(config.uri, {
    ...config.options,
    serverApi: ServerApiVersion.v1,
  })
  await client.connect()

  const collection = client.db('RidePal').collection('PalFoods')
  const results = await collection.find().toArray()
  await client.connect()

  results.forEach((item) => {
    item._id = item._id.toString()
  })

  return { results }
}

async function useFirestoreDB() {
  const collectionRef = collection(db, 'restaurants')
  const snapshot = await getDocs(collectionRef)

  let restaurants = []

  snapshot.docs.map((doc) => {
    restaurants.push(doc.data())
  })

  return restaurants
}

export async function load() {
  const results = useFirestoreDB()

  return { results: results }
}
