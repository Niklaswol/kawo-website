<template>
  <SlideShow/>

  <ServiceTiles/>
</template>

<script>
import ServiceTiles from "@/components/Basic/ServiceTiles.vue";
import SlideShow from "@/components/Basic/SlideShow.vue";
export default {
  name: 'HomePage',
  components: {
    SlideShow,
    ServiceTiles
  }
}
</script>

<style scoped>
</style>