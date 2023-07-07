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