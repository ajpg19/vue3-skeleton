<script setup>
import {ref} from 'vue'

defineProps({
  msg: String
})

const count = ref(0)
</script>

<template>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="./../assets/vite.svg" class="logo" alt="Vite logo"/>
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./../assets/vue.svg" class="logo vue" alt="Vue logo"/>
    </a>
    <a href="https://pinia.vuejs.org/" target="_blank">
      <img src="https://pinia.vuejs.org/logo.svg" class="logo vue" alt="Pinia logo"/>
    </a>
    <a href="https://kazupon.github.io/vue-i18n/" target="_blank">
      <img src="https://kazupon.github.io/vue-i18n/vue-i18n-logo.png" class="logo vue" alt="Vue i18n logo"/>
    </a>
  </div>

  <h2>{{ msg }}</h2>

  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>

  <p>
    Check out
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank"
    >create-vue</a
    >, the official Vue + Vite starter
  </p>
  <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
.logo {
  height: 4em;
  padding: 1em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
