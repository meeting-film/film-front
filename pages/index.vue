<template>
  <section class="container">
    <div>
      <div class="header-placeholder" style="height: 81px;"></div>
      <Banner></Banner>
      <Container></Container>
    </div>
  </section>
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

<style>
  * {
    font-family: Microsoft YaHei;

  }
  .container {
    background-color: #fff;

  }

  /*.container {*/

  /*min-height: 100vh;*/

  /*display: flex;*/

  /*justify-content: center;*/

  /*align-items: center;*/

  /*text-align: center;*/

  /*}*/

</style>
