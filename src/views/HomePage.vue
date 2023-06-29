<template>
  <section class="section has-text-centered">
    <p class="title is-1">{{ $t('homePage.title') }}</p>
    <p class="subtitle">{{ $t('homePage.subtitle') }}</p>
    <div class="columns">
      <div class="column">
        <button class="button is-dark has-icons-left">
          <faIcon icon="phone-volume" class="phone"></faIcon>
          Jetzt anrufen
        </button>
        <button class="button has-icons-left ml-2">
          <faIcon icon="briefcase" class="phone"></faIcon>
          Leistungen
        </button>
      </div>
    </div>
    <SlideShow/>
  </section>

  <section class="section">
    <div class="columns">
      <div class="column is-3">
        <p class="title is-2">Solution for you business needs</p>
      </div>
      <div class="column"></div>
      <div class="column">
        <div class="block">Wir sind seit 1995 auf den On Board Courier - Handcarry spezialisiert und möchten Ihnen
          unseren
          professionellen Service auf den nächsten Seiten näher bringen.
        </div>
      </div>
    </div>
    <ServiceTiles class="mt-6" :title="$t('homePage.companyName')" :subtitle="$t('homePage.info')" :tiles="services"/>
  </section>

  <section class="section">
    <div class="columns">
      <div class="column">
        <div class="card">
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

      <div class="column">
        <p class="title">
          Pro-Active Tracking
        </p>
        <div class="block">
          Wir bieten Ihnen vielseitige Transportlösungen für Ihre eiligen Sendungen. Egal wie kurzfristig Sie handeln
          müssen, wir bieten Ihnen eine individuell auf Ihre Bedürfnisse zugeschnittene On Board Courier Lösung.
        </div>
        <div class="block">
          <span class="icon-text">
            <span class="icon">
              <faIcon icon="arrow-circle-right"></faIcon>
            </span>
            <span>Schnelle Lieferung</span>
          </span>
        </div>
        <div class="block">
          <span class="icon-text">
            <span class="icon">
              <faIcon icon="arrow-circle-right"></faIcon>
            </span>
            <span>Schnelle Lieferung</span>
          </span>
        </div>
        <div class="block7">
          <span class="icon-text">
            <span class="icon">
              <faIcon icon="arrow-circle-right"></faIcon>
            </span>
            <span>Schnelle Lieferung</span>
          </span>
        </div>
        <div class="columns mt-5">
          <div class="column">
            <div class="button">Jetzt mehr erfahren</div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="section">
    <div class="columns">
      <div class="column">
        <p class="title">
          Pro-Active Tracking
        </p>
        <div class="block">
          Wir bieten Ihnen vielseitige Transportlösungen für Ihre eiligen Sendungen. Egal wie kurzfristig Sie handeln
          müssen, wir bieten Ihnen eine individuell auf Ihre Bedürfnisse zugeschnittene On Board Courier Lösung.
        </div>
        <div class="block">
          <span class="icon-text">
            <span class="icon">
              <faIcon icon="arrow-circle-right"></faIcon>
            </span>
            <span>Schnelle Lieferung</span>
          </span>
        </div>
        <div class="block">
          <span class="icon-text">
            <span class="icon">
              <faIcon icon="arrow-circle-right"></faIcon>
            </span>
            <span>Schnelle Lieferung</span>
          </span>
        </div>
        <div class="block7">
          <span class="icon-text">
            <span class="icon">
              <faIcon icon="arrow-circle-right"></faIcon>
            </span>
            <span>Schnelle Lieferung</span>
          </span>
        </div>
        <div class="columns mt-5">
          <div class="column">
            <div class="button">Jetzt mehr erfahren</div>
          </div>
        </div>
      </div>

      <div class="column is-3"></div>

      <div class="column">
        <figure class="image">
          <img src="../assets/Fotolia_39448239_M.jpg" alt="Placeholder image">
        </figure>
      </div>
    </div>
  </section>

  <section class="section">
    <div class="columns">
      <div class="column">
        <div class="card">
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

      <div class="column">
        <p class="title">
          Pro-Active Tracking
        </p>
        <div class="block">
          Wir bieten Ihnen vielseitige Transportlösungen für Ihre eiligen Sendungen. Egal wie kurzfristig Sie handeln
          müssen, wir bieten Ihnen eine individuell auf Ihre Bedürfnisse zugeschnittene On Board Courier Lösung.
        </div>
        <div class="block">
          <span class="icon-text">
            <span class="icon">
              <faIcon icon="arrow-circle-right"></faIcon>
            </span>
            <span>Schnelle Lieferung</span>
          </span>
        </div>
        <div class="block">
          <span class="icon-text">
            <span class="icon">
              <faIcon icon="arrow-circle-right"></faIcon>
            </span>
            <span>Schnelle Lieferung</span>
          </span>
        </div>
        <div class="block7">
          <span class="icon-text">
            <span class="icon">
              <faIcon icon="arrow-circle-right"></faIcon>
            </span>
            <span>Schnelle Lieferung</span>
          </span>
        </div>
        <div class="columns mt-5">
          <div class="column">
            <div class="button">Jetzt mehr erfahren</div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="section">
    <div class="columns">
      <div class="column is-3">
        <p class="title is-2">Einsatzbereiche</p>
      </div>
      <div class="column"></div>
    </div>
    <ServiceTiles class="mt-6" :title="$t('homePage.companyName')" :subtitle="$t('homePage.info')" :tiles="services"/>
  </section>


  <!--  <ServiceTiles :title="'TRANSPORTBEREICHE'" :tiles="areas" class="areas"/>-->

  <section class="hero is-small is-dark info">
    <div class="hero-body">
      <p class="title">
        {{ $t('homePage.contactUs.title') }}
      </p>
      <p class="subtitle">
        {{ $t('homePage.contactUs.subtitle') }}
      </p>
      <div class="columns">
        <div class="column">
          <button class="button is-primary is-medium has-icons-left has-text-left is-justify-content-left emergency">
            <span class="icon has-text-white">
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
          <button class="button is-primary is-medium has-icons-left has-text-left is-justify-content-left emergency">
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
      services: this.$store.getters.getServices,
      areas: this.$store.getters.getAreas
    }
  },
}
</script>

<style scoped>
.image {
  width: 23rem;
  height: 25rem;
}
</style>