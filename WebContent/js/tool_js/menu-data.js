/**
 * 菜单数据
 */
function getTopMenuData(){
	let topmenu=[
        {
        	id: '1',
            name: "信息服务",
            icon: "el-icon-menu",            	
        },
        {
        	id: '2',
            name: "应急调度",
            icon: "el-icon-tickets"
        },
       {
        	id: '3',
            name: "系统管理",
            icon: "el-icon-message"
        }
    ];
	
	return topmenu;
}

//获取无Tab系统树型菜单数据
function getLeftMenuData(){
	let leftmenu=[
        {
        	id:'1',//主键
        	name:'单页面导航',//标题
        	text:'单页面导航',//显示内容
        	icon:'el-icon-location',//样式
        	url:'',//路径          
        	para:'',//参数
        	iframe:false, //是否为iframe
        	closable:false,//是否可关闭
        	items:[
        		{
	            	id:'11',//主键
	            	name:'表格展现',//标题
	            	text:'表格展现',//显示内容
	            	icon:'el-icon-document',//样式
	            	url:'module/single/user.vue',//路径
	            	para:'mode=1&name=2',//参数
	            	iframe:false, //是否为iframe
	            	closable:false,//是否可关闭
	            	items:[]	            			
        		},
        		{
	            	id:'12',//主键
	            	name:'表单展现',//标题
	            	text:'表单展现',//显示内容
	            	icon:'el-icon-menu',//样式
	            	url:'module/single/Form.vue',//路径
	            	para:'',//参数
	            	iframe:false, //是否为iframe
	            	closable:false,//是否可关闭
	            	items:[]	            			
        		},   
        		{
	            	id:'13',//主键
	            	name:'业务展现',//标题
	            	text:'业务展现',//显示内容
	            	icon:'el-icon-setting',//样式
	            	url:'module/single/Table.vue?mode=1',//路径
	            	para:'',//参数
	            	iframe:false, //是否为iframe
	            	closable:false,//是否可关闭
	            	items:[]	            			
        		},
        		{
	            	id:'14',//主键
	            	name:'图表展现',//标题
	            	text:'图表展现',//显示内容
	            	icon:'el-icon-document',//样式
	            	url:'module/single/echarts.vue',//路径
	            	para:'',//参数
	            	iframe:false, //是否为iframe
	            	closable:false,//是否可关闭
	            	items:[]	            			
        		}    
        	]	            
        },
        {
        	id:'2',//主键
        	name:'多页面导航',//标题
        	text:'多页面导航',//显示内容
        	icon:'el-icon-setting',//样式
        	url:'',//路径          
        	para:'',//参数
        	iframe:false, //是否为iframe
        	closable:false,//是否可关闭
        	items:[
        		{
	            	id:'21',//主键
	            	name:'163展现',//标题
	            	text:'163展现',//显示内容
	            	icon:'el-icon-setting',//样式
	            	url:'http://www.163.com/',//路径
	            	para:'',//参数
	            	iframe:true, //是否为iframe
	            	closable:false,//是否可关闭
	            	items:[]	            			
        		}, 
        		{
	            	id:'22',//主键
	            	name:'验证表单展现',//标题
	            	text:'验证表单展现',//显示内容
	            	icon:'el-icon-menu',//样式
	            	url:'module/single/validateForm.html',//路径
	            	para:'',//参数
	            	iframe:true, //是否为iframe
	            	closable:false,//是否可关闭
	            	items:[]	            			
        		},          		
        ]
    }];

	return leftmenu;
}

//获取多tab系统菜单数据
function getLeftMenuTabData(){
	let leftmenu=[
        {
        	id:'1',//主键
        	name:'单页面导航',//标题
        	text:'单页面导航',//显示内容
        	icon:'el-icon-location',//样式
        	url:'',//路径          
        	para:'',//参数
        	iframe:false, //是否为iframe
        	closable:false,//是否可关闭
        	items:[
        		{
	            	id:'11',//主键
	            	name:'动态组件',//标题
	            	text:'动态组件',//显示内容
	            	icon:'el-icon-document',//样式
	            	url:'module/single-tab/asyncComponent',//路径
	            	para:'mode=1&name=2',//参数
	            	iframe:false, //是否为iframe
	            	closable:false,//是否可关闭
	            	items:[]  
        		},{
	            	id:'12',//主键
	            	name:'tab标签测试',//标题
	            	text:'tab标签测试',//显示内容
	            	icon:'el-icon-document',//样式
	            	url:'module/single-tab/el-tab',//路径
	            	para:'mode=3&name=4',//参数
	            	iframe:false, //是否为iframe
	            	closable:false,//是否可关闭
	            	items:[]  
        		},
        	]	            
        },
        {
        	id:'2',//主键
        	name:'多页面导航',//标题
        	text:'多页面导航',//显示内容
        	icon:'el-icon-setting',//样式
        	url:'',//路径          
        	para:'',//参数
        	iframe:false, //是否为iframe
        	closable:false,//是否可关闭
        	items:[
        		{
	            	id:'21',//主键
	            	name:'163展现',//标题
	            	text:'163展现',//显示内容
	            	icon:'el-icon-setting',//样式
	            	url:'http://www.163.com/',//路径
	            	para:'',//参数
	            	iframe:true, //是否为iframe
	            	closable:false,//是否可关闭
	            	items:[]	            			
        		}, 
        		{
	            	id:'22',//主键
	            	name:'验证表单展现',//标题
	            	text:'验证表单展现',//显示内容
	            	icon:'el-icon-menu',//样式
	            	url:'module/single/validateForm.html',//路径
	            	para:'',//参数
	            	iframe:true, //是否为iframe
	            	closable:false,//是否可关闭
	            	items:[]	            			
        		},          		
        ]
    }];

	return leftmenu;
}