<script lang="ts" setup>
const props = defineProps({
  total: {
    required: true,
    type: Number
  },
  page: {
    type: Number,
    default: 1
  },
  limit: {
    type: Number,
    default: 20
  },
  pageSizes: {
    type: Array,
    default: () => [20, 50, 100]
  },
  layout: {
    type: String,
    default: 'total, sizes, prev, pager, next'
  }
})

const emit = defineEmits(['pagination'])
/**
 * 分页 - 每页数量更改
 */
const handleSizeChange = (limit: number) => {
  emit('pagination', { page: props.page, limit })
}
const handleCurrentChange = (page: number) => {
  emit('pagination', { page, limit: props.limit })
}
</script>

<template>
  <el-pagination
    :currentPage="page"
    :page-size="limit"
    :page-sizes="pageSizes"
    :layout="layout"
    :total="total"
    @size-change="handleSizeChange"
    @current-change="handleCurrentChange"
  />
</template>

<style lang="scss" scoped></style>
