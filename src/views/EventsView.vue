<template>
  <div>
     <h1>This is Event page</h1>
     <div v-if="userData.isAuth"> {{userData.isAuth }}</div>
     <div v-else> Not Login</div>
     <h3>Computed store is user login =   {{userData.checkIsAuth}}</h3>
     <v-btn  color="secondary" class="ml-3" v-model="userData.checkIsAuth"
     @click="userData.isAuth = ! userData.isAuth"
      >Button {{userData.checkIsAuth}}</v-btn>
  </div>
</template>

<script setup>
import { useDataStore } from "@/stores/userData";
 const userData = useDataStore()
 

</script>

 