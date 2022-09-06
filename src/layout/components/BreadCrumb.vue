<script lang="ts" setup>
import type { RouteRecord, RouteRecordRaw } from 'vue-router'

interface BreadcrumbItemI {
  name: string | unknown
  title: string | unknown
}

const { currentRoute } = useRouter()
const breadcrumbItem = ref<BreadcrumbItemI[]>([])
const createBtnShow = ref(false)
const createBtn = ref<RouteRecordRaw>()

const getBreadcrumbItemByRoute = (currentRouteMatched: RouteRecord[]) => {
  breadcrumbItem.value = []
  createBtnShow.value = false

  currentRouteMatched.forEach((item: RouteRecord) => {
    if (item.meta.title) {
      breadcrumbItem.value.push({
        name: item.name,
        title: item.meta?.title
      })
    }
  })

  const lastRoute = currentRouteMatched.pop()
  lastRoute?.children.forEach((child: RouteRecordRaw) => {
    if (child.path === 'create') {
      createBtnShow.value = true
      createBtn.value = child
    }
  })
}
getBreadcrumbItemByRoute(currentRoute.value.matched)

watch(
  () => currentRoute.value,
  (newVal) => {
    getBreadcrumbItemByRoute(newVal.matched)
  }
)
</script>

<template>
  <el-row class="breadcrumb-container" justify="space-between">
    <el-col :xs="24" :sm="12" class="breadcrumb-item">
      <el-breadcrumb>
        <el-breadcrumb-item
          v-for="item in breadcrumbItem"
          :key="item.name"
          :to="{ name: item.name }"
        >
          {{ item.title }}
        </el-breadcrumb-item>
      </el-breadcrumb>
      <div class="desc-container">
        <span>Overview</span>
      </div>
    </el-col>
    <el-col
      class="create-container flex justify-end items-center"
      :xs="24"
      :sm="12"
      v-if="createBtnShow"
    >
      <router-link :to="{ name: createBtn?.name }">
        <el-button type="primary">Create</el-button>
      </router-link>
    </el-col>
  </el-row>
</template>

<style lang="scss" scoped>
.breadcrumb-container {
  width: 100%;
  padding-bottom: 1.75rem;
}

.desc-container {
  font-size: 1.25em;
  font-weight: 700;
  margin-top: 0.5rem;
}

.mobile .breadcrumb-container {
  .breadcrumb-item {
    margin-bottom: 0.875rem;
  }

  .create-container {
    a,
    button {
      width: 100%;
    }
  }
}
</style>
