<script lang="ts" setup>
const tableData = [
  {
    checked: false,
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles'
  }
]

const keywords = ref<string>('')
</script>

<template>
  <el-row class="card">
    <el-col class="card-header">
      <el-row justify="space-between">
        <el-col class="search-container" :xs="24" :sm="12">
          <SearchComponent :keywords="keywords" />
        </el-col>
        <el-col :xs="24" :sm="12">
          <div class="flex justify-end delete-container">
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
      <el-table :data="tableData" size="large">
        <el-table-column prop="name" label="Name" />
        <el-table-column prop="address" label="Address" />
        <el-table-column prop="date" label="Created_at" />
      </el-table>
    </el-col>
    <el-col class="card-footer"></el-col>
  </el-row>
</template>

<style lang="scss" scoped>
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
