Vue.component('tab-iframe', {
	 props: ['link','para'],
	 data: function () {
		  return {
		    url: this.link,
		    info: this.para
		  }
		},
  	 template: '<iframe :src="url" width="100%" height="500px" frameborder="no" border="0"></iframe>'
});

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
	        listNav: [], //左部导航
	        tabsNav: [],//主区域导航
	        activeTab:'1-1', //当前Tab
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
		//展开导航栏
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
			
			//根据Tab集合，是否存在当前的节点		     
		     if (this.activeTab === index) { //当前选择节点为当前活动选项
		    	 return;
		     }
		     
		    var existNode = getObject(this.tabsNav,'id',index);
		    if(existNode != null){ //当前选择节点在已有的集合中存在
		    	this.activeTab = existNode.id;
		    	return;
		    }			
			
			if(selectNode.iframe){//多页面--tab IFrame形式 
				this.tabsNav.push(selectNode);
			} else { //单页面--tab形式 
				let componentNm = selectNode.url.replace(/\//g,"");
				console.log(componentNm);
				let host = 'http://localhost:8080/el-framework/';
				Vue.component(componentNm,function (resolve, reject) {
			  		  $.ajax({
			  	        url: host + selectNode.url + ".html",
			  	        success: function(respose){	 
			  	        import(host + selectNode.url + ".js")
			  	        	.then((module) => {
			  	        		module.default.template=respose;
			  	        		//console.log(module);	  	        		
			  	        		resolve(module.default);
			  	        	});
			  	        },
			  	        error:function(e){
			  	       	 console.log("error");
			  	        }
			  		  });		
			    	});	
				
				this.tabsNav.push(selectNode);
			}	
			
			this.activeTab = selectNode.id;	
		},
	    //移除tab选项卡
	    removeTab(targetName) {
			let tabs = this.tabsNav;
			for(var index=1;index<tabs.length;index++){
				if (tabs[index].id === targetName) {
					this.activeTab = tabs[index - 1].id;
					tabs.splice(index,1); 
					break;
				}
			}
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
		this.listNav = getLeftMenuTabData();
		this.tabsNav = [{
     			id:'1-1',
	        	name: '首页',
	        	text: '首页',
		        icon:'el-icon-date',
		        url: 'http://www.baidu.com/',
		        para:'',
		        closable:false,//是否可关闭
		        iframe:true
		      }];//主区域导航
		//主页面区导航
		//this.handleLeftMenuSelect('13')
	}    
});