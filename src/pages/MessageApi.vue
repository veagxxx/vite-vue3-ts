<template>
  <div></div>
</template>
<script setup lang="ts">
  import { useMessage } from 'naive-ui'
  import { getCurrentInstance  } from 'vue'
  const ctx = getCurrentInstance()
  const message = useMessage();
  window.$message = message
</script>