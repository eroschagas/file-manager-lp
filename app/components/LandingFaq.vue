<template>
  <section id="faq" class="faq wrap">
    <div>
      <span class="eyebrow">A LITTLE MORE CLARITY</span>
      <h2>Good questions.<br /><em>Clear answers.</em></h2>
    </div>
    <div class="faq__items">
      <details v-for="item in faqs" :key="item.question">
        <summary>{{ item.question }}<span>+</span></summary>
        <p>{{ item.answer }}</p>
      </details>
    </div>
  </section>
</template>
<script setup lang="ts">
import { faqs } from "../data/landing";
</script>
<style scoped lang="scss">
.faq {
  padding-block: 85px;
  display: grid;
  grid-template-columns: 0.8fr 1fr;
  gap: 80px;
  h2 {
    margin-top: 18px;
  }
}
.faq__items {
  details {
    border-bottom: 1px solid var(--border);
    &[open] summary span {
      transform: rotate(45deg);
    }
  }
  summary {
    display: flex;
    justify-content: space-between;
    gap: 20px;
    cursor: pointer;
    list-style: none;
    font-size: 13px;
    padding: 21px 0;
    &::-webkit-details-marker {
      display: none;
    }
    span {
      color: var(--muted);
      transition: transform 0.2s;
    }
  }
  p {
    margin: 0 25px 20px 0;
    color: var(--muted);
    font-size: 12px;
    line-height: 1.9;
  }
}
@media (max-width: 767px) {
  .faq {
    padding-block: 55px;
    grid-template-columns: 1fr;
    gap: 8px;
  }
}
</style>
