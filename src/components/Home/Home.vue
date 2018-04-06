<template>
	<div class="home">
		<div class="top">
			<div class="top-content">
				<div class="user-left">
					<!-- <img src="../../assets/image/person1.jpg" alt="" class="user-img"> -->
					<el-upload
						class="avatar-uploader"
						action="http://127.0.0.1:8085/springhibernatespringmvc/account/setHeadImg"
						:show-file-list="false"
						:with-credentials="true"
						:on-success="handleAvatarSuccess"
						:before-upload="beforeAvatarUpload">
						<img v-if="me.imageUrl" :src="me.imageUrl" class="avatar">
						<i v-else class="el-icon-plus avatar-uploader-icon"></i>
					</el-upload>
				</div>
				<div class="user-right">
					<div class="user-info">
						<span class="user-name">{{me.username}}</span>
						<i class="icon icon-man"></i>
						<i class="icon icon-phone"></i>
						<i class="icon icon-email"></i>
						<i class="icon icon-realname"></i>
						<span>ID:{{me.id}}</span>
						<span v-if="me.userlevel==0" class="user-level">非认证用户</span>
						<span v-if="me.userlevel==1" class="user-level">普通会员</span>
						<span v-if="me.userlevel==2" class="user-level">VIP</span>
					</div>
					<div class="user-detail">
						<span>积分：</span><span>{{ this.integral }}</span>
					</div>
					<div class="quick-operation">
						<div class="operation"><i class="el-icon-edit"></i><p>发布心情</p></div>
						<div class="operation" @click="sign()"><i class="el-icon-check"></i><p>签到</p></div>
						<div class="operation"><i class="el-icon-message"></i><p>我的邮箱</p></div>
					</div>
				</div>
			</div>
		</div>
		<div class="main-content">
			<div class="nav-left">
				<el-menu default-active="2">
			      	<el-submenu index="1">
				        <template slot="title">
				          	<span>我的资料</span>
				        </template>
			        	<el-menu-item-group>
			          		<router-link to="/base/home/personalData"><el-menu-item index="1-1">个人资料</el-menu-item></router-link>
			          		<router-link to="/base/home/familyInfo"><el-menu-item index="1-2">家庭资料</el-menu-item></router-link>
			          		<router-link to="/base/home/lifeHabit"><el-menu-item index="1-3">生活习惯</el-menu-item></router-link>
			          		<router-link to="/base/home/emotional"><el-menu-item index="1-4">情感状况</el-menu-item></router-link>
			        	</el-menu-item-group>
			      	</el-submenu>
			      	<router-link to="/base/home/photo"><el-menu-item index="2">
			        	<span slot="title">我的相册</span>
			      	</el-menu-item></router-link>
			      	<router-link to="/base/home/email"><el-menu-item index="3">
			        	<span slot="title">我的邮件</span>
			      	</el-menu-item></router-link>
			      	<router-link to="/base/home/activity"><el-menu-item index="4">
			        	<span slot="title">我的活动</span>
			      	</el-menu-item></router-link>
			      	<router-link to="/base/home/myfriend"><el-menu-item index="5">
			        	<span slot="title">我的好友</span>
			      	</el-menu-item></router-link>
			      	<router-link to="/base/home/mood"><el-menu-item index="6">
			        	<span slot="title">我的心情</span>
			      	</el-menu-item></router-link>
			      	<router-link to="/base/home/authentication"><el-menu-item index="7">
			        	<span slot="title">账号认证</span>
			      	</el-menu-item></router-link>
			      	<el-menu-item index="8">
			        	<span slot="title">积分兑换</span>
			      	</el-menu-item>
			      	<router-link to="/base/home/mate"><el-menu-item index="9">
			        	<span slot="title">择偶意向</span>
			      	</el-menu-item></router-link>
			   	</el-menu>
			</div>
			<div class="content-right">
				<router-view></router-view>
			</div>
		</div>
		<el-dialog
		  	title="实名认证"
		  	:visible.sync="dialogVisible"
		  	width="30%">
		  	<span>您还未进行实名认证，为了有更好的交友体验，请立即完成实名认证</span>
		  	<span slot="footer" class="dialog-footer">
		    	<router-link to="/base/home/authentication">
		    		<el-button type="primary" @click="dialogVisible=false">
		    			开始认证
		    		</el-button>
		    	</router-link>
		  	</span>
		</el-dialog>
	</div>
</template>

