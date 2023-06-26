<template>
  <SlideShow/>
  <ServiceTiles :title="'KAWO GmbH'" :subtitle="' Der On Board Courier ist in der Logistikbranche fest etabliert und kommt zum Einsatz wenn herkömmliche\n'+
'      Logistikwege versagen. Wir haben uns zum Ziel gesetzt auf jede Ihrer OBC Anfragen schnell und individuell zu\n'+
'      reagieren.\n'+
'\n'+
'\n'+
'      Wir sind seit 1995 auf den On Board Courier - Handcarry spezialisiert und möchten Ihnen unseren professionellen\n'+
'      Service\n'+
'\n'+
'      auf den nächsten Seiten näher bringen.\n'+
'\n'+
'\n'+
'      Mit unserem Service halten Sie Ihre Liefertermine ein und wenden Sie größere Schäden durch Produktionsausfälle\n'+
'      ab.\n'+
'\n'+
'      Wir verstehen uns als Dienstleister für Speditionen und Industrie.'" :tiles="services"/>

  <section class="hero is-medium is-light">
    <div class="hero-body">
      <p class="title">
        KONTAKTIEREN SIE UNS
      </p>
      <p class="subtitle">
        Wir sind 24 Stunden, 7 Tage die Woche und 365 Tage im Jahr für Sie im Einsatz.
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
              Schreiben Sie uns eine Email <br>
              <b> KAWO@KAWO.DE </b>
            </span>
          </button>
        </div>
      </div>
      <div class="block">
        Unsere Kuriere sind überall und jederzeit für Sie einsatzbereit.
      </div>
    </div>
  </section>

  <section class="hero is-small experts">
    <div class="hero-body">
      <p class="title">
        DIE EXPERTEN IN EMERGENCY LOGISTICS
      </p>
      <div class="block">
        Wir sind seit 1995 auf den On Board Courier - Handcarry spezialisiert und möchten Ihnen unseren professionellen Service
        auf den nächsten Seiten näher bringen. <br>
        <br>
        Mit unserem Service halten Sie Ihre Liefertermine ein und wenden Sie größere Schäden durch Produktionsausfälle ab.
        Wir verstehen uns als Dienstleister für Speditionen und Industrie.
        Zu unseren Kunden gehören namhafte Unternehmen aus der Automobil, Aviation und Computer-Industrie. <br> <br>
        Unsere Auftraggeber kennen uns als seriösen und zuverlässigen Partner der absoluten Kundenschutz gewährt.
        Die Zufriedenheit unserer Partner gibt uns Recht und so blicken wir nunmehr auf über 25.000 erfolgreich abgewickelte
        On Board Courier Sendungen, die weltweit sicher und zuverlässig durch unsere Kuriere ihr Ziel erreicht haben.
        <br> <br>
        Profitieren auch Sie von unserer langjährigen Erfahrung und „know how“. <br>
        Bei Fragen stehen wir Ihnen jederzeit unter unserer 24 Stunden Hotline zur Verfügung.
      </div>
    </div>
  </section>

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
        {title: 'ON-BOARD Courier', subtitle: 'Das ist ein test subtitle', img: 'Plane1.jpg'},
        {title: 'FLEX', subtitle: 'Das ist ein test subtitle', img: 'Plane1.jpg'},
        {title: 'ALLES', subtitle: 'Das ist ein test subtitle', img: 'Plane1.jpg'},
      ],
      areas: [
        {title: 'Automotive Parts', subtitle: 'Das ist ein test subtitle', img: 'Plane1.jpg'},
        {title: 'Ersatzteil Logistik', subtitle: 'Das ist ein test subtitle', img: 'Plane1.jpg'},
        {title: 'Prototypen', subtitle: 'Das ist ein test subtitle', img: 'Plane1.jpg'},
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

.experts{
  border-bottom: lightgrey 1px solid;
  margin: 30px
}

.areas {
  margin-top: -50px;
}
</style>