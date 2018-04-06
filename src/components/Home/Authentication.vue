<template>
	<div class="authentication">
		<h4 v-if="me.userlevel == 1||me.userlevel == 2">您已经完成实名认证！</h4>
		<div v-else>
			<h4>请上传身份证进行认证</h4>
			<div class="idcard">
				<el-upload
				  	class="avatar-uploader"
				  	action="https://jsonplaceholder.typicode.com/posts/"
				  	:show-file-list="false"
				  	:on-success="handleAvatarSuccess"
				  	:before-upload="beforeAvatarUpload">
				  	<img v-if="imageUrl" :src="imageUrl" class="avatar">
				  	<i v-else class="el-icon-plus avatar-uploader-icon"></i>
				</el-upload>
			</div>
			<div class="idcard">
				<el-upload
				  	class="avatar-uploader"
				  	action="https://jsonplaceholder.typicode.com/posts/"
				  	:show-file-list="false"
				  	:on-success="handleAvatarSuccess"
				  	:before-upload="beforeAvatarUpload">
				  	<img v-if="imageUrl" :src="imageUrl" class="avatar">
				  	<i v-else class="el-icon-plus avatar-uploader-icon"></i>
				</el-upload>
			</div>
			<div class="idinfo">
				<el-form ref="form" :model="form" label-width="80px">
				  	<el-form-item label="真实姓名">
				    	<el-input v-model="form.realname"></el-input>
				  	</el-form-item>
				  	<el-form-item label="身份证号">
				    	<el-input v-model="form.idcode"></el-input>
				  	</el-form-item>
				  	<el-form-item>
						<el-button type="primary" @click="onSubmit">立即发布</el-button>
					</el-form-item>
				</el-form>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'Authentication',
	  	data() {
	      	return {
	      		me: {},
	      		imageUrl: '',
	      		form: {
	      			realname: '',
	      			idcode: ''
	      		}
	      	}
	    },
	    mounted: function(){
	    	this.initMe();
		},
	    methods: {
	    	initMe() {
	    		this.$http({
					method: 'get',
					url: 'account/getAccount',   			
				}).then((response)=>{
					if(response && response.data.status == 'SUCCESS') {
						this.me = response.data.object;
					}else {
						this.$message(response.data.message);
					}
				}).catch((err)=>{  
					
				});
	    	},
	    	handleAvatarSuccess(res, file) {
		        this.imageUrl = URL.createObjectURL(file.raw);
		    },
		    beforeAvatarUpload(file) {
		        const isJPG = file.type === 'image/jpeg';
		        const isLt2M = file.size / 1024 / 1024 < 2;

		        if (!isJPG) {
		          this.$message.error('上传头像图片只能是 JPG 格式!');
		        }
		        if (!isLt2M) {
		          this.$message.error('上传头像图片大小不能超过 2MB!');
		        }
		        return isJPG && isLt2M;
		    },
		    onSubmit() {
		    	this.$http({
					method: 'post',
					url: 'login/identyUser',
					data: {
						"realname": this.form.realname,
						"idcode": this.form.idcode
					}
				}).then((response)=>{
					if(response && response.data.status == 'SUCCESS') {
						this.$message(response.data.message);
						this.initMe();
					}else {
						this.$message(response.data.message);
					}
				}).catch((err)=>{
					// this.$message(response.message);
				})  
		    }
	    },
	}
</script>

<style scoped>
	.authentication {
		text-align: left;
	}
	.idcard {
		width: 198px;
	    height: 178px;
	    border: 1px dashed #d9d9d9; 
	    border-radius: 6px;
	    margin-left:  10px;
	    display: inline-block;
	}
	.avatar-uploader .el-upload {
	    cursor: pointer;
	    position: relative;
	    overflow: hidden; 
	}
	.avatar-uploader .el-upload:hover {
	    border-color: #409EFF;
	}
	.avatar-uploader-icon {
	    font-size: 28px;
	    color: #8c939d;
	    width: 178px;
	    height: 178px;
	    line-height: 178px;
	    text-align: center;
	}
	.avatar {
	    width: 178px;
	    height: 178px;
	    display: block;
	}
	.idinfo {
		width: 398px;
	    margin-left:  10px;
	    margin-top: 20px;
	}
</style>