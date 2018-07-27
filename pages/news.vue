<template>
  <div class="container">
    <div>
      <Container/>
    </div>
  </div>
</template>
<script>
  import Container from '~/components/index/Container.vue'
  import Banner from '~/components/index/Banner.vue'


  export default {
    components: {
      Banner,
      Container,
    }
  }

</script>

<style lang="scss" scoped>
</style>
