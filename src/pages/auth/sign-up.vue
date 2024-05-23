<script setup lang="ts">
import Simplebar from 'simplebar-vue'
import Typed from 'typed.js'
import {
  EnvelopeOpenIcon,
  LockClosedIcon,
  ShieldCheckIcon,
  UserIcon,
  XMarkIcon,
} from '@heroicons/vue/24/outline'
import type { ComponentInternalInstance } from 'vue'
import Space from './components/Space.vue'

const user = ref([
  {
    icon: EnvelopeOpenIcon,
    key: 'email',
    label: 'Enter your email',
    isShow: false,
    isFocus: false,
    type: 'email',
    value: '',
  },
  {
    icon: LockClosedIcon,
    key: 'password',
    label: 'Enter password',
    isShow: false,
    isFocus: false,
    type: 'password',
    value: '',
  },
  {
    icon: UserIcon,
    key: 'username',
    label: 'Enter your username',
    isShow: false,
    isFocus: false,
    type: 'text',
    value: '',
  },
  {
    icon: ShieldCheckIcon,
    key: 'verification_code',
    label: 'Enter email verification code',
    isShow: false,
    isFocus: false,
    type: 'text',
    value: '',
  },
])

const typewriterElement = ref(null)
const typed = ref()
let clickOutSideFunc: Function

const { proxy } = getCurrentInstance() as ComponentInternalInstance

/**
 * 下一步操作
 * @param ref Array<HTMLElement>
 * @param nextKey number
 */
function nextStep(ref: Array<HTMLInputElement>, nextKey: number) {
  const refInput = ref[0]

  if (refInput.value !== '') {
    // 当前输入框失去焦点
    handleBlur()

    // 如果当前输入框是最后一个，则进行提交
    if (nextKey >= user.value.length) {
      handleSubmit()
      return
    }

    // 选中下一个输入框
    user.value[nextKey].isShow = true
    // 下一个输入框获取焦点
    const nextRef = proxy?.$refs[user.value[nextKey].key] as Array<HTMLInputElement>
    handleFocus(nextRef)
    return
  }

  alert('请填写该字段。')
}
/**
 * 提交表单
 */
function handleSubmit() {
  const formData: { [Key: string]: string } = {}
  user.value.forEach((item) => {
    formData[item.key] = item.value
  })
  console.info(formData)
}
/**
 * 输入框获取焦点
 * @param ref Array<HTMLInputElement>
 */
function handleFocus(ref: Array<HTMLInputElement>) {
  const refInput = ref[0]
  const buttonDom = refInput.nextElementSibling as HTMLButtonElement

  user.value.forEach(item => item.isFocus = item.key === refInput.id)

  nextTick(() => {
    // 选中输入框
    refInput.focus()
  })

  // 注册输入框失焦后的事件
  clickOutSideFunc = onClickOutside(refInput, () => {
    handleBlur()
  }, {
    ignore: [buttonDom],
  })
}
/**
 * 输入框失去焦点
 */
function handleBlur() {
  user.value.forEach(item => item.isFocus = false)

  clickOutSideFunc()
}

onMounted(() => {
  typed.value = new Typed(typewriterElement.value, {
    strings: ['Welcome to HowIO!<br> Let’s begin the adventure!✨'],
    typeSpeed: 60,
    onComplete(arrayPos) {
      // 关闭光标
      arrayPos.cursor.remove()
      // 展示第一个输入框
      user.value[0].isShow = true
      // 选中第一个输入框
      const ref = proxy?.$refs[user.value[0].key] as Array<HTMLInputElement>
      handleFocus(ref)
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
            <div class="text-color-gray">
              <span ref="typewriterElement" />
            </div>
            <!-- form -->
            <div class="w-full mt-8 flex flex-col gap-y-8">
              <div v-for="(item, idx) in user" v-show="item.isShow" :key="idx" class="auth-form-input">
                <label :for="item.key">{{ item.label }}</label>
                <div class="input-box">
                  <component
                    :is="!item.isFocus && !item.value ? XMarkIcon : item.icon"
                    class="w-4 h-4 stroke-2 stroke-green-500"
                    :class="[!item.isFocus && !item.value && 'stroke-4 stroke-red-500']"
                  />
                  <input
                    :id="item.key" :ref="item.key" v-model="item.value" :type="item.type"
                    class="border-0"
                    :class="[item.isFocus ? 'border-b border-blue-500' : 'border-b-0']"
                    @keydown.enter="nextStep($refs[item.key] as Array<HTMLInputElement>, idx + 1)"
                    @click="handleFocus($refs[item.key] as Array<HTMLInputElement>)"
                  >
                  <button
                    :class="[item.isFocus ? 'block' : 'hidden']"
                    @click="nextStep($refs[item.key] as Array<HTMLInputElement>, idx + 1)"
                  >
                    Continue
                  </button>
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
    outline: none;
    padding: 0.25rem 0.5rem;

    &:hover {
      color: var(--color-green-400);
      border: 1px solid var(--color-green-400);
    }
  }
}
</style>
