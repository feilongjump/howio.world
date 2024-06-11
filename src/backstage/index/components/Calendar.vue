<script setup lang="ts">
import dayjs from 'dayjs'
import 'dayjs/locale/zh-cn'
import localeData from 'dayjs/plugin/localeData'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/vue/24/outline'

dayjs.locale('zh-cn')
dayjs.extend(localeData)

const weekdays = dayjs.weekdaysShort()
const today = dayjs()
const currentDate = ref(today)
const currentYear = computed(() => currentDate.value.year())
const currentMonth = computed(() => currentDate.value.month() + 1)
const currentMonthEn = computed(() => currentDate.value.locale('en').format('MMMM'))

const days = computed(() => {
  const days = []
  const firstDayOfMonth = currentDate.value.startOf('month')
  const lastDayOfMonth = currentDate.value.endOf('month')
  const startDayOfWeek = firstDayOfMonth.day()
  const daysInMonth = lastDayOfMonth.date()
  const prevMonthDays = firstDayOfMonth.subtract(1, 'month').daysInMonth()

  // 填充前一个月的日期
  for (let i = startDayOfWeek; i > 0; i--) {
    days.push({
      date: prevMonthDays - i + 1,
      isPrevMonth: true,
      isNextMonth: false,
      isToday: false,
    })
  }

  // 填充当前月份的日期
  for (let i = 1; i <= daysInMonth; i++) {
    days.push({
      date: i,
      isPrevMonth: false,
      isNextMonth: false,
      isToday: isToday(i),
    })
  }

  // 填充下一个月的日期
  // 固定展示 6 周
  const nextDaysCount = 42 - days.length
  for (let i = 1; i <= nextDaysCount; i++) {
    days.push({
      date: i,
      isPrevMonth: false,
      isNextMonth: true,
      isToday: false,
    })
  }

  return days
})

function prev() {
  currentDate.value = currentDate.value.subtract(1, 'month')
}
function next() {
  currentDate.value = currentDate.value.add(1, 'month')
}
function isToday(day: number) {
  return currentDate.value.date(day).isSame(today, 'day')
}
</script>

<template>
  <div class="w-full">
    <!-- Header -->
    <div class="w-full h-9 flex items-center justify-between px-3">
      <button
        class="w-8 h-8 cursor-pointer"
        @click="prev"
      >
        <ChevronLeftIcon class="w-8 h-8" />
      </button>
      <h1 class="font-bold text-3xl relative">
        <span class="text-base absolute bottom-0 -left-2 -translate-x-full">{{ currentYear }}</span>
        {{ currentMonth }}
        <span class="text-base absolute bottom-0 -right-2 translate-x-full text-gray-500">{{ currentMonthEn }}</span>
      </h1>
      <button
        class="w-8 h-8 cursor-pointer"
        @click="next"
      >
        <ChevronRightIcon class="w-8 h-8" />
      </button>
    </div>
    <!-- weekdays -->
    <div class="w-full grid grid-cols-7 mt-8 mb-4">
      <span
        v-for="day in weekdays"
        :key="day"
        class="h-6 flex justify-center items-center"
      >
        {{ day }}
      </span>
    </div>
    <!-- days -->
    <div class="days w-full grid grid-cols-7">
      <span
        v-for="(day, idx) in days"
        :key="idx"
        class="h-12 flex justify-center items-center cursor-pointer"
        :class="{
          'prev-month': day.isPrevMonth,
          'next-month': day.isNextMonth,
          'today': day.isToday,
        }"
      >
        {{ day.date }}
      </span>
    </div>
    <!-- remind -->
    <div class="mt-6 flex flex-col gap-y-3">
      <div class="min-h-16 p-6 card flex justify-center items-center text-color-gray text-sm cursor-pointer">
        <span>
          今日天气晴朗🌞
        </span>
      </div>
      <div class="min-h-16 p-6 card flex justify-center items-center text-color-gray text-sm cursor-pointer">
        <span>
          今天需要做什么吗，这是一个什么日子呢？🤔
        </span>
      </div>
      <div class="min-h-16 p-6 card flex justify-center items-center text-color-gray text-sm cursor-pointer">
        <span>
          如果你要做一件事，不要到处宣言自己的想法，只管安安静静地去做，值不值，时间是最好的证明，自己的人生，得自己负责。
        </span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.days .prev-month,
.days .next-month {
  color: var(--dark-color-gray)
}
.days .today {
  color: #0369a1;
  font-weight: bold;
  font-size: 1.25rem;
}
</style>
