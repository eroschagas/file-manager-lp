<template>
  <a
    :class="[
      'download-link',
      {
        'download-link--outline': props.outline,
        'download-link--compact': props.compact,
      },
    ]"
    :href="downloadUrl"
    target="_blank"
    rel="noopener noreferrer"
    ><slot>Download for Windows ↗</slot></a
  >
</template>
<script setup lang="ts">
import { downloadUrl } from "../data/landing";
const props = defineProps({
  outline: { type: Boolean, default: false },
  compact: { type: Boolean, default: false },
});
</script>
<style scoped lang="scss">
.download-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 13px;
  padding: 17px 22px;
  border: 1px solid var(--primary);
  border-radius: 6px;
  color: white;
  background: var(--primary);
  font-size: 12px;
  font-weight: 600;
  transition:
    background 0.2s,
    transform 0.2s;
  &:hover {
    background: var(--primary-dark);
    transform: translateY(-2px);
  }
  &--outline {
    background: transparent;
    color: var(--primary);
    border-color: var(--border);
    &:hover {
      background: var(--primary-soft);
    }
  }
  &--compact {
    padding: 11px 17px;
    font-size: 11px;
  }
}
</style>
