<template>
  <Splide class="mt-4"
          :options="{ type  : 'fade', perPage: 1, gap: 0, padding: 0, rewind: true, autoplay: true, interval: 3000, arrows: false}"
          :tag="'section'" aria-label="My Favorite Images">
    <SplideSlide>
      <img class="slide" src="../assets/Plane1.jpg" alt="slide-show-image">
    </SplideSlide>
    <SplideSlide>
      <img class="slide" src="../assets/plane-air.jpg" alt="slide-show-image">
    </SplideSlide>
  </Splide>
</template>

<script>

export default {
  name: "SlideShow",
  components: {
  },
}
</script>

<style scoped>
</style>