<template>
	<view class="textArea">
		<view class="author">
			{{video.generate_type}}
		</view>
		<view class="title">
			{{video.title}}
		</view>
		<view class="music">
			{{video.image_url}}
		</view>
	</view>
</template>

<script>
	export default {
		name: "video-info",
		props: [
			'video'
		],
		data() {
			return {

			};
		}
	}
</script>

<style>
	.textArea {
		height: 150px;
		margin-left: 10px;
		color: #FFFFFF;
		width: 150px;
	}

	.author {
		height: 35px;
		line-height: 35px;
		font-size: 15px;
	}

	.title {
		line-height: 22px;
		font-size: 12px;
		width: 100%;
		word-wrap: break-word;
	}

	.music {
		height: 35px;
		line-height: 35px;
		font-size: 12px;
	}
</style>