<template>
	<div class="activity">
		<ul>
			<li v-for="item in activityList" class="activity-list">	
				<el-card class="box-card">
					<div class="content-left">
							<p>活动名称：{{item.activeid.title}}</p>
							<p>活动时间：{{item.activeid.starttime}}-{{item.activeid.endtime}}</p>
							<p>活动简介：{{item.activeid.intro}}</p>		
					</div>
					<div class="content-right">
<!-- 						<p class="activity-status">已结束</p> -->
						<router-link :to="'/base/activeDetail?id='+item.activeid.id">查看详情</router-link>
					</div>
				</el-card>	
			</li>
		</ul>
		<el-pagination
		    layout="prev, pager, next"
		    :total="1000">
		</el-pagination>
	</div>
</template>

<script>
	export default {
	  	name: 'Mood',
	  	data() {
	      	return {
	      		activityList: []
	      	}
	    },
	    mounted: function(){
	    	this.initActive();
		},
		methods: {
			initActive() {
				this.$http({
					method: 'get',
					url: 'activeEnroll/getEnrollActive',   	
					params: {
					    "page": 1,
					    "pageSize": 5
					}        			
				}).then((response)=>{
					if(response && response.data.status == 'SUCCESS') {
						this.activityList = response.data.object.objects;
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
	.activity {
		margin-left: 60px;
		text-align: left;
	}
	.activity ul {
		list-style: none;
		padding-left: 0;
	}
	.activity-list {
		margin-bottom: 10px;
	}
	.content-left {
		display: inline-block;
		width: 600px;
	}
	.content-right {
		display: inline-block;
		width: 88px;
	}
	.activity-status {
		font-size: 15px;
		color: red;
       	font-weight: bold;
	}
	.el-pagination {
		text-align: center;
	}
</style>