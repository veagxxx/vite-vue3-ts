<script setup lang="ts">
  import { computed, ComputedRef, ref, watch } from 'vue'
  import { menuOptions } from '../utils/headerCenter'
  import { Router, useRouter } from 'vue-router'
  const router: Router = useRouter()
  interface IAutoComplete {
    label: string;
    value: string;
  }
  // let activeKey = ref<null>('home')
  let activeKey = computed({
    get() {
      return router.currentRoute.value.name || ''
    },
    set(val) {
      
    }
  })
  const handleMenuUpdate = (key: string, item: any) => {
    // console.log('key', key, 'item', item);
  }
  const { isHide } = defineProps({
    isHide: {
      type: Boolean,
      default: () => false
    }
  })
  // console.log('isHide', isHide)
  const searchKey = ref<string>('')
  const options: ComputedRef<IAutoComplete[]> = computed(() => {
    return ['前端', '编程', 'Vue', 'JavaScript', 'React', 'Angular', 'HTML', 'HTML5', 'CSS', 'CSS3']
    .filter((item: string) => item.toLowerCase().includes(searchKey.value.toLowerCase()))
    .map((item: string) => {
      return {
        label: item,
        value: item
      }
    }) 
  })
  const handleSelect = (value: string) :void => {
    console.log('value', value)
  }
</script>
<template>
  <div class="flex">
    <n-menu 
      v-if="!isHide"
      @update:value="handleMenuUpdate" 
      v-model:value="activeKey" 
      mode="horizontal" 
      :options="menuOptions" 
    />
    <n-auto-complete 
      style="flex: 1;margin-left: 24px;"
      size="large" 
      :options="options" 
      v-model:value="searchKey" 
      placeholder="输入一些东西" 
      clearable
      @select="handleSelect"
    />
  </div>
</template>
<style scoped>

</style>