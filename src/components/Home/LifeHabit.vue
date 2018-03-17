<template>
	<div class="life-habit">
		<div class="base-info">
			<p>生活习惯<i class="el-icon-edit edit" @click="editBaseInfo" v-if="ifEditBaseInfo==false"></i><i class="el-icon-check edit" @click="saveBaseInfo" v-else></i></p>
			<el-row>
			 	<el-col :span="24"><span class="info-left">抽烟：</span>
			 		<span v-if="ifEditBaseInfo==false">{{baseInfo.smoking}}</span>
			 		<el-select v-model="baseInfo.smoking" v-else>
					    <el-option
					      	v-for="item in smokingOptions"
					      	:key="item.value"
					      	:label="item.label"
					      	:value="item.value">
					    </el-option>
				 	</el-select>
				</el-col>
			 </el-row>
			 <el-row>
			  	<el-col :span="24"><span class="info-left">喝酒：</span>
			  		<span v-if="ifEditBaseInfo==false">{{baseInfo.drink}}</span>
			  		<el-select v-model="baseInfo.drink" v-else>
					    <el-option
					      	v-for="item in drinkOptions"
					      	:key="item.value"
					      	:label="item.label"
					      	:value="item.value">
					    </el-option>
				 	</el-select>
				</el-col>
			</el-row>
			<el-row>
			 	<el-col :span="24"><span class="info-left">生活作息：</span>
			 		<span v-if="ifEditBaseInfo==false">{{baseInfo.life}}</span>
			 		<el-select v-model="baseInfo.life" v-else>
					    <el-option
					      	v-for="item in lifeOptions"
					      	:key="item.value"
					      	:label="item.label"
					      	:value="item.value">
					    </el-option>
				 	</el-select>
				</el-col>
			</el-row>
			<el-row>
			 	<el-col :span="24"><span class="info-left">家务能力：</span>
			 		<span v-if="ifEditBaseInfo==false">{{baseInfo.housework}}</span>
			 		<el-select v-model="baseInfo.housework" v-else>
					    <el-option
					      	v-for="item in houseworkOptions"
					      	:key="item.value"
					      	:label="item.label"
					      	:value="item.value">
					    </el-option>
				 	</el-select>
				</el-col>
			</el-row>
			<el-row>
			 	<el-col :span="24"><span class="info-left">是否养宠物：</span>
			 		<span v-if="ifEditBaseInfo==false">{{baseInfo.pet}}</span>
			 		<el-select v-model="baseInfo.pet" v-else>
					    <el-option
					      	v-for="item in petOptions"
					      	:key="item.value"
					      	:label="item.label"
					      	:value="item.value">
					    </el-option>
				 	</el-select>
				</el-col>
			</el-row>
			<el-row>
			 	<el-col :span="24"><span class="info-left">存款习惯：</span>
			 		<span v-if="ifEditBaseInfo==false">{{baseInfo.deposit}}</span>
			 		<el-select v-model="baseInfo.deposit" v-else>
					    <el-option
					      	v-for="item in depositOptions"
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
	  	name: 'LifeHabit',
	  	data() {
	      	return {
	        	ifEditBaseInfo: false,
	        	baseInfo: {},
	        	smokingOptions: [
	        		{
			       	 	value: '是',
			        	label: '是'
			        }, 
			        {
			       	 	value: '否',
			        	label: '否'
			        }, 
			    ],
			    drinkOptions: [
	        		{
			       	 	value: '是',
			        	label: '是'
			        }, 
			        {
			       	 	value: '否',
			        	label: '否'
			        }, 
			    ],
			    lifeOptions: [
	        		{
			       	 	value: '规律',
			        	label: '规律'
			        }, 
			        {
			       	 	value: '不规律',
			        	label: '不规律'
			        }, 
			    ],
			    houseworkOptions: [
	        		{
			       	 	value: '擅长',
			        	label: '擅长'
			        }, 
			        {
			       	 	value: '一般',
			        	label: '一般'
			        }, 
			        {
			       	 	value: '不会',
			        	label: '不会'
			        }, 
			    ],
			    petOptions: [
	        		{
			       	 	value: '是',
			        	label: '是'
			        }, 
			        {
			       	 	value: '否',
			        	label: '否'
			        }, 
			    ],
			    depositOptions: [
	        		{
			       	 	value: '月光族',
			        	label: '月光族'
			        }, 
			        {
			       	 	value: '有存款',
			        	label: '有存款'
			        }, 
			    ],
	      	};
	    },
	    mounted: function(){
	    	this.initMe();
		},
	    methods: {
	    	initMe() {
				this.$http({
					method: 'get',
					url: 'lifeHabit/getLifeHabit',   			
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
					url: 'lifeHabit/updateLifeHaibit',
					data: {
						"smoking": this.baseInfo.smoking,
		        		"drink": this.baseInfo.drink,
		        		"life": this.baseInfo.life,
		        		"housework": this.baseInfo.housework,
		        		"pet": this.baseInfo.pet,
		        		"deposit": this.baseInfo.deposit,
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