<template>
	<div>
		<div class="block">
				<span class="demonstration">年</span>
					<el-date-picker
					v-model="years"
					align="right"
					type="year"
					placeholder="选择年"
					@change="fn()"
					value-format="yyyy">
				</el-date-picker>
			</div>
		<h1>港口间设备利用率对比/折线图</h1>
		<ve-line :data="chartData"></ve-line>
		<h1>港口间设备完好率对比/柱状图</h1>
		<ve-histogram :data="chartData2"></ve-histogram>
	</div>
</template>

<script>
	export default {
		name:'',
		data() {
			return {
				chartData: {
				  columns: [],
				  rows: [
					
				  ]
				},
				chartData2: {
				  columns: [],
				  rows: [
					
					
				  ]
				},
				years:'2018'
			};
		},
		methods:{
			chartDatas(){
				// 后端网址
				var url = this.baseUrl+"/devInfo/usage";
				// 传递给后端的数据
				var data = {year:this.years};
				this.$axios.post(url,this.$qs.stringify(data),{
					headers: {
						'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
					}
				}).then(res=>{
					this.chartData=res.data
				})
			},
			chartDatas2(){
				// 后端网址
				var url = this.baseUrl+"/devInfo/intactRatio";
				// 传递给后端的数据
				var data = {year:this.years};
				this.$axios.post(url,this.$qs.stringify(data),{
					headers: {
						'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
					}
				}).then(res=>{
					this.chartData2=res.data
				})
			},
			fn(){
				this.chartDatas();
				this.chartDatas2();
			}
		},
		mounted:function() {
			this.fn()
		}
		
	}
</script>

<style>
h1{
	text-align: center;
}
</style>
