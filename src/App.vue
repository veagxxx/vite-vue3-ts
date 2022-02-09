<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
// import HelloWorld from '@/components/HelloWorld.vue'
import { onMounted } from 'vue';
import MessageApi from './pages/MessageApi.vue';
</script>

<template>
  <!-- 加载条 -->
  <n-loading-bar-provider>
    <!-- <n-scrollbar> -->
      <!-- 消息弹框 -->
      <n-message-provider>
        <MessageApi/>
        <!-- 通知 -->
        <n-notification-provider>
        <!-- 对话框 -->
          <n-dialog-provider>
            <router-view/>
          </n-dialog-provider>
        </n-notification-provider>
      </n-message-provider>
    <!-- </n-scrollbar> -->
  </n-loading-bar-provider>
</template>

<style>
  html, body, #app {
    height: 100%;
    width: 100%;
  }
</style>
