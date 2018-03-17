#运行说明#
```
命令行
先npm i
再npm run dev
等自动弹出网页，完毕。
```
-------------------------------------------------------------------------------
#代码规范说明#
## 主要代码目录

```
- src				前端源代码目录
-- assets			图片资源目录
-- base    		
--- base.css 		全局公用css
--- base.js 		全局公用js
-- components		页面
-- config
--- a-config.js 	后端接口定义
-- widget			组件
-- router			路由文件夹
-- App.vue 			主体vue文件
-- main.js      	入口js文件
```

---------------------------------------------------------------------------------
#组件使用说明#
```
已添加axiso，用于发起请求。
配置文件放在config/http.js（由于是直接从上次项目拿过来用，还没有验证能不能用。）
axios.defaults.baseURL = ''用于设置前面的路径
下面代码对post参数进行stringify
axios.interceptors.request.use((config) => {
  if(config.method  === 'post'){
    config.data = qs.stringify(config.data);
  }
  return config;
},(error) =>{
  console.log("错误的传参");
  return Promise.reject(error);
});
以上可以忽略。

平时用法大概是
this.$http({
	method: 'get',
	url: 'bussiness/getAll',
	params: {
	    "xx": xx
	}        			
}).then((response)=>{
}).catch((err)=>{  
})
或者
this.$http({
	method: 'post',
	url: 'memCardRegister/add',
	data: {"xx":xx}
}).then((response)=>{
}).catch((err)=>{
})  
至于为什么get和post写法不同，不知。
```# globallove_front
