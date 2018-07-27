import API from '../../plugins/axios'
export default {
  getFilms: params => {
    return API.get(process.env.baseUrl + '/meetingfilm/film/getFilms', params);
  }
}
