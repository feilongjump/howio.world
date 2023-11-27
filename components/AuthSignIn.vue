<script setup lang="ts">

const user = reactive({
  username: '',
  password: '',
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
          <input id="username" type="text" required v-model="user.username"
            placeholder="Enter your username or email" />
        </div>
      </div>
      <div class="auth-input-box">
        <label for="password">Password</label>
        <div>
          <input id="password" type="password" required v-model="user.password"
            placeholder="Enter your password" />
        </div>
      </div>
      <button class="auth-btn">Sign In</button>
    </div>
  </div>
</template>
