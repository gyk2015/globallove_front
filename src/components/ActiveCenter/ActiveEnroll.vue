<template>
	<div class="active-enroll">
		<div class="content">
			<ul>
				<li>
					<i class="el-icon-arrow-right enroll-icon"></i><span class="enroll-title">报名活动</span>
					<div class="content-box">
						<div class="enroll-img">
							<img :src="active.img" alt="">
						</div>
						<div class="enroll-info">
							<p class="active-title">{{ active.title }}</p>
							<p class="active-time">活动时间：{{ active.starttime }}至{{ active.endtime }}</p>
							<p class="active-address">活动地点：{{ active.place }}</p>
						</div>
					</div>
				</li>
				<li>
					<i class="el-icon-arrow-right enroll-icon"></i><span class="enroll-title">联系方式</span>
					<div class="content-box">
						<el-form ref="form" :model="form" label-width="80px">
						  	<el-form-item label="联系方式">
						    	<el-input v-model="form.phone"></el-input>
						  	</el-form-item>
						  	<el-form-item label="自我介绍">
						    	 <el-input type="textarea" v-model="form.intro"></el-input>
						  	</el-form-item>
						</el-form>
					</div>
				</li>
				<li>
					<i class="el-icon-arrow-right enroll-icon"></i><span class="enroll-title">支付方式</span>
					<div class="content-box">
						<el-radio v-model="form.payment" label="1">免费活动</el-radio>
					</div>
				</li>
				<li class="footer">
					<p class="active-price">应付金额：￥0</p>
					<el-button type="danger" plain @click="confirmEnroll"  :loading="isLoading">确认报名</el-button>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	import bg1 from '../../assets/image/bg_1.jpg'
	export default {
		name: 'ActiveEnroll',
		data() {
			return {
				active: {},
				form: {
					phone: '13724064007',
					intro: '',
					payment: '1',
				},
				isLoading: false
			}
		},
		mounted: function(){
	    	this.initActive();
		},
		methods: {
			initActive() {
	    		this.$http({
					method: 'get',
					url: 'active/getActive',
					params: {
					    "id": this.$route.query.id
					}        	   			
				}).then((response)=>{
					if(response && response.data.status == 'SUCCESS') {
						this.active = response.data.object;
					}else {
						this.$message(response.data.message);
					}
				}).catch((err)=>{  
					
				});
	    	},
			confirmEnroll() {
				this.isLoading = true;
				this.$http({
					method: 'post',
					url: 'activeEnroll/addActiveEnroll',
					data: {
						"activeid": this.$route.query.id,
		        		"phone": this.form.phone,
		        		"intro": this.form.intro,
					}
				}).then((response)=>{
					if(response && response.data.status == 'SUCCESS') {
						this.$message('恭喜您！报名成功');
						this.isLoading = false;
						setTimeout(() => {
							this.$router.push({ path: 'home/activity' })
						},2000);
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
	.active-enroll {
		width: 1098px;
		margin: 0 auto;
	}
	.content {
		text-align: left;
	}
	.content ul {
		list-style: none;
		padding-left: 0;
	}
	.content ul li {
		padding: 10px 0;
	}
	.enroll-icon {
		font-size: 20px;
	}
	.enroll-title {
		font-size: 18px;
	}
	.content-box {
		padding: 10px;
		background: #f4f4f4;
		width: 1048px;
		margin: 0 auto;
		overflow: hidden;
		margin-top: 10px;
	}
	.enroll-img {
		float: left;
		width: 172px;
		height: 130px;
	}
	.enroll-img img {
		width: 100%;
		height: 100%;
	}
	.enroll-info {
		margin-left: 20px;
		float: left;
	}
	.active-title {
		font-weight: bold;
	}
	.active-time {
		color: #324157;
		font-size: 15px;
	}
	.active-address {
		color: #324157;
		font-size: 15px;
	}
	.footer {
		border-top: 1px solid #e8e7e4;
		margin-top: 10px;
		text-align: right;
	}
	.active-price {
		display: inline-block;
		margin-right: 10px;
	}
</style>