<script  setup>
const icons = ["mdi-home", "mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram"];
</script>



<template>
  <v-footer
   class="bg-grey-darken-4 text-white text-center d-flex flex-column">
    <div>
      <v-btn
        v-for="icon in icons"
        :key="icon"
        class="mx-4 text-white"
        :icon="icon"
        variant="text"
      ></v-btn>
    </div>

    <div class="text-white pt-0">
      Orci varius natoque penatibus et magnis dis parturient montes, nascetur
      ridiculus mus.
    </div>
   <v-divider></v-divider>

    <div class="text-white">
      <strong>Vuetify</strong>
    </div>
 
  </v-footer>
</template>