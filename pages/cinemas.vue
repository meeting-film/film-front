<template>
  <section class="cinema-div">
    <div class="header-placeholder" style="height: 81px;"></div>
    <div class="cinema-panel">
      <QuickSearch />
      <CinemasItems />
    </div>
  </section>
</template>
<style>
  .cinema-div{
    background-color: #fff;
  }
  .cinema-panel{
    margin: 0 auto;
    width: 1200px;
  }
  .cinema-list{
    margin: 50px 0;
  }
</style>
<script>
import CinemasItems from '~/components/cinemas/CinemasItems.vue'
import QuickSearch from '~/components/cinemas/QuickSearch.vue'

export default {
  head () {
    return {
      title: '影院',
      meta: [
        { hid: '影院', name: '影院', content: '影院' }
      ]
    }
  },
  components: {
    CinemasItems,
    QuickSearch
  }
}

</script>
