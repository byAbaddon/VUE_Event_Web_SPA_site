<template>
  <v-app-bar color="blue-grey-darken-3"  density="compact">
    <v-icon color="green darken-2">mdi-eslint</v-icon> 
    <v-app-bar-title class="ml-6">Hello, {{userData.isAuth ? userData.data.displayName : 'Anonymous'}}</v-app-bar-title>
      <v-btn to="/" >Home</v-btn>
      <v-spacer></v-spacer>
      <v-btn to="/events">Event</v-btn>
      <v-spacer></v-spacer>
      <v-btn  v-if="!userData.isAuth" to="/login">Login</v-btn>
      <v-btn  v-else @click="userData.logout"  to="/">Logout</v-btn>
  </v-app-bar>
</template>


<script setup>
import { useDataStore } from "@/stores/userData";
const userData = useDataStore()

</script>
