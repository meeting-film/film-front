import API from '~/server'
export default {
  getUserInfo: (params) => {
    return API.post(process.env.baseUrl + '/meetingfilm/user/getUserInfo', params);
  },
  updateUserInfo: params => {
    return API.post(process.env.baseUrl + '/meetingfilm/user/updateUserInfo', params);
  }
}
