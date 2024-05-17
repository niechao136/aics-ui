<script setup lang="ts">
import { computed, CSSProperties } from 'vue-demi'
import { ISvgProp } from './model'

defineOptions({
  name: 'AicsSvg',
  inheritAttrs: false,
})

const props: ISvgProp = defineProps({
  url: String,
})

const style = computed<CSSProperties>(() => {
  const str = !!props.url ? `url(${props.url}) no-repeat 50% 50%` : ''
  if (!str) return {}
  return {
    mask: str,
    WebkitMask: str,
  }
})

</script>

<template>
  <div class="aics-svg" :style="style" v-bind="$attrs"></div>
</template>

<style scoped>

</style>
