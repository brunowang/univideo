<template>
	<view class="videoList">
		<view class="swiper-box">
			<swiper class="swiper" :vertical="true">
				<swiper-item>
					<view class="swiper-item">
						<video-player01></video-player01>
					</view>
				</swiper-item>
				<swiper-item>
					<view class="swiper-item">
						<video-player02></video-player02>
					</view>
				</swiper-item>
				<swiper-item>
					<view class="swiper-item">
						<video-player03></video-player03>
					</view>
				</swiper-item>
			</swiper>
		</view>
	</view>
</template>

<script>
	import videoPlayer01 from '/components/video-player01.vue'
	import videoPlayer02 from '/components/video-player02.vue'
	import videoPlayer03 from '/components/video-player03.vue'
	export default {
		components:{
			videoPlayer01,
			videoPlayer02,
			videoPlayer03
		},
		name:"video-list",
		data() {
			return {
				
			};
		}
	}
</script>

<style>
.videoList {
	height: 100vh;
	width: 100vw;
}
.swiper-box {
	height: 100%;
	width: 100%;
}
.swiper {
	height: 100%;
	width: 100%;
}
.swiper-item {
	height: 100%;
	width: 100%;
}
</style>