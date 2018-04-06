<template>
	<div class="personal-data">
		<div class="base-info">
			<p>基本资料</p>
			<el-row>
			 	<el-col :span="12">
			 		<span class="info-left">姓名：</span>
			 		<span>{{baseInfo.realname}}</span>
			 	</el-col>
			  	<el-col :span="12">
			  		<span class="info-left">月薪：</span>
			  		<span>{{baseInfo.salary}}</span>
			  	</el-col>
			</el-row>
			<el-row>
			 	<el-col :span="12">
			 		<span class="info-left">性别：</span>
			 		<span>{{baseInfo.sex}}</span>
			 	</el-col>
			  	<el-col :span="12">
			  		<span class="info-left">工作地点：</span>
			  		<span>{{baseInfo.workplace}}</span>
			  	</el-col>
			</el-row>
			<el-row>
			 	<el-col :span="12">
			 		<span class="info-left">年龄：</span>
			 		<span>{{baseInfo.age}}</span>
			 	</el-col>
			  	<el-col :span="12">
			  		<span class="info-left">婚姻状况：</span>
			  		<span>{{baseInfo.marrystatus}}</span>
			  	</el-col>
			</el-row>
			<el-row>
			 	<el-col :span="12">
			 		<span class="info-left">身高：</span>
			 		<span>{{baseInfo.height}}</span>
			 	</el-col>
			  	<el-col :span="12">
			  		<span class="info-left">体重：</span>
			  		<span>{{baseInfo.weight}}</span>
			  	</el-col>
			</el-row>
			<el-row>
			 	<el-col :span="12">
			 		<span class="info-left">籍贯：</span>
			 		<span>{{baseInfo.nativeplace}}</span>
			 	</el-col>
			  	<el-col :span="12">
			  		<span class="info-left">学历：</span>
			  		<span>{{baseInfo.education}}</span>
			  	</el-col>
			</el-row>
		</div>
		<div class="detail-info">
			<p>详细资料</p>
			<el-row>
			 	<el-col :span="12">
			 		<span class="info-left">血型：</span>
			 		<span>{{detailInfo.bloodtype}}</span>
			 	</el-col>
			  	<el-col :span="12">
			  		<span class="info-left">星座：</span>
			  		<span>{{detailInfo.constellation}}</span>
				</el-col>
			</el-row>
			<el-row>
			 	<el-col :span="12">
			 		<span class="info-left">民族：</span>
			 		<span>{{detailInfo.nation}}</span>
			 	</el-col>
			  	<el-col :span="12">
			  		<span class="info-left">属相：</span>
			  		<span>{{detailInfo.zodiac}}</span>
			  	</el-col>
			</el-row>
			<el-row>
			 	<el-col :span="12">
			 		<span class="info-left">宗教信仰：</span>
			 		<span>{{detailInfo.religion}}</span>
			 	</el-col>
			  	<el-col :span="12">
			  		<span class="info-left">住房情况：</span>
			  		<span>{{detailInfo.house}}</span>
			  	</el-col>
			</el-row>
		</div>
	</div>
</template>

<script>
	export default {
	  	name: 'PersonalDate',
	  	data() {
	      	return {
	        	baseInfo: {},
	        	detailInfo: {}
	      	};
	    },
	    mounted: function(){
	    	this.initMe();
		},
	    methods: {
	    	initMe() {
				this.$http({
					method: 'get',
					url: 'baseInfo/getOtherBaseInfo',
					params: {
						"id": this.$route.query.id
					}      			
				}).then((response)=>{
					if(response && response.data.status == 'SUCCESS') {
						this.baseInfo = response.data.object;
					}else {
						this.$message(response.data.message);
					}
				}).catch((err)=>{  
					
				});
				this.$http({
					method: 'get',
					url: 'dtlInfo/getOtherDtlInfo',
					params: {
						"id": this.$route.query.id
					}    			
				}).then((response)=>{
					if(response && response.data.status == 'SUCCESS') {
						this.detailInfo = response.data.object;
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
	.personal-data {
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
	.detail-info {
		border-top: 1px solid #e8e7e4;
	}
</style>