<script setup lang="ts">
import type { FormInst } from 'naive-ui'
import SignUpImg from '~assets/auth/sign-in.gif'
import CornerImg from '~assets/auth/corner.png'
import useMyFetch from '~/utils/fetch'

interface AuthType {
  name: string | null
  email: string | null
  password: string | null
  verification_code: string | null
}

const router = useRouter()
const formRef = ref<FormInst | null>(null)
const auth = ref<AuthType>({
  name: null,
  email: null,
  password: null,
  verification_code: null,
})

function sendVerificationCode() {
  if (auth.value.email === null) {
    window.$message.error('请先填写邮箱！')
    return false
  }

  const { error } = useMyFetch('user/email/verification-code').post({ email: auth.value.email }).json()
  if (error.value !== null)
    window.$message.error(error.value)
  else
    window.$message.success('邮箱验证码发送成功！')
}

async function submit() {
  const { data } = await useMyFetch('auth/sign-up').post(auth.value).json()
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
        <img h-78 w-78 :src="SignUpImg" alt="">
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
        z-10 min-h-lg w-80 rounded-xl bg-white px-12 py-16 shadow-2xl
      >
        <header w-full flex items-center justify-end lt-lg="justify-between">
          <div lg="hidden">
            <Logo />
          </div>
          <router-link
            :to="{ name: 'sign-in' }"
            flex flex-col items-end text-xs text-blue-500
          >
            I've got an account.
          </router-link>
        </header>
        <div mb-8 mt-3>
          <span text-5xl font-bold>Sign Up</span>
        </div>
        <!-- form -->
        <div>
          <n-form ref="formRef" :model="auth" size="large">
            <n-form-item path="name" label="用户名">
              <n-input
                v-model:value="auth.name"
                rounded-xl
                type="text"
                @keydown.enter.prevent
              />
            </n-form-item>
            <n-form-item path="email" label="邮箱">
              <n-input
                v-model:value="auth.email"
                rounded-xl
                type="text"
                @keydown.enter.prevent
              />
            </n-form-item>
            <n-form-item path="password" label="密码">
              <n-input
                v-model:value="auth.password"
                rounded-xl
                type="password"
                show-password-on="click"
                @keydown.enter.prevent
              />
            </n-form-item>
            <n-form-item path="verification_code" label="验证码">
              <div w-full>
                <n-input
                  v-model:value="auth.verification_code"
                  rounded-xl
                  @keydown.enter.prevent
                />
                <span
                  float-right mt-1 cursor-pointer text-sm text-blue-400 font-bold
                  @click="sendVerificationCode"
                >
                  发送验证码
                </span>
              </div>
            </n-form-item>
            <div flex justify-end>
              <n-button round w-full size="large" type="primary" @click="submit">
                Sign Up
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
  "name": "sign-up"
}
</route>
