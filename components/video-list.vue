<template>
	<view class="videoList">
		<view class="swiper-box">
			<swiper class="swiper" :vertical="true">
				<swiper-item v-for="item of videos" :key="item.id">
					<view class="swiper-item" style="color:#000000">
						<video-player :video="item"></video-player>
					</view>
					<view class="text-area">
						<text-area :video="item"></text-area>
					</view>
				</swiper-item>
			</swiper>
		</view>
	</view>
</template>

<script>
	import videoPlayer from '/components/video-player.vue'
	import textArea from '/components/text-area.vue'
	export default {
		name: "video-list",
		components: {
			videoPlayer,
			textArea
		},
		props: [
			'list'
		],
		data() {
			return {
				"videos": []
			};
		},
		watch: {
			list() {
				this.videos = this.list
			}
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

	.text-area {
		z-index: 20;
		position: absolute;
		bottom: 50px;
		left: 10px;
	}
</style>