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
		<h1>流程作业量对比图/折线图</h1>
		<ve-line :data="chartData"></ve-line>
		<h1>设备类别作业量对比图/柱状图</h1>
		<ve-histogram :data="chartData2"></ve-histogram>
		<h1>设备作业作业量对比图/柱状图</h1>
		<ve-histogram :data="chartData3"></ve-histogram>
		<h1>流程作业量对比图/折线图</h1>
		<ve-line :data="chartData4"></ve-line>
		<h1>设备类别作业量对比图/柱状图</h1>
		<ve-candle :data="chartData5"></ve-candle>
		<h1>设备作业作业量对比图/柱状图</h1>
		<ve-radar :data="chartData6"></ve-radar>
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
				chartData3: {
				  columns: [],
				  rows: [
					
					
				  ]
				},
				chartData4: {
				  columns: [],
				  rows: [
					
				  ]
				},
				chartData5: {
				  columns: [],
				  rows: [
					
					
				  ]
				},
				chartData6: {
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
				var url = this.baseUrl+"/energyConsume/flowConsume";
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
				var url = this.baseUrl+"/energyConsume/devTypeConsume";
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
			chartDatas3(){
				// 后端网址
				var url = this.baseUrl+"/energyConsume/devConsume";
				// 传递给后端的数据
				var data = {year:this.years};
				this.$axios.post(url,this.$qs.stringify(data),{
					headers: {
						'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
					}
				}).then(res=>{
					this.chartData3=res.data
				})
			},
			chartDatas4(){
				// 后端网址
				var url = this.baseUrl+"/energyConsume/electricConsume";
				// 传递给后端的数据
				var data = {year:this.years};
				this.$axios.post(url,this.$qs.stringify(data),{
					headers: {
						'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
					}
				}).then(res=>{
					this.chartData4=res.data
				})
			},
			chartDatas5(){
				// 后端网址
				var url = this.baseUrl+"/energyConsume/waterConsume";
				// 传递给后端的数据
				var data = {year:this.years};
				this.$axios.post(url,this.$qs.stringify(data),{
					headers: {
						'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
					}
				}).then(res=>{
					this.chartData5=res.data
				})
			},
			chartDatas6(){
				// 后端网址
				var url = this.baseUrl+"/energyConsume/oilConsume";
				// 传递给后端的数据
				var data = {year:this.years};
				this.$axios.post(url,this.$qs.stringify(data),{
					headers: {
						'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
					}
				}).then(res=>{
					this.chartData6=res.data
				})
			},
			fn(){
				this.chartDatas();
				this.chartDatas2();
				this.chartDatas3();
				this.chartDatas4();
				this.chartDatas5();
				this.chartDatas6();
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
