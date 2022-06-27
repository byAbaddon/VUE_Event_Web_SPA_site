<template>
<div>

  <div class="mt-4 d-flex justify-space-around" >
     <h3 class="title mt-2 pa-2 text-center text-blue" > {{`${!userData.isAuth ? 'Cannot find any event...' : 'Organize New Event'}`}}
      <span>
        <v-btn
        class=""  
        color="red"
        variant="outlined"
        size="small"
        to="/events/add"
        > {{`${!userData.isAuth ? 'Create first' :'Create'}` }}</v-btn>
      </span>
     </h3>
  </div>

  <!-- list of events -->
  <div>
    <v-row class="d-flex align-center">
      <v-col v-for="(event, index) in events.allEvents" :key="index" >
        <v-card class="mx-auto bg-grey-lighten-3 mt-12" min-width="300" max-width="300">
          <v-card-title><span class="mx-auto">{{event.title}}</span></v-card-title>
          <v-img
            :src="event.image"
            height="200px"
            cover
          ></v-img>

          <v-card-subtitle> Explore 1,000 miles of wonder </v-card-subtitle>

          <v-card-actions>
            <p class="" >Click button to see more... </p>
            <v-spacer></v-spacer>
            <v-btn
              width="100"
              :class="`${ show ? 'bg-error' : 'bg-success'}`"
              color="white"
              :prepend-icon=" show ? 'mdi-chevron-up' : 'mdi-chevron-down'"
              variant="outlined"
              @click="showMoreDetails"
            >
             {{ `${show ? 'Less' :  'More'}`}} 
            </v-btn>

          </v-card-actions>

          <v-expand-transition>
            <div v-show="show">
              <v-divider></v-divider>

              <v-card-text>
                <h3 class="text-center mb-1 text-decoration-underline">
                  Description
                </h3>
                <p> {{event.description}}</p>
                <h3 class="text-center mb-1 text-decoration-underline">
                  Date: <span class="font-weight-light text-blue"> {{event.date}}</span>
                </h3>
                <h3 class="text-center mb-1 text-decoration-underline">
                  People interested in:
                  <span class="font-weight-light text-blue">{{event.people}}</span>
                </h3>
                <h3 class="text-center mb-1 text-decoration-underline">
                  Organizer:
                  <span class="font-weight-light text-blue"> {{event.organizer}}</span>
                </h3>
              </v-card-text>
              <v-card-actions class="d-flex justify-space-around">
                
                <v-btn
                v-show="eventOwnerUid != event.organizer"
                 class="bg-primary pa-2"
                 rounded="4"
                 append-icon="mdi-thumb-up"
                 color=""
                 variant="outlined"> Join the event </v-btn>

                  <v-btn
                 v-show="eventOwnerUid == event.organizer"
                 class="bg-warning pa-2"
                 rounded="4"
                 append-icon="mdi-square-edit-outline"
                 color=""
                 variant="outlined"
                   to="/events/edit"
                 >Edit event </v-btn>
              </v-card-actions>
            </div>
          </v-expand-transition>
        </v-card>
      </v-col>
    </v-row>
  </div>
 </div>
</template>

<script setup>
import { ref } from "vue";
import { useDataStore } from "@/stores/userData";
import { useEventStore } from "@/stores/events";

const userData = useDataStore()
const events = useEventStore()

let show = ref(false)
const eventOwnerUid = ref(JSON.parse(localStorage.getItem('auth')).uid)

let showMoreDetails = (e) => {
  // const element = e.target.parentNode.parentNode.parentNode.lastElementChild
  show.value = !show.value

}


// console.log(events.allEvents);  
</script>

 <style scoped>
 .title{
  border:3px dotted blue; inline-size: 20em;
  border-radius: 6px;
  animation-name: changeColorTitle;
  animation-duration: 3s;
  animation-iteration-count: infinite;
 }

 
 @keyframes changeColorTitle {
  from {border-color: red;}
  to {border-color: blue;}
}
 </style>