
<template>
	<div class="active-center">
		<el-row :gutter="20">
		  	<el-col :span="6" v-for="(item, index) in activityList" :key="index">
		    	<el-card :body-style="{ padding: '0px' }">
		      		<img :src="item.img" class="image">
		      		<div style="padding: 14px;">
		       			<span>{{item.title}}</span>
		        		<div class="bottom clearfix">
		          			<time class="time">活动时间：{{ item.starttime }}至{{ item.endtime }}</time>
							<address class="address">活动地点：{{ item.place }}</address>
		          			<el-button type="text" class="button" @click="toActiveDetail(item.id)">我要参与</el-button>
		        		</div>
		      		</div>
		    	</el-card>
		  	</el-col>
		</el-row>
		<el-pagination
		    layout="prev, pager, next"
		    :total="1000">
		</el-pagination>
	</div>
</template>

<script>
	import bg1 from '../../assets/image/bg_1.jpg'
	export default {
	  	name: 'ActiveCenter',
	  	data() {
	      	return {
	        	activityList: [
	        		// {
	        		// 	id: 1,
	        		// 	img: bg1,
	        		// 	name: '约会吧！少年',
	        		// 	intro: '百度科普：随着当今社会生活节奏的加快，生活压力的加大，生活在都市的青年男女们发生一夜情的事件呈愈演愈烈之势，移动互联网',
	        		// 	address: '广州天河区五山路',
	        		// 	starttime: '2018-1-9',
	        		// 	endtime: '2018-1-10'
	        		// },
	        		// {
	        		// 	id: 1,
	        		// 	img: bg1,
	        		// 	name: '约会吧！少年',
	        		// 	intro: '百度科普：随着当今社会生活节奏的加快，生活压力的加大，生活在都市的青年男女们发生一夜情的事件呈愈演愈烈之势，移动互联网',
	        		// 	address: '广州天河区五山路',
	        		// 	starttime: '2018-1-9',
	        		// 	endtime: '2018-1-10'
	        		// },
	        		// {
	        		// 	id: 1,
	        		// 	img: bg1,
	        		// 	name: '约会吧！少年',
	        		// 	intro: '百度科普：随着当今社会生活节奏的加快，生活压力的加大，生活在都市的青年男女们发生一夜情的事件呈愈演愈烈之势，移动互联网',
	        		// 	address: '广州天河区五山路',
	        		// 	starttime: '2018-1-9',
	        		// 	endtime: '2018-1-10'
	        		// },
	        		// {
	        		// 	id: 1,
	        		// 	img: bg1,
	        		// 	name: '约会吧！少年',
	        		// 	intro: '百度科普：随着当今社会生活节奏的加快，生活压力的加大，生活在都市的青年男女们发生一夜情的事件呈愈演愈烈之势，移动互联网',
	        		// 	address: '广州天河区五山路',
	        		// 	starttime: '2018-1-9',
	        		// 	endtime: '2018-1-10'
	        		// },
	        		// {
	        		// 	id: 1,
	        		// 	img: bg1,
	        		// 	name: '约会吧！少年',
	        		// 	intro: '百度科普：随着当今社会生活节奏的加快，生活压力的加大，生活在都市的青年男女们发生一夜情的事件呈愈演愈烈之势，移动互联网',
	        		// 	address: '广州天河区五山路',
	        		// 	starttime: '2018-1-9',
	        		// 	endtime: '2018-1-10'
	        		// }
	        	]
	      	}
	    },
	    mounted: function(){
	    	this.initActives();
		},
	    methods: {
	    	initActives() {
	    		this.$http({
					method: 'get',
					url: 'active/getActives',
					params: {
					    "page": 1,
					    "pageSize": 16
					}        	   			
				}).then((response)=>{
					if(response && response.data.status == 'SUCCESS') {
						this.activityList = response.data.object.objects;
					}else {
						this.$message(response.data.message);
					}
				}).catch((err)=>{  
					
				});
	    	},
	    	toActiveDetail(id) {
	    		this.$router.push({ path: 'activeDetail', query: { id: id }})
	    	}
	    }
	}
</script>

<style scoped>
	.active-center {
		width: 1098px;
		margin: 10px auto;
	}
	.el-card {
		text-align: left;
		margin-bottom: 20px;
	}
	.time {
	    font-size: 13px;
	    color: #999;
	    display: block;
	    margin-bottom: 5px;
	} 
	.address {
		font-size: 13px;
	    color: #999;
	    font-style: normal;
	}
	.bottom {
	    margin-top: 13px;
	    line-height: 12px;
	}

	.button {
	    padding: 0;
	    float: right;
	}

	.image {
	    width: 100%;
	    display: block;
	}

	.clearfix:before,
	.clearfix:after {
	    display: table;
	    content: "";
	}
	  
	.clearfix:after {
	    clear: both
	}
</style>