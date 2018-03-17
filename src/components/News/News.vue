<template>
	<div class="news">
		<div class="news-top">
			<el-carousel trigger="click" height="330px">
		      	<el-carousel-item v-for="item in popularityList">
		        	<img :src="item.img" alt="">
		      	</el-carousel-item>
		    </el-carousel>
		    <div class="rankingList">
		    	<el-tabs v-model="activeName">
				    <el-tab-pane label="人气" name="first">
				    	<ol class="rankingList__content">
				    		<li v-for="item in popularityList">
				    			<router-link :to="'/base/newsDetail?id='+item.id">{{ item.title }}</router-link>
				    		</li>
				    	</ol>
				    </el-tab-pane>
				    <el-tab-pane label="最新" name="second">
						<ol class="rankingList__content">
				    		<li v-for="item in newestList">
				    			<router-link :to="'/base/newsDetail?id='+item.id">{{ item.title }}</router-link>
				    		</li>
				    	</ol>
				    </el-tab-pane>
				</el-tabs>
		    </div>
		</div>
		<div class="news-main">
			<div class="hot-view news-line">
				<p class="news-title"><router-link to="/base/newsList?type=0" class="news-more">更多>></router-link>麻辣观点</p>	
				<el-row :gutter="15">
				  	<el-col :span="4" v-for="item in hotViewList">
				    	<el-card :body-style="{ padding: '0px' }">
				    		<router-link :to="'/base/newsDetail?id='+item.id">
					      		<img src="../../assets/image/bg_1.jpg" class="news-image">
					      		<div style="padding: 14px;" class="news-info">
					        		<span>{{ item.title }}</span>
					        		<div class="bottom clearfix">
					          			<time class="news-time">{{ item.time }}</time>
					        		</div>
					      		</div>
					      	</router-link>
				    	</el-card>
				  	</el-col>
				</el-row>		
			</div>
			<div class="emotional-train news-line">
				<p class="news-title"><router-link to="/base/newsList?type=1" class="news-more">更多>></router-link>情感培训室</p>
				<el-row :gutter="15">
				  	<el-col :span="4" v-for="item in emotionalTrainList">
				    	<el-card :body-style="{ padding: '0px' }">
				    		<router-link :to="'/base/newsDetail?id='+item.id">
					      		<img src="../../assets/image/bg_1.jpg" class="news-image">
					      		<div style="padding: 14px;" class="news-info">
					        		<span>{{ item.title }}</span>
					        		<div class="bottom clearfix">
					          			<time class="news-time">{{ item.time }}</time>
					        		</div>
					      		</div>
					      	</router-link>
				    	</el-card>
				  	</el-col>
				</el-row>
			</div>
			<div class="soft-time news-line">
				<p class="news-title"><router-link to="/base/newsList?type=2" class="news-more">更多>></router-link>柔软时光</p>
				<el-row :gutter="15">
				  	<el-col :span="4" v-for="item in softTimeList">
				    	<el-card :body-style="{ padding: '0px' }">
				    		<router-link :to="'/base/newsDetail?id='+item.id">
					      		<img src="../../assets/image/bg_1.jpg" class="news-image">
					      		<div style="padding: 14px;" class="news-info">
					        		<span>{{ item.title }}</span>
					        		<div class="bottom clearfix">
					          			<time class="news-time">{{ item.time }}</time>
					        		</div>
					      		</div>
					      	</router-link>
				    	</el-card>
				  	</el-col>
				</el-row>
			</div>
			<div class="happiness-story news-line">
				<p class="news-title"><router-link to="/base/newsList?type=3" class="news-more">更多>></router-link>幸福就在当下</p>
				<el-row :gutter="15">
				  	<el-col :span="4" v-for="item in happinessStoryList">
				    	<el-card :body-style="{ padding: '0px' }">
				    		<router-link :to="'/base/newsDetail?id='+item.id">
					      		<img src="../../assets/image/bg_1.jpg" class="news-image">
					      		<div style="padding: 14px;" class="news-info">
					        		<span>{{ item.title }}</span>
					        		<div class="bottom clearfix">
					          			<time class="news-time">{{ item.time }}</time>
					        		</div>
					      		</div>
					      	</router-link>
				    	</el-card>
				  	</el-col>
				</el-row>
			</div>
		</div>
	</div>
</template>

