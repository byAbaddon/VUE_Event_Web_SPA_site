
<template>
 <div>
   <h1>About page</h1>
   <h2>Name: {{store.data.name}}</h2>
   <h2>Age: {{store.data.age}}</h2>
   <h2>Computed: {{store.web}}</h2>
   <v-btn color="primary"  class=" ma-3"  @click="store.increase"  >add_Age</v-btn>
   <hr>
   <input v-model="inputName"   type="text" placeholder=" Input new name:" class="ma-3 pa-2  bg-grey " />
   <hr>
   <v-btn color="secondary" class=" ma-3"  @click="store.changeName(inputName)"  >change_Name</v-btn>
 </div>
</template>


<script setup>
  import { ref } from "vue";
  import { useTestStore } from "@/stores/testStore";

  const store = useTestStore()
  const inputName = ref('')
</script>

