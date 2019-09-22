Mock.mock('/user/tablist', {
    'tabInfos|1-10': [{
        'id|+1': 1,//属性 id 是一个自增数，起始值为 1，每次增 1
        'title': '@EMAIL',//随机邮箱地址
        'content':'<button>@county(true)</button>'
    }]
});

let appvue = new Vue({
    el: '#app',
    data: function() {		
		return {
			collapsed:false, //系统名称折叠
			isCollapse: false,//左边菜单是否折叠
			sysName:'vue系统测试',			
			sysUserName: '',
			sysUserAvatar: '',
			activeIndex: '1', //顶部导航选择索引
			navData: [],//顶部导航			
	        listNav: [] //左部导航
		}
	},
	methods: {
		//退出登录
		logout: function () {
			var _this = this;
			this.$confirm('确认退出吗?', '提示', {
				//type: 'warning'
			}).then(() => {
				sessionStorage.removeItem('user');
				window.location.href="login.html";				
			}).catch(() => {

			});
		},
		//折叠导航栏
		collapse:function(){
			this.collapsed=!this.collapsed;
		},
		showMenu(i,status){
			this.$refs.menuCollapsed.getElementsByClassName('submenu-hook-'+i)[0].style.display=status?'block':'none';
		},
		//顶部菜单选择处理
		handleTopMenuSelect(index, indexPath) {
			console.log('顶部菜单选择：', getObject(this.navData,'id',index));
		},
		//左边菜单选择处理
		handleLeftMenuSelect(index, indexPath){	
			let selectNode = getObject(this.listNav,'id',index);
			if(selectNode==null){
				console.log('未找到对应的导航节点！');
				return;
			}
			console.log(selectNode);
			//多页面--无tab IFrame形式 
			if(selectNode.iframe){
				let iframe='<iframe src ="' + selectNode.url + '" width="100%" height="500px" frameborder="no" border="0"></iframe>';
				$("#main-content").html(iframe);
				return;
			}

			//单页面--无tab 
			if(typeof(mainPageObject)!='undefined' && mainPageObject!=null){
				mainPageObject.destory();
				console.log('destory');
			}
			
			$.ajax({
	             url: selectNode.url,
	             success: function(data){	            
	 				$("#main-content").html(data);
	 				if(typeof(mainPageObject)!='undefined' && mainPageObject!=null){
	 					mainPageObject.loadVueUI(selectNode.para);
	 				}
	             },
	             error:function(e){
	            	 console.log("error");
	             }
	         });						
		},
	},
	mounted() {
		var user = sessionStorage.getItem('user');
		if (user) {
			user = JSON.parse(user);
			this.sysUserName = user.name || '';
			this.sysUserAvatar = user.avatar || '';
		}
		
		//导航信息
		this.navData = getTopMenuData();
		this.listNav = getLeftMenuData();
		//主页面区导航
		this.handleLeftMenuSelect('13')
	}    
});