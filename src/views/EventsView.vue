<template>
  <div>
     <h1>This is Event page</h1>
     <!-- <h2>1) {{isAuth }}</h2> -->
     <h2>--  {{userData.counter }} --</h2>
     <v-btn color=red @click="increment">Increment  {{userData.counter}} </v-btn>
     <h2>--  {{userData.double}} --</h2>


     <h2>------------------</h2>
     <h2>--  {{check}} --</h2>
     <h2>--  {{userData.checkIsAuth}} --</h2>
    
     
  </div>
 

</template>

<script setup>
import { useDataStore } from "@/stores/userData";
// import { ref } from "vue";
 const userData = useDataStore()
let increment = userData.increment
 let check = userData.checkIsAuth
   

</script>

<style>

</style>