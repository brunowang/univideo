<template>
	<view class="videoPlayer">
		<video class="video" :controls="false" :autoplay="true" :loop="true" :src="video.src"></video>
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