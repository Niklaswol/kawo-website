<template>
  <section class="hero has-text-centered">
    <div class="hero-body">
      <div class="columns">
        <div class="column"></div>
        <div class="column is-7">
          <p class="title is-2">{{ $t('operations.title') }}</p>
          <div class="block">{{ $t('operations.text') }}</div>
        </div>
        <div class="column"></div>
      </div>
    </div>
  </section>

  <section class="section">
    <div class="columns">
      <div class="column">
        <div class="card about">
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
          {{ $t('operations.auto.title') }}
        </p>
        <div class="block">
          {{ $t('operations.auto.text') }}
        </div>
        <div class="columns">
          <div class="column">
            <a>{{ $t('operations.auto.link') }}</a>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="section">
    <div class="columns">
      <div class="column">
        <p class="title">
          {{ $t('operations.comp.title') }}
        </p>
        <div class="block">
          {{ $t('operations.comp.text') }}
        </div>
        <div class="columns">
          <div class="column">
            <a>{{ $t('operations.comp.link') }}</a>
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
          {{ $t('operations.avia.title') }}
        </p>
        <div class="block">
          {{ $t('operations.avia.text') }}
        </div>
        <div class="columns">
          <div class="column">
            <a>{{ $t('operations.avia.link') }}</a>
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
</style>