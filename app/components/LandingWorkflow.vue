<template>
  <section id="how-it-works" class="workflow">
    <div class="wrap">
      <div class="section-heading">
        <div>
          <span class="eyebrow">FROM OVERWHELMED TO ORGANIZED</span>
          <h2>A fresh start in <em>three steps.</em></h2>
        </div>
        <span class="workflow__flower">✳</span>
      </div>
      <div class="workflow__steps">
        <article v-for="step in steps" :key="step.number">
          <span>{{ step.number }}</span>
          <h3>{{ step.title }}</h3>
          <p>{{ step.text }}</p>
        </article>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
import { steps } from "../data/landing";
</script>
<style scoped lang="scss">
.workflow {
  padding-block: 65px 75px;
  background: var(--surface);
  border-block: 1px solid var(--border);
}
.workflow__flower {
  color: var(--muted);
  font-size: 65px;
}
.workflow__steps {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 60px;
  article {
    border-top: 1px solid var(--border);
    padding-top: 21px;
    > span {
      font-family: var(--font-editorial);
      font-style: italic;
      font-size: 27px;
      color: var(--muted);
    }
  }
  h3 {
    font-size: 16px;
    font-weight: 500;
    letter-spacing: -0.4px;
    margin-top: 22px;
  }
  p {
    max-width: 290px;
    font-size: 12px;
    line-height: 1.9;
    color: var(--muted);
  }
}
@media (max-width: 767px) {
  .workflow {
    padding-block: 50px;
  }
  .workflow__flower {
    display: none;
  }
  .workflow__steps {
    grid-template-columns: 1fr;
    gap: 23px;
    article {
      display: grid;
      grid-template-columns: 40px 1fr;
      gap: 5px 15px;
    }
    h3 {
      margin: 5px 0;
    }
    p {
      grid-column: 2;
      max-width: none;
      margin: 0;
    }
  }
}
</style>
