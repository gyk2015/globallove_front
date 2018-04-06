<template>
	<div class="mate">
		<p>择偶意向<i class="el-icon-edit edit" @click="editMate" v-if="ifEditMate==false"></i><i class="el-icon-check edit" @click="saveMate" v-else></i></p>
		<el-row>
		 	<el-col :span="12">
		 		<span class="info-left">年龄：</span>
		 		<span v-if="ifEditMate==false">{{mate.startage}}-{{mate.endage}}</span>
		 		<div v-else class="info-right">
		 			<el-col :span="11">
			 			<el-select v-model="mate.startage" size="small">
					      	<el-option label="18岁" value="18"></el-option>
					      	<el-option label="19岁" value="19"></el-option>
					    </el-select>
					</el-col>
					<el-col :span="2" class="line">-</el-col>
					<el-col :span="11">
					    <el-select v-model="mate.endage" size="small">
					      	<el-option label="18岁" value="18"></el-option>
					      	<el-option label="19岁" value="19"></el-option>
					    </el-select>
					</el-col>
		 		</div>
		 	</el-col>
		  	<el-col :span="12">
		  		<span class="info-left">地区：</span>
		  		<span v-if="ifEditMate==false">{{mate.place}}</span>
		  		<el-select v-model="mate.place" v-else size="small">
			      	<el-option label="广州市" value="广州市"></el-option>
			      	<el-option label="深圳市" value="深圳市"></el-option>
			    </el-select>
			</el-col>
		</el-row>
		<el-row>
		 	<el-col :span="12">
		 		<span class="info-left">身高：</span>
		 		<span v-if="ifEditMate==false">{{mate.startheight}}-{{mate.endheight}}</span>
		 		<div v-else class="info-right">
		 			<el-col :span="11">
			 			<el-select v-model="mate.startheight" size="small">
					      	<el-option label="145" value="145"></el-option>
					      	<el-option label="146" value="146"></el-option>
					    </el-select>
					</el-col>
					<el-col :span="2" class="line">-</el-col>
					<el-col :span="11">
					    <el-select v-model="mate.endheight" size="small">
					      	<el-option label="180" value="180"></el-option>
					      	<el-option label="185" value="185"></el-option>
					    </el-select>
					</el-col>
		 		</div>
		 	</el-col>
		  	<el-col :span="12">
		  		<span class="info-left">婚姻状况：</span>
		  		<span v-if="ifEditMate==false">{{mate.marrystatus}}</span>
		  		<el-select v-model="mate.marrystatus" v-else size="small">
				    <el-option label="未婚" value="未婚"></el-option>
				    <el-option label="已婚" value="已婚"></el-option>
				</el-select>
			</el-col>
		</el-row>
		<el-row>
		 	<el-col :span="12">
		 		<span class="info-left">学历：</span>
		 		<span v-if="ifEditMate==false">{{mate.education}}</span>
		 		<el-select v-model="mate.education" v-else size="small">
				    <el-option label="小学" value="小学"></el-option>
				    <el-option label="初中" value="初中"></el-option>
				    <el-option label="高中" value="高中"></el-option>
				    <el-option label="本科" value="本科"></el-option>
				    <el-option label="研究生" value="研究生"></el-option>
				    <el-option label="博士" value="博士"></el-option>
				</el-select>
		 	</el-col>
		  	<el-col :span="12">
		  		<span class="info-left">住房情况：</span>
		  		<span v-if="ifEditMate==false">{{mate.house}}</span>
		  		<el-select v-model="mate.house" v-else size="small">
				    <el-option label="租房" value="租房"></el-option>
				    <el-option label="已购房（需还贷）" value="已购房（需还贷）"></el-option>
				    <el-option label="已购房" value="已购房"></el-option>
				    <el-option label="与父母住" value="与父母住"></el-option>
				    <el-option label="其他" value="其他"></el-option>
				</el-select>
		  	</el-col>
		</el-row>
		<el-row>
		 	<el-col :span="12">
		 		<span class="info-left">月收入：</span>
		 		<span v-if="ifEditMate==false">{{mate.startsalary}}-{{mate.endsalary}}</span>
		 		<div v-else class="info-right">
		 			<el-col :span="11">
			 			<el-select v-model="mate.startsalary" size="small">
						    <el-option label="1000" value="1000"></el-option>
						    <el-option label="2000" value="2000"></el-option>
						    <el-option label="3000" value="3000"></el-option>
						    <el-option label="4000" value="4000"></el-option>
						    <el-option label="5000" value="5000"></el-option>
						</el-select>
					</el-col>
					<el-col :span="2" class="line">-</el-col>
					<el-col :span="11">
						<el-select v-model="mate.endsalary" size="small">
						    <el-option label="1000" value="1000"></el-option>
						    <el-option label="2000" value="2000"></el-option>
						    <el-option label="3000" value="3000"></el-option>
						    <el-option label="4000" value="4000"></el-option>
						    <el-option label="5000" value="5000"></el-option>
						</el-select>
					</el-col>
		 		</div>
		 	</el-col>
		  	<el-col :span="12">
		  		<span class="info-left">有无子女：</span>
		  		<span v-if="ifEditMate==false">{{mate.child}}</span>
		  		<el-select v-model="mate.child" v-else size="small">
				    <el-option label="有" value="有"></el-option>
				    <el-option label="有" value="有"></el-option>
				</el-select>
		  	</el-col>
		</el-row>
	</div>
</template>

<script>
	export default {
		name: 'Mate',
		data() {
	      	return {
	      		ifEditMate: false,
	      		mate: {
	      			startage: 0,
	      			endage: 0,
	      			place: '',
	      			startheight: 0,
	      			endheight: 0,
	      			marrystatus: '',
	      			education: '',
	      			house: '',
	      			startsalary: 0,
	      			endsalary: 0,
	      			child: ''
	      		}
	      	}
	    },
	    created: function(){
	    	this.initMate();
	    },
	    methods: {
	    	initMate() {
	    		this.$http({
					method: 'get',
					url: 'mate/getMate',   			
				}).then((response)=>{
					if(response && response.data.status == 'SUCCESS') {
						this.mate = response.data.object;
					}else {
						this.$message(response.data.message);
					}
				}).catch((err)=>{  
					
				});
	    	},
			editMate() {
				this.ifEditMate = true;
			},
			saveMate() {
				this.$http({
					method: 'post',
					url: 'mate/updateMate',
					data: {
						startage: this.mate.startage,
		      			endage: this.mate.endage,
		      			place: this.mate.place,
		      			startheight: this.mate.startheight,
		      			endheight: this.mate.endheight,
		      			marrystatus: this.mate.marrystatus,
		      			education: this.mate.education,
		      			house: this.mate.house,
		      			startsalary: this.mate.startsalary,
		      			endsalary: this.mate.endsalary,
		      			child: this.mate.child
					}
				}).then((response)=>{
					if(response && response.data.status == 'SUCCESS') {
						this.$message(response.data.message);
						this.ifEditMate = false;
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
	.mate {
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
	.info-right {
		display: inline-block;
		width: 300px;
		
	}
	.line {
		text-align: center;
		line-height: 30px;
	}
</style>