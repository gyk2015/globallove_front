<template>
	<div class="login">
		<div class="login-join">
			<div class="login-join-form">
				<img src="../../assets/image/logo.jpg" alt="">
				<el-tabs v-model="activeName" tab-position="right">
				    <el-tab-pane label="登录" name="login">
				    	<el-form ref="loginInfo" :model="loginInfo" label-width="80px">
						  	<el-form-item label="用户名">
						    	<el-input v-model="loginInfo.username"></el-input>
						  	</el-form-item>
						  	<el-form-item label="密码" prop="password">
							    <el-input type="password" v-model="loginInfo.password" auto-complete="off"></el-input>
							</el-form-item>
							<el-form-item>
							    <el-button type="primary" @click="goLogin" size="medium">登录</el-button>
							</el-form-item>
						</el-form>
				    </el-tab-pane>
				    <el-tab-pane label="注册" name="join">
				    	<el-form ref="joinInfo" :model="joinInfo" label-width="80px" status-icon :rules="rules">
				    		<el-form-item label="用户名" prop="username">
						    	<el-input v-model="joinInfo.username"></el-input>
						  	</el-form-item>
<!-- 						  	<el-form-item label="手机号" prop="userphone">
						    	<el-input v-model="joinInfo.userphone"></el-input>
						  	</el-form-item>
						  	<el-form-item label="验证码" prop="code">
						    	<el-input v-model="joinInfo.code"></el-input>
						  	</el-form-item> -->
						  	<el-form-item label="邮箱" prop="useremail">
						    	<el-input v-model="joinInfo.useremail"></el-input>
						  	</el-form-item>
						  	<el-form-item label="密码" prop="password">
							    <el-input type="password" v-model="joinInfo.password" auto-complete="off"></el-input>
							</el-form-item>
							<el-form-item label="确认密码" prop="checkPass">
							    <el-input type="password" v-model="joinInfo.checkPass" auto-complete="off"></el-input>
							</el-form-item>
							<el-form-item>
							    <el-button type="danger" @click="goJoin" size="medium">马上注册</el-button>
							</el-form-item>
						</el-form>
				    </el-tab-pane>
				</el-tabs>
			</div>
		</div>
		<div class="show-section-intro">
			<h1>全国恋爱交友社区</h1>
			<h3>目前已有200000名注册会员</h3>
			<img src="../../assets/image/bg_3.jpg" alt="">
		</div>
		<div class="show-section-recommend">
			<h1>不用寻找，推荐你的有缘人</h1>
			<div class="recommend-list">
				<ul v-for="item in recommendList">
					<li>
						<a href=""></a>
						<img :src="item.img" alt="">
					</li>
				</ul>	
			</div>		
		</div>
		<footer class="show-section-footer">
			<div class="footer-login">
				<h2>轻松交友，就在GlobalLove</h2>
				<el-button type="primary" @click="backTop">登录</el-button>
    			<el-button @click="backTop">注册</el-button>
			</div>
		</footer>
	</div>
</template>

