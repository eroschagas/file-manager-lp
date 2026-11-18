<template>
  <section class="privacy wrap">
    <span class="privacy__icon">◈</span>
    <div>
      <span class="eyebrow">PERSONAL MEANS PERSONAL</span>
      <h2>Your files stay <em>your files.</em></h2>
      <p>
        Family photos. Unfinished projects. That one perfect sunset. Lunera
        processes everything on your computer, without uploading your collection
        to an external service.
      </p>
    </div>
    <span class="privacy__signature"
      >↳<br />On your device.<br />Under your control.</span
    >
  </section>
</template>
<style scoped lang="scss">
.privacy {
  padding-block: 85px;
  display: grid;
  grid-template-columns: 110px 1fr 200px;
  align-items: center;
  gap: 35px;
  border-bottom: 1px solid var(--border);
  h2 {
    margin-block: 15px;
  }
  p {
    max-width: 550px;
    font-size: 12px;
    line-height: 1.9;
    color: var(--muted);
  }
}
.privacy__icon {
  color: var(--muted);
  font-size: 100px;
  line-height: 1;
}
.privacy__signature {
  font-family: var(--font-editorial);
  font-size: 19px;
  font-style: italic;
  color: var(--muted);
  line-height: 1.5;
  transform: rotate(-7deg);
}
@media (max-width: 1100px) {
  .privacy {
    grid-template-columns: 80px 1fr 140px;
    gap: 25px;
  }
  .privacy__icon {
    font-size: 80px;
  }
}
@media (max-width: 767px) {
  .privacy {
    padding-block: 55px;
    grid-template-columns: 1fr;
    gap: 16px;
  }
  .privacy__icon {
    font-size: 60px;
  }
  .privacy__signature {
    display: none;
  }
}
</style>
