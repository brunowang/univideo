<template>
	<view class="videoPlayer">
		<video class="video" src="https://cdn.aipicplus.com/assets/video_gen/video_gen_strike_pose.mp4" controls
			autoplay muted playsinline loop></video>
	</view>
</template>

<script>
	export default {
		name: "video-player",
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