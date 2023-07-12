<template>
  <section class="hero is-medium mt-5">
    <div class="img is-relative has-text-centered">
      <div class="image-container">
        <img class="header" :src="require(`../assets/Plane1.jpg`)" alt="slide-show-image">
      </div>
      <div class="overlay">
        <div class="centered">
          <p class="title is-1 has-text-white">UNSERE LEISTUNGEN - SIND IHRE LÖSUNGEN</p>
          <p class="subtitle has-text-white">Wir machen scheinbar Unmögliches möglich!</p>
        </div>
      </div>
    </div>
  </section>

  <section class="section">
    <div class="columns">
      <div class="column">
        <figure class="image">
          <img src="../assets/Plane1.jpg" alt="Placeholder image">
        </figure>
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

      <div class="column is-1"></div>

      <div class="column">
        <figure class="image">
          <img src="../assets/Plane1.jpg" alt="Placeholder image">
        </figure>
      </div>
    </div>
  </section>

  <section class="section">
    <div class="columns">
      <div class="column">
        <figure class="image">
          <img src="../assets/Plane1.jpg" alt="Placeholder image">
        </figure>
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
</template>

<script>

export default {
  name: 'ServicesPage',
  components: {},
}
</script>

<style scoped>
.header {
  max-height: 25rem;
  width: 100% !important;
  object-fit: cover;
  object-position: center;
}

.overlay {
  position: absolute;
  background: #00120B80;
  display: flex;
  align-items: center;
  justify-content: center;
  inset: 0;
  max-height: 98.5% !important;
}
</style>