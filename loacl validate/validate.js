/*
* @Author: hc
* @Date:   2018-02-23 11:15:27
* @Last Modified by:   hc
* @Last Modified time: 2018-02-23 11:33:41
*/
(function(window){

	window.My = window.My || {};

	window.My.Validate = {

		init:function(){
			this.code = "";
		},
		initEvent:function(){

		},
		/**
		 * @Author   hc
		 * @DateTime 2018-02-23
		 * @Describe	创建验证码
		 * @return   {[type]}   [description]
		 */
		createCode:function(){
			this.code = "";
		    var codeLength = 4;//验证码的长度   
		    var checkCode = document.getElementById("checkCode");
		    // var selectChar = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9,'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z');
		    var selectChar = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9);
		    //所有候选组成验证码的字符，当然也可以用中文的   
		 
		    for (var i = 0; i < codeLength; i++) {
		        var charIndex = Math.floor(Math.random() * 10);
		        this.code += selectChar[charIndex];
		    }
		    //alert(code);
		    if (checkCode) {
		        checkCode.className = "code";
		        checkCode.value = this.code;
		    }
		},
		/**
		 * @Author   hc
		 * @DateTime 2018-02-23
		 * @Describe 验证
		 * @return   {[type]}   [description]
		 */
		validate:function(){
			var inputCode = document.getElementById("input1").value;
		    if (inputCode.length <= 0) {
		        alert("请输入验证码！");
		    } else if (inputCode != this.code) {
		        alert("验证码输入错误！");
		    	createCode();//刷新验证码   
		   
		    } else {
		    	alert("^-^ OK");
		    }
		}
	}
	My.Validate.init();
})(window)