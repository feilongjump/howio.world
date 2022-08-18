<script setup lang="ts">
import Logo from '@/assets/logo.png'

const params = reactive({
  username: '',
  password: ''
})

const onSubmit = () => {
  console.info(params)
}
</script>

<template>
  <div class="auth-container">
    <div class="auth-form-container">
      <!-- header -->
      <div class="header">
        <img :src="Logo" />
        <span>Welcome back 👏</span>
      </div>
      <p>失败往往是黎明前的黑暗<br />继之而出现的就是成功的朝霞 🌞</p>

      <!-- form -->
      <el-form label-position="top" :model="params" size="large">
        <el-form-item label="Username">
          <el-input v-model="params.username" placeholder="Please input username or email">
            <template #prefix>
              <i-ep-user />
            </template>
          </el-input>
        </el-form-item>
        <el-form-item label="Password">
          <el-input v-model="params.password" placeholder="Please input password" show-password>
            <template #prefix>
              <i-ep-lock />
            </template>
          </el-input>
        </el-form-item>

        <!-- register or forget-password -->
        <div class="auth-other">
          <span>
            <RouterLink to="/">没有账号</RouterLink>还是<RouterLink to="/">忘记了密码</RouterLink>
          </span>
        </div>
        <el-form-item class="auth-form-btn-item">
          <el-button type="primary" size="large" @click="onSubmit" plain>Login</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<style lang="scss">
@import '@/assets/styles/auth.scss';
</style>
