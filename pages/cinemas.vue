<template>
  <section class="cinema-div">
    <div class="header-placeholder" style="height: 81px;"></div>
    <div class="cinema-panel">
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
</style>
<script>
import CinemasItems from '~/components/cinemas/CinemasItems.vue'

export default {
  components: {
    CinemasItems
  }
}

</script>
