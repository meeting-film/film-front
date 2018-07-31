<template>
  <section class="container">
    <div class="filmItem-container">
      <Banner :filmItem="filmItem"></Banner>
      <div class="main-content-container clearfix">
        <FilmDetail :filmItem="filmItem"></FilmDetail>
        <div class="related">
          <News :filmItem="filmItem"></News>
        </div>
      </div>
      <script id="comment-form-container" type="text/template">
      <form id="comment-form" data-val="{movieid:65665}">
        <div class="score-msg-container ">
            <div class="score"><span class="num"></span>分</div>
            <div class="score-message"></div>
            <div class="no-score">
              请点击星星评分
            </div>
        </div>
        <div class="score-star-contaienr">
          <ul class="score-star clearfix" data-score="">
            <li>
              <i class="half-star left "></i><i class="half-star right "></i>    </li>
            <li>
              <i class="half-star left "></i><i class="half-star right "></i>    </li>
            <li>
              <i class="half-star left "></i><i class="half-star right "></i>    </li>
            <li>
              <i class="half-star left "></i><i class="half-star right "></i>    </li>
            <li>
              <i class="half-star left "></i><i class="half-star right "></i>    </li>
          </ul>
        </div>
        <div class="content-container">
          <textarea placeholder="快来说说你的看法吧" name="content" id="" cols="30" rows="10"></textarea>
          <span class="word-count-info"></span>
        </div>
        <input type="hidden" name="score" />
        <input class="btn" type="submit" value="提交" data-act="comment-submit-click" />
      </form>
      <div class="close">×</div>
    </script>
    </div>
  </section>
</template>
<script>
  import Banner from '~/components/filmItem/Banner'
  import FilmDetail from '~/components/filmItem/FilmDetail'
  import News from '~/components/filmItem/News'
  import API from '../api/filmItem/filmItdm'
  export default {
    head () {
      return {
        title: '详情',
        meta: [
          { hid: '详情', name: '详情', content: '详情' }
        ]
      }
    },
    data () {
      return {
        filmItem: {}
      }
    },
    components: {
      Banner,
      FilmDetail,
      News
    },
    asyncData (context) {
      let searchType,params;
      if (context.route.params.id) {
        searchType = 0;
      } else {
        searchType = 1;
      }
      params = {
        id: context.route.params.id,
        searchType: searchType
      }
      return API.films(params).then((res) => {
        if (res) {
          if (res.status == 0) {
            if (res.data) {
              return { filmItem: res.data }
            }
          } else {
            if (res.msg) {
              alert(res.msg)
            }
          }
        }
      })
        .catch((e) => {
          // error({ statusCode: 404, message: 'Post not found' })
        })
    },
  }
</script>
<style lang="scss" scoped>
  .container {
    padding-top: 81px;
    background-color: #fff;
    .main-content-container {
      margin: 80px auto;
      width: 1200px;
      &:after {
        content: '';
        display: table;
        clear: both;
      }
      .related {
        margin-left: 840px;
        width: 360px;
      }
    }
  }
</style>
