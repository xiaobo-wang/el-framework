export default {  
	props: ['posts'],
	data: function () {
	    return {
	    	input:'',
	    	value:false,
	    	radio:false,
	    	selectedPost: null,
	          tableData: [{
	              date: '2016-05-02',
	              name: '王小虎',
	              address: '上海市普陀区金沙江路 1518 弄'
	            }, {
	              date: '2016-05-04',
	              name: '王小虎',
	              address: '上海市普陀区金沙江路 1517 弄'
	            }, {
	              date: '2016-05-01',
	              name: '王小虎',
	              address: '上海市普陀区金沙江路 1519 弄'
	            }, {
	              date: '2016-05-03',
	              name: '王小虎',
	              address: '上海市普陀区金沙江路 1516 弄'
	            }]	    	
	    }
	  },
	template: '',
	mounted() {
		console.log(this.posts);   		    	
	},
	destroyed() {
		console.log('destroyed compa');
	}
}