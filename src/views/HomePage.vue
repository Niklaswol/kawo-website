<template>
  <SlideShow/>
  <ServiceTiles :title="$t('homePage.companyName')" :subtitle="$t('homePage.info')" :tiles="services"/>
  <section class="hero is-small is-light info">
    <div class="hero-body">
      <p class="title">
        {{ $t('homePage.contactUs.title') }}
      </p>
      <p class="subtitle">
        {{ $t('homePage.contactUs.subtitle') }}
      </p>
      <div class="columns">
        <div class="column">
          <button class="button is-success is-medium has-icons-left">
            <span class="icon is-small has-text-white">
              <faIcon icon="phone-volume"></faIcon>
            </span>
            <span>
              24/7 Hotline <br>
              <b> +49(0)214 61-291 </b>
            </span>
          </button>
        </div>
      </div>
      <div class="columns">
        <div class="column">
          <button class="button is-success is-medium has-text-dark">
            <span class="icon is-small has-text-white">
              <faIcon icon="envelope"></faIcon>
            </span>
            <span>
               {{ $t('homePage.contactUs.email') }} <br>
              <b> KAWO@KAWO.DE </b>
            </span>
          </button>
        </div>
      </div>
      <div class="block">
        {{ $t('homePage.contactUs.block') }}
      </div>
    </div>
  </section>

  <section class="hero is-small experts">
    <div class="hero-body">
      <p class="title">
        {{ $t('homePage.experts.title') }}
      </p>
      <div class="block">
        {{ $t('homePage.experts.text') }}
      </div>
    </div>
  </section>

  <hr class="divider">

  <ServiceTiles :title="'TRANSPORTBEREICHE'" :tiles="areas" class="areas"/>

</template>

<script>
import ServiceTiles from "@/components/ServiceTiles.vue";
import SlideShow from "@/components/SlideShow.vue";

export default {
  name: 'HomePage',
  components: {
    SlideShow,
    ServiceTiles,
  },
  data() {
    return {
      services:  this.$store.getters.getServices,
      areas:  this.$store.getters.getAreas
    }
  },
}
</script>

<style scoped>
img {
  max-height: 30rem;
  width: 100% !important;
  object-fit: cover;
  object-position: center;
}

button {
  min-width: 400px;
  min-height: 75px;
  text-align: left;
  justify-content: left;
}

.hero-body {
  margin-left: 2rem;
}
</style>