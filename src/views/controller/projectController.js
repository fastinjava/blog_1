import http from '../../base/httpUtil'
const qs = require('qs');


export const listProjects = ( reload) => {
  return http.requestPost(`/api/fastdevelop_biz_web/project/listProjects`,reload)
}


export const detailProject = ( id ) => {
  return http.requestQuickGet(`/api/fastdevelop_biz_web/project/detail?id=${id}`)
}

export const blogContentGet = (projectId,projectType) => {
  return http.requestQuickGet(`/api/fastdevelop_biz_web/project/blogContentGet?projectId=${projectId}&projectType=${projectType}`)
}

