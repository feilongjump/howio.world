<script lang="ts" setup>
import type { ListQueryI } from '@/types/Common'
const data = ref([
  {
    id: 1,
    name: 'super',
    email: 'ifeilong@example.com',
    activated_at: '2022-08-09 21:33:36',
    is_admin: true,
    created_at: '2022-08-09 21:33:36',
    updated_at: '2022-08-10 06:30:10',
    is_activated: true
  },
  {
    id: 2,
    name: 'admin',
    email: 'admin@example.com',
    activated_at: '2022-08-09 21:33:36',
    is_admin: true,
    created_at: '2022-08-09 21:33:36',
    updated_at: '2022-08-09 21:33:36',
    is_activated: true
  },
  {
    id: 3,
    name: 'reviewer',
    email: 'reviewer@example.com',
    activated_at: '2022-08-09 21:33:36',
    is_admin: true,
    created_at: '2022-08-09 21:33:36',
    updated_at: '2022-08-09 21:33:36',
    is_activated: true
  },
  {
    id: 4,
    name: 'staff',
    email: 'staff@example.com',
    activated_at: '2022-08-09 21:33:36',
    is_admin: true,
    created_at: '2022-08-09 21:33:36',
    updated_at: '2022-08-09 21:33:36',
    is_activated: true
  },
  {
    id: 5,
    name: 'Letitia Nitzsche',
    email: 'bartell.dimitri@example.com',
    activated_at: null,
    is_admin: false,
    created_at: '2022-08-09 21:33:36',
    updated_at: '2022-08-09 21:33:36',
    is_activated: false
  },
  {
    id: 6,
    name: 'Mrs. Jeanette Kertzmann II',
    email: 'tommie46@example.net',
    activated_at: null,
    is_admin: false,
    created_at: '2022-08-09 21:33:36',
    updated_at: '2022-08-09 21:33:36',
    is_activated: false
  },
  {
    id: 7,
    name: 'America Hermiston PhD',
    email: 'effertz.isai@example.org',
    activated_at: null,
    is_admin: false,
    created_at: '2022-08-09 21:33:36',
    updated_at: '2022-08-09 21:33:36',
    is_activated: false
  },
  {
    id: 8,
    name: 'Jeremy White PhD',
    email: 'ycremin@example.com',
    activated_at: '2022-08-09 21:33:36',
    is_admin: false,
    created_at: '2022-08-09 21:33:36',
    updated_at: '2022-08-09 21:33:36',
    is_activated: true
  },
  {
    id: 9,
    name: 'Jacinthe Howe',
    email: 'iwhite@example.org',
    activated_at: '2022-08-09 21:33:36',
    is_admin: false,
    created_at: '2022-08-09 21:33:36',
    updated_at: '2022-08-09 21:33:36',
    is_activated: true
  },
  {
    id: 10,
    name: 'Mr. Brady Marvin II',
    email: 'umccullough@example.com',
    activated_at: '2022-08-09 21:33:36',
    is_admin: false,
    created_at: '2022-08-09 21:33:36',
    updated_at: '2022-08-09 21:33:36',
    is_activated: true
  }
])

const deleteButtonShowing = ref<boolean>(false)
const listQuery = ref<ListQueryI>({
  keywords: '',
  page: 1,
  limit: 20
})

/**
 * 表格复选框
 */
const handleSelectionChange = (items) => {
  deleteButtonShowing.value = items.length > 0
}
const list = (params: ListQueryI) => {
  listQuery.value = {
    ...listQuery.value,
    ...params
  }
  console.info(listQuery.value)
}
</script>

<template>
  <el-row class="card">
    <el-col class="card-header">
      <el-row justify="space-between">
        <el-col class="search-container" :xs="24" :sm="12">
          <SearchComponent :keywords="listQuery.keywords" />
        </el-col>
        <el-col :xs="24" :sm="12">
          <div class="flex justify-end delete-container" v-show="deleteButtonShowing">
            <el-button type="danger">
              Delete
              <el-icon class="el-icon--right">
                <i-ep-delete />
              </el-icon>
            </el-button>
          </div>
        </el-col>
      </el-row>
    </el-col>
    <el-col :span="24">
      <el-table :data="data" size="large" @selection-change="handleSelectionChange">
        <el-table-column type="selection" width="50" />
        <el-table-column prop="name" label="Name" min-width="200">
          <template #default="scope">
            <div class="flex items-center">
              <div
                class="point"
                :class="scope.row.is_activated ? 'activated' : 'inactivated'"
              ></div>
              <span class="name">{{ scope.row.name }}</span>
            </div>
          </template>
        </el-table-column>
        <el-table-column prop="email" label="Email" min-width="220" />
        <el-table-column prop="created_at" label="Created_at" min-width="200" />
      </el-table>
    </el-col>
    <el-col class="card-footer flex justify-end">
      <PaginationComponent
        :total="data.length"
        :page="listQuery.page"
        :limit="listQuery.limit"
        @pagination="list"
      />
    </el-col>
  </el-row>
</template>

<style lang="scss" scoped>
.point {
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 50%;
  margin-right: 0.7rem;
}
.activated.point {
  background-color: #67c23a;
}
.inactivated.point {
  background-color: #909399;
}
.name {
  width: 90%;
}

.search-container {
  max-width: 21rem;
}
.mobile .search-container {
  margin-bottom: 1rem;
}

.mobile .delete-container button {
  width: 100%;
}
</style>
