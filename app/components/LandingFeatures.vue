<template>
  <section id="features" class="features wrap">
    <div class="section-heading">
      <div>
        <span class="eyebrow">A PLACE FOR EVERYTHING</span>
        <h2>Meet your collection’s<br />new <em>comfort zone.</em></h2>
      </div>
      <p>
        Three thoughtful tools. One calmer collection.<br />A little less
        busywork, a lot more breathing room.
      </p>
    </div>
    <div class="tabs" role="tablist" aria-label="Explore Lumora tools">
      <button
        v-for="(tool, index) in tools"
        :id="`tab-${index}`"
        :key="tool.title"
        :class="['tabs__item', { 'tabs__item--active': activeTool === index }]"
        role="tab"
        :aria-selected="activeTool === index"
        :tabindex="activeTool === index ? 0 : -1"
        aria-controls="featurePanel"
        @click="selection.select(index)"
        @keydown="handleTabKey($event, index)"
      >
        <span>{{ tool.icon }}</span>{{ tool.title
        }}<small>0{{ index + 1 }}</small>
      </button>
    </div>
    <div
      id="featurePanel"
      class="feature"
      role="tabpanel"
      :aria-labelledby="`tab-${activeTool}`"
    >
      <div class="feature__copy">
        <span class="eyebrow">{{ currentTool.label }}</span>
        <h3>{{ currentTool.heading }}</h3>
        <p>{{ currentTool.description }}</p>
        <ul>
          <li v-for="detail in currentTool.details" :key="detail">
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
      <ToolPreview :tool="currentTool" :active-index="activeTool" />
    </div>
  </section>
</template>
<script setup lang="ts">
import { computed } from "vue";
import { downloadUrl, tools } from "../data/landing";
import { ToolSelection } from "../models/ToolSelection";
const selection = new ToolSelection(tools);
const activeTool = computed(() => selection.activeIndex);
const currentTool = computed(() => selection.currentTool);
const handleTabKey = (event: KeyboardEvent, index: number) => {
  const next = selection.indexForKey(event.key, index);
  if (next === null) return;
  event.preventDefault();
  selection.select(next);
  document.getElementById(`tab-${next}`)?.focus();
};
</script>
<style scoped lang="scss">
.features {
  padding-block: 95px;
}
.tabs {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 5px;
  border: 1px solid var(--border);
  border-radius: 8px;
  padding: 6px;
  margin-bottom: 18px;
}
.tabs__item {
  cursor: pointer;
  border: 0;
  background: transparent;
  color: var(--muted);
  border-radius: 5px;
  padding: 16px 20px;
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 12px;
  > span {
    font-size: 20px;
  }
  small {
    margin-left: auto;
    font-size: 10px;
    opacity: 0.7;
  }
  &:hover {
    background: var(--surface);
  }
}
.tabs__item--active {
  background: var(--primary);
  color: #fff;
  &:hover {
    background: var(--primary);
  }
}
.feature {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 12px;
  padding: 53px 45px;
  display: grid;
  grid-template-columns: 0.85fr 1fr;
  gap: 60px;
  align-items: center;
}
.feature__copy {
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
@media (max-width: 767px) {
  .features {
    padding-block: 60px;
  }
  .tabs__item {
    justify-content: center;
    padding: 10px 4px;
    gap: 5px;
    font-size: 9px;
    > span {
      font-size: 16px;
    }
    small {
      display: none;
    }
  }
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
