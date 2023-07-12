<template>
    <div class="img is-relative has-text-centered">
      <div class="image-container">
        <img class="header" :src="require(`../assets/${img}`)" alt="slide-show-image">
      </div>
      <div class="overlay">
        <div class="centered">
          <hr>
          <p class="title is-1 has-text-white">{{ $t(title) }}</p>
          <hr>
          <p class="subtitle has-text-white">{{ $t(subtitle) }}</p>
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
.header {
  max-height: 30rem;
  width: 100% !important;
  object-fit: cover;
  object-position: center;
  border-radius: 20px;
}

.overlay {
  position: absolute;
  background: #00120B80;
  display: flex;
  align-items: center;
  justify-content: center;
  inset: 0;
  border-radius: 20px;
  max-height: 98.5% !important;
}
</style>