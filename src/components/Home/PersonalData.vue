<template>
	<div class="personal-data">
		<div class="base-info">
			<p>基本资料<i class="el-icon-edit edit" @click="editBaseInfo" v-if="ifEditBaseInfo==false"></i><i class="el-icon-check edit" @click="saveBaseInfo" v-else></i></p>
			<el-row>
			 	<el-col :span="12"><span class="info-left">姓名：</span><span v-if="ifEditBaseInfo==false">{{baseInfo.realname}}</span><el-input v-model="baseInfo.realname" v-else class="infoInput" size="small"></el-input></el-col>
			  	<el-col :span="12"><span class="info-left">月薪：</span><span v-if="ifEditBaseInfo==false">{{baseInfo.salary}}</span><el-input v-model="baseInfo.salary" v-else class="infoInput" size="small"></el-input></el-col>
			</el-row>
			<el-row>
			 	<el-col :span="12"><span class="info-left">性别：</span><span v-if="ifEditBaseInfo==false">{{baseInfo.sex}}</span><el-input v-model="baseInfo.sex" v-else class="infoInput" size="small"></el-input></el-col>
			  	<el-col :span="12"><span class="info-left">工作地点：</span><span v-if="ifEditBaseInfo==false">{{baseInfo.workplace}}</span><el-input v-model="baseInfo.workplace" v-else class="infoInput" size="small"></el-input></el-col>
			</el-row>
			<el-row>
			 	<el-col :span="12"><span class="info-left">年龄：</span><span v-if="ifEditBaseInfo==false">{{baseInfo.age}}</span><el-input v-model="baseInfo.age" v-else class="infoInput" size="small"></el-input></el-col>
			  	<el-col :span="12"><span class="info-left">婚姻状况：</span><span v-if="ifEditBaseInfo==false">{{baseInfo.marrystatus}}</span><el-input v-model="baseInfo.marrystatus" v-else class="infoInput" size="small"></el-input></el-col>
			</el-row>
			<el-row>
			 	<el-col :span="12"><span class="info-left">身高：</span><span v-if="ifEditBaseInfo==false">{{baseInfo.height}}</span><el-input v-model="baseInfo.height" v-else class="infoInput" size="small"></el-input></el-col>
			  	<el-col :span="12"><span class="info-left">体重：</span><span v-if="ifEditBaseInfo==false">{{baseInfo.weight}}</span><el-input v-model="baseInfo.weight" v-else class="infoInput" size="small"></el-input></el-col>
			</el-row>
			<el-row>
			 	<el-col :span="12"><span class="info-left">籍贯：</span><span v-if="ifEditBaseInfo==false">{{baseInfo.nativeplace}}</span><el-input v-model="baseInfo.nativeplace" v-else class="infoInput" size="small"></el-input></el-col>
			  	<el-col :span="12"><span class="info-left">学历：</span><span v-if="ifEditBaseInfo==false">{{baseInfo.education}}</span><el-input v-model="baseInfo.education" v-else class="infoInput" size="small"></el-input></el-col>
			</el-row>
		</div>
		<div class="detail-info">
			<p>详细资料<i class="el-icon-edit edit" @click="editDetailInfo" v-if="ifEditDetailInfo==false"></i><i class="el-icon-check edit" @click="saveDetailInfo" v-else></i></p>
			<el-row>
			 	<el-col :span="12"><span class="info-left">血型：</span><span v-if="ifEditDetailInfo==false">{{detailInfo.bloodtype}}</span><el-input v-model="detailInfo.bloodtype" v-else class="infoInput" size="small"></el-input></el-col>
			  	<el-col :span="12"><span class="info-left">星座：</span><span v-if="ifEditDetailInfo==false">{{detailInfo.constellation}}</span><el-input v-model="detailInfo.constellation" v-else class="infoInput" size="small"></el-input></el-col>
			</el-row>
			<el-row>
			 	<el-col :span="12"><span class="info-left">民族：</span><span v-if="ifEditDetailInfo==false">{{detailInfo.nation}}</span><el-input v-model="detailInfo.nation" v-else class="infoInput" size="small"></el-input></el-col>
			  	<el-col :span="12"><span class="info-left">属相：</span><span v-if="ifEditDetailInfo==false">{{detailInfo.zodiac}}</span><el-input v-model="detailInfo.zodiac" v-else class="infoInput" size="small"></el-input></el-col>
			</el-row>
			<el-row>
			 	<el-col :span="12"><span class="info-left">宗教信仰：</span><span v-if="ifEditDetailInfo==false">{{detailInfo.religion}}</span><el-input v-model="detailInfo.religion" v-else class="infoInput" size="small"></el-input></el-col>
			  	<el-col :span="12"><span class="info-left">住房情况：</span><span v-if="ifEditDetailInfo==false">{{detailInfo.house}}</span><el-input v-model="detailInfo.house" v-else class="infoInput" size="small"></el-input></el-col>
			</el-row>
		</div>
	</div>
</template>

<script>
	export default {
	  	name: 'PersonalDate',
	  	data() {
	      	return {
	        	ifEditBaseInfo: false,
	        	baseInfo: {},
	        	ifEditDetailInfo: false,
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
					url: 'baseInfo/getBaseInfo',   			
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
					url: 'dtlInfo/getDtlInfo',   			
				}).then((response)=>{
					if(response && response.data.status == 'SUCCESS') {
						this.detailInfo = response.data.object;
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
					url: 'baseInfo/updateBaseInfo',
					data: {
						"realname": this.baseInfo.realname,
		        		"salary": this.baseInfo.salary,
		        		"sex": this.baseInfo.sex,
		        		"workplace": this.baseInfo.workplace,
		        		"age": this.baseInfo.age,
		        		"marrystatus": this.baseInfo.marrystatus,
		        		"height": this.baseInfo.height,
		        		"weight": this.baseInfo.weight,
		        		"nativeplace": this.baseInfo.nativeplace,
		        		"education": this.baseInfo.education,
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
		    editDetailInfo() {
		        this.ifEditDetailInfo = true;
		    },
		    saveDetailInfo() {
		    	this.$http({
					method: 'post',
					url: 'dtlInfo/updateDtlInfo',
					data: {
						"bloodtype": this.detailInfo.bloodtype,
		        		"constellation": this.detailInfo.constellation,
		        		"nation": this.detailInfo.nation,
		        		"zodiac": this.detailInfo.zodiac,
		        		"religion": this.detailInfo.religion,
		        		"house": this.detailInfo.house,
					}
				}).then((response)=>{
					if(response && response.data.status == 'SUCCESS') {
						this.$message(response.data.message);
						this.ifEditDetailInfo = false;
					}else {
						this.$message(response.data.message);
					}
				}).catch((err)=>{
					// this.$message(response.message);
				})  
		    }
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
	.infoInput {
		width: 250px;
	}
	.detail-info {
		border-top: 1px solid #e8e7e4;
	}
</style>