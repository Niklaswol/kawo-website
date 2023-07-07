<template>
  <div class="tile is-ancestor">
    <div class="tile is-parent" v-for="tile in tiles" :key="tile">
      <router-link :to=tile.route>
        <TextImage :img="tile.img" :title="tile.title" :subtitle="tile.subtitle"/>
      </router-link>
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