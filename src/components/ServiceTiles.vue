<template>
  <div class="tile is-ancestor">
    <div class="tile is-parent" v-for="tile in tiles" :key="tile">
      <TextImage :img="tile.img" :title="tile.title" :subtitle="tile.subtitle"/>
    </div>
  </div>
</template>

<script>
import TextImage from "@/components/TextImage.vue";

export default {
  name: 'ServiceTiles',
  components: {
    TextImage
  },
  props: ['title', 'subtitle', 'tiles']
}
</script>

<style scoped>
</style>