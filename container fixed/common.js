/*
* @Author: hc
* @Date:   2018-02-05 08:50:15
* @Last Modified by:   hc
* @description 给定一个区块，当滚动条往下滚动时，区块位置固定。
* @Last Modified time: 2018-02-05 09:37:54
*/

(function(window,document,$){

	window.My = window.My || {};

	window.My.Common = {

		/**
		 * @Author   hc
		 * @DateTime 2018-02-05
		 * @Describe 涉及参数传递需要做好异常处理
		 * @param    {[type]}   target [dom节点]
		 * @return   {[type]}          [description]
		 */
		init:function(target){
			if(target){
				this.target = target;
				this.initEvent();
			}
			else{
				return;
			}
			
		},
		initEvent:function(){
			var _this =this;
			document.onscroll = function(){
				_this.fixedSection(_this.target);
			}
		},
		/**
		 * @Author   hc
		 * @DateTime 2018-02-05
		 * @Describe 传入节点，就固定节点
		 * @param    {[type]}   target [description]
		 * @return   {[type]}          [description]
		 */
		fixedSection:function(target){
			var scrollTop = document.documentElement.scrollTop;
            if(scrollTop > 115){
            	target.setAttribute("style","position:fixed;top:0px");
            }else{
            	target.setAttribute("style","position:absolute;top:0px");
            }
		},
		recycling:function(){

		}
	}

})(window,document)