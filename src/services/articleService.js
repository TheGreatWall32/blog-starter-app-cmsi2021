// This service completely hides the data store from the rest of the app.
// No other part of the app knows how the data is stored. If anyone wants
// to read or write data, they have to go through this service.

// For this starter code, we use mock data, that is, data in memory that
// is pretty arbitrary. The service functions to create and fetch articles
// will just work on this fake data in memory.

// This intent is for you to fork this starter code and then replace the
// bodies of the service functions with code that fetches from a *real*
// database like Firebase Firestore.

import { db } from "../firebaseconfig"

import {
  collection, 
  query,
  getDocs,
  addDoc,
  orderBy,
  limit,
  Timestamp
} from "firebase/firestore"

export async function createArticle({ title, body }) {
  const data = {title, body, date: Timestamp.now()}
  const docRef = await addDoc(collection(db, "articles"), data)
  return {id: docRef.id, ...data}
}

export async function fetchArticles() {
  const snapshot = await getDocs(
    query(collection(db, "articles"), orderBy("date", "desc"), limit(20))
  )
  return snapshot.docs.map(doc => ({id: doc.id, ...doc.data()}))
}
