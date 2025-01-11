<template>
	<view class="videoList">
		<view class="swiper-box">
			<swiper class="swiper" :vertical="true">
				<swiper-item v-for="item of list" :key="item.id">
					<view class="swiper-item" style="color:#000000">
						<video-player :video="item"></video-player>
					</view>
				</swiper-item>
			</swiper>
		</view>
	</view>
</template>

<script>
	import videoPlayer from '/components/video-player.vue'
	export default {
		components:{
			videoPlayer
		},
		name:"video-list",
		data() {
			return {
				"list":[
					{
						id:1,
						src:'https://cdn.aipicplus.com/assets/video_gen/video_gen_shake_booty.mp4'
					},
					{
						id:2,
						src:'https://cdn.aipicplus.com/assets/video_gen/video_gen_flirty_wink.mp4'
					},
					{
						id:3,
						src:'https://cdn.aipicplus.com/assets/video_gen/video_gen_strike_pose.mp4'
					}
				]
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
	z-index: 19;
}
</style>