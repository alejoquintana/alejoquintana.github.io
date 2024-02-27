<script setup>
import icon from '@/components/GetIcon.vue'
import { orderStore } from '@/stores/order.js'
orderStore().fetchData()
function sumAmount(id,sum) {
    orderStore().sumAmount(id,sum)
}
function generateOrder() {
    orderStore().generateOrder()
}
</script>

<template>
    <button class="btn btn-info w-100" @click="generateOrder">GENERAR ORDEN</button>
    <div v-for="product in orderStore().products" :key="product.id"
        class="row my-1 p-1 list-item align-items-center g-0" :class="true || product.brand" :style="'background-color:'+product.color">
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
  <button class="btn btn-info w-100" @click="generateOrder">GENERAR ORDEN</button>
</template>

<style lang="scss" scoped>

.d-flex-cc {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
