<template>
	<view class="content">
		<first-nav></first-nav>
		<video-list :list="list"></video-list>
		<tab></tab>
	</view>
</template>

<script>
	import tab from '/components/tab.vue'
	import firstNav from '/components/first-nav.vue'
	import videoList from '/components/video-list.vue'
	export default {
		components: {
			tab,
			firstNav,
			videoList
		},
		data() {
			return {
				list: []
			}
		},
		onLoad() {
			this.getVideos()
		},
		methods: {
			getVideos() {
				uni.request({
					url: "https://cdn.aipicplus.com/bizconf/videogen.json",
					success: (res) => {
						this.list = res.data.ui_block.entries
					}
				})
			}
		}
	}
</script>

<style>
	.content {
		height: 100%;
		width: 100%;
	}
</style>