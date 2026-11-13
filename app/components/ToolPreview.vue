<template>
  <div class="demo">
    <div class="demo__bar">
      <BrandLogo compact /><span>— &nbsp; □ &nbsp; ×</span>
    </div>
    <div class="demo__body">
      <div class="demo__heading">
        <strong>{{ props.tool.title }}</strong><small
          >Illustrative preview</small
        >
      </div>
      <div class="demo__path">▱ &nbsp; Pictures / Weekend adventures</div>
      <div class="demo__message">
        <span>✓</span>
        <div>
          <strong>{{ props.tool.preview }}</strong><small
            >You review the details. You make the call.</small
          >
        </div>
      </div>
      <div v-if="props.activeIndex === 0" class="demo__photos">
        <div
          v-for="(name, index) in ['Original.jpg', 'Original-copy.jpg']"
          :key="name"
          :class="['demo__photo', { 'demo__photo--selected': index === 1 }]"
        >
          <img :src="lakeImage" alt="Example duplicate landscape" /><span
            >{{ name }} <b>{{ index === 0 ? "Keep" : "✓" }}</b></span
          ><small>{{
            index === 0 ? "4032 × 3024 · 4.8 MB" : "2016 × 1512 · 1.6 MB"
          }}</small>
        </div>
      </div>
      <div v-else-if="props.activeIndex === 1" class="demo__folders">
        <div>▾ &nbsp; 📁 2026</div>
        <p>├ &nbsp; 📁 01 - Jan <small>Winter getaway</small></p>
        <p>├ &nbsp; 📁 06 - Jun <small>Summer moments</small></p>
        <p>└ &nbsp; 📁 11 - Nov <small>New adventures</small></p>
      </div>
      <div v-else class="demo__fields">
        <div v-for="field in metadataFields" :key="field.label">
          <small>{{ field.label }}</small><span>{{ field.value }}</span>
        </div>
      </div>
      <div class="demo__footer">
        <span>A little clarity before every change.</span
        ><strong>{{ props.tool.action }} →</strong>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import type { PropType } from "vue";
import type { Tool } from "../types/Tool";
import { lakeImage, metadataFields } from "../data/landing";
const props = defineProps({
  tool: { type: Object as PropType<Tool>, required: true },
  activeIndex: { type: Number, required: true },
});
</script>
<style scoped lang="scss">
.demo {
  background: white;
  border: 1px solid var(--border);
  border-radius: 9px;
  box-shadow: 0 15px 25px var(--shadow);
  transform: rotate(1deg);
  overflow: hidden;
  min-width: 0;
}
.demo__bar {
  background: var(--surface);
  border-bottom: 1px solid var(--surface);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 15px;
  > span:last-child {
    color: var(--muted);
    font-size: 11px;
  }
}
.demo__body {
  padding: 20px;
  min-height: 330px;
}
.demo__heading {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 5px;
  strong {
    font-size: 13px;
    font-weight: 500;
  }
  small {
    font-size: 8px;
    background: var(--surface);
    padding: 5px 7px;
    color: var(--muted);
    border-radius: 4px;
  }
}
.demo__path {
  font-size: 9px;
  color: var(--muted);
  border: 1px solid var(--border);
  border-radius: 4px;
  padding: 9px;
  margin-top: 13px;
}
.demo__message {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-block: 17px;
  > span {
    width: 25px;
    height: 25px;
    border-radius: 50%;
    display: grid;
    place-items: center;
    background: var(--surface);
    color: var(--primary);
    font-size: 10px;
  }
  strong {
    font-size: 10px;
    font-weight: 500;
  }
  small {
    display: block;
    color: var(--muted);
    margin-top: 4px;
    font-size: 8px;
  }
}
.demo__photos {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
}
.demo__photo {
  min-width: 0;
  border: 1px solid var(--border);
  border-radius: 4px;
  padding: 5px;
  img {
    width: 100%;
    height: 95px;
    object-fit: cover;
    display: block;
    border-radius: 2px;
  }
  > span {
    display: flex;
    justify-content: space-between;
    font-size: 8px;
    margin: 8px 1px 4px;
  }
  b {
    font-size: 7px;
    color: var(--primary);
  }
  small {
    font-size: 7px;
    color: var(--muted);
  }
}
.demo__photo--selected {
  border-color: var(--primary);
  background: var(--primary-soft);
}
.demo__footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
  margin-top: 18px;
  font-size: 8px;
  color: var(--muted);
  strong {
    background: var(--primary);
    color: white;
    border-radius: 4px;
    padding: 9px;
    font-weight: 500;
  }
}
.demo__folders {
  min-height: 140px;
  padding: 7px 15px;
  font-size: 12px;
  color: var(--primary);
  p {
    padding-left: 13px;
    font-size: 11px;
  }
  small {
    font-size: 9px;
    color: var(--muted);
    margin-left: 10px;
  }
}
.demo__fields {
  display: grid;
  gap: 8px;
  min-height: 140px;
  small {
    font-size: 8px;
    color: var(--muted);
  }
  span {
    display: block;
    font-size: 10px;
    border: 1px solid var(--border);
    padding: 7px;
    margin-top: 3px;
    border-radius: 4px;
  }
}
@media (max-width: 767px) {
  .demo {
    transform: none;
  }
  .demo__body {
    padding: 14px;
  }
}
</style>
