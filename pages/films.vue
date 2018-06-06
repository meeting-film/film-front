<template>
  <section class="container">
    <div>
      <div class="header-placeholder" style="height: 81px;"></div>
      <quick-search />
    </div>
  </section>
</template>

<script>
  import QuickSearch from '~/components/films/QuickSearch.vue'

  export default {
    components: {
      QuickSearch
    }
  }
</script>

<style>
  /*.container {*/
  /*min-height: 100vh;*/
  /*display: flex;*/
  /*justify-content: center;*/
  /*align-items: center;*/
  /*text-align: center;*/
  /*}*/


</style>
