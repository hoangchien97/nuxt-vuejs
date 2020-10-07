<template>
  <div>
    <CoreLayout>
      <Header />
      <!-- <h1>Layouts</h1> -->
      <div>
        <Nuxt />
      </div>
      <Footer />
    </CoreLayout>
  </div>
</template>

<script>
import CoreLayout from '@/layouts/core'
import Header from '@/components/layouts/Header'
import Footer from '@/components/layouts/Footer'
export default {
  name: 'Layout',

  components: {
    CoreLayout,
    Header,
    Footer,
  },
}
</script>
