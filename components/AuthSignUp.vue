<script setup lang="ts">

const user = reactive({
  name: '',
  email: '',
  password: '',
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
      <button class="auth-btn">Sign Up</button>
    </div>
  </div>
</template>
