<template>
	<view class="home">
		<text>首页</text>
		<view class="proCanvas">
			<canvas canvas-id="myCanvas" :style="{ width: canvasW + 'px', heigth: canvasH + 'px'}"></canvas>
		</view>
	</view>
</template>

<script>
	import uQRCode from '../../components/Sansnn-uQRCode/uqrcode.js'
	export default {
		data() {
			return {
				canvasH: 200,
				canvasW: 200,
			}
		},
		onLoad() {	
			// console.log(this.$store)
			// 二维码操作
			uQRCode.make({
				canvasId: 'myCanvas',
				componentInstance: this,
				text: 'uQRcode',
				size: 90,
				margin: 4,
				backgroundColor: '#ffffff',
				foregroundColor: '#000000',	
				 success: res => {
				    console.log(res)
					let ctx = uni.createCanvasContext('myCanvas')
					ctx.drawImage(res ,20 ,20 ,90 ,90)
					ctx.draw()
				}
			})
		},
		methods: {

		}
	}
</script>

<style>
	
</style>
