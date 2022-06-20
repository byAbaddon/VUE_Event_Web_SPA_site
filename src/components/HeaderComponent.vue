<template>
  <v-app-bar color="blue-grey-darken-3"  density="compact">
    <v-icon color="green darken-2">mdi-eslint</v-icon> 
    <v-app-bar-title class="ml-6">Hello, {{}}name</v-app-bar-title>
      <v-btn to="/" >Home</v-btn>
      <v-spacer></v-spacer>
      <v-btn to="/events">Event</v-btn>
      <v-spacer></v-spacer>
      <v-btn v-if="!check"   to="/login">Login</v-btn>
      <v-btn v-else  @click="onLogout"  to="/">Logout</v-btn>
  </v-app-bar>
</template>


<script setup>
import { useDataStore } from "@/stores/userData";
 const userData = useDataStore()
// let sendUserLogoutEvent = userData.checkUserLogin
let check = userData.checkIsAuth
let sendUserLogoutEvent =  userData.checkUserLogin
const onLogout = function () {
  localStorage.clear()
 userData.isAuth = false
 }
</script>
