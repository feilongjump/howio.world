<script setup lang="ts">

const router = useRouter()

const params = reactive({
  username: '',
  password: '',
})

const submit = async () => {
  const { data, error } = await useRequest.post('auth/sign-in', params)
  if (error.value) return false

  const auth = useAuthStore()
  await auth.setToken(data.value.token)

  const { data: user, error: userError } = await useRequest.get('me')
  if (userError.value) {
    auth.clear()
    alert('登录失败，请重新登录！')
    return false
  }
  auth.setUser(user.value)

  alert('登录成功！')
  router.push('/')
  return true
}

defineExpose({
  submit
})
</script>

<template>
  <div class="flex flex-col justify-center">
    <span class="text-xl font-bold">Hi! What's new? 😎</span>
    <!-- OAuth -->
    <slot name="oauth"></slot>
    <!-- dividing line -->
    <slot name="dividing-line"></slot>
    <!-- form -->
    <div>
      <div class="auth-input-box">
        <label for="username">Username</label>
        <div>
          <input id="username" type="text" required v-model="params.username"
            placeholder="Enter your username or email" />
        </div>
      </div>
      <div class="auth-input-box">
        <label for="password">Password</label>
        <div>
          <input id="password" type="password" required v-model="params.password"
            placeholder="Enter your password" @keyup.enter="$emit('parentSubmit')" />
        </div>
      </div>
      <slot name="submit"></slot>
    </div>
  </div>
</template>
