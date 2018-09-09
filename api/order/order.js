import API from '../../plugins/axios'
export default {
    order: params => {
        return API.post(process.env.baseUrl + '/meetingfilm/order/confirm', params);
    }
}
