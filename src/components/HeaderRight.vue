<script setup lang="ts">
  import { ref, watch, onMounted, onUnmounted, computed, ComputedRef } from 'vue';
  import { 
    ColumnTriple24Regular,
    DarkTheme24Regular,
    LinkSquare12Filled,
    LocalLanguageZi24Filled,
  } from '@vicons/fluent'
  import { LogoGithub } from '@vicons/ionicons5'
  import { useMessage, useLoadingBar, useDialog } from 'naive-ui'
  import { DropDownOption, renderCustomHeader, renderIcon } from '../utils/headerRight'
  import { useRouter } from 'vue-router';
  const router = useRouter()
  // expects props options
  const { theme, locale } = defineProps({
    theme: Object,
    locale: Object,
  })
  const emits = defineEmits(['changeTheme', 'changeLanguage', 'changeLeftText'])
  const message = useMessage()
  const loadingBar = useLoadingBar()
  let language = ref<Array<string>>(['English', '中文'])
  let languageText = ref<string>(language.value[0])
  let bgColor = ref<Array<string>>(['深色', '浅色'])
  let bgColorText = ref<string>(bgColor.value[0])
  let githubText = ref<string>('Github')
  let githubLink = ref<string>('https://github.com/veagxxx/vite-vue3-ts')
  let timer = ref<any>(null)
  // 主题切换
  const handleChangeTheme = () => {
    loadingBar.start()
    let index = bgColor.value.indexOf(bgColorText.value)
    index = index + 1 >= bgColor.value.length ? 0 : index + 1
    bgColorText.value = bgColor.value[index]
    timer.value = setTimeout(() => {
      loadingBar.finish()
    }, 1000)
    emits('changeTheme')
  }
  // 语言切换
  const handleChangeLanguage = () => {
    let index = language.value.indexOf(languageText.value)
    index = index + 1 >= language.value.length ? 0 : index + 1
    languageText.value = language.value[index]
    emits('changeLanguage')
  }
  // 监听页面宽度变化
  let screenWidth = ref<number>(document.body.clientWidth)
  let isHide = ref<boolean>(false)
  const widthChange = () => {
    return (() => {
      screenWidth.value = document.body.clientWidth
    })()
  }
  // 生命周期
  onMounted(() => {
    window.onresize = widthChange
  })
  // 监听页面宽度变化(immediate需要设置为true，否则会有监听不到页面宽度变化的情况)
  watch(
    screenWidth, 
    (newVal: number) => {
      if (newVal && newVal <= 1000) {
        isHide.value = true
      } else {
        isHide.value = false
      }
      emits('changeLeftText', isHide.value)
    }, 
    { immediate: true }
  )

  // 下拉菜单选中
  const handleSelect = (key: string) => {
    message.info(key)
  }
  
  // 使用计算属性定义下拉菜单 option 选项
  const options: ComputedRef<DropDownOption[]> = computed(() => [
    {
      key: 'header',
      type: 'render',
      render: renderCustomHeader
    },
    {
      key: 'header-divider',
      type: 'divider'
    },
    {
      label: languageText.value,
      key: `Language: ${languageText.value}`,
      props: {
        onClick: handleChangeLanguage
      },
      icon: renderIcon(LocalLanguageZi24Filled)
    },
    {
      label: bgColorText.value,
      key: `Theme: ${bgColorText.value}`,
      props: {
        onClick: handleChangeTheme
      },
      icon: renderIcon(DarkTheme24Regular)
    },
    {
      label: githubText.value,
      key: `Github:${githubLink.value}`,
      props: {
        onClick: () => {

        }
      },
      icon: renderIcon(LogoGithub)
    }
  ])
  const handleAvatarSelect = (key: number) => {
    switch(key) {
      case 2: 
        doLogout()
        break
    }
  }
  const dialog = useDialog()
  const doLogout = () => {
    dialog.info({
      title: '提示',
      content: '您确定要退出登录吗',
      positiveText: '确定',
      negativeText: '取消',
      onPositiveClick: () => {
        localStorage.removeItem('token')
        router.replace({ name: 'Login' })
        message.success('成功退出登录');
      }
    })
  }
  // 卸载
  onUnmounted(() => {
    clearTimeout(timer)
  })
</script>
<template>
  <n-space v-if="!isHide">
    <n-button quaternary @click="handleChangeLanguage">
      <n-icon size="20"><LocalLanguageZi24Filled/></n-icon>{{ languageText }}
    </n-button>
    <n-button quaternary @click="handleChangeTheme">
      <n-icon size="20"><DarkTheme24Regular/></n-icon>{{ bgColorText }}
    </n-button>
    <n-button 
      tag="a" 
      target="_blank" 
      quaternary 
      :href="githubLink"
    ><n-icon size="20"><LogoGithub/></n-icon>{{ githubText }}
    </n-button>
    <n-dropdown 
      @select="handleAvatarSelect" 
      :options="[
        { key: 1, label: '我的' },
        { key: 2, label: '退出登录' }
      ]"
    >
      <n-avatar
        style="display: flex;"
        object-fit="fill"
        src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel1.jpeg"
        round
      />
    </n-dropdown>
  </n-space>
  <n-dropdown v-else @select="handleSelect" :options="options">
    <n-button quaternary><n-icon size="25"><ColumnTriple24Regular/></n-icon></n-button>
  </n-dropdown>
</template>
<style scoped>
  .n-space {
    display: flex;
    align-items: center;
  }
  .n-icon {
    height: unset;
  }
</style>