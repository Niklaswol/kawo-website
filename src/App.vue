<template>
  <div class="container">
<!--    <LocaleChanger/>-->
    <NavbarMenu/>
    <router-view></router-view>
  </div>
</template>

<script>
/*import LocaleChanger from "@/components/LocaleChanger.vue";*/
import NavbarMenu from "@/components/NavbarMenu.vue";

export default {
  name: 'App',
  components: {
    NavbarMenu
    /*LocaleChanger*/
  }
}
</script>

<style>
</style>
