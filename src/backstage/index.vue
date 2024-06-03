<script setup lang="ts">
import * as echarts from 'echarts/core'
import type { GridComponentOption } from 'echarts/components'
import { GridComponent } from 'echarts/components'
import type { LineSeriesOption } from 'echarts/charts'
import { LineChart } from 'echarts/charts'
import { UniversalTransition } from 'echarts/features'
import { CanvasRenderer } from 'echarts/renderers'

echarts.use([GridComponent, LineChart, CanvasRenderer, UniversalTransition])

type EChartsOption = echarts.ComposeOption<
  GridComponentOption | LineSeriesOption
>

const trends = ref()

onMounted(() => {
  const myChart = echarts.init(trends.value)

  const option: EChartsOption = {
    grid: {
      top: 100,
      left: 30,
      right: 0,
      bottom: 35,
    },
    xAxis: {
      axisTick: {
        show: false,
      },
      axisLabel: {
        inside: false,
        alignMinLabel: 'left',
        alignMaxLabel: 'right',
        color: '#8193b2',
        fontWeight: 'bold',
        margin: 20,
      },
      type: 'category',
      boundaryGap: false,
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: 'line',
        smooth: true,
      },
    ],
  }

  option && myChart.setOption(option)
})
</script>

<template>
  <div class="w-full h-full grid gap-x-6 grid-cols-12">
    <div class="col-span-8 grid gap-y-6">
      <div class="w-full h-96">
        <div class="h-8 flex items-center">
          <span class="text-xl font-bold text-white">Trends</span>
        </div>
        <div ref="trends" class="w-full h-[22rem]" />
      </div>
      <div class="bg-gray-800 w-full h-96">
        second
      </div>
    </div>
    <div class="col-span-4 grid gap-y-6">
      <div class="bg-gray-800 w-full h-96">
        first
      </div>
      <div class="bg-gray-800 w-full h-96">
        second
      </div>
    </div>
  </div>
</template>

<route lang="json">
{
  "name": "backstage.index",
  "meta": {
    "icon": "BuildingStorefront",
    "layout": "backstage",
    "title": "Index",
    "order": 0
  }
}
</route>
