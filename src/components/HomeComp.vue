<script setup>
import icon from '@/components/GetIcon.vue'
import { productStore } from '@/stores/data.js'
productStore().fetchData()
</script>

<template>
  <div v-for="product in productStore().products" :key="product.id" class="row my-1 p-1 list-item align-items-center g-0">
    <div class="col-5 name-cell">
      <span class="text-capitalize">
        {{ product.name }}
      </span>
    </div>
    <div class="col-3 text-center px-2">
      <span class="text-uppercase font-weight-bold">
        {{ product.brand }}
      </span>
    </div>
    <div class="col-4 d-flex justify-content-between align-items-center">
      <button class="btn btn-danger btn-sm">
        <icon icon="minus" size="sm" />
      </button>
      <span class="py-2">
          {{ product.amount }}
      </span>
      <button class="btn btn-success btn-sm">
        <icon icon="plus" size="sm" />
      </button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.list-item {
    background-color: azure;
}
.d-flex-cc {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>