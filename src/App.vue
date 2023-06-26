<template>
  <div class="div">
    <NavbarMenu/>
    <router-view></router-view>
    <FooterMenu/>
  </div>
</template>

<script>
import NavbarMenu from "@/components/NavbarMenu.vue";
import FooterMenu from "@/components/FooterMenu.vue";

export default {
  name: 'App',
  components: {
    FooterMenu,
    NavbarMenu
  }
}
</script>

<style>

</style>
