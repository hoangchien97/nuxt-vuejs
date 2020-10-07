<template>
  <div class="container">
    <div>Index</div>
    <SvgIcon icon="checkmark" />
  </div>
</template>

<script>
export default {
  layout: 'layout',
  name: 'Index',

  data() {
    return {
      title: 'Home Page',
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

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
