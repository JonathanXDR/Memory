<template>
  <div class="nav" data-init="auto">
    <nav class="nav__level1" role="navigation">
      <div class="container">
        <!-- The Logo of the Navbar -->
        <router-link to="/">
          <a class="logo" tabindex="-1"
            ><span class="logo-lifeform" aria-label="Swisscom Logo"></span
            ><span class="logo-type">
              <img src="../../assets/LogoSC.png" alt="Swisscom" height="32" /></span
          ></a>
        </router-link>

        <div class="nav__mainnav">
          <!-- The left side of the Navbar -->
          <div class="nav__primary">
            <ul class="nav-items">
              <li class="nav-item" v-for="(item, index) in items" :key="index">
                <router-link :to="item.route">
                  <a
                    class="nav-link nav-link--header"
                    :class="{ 'nav-link--active': item.route === $route.path }"
                    ><span class="text-underline">{{ item.name }}</span></a
                  >
                </router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script lang="ts" src="./Navbar.ts"></script>
<style src="./Navbar.css"></style>
