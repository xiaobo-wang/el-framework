<div id="user-ui">
	<!--工具条-->
	<el-row>
		<el-col :span="24" class="toolbar" style="padding-bottom: 0px;">
			<el-form :inline="true" :model="filters">
				<el-form-item>
					<el-input v-model="filters.name" placeholder="姓名"></el-input>
				</el-form-item>
				<el-form-item>
					<el-button type="primary" v-on:click="getUser">查询</el-button>
				</el-form-item>
			</el-form>
		</el-col>
	</el-row>
	<!--列表-->
	<template>
		<el-table :data="users" highlight-current-row v-loading="loading" style="width: 100%;">
			<el-table-column type="index" width="60">
			</el-table-column>
			<el-table-column prop="name" label="姓名" width="120" sortable>
			</el-table-column>
			<el-table-column prop="sex" label="性别" width="100" :formatter="formatSex" sortable>
			</el-table-column>
			<el-table-column prop="age" label="年龄" width="100" sortable>
			</el-table-column>
			<el-table-column prop="birth" label="生日" width="120" sortable>
			</el-table-column>
			<el-table-column prop="addr" label="地址"  sortable>
			</el-table-column>
		</el-table>
	</template>
</div>
<script>
var mainPageObject = new Object;//对于单视图时全局页面对象
let uservue;	//单页面局部Vue对象

//注销
mainPageObject.destory = function() {
	uservue.$destroy();	//注销Vue
	$('#user-ui').remove();//删除页面元素
	mainPageObject = null;  //注销全局页面对象
}

//页面初始化加载
mainPageObject.loadVueUI = function(param){
 console.log(param);
 uservue = new Vue({
        el: '#user-ui',
        data: function() {
			return {
				filters: {
					name: ''
				},
				loading: false,
				users: [
				]
			}
		},
		methods: {
			//性别显示转换
			formatSex: function (row, column) {
				return row.sex == 1 ? '男' : row.sex == 0 ? '女' : '未知';
			},
			//获取用户列表
			getUser: function () {
				let para = {
					name: this.filters.name
				};
				
				this.loading = true;			
				this.getUserList(para).then((res) => {
					this.users = res.data.users;
					this.loading = false;
				});
			},
			getUserList:function(params){
				return axios.get(`/user/list`, { params: params });
			}
		},
		mounted() {
			this.getUser();
		}
	});
}
</script>