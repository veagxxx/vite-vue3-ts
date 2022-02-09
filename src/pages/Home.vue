<script lang="ts" setup>
  import { ref, onMounted, getCurrentInstance } from 'vue';
  import { useStore } from 'vuex';
  import { darkTheme, zhCN, dateZhCN } from 'naive-ui'
  import HeaderRight from '@/components/HeaderRight.vue'
  import HeaderCenter from '@/components/HeaderCenter.vue'
  import hljs from 'highlight.js/lib/core';
  import javascript from 'highlight.js/lib/languages/javascript'
  hljs.registerLanguage('javascript', javascript)
  const state = useStore()
  let count = ref<number>(state.getters.getCount);
  // const increteCount = () => {
  //   state.commit('changeCount', count.value++);
  // }
  let isHide = ref<boolean>(false)
  let theme = ref<any>(null)
  let locale = ref<any>(zhCN)
  const changeTheme = () => {
    theme.value = theme.value ? null : darkTheme
  }
  const changeLanguage = () => {
    locale.value = locale.value ? null : zhCN
  }
  const changeLeftText = (value: boolean) => {
    isHide.value = value
  }
  onMounted(() => {

  })
</script>
<template>
  <n-config-provider :theme="theme" :locale="locale" :hljs="hljs">
    <!-- n-global-style 将样式绑定到全局 -->
    <n-global-style/>
    <div class="home-page" >
      <n-layout class="layout" :native-scrollbar="false">
        <n-layout-header bordered style="height: 64px;z-index: 100;" position="absolute">
          <n-grid cols="6" item-responsive>
            <n-grid-item span="1 400:1 600:1 800:1">
              <div class="header-left">
                <img width="35" height="45" src="../assets/images/duck.jpeg"/>
                <n-text v-if="!isHide" style="font-size: 18px;margin-left:12px" type="default">
                  别卷了鸭
                </n-text>
              </div>
            </n-grid-item>
            <n-grid-item span="4 400:4 600:3 800:3">
              <div class="header-center">
                <HeaderCenter :isHide="isHide"/>
              </div>
            </n-grid-item>
            <n-grid-item span="1 400:1 600:2 800:2">
              <HeaderRight 
                :theme="theme" 
                :locale="locale"
                @changeTheme="changeTheme"
                @changeLanguage="changeLanguage"
                @changeLeftText="changeLeftText"
              />
            </n-grid-item>
          </n-grid>
        </n-layout-header>
        <n-layout class="layout-content" :native-scrollbar="false">
          <n-scrollbar>
            <router-view></router-view>
          </n-scrollbar>
          <n-back-top :right="100" />
        </n-layout>
      </n-layout>
    </div>
  </n-config-provider>
</template>
<style scoped>
  .n-layout {
    height: 100%;
    position: absolute;
    top: 0px;
    bottom: 0px;
    left: 0px;
    right: 0px;
  }
  .n-scrollbar :deep() .n-scrollbar-container {
    overflow: hidden !important;;
  }
  .n-layout-header {
    padding: 3px 20px;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
  .n-layout-header :deep() div {
    display: flex;
    align-items: center;
  }
  .n-layout-header :deep() div:last-child {
    justify-content: right;
  }
  .header-left {
    display: flex;
    align-items: center;
    justify-content: left;
  }
  .header-center {
    display: flex;
    align-items: center;
  }
  .header-right {
    display: flex;
    align-items: center;
    justify-content: right;
  }

  .layout-content {
    position: absolute;
    top: 64px;
    padding-bottom: 64px;
    margin: 10px;
    min-height: 100vh;
    overflow: hidden;
  }
</style>