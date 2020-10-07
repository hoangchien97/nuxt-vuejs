<template>
  <div class="container">
    <div class="homepage">
      <p class="homepage__heading">Index</p>
    </div>
    <SvgIcon icon="checkmark" />
  </div>
</template>

<script>
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
  async created() {
    await Promise.all([
      this.fetchLanguages(),
      this.fetchCountries(),
      this.fetchContentCategories(),
    ])
  },
  methods: {
    async fetchLanguages() {
      this.languages = await this.$masterService.fetchLanguages()
    },
    async fetchCountries() {
      this.countries = await this.$masterService.fetchCountries()
    },
    async fetchContentCategories() {
      this.categories = await this.$masterService.fetchContentCategories()
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
