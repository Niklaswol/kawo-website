<template>
  <div class="img is-relative has-text-centered">
    <div class="image-container">
      <img :src="require(`../assets/${img}`)" alt="slide-show-image">
    </div>
    <div class="overlay">
      <div class="centered">
        <p class="title is-1 has-text-white">{{ title }}</p>
        <p class="subtitle has-text-white">{{ subtitle }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TextImage",
  props: {
    img: String,
    title: String,
    subtitle: String,
  },
}
</script>

<style scoped>
.centered {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.overlay {
  position: absolute;
  background: #1A1D4E81;
  display: flex;
  align-items: center;
  justify-content: center;
  inset: 0;
}

img{
  max-height: 30rem;
  width: 100% !important;
  object-fit: cover;
  object-position: center;
}
</style>