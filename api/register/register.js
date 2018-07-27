import API from '../../plugins/axios'
export default {
  register: params => {
    return API.post(process.env.baseUrl + '/meetingfilm/user/register', params);
  },
  check: params => {
    return API.post(process.env.baseUrl + '/meetingfilm/user/check', params);
  }
}
