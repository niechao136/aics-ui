<script setup lang="ts">
import { computed } from 'vue-demi'
import type { CSSProperties } from 'vue-demi'
import { addUnit, isUndefined } from '@aics-ui/utils'
import { IIconProp } from './model'

defineOptions({
  name: 'AicsIcon',
  inheritAttrs: false,
})

const props: IIconProp = defineProps({
  size: [Number, String],
  color: String,
  isUrl: {
    type: Boolean,
    default: () => false,
  }
})

const className = computed(() => {
  return ['aics-icon', { 'url-icon': props.isUrl, 'svg-icon': !props.isUrl }]
})

const style = computed<CSSProperties>(() => {
  const { size, color } = props
  if (!size && !color) return {}
  return {
    fontSize: isUndefined(size) ? undefined : addUnit(size),
    '--color': color,
  }
})

</script>

<template>
  <i :class="className" :style="style" v-bind="$attrs">
    <slot />
  </i>
</template>

<style scoped>

</style>
