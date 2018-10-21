<template>
    <section class="cinema-div">
        <div class="header-placeholder" style="height: 81px;"></div>
        <div class="register-container">
            <div class="rc-form-wrapper">
                <!--注册表单 start-->
                <form @submit.prevent="registerFormSubmit" autocomplete="off">
                    <div class="form-field form-field--username" data-before="用户名：">
                        <i class="icon icon-user"></i>
                        <input name="username" v-model="form.username" v-validate="'required|username'"
                               :class="{'form-control': true, 'is-danger': errors.has('username') }"
                               @change="checkUsername" type="text" placeholder="用户名">
                        <span v-show="errors.has('username')"
                              class="help is-danger">{{ errors.first('username') }}</span>
                        <span :class="{'form-control__error': errorMsg && errorMsg != '' }">{{errorMsg}}</span>
                    </div>
                    <div class="form-field form-field--pwd" data-before="密码：">
                        <i class="icon icon-password"></i>
                        <input class="form-control" name="password" v-model="form.password"
                               v-validate="'required|password'"
                               :class="{'form-control': true, 'is-danger': errors.has('password') }" type="password"
                               placeholder="密码">
                        <span v-show="errors.has('password')"
                              class="help is-danger">{{ errors.first('password') }}</span>
                    </div>
                    <div class="form-field form-field--mobile" data-before="电话：">
                        <i class="icon icon-password"></i>
                        <input class="form-control" name="mobile" v-model="form.mobile" v-validate="'required|mobile'"
                               :class="{'form-control': true, 'is-danger': errors.has('mobile') }" type="text"
                               placeholder="手机号">
                        <span v-show="errors.has('mobile')" class="help is-danger">{{ errors.first('mobile') }}</span>
                    </div>
                    <div class="form-field form-field--mobile" data-before="邮箱：">
                        <input class="form-control" name="email" v-model="form.email" v-validate="'required|email'"
                               :class="{'form-control': true, 'is-danger': errors.has('email') }" type="text"
                               placeholder="邮箱">
                        <span v-show="errors.has('email')" class="help is-danger">{{ errors.first('email') }}</span>
                    </div>
                    <div class="form-field form-field--mobile" data-before="地址：">
                        <input class="form-control" name="address" v-model="form.address"
                               v-validate="'required|address'"
                               :class="{'form-control': true, 'is-danger': errors.has('address') }" type="text"
                               placeholder="地址">
                        <span v-show="errors.has('address')" class="help is-danger">{{ errors.first('address') }}</span>
                    </div>
                    <div class="form-field">
                        <input type="submit" class="btn-normal btn-save" value="注册">
                        <!--<input type="submit" class="btn-normal btn-save" value="同意以下协议并注册">-->
                    </div>
                </form>
                <!--<div class="link-wrapper">-->
                <!--<a class="a-link" href="http://www.meituan.com/about/terms" target="_blank">《美团网用户协议》</a>-->
                <!--</div>-->
                <!--注册表单 end-->
            </div>
        </div>
    </section>
</template>
<script>
    import {getData} from '../plugins/axios'

    export default {
        head() {
            return {
                title: '注册',
                meta: [
                    {hid: 'register', name: 'register', content: 'register'}
                ]
            }
        },
        data() {
            return {
                showErrorTip: false,
                errorMsg: '',
                form: {
                    username: '',
                    password: '',
                    mobile: '',
                    email: '',
                    address: '',
                }
            }
        },
        methods: {
            //用户名验证
            checkUsername() {
                let _this = this;
                let params = {
                    username: this.form.username
                };
                getData(process.env.baseUrl + '/user/check', 'post', params).then(res => {
                    if (res && res.status == 1) {
                        _this.showErrorTip = true;
                        _this.errorMsg = res.message;
                    } else {
                        _this.showErrorTip = false;
                        _this.errorMsg = '';
                    }
                }, (err) => {
                    console.log(err);
                })
            },
            //注册提交
            registerFormSubmit() {
                this.$validator.validateAll().then((result) => {
                    if (result) {
                        let _this = this;
                        let params = {
                            username: this.form.username,
                            password: this.form.password,
                            mobile: this.form.mobile,
                            email: this.form.email,
                            address: this.form.address,
                        };
                        getData(process.env.baseUrl + '/user/register', 'post', params).then(res => {
                            if (res && res.status == 0) {
                                if (res.msg) {
                                    alert(res.msg);
                                    setTimeout(function () {
                                        _this.$router.push({path: '/login'});
                                    }, 2000);
                                }
                            } else {
                                if (res.msg) {
                                    alert(res.msg);
                                }
                            }
                        }, (err) => {
                            console.log(err);
                        })
                    }
                });
            },
        }
    }
</script>
<style lang="scss" scoped>
    .register-container {
        width: 1200px;
        margin: 0 auto;
        background-color: #fff;
        .rc-form-wrapper {
            width: 600px;
            margin: 0 auto;
            padding: 100px 0;
            .form-field {
                position: relative;
                padding-left: 100px;
                margin-bottom: 15px;
                overflow: hidden;
                zoom: 1;
                &:before {
                    content: attr(data-before);
                    position: absolute;
                    left: 0;
                    width: 100px;
                    line-height: 36px;
                    font-size: 14px;
                    text-align: right;
                    color: #333;
                }
                .errorTip {
                    display: block;
                    color: #ff6637;
                }
                .normal-tip {
                    line-height: 30px;
                    font-size: 14px;
                    color: #333;
                    padding: 0 10px;
                }
                .pw-strength {
                    width: 249px;
                    margin-top: 10px;
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
                        top: 0;
                        left: 0;
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
                    &.is-danger {
                        border-color: #f76120;
                    }
                }
                span {
                    &.is-danger,
                    &.form-control__error {
                        display: block;
                        color: #f76120;
                    }
                }
                .btn-lg {
                    color: #333;
                    padding: 2px 10px;
                    border: 1px solid #e3e3e3;
                    border-bottom: 1px solid #aaa;
                    cursor: pointer;
                    filter: progid:DXImageTransform.Microsoft.gradient(gradientType=0, startColorstr='#FFF7F7F7', endColorstr='#FFDEDEDE');
                    background: -webkit-linear-gradient(top, #f7f7f7, #dedede);
                    background: linear-gradient(to bottom, #f7f7f7, #dedede);
                    &:hover {
                        border-bottom: 1px solid #e3e3e3;
                        filter: progid:DXImageTransform.Microsoft.gradient(gradientType=0, startColorstr='#FFF7F7F7', endColorstr='#FFDEDEDE');
                        background: -webkit-linear-gradient(top, #f7f7f7, #f7f7f7);
                        background: linear-gradient(to bottom, #f7f7f7, #f7f7f7);
                    }
                }
                .btn-save {
                    border: none;
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
                    background: -webkit-gradient(linear, left top, left bottom, color-stop(0, #ff6637), color-stop(100%, #ff6637));
                    background: -webkit-linear-gradient(top, #ec454a 0, #ff6637 100%);
                    background: linear-gradient(to bottom, #ec454a 0, #ff6637 100%);
                    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ec454a', endColorstr='#ff6637', GradientType=0);
                }
            }
            .link-wrapper {
                padding: 0 100px;
                .a-link {
                    color: #ec454a;
                }
            }
        }
    }
</style>
