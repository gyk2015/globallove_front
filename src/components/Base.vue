<template>
	<div class="base">
		<div class="top-nav">
			<a href="#" class="logo">Globallove</a>
			<div class="nav">
				<el-menu :default-active="activeIndex" class="menu" mode="horizontal">
				  	<router-link to="/base/index"><el-menu-item index="1">首页</el-menu-item></router-link>
				  	<router-link to="/base/home/personalData"><el-menu-item index="2">个人中心</el-menu-item></router-link>
				  	<router-link to="/base/activeCenter"><el-menu-item index="3">活动中心</el-menu-item></router-link>
				  	<router-link to="/base/news"><el-menu-item index="4">资讯天地</el-menu-item></router-link>
				</el-menu>
			</div>
		</div>
    	<router-view></router-view>
	</div>
</template>

<script>

	export default {
	  	name: 'Base',
	  	data() {
	      	return {
	        	activeIndex: '1'
	      	};
	    },
	}
</script>

<style scoped>
	.top-nav {
		width: 1098px;
		margin: 0 auto;
		display: flex;
		display: -webkit-flex; /* Safari */
		justify-content: space-between;
	}
	.logo {
		display: inline-block;
		height: 60px;
		width: 112px;
		background: url(../assets/image/logo.jpg) no-repeat;
		background-size: contain;
		text-indent: -9999em;
	}
	.nav {
		display: inline-block;
	}
</style>
