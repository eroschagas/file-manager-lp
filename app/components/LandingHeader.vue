<template>
  <header class="header">
    <div class="header__inner wrap">
      <BrandLogo />
      <nav aria-label="Main navigation">
        <a href="#features">Features</a><a href="#how-it-works">How it works</a
        ><a href="#faq">FAQ</a>
      </nav>
      <DownloadLink outline compact>Get Lumora ↗</DownloadLink>
    </div>
  </header>
</template>
<style scoped lang="scss">
.header {
  position: sticky;
  top: 0;
  z-index: 5;
  background: var(--paper);
}
.header__inner {
  height: var(--header-height);
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
  .header__inner {
    nav {
      display: none;
    }
  }
}
</style>
