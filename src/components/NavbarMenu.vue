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
        <button class="button is-medium has-icons-left has-text-left is-justify-content-left">
            <span class="icon">
              <faIcon icon="phone-volume"></faIcon>
            </span>
          <span>
              <b> +49(0)214 61-291 </b>
            </span>
        </button>
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
        <a class="navbar-item"> {{ $t("navbar.home") }} </a>
        <a class="navbar-item"> {{ $t("navbar.services") }} </a>
        <a class="navbar-item"> {{ $t("navbar.areas") }} </a>
        <a class="navbar-item"> {{ $t("navbar.aboutUs") }} </a>
        <a class="navbar-item"> {{ $t("navbar.contact") }} </a>
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