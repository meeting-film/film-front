<template>
    <section class="cinema-div">
        <div class="header-placeholder" style="height: 81px;" data-v-36ae7e9a=""></div>
        <div class="profile-container">
            <!-- 个人中心 start -->
            <div class="pc-left__aside" data-before="个人中心">
                <ul>
                    <li>
                        <a href="javascript:;" class="orders txt ">我的订单</a>
                    </li>
                    <li>
                        <a href="javascript:;" class="txt profile active">基本信息</a>
                    </li>
                </ul>
            </div>
            <!-- 个人中心 end -->
            <!-- 基本信息 start -->
            <div class="pc-left__main" data-before="基本信息">
                <!-- 更换头像 start -->
                <div class="pc-left__main_avatar">
                    <div class="avatar-group">
                        <img class="img-avatar" src="http://p0.meituan.net/mmc/f5523879ec43bdcbda484c5f0e7cf3262776.png">
                        <div class="btn-group">
                            <input type="button" class="btn-update" value="更换头像">
                            <input type="file" id="fileUpload" name="file" class="btn-file">
                        </div>
                        <div class="tips">支持JPG,JPEG,PNG格式,且文件需小于1M</div>
                    </div>
                </div>
                <!-- 更换头像 end -->
                <!-- 表单信息 start -->
                <form id="form-profile" ref="form-profile" class="form-profile" @submit.prevent="updateUserInfo">
                    <div class="form-group" data-before="昵称：">
                        <input type="text" name="nickName" class="form-control" v-model="form.nickname" placeholder="2-15个字，支持中英文、数字">
                    </div>
                    <div class="form-group" data-before="性别：">
                        <div class="radio-group">
                            <div class="custom-radio">
                                <input type="radio" name="sex" id="sex-male" value="0" v-model="form.sex" class="ui-radio radio-first">
                                <label for="sex-male">男</label>
                            </div>
                            <div class="custom-radio">
                                <input type="radio" name="sex" id="sex-famale"  value="1" v-model="form.sex" checked="" class="ui-radio">
                                <label for="sex-famale">女</label>
                            </div>
                        </div>
                    </div>
                    <div class="form-group date-picker" data-before="生日：">
                        <div class="select-group">
                          <span>{{form.birthday}}</span>
                            <!--<select name="year" class="form-control">-->
                                <!--<option>&#45;&#45;</option>-->
                                <!--<option value="2018">2018</option>-->
                            <!--</select>-->
                            <!--<span class="txt">年</span>-->
                            <!--<select name="month" class="form-control">-->
                                <!--<option>&#45;&#45;</option>-->
                                <!--<option value="1">1</option>-->
                            <!--</select>-->
                            <!--<span class="txt">月</span>-->
                            <!--<select name="day" class="form-control">-->
                                <!--<option>&#45;&#45;</option>-->
                                <!--<option value="1">1</option>-->
                            <!--</select>-->
                            <!--<span class="txt">日</span>-->
                        </div>
                    </div>

                    <div class="form-group" data-before="生活状态：">
                        <div class="radio-group">
                            <div class="custom-radio">
                                <input type="radio" name="marriage" id="lifeState-0" value="0" v-model="form.lifeState" class="ui-radio radio-first">
                                <label for="lifeState-0">单身</label>
                            </div>
                            <div class="custom-radio">
                                <input type="radio" name="marriage" id="lifeState-1" value="1" v-model="form.lifeState" class="ui-radio">
                                <label for="lifeState-1">热恋中</label>
                            </div>
                            <div class="custom-radio">
                                <input type="radio" name="marriage" id="lifeState-2" value="2" v-model="form.lifeState" class="ui-radio">
                                <label for="lifeState-2">已婚</label>
                            </div>
                            <div class="custom-radio">
                                <input type="radio" name="marriage" id="lifeState-3" value="3" v-model="form.lifeState" class="ui-radio">
                                <label for="lifeState-3">为人父母</label>
                            </div>
                        </div>
                    </div>
                    <div class="form-group" data-before="个性签名：">
                        <input type="text" name="signature" class="form-control" placeholder="20个字以内"  v-model="form.biography">
                    </div>
                    <div class="btn-group">
                        <input type="submit" class="btn-save" value="保存">
                    </div>
                </form>
                <!-- 表单信息 end -->
            </div>
            <!-- 基本信息 end -->
        </div>
    </section>
</template>

