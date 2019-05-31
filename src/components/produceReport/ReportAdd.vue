<template>
	<div style='text-align: center;'>
		<h1>修改人员信息</h1>
		<el-row>
		  <el-col :span="12"> <el-input style='width:300px;margin-top: 20px;' placeholder='请输入船队名称' v-model='shipname'></el-input> </el-col>
		</el-row>
		<el-row>
		  <el-col :span="12"> <el-input style='width:300px;margin-top: 20px;' placeholder='请输入报告人' v-model='reportuser'></el-input> </el-col>
		</el-row>
		<el-row>
		  <el-select v-model="compid" placeholder="请选择">
		  	<el-option
		  	 v-for="item in arr"
		  	:label="item.compname"
		  	:value="item.compid">
		  	</el-option>
		  </el-select>	
		</el-row>
		<el-row style='margin-top: 20px;text-align: center;'>
		  <el-col :span="24" > <el-button type='primary' @click='saveAdd'>确定</el-button> <el-button @click='cancel'>取消</el-button> </el-col>
		</el-row>
	</div>
</template>

<script>
	export default {
		name:'',
		data() {
			return {
				arr:[],
				reportid:'',
				shipname:'',
				capacity:'',
				reportuser:'',
				compid:''

			};
		},
		methods:{
			saveAdd(){
				// 后端网址
				var url = this.baseUrl+"/produceReport/insert"
				// 传递给后端的数据
				var data = {reportid:this.reportid,shipname:this.shipname,reportuser:this.reportuser,compid:this.compid};
				this.$axios.post(url,this.$qs.stringify(data),{
					headers: {
						'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
					}
				}).then(res=>{
					// res是后端的响应
					this.$message("添加成功");
					this.$router.push({path:'/ReportList'});
				})
			},
			cancel(){
				this.$router.go(-1);
			},
			
			},
		mounted:function(){
			// 接收路由传递的数据
			var reportid = this.$route.params.row;
			// 后端网址
			var url = this.baseUrl+"/produceReport/load"
			// 传递给后端的数据
			var data = {reportid:reportid};
			this.$axios.post(url,this.$qs.stringify(data),{
				headers: {
					'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
				}
			}).then(res=>{
				this.arr= res.data;
			})
			var url = this.baseUrl+"/baseCompany/list"
			this.$axios.post(url,{
				headers: {
					'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
				}
			}).then(res=>{
				this.arr= res.data;
			})
			this.devtype();
			
		}
		
	}
</script>

<style>

</style>
