import wepy from 'wepy';
import tip from './tip'


const wxRequest = async (url, method, params = {}, ) => {
    let data = params || {};
    let res = await wepy.request({
        url: url,
        method: method || 'GET',
        data: data,
        header: { 'Content-Type': 'application/json' },
    });
    return res;
};
module.exports = {
    wxRequest
}
