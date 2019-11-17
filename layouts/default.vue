<template>
  <div>
    <layout-header />
    <nuxt />
    <layout-footer />
  </div>
</template>

<script>
import LayoutHeader from '@/layouts/elements/header'
import LayoutFooter from '@/layouts/elements/footer'

export default {
  name: 'DefaultLayout',
  components: {
    LayoutHeader,
    LayoutFooter
  }
}
</script>
