<template>
  <section class="hero has-text-centered">
    <div class="hero-body">
      <div class="columns">
        <div class="column"></div>
        <div class="column is-7">
          <p class="title is-2">{{ $t('aboutUs.pres.title') }}</p>
          <div class="block">{{ $t('aboutUs.pres.text') }}</div>
        </div>
        <div class="column"></div>
      </div>
    </div>
  </section>

  <section class="section">
    <div class="columns">

      <div class="column">
        <figure class="image">
          <img src="../assets/plane-bottom.jpg" alt="Placeholder image">
        </figure>
      </div>

      <div class="column is-1"></div>

      <div class="column">
        <p class="title">
          {{ $t('aboutUs.success.title') }}
        </p>
        <div class="block">
          {{ $t('aboutUs.success.text') }}
        </div>

        <div class="block">
          {{ $t('aboutUs.values.text') }}
        </div>

      </div>

    </div>
  </section>

  <section class="section">
    <div class="columns">

      <div class="column">
        <p class="title">
          {{ $t('aboutUs.mission.title') }}
        </p>
        <div class="block">
          {{ $t('aboutUs.mission.text') }}
        </div>

        <div class="block">
          {{ $t('aboutUs.team.text') }}
        </div>
      </div>

      <div class="column is-1"></div>

      <div class="column">
        <figure class="image">
          <img src="../assets/plane-keyboard.jpg" alt="Placeholder image">
        </figure>
      </div>

    </div>
  </section>

  <section class="section">
    <div class="columns">

      <div class="column">
        <figure class="image">
          <img src="../assets/plane-front-cargo.jpg" alt="Placeholder image">
        </figure>
      </div>

      <div class="column is-1"></div>

      <div class="column">
        <p class="title">
          {{ $t('aboutUs.partners.title') }}
        </p>
        <div class="block">
          {{ $t('aboutUs.partners.text') }}
        </div>

        <div class="block">
          {{ $t('aboutUs.commitments.text') }}
        </div>
      </div>

    </div>
  </section>

</template>

<script>
export default {
  name: 'AboutUs',
  components: {},
}
</script>

<style scoped>
</style>