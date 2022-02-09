<script lang="ts" setup>
  import { ref } from 'vue';
  import { useMessage } from 'naive-ui'
  import { useRouter } from 'vue-router';
  import UserService from '@/api/UserService'
  import { useStore } from 'vuex'
  import { SETTOKEN } from '@/store/actionTypes';
  const router = useRouter()
  const state = useStore()
  const formRef = ref()
  const message = useMessage();
  const { loginUser, loginRules }: Record<string, any> | undefined = defineProps({
    loginUser: {
      type: Object,
    },
    loginRules: {
      type: Object,
    },
  })
  const emits = defineEmits(['changeLoading'])
  const handleLogin = (e: any): void => {
    e.preventDefault();
    formRef.value.validate(async (errors: any) => {
      if (!errors) {
        emits('changeLoading')
        const res = await UserService.loginVerify(loginUser)
        if (res.code == 200) {
          state.dispatch(SETTOKEN, res.token)
          message.success('验证成功')
          emits('changeLoading')
          router.push("/index")
        } else {
          message.error(res.message || '验证失败')
        }
      } else {
        message.error('验证失败')
      }
    })
  }
</script>
<template>
  <n-form :model="loginUser" :rules="loginRules" ref="formRef" label-placement="left">
    <n-form-item path="email" label="邮箱">
      <n-input 
        v-model:value="loginUser.email" 
        placeholder="Enter email"  
      />
    </n-form-item>
    <n-form-item path="password" label="密码">
      <n-input
        v-model:value="loginUser.password"
        type="password"
        placeholder="Enter password"
      />
    </n-form-item>
    <n-row :gutter="[0, 24]">
      <n-col :span="24">
        <div style="display: flex; justify-content: flex-end;">
          <n-button
            round
            type="primary"
            @click="handleLogin"
          >
            登录
          </n-button>
        </div>
      </n-col>
    </n-row>
  </n-form>
</template>
<style scoped lang="scss">
</style>