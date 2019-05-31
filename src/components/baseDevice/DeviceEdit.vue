<template>
		<div style='text-align: center;'>
		<h1>修改人员信息</h1>
		<el-row>
		  <el-col :span="12"> <el-input style='width:300px;margin-top: 20px;' placeholder='请输入设备名称' v-model='devname'></el-input> </el-col>
		</el-row>
		<el-row>
		  <el-col :span="12"> <el-input style='width:300px;margin-top: 20px;' placeholder='请输入投入时间' v-model='devdate'></el-input> </el-col>
		</el-row>
		<el-row>
		  <el-col :span="12"> <el-input style='width:300px;margin-top: 20px;' placeholder='请输入责任人' v-model='devuser'></el-input> </el-col>
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
		<el-row>
		  <el-select v-model="typeid" placeholder="请选择">
		  	<el-option
		  	 v-for="item in arrs"
		  	:label="item.typename"
		  	:value="item.typeid">
		  	</el-option>
		  </el-select>	
		</el-row>
		<el-row style='margin-top: 20px;text-align: center;'>
		  <el-col :span="24" > <el-button type='primary' @click='saveEdit'>确定</el-button> <el-button @click='cancel'>取消</el-button> </el-col>
		</el-row>
	</div>
</template>

<script>
	export default {
		name:'',
		data() {
			return {
				arr:[],
				arrs:[],
				devname:'',
				devdate:'',
				devuser:'',
				typeid:'',
				compid:'',
				devid:''
			};
		},
		methods:{
			saveEdit(){
				// 后端网址
				var url = this.baseUrl+"/baseDevice/update"
				// 传递给后端的数据
				var data = {devid:this.devid,devname:this.devname,devdate:this.devdate,devuser:this.devuser,typeid:this.typeid,compid:this.compid};
				this.$axios.post(url,this.$qs.stringify(data),{
					headers: {
						'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
					}
				}).then(res=>{
					// res是后端的响应
					this.$message("更新成功");
					this.$router.push({path:'/DeviceList'});
				})
			},
			cancel(){
				this.$router.go(-1);
			},
			devtype(){
				// 接收路由传递的数据
				var  typeid= this.$route.params.row;
				// 后端网址
				
				var url = this.baseUrl+"/baseDevice/load"
				
				// 传递给后端的数据
				var data = {typeid:typeid};
				this.$axios.post(url,this.$qs.stringify(data),{
					headers: {
						'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
					}
				}).then(res=>{
					this.arrs= res.data;
				})
				var url = this.baseUrl+"/baseDevtype/list"
				
				this.$axios.post(url,{
					headers: {
						'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
					}
				}).then(res=>{
					this.arrs= res.data;
				})
			}
		},
		mounted:function(){
			// 接收路由传递的数据
			var devid = this.$route.params.row;
			
			// 后端网址
			var url = this.baseUrl+"/baseDevice/load"
			// 传递给后端的数据
			var data = {devid:devid};
			this.$axios.post(url,this.$qs.stringify(data),{
				headers: {
					'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
				}
			}).then(res=>{
				// 回显
				var obj=res.data;
				this.devname = obj.devname;
				this.devdate = obj.devdate;
				this.devuser = obj.devuser;
				this.typeid = obj.typeid;
				this.compid = obj.compid;
				this.devid=obj.devid;
			})
			var url = this.baseUrl+"/baseCompany/list"
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
