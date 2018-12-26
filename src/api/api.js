import {
  wxRequest
} from '@/utils/wxRequest';
import _ from '@/utils/lodash';

let env = "-test" //-dev 或者 -test
// const apiMall = 'https://sujiefs.com/'
const baseUrl = 'https://www.jycais.cn'
// http://jvs.juvending.cn/api/sys/Get_VersionList?ver=0.00&token=00001iloveyouruo
/**
 * 获取发现好商品接口
 * @param  {[type]} params [description]
 * @return {[type]}        [description]
 */


const get = (url, params) => {
  return wxRequest(baseUrl + url, 'GET', params);
}

const post = (url, params) => {
  return wxRequest(baseUrl + url, 'POST', params);
}
const getTopEQM = async (params) => {
  let res = await wxRequest(baseUrl + '/EQM/GetTopEQM', 'GET', params)

  let arr = _.get(res.data, 'entity.data');
  if (arr && arr.length) {
    arr.forEach(element => {
      element._distance = (element.Distance / 1000).toFixed(2)
    });
  }

  return res.data.entity;
}

export default {
  get,
  post,
  getTopEQM
}
