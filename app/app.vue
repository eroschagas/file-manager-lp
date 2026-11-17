<template>
  <div class="landing">
    <a class="landing__skip-link" href="#mainContent">Skip to content</a>
    <LandingHeader />
    <main id="mainContent" tabindex="-1">
      <LandingHero />
      <PrivacyStrip />
      <LandingFeatures />
      <LandingWorkflow />
      <LandingPrivacy />
      <LandingFaq />
      <DownloadSection />
    </main>
    <LandingFooter />
  </div>
</template>
<script setup lang="ts">
if (import.meta.server) {
  useLandingSeo();
}
</script>
<style scoped lang="scss">
.landing__skip-link {
  position: fixed;
  top: 12px;
  left: 12px;
  z-index: 10;
  padding: 12px 18px;
  background: var(--ink);
  color: white;
  border-radius: 6px;
  transform: translateY(-200%);

  &:focus {
    transform: translateY(0);
  }
}
</style>
