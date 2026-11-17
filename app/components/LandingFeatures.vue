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
    <ToolSelector :tools="tools">
      <template #default="{ tool, index }">
        <ToolFeature :tool="tool" :index="index" />
      </template>
    </ToolSelector>
  </section>
</template>
<script setup lang="ts">
import { tools } from "../data/landing";
</script>
<style scoped lang="scss">
.features {
  padding-block: 95px;
}
@media (max-width: 767px) {
  .features {
    padding-block: 60px;
  }
}
</style>
