<template>
  <section class="hero has-text-centered is-family-secondary">
    <div class="hero-body">
      <p class="title is-2">{{ $t('OBC-Detail.title') }}</p>
      <p class="subtitle">{{ $t('OBC-Detail.firstText') }}</p>
    </div>
  </section>

  <section class="section">
    <figure class="image">
      <img src="../assets/packages-plane.jpg" alt="Placeholder image">
    </figure>
  </section>

  <section class="section">

    <div class="columns">
      <div class="column">
        <p class="title is-2">
          {{ $t('OBC-Detail.headlineBold') }}
        </p>
      </div>
      <div class="column"></div>
      <div class="column">{{ $t('OBC-Detail.secondText') }}</div>
    </div>

    <div class="columns mt-4">
      <div class="column is-4">
        <div class="card about">
          <div class="icon-container">
            <faIcon icon="clock" class="about-icon"></faIcon>
          </div>
          <div class="card-content">
            <div class="media">
              <div class="media-content">
                <p class="title is-4">{{ $t('OBC-Detail.bulletOne.title') }}</p>
              </div>
            </div>

            <div class="content">
              {{ $t('OBC-Detail.bulletOne.text') }}
            </div>
          </div>
        </div>
      </div>
      <div class="column is-4">
        <div class="card about">
          <div class="icon-container">
            <faIcon icon="chalkboard" class="about-icon"></faIcon>
          </div>
          <div class="card-content">
            <div class="media">
              <div class="media-content">
                <p class="title is-4">{{ $t('OBC-Detail.bulletTwo.title') }}</p>
              </div>
            </div>

            <div class="content">
              {{ $t('OBC-Detail.bulletTwo.text') }}
            </div>
          </div>
        </div>
      </div>
      <div class="column is-4">
        <div class="card about">
          <div class="icon-container">
            <faIcon icon="shield-halved" class="about-icon"></faIcon>
          </div>
          <div class="card-content">
            <div class="media">
              <div class="media-content">
                <p class="title is-4">{{ $t('OBC-Detail.bulletThree.title') }}</p>
              </div>
            </div>

            <div class="content">
              {{ $t('OBC-Detail.bulletThree.text') }}
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="columns mt-4">
      <div class="column is-4">
        <div class="card about">
          <div class="icon-container">
            <faIcon icon="jet-fighter" class="about-icon"></faIcon>
          </div>
          <div class="card-content">
            <div class="media">
              <div class="media-content">
                <p class="title is-4">{{ $t('OBC-Detail.bulletFour.title') }}</p>
              </div>
            </div>

            <div class="content">
              {{ $t('OBC-Detail.bulletFour.text') }}
            </div>
          </div>
        </div>
      </div>
      <div class="column is-4">
        <div class="card about">
          <div class="icon-container">
            <faIcon icon="lock" class="about-icon"></faIcon>
          </div>
          <div class="card-content">
            <div class="media">
              <div class="media-content">
                <p class="title is-4">{{ $t('OBC-Detail.bulletFive.title') }}</p>
              </div>
            </div>

            <div class="content">
              {{ $t('OBC-Detail.bulletFive.text') }}
            </div>
          </div>
        </div>
      </div>
      <div class="column is-4">
        <div class="card about">
          <div class="icon-container">
            <faIcon icon="globe" class="about-icon"></faIcon>
          </div>
          <div class="card-content">
            <div class="media">
              <div class="media-content">
                <p class="title is-4">{{ $t('OBC-Detail.bulletSix.title') }}</p>
              </div>
            </div>

            <div class="content">
              {{ $t('OBC-Detail.bulletSix.text') }}
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="columns mt-4">
      <div class="column is-4">
        <div class="card about">
          <div class="icon-container">
            <faIcon icon="plus" class="about-icon"></faIcon>
          </div>
          <div class="card-content">
            <div class="media">
              <div class="media-content">
                <p class="title is-4">{{ $t('OBC-Detail.bulletSeven.title') }}</p>
              </div>
            </div>

            <div class="content">
              {{ $t('OBC-Detail.bulletSeven.text') }}
            </div>
          </div>
        </div>
      </div>
      <div class="column is-4">
      </div>
      <div class="column is-4">
      </div>
    </div>
    <p>{{ $t('OBC-Detail.lastText') }}</p>
  </section>
</template>

<script>
import {computed, reactive} from "vue";
import {useHead} from "@vueuse/head";

export default {
  name: "OBC-Detail",
  setup() {
    const siteData = reactive({
      title: 'Express On Board Courier (OBC) Service von KAWO | Schnelle & Sichere Zustellung Weltweit',
      description: 'Entdecken Sie den Express On Board Courier (OBC) Service von KAWO für dringende Lieferungen. Ein persönlicher Kurier begleitet Ihre Sendung, gewährleistet schnelle Zustellung ohne Umwege und bietet Echtzeit-Verfolgung. Vertrauen Sie auf unsere Expertise für sicheren und zuverlässigen Versand.'
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