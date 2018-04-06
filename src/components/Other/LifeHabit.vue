<template>
	<div class="life-habit">
		<div class="base-info">
			<p>生活习惯</p>
			<el-row>
			 	<el-col :span="24">
			 		<span class="info-left">抽烟：</span>
			 		<span>{{baseInfo.smoking}}</span>
				</el-col>
			 </el-row>
			 <el-row>
			  	<el-col :span="24">
			  		<span class="info-left">喝酒：</span>
			  		<span>{{baseInfo.drink}}</span>
				</el-col>
			</el-row>
			<el-row>
			 	<el-col :span="24">
			 		<span class="info-left">生活作息：</span>
			 		<span>{{baseInfo.life}}</span>
				</el-col>
			</el-row>
			<el-row>
			 	<el-col :span="24">
			 		<span class="info-left">家务能力：</span>
			 		<span>{{baseInfo.housework}}</span>
				</el-col>
			</el-row>
			<el-row>
			 	<el-col :span="24">
			 		<span class="info-left">是否养宠物：</span>
			 		<span>{{baseInfo.pet}}</span>
				</el-col>
			</el-row>
			<el-row>
			 	<el-col :span="24">
			 		<span class="info-left">存款习惯：</span>
			 		<span>{{baseInfo.deposit}}</span>
				</el-col>
			</el-row>
		</div>	
	</div>
</template>

<script>
	export default {
	  	name: 'LifeHabit',
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
					url: 'lifeHabit/getOtherLifeHabit',
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
			}
		}
	}
</script>

<style scoped>
	.life-habit {
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