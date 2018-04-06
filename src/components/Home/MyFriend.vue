<template>
	<div class="my-friend">
		<el-tabs v-model="activeName" @tab-click="handleClick">
		    <el-tab-pane label="我的关注" name="first">
				<ul>
					<li v-for="item in followList">
						
					</li>
				</ul>
		    </el-tab-pane>
		    <el-tab-pane label="我的粉丝" name="second">我的粉丝</el-tab-pane>
		</el-tabs>
	</div>
</template>

<script>
	export default {
		name: 'myFriend',
		data() {
			return {
				activeName: 'first',
				followList: [],
				fanList: []
			}
		},
		mounted: function(){
			this.initFollow();
		},
		methods: {
			initFollow() {
				this.$http({
					method: 'get',
					url: 'friend/getFollow',   			
				}).then((response)=>{
					if(response && response.data.status == 'SUCCESS') {
						this.followList = response.data.object.objects;
					}else {
						this.$message(response.data.message);
					}
				}).catch((err)=>{  
					
				});
			},
			initFan() {
				this.$http({
					method: 'get',
					url: 'friend/getFan',   			
				}).then((response)=>{
					if(response && response.data.status == 'SUCCESS') {
						this.fanList = response.data.object.objects;
					}else {
						this.$message(response.data.message);
					}
				}).catch((err)=>{  
					
				});
			},
			handleClick(tab, event) {
				if(tab.index == 0) {
					this.initFollow()
				}else {
					this.initFan()
				}
			}
		}
	}
</script>

<style>
	.my-friend {
		margin-left: 10px;
	}
</style>