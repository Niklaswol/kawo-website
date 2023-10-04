<template>
  <section class="hero has-text-centered is-family-secondary">
    <div class="hero-body">
      <p class="title is-2">{{ $t('Charter-Detail.title') }}</p>
      <p class="subtitle">{{ $t('Charter-Detail.firstText') }}</p>
    </div>
  </section>

  <section class="section">
    <figure class="image">
      <img src="../assets/charter.jpg" alt="Placeholder image">
    </figure>
  </section>

  <section class="section">

    <div class="columns">
      <div class="column">
        <p class="title is-2">
          {{ $t('Charter-Detail.headlineBold') }}
        </p>
      </div>
      <div class="column"></div>
      <div class="column">{{ $t('Charter-Detail.secondText') }}</div>
    </div>

    <div class="columns mt-4">
      <div class="column is-4">
        <div class="card about">
          <div class="icon-container">
            <faIcon icon="magnifying-glass" class="about-icon"></faIcon>
          </div>
          <div class="card-content">
            <div class="media">
              <div class="media-content">
                <p class="title is-4">{{ $t('Charter-Detail.bulletOne.title') }}</p>
              </div>
            </div>

            <div class="content">
              {{ $t('Charter-Detail.bulletOne.text') }}
            </div>
          </div>
        </div>
      </div>
      <div class="column is-4">
        <div class="card about">
          <div class="icon-container">
            <faIcon icon="timeline" class="about-icon"></faIcon>
          </div>
          <div class="card-content">
            <div class="media">
              <div class="media-content">
                <p class="title is-4">{{ $t('Charter-Detail.bulletTwo.title') }}</p>
              </div>
            </div>

            <div class="content">
              {{ $t('Charter-Detail.bulletTwo.text') }}
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
                <p class="title is-4">{{ $t('Charter-Detail.bulletThree.title') }}</p>
              </div>
            </div>

            <div class="content">
              {{ $t('Charter-Detail.bulletThree.text') }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <p>{{ $t('Charter-Detail.lastText') }}</p>
  </section>
</template>

<script>
export default {
  name: "CharterDetail",
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