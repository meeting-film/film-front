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
          <div class="validate-info" v-show="showErrorTip">
            <i class="tip-status tip-status--opinfo"></i>
            <span class="txt">{{errorMsg}}</span>
          </div>
          <!--普通方式登录 start-->
          <form ref="form-normal" class="form form-common" @submit.prevent="validateBeforeSubmit">
            <p class="login-type">
              <a class="link" href="javascript:;">普通方式登录<i class="icon icon-user"></i></a>
              <span class="txt">账号登录</span>
            </p>
            <div class="form-field form-field--icon">
              <i class="icon icon-user"></i>
              <input name="username" v-model="form.username" v-validate="'required|username'" :class="{'form-control': true, 'is-danger': errors.has('username') }" type="text" placeholder="用户名">
              <span v-show="errors.has('username')" class="help is-danger">{{ errors.first('username') }}</span>
            </div>
            <div class="form-field form-field--icon">
              <i class="icon icon-password"></i>
              <input class="form-control" name="password" v-model="form.password" v-validate="'required|password'" :class="{'form-control': true, 'is-danger': errors.has('password') }" type="password" placeholder="密码">
              <span v-show="errors.has('password')" class="help is-danger">{{ errors.first('password') }}</span>
            </div>
            <div class="form-field form-check">
              <a href="javascript:;" class="forget-password">忘记密码？</a>
              <input type="checkbox" value="1" name="auto_login" id="autologin" class="form-check ">
              <label class="normal" for="autologin">7天内自动登录</label>
            </div>
            <div class="btn-group">
              <button type="submit" class="btn-login" >登录</button>
            </div>
            <p class="signup-guide">还没有账号？<nuxt-link to="/register" class="link">免费注册</nuxt-link></p>
          </form>

          <!--普通方式登录 end-->
          <!--登录表单 end-->
        </div>
      </div>
    </div>
  </section>
</template>
<script>
  import API from '../server/login/login'

  export default {
    head () {
      return {
        title: '登录',
        meta: [
          { hid: 'login', name: 'login', content: 'login' }
        ]
      }
    },
    data () {
      return {
        showErrorTip: '',
        errorMsg:'',
        form: {
          username: '', //用户名
          password: ''//密码
        }
      }
    },
    methods: {
      validateBeforeSubmit() {
        this.$validator.validateAll().then((result) => {
          if (result) {
            let _this = this;
            let params = {
              username: this.form.username,
              password: this.form.password,
            };
            API.auth(params).then(res => {
              if (res) {
                let _res = res.data;
                if (_res.status == 0) {
                  _this.$router.push({path: '/'});
                  if (_res.token && _res.token != '') {
                    sessionStorage.setItem('token', _res.token);
                  }
                }else{
                  if (_res.msg ){
                    alert(_res.msg)
                  }
                }
              }
            })
          }
        });
      },
    },

  }
</script>
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
        .validate-info {
          margin-bottom: 10px;
          padding: 10px;
          border: 1px solid #f5d8a7;
          border-radius: 2px;
          background: #fff6db;
          font-size: 12px;
          color: #666;
          .tip-status {
            width: 17px;
            height: 17px;
            margin-right: 5px;
            display: inline-block;
            vertical-align: middle;
            &.tip-status--opinfo {
              background: url(//s0.meituan.net/bs/file/?f=fe-sso-fs:build/assets/icons.c1b3784.png) no-repeat;
              background-position: 0 -296px;
            }
          }
        }
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
            border: 1px solid #ccc;
            &.is-danger {
              border-color: #f76120;
            }
          }
          span.is-danger {
            color: #f76120;
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
