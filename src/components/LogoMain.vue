<template>
  <router-link to="/">
    <span class="main-logo font-medium" :class="fontSize">
       coreinvent
    </span>
  </router-link>
</template>

<script setup>

defineProps({
  fontSize: {type: String, default: "text-2xl"}
})

</script>

<style scoped>
.main-logo {
  /*Refactor this class*/
  background-image: -webkit-linear-gradient(0deg,#006783 0%, #547DBE 40%, #09ADEA 70%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>