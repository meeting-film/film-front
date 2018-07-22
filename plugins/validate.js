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
      // required: ( field )=> "请输入" + field
    },
    attributes:{
      username: 'username',
      password: 'password',
      mobile: 'mobile',
      email: 'email',
      address: 'address',
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
  validate: (value, ref) => {
    return value != '' && value >= 6
  }
});
Validator.extend('mobile', {
  validate: value => {
    return value.length == 11 && (/^((13|14|15|17|18)[0-9]{1}\d{8})$/.test(value))
  }
});

Validator.extend('email', {
  validate: (value, ref) => {
    return value != '' && (/^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/.test(value))
  }
});

Validator.extend('address', {
  validate: (value, ref) => {
    return value != ''
  }
});
