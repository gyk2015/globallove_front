<template>
	<div class="email">
		<div class="email-box">
			<el-tabs tabPosition="left" @tab-click="handleClick">
		  		<el-tab-pane label="收件箱">
					<ul class="emails">
						<li class="email-list" v-for="item in emails">
							<span @click="openReceiveEmail(item.id)">{{ item.title }}</span>
							<i class="el-icon-close del-email" @click="delReceiveEmail(item.id)"></i>
						</li>
					</ul>
		  		</el-tab-pane>
		  		<el-tab-pane label="发件箱">
					<ul class="emails">
						<li class="email-list" v-for="item in emails">
							<span @click="openSendEmail(item.id)">{{ item.title }}</span>
							<i class="el-icon-close del-email" @click="delSendEmail(item.id)"></i>
						</li>
					</ul>
		  		</el-tab-pane>
		  		<el-tab-pane label="写信">
					<el-button type="primary" @click="openWrite">新建一封邮件</el-button>
		  		</el-tab-pane>
			</el-tabs>
			<div class="email-content" v-if="showContent">
				<div>
					<i class="el-icon-close" @click="closeEmail"></i>
					<el-form ref="emailForm" :model="emailForm" label-width="80px" size="small">
						<el-form-item label="收件人" v-if="isWrite">
						    <el-input v-model="emailForm.receiveid.username">
						    	<i slot="suffix" class="el-icon-circle-plus-outline" @click="openFriends"></i>
						    </el-input>
						</el-form-item>
						<div v-else>
							<el-form-item label="收件人" v-if="isSendEmail">
							    <span>{{ emailForm.receiveid.username }}</span>
							</el-form-item>
							<el-form-item label="发件人" v-else>
							    <span>{{ emailForm.sendid.username }}</span>
							</el-form-item>
						</div>
						<el-form-item label="主题">
						    <el-input v-model="emailForm.title" v-if="isWrite"></el-input>
						    <span v-else>{{ emailForm.title }}</span>
						</el-form-item>
						<el-form-item label="内容">
						    <el-input type="textarea" v-model="emailForm.content" v-if="isWrite"></el-input>
						    <span v-else>{{ emailForm.content }}</span>
						</el-form-item>
						<el-form-item>
					    	<el-button type="primary" @click="onSubmit">发送</el-button>
					    	<el-button>取消</el-button>
					  </el-form-item>
					</el-form>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				showContent: false,//判断是否打开详细页
				isWrite: false,//判断是否写信界面
				isSendEmail: false,//判断是否为发件箱
				emails: [],
				emailForm: {
					sendid: {
						username: ''
					},
					receiveid: {
						username: ''
					},
					title: '',
					content: ''
				}
			}
		},
		created: function(){
	    	this.initReceiveEmail(1);
		},
		methods: {
			handleClick(tab, event) {
				if(tab.index == 0) {
					this.initReceiveEmail(1);
				}else {
					if(tab.index == 1) {
						this.initSendEmail(1);
					}
				}
			},
			initReceiveEmail(page) {
				this.$http({
					method: 'get',
					url: 'email/getReceiveEmail',
					params: {
					    "page": page,
					    "pageSize": 5
					}     			
				}).then((response)=>{
					if(response && response.data.status == 'SUCCESS') {
						this.emails = response.data.object.objects;
					}else {
						this.$message(response.data.message);
					}
				}).catch((err)=>{  
					
				});
			},
			initSendEmail(page) {
				this.$http({
					method: 'get',
					url: 'email/getSendEmail',
					params: {
					    "page": page,
					    "pageSize": 5
					}     			
				}).then((response)=>{
					if(response && response.data.status == 'SUCCESS') {
						this.emails = response.data.object.objects;
					}else {
						this.$message(response.data.message);
					}
				}).catch((err)=>{  
					
				});
			},
			//打开发件箱
			openSendEmail(id) {
				this.isWrite = false;
				this.showContent = true;
				this.isSendEmail = true;
				this.$http({
					method: 'get',
					url: 'email/getEmail',
					params: {
						"id": id
					}     			
				}).then((response)=>{
					if(response && response.data.status == 'SUCCESS') {
						this.emailForm = response.data.object;
					}else {
						this.$message(response.data.message);
					}
				}).catch((err)=>{  
					
				});
			},
			//打开收件箱
			openReceiveEmail(id) {
				this.isWrite = false;
				this.showContent = true;
				this.isSendEmail = false;
				this.$http({
					method: 'get',
					url: 'email/getEmail',
					params: {
						"id": id
					}     			
				}).then((response)=>{
					if(response && response.data.status == 'SUCCESS') {
						this.emailForm = response.data.object;
					}else {
						this.$message(response.data.message);
					}
				}).catch((err)=>{  
					
				});
			},
			openFriends() {

			},
			closeEmail() {
				this.showContent = false;
				this.emailForm = {
					sendid: {
						username: ''
					},
					receiveid: {
						username: ''
					},
					title: '',
					content: ''
				}
			},
			delReceiveEmail(id) {
				this.$http({
					method: 'post',
					url: 'email/delEmail',
					data: {
						"id": id
					}
				}).then((response)=>{
					if(response && response.data.status == 'SUCCESS') {
						this.$message(response.data.message);
						this.initReceiveEmail(1);
					}else {
						this.$message(response.data.message);
					}
				}).catch((err)=>{
					// this.$message(response.message);
				})  
			},
			delSendEmail(id) {
				this.$http({
					method: 'post',
					url: 'email/delEmail',
					data: {
						"id": id
					}
				}).then((response)=>{
					if(response && response.data.status == 'SUCCESS') {
						this.$message(response.data.message);
						this.initSendEmail(1);
					}else {
						this.$message(response.data.message);
					}
				}).catch((err)=>{
					// this.$message(response.message);
				})  
			},
			openWrite() {
				this.isWrite = true;
				this.showContent = true;
			},
			onSubmit() {
				this.$http({
					method: 'post',
					url: 'email/addEmail',
					data: {
						"receiveid": 2,
						"title": this.emailForm.title,
						"content": this.emailForm.content,
					}
				}).then((response)=>{
					if(response && response.data.status == 'SUCCESS') {
						this.$message(response.data.message);
						this.closeEmail();
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
	.email {
		text-align: left;
	}
	.email-box {
		margin-left: 10px;
		position: relative;
	}
	.emails {
		margin: 0;
		list-style: none;
	}
	.email-list {
		border-bottom: 1px dashed #e4e4e4;
		padding: 10px 0;
		cursor: pointer;
		position: relative;
	}
	.del-email {
		float: right;
		opacity: 0;
	}
	.del-email:hover {
		opacity: 1;
	}
	.email-content {
		width: 100%;
		height: 300px;
		background: #fff;
		position: absolute;
		left: 0;
		top: 0;
		z-index: 999;
		padding: 15px;
	}
</style>