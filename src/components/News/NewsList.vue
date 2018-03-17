<template>
	<div class="news-list">
		<h2 class="news-type">麻辣观点</h2>
		<div class="content-left">
			<ul>
				<li v-for="item in newsList" class="news-title">
					<p><router-link :to="'/base/newsDetail?id='+item.id">{{ item.title }}</router-link></p>
				</li>
			</ul>
			<el-pagination
			    layout="prev, pager, next"
			    :total="1000">
			</el-pagination>
		</div>
		<div class="recomment-right">
			<h4 class="hot-list">人气榜</h4>
			<ol>
				<li v-for="item in popList" class="recomment-title">
					<p><router-link :to="'/base/newsDetail?id='+item.id">{{ item.title }}</router-link></p>
				</li>
			</ol>
		</div>
	</div>
</template>

<script>
	import bg1 from '../../assets/image/bg_1.jpg'
	export default {
		name: 'NewsList',
		data() {
			return {
				newsList: [],
				popList: []
			}
		},
		mounted: function(){
	    	this.initArticles();
	    	this.initPop();
		},
		methods: {
			initArticles() {
				this.$http({
					method: 'get',
					url: 'article/getArticles',
					params: {
						"type": this.$route.query.type,
						"page": 1,
						"pageSize": 10
					}        	   			
				}).then((response)=>{
					if(response && response.data.status == 'SUCCESS') {
						this.newsList = response.data.object.objects;
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
			}
		}
	}
</script>

<style scoped>
	.news-list {
		width: 1098px;
		margin: 0 auto;

	}
	.news-type {
		text-align: left;
		color: #ff4566;
		border-bottom: 2px solid #ff4566;
		padding-bottom: 20px; 
	}
	.content-left {
		display: inline-block;
		width: 770px;
		float: left;
	}
	.content-left ul {
		list-style: none;
		text-align: left;
		padding-left: 5px;
	}
	.news-title {
		border-bottom: 1px dashed #e4e4e4;
	}
	.news-title p a:hover {
		color: #ff4566;
		cursor: pointer;
	}
	.recomment-right {
		display: inline-block;
		width: 230px;
		margin-left: 18px;
		border-left: 1px solid #e4e4e4;
		padding-left: 20px;
		float: right;
		right: 0px;
	}
	.recomment-right ol {
		text-align: left;
		padding-left: 25px;
	}
	.hot-list {
		text-align: left;
	}
	.recomment-title p a:hover {
		color: #ff4566;
		cursor: pointer;
	}
</style>