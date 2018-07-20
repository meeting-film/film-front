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
                <form id="J-userexinfo-form" class="form-profile">
                    <div class="form-group" data-before="昵称：">
                        <input type="text" name="nickName" class="form-control" placeholder="2-15个字，支持中英文、数字" value="xhdong">
                    </div>
                    <div class="form-group" data-before="性别：">
                        <div class="radio-group">
                            <div class="custom-radio">
                                <input type="radio" name="gender" id="userexinfo-form-gender-1" value="1" class="ui-radio radio-first">
                                <label for="userexinfo-form-gender-1">男</label>
                            </div>
                            <div class="custom-radio">
                                <input type="radio" name="gender" id="userexinfo-form-gender-2" value="2" checked="" class="ui-radio">
                                <label for="userexinfo-form-gender-2">女</label>
                            </div>
                        </div>
                    </div>
                    <div class="form-group date-picker" data-before="生日：">
                        <div class="select-group">
                            <select name="year" class="form-control">
                                <option>--</option>
                                <option value="2018">2018</option>
                            </select>
                            <span class="txt">年</span>
                            <select name="month" class="form-control">
                                <option>--</option>
                                <option value="1">1</option>
                            </select>
                            <span class="txt">月</span>
                            <select name="day" class="form-control">
                                <option>--</option>
                                <option value="1">1</option>
                            </select>
                            <span class="txt">日</span>
                        </div>
                    </div>

                    <div class="form-group" data-before="生活状态：">
                        <div class="radio-group">
                            <div class="custom-radio">
                                <input type="radio" name="marriage" id="userexinfo-form-merriage-1" value="单身" class="ui-radio radio-first">
                                <label for="userexinfo-form-merriage-1">单身</label>
                            </div>
                            <div class="custom-radio">
                                <input type="radio" name="marriage" id="userexinfo-form-merriage-2" value="热恋中" class="ui-radio">
                                <label for="userexinfo-form-merriage-2">热恋中</label>
                            </div>
                            <div class="custom-radio">
                                <input type="radio" name="marriage" id="userexinfo-form-merriage-3" value="已婚" class="ui-radio">
                                <label for="userexinfo-form-merriage-3">已婚</label>
                            </div>
                            <div class="custom-radio">
                                <input type="radio" name="marriage" id="userexinfo-form-merriage-4" value="为人父母" class="ui-radio">
                                <label for="userexinfo-form-merriage-4">为人父母</label>
                            </div>
                        </div>
                    </div>
                    <div class="form-group" data-before="从事行业：">
                        <div class="select-group">
                            <select id="job" name="job" class="form-control">
                                <option value="信息技术">信息技术</option>
                            </select>
                            <select id="subjob" name="occupation" class="form-control"><option value="其他">其他</option></select>
                        </div>
                    </div>
                    <div class="form-group" data-before="兴趣：">
                        <div class="checkbox-group">
                            <div class="custom-checkbox">
                                <input type="checkbox" name="interest[]" id="userexinfo-form-interest-1" value="美食" class="ui-checkbox">
                                <label for="userexinfo-form-interest-1">美食</label>
                            </div>
                            <div class="custom-checkbox">
                                <input type="checkbox" name="interest[]" id="userexinfo-form-interest-2" value="动漫" class="ui-checkbox">
                                <label for="userexinfo-form-interest-2">动漫</label>
                            </div>
                        </div>
                        <div class="form-tips">
                            <p class="txt">选择你的兴趣使你获得个性化的电影推荐哦</p>
                        </div>
                    </div>
                    <div class="form-group" data-before="个性签名：">
                        <input type="text" name="signature" class="form-control" placeholder="20个字以内" value="">
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
