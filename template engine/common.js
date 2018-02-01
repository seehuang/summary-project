/**
 * @Author   hc
 * @DateTime 2018-01-31
 * @Describe 前端字符串模板替换工具，一个简单的前端模板引擎
 * @return   {[type]}   [description]
 */
(function(window){
	/**
	 * 声明一个全局对象My，作用于整个多页应用，后期应该配置在统一的config.js中
	 * @type {Object}
	 */
    window.My = window.My || {};

	My.Common = {

		/**
		 * @Author   hc 
		 * @DateTime 2018-01-31
		 * @Describe  调用此函数需要引入jQuery
		 * 调用此函数是返回编译好的html。原理是利用正则表达式的replace来替换html模板中花括号括起来的{value}变量
		 * 动态数据为第二个参数传入，第一个参数是html的模板。
		 * @param    {[type]}   data [需要替换之前的的html模板]
		 * @param    {[type]}   obj  [传入需要替换的数据，是动态数据]
		 * @return   {[type]}        [返回格式化好之后的模板]
		 */
		format:function(str,arr){
			var reg;
	        if ($.isArray(arr)) {
	            reg = /\{([\d]+)\}/g;
	        } else {
	            reg = /\{([\w]+)\}/g;
	        }
	        return str.replace(reg,function($0,$1){
	            var value = arr[$1];
	            if(value !== undefined){
	                return value;
	            }else{
	                return "";
	            }
	        });
		},
		/**
		 * @Author   hc
		 * @DateTime 2018-02-01
		 * @Describe 此函数同上，不需要引用jQuery
		 * @param    {[type]}   str [description]
		 * @param    {[type]}   arr [description]
		 * @return   {[type]}       [description]
		 */
		formatJs:function(str,arr){
			var reg;
	        if (arr instanceof Array) {
	            reg = /\{([\d]+)\}/g;
	        } else {
	            reg = /\{([\w]+)\}/g;
	        }
	        return str.replace(reg,function($0,$1){
	            var value = arr[$1];
	            if(value !== undefined){
	                return value;
	            }else{
	                return "";
	            }
	        });
		}
	}

})(window)