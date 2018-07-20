<template>
    <section class="cinema-div">
        <div class="header-placeholder" style="height: 81px;"></div>
        <div class="login-container">
            <div class="lc-form-wrapper">
                <!--广告图 start-->
                <div class="lc-form-wrapper__left">
                    <img src="//s0.meituan.net/bs/file/?f=fe-sso-fs:build/page/static/banner/maoyan.png" alt="">
                </div>
                <!--广告图 end-->
                <div class="lc-form-wrapper__right">
                    <!--登录表单 start-->
                    <!--普通方式登录 start-->
                    <form id="J-normal-form" class="form form-common">
                        <p class="login-type">
                            <a id="J-mobile-link" class="link" href="javascript:;">普通方式登录<i class="icon icon-user"></i></a>
                            <span class="txt">账号登录</span>
                        </p>

                        <div class="form-field form-field--icon">
                            <i class="icon icon-user"></i>
                            <input type="text" id="login-email" class="form-control" name="email" placeholder="手机号/用户名/邮箱" value="">
                        </div>
                        <div class="form-field form-field--icon">
                            <i class="icon icon-password"></i>
                            <input type="password" id="login-password" class="form-control" name="password" placeholder="密码">
                        </div>
                        <div class="form-field form-check">
                            <a href="javascript:;" class="forget-password">忘记密码？</a>
                            <input type="checkbox" value="1" name="auto_login" id="autologin" class="form-check ">
                            <label class="normal" for="autologin">7天内自动登录</label>
                        </div>
                        <div class="btn-group">
                            <button type="submit" class="btn-login" >登录</button>
                        </div>
                        <p class="signup-guide">还没有账号？<a href="javascript:;" class="link">免费注册</a></p>
                    </form>
                    <!--普通方式登录 end-->

                    <!--手机动态码登录 end-->
                    <form id="J-mobile-form" class="form form-common" style="display: none;">
                        <p class="login-type login-type--normal" data-mtevent="login.normal.switch">
                            <a id="J-mobile-link" class="link" href="javascript:;">手机动态码登录<i class="icon icon-mobile"></i></a>
                            <span class="txt">账号登录</span>
                        </p>

                        <div class="form-field form-field--icon">
                            <i class="icon icon-phone"></i>
                            <input type="text" id="login-mobile" class="form-control" name="mobile" value="" placeholder="手机号">
                        </div>
                        <div class="form-field form-field--icon">
                            <i class="icon icon-password"></i>
                            <input type="text" name="code" id="login-verify-code" class="form-control" autocomplete="off" value="" placeholder="动态码">
                            <input type="button" class="btn-normal btn-mini" id="J-verify-btn" value="获取手机动态码">
                        </div>

                        <div class="form-field form-field--auto-login cf">
                            <a href="javascript:;" class="forget-password">忘记密码？</a>
                            <input type="checkbox" value="1" name="auto_login" id="mobile-autologin" class="form-check ">
                            <label class="normal" for="mobile-autologin">7天内自动登录</label>
                        </div>
                        <div class="btn-group">
                            <button type="submit" class="btn-login">登录</button>
                        </div>
                    </form>
                    <!--手机动态码登录 end-->
                    <!--登录表单 end-->
                </div>
            </div>
        </div>
    </section>
</template>
<style lang="scss" scoped>
    .login-container {
        width: 1200px;
        background-color: #fff;
        margin:0 auto;
        .lc-form-wrapper {
            padding:100px 0;
            &:after {
                 content: '';
                 display: table;
                 clear: both;
             }
            .lc-form-wrapper__left {
                float: left;
                margin:0 100px;
                width: 480px;
                height: 370px;
                overflow: hidden;
                img {
                    max-width: 100%;
                }
            }
            .lc-form-wrapper__right {
                float: right;
                width: 270px;
                margin: 40px 100px;
                .login-type {
                    color: #666;
                    padding-bottom:10px;
                    overflow: hidden;
                    .link {
                        float: right;
                    }
                    .txt {
                        float: left;
                    }
                    .icon {
                        height: 13px;
                        display: inline-block;
                        vertical-align: middle;
                        margin-left: 5px;
                    }
                    .icon-mobile {
                        width: 10px;
                        background-position: -1268px -509px;
                        background-image: url(//s0.meituan.net/bs/file/?f=fe-sso-fs:build/assets/sp-normal.2ee5c09.png);
                    }
                    .icon-user {
                        width: 13px;
                        background-position: -933px -677px;
                        background-image: url(//s0.meituan.net/bs/file/?f=fe-sso-fs:build/assets/sp-normal.2ee5c09.png);
                    }
                }
                .form-field {
                    margin-bottom:15px;
                    position: relative;
                    overflow: hidden;
                    .form-control {
                        width: 270px;
                        height: 36px;
                        line-height:36px;
                        padding:5px 32px;
                    }
                    .btn-mini {
                        position: absolute;
                        background-color: transparent;
                        border: none;
                        right:5px;
                        top:6px;
                        color: #666;
                        cursor: pointer;
                    }
                    .forget-password {
                        float: right;
                        color: #ec454a;
                        text-decoration: none;
                    }
                    .icon {
                        position: absolute;
                        width: 18px;
                        height: 18px;
                        line-height: 18px;
                        left: 9px;
                    }
                    .icon-user {
                        top: 8px;
                        background-position: -1250px -617px;
                        background-image: url(//s0.meituan.net/bs/file/?f=fe-sso-fs:build/assets/sp-normal.2ee5c09.png);
                    }
                    .icon-password {
                        top: 9px;
                        background-position: -1250px -527px;
                        background-image: url(//s0.meituan.net/bs/file/?f=fe-sso-fs:build/assets/sp-normal.2ee5c09.png);
                    }
                    .icon-phone {
                        top: 8px;
                        background-position: -1250px -581px;
                        background-image: url(//s0.meituan.net/bs/file/?f=fe-sso-fs:build/assets/sp-normal.2ee5c09.png);
                    }
                }
                .btn-group {
                    .btn-login {
                        width:100%;
                        height:34px;
                        line-height:34px;
                        cursor: pointer;
                        border: #e02025;
                        color: #FFF;
                        background: #ec454a;
                        background: -webkit-gradient(linear,left top,left bottom,color-stop(0,#ec454a),color-stop(100%,#e02025));
                        background: -webkit-linear-gradient(top,#ec454a 0,#e02025 100%);
                        background: linear-gradient(to bottom,#ec454a 0,#e02025 100%);
                        filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ec454a', endColorstr='#e02025', GradientType=0 );
                    }
                }
                .signup-guide {
                    padding:5px 0;
                    color: #666;
                    .link {
                        color: #ec454a;
                    }
                }
            }
        }
    }
</style>
