<script setup lang="ts">
import Simplebar from 'simplebar-vue'
import Typed from 'typed.js'
import {
  EnvelopeOpenIcon,
  LockClosedIcon,
  ShieldCheckIcon,
  UserIcon,
} from '@heroicons/vue/24/outline'
import Space from './components/Space.vue'

const typewriterElement = ref(null)
const typed = ref()
onMounted(() => {
  typed.value = new Typed(typewriterElement.value, {
    strings: ['Welcome to HowIO!<br> Let’s begin the adventure!✨'],
    typeSpeed: 60,
    onComplete(arrayPos) {
      // 关闭光标
      arrayPos.cursor.remove()
    },
  })
})
onUnmounted(() => {
  if (typed.value) {
    typed.value.destroy()
    typed.value = null
  }
})
</script>

<template>
  <div class="h-screen w-screen">
    <Simplebar class="h-full">
      <div class="h-screen w-screen flex flex-col relative overflow-hidden">
        <header class="h-16 w-full py-4">
          <div class="max-w-7xl flex justify-between items-center mx-auto px-2 sm:px-10">
            <RouterLink :to="{ name: 'index' }">
              <img class="w-8 h-8" src="@/assets/logo.svg" alt="">
            </RouterLink>
            <div class="text-color-gray text-sm">
              <span>已经有账号了？</span>
              <RouterLink class="text-white text-base font-semibold" to="#">
                Sign in →
              </RouterLink>
            </div>
          </div>
        </header>
        <main class="flex-auto min-h-96 w-screen pt-20 px-2 sm:px-10 flex flex-col items-center">
          <div class="max-w-[36rem] w-full h-fit px-2 sm:px-6 pt-6 pb-8 card flex flex-col">
            <span ref="typewriterElement" class="text-color-gray" />
            <!-- form -->
            <div class="w-full mt-8 flex flex-col gap-y-8">
              <div class="auth-form-input">
                <label for="email">Enter your email</label>
                <div class="input-box">
                  <EnvelopeOpenIcon class="w-4 h-4 stroke-pink-500 stroke-2" />
                  <input id="email" type="text">
                  <button>Continue</button>
                </div>
              </div>
              <div class="auth-form-input">
                <label for="password">Enter password</label>
                <div class="input-box">
                  <LockClosedIcon class="w-4 h-4 stroke-pink-500 stroke-2" />
                  <input id="password" type="text">
                  <button>Continue</button>
                </div>
              </div>
              <div class="auth-form-input">
                <label for="username">Enter your username</label>
                <div class="input-box">
                  <UserIcon class="w-4 h-4 stroke-pink-500 stroke-2" />
                  <input id="username" type="text">
                  <button>Continue</button>
                </div>
              </div>
              <div class="auth-form-input">
                <label for="code">Enter email verification code</label>
                <div class="input-box">
                  <ShieldCheckIcon class="w-4 h-4 stroke-pink-500 stroke-2" />
                  <input id="code" type="text">
                  <button>Continue</button>
                </div>
              </div>
            </div>
          </div>
          <div class="mt-8 flex flex-col items-center text-color-gray text-xs">
            <span>你想使用 WeChat 或者 GitHub 进行注册登录吗？</span>
            <span>那再等等吧，因为我还没有开发。😂</span>
          </div>
        </main>
        <footer
          class="h-24 w-full pb-10 px-2 sm:px-10 text-color-gray
          flex justify-center items-center gap-2 sm:gap-6 flex-col sm:flex-row"
        >
          <a href="https://beian.miit.gov.cn" target="_blank" class="text-xs link">粤ICP备2024196417号</a>
          <a href="https://howio.world" target="_blank" class="text-sm link">Site by: FeiLoong</a>
        </footer>
        <!-- space -->
        <div class="h-full w-full absolute top-0 left-0 -z-10">
          <Space />
        </div>
      </div>
    </Simplebar>
  </div>
</template>

<route lang="json">
{
  "name": "sign-up"
}
</route>

<style scoped>
.auth-form-input {

  &>label {
    color: var(--color-blue-300);
    font-weight: 600;
  }
  &>.input-box{
    display: flex;
    align-items: center;
    column-gap: 0.5rem;
  }

  & input{
    height: 2rem;
    border: 0;
    border-bottom: 1px solid var(--color-blue-500);
    padding-left: 0.25rem;
    outline: none;
    flex: 1 1 auto;
  }
  & button{
    height: 2rem;
    color: var(--color-gray-400);
    border: 1px solid var(--color-gray-400);
    border-radius: 0.25rem;
    cursor: pointer;
    padding: 0.25rem 0.5rem;

    &:hover {
      color: var(--color-green-400);
      border: 1px solid var(--color-green-400);
    }
  }
}
</style>
