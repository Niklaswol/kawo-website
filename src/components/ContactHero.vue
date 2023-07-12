<template>
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
            <span class="icon">
              <faIcon icon="phone-volume"></faIcon>
            </span>
            <span class="text-btn-icon">
              24/7 Hotline <br>
              <b> +49(0)214 61-291 </b>
            </span>
          </button>
        </div>
      </div>
      <div class="columns">
        <div class="column">
          <button class="button is-primary is-medium has-icons-left has-text-left is-justify-content-left emergency">
            <span class="icon is-small">
              <faIcon icon="envelope"></faIcon>
            </span>
            <span class="text-btn-icon">
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