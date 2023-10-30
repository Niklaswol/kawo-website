<template>
  <nav class="navbar is-transparent has-centered-menu" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <figure class="image is-64x64 mt-2 ml-2">
        <img src="../../public/kawo-on-board-courier.jpg">
      </figure>
      <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false"
         data-target="navbarBasicExample">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>
    <div id="navbarBasicExample" class="navbar-menu mt-3">
      <div class="navbar-start">
        <router-link class="navbar-item" to="/"> {{ $t("navbar.home") }}</router-link>

        <div class="navbar-item has-dropdown is-hoverable">
          <router-link class="navbar-item" to="/products"> {{ $t("navbar.services.title") }}</router-link>
          <div class="navbar-dropdown">
            <router-link class="navbar-item" to="/products/obc"> {{ $t("navbar.services.obc") }}</router-link>
            <router-link class="navbar-item" to="/products/flex"> {{ $t("navbar.services.flex") }}</router-link>
            <router-link class="navbar-item" to="/products/charter"> {{ $t("navbar.services.charter") }}</router-link>
          </div>
        </div>

        <router-link class="navbar-item" to="/about-us"> {{ $t("navbar.aboutUs") }}</router-link>
        <router-link class="navbar-item" to="/contact"> {{ $t("navbar.contact") }}</router-link>
      </div>
      <div class="navbar-end mr-3">
        <LocaleChanger class="locale-changer"/>
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
.navbar.has-centered-menu .navbar-start {
  flex-grow: 1;
  justify-content: center;
  margin: 10px;
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