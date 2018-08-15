import API from '../../plugins/axios'
export default {
  getConditionList: params => {
    return API.get(process.env.baseUrl + '/film/getConditionList', params);
  }
}
