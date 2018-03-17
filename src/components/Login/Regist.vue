<template>
	<div class="regist">
		<h1 v-if="loading">激活中...</h1>
		<div v-else>
			<h1 v-if="testSuccess">激活成功，3秒后跳转登录页面</h1>
			<h1 v-else>激活失败，请重新激活</h1>
		</div>
		
	</div>
</template>

<script>
	export default {
		name: 'Regist',
	  	data () {
	  		return {
	  			loading: true,
	  			testSuccess: true
	  		}
	  	},
	  	mounted: function(){
		 	this.testCode();
		},
		methods: {
			testCode() {
				this.$http({
					method: 'post',
					url: 'login/activeUser',
					data: {
						"emailcode": this.$route.query.code
					}
				}).then((response)=>{
					if(response && response.data.status == 'SUCCESS') {
						this.loading = false;
						this.testSuccess = true;
						setTimeout(() => {
							this.$router.push({ path: '/'})
						},3000);;		
					}else {
						this.testSuccess = false;
					}
				}).catch((err)=>{
					this.loading = false;
					this.testSuccess = false;
				})  
			}
		}
	}
</script>

<style scoped>
	
</style>