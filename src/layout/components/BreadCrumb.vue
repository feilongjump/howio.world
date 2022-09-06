<script lang="ts" setup>
import type { RouteRecordRaw } from 'vue-router'

interface BreadcrumbItemI {
  path: string
  title: string | unknown
}

const { currentRoute, hasRoute } = useRouter()
const breadcrumbItem = ref<BreadcrumbItemI[]>([])
const createRouteName = ref('')
const description = ref<string | unknown>('Overview')

const getBreadcrumbItemByRoute = (currentRouteMatched: RouteRecordRaw[]) => {
  breadcrumbItem.value = []

  currentRouteMatched.forEach((item: RouteRecordRaw) => {
    if (item.meta?.title) {
      breadcrumbItem.value.push({
        path: item.path,
        title: item.meta?.title
      })
    }
  })

  createRouteName.value = `${String(currentRoute.value.name)}.create`
  createRouteName.value = hasRoute(createRouteName.value) ? createRouteName.value : ''

  description.value = currentRoute.value.meta.description ?? 'Overview'
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
          :key="item.path"
          :to="{ path: item.path }"
        >
          {{ item.title }}
        </el-breadcrumb-item>
      </el-breadcrumb>
      <div class="desc-container">
        <span>{{ description }}</span>
      </div>
    </el-col>
    <el-col
      class="create-container flex justify-end items-center"
      :xs="24"
      :sm="12"
      v-if="createRouteName"
    >
      <router-link :to="{ name: createRouteName }">
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
