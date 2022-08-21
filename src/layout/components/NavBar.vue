<script setup lang="ts">
import Avatar from '@/assets/avatar.png'

const router = useRouter()
const keywords = ref<string>('')

const signOut = () => {
  ElMessage.success('Sign out success 👋')
  router.push({ name: 'auth-login' })
}
</script>

<template>
  <el-header>
    <el-row justify="space-between" align="middle">
      <el-col :span="2">
        <NavBarSwitchComponent />
      </el-col>
      <el-col :span="22">
        <div class="flex justify-end items-center">
          <!-- search -->
          <div class="nav-search-container">
            <SearchComponent :keywords="keywords" />
          </div>
          <!-- icons -->
          <div class="flex justify-end items-center hidden-xs-only">
            <el-badge is-dot class="badge-icons">
              <i-ep-chat-line-round class="nav-icons cursor-pointer" />
            </el-badge>
            <el-badge is-dot class="badge-icons">
              <i-ep-bell class="nav-icons cursor-pointer" />
            </el-badge>
          </div>
          <!-- user -->
          <el-dropdown trigger="click">
            <img class="avatar cursor-pointer" :src="Avatar" />
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item>个人中心</el-dropdown-item>
                <el-dropdown-item divided>
                  <i-ep-switch-button />
                  <span @click="signOut">Sign out</span>
                </el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </div>
      </el-col>
    </el-row>
  </el-header>
</template>

<style lang="scss">
@import '@/assets/styles/variables.scss';

.el-header {
  border-bottom: 1px solid $borderGray;

  .el-row {
    height: 100%;

    .nav-search-container {
      margin-right: 2rem;
    }

    .badge-icons {
      margin-right: 2rem;

      .nav-icons {
        width: 1.5em;
        height: 1.5em;
        color: $grayColor;
      }

      .el-badge__content.is-fixed.is-dot {
        width: 10px;
        height: 10px;
        top: 4px;
        right: 9px;
      }
    }

    .avatar {
      width: 2.75rem;
      height: 2.75rem;
      border-radius: 50%;
    }
  }
}
</style>
