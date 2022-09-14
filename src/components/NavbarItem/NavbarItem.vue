<template>
  <div class="nav" data-init="auto">
    <nav class="nav__level1" role="navigation">
      <div class="container">
        <!-- The Logo of the Navbar -->
        <div class="logo">
          <a class="align-left" href="/" tabindex="-1">
            <span class="logo-lifeform" aria-label="Swisscom Logo"></span>
            <span class="logo-type">
              <h2 class="font font--sans hidden-phone-down sc-navy">Memory</h2>
            </span>
          </a>
        </div>

        <div class="nav__mainnav">
          <!-- The left side of the Navbar -->
          <div class="nav__primary" :class="{ 'is-open': isOpen }">
            <ul class="nav-items">
              <li class="nav-item" v-for="(item, index) in items" :key="index">
                <router-link
                  :to="item.route"
                  @click.native="closeMobileNav"
                  class="nav-link nav-link--header"
                >
                  {{ item.name }}
                </router-link>
              </li>
            </ul>
          </div>

          <!-- The right side of the Navbar -->
          <div class="nav__secondary">
            <ul class="nav-items">
              <li class="nav-item hidden-tablet-up">
                <a
                  class="nav-icon nav-hamburger"
                  :class="{ 'is-active': isOpen }"
                  @click="handleMobileMenu"
                  aria-label="Menu"
                >
                  <!-- Creates the three lines for the mobile hamburger navigation -->
                  <span></span><span></span><span></span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script lang="ts" src="./NavbarItem.ts"></script>
<style src="./NavbarItem.css"></style>
