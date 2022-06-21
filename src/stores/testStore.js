import { defineStore } from 'pinia'
import { reactive, computed } from "vue";

export const useTestStore = defineStore('testStore',() => {
  const data = reactive({
    name: 'Ramzi',
    age: 22
  })
   
  const web = computed(() =>  data.age * 2 )
  const increase = () => data.age++
  const changeName = newName => data.name = newName 

  return {data, web, increase, changeName}
})