<template>
  <div class="trust">
    <div class="wrap trust__inner">
      <span
        >Made for your memories.<br /><strong
          >Built around your privacy.</strong
        ></span
      ><span>◈ &nbsp; 100% local processing</span
      ><span>▧ &nbsp; Photos & videos</span
      ><span>⊞ &nbsp; Made for Windows</span>
    </div>
  </div>
</template>
<style scoped lang="scss">
.trust {
  border-block: 1px solid var(--border);
}
.trust__inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  padding-block: 27px;
  font-size: 12px;
  color: var(--muted);
  > span:first-child {
    font-size: 11px;
    line-height: 1.7;
  }
  strong {
    font-weight: 500;
  }
}
@media (max-width: 767px) {
  .trust__inner {
    flex-wrap: wrap;
    justify-content: flex-start;
    gap: 22px 25px;
    font-size: 10px;
    > span:first-child {
      width: 100%;
      br {
        display: none;
      }
      strong {
        margin-left: 4px;
      }
    }
  }
}
</style>