<script>
	import bg1 from '../../assets/image/bg_1.jpg'
	export default {
		name: 'News',
		data() {
			return {
				activeName: 'first',
				popularityList: [],
				newestList: [],
				hotViewList: [],
				emotionalTrainList: [],
				softTimeList: [],
				happinessStoryList: [],
			}
		},
		mounted: function(){
			this.initPop();
			this.initNewest();
	    	this.initHotView();
	    	this.initEmotionalTrain();
	    	this.initSoftTime();
	    	this.initHappinessStory();
		},
		methods: {
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
						this.popularityList = response.data.object.objects;
					}else {
						this.$message(response.data.message);
					}
				}).catch((err)=>{  
					
				});
			},
			initNewest() {
				this.$http({
					method: 'get',
					url: 'article/getNewestList',
					params: {
						"page": 1,
						"pageSize": 6
					}        	   			
				}).then((response)=>{
					if(response && response.data.status == 'SUCCESS') {
						this.newestList = response.data.object.objects;
					}else {
						this.$message(response.data.message);
					}
				}).catch((err)=>{  
					
				});
			},
			initHotView() {
				this.$http({
					method: 'get',
					url: 'article/getArticles',
					params: {
						"type": 0,
						"page": 1,
						"pageSize": 6
					}        	   			
				}).then((response)=>{
					if(response && response.data.status == 'SUCCESS') {
						this.hotViewList = response.data.object.objects;
					}else {
						this.$message(response.data.message);
					}
				}).catch((err)=>{  
					
				});
			},
			initEmotionalTrain() {
				this.$http({
					method: 'get',
					url: 'article/getArticles',
					params: {
						"type": 1,
						"page": 1,
						"pageSize": 6
					}        	   			
				}).then((response)=>{
					if(response && response.data.status == 'SUCCESS') {
						this.emotionalTrainList = response.data.object.objects;
					}else {
						this.$message(response.data.message);
					}
				}).catch((err)=>{  
					
				});
			},
			initSoftTime() {
				this.$http({
					method: 'get',
					url: 'article/getArticles',
					params: {
						"type": 2,
						"page": 1,
						"pageSize": 6
					}        	   			
				}).then((response)=>{
					if(response && response.data.status == 'SUCCESS') {
						this.softTimeList = response.data.object.objects;
					}else {
						this.$message(response.data.message);
					}
				}).catch((err)=>{  
					
				});
			},
			initHappinessStory() {
				this.$http({
					method: 'get',
					url: 'article/getArticles',
					params: {
						"type": 3,
						"page": 1,
						"pageSize": 6
					}        	   			
				}).then((response)=>{
					if(response && response.data.status == 'SUCCESS') {
						this.happinessStoryList = response.data.object.objects;
					}else {
						this.$message(response.data.message);
					}
				}).catch((err)=>{  
					
				});
			},
		}
	}
</script>

<style scoped>
	.news {
		width: 1098px;
		margin: 0 auto;
	}
	.news-top {
		margin-top: 20px;
		overflow: hidden;
	}
	.el-carousel {
		width: 770px;
		float: left;
	}
	.el-carousel__item img {
		height: 100%;
		width: 100%;
	 }
	.rankingList {
		float: left;
		width: 280px;
		height: 330px;
		margin-left: 38px;
	}
	.rankingList__content {
		padding-left: 25px;
	}
	.rankingList__content li {
		text-align: left;
		padding: 10px 0;
	}
	.rankingList__content li a:hover {
		cursor: pointer;
		color: #ff4566;
	}
	.news-line {
		overflow: hidden;
	}
	.news-title {
		text-align: left;
		color: #ff4566;
		font-weight: bold;
		font-size: 18px;
		line-height: 58px;
	}
	.news-more {
		float: right;
		color: #9a979e;
		font-size: 12px;
	}
	.el-col {
		margin-bottom: 20px;
	}
	.el-col:hover {
		cursor: pointer;
	}
	.news-info {
		text-align: left;
	}
	.bottom {
	    line-height: 12px;
	    margin-top: 10px;
	}
	.news-time {
	    font-size: 13px;
	    color: #999;
	}
	.news-image {
		width: 100%;
   		display: block;
	}
	.clearfix:before,
	.clearfix:after {
	    display: table;
	    content: "";
	}
	.clearfix:after {
	    clear: both
	}
</style>