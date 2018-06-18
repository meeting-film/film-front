<template>
  <section class="container">
    <div>
      <div class="header-placeholder" style="height: 81px;"></div>
      <quick-search />
      <FilmItems />
    </div>
  </section>
</template>

<script>
  import QuickSearch from '~/components/films/QuickSearch.vue'
  import FilmItems from '~/components/films/FilmItems.vue'

  export default {
    components: {
      QuickSearch,
      FilmItems
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
