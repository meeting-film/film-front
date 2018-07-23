import API from '~/server'
export default {
  auth: params => {
    return API.post(process.env.baseUrl + '/auth', params);
  },
  logout: params => {
    return API.post(process.env.baseUrl + '/meetingfilm/user/logout', params);
  }
}
