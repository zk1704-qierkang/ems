<template>
	<div>
		<h1 style="text-align: center">表格综合</h1>
		<center>
			<el-table :data="list">
				<el-table-column prop="devname" label="设备名称" width="80"></el-table-column>
				<el-table-column prop="amount" label="数量" width="80"></el-table-column>
				<el-table-column prop="consume" label="消费" width="120"></el-table-column>
				<el-table-column prop="cost" label="成本" width="120"></el-table-column>
			</el-table>
		</center>
	</div>
</template>

<script>
	export default {
		name:'',
		data() {
			return {
				list:[],
				years:'2018'
			};
		},
		methods:{
			
		},
		mounted:function(){
			 // 后端网址
			var url = this.baseUrl+"/devInfo/cost"
			var data = {year:this.years};
			this.$axios.post(url,this.$qs.stringify(data),{
				headers: {
					'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
				}
			}).then(res=>{
				this.list=res.data
			})
		}
		
	}
</script>

<style>

</style>
