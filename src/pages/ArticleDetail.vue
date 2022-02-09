<script setup lang="ts">
  import { useRouter, Router } from 'vue-router'
  import { useStore } from 'vuex'
  const stateCtx = useStore()
  const router: Router = useRouter()
  console.log('params: ', stateCtx.state.articleData)
</script>
<template>
  详情
</template>
<style scoped lang="scss"></style>