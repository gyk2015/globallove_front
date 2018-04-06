<template>
	<div class="other">
		<div class="top">
			<div class="top-content">
				<div class="user-left">
					<img src="../../assets/image/person1.jpg" alt="" class="user-img">
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
						<div class="operation" @click="addFollow" v-if="isFriend==false"><i class="el-icon-circle-plus-outline"></i><p>关注</p></div>
						<div class="operation" v-else @click="removeFollow"><i class="el-icon-remove-outline"></i><p>取消关注</p></div>
					</div>
				</div>
			</div>
		</div>
		<div class="main-content">
			<div class="nav-left">
				<el-menu default-active="2">
			      	<el-submenu index="1">
				        <template slot="title">
				          	<span>TA的资料</span>
				        </template>
			        	<el-menu-item-group>
			          		<router-link :to="'/base/other/personalData?id='+this.$route.query.id"><el-menu-item index="1-1">个人资料</el-menu-item></router-link>
			          		<router-link :to="'/base/other/familyInfo?id='+this.$route.query.id"><el-menu-item index="1-2">家庭资料</el-menu-item></router-link>
			          		<router-link :to="'/base/other/lifeHabit?id='+this.$route.query.id"><el-menu-item index="1-3">生活习惯</el-menu-item></router-link>
			          		<router-link :to="'/base/other/emotional?id='+this.$route.query.id"><el-menu-item index="1-4">情感状况</el-menu-item></router-link>
			        	</el-menu-item-group>
			      	</el-submenu>
			      	<router-link :to="'/base/other/photo?id='+this.$route.query.id"><el-menu-item index="2">
			        	<span slot="title">TA的相册</span>
			      	</el-menu-item></router-link>
			      	<router-link :to="'/base/other/activity?id='+this.$route.query.id"><el-menu-item index="4">
			        	<span slot="title">TA的活动</span>
			      	</el-menu-item></router-link>
			      	<router-link :to="'/base/other/mood?id='+this.$route.query.id"><el-menu-item index="6">
			        	<span slot="title">TA的心情</span>
			      	</el-menu-item></router-link>
			   	</el-menu>
			</div>
			<div class="content-right">
				<router-view></router-view>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'Other',
		data() {
			return {
				me: {
	      			imageUrl: '',
	      		},
	      		integral: 0,
	      		isFriend: false,
			}
		},
		mounted: function(){
			this.initMe();
			this.hasFollow();
		},
		methods: {
			initMe() {
				this.$http({
					method: 'get',
					url: 'account/getOtherAccount',
					params: {
						"id": this.$route.query.id
					}         			
				}).then((response)=>{
					if(response && response.data.status == 'SUCCESS') {
						this.me = response.data.object;
					}else {
						this.$message(response.data.message);
					}
				}).catch((err)=>{  
					
				});
				this.$http({
					method: 'get',
					url: 'integral/getOtherIntegral',
					params: {
						"id": this.$route.query.id
					}         			
				}).then((response)=>{
					if(response && response.data.status == 'SUCCESS') {
						this.integral = response.data.object.integral;
					}else {
						this.$message(response.data.message);
					}
				}).catch((err)=>{  
					
				});
			},
			hasFollow() {
				this.$http({
					method: 'get',
					url: 'friend/hasFollow',
					params: {
						"id": this.$route.query.id
					}         			
				}).then((response)=>{
					if(response && response.data.status == 'SUCCESS') {
						if(response.data.object.status == 1) {
							this.isFriend = true;
						}else {
							if(response.data.object.bid.id == this.$route.query.id) {
								this.isFriend = true;
							}else {
								this.isFriend = false;
							}
						}
					}else {
						this.$message(response.data.message);
					}
				}).catch((err)=>{  
					
				});
			},
			addFollow() {
				this.$http({
					method: 'post',
					url: 'friend/addFollow',
					data: {
						"id": this.$route.query.id
					}
				}).then((response)=>{
					if(response && response.data.status == 'SUCCESS') {
						this.$message(response.data.message);
						this.hasFollow();
					}else {
						this.$message(response.data.message);
					}
				}).catch((err)=>{
					// this.$message(response.message);
				})  
			},
			removeFollow() {
				this.$http({
					method: 'post',
					url: 'friend/removeFollow',
					data: {
						"id": this.$route.query.id
					}
				}).then((response)=>{
					if(response && response.data.status == 'SUCCESS') {
						this.$message(response.data.message);
						this.hasFollow();
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
	.user-img {
		width: 100%;
		height: 100%;
	}
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
		justify-content: left; 
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