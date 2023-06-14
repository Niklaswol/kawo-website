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
        <a class="navbar-item" href="https://www.linkedin.com/company/kawo-gmbh/about/"> <faIcon :icon="['fab', 'twitter']"></faIcon> </a>
        <a class="navbar-item"> <faIcon :icon="['fab', 'facebook']"></faIcon> </a>
        <a class="navbar-item"> <faIcon :icon="['fab', 'linkedin']"></faIcon> </a>
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
        <a class="button">24/7 Hotline<faIcon icon="phone-volume" class="phone"></faIcon></a>
        <LocaleChanger class="locale-changer"/>
      </div>
      <hr>
      <div class="navbar-start navbar-wide">
        <a class="navbar-item"> Start </a>
        <a class="navbar-item"> Leistungen </a>
        <a class="navbar-item"> Einsatzbereiche </a>
        <a class="navbar-item"> Über Uns </a>
        <a class="navbar-item"> Kontakt </a>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.navbar-menu {
  flex-wrap: wrap;
}
.navbar-start,
.navbar-end{
  flex: 1 1 0;
}
.navbar-wide.navbar-start {
  flex: 1 1 100%;
  justify-content: center;
}
.button{
  margin-top: 0.5rem;
}
.phone {
  margin-left: 10px;
}
.locale-changer{
  margin-top: 0.5rem;
  margin-left: 0.5rem;
}
</style>
<script setup>
import LocaleChanger from "@/components/LocaleChanger.vue";
</script>