<script>
	import person1 from '../../assets/image/person1.jpg'
	export default {
	  	name: 'Login',
	  	data () {
	  		var checkName = (rule, value, callback) => {
		        if (!value) {
		          	return callback(new Error('请填入用户名'));
		        } else {
		        	callback();
		        }
		    };
	  		// var checkPhone = (rule, value, callback) => {
		   //      if (!value) {
		   //        	return callback(new Error('请填入手机号'));
		   //      } else {
		   //      	callback();
		   //      }
		   //  };
	  		// var checkCode = (rule, value, callback) => {
		   //      if (!value) {
		   //        	return callback(new Error('请填入验证码'));
		   //      } else {
		   //      	callback();
		   //      }
		   //  };
		    var checkEmail = (rule, value, callback) => {
		        if (!value) {
		          	return callback(new Error('请填入邮箱'));
		        } else {
		        	callback();
		        }
		    };
	  		var validatePass = (rule, value, callback) => {
		        if (value === '') {
		          	callback(new Error('请输入密码'));
		        } else {
		          	if (this.joinInfo.checkPass !== '') {
		            	this.$refs.joinInfo.validateField('checkPass');
		          	}
		          	callback();
		        }
		    };
		    var validatePass2 = (rule, value, callback) => {
		        if (value === '') {
		          	callback(new Error('请再次输入密码'));
		        } else if (value !== this.joinInfo.password) {
		          	callback(new Error('两次输入密码不一致!'));
		        } else {
		          	callback();
		        }
		    };
	    	return {
	    		activeName: 'login',
	    		loginInfo: {
	    			username: '',
	    			password: ''
	    		},
	    		joinInfo: {
	    			username: '',
	    			// userphone: '',
	    			// code: '',
	    			useremail: '',
	    			password: '',
	    			checkPass: ''
	    		},
	    		rules: {
	    			username: [
	    				{ validator: checkName, trigger: 'blur' }
	    			],
	    			// userphone: [
	    			// 	{ validator: checkPhone, trigger: 'blur' }
	    			// ],
	    			// code: [
		      //       	{ validator: checkCode, trigger: 'blur' }
		      //     	],
		          	useremail: [
		            	{ validator: checkEmail, trigger: 'blur' }
		          	],
		          	password: [
		            	{ validator: validatePass, trigger: 'blur' }
		          	],
		          	checkPass: [
		            	{ validator: validatePass2, trigger: 'blur' }
		          	],
		        },
	    		recommendList: [
	    			{
	    				img: person1
	    			},
	    			{
	    				img: person1
	    			},
	    			{
	    				img: person1
	    			},
	    			{
	    				img: person1
	    			},
	    			{
	    				img: person1
	    			},
	    			{
	    				img: person1
	    			},
	    			{
	    				img: person1
	    			},
	    			{
	    				img: person1
	    			},
	    			{
	    				img: person1
	    			},
	    			{
	    				img: person1
	    			},
	    			{
	    				img: person1
	    			},
	    			{
	    				img: person1
	    			},
	    		] 
	    	}
	  	},
	  	methods: {
		    goLogin() {
		        this.$http({
					method: 'post',
					url: 'login/log',
					data: {
						"username":this.loginInfo.username,
						"password":this.loginInfo.password,
					}
				}).then((response)=>{
					if(response && response.data.status == 'SUCCESS') {
						window.sessionStorage.setItem('user',JSON.stringify(response.data.object));
						this.$router.push({ path: '/base/home/personalData'})
					}else {
						this.$message(response.data.message);
					}
				}).catch((err)=>{
					// this.$message(response.message);
				})  
		    },
		    goJoin() {
		    	this.$http({
					method: 'post',
					url: 'login/register',
					data: {
						"username":this.joinInfo.username,
						"password":this.joinInfo.password,
						// "userphone":this.joinInfo.userphone,
						"useremail":this.joinInfo.useremail,
						"usertype":0,
					}
				}).then((response)=>{
					if(response && response.data.status == 'SUCCESS') {
						this.$message('注册成功，请前往邮箱激活');
						setTimeout(() => {
							// this.$router.push({ path: ''})
							location.reload();
						},3000);;		
					}else {
						this.$message(response.message);
					}
				}).catch((err)=>{
				})  
		    },
		    backTop() {
		    	document.body.scrollTop = 0
				document.documentElement.scrollTop = 0
		    }
		}
	}
</script>

<style scoped>
	.login {
		height: 100%;
	}
	.login-join {
		height: 100%;
		background: url('../../assets/image/bg_1.jpg') no-repeat;
		background-size: 100%;
		display: flex;
		display: -webkit-flex; /* Safari */
		justify-content: center;
		align-items: center;
	}
	.login-join-form {
		width: 50%;
		background-color: #fff;
		padding: 10px;
	}
	.show-section-intro {
		padding: 80px;
	}
	.show-section-recommend {
		padding-top: 80px;
		padding-bottom: 80px;
	}
	.recommend-list {
		display: flex;
		display: -webkit-flex;
		flex-wrap: wrap;
	}
	.recommend-list ul {
		list-style:none;
	}
	.show-section-footer {
		padding: 80px 0;
		background: #f5f6f6;
	}
</style>
