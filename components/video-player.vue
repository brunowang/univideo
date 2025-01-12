<template>
	<view class="videoPlayer">
		<video class="video" :controls="false" :autoplay="true" :loop="true" :src="video.video_url"></video>
	</view>
</template>

<script>
	export default {
		name: "video-player",
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
	.videoPlayer {
		height: 100%;
		width: 100%;
	}

	.video {
		height: 100%;
		width: 100%;
	}
</style>