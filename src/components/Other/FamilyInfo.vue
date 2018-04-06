<template>
	<div class="family-info">
		<div class="base-info">
			<p>家庭资料</p>
			<el-row>
			 	<el-col :span="24">
			 		<span class="info-left">父母情况：</span>
			 		<span>{{baseInfo.parents}}</span>
			 	</el-col>
			 </el-row>
			 <el-row>
			  	<el-col :span="24">
			  		<span class="info-left">是否独生：</span>
			  		<span>{{baseInfo.onlychild}}</span>
			  	</el-col>
			</el-row>
			<el-row>
			 	<el-col :span="24">
			 		<span class="info-left">有无子女：</span>
			 		<span>{{baseInfo.child}}</span>
			 	</el-col>
			</el-row>
			
		</div>	
	</div>
</template>

<script>
	export default {
	  	name: 'FamilyInfo',
	  	data() {
	      	return {
	        	baseInfo: {},
	      	};
	    },
	    mounted: function(){
	    	this.initMe();
		},
	    methods: {
	    	initMe() {
				this.$http({
					method: 'get',
					url: 'familyInfo/getOtherFamilyInfo',
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
			},
		}
	}
</script>

<style scoped>
	.family-info {
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