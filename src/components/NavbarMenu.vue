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
        <a class="navbar-item"> <faIcon :icon="['fab', 'twitter']"></faIcon> </a>
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
        <a class="navbar-item"> <faIcon icon="search"></faIcon> </a>
        <a class="navbar-item"> <faIcon icon="user"></faIcon> </a>
        <a class="navbar-item"> <faIcon icon="shopping-bag"></faIcon> </a>
      </div>
      <div class="navbar-start navbar-wide">
        <a class="navbar-item"> Home </a>
        <a class="navbar-item"> Documentation </a>
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
</style>