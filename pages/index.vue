<template>
  <div class="container">
    <div class="homepage">
      <p class="homepage__heading">Index</p>
    </div>
    <SvgIcon icon="checkmark" />

    <button @click="handleNoti">Click Notification</button>
    <button @click="openHamburger">Click Hambuger</button>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  layout: 'layout',
  name: 'Index',

  data() {
    return {
      title: this.$t(`HomePage`),
      categories: [],
      languages: [],
      countries: [],
    }
  },
  computed: {
    ...mapState({
      openHamburger: (state) => state.openHamburger,
    }),
  },
  async created() {
    await Promise.all([
      this.fetchLanguages(),
      this.fetchCountries(),
      this.fetchContentCategories(),
    ])
  },
  methods: {
    ...mapActions({
      handleOpenHamburger: 'openHamburger',
    }),
    async fetchLanguages() {
      this.languages = await this.$masterService.fetchLanguages()
    },
    async fetchCountries() {
      this.countries = await this.$masterService.fetchCountries()
    },
    async fetchContentCategories() {
      this.categories = await this.$masterService.fetchContentCategories()
    },

    handleNoti() {
      this.notifyError('Error')
      this.notifySuccess('Success')
      this.infoMsg('infoMsg')
    },
    openHamburger() {
      this.handleOpenHamburger(true)
    },
  },
  head() {
    return {
      title: this.title,
    }
  },
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>

<style lang="scss" scoped>
@import '@/assets/style/scss/base/_variables.scss';

.homepage {
  &__heading {
    color: $color-primary;
  }
}
</style>
