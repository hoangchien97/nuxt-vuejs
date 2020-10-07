<template>
  <div>
    <client-only>
      <CoreLayout>
        <Header />
        <div>
          <Nuxt />
        </div>
        <Footer />
      </CoreLayout>
    </client-only>
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
