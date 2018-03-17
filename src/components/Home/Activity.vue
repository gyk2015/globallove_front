<template>
	<div class="activity">
		<ul>
			<li v-for="item in activityList" class="activity-list">	
				<el-card class="box-card">
					<div class="content-left">
							<p>活动名称：{{item.name}}</p>
							<p>活动时间：{{item.time}}</p>
							<p>活动简介：{{item.intro}}</p>		
					</div>
					<div class="content-right">
						<p class="activity-status">已结束</p>
						<router-link to="/base/home/photo">查看详情</router-link>
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
	      		activityList: [
	      			{
	      				name: '一夜情',
	      				time: '2018-1-8',
	      				intro: '这是一夜情活动'
	      			},
	      			{
	      				name: '一夜情',
	      				time: '2018-1-8',
	      				intro: '这是一夜情活动'
	      			} 
	      		]
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