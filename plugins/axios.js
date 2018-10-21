import axios from 'axios'
import Cookies from 'js-cookie'
import qs from 'qs'

export function fetch(config) {
    //返回promise对象
    return new Promise((resolve, reject) => {
        // debugger
        //创建axios实例，把基本的配置放进去
        const instance = axios.create();
        // POST 传参序列化
        instance.interceptors.request.use(
            config => {
                let token = Cookies.get('token');
                if (token) {
                  config.headers.Authorization = 'Bearer ' + token
                }
                if (config.method === 'post') {
                    config.data = qs.stringify(config.data);
                }
                return config
            },
            error => {
                return Promise.reject(error)
            }
        );
        // 返回状态判断
        instance.interceptors.response.use(
            res => {
                return res.data
            },
            error => {
                return Promise.reject(error)
            }
        );
        //请求成功后执行的函数
        instance(config).then(res => {
            resolve(res);
        })
        //失败后执行的函数
        .catch(err => {
            reject(err);
        })
    });
}

// 封装调用的接口 getData
export function getData(url, type, data) {
    //如果type为空，默认为get方法，也可以自己改成post
    if (type === '') type = 'get';
    return fetch({
        url: url,
        method: type,
        data: data,
    })
}