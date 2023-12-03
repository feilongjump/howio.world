<script setup lang="ts">
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue'
import { LazyAuthSignIn, LazyAuthSignUp } from '#components'
import GitHub from '~/assets/img/github.png'
import WeChat from '~/assets/img/wechat.png'

const oauthModules = [
  {
    'title': 'GitHub',
    'img': GitHub
  },
  {
    'title': 'WeChat',
    'img': WeChat
  }
]

const modules = {
  'Sign In': LazyAuthSignIn,
  'Sign Up': LazyAuthSignUp,
}
</script>

<template>
  <div class="auth-container">
    <img src="~/assets/img/beams.jpg" />
    <div class="grid-box"></div>
    <div class="auth-box">
      <div class="w-full flex justify-center mb-3">
        <NuxtLink to="/" class="w-28 relative">
          <div class="absolute inset-0 flex items-center">
            <span class="w-12 border-4 border-t border-red-400 rounded-full"></span>
          </div>
          <div class="relative flex justify-center text-xs uppercase">
            <span class="font-semibold text-gray-500">X</span>
          </div>
          <div class="absolute inset-y-0 right-0 flex items-center">
            <span class="w-12 border-4 border-t border-red-400 rounded-full"></span>
          </div>
        </NuxtLink>
      </div>
      <TabGroup>
        <TabList class="flex space-x-1 rounded-xl bg-blue-900/20 p-1">
          <Tab
            v-for="idx in Object.keys(modules)"
            as="template"
            :key="idx"
            v-slot="{ selected }"
          >
            <button :class="['tab-btn', selected ? 'tab-btn-selected' : 'tab-btn-normal']">
              {{ idx }}
            </button>
          </Tab>
        </TabList>
        <TabPanels class="mt-2 shadow-xl rounded-lg">
          <TabPanel
            v-for="item in Object.values(modules)"
            class="rounded-xl bg-white px-6 py-8"
          >
            <component :is="item">
              <template #oauth v-if="oauthModules">
                <div class="oauth-box">
                  <div class="type" v-for="(module, idx) in oauthModules" :key="idx">
                    <img class="w-6" :src="module.img" />
                    <span class="text-sm font-semibold">{{ module.title }}</span>
                  </div>
                </div>
              </template>
              <template #dividing-line>
                <div class="relative my-8">
                  <div class="absolute inset-0 flex items-center">
                    <span class="w-full border-t"></span>
                  </div>
                  <div class="relative flex justify-center text-xs uppercase">
                    <span class="font-semibold bg-white px-2">Or continue with</span>
                  </div>
                </div>
              </template>
            </component>
          </TabPanel>
        </TabPanels>
      </TabGroup>
    </div>
  </div>
</template>

<style scoped>
@import url('~/assets/css/auth.css');
</style>

<style>
@import url('~/assets/css/spinkit.min.css');
</style>
