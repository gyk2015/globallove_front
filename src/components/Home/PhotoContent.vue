<template>
	<div class="photo-content">
		<div class="album-info">
			<p class="album-name">xx相册</p>
			<p class="album-intro">这是我的相册哦</p>
		</div>
		<div class="album-content">
			<ul v-for="item in imgList">
				<li>
					<img :src="item.img" alt="">
					<p>{{item.name}}</p>
				</li>
			</ul>
			<el-upload
			  	action="https://jsonplaceholder.typicode.com/posts/"
			  	multiple
			  	:limit="1"
			  	on-success="handleSuccess"
			  	on-error="handleError">
				<i class="el-icon-circle-plus-outline add-img"></i>
			</el-upload>
		</div>
	</div>
</template>

<script>
	import person1 from '../../assets/image/person1.jpg'
	export default {
		name: 'PhotoContent',
	  	data() {
	      	return {
	      		imgList: [
	      			{
	      				img: person1,
	      				name: '16'
	      			},
	      			{
	      				img: person1,
	      				name: '16'
	      			},
	      			{
	      				img: person1,
	      				name: '16'
	      			},
	      			{
	      				img: person1,
	      				name: '16'
	      			},
	      			{
	      				img: person1,
	      				name: '16'
	      			},
	      			{
	      				img: person1,
	      				name: '16'
	      			},
	      			{
	      				img: person1,
	      				name: '16'
	      			},
	      			{
	      				img: person1,
	      				name: '16'
	      			}
	      		]
	      	}
	    },
	    methods: {
	    	handleSuccess() {

	    	},
	    	handleError() {
	    		
	    	}
	    }
	}
</script>

<style scoped>
	.photo-content {
		margin-left: 60px;

	}
	.album-info {
		text-align: left;
		border-bottom: 1px solid #9a9791;
	}
	.album-name {
		font-size: 25px;
	}
	.album-intro {
		font-size: 15px;
		color: #9a9791;
	}
	.album-content {
		width: 740px;
		position: relative;
	}
	.album-content ul {
		list-style: none;
		float: left;
		overflow: hidden;
	}
	img {
		width: 159px;
		height: 119px;
	}
	.add-img {
		font-size: 35px;
		color: #409EFF;
		position: absolute;
		right: 0;
		padding: 10px;
		cursor: pointer;
	}
</style>