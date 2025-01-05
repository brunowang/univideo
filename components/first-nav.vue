<template>
	<view class="firstNav">
		<view class="iconfont icon-sousuo icon">
		</view>
		<view class="middle">
			<view class="text">
				推荐
			</view>
			<view class="text">
				同城
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name:"first-nav",
		data() {
			return {
				
			};
		}
	}
</script>

<style>
.firstNav {
	width: 100%;
	position: fixed;
	top: 25px;
	left: 0px;
	height: 35px;
	line-height: 35px;
	margin: 0 auto;
	background: #000000;
}
.icon {
	position: absolute;
	top: 0px;
	left: 0px;
	color: #FFFFFF;
	width: 20%;
	text-align: center;
	font-size: 20px;
}
.middle {
	text-align: center;
}
.text {
	display: inline;
	color: #FFFFFF;
	margin: 0px 10px;
}
</style>