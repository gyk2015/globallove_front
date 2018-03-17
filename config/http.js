import axios from 'axios'
import qs from 'qs'

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';

axios.defaults.baseURL = 'http://127.0.0.1:8085/springhibernatespringmvc/'

axios.defaults.withCredentials = true

//POST传参序列化
axios.interceptors.request.use((config) => {
  if(config.method  === 'post'){
    config.data = qs.stringify(config.data);
  }
  return config;
},(error) =>{
  console.log("错误的传参");
  return Promise.reject(error);
});

//只返回数据和状态码
axios.interceptors.response.use(function (response) {
	let result = null;
    if(response && response.status == 200) {
    	result = {
    		data: response.data,
    		status: response.status,
    	}
    }
    return result;
  }, function (error) {
    // Do something with response error
    return Promise.reject(error);
});

export default axios;