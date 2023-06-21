<template>
  <div class="img is-relative has-text-centered">
    <img :src="require(`../assets/${img}`)" alt="slide-show-image" class="is-full">
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
    subtitle: String
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
  background: rgba(57, 57, 57, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  inset: 0;
}

.img {
  height: 40rem;
}
</style>