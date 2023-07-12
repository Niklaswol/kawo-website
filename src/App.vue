<template>
  <div class="div">
    <NavbarMenu/>
    <router-view></router-view>
    <ContactHero/>
    <FooterMenu/>
  </div>
</template>

<script>
import NavbarMenu from "@/components/NavbarMenu.vue";
import FooterMenu from "@/components/FooterMenu.vue";
import ContactHero from "@/components/ContactHero.vue";

export default {
  name: 'App',
  components: {
    ContactHero,
    FooterMenu,
    NavbarMenu
  }
}
</script>

<style>

</style>
