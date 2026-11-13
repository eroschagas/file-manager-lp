<template>
  <header class="header wrap">
    <BrandLogo />
    <nav aria-label="Main navigation">
      <a href="#features">Features</a><a href="#how-it-works">How it works</a
      ><a href="#faq">FAQ</a>
    </nav>
    <DownloadLink outline compact>Get Lumora ↗</DownloadLink>
  </header>
</template>
<style scoped lang="scss">
.header {
  height: 105px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  nav {
    display: flex;
    gap: 35px;
    font-size: 12px;
    color: var(--muted);
  }
}
@media (max-width: 767px) {
  .header {
    height: 82px;
    nav {
      display: none;
    }
  }
}
</style>
