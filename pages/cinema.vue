<template>
    <section class="container">
        <div class="cinema-container">
            <Banner :cinemaBanner="cinemasData"></Banner>
            <div class="main-content-container clearfix">
                <CinemaItem :cinemasItem="cinemasData"></CinemaItem>
            </div>
        </div>
    </section>
</template>
<script>
    import Banner from '~/components/cinema/Banner'
    import CinemaItem from '~/components/cinema/cinemaList'
    import {getData} from '../plugins/axios'

    export default {
        head() {
            return {
                title: '详情',
                meta: [
                    {hid: '详情', name: '详情', content: '详情'}
                ]
            }
        },
        data() {
            return {
                cinemasData: {
                    cinemaBanner: {},
                    cinemasItem: {}
                }
            }
        },
        components: {
            Banner,
            CinemaItem
        },
        created() {
            this.getCinema();
        },
        methods: {
            getCinema() {
                let params = {
                    "cinemaId": this.$router.history.current.query.cinemaId
                };
                getData(process.env.baseUrl + '/cinema/getFields', 'get', params).then((res) => {
                    if (res && res.status == 0) {
                        this.cinemasData = res;
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
