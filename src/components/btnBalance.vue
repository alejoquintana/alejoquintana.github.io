<template>
  <button class="btn btn-info btn-block" @click="generateBalance">GENERAR BALANCE</button>
</template>

<script setup>
import { productStore } from '@/stores/data.js'
function generateBalance() {
    productStore().generateBalance()
}
</script>

<style>

</style>