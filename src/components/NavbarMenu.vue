<template>
  <nav class="navbar is-transparent has-centered-logo-alt2" role="navigation" aria-label="main navigation">
    <div class="navbar-brand is-hidden-desktop">
      <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false"
         data-target="navbarBasicExample">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>
    <div id="navbarBasicExample" class="navbar-menu">
      <div class="navbar-start">
      </div>
      <div class="navbar-brand is-hidden-touch">
        <a class="navbar-item" href="https://bulma.io">
          <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28">
        </a>
        <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false"
           data-target="navbarBasicExample">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div class="navbar-end">
        <LocaleChanger class="locale-changer"/>
      </div>
      <hr>
      <div class="navbar-start navbar-wide">
        <router-link class="navbar-item" to="/"> {{ $t("navbar.home") }}</router-link>

        <div class="navbar-item has-dropdown is-hoverable">
          <router-link class="navbar-item" to="/products"> {{ $t("navbar.services.title") }}</router-link>
          <div class="navbar-dropdown">
            <router-link class="navbar-item" to="/products/obc"> {{ $t("navbar.services.obc") }}</router-link>
            <router-link class="navbar-item" to="/products/flex"> {{ $t("navbar.services.flex") }}</router-link>
            <router-link class="navbar-item" to="/products/charter"> {{ $t("navbar.services.charter") }}</router-link>
          </div>
        </div>

        <div class="navbar-item has-dropdown is-hoverable">
          <router-link class="navbar-item" to="/operations"> {{ $t("navbar.operations.title") }}</router-link>
          <div class="navbar-dropdown">
            <router-link class="navbar-item" to="/operations/auto"> {{ $t("navbar.operations.auto") }}</router-link>
            <router-link class="navbar-item" to="/operations/comp"> {{ $t("navbar.operations.comp") }}</router-link>
            <router-link class="navbar-item" to="/operations/avia"> {{ $t("navbar.operations.avia") }}</router-link>
          </div>
        </div>

        <router-link class="navbar-item" to="/about-us"> {{ $t("navbar.aboutUs") }}</router-link>
        <router-link class="navbar-item" to="/contact"> {{ $t("navbar.contact") }}</router-link>
      </div>
    </div>
  </nav>
</template>

<script>
import LocaleChanger from "@/components/LocaleChanger.vue";

export default {
  name: "NavbarMenu",
  components: {
    LocaleChanger
  }
}
</script>

<style scoped>
.navbar {
  margin: 0 1rem 0 1rem;
}

.navbar-menu {
  flex-wrap: wrap;
}

.navbar-start,
.navbar-end {
  flex: 1 1 0;
}

.navbar-wide.navbar-start {
  flex: 1 1 100%;
  justify-content: center;
}

.button {
  margin-top: 0.5rem;
}

.phone {
  margin-right: 10px;
}

.locale-changer {
  margin-top: 0.5rem;
  margin-left: 0.5rem;
}
</style>