<script lang="ts" setup>
  import { ref } from 'vue'
  import { loginUser, loginRules } from '../utils/loginForm'
  import LoginForm from '@/components/LoginForm.vue'
  let loginLoad = ref<boolean>(false)
</script>

<template>
  <div class="container">
    <n-spin :show="loginLoad">
      <div class="login">
        <div class="loginForm">
          <LoginForm 
            :loginUser="loginUser" 
            :loginRules="loginRules" 
            @changeLoading="loginLoad = !loginLoad"
          />
        </div>
      </div>
    </n-spin>
  </div>
</template>

<style scoped lang="scss">
  .container {
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    .n-spin-container {
      width: 100%;
      height: 100%;
      :deep() .n-spin-content {
        height: 100%;
      }
    }
    .login {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      /* background-color: v-bind(color); */
      .loginForm {
        display: flex;
        align-items: center;
        padding: 5px;
        width: 40%;
        height: 50%;
        box-shadow: 1px 1px 3px 1px #888888;
      }
    }
  }
  .n-form {
    width: 100%;
  }
</style>