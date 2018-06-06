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
