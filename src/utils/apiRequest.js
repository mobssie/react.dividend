import axios from 'axios'


const defaultApiRequestOption = {
  method: 'get',
  url: '',
  useToken: true,
  credentials: false,
  responseType: 'json',
  params: {...params, ...options},
  paramsSerializer : function(paramObj) {
      const params = new URLSearchParams()
      for (const key in paramObj) {
          params.append(key, paramObj[key])
      }
      return params.toString()
  }
};
const apiRequest = axios.create({
  //baseURL: `http://localhost:3000/`,
  timeout: 30000,
  headers: {
    'Content-Type' : `application/json;charset=UTF-8`,
    'Access-Control-Allow-Origin' : '*',
    'Accept' : 'application/json'
  }
})
export default apiRequest;