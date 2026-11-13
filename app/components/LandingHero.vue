<template>
  <section class="hero wrap">
    <div class="hero__copy">
      <span class="eyebrow">● &nbsp; YOUR FILES. A LITTLE LIGHTER.</span>
      <h1>
        Less clutter.<br />More <em>room</em><br />for what matters<span
          >.</span
        >
      </h1>
      <p>
        A fresh start for your photo and video collection. Find duplicates,
        organize the chaos, and bring your memories back into focus.
      </p>
      <div class="hero__actions">
        <DownloadLink
          ><span class="windows">⊞</span> Download for Windows ↗</DownloadLink
        ><a class="text-link" href="#features">Take a closer look ↓</a>
      </div>
      <div class="hero__notes">
        <span>✓ No uploads</span><span>✓ No cloud required</span
        ><span>✓ All yours</span>
      </div>
    </div>
    <div class="hero__visual">
      <div class="hero__orbit"></div>
      <div class="photo photo--back">
        <img
          :src="mountainImage"
          alt="Mountain peaks beneath a blue sky"
        /><span>weekend escapes</span>
      </div>
      <div class="photo photo--front">
        <img
          :src="lakeImage"
          alt="A peaceful alpine lake reflecting the mountains"
        /><span>the ones worth keeping. <b>♡</b></span>
      </div>
      <div class="note note--top">
        <span>✦</span>
        <div>
          A little order. A lot of clarity.<small
            >Make space for your next chapter.</small
          >
        </div>
      </div>
      <div class="note note--bottom">
        <span>✓</span>
        <div>
          Your memories, organized.<small>Right where they belong.</small>
        </div>
      </div>
      <span class="hero__flower">✳</span
      ><span class="hero__caption">A clearer space. A clearer mind.</span>
    </div>
  </section>
</template>
<script setup lang="ts">
import { lakeImage, mountainImage } from "../data/landing";
</script>
<style scoped lang="scss">
.hero {
  display: grid;
  grid-template-columns: 1.05fr 1fr;
  gap: 30px;
  min-height: 650px;
  padding-block: 35px 72px;
  align-items: center;
}
.hero__copy {
  h1 {
    font-family: var(--font-heading);
    font-size: clamp(48px, 4.7vw, 67px);
    font-weight: 500;
    letter-spacing: -3.7px;
    line-height: 1.12;
    margin: 25px 0 24px;
    > span {
      color: var(--primary);
    }
  }
  > p {
    max-width: 390px;
    font-size: 14px;
    line-height: 1.85;
    color: var(--muted);
  }
}
.hero__actions {
  display: flex;
  align-items: center;
  gap: 25px;
  margin-top: 30px;
}
.hero__notes {
  display: flex;
  gap: 18px;
  font-size: 10px;
  color: var(--muted);
  margin-top: 21px;
}
.hero__visual {
  position: relative;
  min-width: 0;
  height: 490px;
}
.hero__orbit {
  position: absolute;
  border: 1px solid var(--border);
  border-radius: 50%;
  width: 420px;
  height: 420px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  &::after {
    content: "";
    position: absolute;
    inset: -40px;
    border: 1px dashed var(--border);
    border-radius: 50%;
  }
}
.photo {
  position: absolute;
  background: white;
  padding: 11px 11px 0;
  border: 1px solid var(--border);
  border-radius: 4px;
  box-shadow: 0 12px 30px var(--shadow);
  img {
    width: 100%;
    object-fit: cover;
    display: block;
  }
  > span {
    display: flex;
    justify-content: space-between;
    padding: 16px 4px;
    color: var(--muted);
    font-size: 11px;
  }
}
.photo--back {
  width: 265px;
  right: 1px;
  top: 31px;
  transform: rotate(12deg);
  img {
    height: 245px;
  }
}
.photo--front {
  width: 305px;
  left: 19px;
  top: 130px;
  transform: rotate(-9deg);
  img {
    height: 245px;
  }
  > span {
    font-family: var(--font-editorial);
    font-style: italic;
    font-size: 16px;
  }
  b {
    font-weight: 400;
  }
}
.note {
  position: absolute;
  z-index: 2;
  display: flex;
  align-items: center;
  gap: 12px;
  background: #ffffffed;
  border: 1px solid var(--border);
  border-radius: 9px;
  padding: 15px 17px;
  box-shadow: 0 5px 18px var(--shadow);
  font-size: 11px;
  > span {
    font-size: 27px;
    color: var(--muted);
  }
  small {
    display: block;
    font-size: 9px;
    color: var(--muted);
    margin-top: 5px;
  }
}
.note--top {
  top: 44px;
  left: -5px;
  transform: rotate(-3deg);
}
.note--bottom {
  right: -6px;
  bottom: 19px;
  transform: rotate(3deg);
  > span {
    font-size: 16px;
    background: var(--surface);
    border-radius: 50%;
    width: 32px;
    height: 32px;
    display: grid;
    place-items: center;
  }
}
.hero__flower {
  position: absolute;
  right: 8px;
  top: 340px;
  color: var(--muted);
  font-size: 67px;
}
.hero__caption {
  position: absolute;
  left: 83px;
  bottom: -18px;
  color: var(--muted);
  font-family: var(--font-editorial);
  font-style: italic;
  font-size: 13px;
  transform: rotate(-5deg);
}
@media (min-width: 1600px) {
  .hero {
    min-height: 730px;
    gap: 75px;
  }
  .hero__copy h1 {
    font-size: 74px;
  }
}
@media (max-width: 1100px) {
  .hero {
    gap: 15px;
  }
  .hero__copy h1 {
    font-size: 53px;
  }
  .hero__visual {
    transform: scale(0.85);
  }
  .hero__actions {
    flex-wrap: wrap;
    gap: 15px;
  }
}
@media (max-width: 767px) {
  .hero {
    grid-template-columns: 1fr;
    padding-block: 35px 45px;
    gap: 10px;
  }
  .hero__copy {
    h1 {
      font-size: clamp(44px, 8vw, 64px);
      letter-spacing: -2.6px;
    }
    > p {
      font-size: 13px;
      max-width: 450px;
    }
  }
  .hero__notes {
    font-size: 9px;
    gap: 16px;
  }
  .hero__visual {
    width: min(440px, 100%);
    height: 440px;
    margin-inline: auto;
    transform: scale(0.9);
  }
  .photo--front {
    left: 0;
    width: 270px;
    img {
      height: 210px;
    }
  }
  .photo--back {
    right: 10px;
    width: 230px;
    img {
      height: 205px;
    }
  }
  .note--top {
    left: 0;
    top: 40px;
  }
  .note--bottom {
    right: 0;
    bottom: 0;
  }
  .hero__orbit {
    width: 290px;
    height: 290px;
    &::after {
      inset: -20px;
    }
  }
  .hero__flower {
    right: 0;
    top: 300px;
  }
  .hero__caption {
    bottom: -24px;
    left: 25px;
  }
}
</style>
