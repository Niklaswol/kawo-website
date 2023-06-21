<template>
  <SlideShow/>
  <ServiceTiles/>
</template>

<script>
import ServiceTiles from "@/components/ServiceTiles.vue";
import SlideShow from "@/components/SlideShow.vue";
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