<template>
	<div class="emotional">
		<div class="base-info">
			<p>情感状况</p>
			<el-row>
			 	<el-col :span="24">
			 		<span class="info-left">单身时间：</span>
			 		<span>{{baseInfo.singletime}}</span>
				</el-col>
			 </el-row>
			 <el-row>
			  	<el-col :span="24">
			  		<span class="info-left">恋爱次数：</span>
			  		<span>{{baseInfo.lovetimes}}</span>
				</el-col>
			</el-row>
		</div>	
	</div>
</template>

<script>
	export default {
	  	name: 'Emotional',
	  	data() {
	      	return {
	        	baseInfo: {
	        		singletime: '1-2年',
	        		lovetimes: '1次'
	        	},
	      	};
	    },
	    methods: {
			
		}
	}
</script>

<style scoped>
	.emotional {
		margin-left: 60px;
		text-align: left;
		font-size: 15px;
	}
	.edit {
		margin-left: 10px;
		cursor: pointer;
	}
	.edit:hover {
		color: #409EFF;
	}
	.el-row {
		padding: 10px 0;
	}
	.info-left {
		color: #9a9791;
	}
	.base-info {
		margin-bottom: 20px;
	}
	.infoInput {
		width: 250px;
	}
	.detail-info {
		border-top: 1px solid #e8e7e4;
	}
</style>