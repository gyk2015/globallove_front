<template>
	<div class="photo">
		<div class="album">
			<router-link to="/base/home/photo" class="photoprint"></router-link><p>生活相册</p>
		</div>
		<div class="album">
			<router-link to="/base/home/photo" class="photoprint"></router-link><p>旅游相册</p>
		</div>
		<div class="album">
			<router-link to="/base/home/photo" class="private-photo photoprint"></router-link><p>私密相册</p>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'Photo',
	  	data() {
	      	return {
	      		dialogFormVisible: false,
	      		newAlbum: {
	      			name: '',
	      			describe: ''
	      		}
	      	}
	    },
	    methods: {
	    	createAlbum() {
	    		this.dialogFormVisible = true;
	    	},
	    	addNewAlbum() {
	    		this.dialogFormVisible = false;
	    		this.$router.push({ path: 'photoContent', query: { albumId: 123 }})
	    	}
	    }
	}
</script>

<style scoped>
	.photo {
		margin-left: 60px;
		text-align: left;
		font-size: 15px;
		display: flex;
		display: -webkit-flex; /* Safari */
		flex-wrap: wrap;
	}
	.album {
		width: 150px;
		height: 150px;
		border: 1px dashed #d9d9d9;
		margin-right: 30px;
		margin-bottom: 60px;
		border-radius: 6px;
	}
	.album:hover {
		border-color: #409EFF;
	}
	.photoprint {
		width: 100%;
		height: 100%;
		display: inline-block;
	}
	.album p {
		text-align: center;
	}
  	.avatar-uploader-icon {
    	font-size: 28px;
    	color: #8c939d;
    	width: 150px;
    	height: 150px;
   		line-height: 150px;
    	text-align: center;
  	}
  	.avatar-uploader-icon:hover {
  		cursor: pointer;
  	}
</style>