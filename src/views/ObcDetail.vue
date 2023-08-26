<template>
  <section class="hero has-text-centered is-family-secondary">
    <div class="hero-body">
      <p class="title is-2">{{ $t('OBC-Detail.title') }}</p>
      <p class="subtitle">{{ $t('OBC-Detail.firstText') }}</p>
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
    <p>{{ $t('OBC-Detail.lastText') }}</p>
  </section>
</template>

<script>
export default {
  name: "OBC-Detail",
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