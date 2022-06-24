import { db } from '@/service/sdk'
import { collection, addDoc } from "firebase/firestore"; 

const addData = async (newEventObj) => {

  try {
    const docRef = await addDoc(collection(db, "events"), {
      ...newEventObj
    })
    console.log("Document written with ID: ", docRef.id)
    return docRef.id
  } catch (e) {
    console.error("Error adding document: ", e)
    return e
  }

}


export { addData }