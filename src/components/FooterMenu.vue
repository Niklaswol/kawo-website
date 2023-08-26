<template>
  <footer class="footer">
    <div class="columns">
      <div class="column is-9">
        <router-link class="navbar-item" to="/about-us"> {{ $t("navbar.aboutUs") }}</router-link>
        <router-link class="navbar-item" to="/contact"> {{ $t("navbar.contact") }}</router-link>
        <router-link class="navbar-item" to="/impressum"> {{ $t("navbar.impressum") }}</router-link>
        <router-link class="navbar-item" to="/datenschutz"> {{ $t("navbar.datenschutz") }}</router-link>
      </div>
      <div class="column">
        <div class="columns">
          <div class="column"><faIcon :icon="['fab', 'facebook']" class="about-icon"></faIcon></div>
          <div class="column"><faIcon :icon="['fab', 'linkedin']" class="about-icon"></faIcon></div>
          <div class="column"><faIcon :icon="['fab', 'youtube']" class="about-icon"></faIcon></div>
          <div class="column"><faIcon :icon="['fab', 'instagram']" class="about-icon"></faIcon></div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.navbar-item {
  display: inline;
}

.footer{
  max-height: 50px;
}
</style>