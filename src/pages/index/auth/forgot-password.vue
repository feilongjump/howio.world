<script setup lang="ts">
import type { FormInst } from 'naive-ui'

interface ModelType {
  email: string | null
  password: string | null
  verification_code: string | null
}

const formRef = ref<FormInst | null>(null)
const model = ref<ModelType>({
  email: null,
  password: null,
  verification_code: null,
})
</script>

<template>
  <div h-screen w-screen flex>
    <!-- left -->
    <div
      lt-lg="hidden"
      w-92 flex-none bg-gray-100 px-8 py-6
    >
      <!-- logo -->
      <div h-52>
        <router-link :to="{ name: 'index' }">
          <span text-xl font-bold>
            How <span text-blue-400>IO</span><span ml-2px text-pink-500>.</span>
          </span>
        </router-link>
      </div>
      <!-- img -->
      <div mb-32 flex flex-col items-center>
        <img h-78 w-78 src="/src/assets/auth/forgot-password.png" alt="">
        <div mt-2>
          <span text-xs text-gray-400>
            Icons by
            <a text-gray-400 underline target="_blank" href="https://igoutu.cn/">
              Icons8
            </a>
          </span>
        </div>
      </div>
      <!-- phrases -->
      <p tracking-wid text-center text-gray-600 font-bold leading-6>
        <span>
          不管生活给你多少焦虑烦躁，
          <br>你只需保持自律自信的生活状态。
        </span>
      </p>
    </div>
    <!-- main -->
    <div
      lg="justify-evenly"
      flex grow items-center justify-center
    >
      <div
        lt-sm="w-full px-6 py-8 border-none shadow-none"
        border="1 solid gray-200"
        z-10 h-lg w-80 rounded-xl bg-white px-12 py-16 shadow-2xl
      >
        <header w-full flex items-center justify-end lt-lg="justify-between">
          <router-link :to="{ name: 'index' }" lg="hidden">
            <span text-xl font-bold>
              How <span text-blue-400>IO</span><span ml-2px text-pink-500>.</span>
            </span>
          </router-link>
          <router-link
            :to="{ name: 'sign-in' }"
            flex flex-col items-end text-xs text-blue-500
          >
            I didn't forget my password.
          </router-link>
        </header>
        <div mb-8 mt-3>
          <span text-3xl font-bold>Forgot Password</span>
        </div>
        <!-- form -->
        <div>
          <n-form ref="formRef" :model="model" size="large">
            <n-form-item path="email" label="邮箱">
              <div w-full>
                <n-input
                  v-model:value="model.email"
                  rounded-xl
                  @keydown.enter.prevent
                />
                <span
                  float-right mt-1 cursor-pointer text-sm text-blue-400 font-bold
                >
                  发送验证码
                </span>
              </div>
            </n-form-item>
            <n-form-item path="verification_code" label="验证码">
              <n-input
                v-model:value="model.verification_code"
                rounded-xl
                @keydown.enter.prevent
              />
            </n-form-item>
            <n-form-item path="password" label="密码">
              <n-input
                v-model:value="model.password"
                rounded-xl
                type="password"
                show-password-on="click"
                @keydown.enter.prevent
              />
            </n-form-item>
            <div flex justify-end>
              <n-button round w-full size="large" type="primary">
                Reset Password
              </n-button>
            </div>
          </n-form>
        </div>
      </div>
      <div />
    </div>
    <!-- img -->
    <div fixed bottom-0 right-0 h-72 w-72 lt-md="hidden">
      <img h-full w-full src="/src/assets/auth/corner.png" alt="">
    </div>
  </div>
</template>

<route lang="json">
{
  "name": "forgot-password"
}
</route>
