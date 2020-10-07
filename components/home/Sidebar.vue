<template>
  <div
    ref="hamburger-fluid"
    class="hamburger-fluid"
    :class="{ 'hamburger-transparency': !isShowHamburger }"
  >
    <div v-if="isShowHamburger" ref="hamburger" class="hamburger">
      <div class="hamburger__login">
        <div>Login Google</div>
        <div>Login Facebook</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Hamburger',
  data() {
    return {
      isShowHamburger: true,
    }
  },
  mounted() {
    document.addEventListener('click', this.onClickOutside)
  },
  destroyed() {
    document.removeEventListener('click', this.onClickOutside)
  },
  methods: {
    onClickOutside(event) {
      const { hamburger } = this.$refs
      const hamburgerFluid = this.$refs['hamburger-fluid']

      if (
        !hamburger ||
        !hamburgerFluid ||
        hamburger.contains(event.target) ||
        !hamburgerFluid.contains(event.target)
      )
        return
      this.hideNavbar()
    },

    hideNavbar(ctx) {
      this.isShowHamburger = false
      document.removeEventListener('click', this.onClickOutside)
      document.removeEventListener('touchend', this.onClickOutside)
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/style/scss/base/_variables';
@import '@/assets/style/scss/components/_grid';

.hamburger-fluid {
  position: fixed;
  top: 0;
  z-index: $zindex-navbar;
  width: 100%;
  height: 100%;
  right: 0;
  background-color: rgba(31, 34, 39, 0.78);
}

.hamburger-transparency {
  background-color: transparent;
}

.hamburger {
  @include grid-center;

  background-color: white;
  width: 380px;
  height: 100%;
  max-height: 100vh;
  overflow: auto;

  position: relative;
  float: right;
}
</style>
