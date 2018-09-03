import API from '../../plugins/axios'
export default {
  films: params => {
    return API.get(process.env.baseUrl + '/meetingfilm/film/films', params);
  }
}
