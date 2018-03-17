<template>
	<div class="active-detail">
		<h2>{{ active.title }}</h2>
		<div>
			<div class="content-left">
				<img :src="active.activeimg" alt="">
			</div>
			<div class="content-right">
				<p><i class="el-icon-date active-icon"></i>活动时间：{{active.starttime}}至{{active.endtime}}</p>
				<p><i class="el-icon-location active-icon"></i>活动地点：{{active.place}}</p>
				<p><i class="el-icon-phone-outline active-icon"></i>联系方式：{{active.contact}}</p>
				<p><i class="el-icon-time active-icon"></i>报名截止时间：{{active.enddate}}</p>
				<p class="price">￥{{active.pay}}</p>
				<el-button type="danger" plain @click="toActiveEnroll(active.id)">立即参加</el-button>
			</div>
		</div>
		<div class="active-info">
			<p class="active-info__title">活动介绍</p>
			<div>
				<p>{{active.intro}}</p>
			</div>
			<p class="active-info__title">报名要求</p>
			<div>
				<p>{{active.requirement}}</p>
			</div>
		</div>
		<div class="active-join">
			<p class="active-join__title">最新报名会员</p>
			<ul>
				<li class="participant-list" v-for="item in participantList">
					<img :src="item.img" alt="">
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	import bg1 from '../../assets/image/bg_1.jpg'
	import person1 from '../../assets/image/person1.jpg'
	export default {
		name: 'ActiveDetail',
	  	data() {
	      	return {
	      		active: {},
	      		participantList: [
	      			{
	      				img: person1
	      			},
	      			{
	      				img: person1
	      			},
	      			{
	      				img: person1
	      			},
	      			{
	      				img: person1
	      			},
	      			{
	      				img: person1
	      			},
	      			{
	      				img: person1
	      			},
	      		],
	      	}
	    },
	    mounted: function(){
	    	this.initActive();
	    	this.initActiveEnrollUser();
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
	    	initActiveEnrollUser() {
				this.$http({
					method: 'get',
					url: 'activeEnroll/getEnrollUser',
					params: {
					    "activeid": this.$route.query.id,
					    "page": 1,
					    "pageSize": 12
					}        	   			
				}).then((response)=>{
					if(response && response.data.status == 'SUCCESS') {
						// this.active = response.data.object;
					}else {
						this.$message(response.data.message);
					}
				}).catch((err)=>{  
					
				});
	    	},
	    	toActiveEnroll(id) {
	    		this.$router.push({ path: 'activeEnroll', query: { id: id }})
	    	}
	    }
	}	
</script>

<style scoped>
	.active-detail {
		width: 1098px;
		margin: 10px auto;
	}
	.content-left {
		padding: 10px;
		height: 228px;
		width: 314px;
		float: left;
	}
	.content-left img {
		width: 100%;
		height: 100%;
	}
	.content-right {
		text-align: left;
		float: left;
		width: 740px;
		margin-left: 20px;
	}
	.active-icon {
		margin-right: 5px;
	}
	.price {
		color: red;
		font-weight: bold;
		font-size: 20px;
	}
	.active-info {
		width: 758px;
		float: left;
	}
	.active-info__title {
		text-align: left;
		font-weight: bold;
		border-bottom: 2px solid #ff4f61;
		line-height: 28px;
	}
	.active-join {
		width: 300px;
		margin-left: 40px;
		float: left;
	}
	.active-join__title {
		text-align: left;
		font-weight: bold;
		border-bottom: 2px solid #ff4f61;
		line-height: 28px;
	}
	.active-join ul {
		list-style: none;
		padding-left: 0;
	}
	.participant-list {
		float: left;
		padding: 3px 5px;
	}
	.participant-list img {
		width: 50px;
		height: 50px;
	}
</style>