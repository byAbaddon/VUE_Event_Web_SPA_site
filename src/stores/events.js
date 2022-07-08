import { defineStore } from 'pinia'
import { db} from '@/service/sdk'      
import { collection, onSnapshot } from "firebase/firestore";
import { ref, computed } from "vue";

export const useEventStore = defineStore('events', () => {

  let allEvents = ref([])
    onSnapshot(collection(db, "events"), (doc) => doc.docs.forEach(x => {
      let checkIsExist = allEvents.value.find(event => event.id == x.id)
      if (!checkIsExist) {
        const event = Object.assign({ id: x.id }, x.data())
        allEvents.value.push(event) 
      }
    }))
 

  // const computedAllEvents = computed(() => allEvents.value)
  

  return {
    allEvents,
    // computedAllEvents
  }
})