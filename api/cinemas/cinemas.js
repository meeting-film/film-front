import API from '../../plugins/axios'
export default {
  //影院列表
  cinemas: params => {
    return API.get(process.env.baseUrl + '/meetingfilm/cinemas', params);
  },
  //影院标签列表
  cinemaTags: params => {
    return API.get(process.env.baseUrl + '/meetingfilm/cinemas', params);
  },
  //在线选座
  cinema: params => {
    return API.get(process.env.baseUrl + '/meetingfilm/cinema', params);
  }
}
