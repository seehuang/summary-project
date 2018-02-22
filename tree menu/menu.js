/*
* @Author: hc
* @Date:   2018-02-22 08:59:25
* @Last Modified by:   hc
* @Last Modified time: 2018-02-22 15:56:31
*/
(function(window,$){

	window.My = window.My || {};

	My.MenuData = {
		data:[
			{
				level:1,
				title:'接入指南',
				data:[
					{
						level:2,
						title:'开发者注册',
						data:[
							{
								level:3,
								title:'个人开发者注册'
							},
							{
								level:3,
								title:'企业开发注册流程'
							}
						]
					}
				]
			},
			{
				level:1,
				title:'接入指南2',
				data:[
					{
						level:2,
						title:'开发者注册2',
						data:[
							{
								level:3,
								title:'个人开发者注册2'
							},
							{
								level:3,
								title:'企业开发注册流程2',
									data:[
									{
										level:4,
										title:"title4"
									}
								]
							}
						]
					}
				]
			},
			{
				level:1,
				title:'接入指南3',
				data:[]
			}
		],
		template:{
			common:['',
				'<li class="{wrapCls}">',
                    '<div class="docnul-h {itemCls}" level="{level}">',
                        '<img src="images/arrow01right.png" class="arrow_right" />',
                        '<span title="{text}">{text}</span>',
                    '</div>',
                    '<ul>',
                        '{content}',
                    '</ul>',
                '</li>',
            ''].join(''),
            item:['',
                '<li title="{text}">',
                    '<a href="javascript:;" class="docnul-h {itemCls}" level="{level}">{text}</a>',
                '</li>',
            ''].join('')
		}
	}

	My.Menu = {

		init:function(){
			this.initEvent();
		},
		initEvent:function(){
			this.renderTemplate(My.MenuData.data,true);
			this.treeClick();
			this.itemClick();
		},
		/**
		 * @Author   hc
		 * @DateTime 2018-02-22
		 * @Describe 点击列表展开下一级
		 * @return   {[type]}   [description]
		 */
		treeClick:function(){
			$(".docnul-h").on("click",function(){
				if($(this).siblings("ul")){
					$(this).siblings("ul").toggle();
				}
				/**
			     *  一级菜单点击，判断是否有子列表
				 */
				if($(this).siblings("ul").text()==""){
					console.log("33")
				}
			})
		},
		/**
		 * @Author   hc
		 * @DateTime 2018-02-22
		 * @Describe 点击最底层一级逻辑
		 * @return   {[type]}   [description]
		 */
		itemClick:function(){
			$(".doc-left").on("click","a",function(){
				$(".doc-left").find("a").parent("li").css({"background-color":"#eee"});
				$(this).parent("li").css({"background-color":"#fff"});
			})
		},
		/**
		 * @Author   hc
		 * @DateTime 2018-02-22
		 * @Describe 渲染菜单栏
		 * @param    {[type]}   data   [description]
		 * @param    {Boolean}  isInit [description]
		 * @return   {[type]}          [description]
		 */
		renderTemplate:function(data,isInit){
			var html = '';
			for(var i=0;i<data.length;i++){
				var item = data[i];
                var level = item.level;
                var _data = item.data;
                var template = _data ? My.MenuData.template.common : My.MenuData.template.item;
				html += My.Common.format(template,{
					wrapCls:level == 1 ? 'docnul-level01' :'',
					itemCls:'docnul-h' + level,
					level:level,
					text:item.title,
                    content:_data ? this.renderTemplate(_data) : ''
				})
			}
			if(isInit){
				$(".doc-left").html(html);
			}
			else{
                return html;
            }
		}
	}	

	My.Menu.init();

})(window,jQuery)