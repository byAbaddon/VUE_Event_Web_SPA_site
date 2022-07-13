<template>
  <div>
    <div class="mt-4 d-flex justify-space-around">
      <h3 class="title mt-2 pa-2 text-center text-blue">
        {{
          `${
            !userData.isAuth ? "Cannot find any event..." : "Organize New Event"
          }`
        }}
        <span>
          <v-btn
            class=""
            color="red"
            variant="outlined"
            size="small"
            to="/events/add"
          >
            {{ `${!userData.isAuth ? "Create first" : "Create"}` }}</v-btn
          >
        </span>
      </h3>
    </div>

    <!-- list of events -->
    <div>
      <v-row class="d-flex align-center ma-4 mt-0">
        <v-col v-for="(event, index) in events.allEvents" :key="index">
          <v-card
            class="mx-auto bg-grey-darken-3 mt-12"
            min-width="300"
            max-width="300"
          >
            <v-card-title class=""
              ><span class="mx-auto">{{ event.title }}</span></v-card-title
            >
            <v-img :src="event.image" height="200" cover></v-img>

            <v-card-subtitle> </v-card-subtitle>

            <v-card-actions>
              <p class="text-body-2 ml-2">Click button to see...</p>
              <v-spacer></v-spacer>

              <!-- dialog-->
              <v-row justify="center">
                <v-dialog
                  transition="dialog-center-transition"
                  v-model="dialog"
                  max-width="600"
                  min-width="600"
                  max-height="600"
                  min-height="600"
                  class="bg-grey-darken-3" 
                >
                  <template v-slot:activator="{ props }">
                    <v-btn
                      v-bind="props"
                      :id="index"
                      width="100"
                      class="bg-success"
                      color="white"
                      prepend-icon="mdi-swap-vertical-bold"
                      @click="showMoreDetails(event.id)"
                      >More
                    </v-btn>
                  </template>

                
                    <v-card-title class="mx-auto mb-8 text-decoration-underline">  {{currentEventData.title}} </v-card-title>
                    <v-img :src="currentEventData.image" width="400"   height="200" cover  class="mx-auto" ></v-img>
                    <v-divider></v-divider>

                    <v-card-text>
                      <h3 class=" mb-1 text-decoration-underline">
                        Description:
                      </h3>
                      <p class="text-teal"  >{{ currentEventData.description }}</p>
                      <h3 class=" mb-1 text-decoration-underline">
                        Date:
                        <span class="font-weight-light text-teal">
                          {{ currentEventData.date }}</span
                        >
                      </h3>
                      <h3 class=" mb-1 text-decoration-underline">
                        People interested in:
                        <span class="font-weight-light text-teal">{{
                          currentEventData.people
                        }}</span>
                      </h3>
                      <h3 class=" mb-1 text-decoration-underline">
                        Organizer:
                        <span class="font-weight-light text-teal">
                          {{ userData.data.displayName }}</span
                        >
                      </h3>
                    </v-card-text>

                    <v-card-actions class="d-flex justify-space-around">
                      
                      <v-btn
                        v-show="eventOwnerUid != currentEventData.organizer"
                        class="bg-primary pa-2 mr-12"
                        rounded="4"
                        append-icon="mdi-thumb-up"
                        color=""
                        variant="outlined"
                      >
                        Join the event
                      </v-btn>
                    
                
                      <v-btn
                        v-show="eventOwnerUid == currentEventData.organizer"
                        class="bg-warning pa-2"
                        rounded="4"
                        append-icon="mdi-square-edit-outline"
                        color=""
                        variant="outlined"
                       
                        :to="{ name: 'edit', params: { id: currentEventData.id }}"
                        >Edit event
                      </v-btn>
                    
                       <v-btn
                        v-show="eventOwnerUid == currentEventData.organizer"
                        class="bg-error pa-2"
                        rounded="4"
                        append-icon="mdi-delete"
                        variant="outlined"
                        @click="onDeleteEvent(currentEventData.id)"
                        >Delete event
                      </v-btn>

                         <v-btn 
                         width="100"
                        class="bg-success pa-2"
                        rounded="4"
                        append-icon="mdi-exit-run"
                        variant="outlined"
                        @click="dialog = false"
                        >Exit
                      </v-btn>

                    </v-card-actions>
                
                 
                </v-dialog>
              </v-row>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script setup>

import { onMounted, ref, watch } from "vue";
import { deleteData } from "@/service/deleteData";
import { useDataStore } from "@/stores/userData";
import { useEventStore } from "@/stores/events";
import {  useRouter } from "vue-router";


let router = useRouter()
const userData = ref(useDataStore())
const events = useEventStore()

onMounted(() =>  events.updateEvents())

watch(events.allEvents, (n, o) => {
  console.log('new ', n, '\n', 'old ', o);
})

const eventOwnerUid = ref(JSON.parse(localStorage.getItem("auth")).uid);
let dialog = ref(false);
let currentEventData = ref('')

const showMoreDetails = (id) => {
  const getEventData = events.allEvents.find(x => x.id == id)
  // const { date, description, image, organizer, rating, title } = currentEventData
  currentEventData.value = getEventData
};


const onDeleteEvent = id => {  
  deleteData(id)
    .then(() => {   
      events.updateEvents()
      setTimeout(() =>dialog.value = false, 10)
      console.log('Event was be deleted success.',)
      // events.computedAllEvents
      
    })
    .catch(e => console.log('Fail to delete event', e.message))
}


</script>

 <style scoped>
.title {
  border: 3px dotted blue;
  inline-size: 20em;
  border-radius: 6px;
  animation-name: changeColorTitle;
  animation-duration: 3s;
  animation-iteration-count: infinite;
}

@keyframes changeColorTitle {
  from {
    border-color: red;
  }
  to {
    border-color: rgb(0, 110, 255);
  }
}
</style>