<template>
	<div>
		<h1 style="text-align: center">设备信息</h1>
		<div style="text-align: left;margin:0 0 20px 50px;">
			<el-input style='width:160px' placeholder='设备类别' v-model='search_devname'></el-input>
			<el-input style='width:160px' placeholder='所属企业' v-model='search_devuser'></el-input>
			<el-button @click='search'>查询</el-button>
			<el-button @click='add'>添加</el-button>
		</div>
		<center>
			<el-table :data="list">
				<el-table-column prop="flowid" label="ID" width="80"></el-table-column>
				<el-table-column prop="flowname" label="流程名称" width="80"></el-table-column>
				<el-table-column prop="dljname" label="斗轮机" width="80"></el-table-column>
				<el-table-column prop="zcjname" label="装船机" width="180"></el-table-column>
				<el-table-column prop="pdjname" label="皮带机" width="120"></el-table-column>
				<el-table-column prop="compname" label="所属公司" width="120"></el-table-column>
				<el-table-column label="操作" width="230">
				  <template slot-scope="scope">
					<el-button size="mini" @click="update(scope.row)">编辑</el-button>
					<el-button size="mini" type='danger' @click="del(scope.row.devid)">删除</el-button>
				  </template>
				</el-table-column>
			</el-table>
		</center>
	</div>
</template>

<script>
	export default {
		name:'',
		data() {
			return {
				search_devname:'',
				search_devuser:'',
				list:[]
			};
		},
		methods:{
			update(row){
				// 跳转
				this.$router.push({name:'FlowEdit',params:{row:row.devid}})
			},
			del(devid){
				// 后端网址
				var url = this.baseUrl+"/baseFlow/delete"
				// 传递给后端的数据
				var data = {devid:devid};
				this.$axios.post(url,this.$qs.stringify(data),{
					headers: {
						'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
					}
				}).then(res=>{
					// res是后端的响应
					this.search()
					this.$message("删除成功");
				})
			},
			add(){
				// 路由跳转
				this.$router.push({path:'/FlowAdd'})
			},
			search(){
				// 后端网址
				var url = this.baseUrl+"/baseFlow/search"
				// 传递给后端的数据
				var data = {devname:this.search_devname,username:this.search_devuser};
				this.$axios.post(url,this.$qs.stringify(data),{
					headers: {
						'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
					}
				}).then(res=>{
					// res是后端的响应
					this.list=res.data
				})
			}
		},
		mounted:function(){
			 // 后端网址
			var url = this.baseUrl+"/baseFlow/list"
			this.$axios.post(url,{
				headers: {
					'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
				}
			}).then(res=>{
				this.list= res.data;
			})
		}
		
	}
</script>

<style>

</style>
