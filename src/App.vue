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
import { defineComponent } from "vue";
defineComponent(() => {
  HeaderComponent, FooterComponent;
});
</script>


