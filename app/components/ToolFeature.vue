<template>
  <div class="feature">
    <div class="feature__copy">
      <span class="eyebrow">{{ props.tool.label }}</span>
      <h3>{{ props.tool.heading }}</h3>
      <p>{{ props.tool.description }}</p>
      <ul>
        <li v-for="detail in props.tool.details" :key="detail">
          ✓ &nbsp; {{ detail }}
        </li>
      </ul>
      <a
        class="text-link"
        :href="downloadUrl"
        target="_blank"
        rel="noopener noreferrer"
        >Give your files a fresh start ↗</a
      >
    </div>
    <ToolPreview :tool="props.tool" :active-index="props.index" />
  </div>
</template>
<script setup lang="ts">
import type { PropType } from "vue";
import type { Tool } from "../types/Tool";
import { downloadUrl } from "../data/landing";
const props = defineProps({
  tool: { type: Object as PropType<Tool>, required: true },
  index: { type: Number, required: true },
});
</script>
<style scoped lang="scss">
.feature {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 12px;
  padding: 53px 45px;
  display: grid;
  grid-template-columns: minmax(0, 0.85fr) minmax(0, 1fr);
  gap: 60px;
  align-items: center;
}
.feature__copy {
  min-width: 0;
  .eyebrow {
    font-size: 8px;
    letter-spacing: 1.4px;
  }
  h3 {
    font-family: var(--font-heading);
    font-size: 31px;
    font-weight: 500;
    line-height: 1.25;
    letter-spacing: -1.2px;
    max-width: 310px;
    margin: 18px 0;
  }
  > p {
    color: var(--muted);
    font-size: 12px;
    line-height: 1.9;
  }
  ul {
    padding: 0;
    list-style: none;
    margin: 23px 0 28px;
  }
  li {
    font-size: 11px;
    margin-block: 12px;
  }
}
@media (max-width: 1100px) {
  .feature {
    padding: 35px;
    gap: 30px;
  }
}
@media (min-width: 768px) and (max-width: 900px) {
  .feature {
    grid-template-columns: 1fr;
  }
  .feature__copy h3 {
    max-width: none;
  }
  .feature > .demo {
    width: min(100%, 540px);
    justify-self: center;
  }
}
@media (max-width: 767px) {
  .feature {
    grid-template-columns: 1fr;
    padding: 27px 22px;
    gap: 28px;
  }
  .feature__copy h3 {
    font-size: 30px;
  }
}
</style>
