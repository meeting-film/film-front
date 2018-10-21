<template>
  <section class="container">
    <Banner :homeBanner="homeData.data"></Banner>
    <Container :homeData="homeData"></Container>
  </section>
</template>
<script>
    import Container from '~/components/index/Container.vue'
    import Banner from '~/components/index/Banner.vue'
    import {getData} from '../plugins/axios'

    export default {
        head() {
            return {
                title: '首页',
                meta: [
                    {hid: '首页', name: '首页', content: '首页'}
                ]
            }
        },
        components: {
            Banner,
            Container,
        },
        middleware: "auth",
        data() {
            return {
                homeData: {
                    banners: [],
                    boxRanking: [],
                    expectRanking: {},
                    top100: {},
                    hotFilms: {},
                    soonFilms: {}
                }
            }
        },
        created() {
            this.getIndex();
        },
        methods: {
            getIndex() {
                getData(process.env.baseUrl + '/film/getIndex', 'get').then((res) => {
                    if (res && res.status == 0) {
                        this.homeData = res;
                    } else {
                        if (res.msg) {
                            alert(res.msg)
                        }
                    }
                }, (err) => {
                    console.log(err);
                })
            }
        }
    }
</script>

<style lang="scss" scoped>
  .container {
    padding-top: 61px;
  }
</style>
