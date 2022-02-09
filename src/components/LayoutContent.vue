<script setup lang="ts">
  import { onMounted, ref, watch } from 'vue'
  import { cardItem, cardList } from '../utils/contentCard'
  import { MoreCircle20Regular } from '@vicons/fluent'
  import CardIcon from '../utils/CardIcon'
  const greetings = ref<Array<string>>([
    '早安，打工人，开始您一天的工作吧！',
    '中午好，打工人，吃个午饭睡个午觉继续加油干！',
    '下午好，打工人，今天是摸鱼还是忙碌的一天呢？',
    '晚安，打工人，洗个澡澡睡觉吧！',
  ])
  let currentGreeting = ref<string>(greetings.value[0])
  const today = ref<Date>(new Date())
  let currentHour = ref<number>(today.value.getHours())
  onMounted(() => {
    if (currentHour.value >= 12 && currentHour.value <= 13) {
      currentGreeting.value = greetings.value[1]
    } else if (currentHour.value >= 14 && currentHour.value < 22) {
      currentGreeting.value = greetings.value[2]
    } else if (currentHour.value >= 22 && currentHour.value < 24) {
      currentGreeting.value = greetings.value[3]
    } else {
      currentGreeting.value = greetings.value[0]
    }
  }) 
  watch(
    currentHour, 
    (newVal: number) => {
      if (newVal) {
        currentHour.value = newVal
      }
    },
    { immediate: true }
  )
</script>
<template>
  <div class="content">
    <n-card :bordered="true" >
      <n-grid cols="1 xs:1 s:2 m:2 l:2 xl:2 2xl:2" responsive="screen">
        <n-gi>
          <div class="flex item-center">
            <div class="flex item-center">
              <n-avatar 
                circle 
                :size="64" 
                src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel1.jpeg" 
              />
            </div>
            <div>
              <p class="px-4 text-xl">{{ currentGreeting }}</p>
              <p class="px-4">今日阴转大雨，15℃ - 25℃，出门记得带伞哦。</p>
            </div>
          </div>
        </n-gi>
        <n-gi>
          <div class="flex justify-end">
            <div class="flex flex-1 flex-col justify-center text-right">
              <span class="text-secondary">项目数</span>
              <span class="text-xl">16</span>
            </div>
            <div class="flex flex-1 flex-col justify-center text-right">
              <span class="text-secondary">待办</span>
              <span class="text-xl">3/15</span>
            </div>
            <div class="flex flex-1 flex-col justify-center text-right">
              <span class="text-secondary">消息</span>
              <span class="text-xl">35</span>
            </div>
          </div>
        </n-gi>
      </n-grid>
    </n-card>
    <div class="flex item-center mg-15">
      <n-grid x-gap="14" y-gap="14" cols="1 400:1 600:1 800:1 900:2">
        <n-gi>
          <n-card :bordered="true" title="前端编程">
            <n-grid x-gap="5" y-gap="5" cols="1 400:2 600:2 800:4 900:3">
              <n-gi v-for="(item, index) in cardItem" :key="index + 'gi'">
                <n-card :title="item.title" hoverable class="h-150 pointer">
                  <template #header>
                    <div class="flex item-center">
                      <i class="icon-font" :style="item.iconStyle">
                        <CardIcon :cardIcon="item.icon"/>
                      </i>
                      <span style="margin-left: 10px;">{{ item.title }}</span>
                    </div>
                  </template>
                  <span>{{ item.content }}</span>
                </n-card>
              </n-gi>
            </n-grid>
          </n-card>
        </n-gi>
        <n-gi>
          <n-card :bordered="true" title="动态" content-style="padding: 0px">
            <template #header-extra>
              <a href="javascript:;"><n-icon><MoreCircle20Regular/></n-icon>更多</a>
            </template>
            <n-list bordered style="margin: 0px;">
              <n-list-item v-for="(nItem, nIndex) in cardList" :key="nIndex + 'list'">
                <template #prefix>
                  <n-avatar :src="nItem.avatar" circle :size="40"></n-avatar>
                </template>
                <n-thing :title="nItem.content">
                  <template #description>
                    <span>{{ nItem.publishTime }}</span>
                  </template>
                </n-thing>
              </n-list-item>
            </n-list>
          </n-card>
        </n-gi>
      </n-grid>
    </div>
  </div>
</template>
<style scoped>
  .flex {
    display: flex;
  }
  .item-center {
    align-items: center;
  }
  .justify-end {
    justify-content: flex-end;
  }
  .justify-center {
    justify-content: center;
  }
  .between {
    justify-content: space-between;
  }
  .flex-1 {
    flex: 1;
  }
  .flex-col {
    flex-direction: column;
  }
  .px-4 {
    margin: 0px;
  }
  .text-xl {
    font-size: 20px;
    font-weight: 500;
  }
  .text-right {
    text-align: right;
  }
  .mg-15 {
    margin: 15px 0px;
  }
  .h-150 {
    height: 150px;
  }
  .pointer {
    cursor: pointer;
  }
  .icon-font {
    font-size: 24px;
    line-height: 0px;
  }
  a {
    text-decoration: none;
    color: deepskyblue;
    display: flex;
    align-items: center;
  }
</style>