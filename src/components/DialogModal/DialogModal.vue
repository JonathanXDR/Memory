<template>
  <div id="portal">
    <div
      :class="[
        { 'r-fade-transition-enter-done': modalOpen },
        { 'r-fade-transition-exit-done': modalOpen === false },
      ]"
      data-core-fade-transition-wrapper=""
      class="rc-overlay rc-overlay-popup rc-overlay-fixed-width"
      data-core-overlay=""
      data-core-overlay-cover=""
    >
      <div
        data-core-overlay-content=""
        tabindex="-1"
        role="dialog"
        aria-labelledby="b79c0e00-5c20-11ed-933b-e7a7f9dc27fe"
      >
        <div class="rc-overlay-popup-outer">
          <div class="rc-overlay-popup-content">
            <div class="rc-overlay-loader-content">
              <div class="dd-modal">
                <h2
                  class="t-headline-reduced"
                  id="b79c0e00-5c20-11ed-933b-e7a7f9dc27fe"
                >
                  Flexible delivery and pickup options.
                </h2>
                <p class="t-body">
                  Get your new Apple products quickly and easily with a handful
                  of delivery and pickup options to choose from.
                </p>
                <h2 class="t-label">Two-hour delivery from an Apple Store.</h2>
                <p class="t-body">
                  Enjoy lightning-fast courier delivery for an additional fee at
                  checkout, on eligible in-stock items in most metro areas.
                  Delivery time windows can be scheduled at checkout.
                </p>
                <h2 class="t-label">Convenient local pickup.</h2>
                <p class="t-body">
                  Place your order online and pick it up at a local Apple Store.
                  Curbside pickup is also available at select locations — simply
                  park your car and we’ll bring your order out to you.
                </p>
                <h2 class="t-label">Free next-day delivery.</h2>
                <p class="t-body">
                  Most of your favorite Apple products are available for free
                  next-day delivery.
                </p>
                <p class="dd-modal-link">
                  <a
                    href="/shop/shipping-pickup"
                    data-slot-name="main1"
                    data-feature-name="Astro Link"
                    data-display-name="AOS: home/shipping_pickup"
                    class="more"
                    >Learn&nbsp;more<span class="a11y"
                      >about free delivery</span
                    ></a
                  >
                </p>
              </div>
            </div>
          </div>
        </div>
        <button
          type="button"
          class="rc-overlay-close"
          aria-label="Close"
          data-autom="overlay-close"
          @click="toggleModal()"
        >
          <span class="rc-overlay-closesvg"
            ><svg
              width="21"
              height="21"
              class="as-svgicon as-svgicon-close as-svgicon-tiny as-svgicon-closetiny"
              role="img"
              aria-hidden="true"
            >
              <path fill="none" d="M0 0h21v21H0z"></path>
              <path
                d="M12.12 10l4.07-4.06a1.5 1.5 0 10-2.11-2.12L10 7.88 5.94 3.81a1.5 1.5 0 10-2.12 2.12L7.88 10l-4.07 4.06a1.5 1.5 0 000 2.12 1.51 1.51 0 002.13 0L10 12.12l4.06 4.07a1.45 1.45 0 001.06.44 1.5 1.5 0 001.06-2.56z"
              ></path></svg
          ></span>
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./DialogModal.ts"></script>
<style scoped src="./DialogModal.css"></style>
