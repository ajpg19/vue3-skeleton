<template>
  <Disclosure class="w-full flex h-24 px-8 items-center justify-between" as="nav" v-slot="{ open }">
    <div>

    </div>
    <div>
      <LogoMain/>
    </div>
    <div>
      <UserProfileOptions/>
    </div>


  </Disclosure>
</template>

<script setup>
import {LogoMain} from '@/components'
import {Disclosure} from '@headlessui/vue'
</script>