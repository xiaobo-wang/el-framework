import store from './js/tool_js/vuex/store.js';

let loginvue = new Vue({
    el: '#app-login',
    store,
    data: function() {		  
      return {
        logining: false,
        ruleForm2: {
          account: 'admin',
          checkPass: '123456'
        },
        rules2: {
          account: [
            { required: true, message: '请输入账号', trigger: 'blur' },
            //{ validator: validaePass }
          ],
          checkPass: [
            { required: true, message: '请输入密码', trigger: 'blur' },
            //{ validator: validaePass2 }
          ]
        },
        checked: true
      };
    },
    methods: {
      handleReset2() {
        this.$refs.ruleForm2.resetFields();
      },
      handleSubmit2(ev) {
    	  console.log(ev);
        var _this = this;
        this.$refs.ruleForm2.validate((valid) => {
          if (valid) {
            this.logining = true;
            var loginParams = { username: this.ruleForm2.account, password: this.ruleForm2.checkPass };
            getAxiosUrl('login',loginParams).then(data => {
              this.logining = false;
              let { msg, code, user } = data;
              if (code !== 200) {
                this.$message({
                  message: msg,
                  type: 'error'
                });
              } else {
                sessionStorage.setItem('user', JSON.stringify(user));
                this.$message({
                    message: msg,
                    type: 'success'
                  });
                
                if(ev.target.innerText == "无Tab页签系统登录"){
                	window.location.replace("main.html");
                }
                else{
                	window.location.replace("tab-main.html");
                }                
              }
            });
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      }
    }
  });