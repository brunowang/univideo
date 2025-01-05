<template>
	<view class="tab">
		<view class="tab-box">
			首页
		</view>
		<view class="tab-box">
			关注
		</view>
		<view class="iconfont icon-jiahao tab-box">
		</view>
		<view class="tab-box">
			消息
		</view>
		<view class="tab-box">
			我
		</view>
	</view>
</template>

<script>
	export default {
		name:"tab",
		data() {
			return {
				
			};
		}
	}
</script>

<style>
.tab {
	height: 50px;
	width: 100%;
	position: fixed;
	bottom: 0;
	left: 0;
}
.tab-box {
	float: left;
	width: 20%;
	color: #FFFFFF;
	background: #000000;
	text-align: center;
	height: 50px;
	line-height: 50px;
	font-size: 20px;
}
</style>