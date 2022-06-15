<template>
  <div>
    <div class="text">
      <h2 class="text-teal">The events that will blow your mind!</h2>
      <p class="text-grey-darken-1">Join our community.</p>
      <p class="text-yellow-darken-4" style="padding-left: 5%">
        Organizie an event.
      </p>
      <p class="text-blue" style="padding-left: 10%">
        Gathered as many people as possible for one purpose.
      </p>
      <p class="text-lime-darken-4" style="padding-left: 15%">Learn!</p>
      <p class="text-blue-grey-darken-3" style="padding-left: 20%">Share!</p>
      <p class="text-deep-orange-accent-4 pb-12" style="padding-left: 25%">
        Enjoy the life!
      </p>
    </div>

      <!--   carousel  -->
    <div>
  <v-card
    elevation="24"
    max-width="400"
    class="mt-12 ml-12"
  >
    <v-system-bar lights-out></v-system-bar>
    <v-carousel
      height="200"
      cycle
      :continuous="false"
      :show-arrows="false"
      hide-delimiters
    >
      <v-carousel-item v-for="( i) in 18" :key="i" >
        <v-sheet>
          <div class="d-flex fill-height justify-center align-center">
             <v-img :src="require(`@/assets/slides/${i}.jpg`)"></v-img>
          </div>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>
  </v-card>
    </div>


    <!--   logo image   -->
    <div>
      <img
        :src="require('../assets/images/events.png')"
        class="event-image"
        alt="image"
      />
    </div>
    
  </div>
</template>

// <script setup >
//  import { defineComponent } from 'vue';
    
</script>


<style scoped >
.text {
  font-family: "Shojumaru-Regular", serif;
  font-size: 48px;
  text-shadow: 2px 2px 2px rgb(223, 222, 222);
  margin-left: 2em;
  font-weight: bold;
  font-size: x-large;
}

.event-image {
  display: flex;
  float: right;
  margin: -32em auto;
  text-align: center;
  width: 40em;
  animation-name: example;
  animation-duration: 6s;
  animation-iteration-count: infinite;
}

@keyframes example {
  0% {
    transform: scale(1, 1);
  }
  25% {
    transform: scale(1.1, 1.1);
  }
  50% {
    transform: scale(1.1, 1.1);
  }
  75% {
    transform: scale(1.1, 1.1);
  }
  100% {
    transform: scale(1, 1);
  }
}
</style>