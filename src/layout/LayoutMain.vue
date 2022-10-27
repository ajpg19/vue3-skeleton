<template>
  <div class="min-h-screen flex flex-col h-screen">
    <ApplicationHeader/>
    <div class="flex-1 flex flex-row overflow-y-hidden">
      <main class="flex-1 overflow-y-auto px-4 py-0">
        <RouterView/>
      </main>
      <NavigationDrawer class="order-first"/>
    </div>
    <ApplicationFooter/>
  </div>
</template>

<script setup>
import {ApplicationFooter, ApplicationHeader} from '@/components'
</script>

<style scoped>

</style>