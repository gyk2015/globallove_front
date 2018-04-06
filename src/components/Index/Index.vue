<template>
	<div class="index">
		<div class="top">
			<div class="user-info">
				<div class="welcome">
					<span class="user-loginout">退出</span>
				</div>
				<div class="user-pic">
					<img src="../../assets/image/person1.jpg" alt="">
				</div>
				<div class="user-name">{{ me.username }}</div>
				<div class="user-icon">
					<i class="icon icon-man"></i>
					<i class="icon icon-phone"></i>
					<i class="icon icon-email"></i>
					<i class="icon icon-realname"></i>
				</div>
				<div>
					<el-button type="primary" size="medium">进入个人中心</el-button>
				</div>
			</div>
			<div class="carousel">
				<el-carousel height="430px">
			      	<el-carousel-item v-for="item in carouselImg" :key="item.img">
			        	<img :src="item.img" alt="">
			      	</el-carousel-item>
			    </el-carousel>
			</div>
		</div>
		<div class="content">
			<div class="main">
				<div class="main__title">
					<p>我的推荐</p>
				</div>
				<el-row :gutter="30" v-for="item in mateList">
				  	<el-col :span="12">
				  		<div class="grid-content">
					  		<div class="person-img">
					  			<img src="../../assets/image/person1.jpg" alt="">
					  		</div>
					  		<div class="person-info">
					  			<p class="person-info__name">{{item[0].accountid.username}}</p>
								<span class="person-info__detail">{{item[0].age}}</span>
								<span> | </span>
								<span class="person-info__detail">{{item[0].workplace}}</span>
								<span> | </span>
								<span class="person-info__detail">{{item[0].education}}</span>
								<span> | </span>
								<span class="person-info__detail">{{item[0].salary}}元</span>
								<p class="person-info__detail">哎哎哎哎哎哎我哎哎哎啊 </p>
								<router-link :to="'/base/other/personalData?id='+item[0].accountid.id" class="person-info__godetail">查看详情</router-link>
					  		</div>	
				  		</div>
				  	</el-col>
				</el-row>
				<el-pagination
				    layout="prev, pager, next"
				    :total="1000">
	 			</el-pagination>
			</div>
			<div class="main-right">
				<div class="quick-operation">
					<div class="operation"><i class="el-icon-edit"></i><p>发布心情</p></div>
					<div class="operation"><i class="el-icon-check"></i><p>签到</p></div>
					<div class="operation"><i class="el-icon-message"></i><p>我的邮箱</p></div>
				</div>
				<div class="news">
					<h4>龙爱私房菜</h4>
					<ul>
						<li v-for="item in popList" class="news-list">
							<i class="el-icon-arrow-right"></i>
							<router-link :to="'/base/newsDetail?id='+item.id">
								{{ item.title }}
							</router-link>
						</li>
					</ul>
				</div>
			</div>
			<div class="footer"></div>
		</div>
<!-- 		<el-dialog
		  	title="实名认证"
		  	:visible.sync="dialogVisible"
		  	width="30%">
		  	<span>您还未进行实名认证，为了有更好的交友体验，请立即完成实名认证</span>
		  	<span slot="footer" class="dialog-footer">
		    	<el-button type="primary">
		    		<router-link to="/base/home/authentication">开始认证</router-link>
		    	</el-button>
		  	</span>
		</el-dialog> -->
	</div>
</template>

<script>
	import bg1 from '../../assets/image/bg_1.jpg'
	import bg2 from '../../assets/image/bg_4.jpg'
	import bg from '../../assets/image/bg_.jpg'
	export default {
	  	name: 'Index',
	  	data () {
	  		return {
	  			me: {},
	  			// dialogVisible: false,
	  			carouselImg: [
	  				{
	  					img: bg1
	  				},
	  				{
	  					img: bg2
	  				},
	  				{
	  					img: bg
	  				}
	  			],
	  			popList: [],
	  			mateList: []
	  		}
	  	},
	  	mounted: function(){
		 	this.initMe();
		 	this.initPop();
		 	this.initMate();
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
			},
			initPop() {
				this.$http({
					method: 'get',
					url: 'article/getPopList',
					params: {
						"page": 1,
						"pageSize": 6
					}        	   			
				}).then((response)=>{
					if(response && response.data.status == 'SUCCESS') {
						this.popList = response.data.object.objects;
					}else {
						this.$message(response.data.message);
					}
				}).catch((err)=>{  
					
				});
			},
			initMate() {
				this.$http({
					method: 'get',
					url: 'mate/getMatePerson',
					params: {
						"page": 1,
						"pageSize": 6
					}        	   			
				}).then((response)=>{
					if(response && response.data.status == 'SUCCESS') {
						this.mateList = response.data.object.objects;
					}else {
						this.$message(response.data.message);
					}
				}).catch((err)=>{  
					
				});
			}
		}
	}
</script>

<style scoped>
	.index {
		
	}
	.top {
		width: 100%;
		overflow: hidden;
		margin-bottom: 20px;
		position: relative;
	}
	.user-info {
		width: 280px;
		height: 420px;
		padding-top: 10px;
		background: #fff;
		position: absolute;
		z-index: 999;
		right: 80px;
	}	
	.welcome {
		width: 200px;
		margin: 0 auto;
		overflow: hidden;
	}
	.user-loginout {
		float: right;
		color: #9a979e;
		font-size: 15px;
	}
	.user-pic {
		margin: 10px auto;
		width: 100px;
		height: 100px;
	}
	.user-pic img {
		width: 100%;
		border-radius: 50%;
	}
	.user-name {
		padding: 10px 0;
		font-size: 20px;
	}
	.user-icon {
		margin-top: 10px;
		margin-bottom: 20px;
	}
	.carousel {
		width: 100%;
	}
	.el-carousel__item img {
		height: 100%;
		width: 100%;
	 }
	 .content {
	 	width: 1098px;
	 	margin: 0 auto;
	 }
	.main {
		width: 750px;
		float: left;
		overflow: hidden;
	}
	.main__title {
		border-bottom: 1px solid #e0dedb;
		text-align: left;
		margin-bottom: 10px;
	}
	.el-row {
	    margin-bottom: 20px;
	    &:last-child {
	      margin-bottom: 0;
	    }
	}
	.el-col {
	    border-radius: 4px;
	}
	.grid-content {
	    border-radius: 4px;
	    min-height: 36px;
	    overflow: hidden;
	    /*background: #f5f6f6;*/
	}
	.person-img {
		display: inline-block;
		float: left;
		overflow: hidden;
		width: 40%;
	}
	.person-img img {
		width: 100%;
	}
	.person-info {
		display: inline-block;
		width: 56%;
		text-align: left;
		padding: 0 2%;
	}
	.person-info__name {

	}
	.person-info__detail {
		color: #9a979e;
		font-size: 14px;
	}
	.person-info__godetail {
		color: #409EFF;
		font-size: 14px;
		float: right;
	}
	.main-right {
		/*background: #f5f6f6;*/
		width: 300px;
		margin-left: 45px;
		float: left;
		border-left: 1px solid #e0dedb;
		overflow: hidden;
	}
	.quick-operation {
		display: flex;
		justify-content: center; 
	}
	.operation {
		padding: 20px 25px;
		cursor: pointer;
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
	.news {
		text-align: left;
		padding: 0 20px;
	}
	.news ul {
		list-style:none; 
		padding: 0;
	}
	.news-list {
		padding: 5px;
	}
	.footer {
		/*border-top: 1px solid #e0dedb;*/
	}
</style>