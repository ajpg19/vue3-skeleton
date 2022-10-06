<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import {RouterView, RouterLink} from 'vue-router'

import {AboutView} from '@/views/index.js'

import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <HelloWorld msg="Vite + Vue + Pinia + i18n + Tailwind "/>

  <RouterLink to="/about" class="m-2">about</RouterLink>
  <RouterLink to="/login">login</RouterLink>

  <RouterView/>

</template>
