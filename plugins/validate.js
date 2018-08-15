import Vue from 'vue'
import VeeValidate, {Validator} from 'vee-validate'
import zh from 'vee-validate/dist/locale/zh_CN';//引入中文文件

// 配置中文
Validator.localize(zh);
const config = {
  locale: 'zh_CN'
};
Vue.use(VeeValidate,config);

// 自定义validate
const dictionary = {
  zh_CN: {
    messages: {
      password: () => '请输入6-16位数字、字母登录密码',
      email: () => '请输入正确的邮箱格式',
      mobile: () => '请输入11位正确的手机号',
      required: (field)=> "请输入" + field
    },
    attributes:{
      username: '用户名',
      password: '密码',
      mobile: '手机号',
      email: '邮箱',
      address: '地址',
    }
  }
};

Validator.localize(dictionary);

Validator.extend('username', {
  validate: value => {
    return value != ''
  }
});

Validator.extend('password', {
  validate: value => {
    return /^[0-9A-Za-z]{6,20}$/.test(value)
  }
});

Validator.extend('mobile', {
  validate: value => {
    return value.length == 11 && (/^((13|14|15|17|18)[0-9]{1}\d{8})$/.test(value))
  }
});

Validator.extend('email', {
  validate: value => {
    return /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(value)
  }
});

Validator.extend('address', {
  validate: value => {
    return value != ''
  }
});
