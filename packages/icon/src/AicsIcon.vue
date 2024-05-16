<script setup lang="ts">
import { computed } from 'vue-demi'
import type { CSSProperties } from 'vue-demi'
import { addUnit, definePropType, isUndefined } from '@aics-ui/utils'

defineOptions({
  name: 'AicsIcon',
  inheritAttrs: false,
})

const props = defineProps<{
  size: {
    type: definePropType<number | string>([Number, String]),
  },
  color: String
}>()

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

</template>

<style scoped>

</style>
