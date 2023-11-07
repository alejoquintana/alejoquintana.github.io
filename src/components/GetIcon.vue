<template>
    <img :src="src" :class="'def '+size" :alt="props.icon+' icon'" />
</template>

<script setup>
const props = defineProps({
    icon: String,
    size: {
    type: String,
    default: "md"
  },
})
const src = `/src/assets/icons/${props.icon}.svg`

</script>
<style lang="scss" scoped>
.def {
    will-change: filter;
    transition: filter 300ms;
}
.sm {
    height: 0.75rem;
}
.md {
    height: 1rem;
}
.lg {
    height: 1.5rem;
}
</style>