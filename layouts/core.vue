<template>
  <div>
    <SvgSprite />
    Core Layouts
    <SvgIcon icon="checkmark" />
  </div>
</template>

<script>
import SvgSprite from '@/components/common/SvgSprite'
export default {
  name: 'CoreLayout',
  components: {
    SvgSprite,
  },
  head() {
    return {
      bodyAttrs: {
        class: 'body-scrollbar',
      },
      meta: [
        {
          hid: 'viewport-other',
          name: 'viewport',
          content:
            'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0',
        },
      ],
    }
  },
}
</script>

<style></style>
