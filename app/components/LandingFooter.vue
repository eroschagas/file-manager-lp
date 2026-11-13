<template>
  <footer class="footer wrap">
    <BrandLogo /><span>A little order. More room for life.</span
    ><a
      href="https://github.com/eroschagas/file-manager"
      target="_blank"
      rel="noopener noreferrer"
      >Find us on GitHub ↗</a
    ><small>© {{ new Date().getFullYear() }} Lumora</small>
  </footer>
</template>
<style scoped lang="scss">
.footer {
  display: flex;
  align-items: center;
  gap: 40px;
  padding-block: 45px;
  > span {
    font-size: 10px;
    color: var(--muted);
  }
  > a:nth-last-child(2) {
    margin-left: auto;
    font-size: 10px;
  }
  small {
    font-size: 9px;
    color: var(--muted);
  }
}
@media (max-width: 767px) {
  .footer {
    flex-wrap: wrap;
    padding-block: 32px;
    gap: 20px;
    > span {
      width: calc(100% - 135px);
    }
    > a:nth-last-child(2) {
      margin-left: 0;
    }
    small {
      margin-left: auto;
    }
  }
}
</style>
