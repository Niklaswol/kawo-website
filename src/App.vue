<template>
  <div class="div">
    <NavbarMenu/>
    <router-view></router-view>
  </div>
</template>

<script>
import NavbarMenu from "@/components/NavbarMenu/NavbarMenu.vue";

export default {
  name: 'App',
  components: {
    NavbarMenu
  }
}
</script>

<style>

</style>
