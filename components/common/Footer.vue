<template>
    <div class="footer">
        <p class="friendly-links">
            违法和不良信息举报电话: 4006018900
        </p>
        <p class="friendly-links">
            友情链接 :
            <nuxt-link active-class="is-active" to="//www.imooc.com/" target="_blank" class="link nav-item is-tab"
                       exact>慕课网
            </nuxt-link>
            <!--<span style="margin:  0 10px;">|</span>-->
            <!--<nuxt-link active-class="is-active" to="/" target="_blank" class="link nav-item is-tab" exact>美团下载</nuxt-link>-->
        </p>
        <p>
            ©2018 meetingshop.cn
            <nuxt-link active-class="is-active" to="/" target="_blank" class="link nav-item is-tab" exact>京ICP证160733号
            </nuxt-link>
            <nuxt-link active-class="is-active" to="/" target="_blank" class="link nav-item is-tab" exact>
                京ICP备16022489号-1
            </nuxt-link>
            京公网安备 11010502030881号
            <nuxt-link active-class="is-active" to="/" target="_blank" class="link nav-item is-tab" exact>网络文化经营许可证
            </nuxt-link>
            <nuxt-link active-class="is-active" to="/" target="_blank" class="link nav-item is-tab" exact>电子公告服务规则
            </nuxt-link>
        </p>
    </div>
</template>
<script>


</script>
<style lang="scss" scoped>
    .footer {
        background-color: #262426;
        padding: 56px 0;
        margin: 0 auto;
        min-width: 1200px;
        margin-top: 5px;
        p {
            margin: 0;
            padding: 0;
            text-align: center;
            font-size: 14px;
            line-height: 20px;
            color: #666;
            a {
                color: #666;
                &.meituan {
                    color: #ef4238;
                }
            }
        }
    }

</style>
