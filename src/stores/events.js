import { defineStore } from 'pinia'
import { db} from '@/service/sdk'      
import { collection, onSnapshot } from "firebase/firestore";
import { ref,  onMounted } from "vue";

export const useEventStore = defineStore('events', () => {

  let allEvents = ref([])

  onMounted(() =>
    onSnapshot(collection(db, "events"), (doc) => doc.docs.forEach(x => {
      let checkIsExist = allEvents.value.find(event => event.title == x.data().title)
      if (!checkIsExist) 
         allEvents.value.push(x.data()) 
    }))
  )

  // const web = computed(() =>  allEvents  )


  return {
    allEvents
  }
})