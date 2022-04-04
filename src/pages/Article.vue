<script lang="ts" setup>
  import { articleList, IArticle } from '../utils/recommend'
  import { Code, ThumbsUpOutline, ChatboxEllipsesOutline } from '@vicons/ionicons5'
  import { Router, useRouter } from 'vue-router';
  import { onMounted, reactive, ref } from 'vue';
  import ArticleService, { IArticleResultData } from "@/api/ArticeService"
  import { useStore } from 'vuex'
  import { SETARTICLEDATA } from '@/store/actionTypes';
  const state = useStore()
  const router: Router = useRouter()
  const toDetialPage = (item: IArticle): void => {
    router.push({
      // name: `articleDetial`,
      path: `/article/${item.articleId}`,
    })
    state.dispatch(SETARTICLEDATA, item)
  }
  const articleData = reactive({
    queryList: [{
      articleContent: "",
      articleId: 1,
      articleTitle: "",
      author: "",
      code: "",
      comments: [],
      email: "",
      phoneNo: "",
      publishTime: "",
      thumbs: []
    }],
  })
  let isEmpty = ref<boolean>(true)
  onMounted(async () => {
    const res: any = await ArticleService.queryArticleList()
    articleData.queryList = res.data
    if (res.data.length) {
      isEmpty.value = false
    }
    console.log('reszzz', articleData.queryList)
  })
</script>
<template>
  <div class="article">
    <n-grid x-gap="14" y-gap="14" cols="1 400:1 600:1 800:1 900:2">
      <n-gi>
        <n-empty v-if="isEmpty" description="你什么也找不到">
          <template #extra>
            <n-button size="small">空空如也</n-button>
          </template>
        </n-empty>
        <n-list v-else bordered style="margin: 0px;">
          <n-list-item 
            v-for="(nItem, nIndex) in articleData.queryList" 
            :key="nIndex + 'at'"
            class="pointer"
          >
            <n-thing :title="nItem.articleTitle">
              <template #description>
                <div class="flex between" @click="toDetialPage(nItem)">
                  <span>{{ nItem.publishTime }}</span>
                  <div class="flex around">
                    <div class="mg-5 flex">
                      <!-- <n-avatar :src="nItem.avatar" :size="18" round></n-avatar> -->
                      <span>作者：{{ nItem.author }}</span>
                    </div>
                    <div class="mg-5 pointer flex" style="font-size: 16px;">
                      <n-icon><ThumbsUpOutline/></n-icon>
                      <span>{{ nItem.thumbs.length }}</span>
                    </div>
                    <div class="mg-5 pointer flex" style="font-size: 16px;">
                      <n-icon><ChatboxEllipsesOutline/></n-icon>
                      <span>{{ nItem.comments.length }}</span>
                    </div>
                  </div>
                </div>
              </template>
              <template #footer>
                <n-collapse>
                  <template #arrow>
                    <n-icon><Code></Code></n-icon>
                  </template>
                  <n-collapse-item title="显示代码" name="1">
                    <div>
                      <n-code :code="nItem.code" language="javascript" />
                    </div>
                  </n-collapse-item>
                </n-collapse>
              </template>
            </n-thing>
          </n-list-item>
        </n-list>
      </n-gi>
    </n-grid>
  </div>
</template>
<style scoped lang="scss">
  .flex {
    display: flex;
    align-items: center;
  }
  .between {
    justify-content: space-between;
  }
  .around {
    justify-content: space-around;
  }
  .mg-5 {
    margin: 0 5px;
  }
  .pointer {
    cursor: pointer;
  }
</style>