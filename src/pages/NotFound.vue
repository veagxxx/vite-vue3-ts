<script setup lang="ts">
  import Page404 from '@/components/404.vue'
</script>
<template>
  <div class="not-found">
    <Page404/>
  </div>
</template>
<style scoped>
  .not-found {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
</style>