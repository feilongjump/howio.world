<script setup lang="ts">
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue'
import { LazyAuthSignIn, LazyAuthSignUp } from '#components'

const modules = ref({
  'Sign In': LazyAuthSignIn,
  'Sign Up': LazyAuthSignUp,
})
</script>

<template>
  <div>
    <div class="auth-container">
      <img src="~/assets/img/beams.jpg" />
      <div class="grid-box"></div>
      <div class="auth-box">
        <TabGroup>
          <TabList class="flex space-x-1 rounded-xl bg-blue-900/20 p-1">
            <Tab
              v-for="item in Object.keys(modules)"
              as="template"
              :key="item"
              v-slot="{ selected }"
            >
              <button :class="['tab-btn', selected ? 'tab-btn-selected' : 'tab-btn-normal']">
                {{ item }}
              </button>
            </Tab>
          </TabList>
          <TabPanels class="mt-2 shadow-xl rounded-lg">
            <TabPanel
              v-for="(item, idx) in Object.values(modules)"
              :key="idx"
              class="rounded-xl bg-white p-3"
            >
              <component :is="item"></component>
            </TabPanel>
          </TabPanels>
        </TabGroup>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import url('~/assets/css/auth.css');
</style>
