<template>
	<div>
		<h1>流程作业量对比图/折线图</h1>
		<ve-line :data="chartData"></ve-line>
		<h1>设备类别作业量对比图/柱状图</h1>
		<ve-histogram :data="chartData2"></ve-histogram>
		<h1>设备作业作业量对比图/柱状图</h1>
		<ve-histogram :data="chartData3"></ve-histogram>
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
				years:'2018'
			};
		},
		methods:{
			chartDatas(){
				// 后端网址
				var url = this.baseUrl+"/jobAmount/flowAmount";
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
				var url = this.baseUrl+"/jobAmount/devTypeAmount";
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
				var url = this.baseUrl+"/jobAmount/devAmount";
				// 传递给后端的数据
				var data = {year:this.years};
				this.$axios.post(url,this.$qs.stringify(data),{
					headers: {
						'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
					}
				}).then(res=>{
					this.chartData3=res.data
				})
			}
		},
		mounted:function() {
			this.chartDatas();
			this.chartDatas2();
			this.chartDatas3();
		}
		
	}
</script>

<style>
h1{
	text-align: center;
}
</style>
