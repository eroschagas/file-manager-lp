<template>
  <section class="closing wrap">
    <span class="eyebrow">MAKE ROOM FOR WHAT’S NEXT</span>
    <h2>A little less clutter.<br />A lot more <em>possibility.</em></h2>
    <DownloadLink
      ><span class="windows">⊞</span> Download Lumora for Windows
      ↗</DownloadLink
    >
    <p>Your memories don’t need the cloud. Just a little care.</p>
    <span class="closing__flower" aria-hidden="true">✳</span>
  </section>
</template>
<style scoped lang="scss">
.closing {
  position: relative;
  overflow: hidden;
  text-align: center;
  border: 1px solid var(--border);
  border-radius: 12px;
  background: var(--primary-soft);
  padding: 62px 30px;
  h2 {
    font-size: 43px;
    margin: 20px 0 28px;
  }
  > p {
    font-size: 10px;
    color: var(--muted);
    margin-top: 18px;
  }
  .download-link {
    position: relative;
    z-index: 1;
  }
}
.closing__flower {
  position: absolute;
  right: 55px;
  bottom: -60px;
  color: var(--primary);
  opacity: 0.08;
  font-size: 250px;
  transform: rotate(15deg);
  pointer-events: none;
}
@media (max-width: 767px) {
  .closing {
    padding: 45px 18px;
    h2 {
      font-size: 33px;
    }
    .eyebrow {
      font-size: 8px;
    }
  }
  .closing__flower {
    right: -65px;
    opacity: 0.5;
  }
}
</style>
