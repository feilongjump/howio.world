<script setup lang="ts">

const codeLength = 6
const user = reactive({
  name: '',
  email: '',
  password: '',
  verification_code: ''
})
const verificationCodeArr = reactive<{[index: number]: string}>({})

/**
 * 处理验证码的输入框操作
 * @param {number} index 验证码位置
 * @param {string} codeItem 验证码
 */
const handleCodeInput = (index: number, codeItem: string) => {
  // 删除值
  if (codeItem === '') {
    delete verificationCodeArr[index]
    return
  }

  (document.getElementById(`code-item-${index}`) as HTMLElement).setAttribute("disabled", "")
  // 赋值并且当前输入框禁止操作
  verificationCodeArr[index] = codeItem

  // 选中下一个输入框
  let nextCodeInput = document.getElementById(`code-item-${index + 1}`)
  if (nextCodeInput) {
    nextCodeInput.removeAttribute("disabled")
    nextCodeInput.focus()
    return
  }

  // 发起注册请求
  user.verification_code = Object.values(verificationCodeArr).join('')
}

/**
 * 删除验证码
 *
 * @param {number} index 验证码位置
 */
const deleteCode = (index: number) => {
  // 每次删除验证码的操作都将清空 user.verification_code
  user.verification_code = ''

  delete verificationCodeArr[index]
  delete verificationCodeArr[index - 1]
  if (index === 1) return

  const codeInput = document.getElementById(`code-item-${index}`) as HTMLElement
  const lastCodeInput = document.getElementById(`code-item-${index - 1}`) as HTMLElement
  codeInput.setAttribute("disabled", "")
  lastCodeInput.setAttribute("value", "")
  lastCodeInput.removeAttribute("disabled")
  lastCodeInput.focus()
}

/**
 * 发送邮箱验证码
 */
const sendEmailVerificationCode = () => {
  // 避免失去焦点
  setTimeout(() => {
    (document.getElementById(`code-item-1`) as HTMLElement).focus()
  }, 5)
  // send email verification code
}

const submit = () => {
  console.info("sign up!")

  // sign up actions
}

defineExpose({
  submit
})
</script>

<template>
  <div class="flex flex-col justify-center">
    <span class="text-xl font-bold">Create an account! 👏</span>
    <!-- OAuth -->
    <slot name="oauth"></slot>
    <!-- dividing line -->
    <slot name="dividing-line"></slot>
    <div>
      <div class="auth-input-box">
        <label for="name">Name</label>
        <div>
          <input id="name" type="text" required v-model="user.name"
            placeholder="Enter your or name" />
        </div>
      </div>
      <div class="auth-input-box">
        <label for="email">Email</label>
        <div>
          <input id="email" type="text" required v-model="user.email"
            placeholder="Enter your or email" />
        </div>
      </div>
      <div class="auth-input-box">
        <label for="password">Password</label>
        <div>
          <input id="password" type="password" required v-model="user.password"
            placeholder="Enter your password" />
        </div>
      </div>
      <!-- verification code -->
      <div class="auth-input-box auth-code-input-box">
        <label for="code-item-1">Verification Code</label>
        <label class="float-right" @click="sendEmailVerificationCode">
          <span class="text-blue-500 text-sm font-normal underline underline-offset-2">send code</span>
        </label>
        <div class="flex justify-between">
          <input
            type="text"
            required
            maxlength="1"
            v-for="index in codeLength"
            :id="`code-item-${index}`"
            :disabled="index !== 1"
            @keyup.delete="deleteCode(index)"
            @input="handleCodeInput(index, ($event.target as HTMLInputElement).value)"
          />
        </div>
      </div>
      <slot name="submit"></slot>
    </div>
  </div>
</template>
