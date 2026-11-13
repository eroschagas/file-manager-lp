<template>
  <a
    href="#"
    :class="['brand', { 'brand--compact': props.compact }]"
    aria-label="Lumora home"
    ><img
      class="brand__logo"
      src="/lumora.svg"
      alt=""
      width="36"
      height="36"
    /><span class="brand__name">Lumora</span></a
  >
</template>
<script setup lang="ts">
const props = defineProps({ compact: { type: Boolean, default: false } });
</script>
<style scoped lang="scss">
.brand {
  display: inline-flex;
  align-items: center;
  gap: 11px;
  color: var(--ink);
  font-weight: 700;
  font-size: 24px;
  letter-spacing: -0.4px;
  &__logo {
    width: 36px;
    height: 36px;
  }
  &--compact {
    font-size: 16px;
    gap: 7px;
    .brand__logo {
      width: 24px;
      height: 24px;
    }
  }
}
</style>
