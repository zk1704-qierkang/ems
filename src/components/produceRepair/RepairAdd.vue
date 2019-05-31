<template>
	<div style='text-align: center;'>
		<h1>修改人员信息</h1>
		<el-row>
		    <el-select v-model="devid" placeholder="请选择">
		  	<el-option
		  	 v-for="item in arr"
		  	:label="item.devname"
		  	:value="item.devid">
		  	</el-option>
		  </el-select>	
		  <el-col :span="12"> <el-input style='width:300px;margin-top: 20px;' placeholder='请输入故障原因' v-model='cause'></el-input> </el-col>
		</el-row>
		<el-row>
		  <el-col :span="12"> <el-input style='width:300px;margin-top: 20px;' placeholder='请输入维修费用' v-model='cost'></el-input> </el-col>
		  <el-col :span="12"> <el-input style='width:300px;margin-top: 20px;' placeholder='请输入故障时间' v-model='repairdate'></el-input> </el-col>
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
				repairid:'',
				devid:'',
				cause:'',
				cost:'',
				repairdate:'',
				devname:''

			};
		},
		methods:{
			saveAdd(){
				// 后端网址
				var url = this.baseUrl+"/produceRepair/insert"
				// 传递给后端的数据
				var data = {repairid:this.repairid,cost:this.cost,devid:this.devid,cause:this.cause,repairdate:this.repairdate,devname:this.devname};
				this.$axios.post(url,this.$qs.stringify(data),{
					headers: {
						'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
					}
				}).then(res=>{
					// res是后端的响应
					this.$message("添加成功");
					this.$router.push({path:'/RepairList'});
				})
			},
			cancel(){
				this.$router.go(-1);
			}
		},
		mounted:function(){
			// 接收路由传递的数据
			var repairid = this.$route.params.row;
			// 后端网址
			var url = this.baseUrl+"/produceRepair/load"
			// 传递给后端的数据
			var data = {repairid:repairid};
			this.$axios.post(url,this.$qs.stringify(data),{
				headers: {
					'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
				}
			}).then(res=>{
				// 回显
// 				var obj=res.data;
// 				this.cname = obj.cname;
// 				this.username = obj.username;
// 				this.password = obj.password;
// 				this.telno = obj.telno;
// 				this.email = obj.email;
// 				this.sex = obj.sex;
// 				this.compid = obj.compid;
// 				this.userid = obj.userid;
			})
			var url = this.baseUrl+"/baseDevice/list"
			this.$axios.post(url,{
				headers: {
					'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
				}
			}).then(res=>{
				this.arr= res.data;
			})
			
		}
		
	}
</script>

<style>

</style>
