<template>
	<div class="mood">
		<div class="mood-content">
			<p class="mood-title">TA的心情</p>
			<ul v-for="item in moodList">
				<li class="mood-list">
					<p>{{item.content}}</p>
					<time class="time">{{item.time}}</time>
					<span class="comment" @click="createComment(item)">评论</span>
					<div class="reply-area">
						<el-dialog title="添加评论" :visible.sync="isComment">
						  	<el-form :model="newComment">
						    	<el-input
								  	type="textarea"
								  	:rows="2"
								  	placeholder="请输入内容"
								  	v-model="newComment.content">
								</el-input>
						  	</el-form>
						  	<div slot="footer" class="dialog-footer">
						    	<el-button @click="concelComment">取 消</el-button>
						    	<el-button type="primary" @click="addComment">确 定</el-button>
						  	</div>
						</el-dialog>
						<ul v-for="reply in item.replys">
							<i class="el-icon-caret-top reply-icon"></i>
							<li class="reply-list">
								<div class="reply-main">
									<span>{{reply.reviewerid.username}}: </span>
									<span class="reply-content">{{reply.content}}</span>
								</div>
								<time class="time">{{reply.time}}</time>
							</li>
						</ul>
					</div>
				</li>
			</ul>
			<el-pagination
			    layout="prev, pager, next"
			    @current-change="handleCurrentChange"
			    :total="totalPage"
			    :page-count="totalPage"
			    :current-page="currentPage">
			</el-pagination>
		</div>
	</div>
</template>

<script>
	export default {
	  	name: 'Mood',
	  	data() {
	      	return {
	      		moodList: [
	      		],
	      		totalPage: 1,
	      		currentPage: 1,
	      		isComment: false,
	      		newComment: {
	      			targetid: 0,
	      			content: ''
	      		}
	      	}
	    },
	    created: function(){
	    	this.initMood(1);
		},
	    methods: {
	    	initMood(page){
				this.$http({
					method: 'get',
					url: 'mood/getMood',
					params: {
						'id': this.$route.query.id,
					    "page": page,
					    "pageSize": 5
					}     			
				}).then((response)=>{
					if(response && response.data.status == 'SUCCESS') {
						this.moodList = response.data.object.objects;
						this.totalPage = parseInt(response.data.object.totalPage);
						this.initComment(1);
					}else {
						this.$message(response.data.message);
					}
				}).catch((err)=>{  
					
				});
	    	},
	    	initComment(page,targetid) { 
	    		if(targetid == undefined) {
	    			this.moodList.forEach((item,index,arry)=>{
	    				this.$http({
							method: 'get',
							url: 'comment/getComment',
							params: {
							    "page": page,
							    "pageSize": 5,
							    "targetid": item.id,
							    "targettype": 0
							}     			
						}).then((response)=> {
							if(response && response.data.status == 'SUCCESS') {
								item.replys = [];
								item.replys= response.data.object.objects;
							}else {
								this.$message(response.data.message);
							}
						}).catch((err)=>{  
							
						});
	    			})	    			
	    		}else {
	    			this.$http({
						method: 'get',
						url: 'comment/getComment',
						params: {
						    "page": page,
						    "pageSize": 5,
						    "targetid": targetid,
						    "targettype": 0
						}     			
					}).then((response)=>{
						if(response && response.data.status == 'SUCCESS') {
							this.moodList.forEach((item,index,arry)=>{
								if(item.id == targetid) {
									item.replys = [];
									item.replys= response.data.object.objects;
								}
							})
						}else {
							this.$message(response.data.message);
						}
					}).catch((err)=>{  
						
					});
	    		}
	    		
	    	},
	    	createComment(item) {
	    		this.isComment = this.isComment == true ? false : true;
	    		this.newComment.targetid = item.id;
	    	},
	    	addComment() {
	    		this.$http({
					method: 'post',
					url: 'comment/addComment',
					data: {
						"content": this.newComment.content,
						"targettype": 0,
						"targetid": this.newComment.targetid
					}
				}).then((response)=>{
					if(response && response.data.status == 'SUCCESS') {
						this.$message(response.data.message);
						this.newComment.content = "";
						this.initComment(1,this.newComment.targetid);
						this.isComment = false;
					}else {
						this.$message(response.data.message);
					}
				}).catch((err)=>{
					// this.$message(response.message);
				})  
	    	},
	    	concelComment() {
	    		this.newComment.content = '';
	    		this.isComment = false;
	    	},
	    	handleCurrentChange(val) {
	    		this.initMood(val);
	    	}
	    }
	}
</script>

<style scoped>
	.mood {
		margin-left: 60px;
	}
	.publish-area {
		border-bottom: 1px solid #9a9791;
	}
	.mood-content {
		text-align: left;
	}
	.mood-title {
		font-weight: bold;
		font-size: 20px;
	}
	.mood-content ul {
		list-style: none;
		padding-left: 0px;
	}
	.mood-list {
		border-bottom: 1px solid #9a9791;
		box-shadow: 
	}
	.time {
		font-size: 13px;
    	color: #999;
	}
	.comment {
		color: #409EFF;
		font-size: 15px;
		cursor: pointer;
	}
	.reply-area {
		background: #eaecf2;
		position: relative;
		margin-top: 10px;
		margin-bottom: 10px;
	}
	.reply-icon {
		position: absolute;
		top: -11px;
		left: -1px;
		color: #eaecf2;
	}
	.reply-area ul {
		list-style: none;
		padding-left: 10px;
	}
	.reply-list {
		padding: 8px 0;
	}
	.reply-main {
		height: 30px;
		padding: 0 0 5px 0;
	}
	.reply-img {
		width: 30px;
		height: 30px;
		vertical-align:middle;
	}
	.reply-name {
		padding: 0 5px;
	}
	.reply-content {
		
	}
	.el-pagination {
		text-align: center;
	}
</style>