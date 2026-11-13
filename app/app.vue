<template>
  <NuxtRouteAnnouncer />
  <div class="landing">
    <LandingHeader />
    <main>
      <LandingHero /><PrivacyStrip /><LandingFeatures /><LandingWorkflow /><LandingPrivacy /><LandingFaq /><DownloadSection />
    </main>
    <LandingFooter />
  </div>
</template>
<script setup lang="ts">
useHead({
  htmlAttrs: { lang: "en" },
  title: "Lumora — Less clutter. More room for what matters.",
  link: [{ rel: "icon", type: "image/svg+xml", href: "/lumora.svg" }],
  meta: [
    {
      name: "description",
      content:
        "Find duplicate photos and videos, organize files by date, and edit metadata in batches. Lumora is your local media organizer for Windows.",
    },
    { name: "theme-color", content: "#f8f9fb" },
  ],
});
</script>
