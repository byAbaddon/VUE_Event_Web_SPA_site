<template>
  <div>
    <div class="text">
      <h2 class="text-teal"  >The events that will blow your mind!</h2>
      <p class="text-grey-darken-1" >Join our community.</p>
      <p class="text-yellow-darken-4"  style="padding-left: 5%">Organizie an event.</p>
      <p class="text-blue"  style="padding-left: 10%">
        Gathered as many people as possible for one purpose.
      </p>
      <p class="text-lime-darken-4" style="padding-left: 15%">Learn!</p>
      <p class="text-blue-grey-darken-3" style="padding-left: 20%">Share!</p>
      <p class="text-deep-orange-accent-4" style="padding-left: 25%">Enjoy the life!</p>
    </div>
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

//
</script>


<style scoped >
.text {
  font-family: "Shojumaru-Regular", serif;
  font-size: 48px;
  text-shadow: 2px 2px 2px rgb(131, 128, 128);
  margin-left: 2em;
  font-weight: bold;
  font-size: x-large;
}

.event-image {
  display: flex;
  float: right;
  margin: -14em auto;
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