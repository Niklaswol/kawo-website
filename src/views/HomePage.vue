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
      services: [
        {title: `${this.$t('homePage.services.onboard.title')}`, subtitle: `${this.$t('homePage.services.onboard.subtitle')}`, img: 'Plane1.jpg'},
        {title: `${this.$t('homePage.services.flex.title')}`, subtitle: `${this.$t('homePage.services.flex.subtitle')}`, img: 'Plane1.jpg'},
        {title: `${this.$t('homePage.services.charter.title')}`, subtitle: `${this.$t('homePage.services.charter.subtitle')}`, img: 'Plane1.jpg'},
      ],
      areas: [
        {title: `${this.$t('homePage.areas.auto.title')}`, subtitle: `${this.$t('homePage.areas.auto.subtitle')}`, img: 'Plane1.jpg'},
        {title: `${this.$t('homePage.areas.logistic.title')}`, subtitle: `${this.$t('homePage.areas.logistic.subtitle')}`, img: 'Plane1.jpg'},
        {title: `${this.$t('homePage.areas.proto.title')}`, subtitle: `${this.$t('homePage.areas.proto.subtitle')}`, img: 'Plane1.jpg'},
      ]
    }
  }
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

.hero-body{
  margin-left: 2rem;
}
</style>