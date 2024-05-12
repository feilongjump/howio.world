<script setup lang="ts">
import Simplebar from 'simplebar-vue'
import Typed from 'typed.js'
import {
  EnvelopeOpenIcon,
  LockClosedIcon,
  ShieldCheckIcon,
  UserIcon,
} from '@heroicons/vue/24/outline'
import { type ComponentInternalInstance, proxyRefs } from 'vue'
import Space from './components/Space.vue'

const user = ref([
  {
    icon: EnvelopeOpenIcon,
    key: 'email',
    label: 'Enter your email',
    isShow: false,
    type: 'email',
    value: '',
  },
  {
    icon: LockClosedIcon,
    key: 'password',
    label: 'Enter password',
    isShow: false,
    type: 'password',
    value: '',
  },
  {
    icon: UserIcon,
    key: 'username',
    label: 'Enter your username',
    isShow: false,
    type: 'text',
    value: '',
  },
  {
    icon: ShieldCheckIcon,
    key: 'verification_code',
    label: 'Enter email verification code',
    isShow: false,
    type: 'text',
    value: '',
  },
])

const typewriterElement = ref(null)
const typed = ref()

const { proxy } = getCurrentInstance() as ComponentInternalInstance

/**
 * 下一步操作
 * @param ref Array<HTMLElement>
 * @param nextKey number
 */
function nextStep(ref: Array<HTMLInputElement>, nextKey: number) {
  const refInput = ref[0]
  const prevDom = refInput.previousElementSibling as HTMLElement
  const nextDom = refInput.nextElementSibling as HTMLElement

  if (ref[0].value !== '') {
    // icon 更改颜色
    handleDomClass(prevDom, 'stroke-green-500', 'stroke-pink-500')
    // 更改当前 input 边框颜色
    handleDomClass(refInput, 'border-blue-500', 'border-red-500')
    // 隐藏按钮
    nextDom.style.display = 'none'

    // 如果当前输入框是最后一个，则进行提交
    if (nextKey >= user.value.length) {
      handleSubmit()
      return
    }

    // 选中下一个输入框
    user.value[nextKey].isShow = true
    // 下一个输入框获取焦点
    const nextRef = proxy?.$refs[user.value[nextKey].key] as Array<HTMLElement>
    nextTick(() => {
      nextRef[0].focus()
      handleDomClass(nextRef[0], 'border-b', '')
    })

    return
  }

  // 值不能为空，后续需要进行用户信息提醒
  handleDomClass(refInput, 'border-red-500', '')
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
 * @param ref Array<HTMLElement>
 */
function handleFocus(ref: Array<HTMLInputElement>) {
  const refInput = ref[0]
  const nextDom = refInput.nextElementSibling as HTMLElement
  const prevDom = refInput.previousElementSibling as HTMLElement

  // icon 更改颜色
  handleDomClass(prevDom, 'stroke-pink-500', 'stroke-green-500')
  // 更改输入框样式
  handleDomClass(refInput, 'border-blue-500', 'border-red-500')
  handleDomClass(refInput, 'border-b', '')
  // 显示按钮
  nextDom.style.display = 'block'
}
/**
 * 输入框失去焦点
 * @param ref Array<HTMLElement>
 */
function handleBlur(ref: Array<HTMLInputElement>) {
  const refInput = ref[0]
  const prevDom = refInput.previousElementSibling as HTMLElement
  const nextDom = refInput.nextElementSibling as HTMLElement

  // 需要根据当前输入框是否有值进行更改 icon 颜色
  if (refInput.value !== '') {
    // 存在值
    // 隐藏按钮
    // TODO: 由于输入框失去焦点时，会隐藏按钮，导致按钮的点击事件失效
    setTimeout(() => {
      nextDom.style.display = 'none'
    }, 300)
    // icon 更改颜色
    handleDomClass(prevDom, 'stroke-green-500', 'stroke-pink-500')
    // 更改输入框样式
    handleDomClass(refInput, '', 'border-b')
  }
  else {
    // 不存在值
    // icon 更改颜色
    handleDomClass(prevDom, 'stroke-pink-500', 'stroke-green-500')
    // 更改输入框样式
    handleDomClass(refInput, 'border-red-500', 'border-blue-500')
    handleDomClass(refInput, 'border-b', '')
  }
}
/**
 * 操作 dom 元素 class
 * @param dom HTMLElement
 * @param addClass string
 * @param removeClass string
 */
function handleDomClass(dom: HTMLElement, addClass?: string, removeClass?: string) {
  if (addClass)
    dom.classList.add(addClass)
  if (removeClass)
    dom.classList.remove(removeClass)
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
      const ref = proxy?.$refs[user.value[0].key] as Array<HTMLElement>
      nextTick(() => {
        ref[0].focus()
        handleDomClass(ref[0], 'border-b', '')
      })
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
              <div v-for="(item, idx) in user" v-show="item.isShow" :key="idx" class="auth-form-input">
                <label :for="item.key">{{ item.label }}</label>
                <div class="input-box">
                  <component :is="item.icon" class="w-4 h-4 stroke-pink-500 stroke-2" />
                  <input
                    :ref="item.key" v-model="item.value" :type="item.type"
                    class="border-0 border-blue-500"
                    @keydown.enter="nextStep($refs[item.key] as Array<HTMLInputElement>, idx + 1)"
                    @focus="handleFocus($refs[item.key] as Array<HTMLInputElement>)"
                    @blur="handleBlur($refs[item.key] as Array<HTMLInputElement>)"
                  >
                  <button @click="nextStep($refs[item.key] as Array<HTMLInputElement>, idx + 1)">
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
    display: none;
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
