<template>
  <Splide class="mt-4"
      :options="{ type  : 'fade', perPage: 1, gap: 0, padding: 0, rewind: true, autoplay: true, interval: 3000, arrows: false}"
      :tag="'section'" aria-label="My Favorite Images">
    <SplideSlide>
      <TextImage :img="'Plane2.jpeg'" :title="'Dies ist ein Test Title'"
                 :subtitle="'Das is ein Text Subtitle'"/>
    </SplideSlide>
    <SplideSlide>
      <TextImage :img="'Plane2.jpeg'" :title="'Dies ist ein Test Title'"
                 :subtitle="'Das is ein Text Subtitle'"/>
    </SplideSlide>
  </Splide>
</template>

<script>
import TextImage from "@/components/TextImage.vue";

export default {
  name: "SlideShow",
  components: {
    TextImage
  },
}
</script>

<style scoped>
</style>