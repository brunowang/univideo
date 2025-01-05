<template>
	<view class="videoList">
		<view class="swiper-box">
			<swiper class="swiper" :vertical="true">
				<swiper-item>
					<view class="swiper-item">
						我是第一页
					</view>
				</swiper-item>
				<swiper-item>
					<view class="swiper-item">
						我是第二页
					</view>
				</swiper-item>
				<swiper-item>
					<view class="swiper-item">
						我是第三页
					</view>
				</swiper-item>
			</swiper>
		</view>
	</view>
</template>

<script>
	export default {
		name:"video-list",
		data() {
			return {
				
			};
		}
	}
</script>

<style>
.videoList {
	height: 100%;
	width: 100%;
}
</style>