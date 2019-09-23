/**
 * 
 */
export default {  
	props: ['para'],
	data: function () {
	    return {
	    	info: this.para,
	    	tabPosition: 'left'
	    }
	  },
	template: '',
	mounted() {
		console.log(this.info);
	},
	destroyed() {
	}
}