<script setup>
import icon from "@/components/GetIcon.vue";
import { productStore } from '@/stores/data.js'
productStore().fetchData()
</script>

<template>
  <div v-for="product in productStore().products" :key="product.id"
  class="d-flex">
    <div class="w-75 name-cell px-2">
      <span  class="text-capitalize">
        {{ product.name }}
      </span>
      <span class="text-uppercase font-weight-bold">
        {{ product.brand }}
      </span>
    </div>
    <div class="w-25 d-flex justify-content-between align-items-center">
      <button class="btn btn-danger btn-sm">
        <icon icon="minus"/>
    </button>
    {{ product.amount }}
    <button class="btn btn-success btn-sm">
        <icon icon="plus" size="sm"/>
    </button>
    </div>
    <hr>
  </div>
</template>

<style lang="scss" scoped>
.name-cell {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.d-flex-cc{
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>