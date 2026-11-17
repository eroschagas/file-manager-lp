<template>
  <fieldset class="tool-selector">
    <legend class="tool-selector__legend">Explore Lumora tools</legend>
    <template v-for="(tool, index) in props.tools" :key="tool.title">
      <input
        :id="`toolChoice${index}`"
        class="tool-selector__input"
        type="radio"
        name="featuredTool"
        :value="index"
        :checked="index === 0"
        :aria-controls="`toolPanel${index}`"
      />
      <label
        :id="`toolLabel${index}`"
        class="tool-selector__label"
        :style="{ gridColumn: index + 1 }"
        :for="`toolChoice${index}`"
      >
        <span class="tool-selector__icon" aria-hidden="true">{{
          tool.icon
        }}</span>
        <span class="tool-selector__title">{{ tool.title }}</span>
        <small aria-hidden="true">0{{ index + 1 }}</small>
      </label>
      <div
        :id="`toolPanel${index}`"
        class="tool-selector__panel"
        role="region"
        :aria-labelledby="`toolLabel${index}`"
      >
        <slot :tool="tool" :index="index" />
      </div>
    </template>
  </fieldset>
</template>
<script setup lang="ts">
import type { PropType } from "vue";
import type { Tool } from "../types/Tool";

const props = defineProps({
  tools: { type: Array as PropType<readonly Tool[]>, required: true },
});
</script>
<style scoped lang="scss">
.tool-selector {
  position: relative;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 18px 5px;
  min-width: 0;
  margin: 0;
  padding: 0;
  border: 0;

  &::before {
    content: "";
    grid-area: 1 / 1 / 2 / -1;
    border: 1px solid var(--border);
    border-radius: 8px;
    pointer-events: none;
  }

  &__legend,
  &__input {
    position: absolute;
    width: 1px;
    height: 1px;
    overflow: hidden;
    clip-path: inset(50%);
    white-space: nowrap;
  }

  &__label {
    grid-row: 1;
    display: flex;
    align-items: center;
    gap: 12px;
    min-width: 0;
    margin-block: 6px;
    padding: 16px 20px;
    border-radius: 5px;
    color: var(--muted);
    font-size: 12px;
    cursor: pointer;

    &:nth-of-type(1) {
      margin-left: 6px;
    }
    &:nth-of-type(3) {
      margin-right: 6px;
    }

    .tool-selector__icon {
      font-size: 20px;
    }
    small {
      margin-left: auto;
      font-size: 10px;
    }
    &:hover {
      background: var(--surface);
    }
  }

  &__input:checked + &__label {
    color: white;
    background: var(--primary);
  }

  &__input:focus-visible + &__label {
    outline: 3px solid var(--primary-dark);
    outline-offset: 2px;
  }

  &__panel {
    display: none;
    grid-column: 1 / -1;
    grid-row: 2;
    min-width: 0;
  }

  &__input:checked + &__label + &__panel {
    display: block;
  }
}

@media (max-width: 767px) {
  .tool-selector__label {
    justify-content: center;
    flex-direction: column;
    min-height: 68px;
    padding: 10px 6px;
    gap: 6px;
    font-size: 11px;
    line-height: 1.35;
    text-align: center;
    .tool-selector__icon {
      font-size: 16px;
    }
    small {
      display: none;
    }
  }
}
</style>
