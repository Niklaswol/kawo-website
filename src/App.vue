<template>
  <div class="container">
    <NavbarMenu/>
    <router-view></router-view>
  </div>
</template>

<script>
import NavbarMenu from "@/components/NavbarMenu.vue";

export default {
  name: 'App',
  components: {
    NavbarMenu
  }
}
</script>

<style>
</style>
