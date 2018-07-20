<template>
    <section class="cinema-div">
        <div class="header-placeholder" style="height: 81px;"></div>
        <div class="register-container">
            <div class="rc-form-wrapper">
                <!--注册表单 start-->
                <form action="" method="POST">
                    <div class="form-field form-field--mobile" data-before="手机号：">
                        <input type="text" name="mobile" class="form-control">
                        <span class="normal-tip">注册成功后，全美团通用</span>
                    </div>
                    <div class="form-field" style="display:none">
                        <div class="J-captcha captcha-wrapper" data-before="图片验证码" hidden="true">
                            <input type="text" id="captcha-mobile" class="f-text J-captcha" name="captcha-mobile"
                                   autocomplete="off">
                            <img id="signup-captcha-mobile-img" height="34px" width="60px"
                                 class="signup-captcha-img J-captcha-refresh"
                                 src="https://passport.meituan.com/account/captcha">
                            <a tabindex="-1" class="J-captcha-refresh captcha-refresh inline-link"
                               href="javascript:void(0)">看不清楚？换一张</a>
                            <span class="J-captcha-tip inline-tip"></span>
                        </div>
                    </div>
                    <div class="form-field form-field--vbtn">
                        <div class="verify-wrapper">
                            <input type="button" class="btn-normal btn-lg" value="免费获取短信动态码">
                            <span class="f1 verify-tip" id="J-verify-tip"></span>
                        </div>
                    </div>
                    <div class="form-field form-field--sms" data-before="短信动态码：">
                        <input type="text" name="verifycode" class="form-control">
                    </div>
                    <div class="form-field form-field--pwd" data-before="创建密码：">
                        <input type="password" name="password" class="form-control">
                        <div class="pw-strength">
                            <div class="pw-strength__bar"></div>
                            <div class="pw-strength__letter">
                                <span class="pw-strength__label">弱</span>
                                <span class="pw-strength__label">中</span>
                                <span class="pw-strength__label">强</span>
                            </div>
                        </div>
                    </div>
                    <div class="form-field form-field--pwd2" data-before="确认密码：">
                        <input type="password" name="password2" class="form-control">
                    </div>
                    <div class="form-field">
                        <input type="submit" name="commit" class="btn-normal btn-save" value="同意以下协议并注册">
                    </div>
                </form>
                <div class="link-wrapper">
                    <a class="a-link" href="http://www.meituan.com/about/terms" target="_blank">《美团网用户协议》</a>
                </div>
                <!--注册表单 end-->
            </div>
        </div>
    </section>
</template>
<style lang="scss" scoped>
    .register-container {
        width: 1200px;
        margin: 0 auto;
        background-color: #fff;
        .rc-form-wrapper {
            width: 600px;
            margin:0 auto;
            padding:100px 0;
            .form-field {
                position: relative;
                padding-left:100px;
                margin-bottom:15px;
                overflow: hidden;
                zoom: 1;
                &:before {
                     content: attr(data-before);
                     position: absolute;
                     left: 0;
                     width: 100px;
                     line-height:30px;
                     font-size: 14px;
                     text-align: right;
                     color: #333;
                 }
                .normal-tip {
                    line-height:30px;
                    font-size: 14px;
                    color: #333;
                    padding:0 10px;
                }
                .pw-strength {
                    width: 249px;
                    margin-top:10px;
                    background-color: #eee;
                    position: relative;
                }
                .pw-strength {
                    .pw-strength__bar {
                        height: 20px;
                        width: 0;
                        overflow: hidden;
                        transition: all .4s linear;
                        -webkit-transition: all .4s linear;
                        -moz-transition: all .4s linear;
                        -o-transition: all .4s linear;
                        &.pw-strength__bar_weak {
                             width: 83px;
                             background-color: #f76120;
                         }
                         &.pw-strength__bar_normal {
                              width: 164px;
                              background-color: #ff8900;
                          }
                          &.pw-strength__bar_strong {
                               width: 248px;
                               background-color: #5bab3c;
                           }
                    }
                    .pw-strength__letter {
                        overflow: hidden;
                        position: absolute;
                        top:0;
                        left:0;
                        .pw-strength__label {
                            float: left;
                            text-align: center;
                            font-size: 12px;
                            height: 20px;
                            line-height: 20px;
                            width: 83px;
                            border-right: 2px solid #fff;
                            color: #fff;
                        }
                    }
                }
                .form-control {
                    width: 248px;
                    height: 36px;
                    padding: 5px;
                    border: 1px solid #aaa;
                    line-height: 36px;
                    vertical-align: top;
                }
                .btn-lg {
                    color: #333;
                    padding:2px 10px;
                    border: 1px solid #e3e3e3;
                    border-bottom: 1px solid #aaa;
                    cursor: pointer;
                    filter: progid:DXImageTransform.Microsoft.gradient(gradientType=0, startColorstr='#FFF7F7F7', endColorstr='#FFDEDEDE');
                    background: -webkit-linear-gradient(top,#f7f7f7,#dedede);
                    background: linear-gradient(to bottom,#f7f7f7,#dedede);
                    &:hover {
                         border-bottom: 1px solid #e3e3e3;
                         filter: progid:DXImageTransform.Microsoft.gradient(gradientType=0, startColorstr='#FFF7F7F7', endColorstr='#FFDEDEDE');
                         background: -webkit-linear-gradient(top,#f7f7f7,#f7f7f7);
                         background: linear-gradient(to bottom,#f7f7f7,#f7f7f7);
                     }
                }
                .btn-save {
                    border:none;
                    display: inline-block;
                    vertical-align: middle;
                    padding: 7px 20px 6px;
                    font-size: 14px;
                    font-weight: 700;
                    line-height: 1.5;
                    letter-spacing: .1em;
                    text-align: center;
                    text-decoration: none;
                    border-radius: 2px;
                    color: #FFF;
                    cursor: pointer;
                    background: #ec454a;
                    background: -webkit-gradient(linear,left top,left bottom,color-stop(0,#ec454a),color-stop(100%,#e02025));
                    background: -webkit-linear-gradient(top,#ec454a 0,#e02025 100%);
                    background: linear-gradient(to bottom,#ec454a 0,#e02025 100%);
                    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ec454a', endColorstr='#e02025', GradientType=0 );
                }
            }
            .link-wrapper {
                padding:0 100px;
                .a-link{
                    color: #ec454a;
                }
            }
        }
    }
</style>