<script>
  import API from '../api/profile/profile'
  export default {
    head () {
      return {
        title: '个人信息',
        meta: [
          { hid: 'profile', name: 'profile', content: 'profile' }
        ]
      }
    },
    data () {
      return {
        years: [],
        months: [],
        days: [],
        form: {
          uuid:'',
          username: '',//用户名称
          nickname:'',//昵称
          email: "aaa@163.com",//邮箱
          phone: '',
          sex: 0,//性别--[0-男，1-女]
          birthday: '',//生日
          lifeState: 0,//生活状态--[0-单身，1-热恋中，2-已婚，3-为人父母]
          biography:'',//从事行业
          address:'',//地址
          headAddress:'',
          createTime:'',//创建时间
          updateTime:''//更新时间
        }
      }
    },
    created () {

    },
    mounted () {
      //初始化个人信息
      this.getUserInfo();
    },
    methods: {
      getUserInfo () {
        let _this = this;
        API.getUserInfo().then(res => {
          if (res) {
            if (res.status == 0) {
              if (res.data) {
                _this.form.uuid = res.data.uuid;
                _this.form.username = res.data.username;
                _this.form.nickname = res.data.nickname;
                _this.form.email = res.data.email;
                _this.form.phone = res.data.phone;
                _this.form.sex = res.data.sex;
                _this.form.birthday = res.data.birthday;
                _this.form.lifeState = res.data.lifeState;
                _this.form.biography = res.data.biography;
                _this.form.address = res.data.address;
                _this.form.headAddress = res.data.headAddress;
                _this.form.createTime = res.data.createTime;
                _this.form.updateTime = res.data.updateTime;
              }
            }else {
              if (res.msg) {
                alert(res.msg)
              }
            }
          }
        })
      },
      updateUserInfo () {
        let params = this.form, _this = this;
        API.updateUserInfo(params).then(res => {
          if (res) {
            console.log(res)
            if (res.msg) {
              alert(res.msg);
              _this.$router.push('/');
            }
          }
        })
      }
    }
  }
</script>
<style lang="scss" scoped>
    .profile-container {
        width: 1200px;
        margin: 0 auto;
        position: relative;
        background-color: #fff;
        &:after {
            content: '';
            display: table;
            clear: both;
        }
        .pc-left__aside {
            float: left;
            width: 200px;
            min-height: 800px;
            background-color: #f4f3f4;
            text-align: center;
            border-right: 1px solid #e1e1e1;
            &:before {
                content: attr(data-before);
                display: block;
                margin:30px 0;
                font-size: 22px;
                color: #222;
                font-weight: 400;
            }
            ul {
                margin:0;
                padding:0;
                li {
                    list-style: none;
                    .txt {
                        display: block;
                        font-weight: 400;
                        color: #333;
                        height: 40px;
                        line-height: 40px;
                        font-size: 18px;
                        text-decoration: none;
                        &.active {
                             color: #fff;
                             background-color: #ed3931;
                         }
                    }
                }
            }
        }
    .pc-left__main {
        float: right;
        padding: 15px 20px;
        width:1000px;
        min-height: 600px;
        &:before {
             content: attr(data-before);
             display: block;
             padding: 20px 0;
             color: #ec443f;
             font-size: 18px;
             border-bottom: 1px solid #e1e1e1;
             margin-bottom: 30px;
         }
        &:after {
            content: '';
            display: table;
            clear: both;
        }
        .pc-left__main_avatar {
            float: left;
            width: 270px;
            .avatar-group {
                float: left;
                width: 270px;
                .img-avatar {
                    width: 258px;
                    height: 258px;
                }
                .btn-group {
                    position: relative;
                    margin: 20px 0;
                    .btn-update {
                        display: block;
                        width: 182px;
                        height: 56px;
                        line-height: 56px;
                        margin: 0 auto;
                        color: #5b5b5b;
                        background-color: #e6e6e6;
                        border-radius: 6px;
                        font-size: 18px;
                        padding: 0;
                        border: none;
                    }
                    .btn-file {
                        position: absolute;
                        width: 182px;
                        top: 0;
                        left:50%;
                        margin-left:-91px;
                        bottom: 0;
                        opacity: 0;
                        cursor: pointer;
                    }
                }
                .tips {
                    margin-top: 10px;
                    color: #999;
                    font-size: 16px;
                    line-height: 30px;
                    text-align: center;
                }
            }
        }
        .form-profile {
            float: right;
            width:690px;
            padding:0 50px;
            margin-top: 10px;
            color: #999;
            font-size: 16px;
            line-height: 30px;
            .form-group {
                margin-bottom:15px;
                &:before {
                     content: attr(data-before);
                     display: inline-block;
                     vertical-align: top;
                     width: 100px;
                     text-align: right;
                     line-height:30px;
                     color: #333;
                 }
                .radio-group,
                .radio-group .custom-radio,
                .select-group,
                .checkbox-group,
                .checkbox-group .custom-checkbox {
                    display: inline-block;
                    vertical-align: top;
                }
                .radio-group .custom-radio,
                .select-group .form-control,
                .select-group .txt,
                .checkbox-group .custom-checkbox {
                    margin-right:10px;
                }
                .radio-group .custom-radio input,
                .custom-checkbox input {
                    margin-right:5px;
                }
                .form-tips {
                    margin: 0 100px;
                    .form-tips {
                        .txt {
                            color: #ccc;
                        }
                    }
                }
                .form-control {
                  width: 300px;
                  height: 30px;
                  line-height: 30px;
                  padding:0 5px;
                }
            }
        }
        .btn-group {
            .btn-save {
                border-radius: 5px;
                width: 100px;
                height: 40px;
                color: #fff;
                font-size: 18px;
                line-height: 40px;
                border: none;
                margin:0 100px;
                background-color: #ed3931;
                padding: 0;
            }
        }
    }
}


</style>
