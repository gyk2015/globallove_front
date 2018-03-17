<template>
	<div class="news-detail">
		<div class="new-main">
			<h2 class="new-title">{{ news.title }}</h2>
			<p><time class="new-time">{{ news.time }}</time></p>
			<img src="../../assets/image/bg_1.jpg" alt="" class="new-img">
			<div class="new-content">
				<p>{{ news.content }}</p>
			</div>
			<p class="new-additional">评论（100）|<span @click="updateGood(news.id)">点赞（{{ news.liked }}）</span></p>
			<div class="commnet-area">
				<el-form ref="newcomment" :model="newComment">
					<el-form-item>
					    <el-input type="textarea" v-model="newComment.content"></el-input>
					</el-form-item>
					<el-form-item>
					    <el-button type="primary" @click="addComment">发表评论</el-button>
					</el-form-item>
				</el-form>
				<ul class="comments-list">
					<li v-for="item in comments">
						<p><span class="comment-username">{{ item.reviewerid.username }}:</span>{{ item.content }}</p>
						<p><time class="comment-time">{{ item.time }}</time></p>
					</li>
				</ul>
			</div>
		</div>
		
	</div>
</template>

<script>
	import bg1 from '../../assets/image/bg_1.jpg'
	export default {
		name: 'NewsList',
		data() {
			return {
				news: {},
				newComment: {
					content: ''
				},
				comments: []
			}
		},
		mounted: function(){
	    	this.initArticle();
	    	this.initComment();
		},
		methods: {
			initArticle() {
				this.$http({
					method: 'get',
					url: 'article/getArticle',
					params: {
						"id": this.$route.query.id
					}        	   			
				}).then((response)=>{
					if(response && response.data.status == 'SUCCESS') {
						this.news = response.data.object;
					}else {
						this.$message(response.data.message);
					}
				}).catch((err)=>{  
					
				});
			},
			initComment() {
				this.$http({
					method: 'get',
					url: 'comment/getComment',
					params: {
					    "page": 1,
					    "pageSize": 5,
					    "targetid": this.$route.query.id,
					    "targettype": 1
					}     			
				}).then((response)=> {
					if(response && response.data.status == 'SUCCESS') {
						this.comments= response.data.object.objects;
					}else {
						this.$message(response.data.message);
					}
				}).catch((err)=>{  
					
				});
			},
			updateGood(id) {
				this.$http({
					method: 'post',
					url: 'article/updateGood',
					data: {
						"id": id
					}
				}).then((response)=>{
					if(response && response.data.status == 'SUCCESS') {
						this.$message(response.data.message);
						this.news.liked = this.news.liked + 1;
					}else {
						this.$message(response.data.message);
					}
				}).catch((err)=>{
					// this.$message(response.message);
				}) 
			},
			addComment() {
				this.$http({
					method: 'post',
					url: 'comment/addComment',
					data: {
						"content": this.newComment.content,
						"targettype": 1,
						"targetid": this.$route.query.id
					}
				}).then((response)=>{
					if(response && response.data.status == 'SUCCESS') {
						this.$message(response.data.message);
						this.newComment.content = "";
						// this.initComment(1,this.newComment.targetid);
					}else {
						this.$message(response.data.message);
					}
				}).catch((err)=>{
					// this.$message(response.message);
				})  
			},

		}
	}
</script>

<style scoped>
	.news-detail {
		width: 1098px;
		margin: 0 auto;
		border-left: 1px solid #e4e4e4;
		border-right: 1px solid #e4e4e4;
	}
	.new-main {
		padding: 0 15px;
	}
	.new-title {
		color: #ff4566;
	}
	.news-time {
	    font-size: 13px;
	    color: #e4e4e4;
	} 
	.new-img {
		width: 890px;
		height: 300px;
	}
	.new-content {
		text-align:left;
 		text-indent:2em;
 		line-height: 30px;
	}
	.new-additional {
		text-align: right;
		color: #ff4566;
		font-size: 12px;
	}
	.commnet-area {
		margin-top: 20px;
		padding-top: 20px;
		border-top: 1px solid #e4e4e4;
	}
	.comments-list {
		list-style: none;
		text-align: left;
		padding-left: 5px;
	}
	.comments-list li {
		border-bottom: 1px solid #e4e4e4;
	}
	.comment-username {
		color: #999;
		margin-right: 5px;
	}
	.comment-time {
		font-size: 13px;
	    color: #999;
	}
</style>