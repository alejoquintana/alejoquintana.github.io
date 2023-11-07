import { ref } from 'vue'
import { defineStore } from 'pinia'

export const productStore = defineStore('product', () => {
  const products = ref([])
  async function fetchData() {
      const response = await fetch('/data.json');
      const json = await response.json();
      console.log('json',json);
      products.value = json.products
  }

  return { products ,fetchData }
})
