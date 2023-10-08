<template>
  <section class="section has-text-centered">
    <p class="title is-1">{{ $t('homePage.title') }}</p>
    <p class="subtitle">{{ $t('homePage.subtitle') }}</p>
    <div class="columns">
      <div class="column">
        <button class="button is-dark has-icons-left" @click="$refs.modalElement.toggleModal()">
          <faIcon icon="phone-volume" class="phone"></faIcon>
          Jetzt kontaktieren
        </button>
        <router-link to="/products">
          <button class="button has-icons-left ml-2">
            <faIcon icon="briefcase" class="phone"></faIcon>
            Unsere Leistungen
          </button>
        </router-link>
      </div>
    </div>
    <SlideShow/>
  </section>

  <section class="section">
    <div class="columns">
      <div class="column is-4">
        <p class="title is-2">{{ $t('homePage.about.title') }}</p>
      </div>
      <div class="column"></div>
      <div class="column">
        <div class="block">{{ $t('homePage.about.text') }}</div>
      </div>
    </div>
    <div class="columns mt-4">
      <div class="column is-4">
        <div class="card about">
          <div class="icon-container">
            <faIcon icon="earth-europe" class="about-icon"></faIcon>
          </div>
          <div class="card-content">
            <div class="media">
              <div class="media-content">
                <p class="title is-4">{{ $t('homePage.about.advantages.globe.title') }}</p>
              </div>
            </div>

            <div class="content">
              {{ $t('homePage.about.advantages.globe.text') }}
            </div>
          </div>
        </div>
      </div>

      <div class="column">
        <div class="card about">
          <div class="icon-container">
            <faIcon icon="hourglass-start" class="about-icon"></faIcon>
          </div>
          <div class="card-content">
            <div class="media">
              <div class="media-content">
                <p class="title is-4">{{ $t('homePage.about.advantages.time.title') }}</p>
              </div>
            </div>

            <div class="content">
              {{ $t('homePage.about.advantages.time.text') }}
            </div>
          </div>
        </div>
      </div>

      <div class="column">
        <div class="card about">
          <div class="icon-container">
            <faIcon icon="brain" class="about-icon"></faIcon>
          </div>
          <div class="card-content">
            <div class="media">
              <div class="media-content">
                <p class="title is-4">{{ $t('homePage.about.advantages.individual.title') }}</p>
              </div>
            </div>

            <div class="content">
              {{ $t('homePage.about.advantages.individual.text') }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="hero has-text-centered">
    <div class="hero-body">
      <div class="columns">
        <div class="column"></div>
        <div class="column is-7">
          <p class="title is-2">{{ $t('homePage.services.title') }}</p>
          <div class="block">{{ $t('homePage.services.text') }}</div>
        </div>
        <div class="column"></div>
      </div>
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

  <QuestionsSection/>

  <ModalElement ref="modalElement"/>

</template>

<script>
import SlideShow from "@/components/SlideShow.vue";
import QuestionsSection from "@/components/QuestionsSection.vue";
import ModalElement from "@/components/ModalElement.vue";
import {computed, reactive} from "vue";
import {useHead} from "@vueuse/head";

export default {
  name: 'HomePage',
  components: {
    ModalElement,
    QuestionsSection,
    SlideShow,
  },
  data() {
    return {
      services: this.$store.getters.getServices,
      areas: this.$store.getters.getAreas,
    }
  },
  setup(){
    const siteData = reactive({
      title: 'Schnelle & Zuverlässige Luftfrachtlösungen | KAWO GMBH – Ihr Partner für Express OBC, Flexible Luftfracht & Charterflüge',
      description: 'KAWO GMBH bietet maßgeschneiderte Luftfrachtlösungen mit über 25 Jahren Erfahrung. Entdecken Sie unsere Express On Board Courier (OBC) Services, flexible Luftfrachtoptionen und exklusive Charterflüge. Mit unserer 24-Stunden-Hotline sind wir immer für Sie da. Vertrauen Sie auf unsere weltweite Präsenz und Expertise für zeitkritische Sendungen.'
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

.about {
  padding: 1rem;
}

.icon-container {
  border-radius: 10px;
  background-color: #94291157;
  width: 60px;
  height: 60px;
  text-align: center;
  margin-left: 1rem;
}

.about-icon {
  height: 30px;
  width: 30px;
  color: #942911;
  margin-top: 1rem;
}
</style>