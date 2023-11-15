<script setup>
import icon from '@/components/GetIcon.vue'
import btnBalance from '@/components/btnBalance.vue'
import { productStore } from '@/stores/data.js'
productStore().fetchData()
function sumAmount(id,sum) {
    productStore().sumAmount(id,sum)
}
</script>

<template>
    <btnBalance></btnBalance>
    <div v-for="product in productStore().products" :key="product.id"
        class="row my-1 p-1 list-item align-items-center g-0" :class="product.brand">
        <div class="col-3 text-center px-2">
            <span class="text-uppercase font-weight-bold">
                {{ product.brand }}
            </span>
        </div>
        <div class="col-6 name-cell">
            <span class="text-capitalize">
                {{ product.name }}
            </span>
        </div>
        <div class="col-3 d-flex justify-content-between align-items-center">
            <button class="btn btn-danger btn-sm" @click="sumAmount(product.id,false)">
                <icon icon="minus" size="sm" />
            </button>
            <span class="py-2">
                {{ product.amount }}
            </span>
            <button class="btn btn-success btn-sm" @click="sumAmount(product.id,true)">
                <icon icon="plus" size="sm" />
            </button>
        </div>
    </div>
    <btnBalance></btnBalance>
</template>

<style lang="scss" scoped>

.d-flex-cc {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
