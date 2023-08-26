<template>
  <div class="div">
    <NavbarMenu/>
    <router-view></router-view>
    <ContactHero/>
    <FooterMenu/>
    <div class="columns mt-3">
      <div class="column is-9"></div>
      <div class="column"><p class="subtitle is-7">© @Kawo GmbH powered by Niklas Wollgarten</p></div>
    </div>
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
