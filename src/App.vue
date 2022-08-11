<template>
  <v-app>
    <header-component />
    <v-main id="main">
      <router-view /> 
    </v-main>
    <footer-component />   
  </v-app>
</template>


<script setup >
import HeaderComponent from "@/components/HeaderComponent";
import FooterComponent from "@/components/FooterComponent";
import { defineComponent, onBeforeMount } from "vue";
defineComponent(() => {
  HeaderComponent, FooterComponent;
});

onBeforeMount(() => { 
  window.addEventListener("beforeunload", (event) => {
      if (localStorage.getItem("auth") != null) {
        event.returnValue;
        event.preventDefault() 
        return
      }
      return
    })
  })

</script>


