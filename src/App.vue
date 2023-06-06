<template>
  <div class="container">
    <LocaleChanger/>
    <p>{{ $t("main.hello") }}</p>
    <router-view></router-view>
  </div>
</template>

<script>
import LocaleChanger from "@/components/LocaleChanger.vue";

export default {
  name: 'App',
  components: {
    LocaleChanger
  }
}
</script>

<style>
</style>
