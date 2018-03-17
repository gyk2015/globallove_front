<template>
	<div class="emotional">
		<div class="base-info">
			<p>情感状况<i class="el-icon-edit edit" @click="editBaseInfo" v-if="ifEditBaseInfo==false"></i><i class="el-icon-check edit" @click="saveBaseInfo" v-else></i></p>
			<el-row>
			 	<el-col :span="24"><span class="info-left">单身时间：</span>
			 		<span v-if="ifEditBaseInfo==false">{{baseInfo.singletime}}</span>
			 		<el-select v-model="baseInfo.singletime" placeholder="baseInfo.singletime" v-else>
					    <el-option
					      	v-for="item in singletimeOptions"
					      	:key="item.value"
					      	:label="item.label"
					      	:value="item.value">
					    </el-option>
				 	</el-select>
				</el-col>
			 </el-row>
			 <el-row>
			  	<el-col :span="24"><span class="info-left">恋爱次数：</span>
			  		<span v-if="ifEditBaseInfo==false">{{baseInfo.lovetimes}}</span>
			  		<el-select v-model="baseInfo.lovetimes" placeholder="baseInfo.lovetimes" v-else>
					    <el-option
					      	v-for="item in lovetimesOptions"
					      	:key="item.value"
					      	:label="item.label"
					      	:value="item.value">
					    </el-option>
				 	</el-select>
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
	        	ifEditBaseInfo: false,
	        	baseInfo: {
	        		singletime: '1-2年',
	        		lovetimes: '1次'
	        	},
	        	singletimeOptions: [
	        		{
			       	 	value: '1年以下',
			        	label: '1年以下'
			        }, 
			        {
			       	 	value: '1-2年',
			        	label: '1-2年'
			        }, 
			        {
			       	 	value: '2年以上',
			        	label: '2年以上'
			        },
			    ],
			    lovetimesOptions: [
	        		{
			       	 	value: '1次',
			        	label: '1次'
			        }, 
			        {
			       	 	value: '2次',
			        	label: '2次'
			        },
			        {
			       	 	value: '3次以上',
			        	label: '3次以上'
			        }, 
			    ],
	      	};
	    },
	    methods: {
		    editBaseInfo() {
		        this.ifEditBaseInfo = true;
		    },
		    saveBaseInfo() {
		    	this.ifEditBaseInfo = false;
		    },
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