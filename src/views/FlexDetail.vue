<template>
  <section class="hero has-text-centered is-family-secondary">
    <div class="hero-body">
      <p class="title is-2">{{ $t('Flex-Detail.title') }}</p>
      <p class="subtitle">{{ $t('Flex-Detail.firstText') }}</p>
    </div>
  </section>

  <section class="section">
    <figure class="image">
      <img src="../assets/freight.jpg" alt="Placeholder image">
    </figure>
  </section>

  <section class="section">

    <div class="columns">
      <div class="column">
        <p class="title is-2">
          {{ $t('Flex-Detail.headlineBold') }}
        </p>
      </div>
      <div class="column"></div>
      <div class="column">{{ $t('Flex-Detail.secondText') }}</div>
    </div>

    <div class="columns mt-4">
      <div class="column is-4">
        <div class="card about">
          <div class="icon-container">
            <faIcon icon="scissors" class="about-icon"></faIcon>
          </div>
          <div class="card-content">
            <div class="media">
              <div class="media-content">
                <p class="title is-4">{{ $t('Flex-Detail.bulletOne.title') }}</p>
              </div>
            </div>

            <div class="content">
              {{ $t('Flex-Detail.bulletOne.text') }}
            </div>
          </div>
        </div>
      </div>
      <div class="column is-4">
        <div class="card about">
          <div class="icon-container">
            <faIcon icon="earth-europe" class="about-icon"></faIcon>
          </div>
          <div class="card-content">
            <div class="media">
              <div class="media-content">
                <p class="title is-4">{{ $t('Flex-Detail.bulletTwo.title') }}</p>
              </div>
            </div>

            <div class="content">
              {{ $t('Flex-Detail.bulletTwo.text') }}
            </div>
          </div>
        </div>
      </div>
      <div class="column is-4">
        <div class="card about">
          <div class="icon-container">
            <faIcon icon="check-double" class="about-icon"></faIcon>
          </div>
          <div class="card-content">
            <div class="media">
              <div class="media-content">
                <p class="title is-4">{{ $t('Flex-Detail.bulletThree.title') }}</p>
              </div>
            </div>

            <div class="content">
              {{ $t('Flex-Detail.bulletThree.text') }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <p>{{ $t('Flex-Detail.lastText') }}</p>
  </section>
</template>

<script>
import {computed, reactive} from "vue";
import {useHead} from "@vueuse/head";

export default {
  name: "FlexDetail",
  setup(){
    const siteData = reactive({
      title: 'Flexible Luftfrachtoptionen von KAWO | Maßgeschneiderte Lösungen für Ihre Transportbedürfnisse',
      description: 'Entdecken Sie die flexiblen Luftfrachtlösungen von KAWO, die perfekt auf Ihre individuellen Anforderungen zugeschnitten sind. Von Teilladungen bis Vollcharter, wir bieten globale Flexibilität und Verlässlichkeit für Ihre Fracht. Profitieren Sie von unserer Anpassungsfähigkeit, globalen Abdeckung und jahrzehntelanger Erfahrung.'
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

.about {
  padding: 1rem;
}
</style>