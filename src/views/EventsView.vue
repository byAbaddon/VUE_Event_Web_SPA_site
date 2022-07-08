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
            class="mx-auto bg-grey-lighten-3 mt-12"
            min-width="300"
            max-width="300"
          >
            <v-card-title
              ><span class="mx-auto">{{ event.title }}</span></v-card-title
            >
            <v-img :src="event.image" height="200px" cover></v-img>

            <v-card-subtitle> </v-card-subtitle>

            <v-card-actions>
              <p class="">Click button to see...</p>
              <v-spacer></v-spacer>

              <!-- dialog-->
              <v-row justify="center">
                <v-dialog
                  transition="dialog-center-transition"
                  v-model="dialog"
                  max-width="600"
                  max-height="600"
                  class="bg-white"
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

                  <div>
                    <v-card-title>  {{currentEventData.title}} </v-card-title>
                    <v-img :src="currentEventData.image" height="200px" cover></v-img>
                    <v-divider></v-divider>

                    <v-card-text>
                      <h3 class="text-center mb-1 text-decoration-underline">
                        Description
                      </h3>
                      <p>{{ currentEventData.description }}</p>
                      <h3 class="text-center mb-1 text-decoration-underline">
                        Date:
                        <span class="font-weight-light text-blue">
                          {{ currentEventData.date }}</span
                        >
                      </h3>
                      <h3 class="text-center mb-1 text-decoration-underline">
                        People interested in:
                        <span class="font-weight-light text-blue">{{
                          currentEventData.people
                        }}</span>
                      </h3>
                      <h3 class="text-center mb-1 text-decoration-underline">
                        Organizer:
                        <span class="font-weight-light text-blue">
                          {{ currentEventData.organizer }}</span
                        >
                      </h3>
                    </v-card-text>

                    <v-card-actions class="d-flex justify-space-around">
                      <v-btn
                        v-show="eventOwnerUid != currentEventData.organizer"
                        class="bg-primary pa-2"
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
                      
                    </v-card-actions>
                  </div>
                  <v-spacer></v-spacer>

                  <v-btn color="green darken-1" text @click="dialog = false">
                    Agree
                  </v-btn>
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

import { onMounted, ref, } from "vue";
import { deleteData } from "@/service/deleteData";
import { useDataStore } from "@/stores/userData";
import { useEventStore } from "@/stores/events";
import {  useRouter } from "vue-router";


let router = useRouter()
const userData = useDataStore();
const events = useEventStore()


onMounted( () =>  events )



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
      // router.push('/')
      setTimeout(() =>dialog.value = false, 1000)
      console.log('Event was be deleted success.',)
      // events.computedAllEvents
      
    })
    .catch(e => console.log('Fail to delete event', e.message))
}

 


// console.log(events.allEvents);
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