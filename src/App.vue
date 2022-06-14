<template>
  <div>
       <v-icon large color="green darken-2" > mdi-domain</v-icon>
    <h1>This is an HOME page</h1>
    <v-btn @click="cStore.increment()"     color="error">Test</v-btn>
    <h2> {{ cStore.count }}</h2>
    <h2> second:   {{ cStore.count }}</h2>
    <h4>ready</h4>
  </div>
  
</template>


<script setup >
import { useCounterStore } from '@/stores/counter'
const cStore = useCounterStore()

  
</script>