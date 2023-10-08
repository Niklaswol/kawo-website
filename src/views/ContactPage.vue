<template>
  <section class="section">
    <div class="block">
      <b>Kawo GmbH </b><br>
      Damaschkestraße 54 <br>
      51377 Leverkusen <br> <br> <br>

      Telefon: &nbsp;&nbsp;&nbsp; +49 (0)214 - 61 291 <br>

      Telefax: &nbsp;&nbsp;&nbsp; +49 (0)214 - 860 90 44 <br>

      E-Mail: &nbsp;&nbsp;&nbsp;&nbsp; service@obc-kawo.de <br><br>

      Sitz der Gesellschaft: &nbsp;&nbsp;&nbsp; Amtsgericht Köln - HRB 49 667 <br>

      Geschäftsführer: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Karlheinz Lips <br> <br>

      Umsatzsteuer ID: &nbsp;&nbsp;&nbsp;&nbsp; DE 209 873 985 <br>

      Steuernummer: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;230/5710/0538 <br><br>

      <b>Verantwortlich für diesen Internetauftritt:</b><br><br>

      Niklas Wollgarten <br>

      Zum Forst 8 <br>

      53894 Mechernich <br><br>

      <b>Allgemeine Geschäftsbedingungen: </b><br><br>

      Wir arbeiten ausschließlich auf Grundlage der Allgemeinen Deutschen Spediteurbedingungen (ADSp).
    </div>

  </section>
</template>

<script>
import {computed, reactive} from "vue";
import {useHead} from "@vueuse/head";

export default {
  name: 'HomePage',
  components: {},
  setup() {
    const siteData = reactive({
      title: 'KAWO GmbH Kontaktinformationen - Luftfrachtexperten in Leverkusen',
      description: 'Suchen Sie nach zuverlässigen Luftfrachtlösungen? Kontaktieren Sie KAWO GmbH über Telefon, E-Mail oder besuchen Sie uns in Leverkusen. Geschäftsführer: Karlheinz Lips. AGBs basierend auf ADSp.'
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