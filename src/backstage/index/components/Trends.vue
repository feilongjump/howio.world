<script setup lang="ts">
import * as echarts from 'echarts/core'
import type {
  AxisPointerComponentOption,
  GridComponentOption,
  TooltipComponentOption,
} from 'echarts/components'
import {
  AxisPointerComponent,
  GridComponent,
  TooltipComponent,
} from 'echarts/components'
import type { LineSeriesOption } from 'echarts/charts'
import { LineChart } from 'echarts/charts'
import { UniversalTransition } from 'echarts/features'
import { CanvasRenderer } from 'echarts/renderers'

echarts.use([
  AxisPointerComponent,
  TooltipComponent,
  GridComponent,
  LineChart,
  CanvasRenderer,
  UniversalTransition,
])

type EChartsOption = echarts.ComposeOption<
  AxisPointerComponentOption |
  TooltipComponentOption |
  GridComponentOption |
  LineSeriesOption
>

const trends = ref()

onMounted(() => {
  const trendsChart = echarts.init(trends.value)

  const trendsOptions: EChartsOption = {
    grid: {
      top: '10%',
      left: '8%',
      right: 5,
      bottom: '10%',
    },
    tooltip: {
      trigger: 'axis',
      backgroundColor: '#0c162d',
      borderColor: '#202637',
      borderRadius: 10,
      shadowColor: '#202637',
      formatter: '{b}: {c}',
      textStyle: {
        color: '#fff',
        fontWeight: 'bold',
      },
      axisPointer: {
        lineStyle: {
          color: 'rgba(129, 147, 178, 0.2)',
        },
      },
    },
    xAxis: {
      axisLabel: {
        inside: false,
        alignMinLabel: 'left',
        alignMaxLabel: 'right',
        color: '#8193b2',
        fontWeight: 'bold',
      },
      axisLine: {
        show: false,
        onZero: false,
      },
      axisTick: {
        show: false,
      },
      type: 'category',
      boundaryGap: false,
      offset: 15,
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    },
    yAxis: {
      axisLabel: {
        color: '#8193b2',
        fontWeight: 'bold',
      },
      splitLine: {
        lineStyle: {
          color: 'rgba(129, 147, 178, 0.2)',
          type: 'dashed',
        },
      },
      type: 'value',
      offset: 20,
    },
    series: [
      {
        data: [320, 932, 601, 934, 1090, 1500, 1320],
        type: 'line',
        smooth: true,
        itemStyle: {
          opacity: 0,
        },
        lineStyle: {
          color: {
            type: 'linear',
            x: 0,
            y: 1,
            x2: 1,
            y2: 0,
            colorStops: [
              {
                offset: 0,
                color: '#f9a8d4', // 0% 处的颜色
              },
              {
                offset: 1,
                color: '#22d3ee', // 100% 处的颜色
              },
            ],
            global: false, // 缺省为 false
          },
          width: 3,
          cap: 'round',
          shadowBlur: 35,
          shadowOffsetY: 5,
          shadowColor: '#c4b5fd',
        },
      },
    ],
  }

  trendsOptions && trendsChart.setOption(trendsOptions)
})
</script>

<template>
  <div ref="trends" class="h-full w-full" />
</template>
