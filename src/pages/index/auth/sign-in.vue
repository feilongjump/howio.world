<script setup lang="ts">
import type { FormInst } from 'naive-ui'
import SignInImg from '~assets/auth/sign-in.gif'
import CornerImg from '~assets/auth/corner.png'
import GitHubImg from '~assets/github.png'
import WeChatImg from '~assets/wechat.svg'
import useMyFetch from '~utils/fetch.ts'

interface SignInType {
  username: string | null
  password: string | null
}

const router = useRouter()
const formRef = ref<FormInst | null>(null)
const auth = ref<SignInType>({
  username: null,
  password: null,
})

async function submit() {
  const { data } = await useMyFetch('auth/sign-in').post(auth.value).json()
  useStorage('token', data.value.token)

  const { data: me } = await useMyFetch('me').get().json()
  useStorage('me', me)

  window.$message.success('你好啊！今天天气晴朗🌞')
  router.push({ name: 'index' })
}
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
        <Logo />
      </div>
      <!-- img -->
      <div mb-32 flex flex-col items-center>
        <img h-78 w-78 :src="SignInImg" alt="">
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
          <div lg="hidden">
            <Logo />
          </div>
          <router-link
            :to="{ name: 'sign-up' }"
            flex flex-col items-end text-xs text-blue-500
          >
            <span>No account?</span>
            <span>Sign Up</span>
          </router-link>
        </header>
        <div mb-8 mt-3>
          <span text-5xl font-bold>Sign In</span>
        </div>
        <div mb-16 h-12 flex gap-x-4>
          <div
            class="w-10/12 bg-#33AFFD"
            h-full flex cursor-pointer items-center justify-center gap-x-3 rounded-xl
          >
            <img h-6 w-6 :src="GitHubImg" alt="">
            <span text-white font-bold>Sign in with GitHub</span>
          </div>
          <div
            class="w-2/12 bg-#04BE02"
            h-full flex cursor-pointer items-center justify-center gap-x-3 rounded-xl
          >
            <img h-6 w-6 :src="WeChatImg" alt="">
          </div>
        </div>
        <!-- form -->
        <div>
          <n-form ref="formRef" :model="auth" size="large">
            <n-form-item path="username" label="账号">
              <n-input
                v-model:value="auth.username"
                rounded-xl
                type="text"
                @keydown.enter.prevent
              />
            </n-form-item>
            <n-form-item path="password" label="密码">
              <div w-full>
                <n-input
                  v-model:value="auth.password"
                  rounded-xl
                  type="password"
                  show-password-on="click"
                  @keydown.enter.prevent
                />
                <router-link
                  float-right mt-1 text-sm text-blue-400 font-bold
                  :to="{ name: 'forgot-password' }"
                >
                  Forgot password?
                </router-link>
              </div>
            </n-form-item>
            <div flex justify-end>
              <n-button round w-full size="large" type="primary" @click="submit">
                Sign In
              </n-button>
            </div>
          </n-form>
        </div>
      </div>
      <div />
    </div>
    <!-- img -->
    <div fixed bottom-0 right-0 h-72 w-72 lt-md="hidden">
      <img h-full w-full :src="CornerImg" alt="">
    </div>
  </div>
</template>

<route lang="json">
{
  "name": "sign-in"
}
</route>
