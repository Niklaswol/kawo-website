<template>
  <section class="hero has-text-centered">
    <div class="hero-body">
      <p class="title is-2">{{ $t('homePage.services.title') }}</p>
      <p class="subtitle">{{ $t('homePage.services.text') }}</p>
    </div>
  </section>

  <section class="section">
    <div class="columns">
      <div class="column">
        <div class="card about">
          <div class="card-content">
            <div class="columns">
              <div class="column">
                <p class="subtitle is-5">From</p>
                <p class="title is-5">Frankfurt</p>
              </div>
              <div class="column">
                <faIcon icon="arrow-right-arrow-left"></faIcon>
              </div>
              <div class="column">
                <p class="subtitle is-5">Destination</p>
                <p class="title is-5">New York</p>
              </div>
            </div>
          </div>
        </div>
        <div class="card mt-3">
          <div class="card-content">
            <div class="columns">
              <div class="column">
                <p class="title is-5">SHIP-097643</p>
              </div>
              <div class="column has-text-right">
                <p class="subtitle is-5">KAWO GmbH</p>
              </div>
            </div>
            <div class="columns">
              <div class="column">
                <ul class="steps is-vertical">
                  <li class="steps-segment">
                    <span href="#" class="steps-marker">1</span>
                    <div class="steps-content">
                      <p class="is-size-5">Depart From Frankfurt</p>
                    </div>
                  </li>
                  <li class="steps-segment">
                    <span href="#" class="steps-marker">2</span>
                    <div class="steps-content">
                      <p class="is-size-5">Arrive in New York</p>
                    </div>
                  </li>
                  <li class="steps-segment">
                    <span class="steps-marker">3</span>
                    <div class="steps-content">
                      <p class="is-size-5">Package devlivered</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="column is-1"></div>

      <div class="column mt-6">
        <p class="title">
          {{ $t('homePage.services.onboard.title') }}
        </p>
        <div class="block">
          {{ $t('homePage.services.onboard.subtitle') }}
        </div>
        <div class="columns">
          <div class="column">
            <a>{{ $t('homePage.services.onboard.link') }}</a>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="section">
    <div class="columns">
      <div class="column mt-6">
        <p class="title">
          {{ $t('homePage.services.flex.title') }}
        </p>
        <div class="block">
          {{ $t('homePage.services.flex.subtitle') }}
        </div>
        <div class="columns">
          <div class="column">
            <a>{{ $t('homePage.services.flex.link') }}</a>
          </div>
        </div>
      </div>

      <div class="column is-3"></div>

      <div class="column">
        <figure class="image">
          <img src="../assets/globe.jpg" alt="Placeholder image">
        </figure>
      </div>
    </div>
  </section>

  <section class="section">
    <div class="columns">
      <div class="column">
        <figure class="image" style="width: 650px">
          <img src="../assets/charter.jpg" alt="Placeholder image">
        </figure>
      </div>

      <div class="column is-1"></div>

      <div class="column mt-6">
        <p class="title">
          {{ $t('homePage.services.charter.title') }}
        </p>
        <div class="block">
          {{ $t('homePage.services.charter.subtitle') }}
        </div>
        <div class="columns">
          <div class="column">
            <a>{{ $t('homePage.services.charter.link') }}</a>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="section">
    <div class="columns">
      <div class="column is-4">
        <p class="title is-2">{{ $t('homePage.review.title') }}</p>
      </div>
      <div class="column is-3"></div>
      <div class="column is-3">
        <p class="title is-2">25.000+</p>
        <p class="subtitle">{{ $t('homePage.review.sub1') }}</p>
      </div>
      <div class="column is-3">
        <p class="title is-2">25 Jahre+</p>
        <p class="subtitle">{{ $t('homePage.review.sub2') }}</p>
      </div>
    </div>
    <div class="columns">
    </div>
  </section>
</template>

<script>

import {computed, reactive} from "vue";
import {useHead} from "@vueuse/head";

export default {
  name: 'ServicesPage',
  components: {},
  setup(){
    const siteData = reactive({
      title: 'KAWO Leistungen: Express OBC, Flexible Luftfracht & Charterflüge | Ihr Partner für Zeitkritische Sendungen',
      description: 'Entdecken Sie die vielfältigen Luftfrachtlösungen von KAWO. Von Express On Board Courier (OBC) über flexible Luftfracht bis hin zu exklusiven Charterflügen – wir bieten maßgeschneiderte Lösungen für Ihre Transportanforderungen. Mit jahrzehntelanger Erfahrung und einem globalen Netzwerk sind wir Ihr verlässlicher Partner für alle Ihre Luftfrachtbedürfnisse.'
    })
    useHead({
      title: computed(() => siteData.title),
      meta: [{
        name: `description`,
        content: computed(() => siteData.description),
      }]
    })
  }
}
</script>

<style scoped>
.image {
  width: 23rem;
  height: 25rem;
}
</style>