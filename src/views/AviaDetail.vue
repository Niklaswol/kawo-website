<template>
  <section class="hero has-text-centered is-family-secondary">
    <div class="hero-body">
      <p class="title is-2">{{ $t('Avia-Detail.title') }}</p>
      <p class="subtitle">{{ $t('Avia-Detail.firstText') }}</p>
    </div>
  </section>

  <section class="section">
    <figure class="image">
      <img src="../assets/Plane2.jpeg" alt="Placeholder image">
    </figure>
  </section>

  <section class="section">

    <div class="columns">
      <div class="column">
        <p class="title is-2">
          {{ $t('Avia-Detail.headlineBold') }}
        </p>
      </div>
      <div class="column"></div>
      <div class="column">{{ $t('Avia-Detail.secondText') }}</div>
    </div>

    <div class="columns mt-4">
      <div class="column is-4">
        <div class="card about">
          <div class="icon-container">
            <faIcon icon="hourglass-start" class="about-icon"></faIcon>
          </div>
          <div class="card-content">
            <div class="media">
              <div class="media-content">
                <p class="title is-4">{{ $t('Avia-Detail.bulletOne.title') }}</p>
              </div>
            </div>

            <div class="content">
              {{ $t('Avia-Detail.bulletOne.text') }}
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
                <p class="title is-4">{{ $t('Avia-Detail.bulletTwo.title') }}</p>
              </div>
            </div>

            <div class="content">
              {{ $t('Avia-Detail.bulletTwo.text') }}
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
                <p class="title is-4">{{ $t('Avia-Detail.bulletThree.title') }}</p>
              </div>
            </div>

            <div class="content">
              {{ $t('Avia-Detail.bulletThree.text') }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <p>{{ $t('Avia-Detail.lastText') }}</p>
  </section>
</template>

<script>
export default {
  name: "AviaDetail",
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