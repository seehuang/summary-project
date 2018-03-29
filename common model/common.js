(function(window,$){
	/**
	 * 声明一个全局对象My，作用于整个多页应用，后期应该配置在统一的config.js中
	 * @type {Object}
	 */
	window.My = window.My || {}

	My.Common = {

		init:function(dom){
			this.btn = $(".btn");
			this.myModel = $(".my-model");
			this.mmContent = $(".mm-content");
			this.mmTransparent = $(".mm-transparent");
			this.initEvent();
		},
		/**
		 * @Author   hc
		 * @DateTime 2018-02-01
		 * @Describe 初始化事件绑定
		 * @return   {[type]}   [description]
		 */
		initEvent:function(){
			var _this =this;
			_this.myModel.hide();
			_this.btn.on("click",function(){
				_this.showModel();
			})
			_this.mmTransparent.on("click",function(){
				_this.closeModel();
			})
		},
		/**
		 * @Author   hc
		 * @DateTime 2018-02-01
		 * @Describe 设置body样式
		 */
		setDocument:function(){
			$("body").css({"overflow-y":"hidden"})
		},
		/**
		 * @Author   hc
		 * @DateTime 2018-02-01
		 * @Describe 恢复body样式
		 */
		resetDocument:function(){
			$("body").css({"overflow-y":"scroll"})
		},
		/**
		 * @Author   hc
		 * @DateTime 2018-02-01
		 * @Describe 展示弹出层需要注意，
		 * 			1.隐藏body滚动条，
		 * 			2.设置半透明层覆盖整个页面高度offsetHeight，
		 * 			3.内容弹窗高度要设置为,滚动条卷曲的高度+浏览器可视窗口一半的高度。margin在css有负值，所以会居中。
		 * @return   {[type]}   [description]
		 */
		showModel:function(){
			var scrollTop =document.body.scrollTop||document.documentElement.scrollTop;
			var windowHeight = scrollTop+ document.documentElement.clientHeight/2;
			this.setDocument();
			this.myModel.css({"height":document.documentElement.offsetHeight});
			this.mmContent.css({"top":windowHeight})
			this.myModel.fadeIn(500);
		},
		/**
		 * @Author   hc
		 * @DateTime 2018-02-01
		 * @Describe
		 * @return   {[type]}   [description]
		 */
		closeModel:function(){
			this.myModel.fadeOut(500);
			this.resetDocument();
		},
		/**
		 * @Author   hc
		 * @DateTime 2018-02-01
		 * @Describe 资源回收，包括dom销毁，事件取消绑定。
		 * @return   {[type]}   [description]
		 */
		recycling:function(){
			this.mmTransparent.off("click");
		}

	}

	My.Common.init();

})(window,jQuery)