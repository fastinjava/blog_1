import http from '../../base/httpUtil'
const qs = require('qs');


export const userLogin = (reload) => {
  return http.requestQuickGet(`/api/fastdevelop/user/userlogin?`+qs.stringify(reload))
}
