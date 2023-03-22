import { collection, getDocs, query, where } from 'firebase/firestore'

import { db } from '$lib/firebase/db'

async function retriveSingleData(slug) {
  const collectionRef = collection(db, 'restaurants')

  const Q = query(collectionRef, where('slug', '==', slug))
  const snapshot = await getDocs(Q)

  let restaurantDetail
  snapshot.forEach((doc) => {
    restaurantDetail = doc.data()
  })

  return restaurantDetail
}

export async function load({ params }) {
  const results = retriveSingleData(params.slug)

  return { results: results }
}