<script>
	export default {
	  	name: 'Home',
	  	data() {
	      	return {
	      		me: {
	      			imageUrl: '',
	      		},
	      		dialogVisible: false,
	      		integral: 0,
	      		lastSign: ''
	      	}
	    },
	    mounted: function(){
	    	this.initMe();
	    	this.initSign();
		},
	    methods: {
	    	initMe() {
				this.$http({
					method: 'get',
					url: 'account/getAccount',   			
				}).then((response)=>{
					if(response && response.data.status == 'SUCCESS') {
						this.me = response.data.object;
						if(this.me.userlevel == 0) {
							this.dialogVisible = true;
						}
					}else {
						this.$message(response.data.message);
					}
				}).catch((err)=>{  
					
				});
				// this.$http({
				// 	method: 'get',
				// 	url: 'baseInfo/getHeadImg',   			
				// }).then((response)=>{
				// 	if(response && response.data.status == 'SUCCESS') {
				// 		this.imageUrl = response.data.object;
				// 	}else {
				// 		this.$message(response.data.message);
				// 	}
				// }).catch((err)=>{  
					
				// });
				this.$http({
					method: 'get',
					url: 'integral/getIntegral',   			
				}).then((response)=>{
					if(response && response.data.status == 'SUCCESS') {
						this.integral = response.data.object.integral;
					}else {
						this.$message(response.data.message);
					}
				}).catch((err)=>{  
					
				});

			},
			initSign() {
				this.$http({
					method: 'get',
					url: 'sign/getSign',   			
				}).then((response)=>{
					if(response && response.data.status == 'SUCCESS') {
						this.lastSign = response.data.object.objects[0].time;
						console.log(this.lastSign);
						var myDate = new Date();
						console.log(myDate.toLocaleString());
					}else {
						this.$message(response.data.message);
					}
				}).catch((err)=>{  
					
				});
			},
			handleAvatarSuccess(res, file) {
				this.imageUrl = URL.createObjectURL(file.raw);
			},
			beforeAvatarUpload(file) {
		        // const isJPG = file.type === 'image/jpeg';
		        const isLt2M = file.size / 1024 / 1024 < 2;

		        // if (!isJPG) {
		        //   this.$message.error('上传头像图片只能是 JPG 格式!');
		        // }
		        if (!isLt2M) {
		          this.$message.error('上传头像图片大小不能超过 2MB!');
		        }
		        // return isJPG && isLt2M;
		        return isLt2M;
		    },
		    sign() {
		    	this.$http({
					method: 'post',
					url: 'sign/addSign',
				}).then((response)=>{
					if(response && response.data.status == 'SUCCESS') {
						this.$message(response.data.message);
					}else {
						this.$message(response.data.message);
					}
				}).catch((err)=>{
					// this.$message(response.message);
				})  
		    }
	    }
	}
</script>

<style scoped>
	.top {
		background: #0190aa;
		padding: 50px 0;
	}
	.top-content {
		width: 1098px;
		margin: 0 auto;
		overflow: hidden;
		position: relative;
	}
	.user-left {
		float: left;
		border: 10px solid #fff;
		width: 238px;
		height: 268px;
	}
/*	.user-img {
		width: 100%;
		height: 100%;
	}*/
	.avatar-uploader-icon {
	    font-size: 28px;
	    color: #FFF;
	    width: 178px;
	    height: 178px;
	    line-height: 238px;
	    text-align: center;
	}
	.avatar {
	    width: 100%;
	    height: 100%;
	    display: block;
	}
	.user-right {
		position: absolute;
		bottom: 0;
		left: 288px;
	}
	.user-info {
		color: #fff;
		text-align: left;
		padding: 10px 20px;
	}
	.user-name {
		font-size: 30px;
		margin-right: 20px;
	}
	.user-level {
		margin-left: 5px;
		color: #e9a9ad;
	}
	.user-detail {
		color: #fff;
		text-align: left;
		padding: 10px 20px;
	}
	.user-detail span {
		margin-right: 20px;
	}
	.quick-operation {
		display: flex;
		justify-content: center; 
	}
	.operation {
		padding: 20px 25px 0 25px;
		cursor: pointer;
		color: #fff;
	}
	.operation:hover {
		color: red;
	}
	.operation i {
		font-size: 25px;
	}
	.operation p {
		font-size: 15px;
	}
	.main-content {
		width: 1098px;
		margin: 20px auto;
		overflow: hidden;
	}
	.nav-left {
		width: 250px;
		float: left;
	}
	.content-right {
		float: left;
		width: 800px;
	}
</style>