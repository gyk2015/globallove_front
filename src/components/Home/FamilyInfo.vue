<template>
	<div class="family-info">
		<div class="base-info">
			<p>家庭资料<i class="el-icon-edit edit" @click="editBaseInfo" v-if="ifEditBaseInfo==false"></i><i class="el-icon-check edit" @click="saveBaseInfo" v-else></i></p>
			<el-row>
			 	<el-col :span="24"><span class="info-left">父母情况：</span><span v-if="ifEditBaseInfo==false">{{baseInfo.parents}}</span><el-input v-model="baseInfo.parents" v-else class="infoInput" size="small"></el-input></el-col>
			 </el-row>
			 <el-row>
			  	<el-col :span="24"><span class="info-left">是否独生：</span><span v-if="ifEditBaseInfo==false">{{baseInfo.onlychild}}</span><el-input v-model="baseInfo.onlychild"  v-else class="infoInput" size="small"></el-input></el-col>
			</el-row>
			<el-row>
			 	<el-col :span="24"><span class="info-left">有无子女：</span><span v-if="ifEditBaseInfo==false">{{baseInfo.child}}</span><el-input v-model="baseInfo.child" v-else class="infoInput" size="small"></el-input></el-col>
			</el-row>
			
		</div>	
	</div>
</template>

<script>
	export default {
	  	name: 'FamilyInfo',
	  	data() {
	      	return {
	        	ifEditBaseInfo: false,
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
					url: 'familyInfo/getFamilyInfo',   			
				}).then((response)=>{
					if(response && response.data.status == 'SUCCESS') {
						this.baseInfo = response.data.object;
					}else {
						this.$message(response.data.message);
					}
				}).catch((err)=>{  
					
				});
			},
		    editBaseInfo() {
		        this.ifEditBaseInfo = true;
		    },
		    saveBaseInfo() {
		    	this.$http({
					method: 'post',
					url: 'familyInfo/updateFamilyInfo',
					data: {
						"parents": this.baseInfo.parents,
		        		"onlychild": this.baseInfo.onlychild,
		        		"child": this.baseInfo.child,
					}
				}).then((response)=>{
					if(response && response.data.status == 'SUCCESS') {
						this.$message(response.data.message);
						this.ifEditBaseInfo = false;
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