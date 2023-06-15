<template>
  <section class="section">
<!--    <SlideShow/>-->
  </section>
  <HeroHead/>
  <ServiceTiles/>
</template>

<script>
import ServiceTiles from "@/components/ServiceTiles.vue";
import HeroHead from "@/components/HeroHead.vue";
/*import SlideShow from "@/components/SlideShow.vue";*/
export default {
  name: 'HomePage',
  components: {
/*    SlideShow,*/
    HeroHead,
    ServiceTiles
  }
}
</script>

<style scoped>
.section{
  border: red 1px solid;
}

img {
  max-width: 100%;
  height: auto;
}
</style>