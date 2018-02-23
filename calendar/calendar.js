/*
* @Author: hc
* @Date:   2018-02-23 09:24:32
* @Last Modified by:   hc
* @Last Modified time: 2018-02-23 10:27:31
*/
(function(window){

	window.My = window.My || {};

	window.My.Calendar = {

		init:function(){
			this.thisMonth =document.getElementById("tableouth");
            this.premon =document.getElementById("premon");
            this.nextmon =document.getElementById("nextmon");
            this.tit =document.getElementById("tit");
            this.nstr=new Date(); //当前Date资讯
            this.dnow=this.nstr.getDate(); //今日日期的日
            this.ynow=this.nstr.getFullYear(); //年份
            this.mnow=this.nstr.getMonth(); //月份
            this.initEvent();
		},
		initEvent:function(){
			this.nextmonfuc();
            this.premonfuc();
            this.selectday();
            this.getmon(this.ynow,this.mnow);
		},
		premonfuc:function(){
            var _this=this;
            _this.premon.onclick=function(){
                if(_this.mnow<=0){
                    _this.ynow=_this.ynow-1;
                    _this.mnow=11;
                    _this.getmon(_this.ynow,_this.mnow);
                    _this.tit.innerHTML=_this.ynow+"-"+(_this.mnow+1);
                }
                else{
                    _this.getmon(_this.ynow,--_this.mnow);
                    _this.tit.innerHTML=_this.ynow+"-"+(_this.mnow+1);
                    console.log(_this.ynow+"-----"+_this.mnow);
                }
            }  
        },
        nextmonfuc:function(){
            var _this=this;
            _this.nextmon.onclick=function(){
                if(_this.mnow>=11){
                    _this.ynow=_this.ynow+1;
                    _this.mnow=0;
                    _this.getmon(_this.ynow,_this.mnow);
                    _this.tit.innerHTML=_this.ynow+"-"+(_this.mnow+1);
                }
                else{
                    _this.getmon(_this.ynow,++_this.mnow);
                    _this.tit.innerHTML=_this.ynow+"-"+(_this.mnow+1);
                    console.log(_this.ynow+"-----"+_this.mnow);
                }
            }  
        },
        isleap:function(year){
            return (year%100==0?res=(year%400==0?1:0):res=(year%4==0?1:0));
        },
        getmon:function(ynow,mnow){
            var _this=this;
            var n1str=new Date(ynow,mnow,1); //当月第一天的所有信息
            var firstday=n1str.getDay(); //当月第一天是星期几
            var m_days=new Array(31,28+_this.isleap(_this.ynow),31,30,31,30,31,31,30,31,30,31);// +this.isleap(this.ynow)
            var tr_str=Math.ceil((m_days[mnow] + firstday)/7);  //各月份的总天数//表格所需要行数
            _this.render(tr_str,firstday,m_days,ynow,mnow);
        },
        render:function(tr_str,firstday,m_days,ynow,mnow){
            this.thisMonth.innerHTML="";
            var _this=this;
            var creatTr=[];
            var creatTd=[];        
            for(i=0;i<tr_str;i++) {
                //表格的行
                creatTr[i] = document.createElement("tr");
                for(k=0;k<7;k++) { //表格每行的单元格
                    creatTd[k] = document.createElement("td");
                    creatTr[i].appendChild(creatTd[k]);
                    var idx=i*7+k; //单元格自然序列号
                    var date_str=idx-firstday+1; //计算日期
                    //过滤无效日期（小于等于零的、大于月总天数的）
                    (date_str<=0 || date_str>m_days[mnow]) ? date_str="&nbsp;" : date_str=idx-firstday+1; 
                    //打印日期：今天底色为红
                    //createTd = "<td align='center' data-day='tt'>" + date_str + "</td>";
                    creatTd[k].innerHTML=date_str;
                    if(!isNaN(date_str)){
                      var daystring=ynow+"-"+(mnow+1)+"-"+date_str;
                    }
                    creatTd[k].setAttribute("data-day",daystring);
                    if(_this.today(daystring)){
                       creatTd[k].style="background-color:red;color:#fff;";
                    }
                }
                _this.thisMonth.appendChild(creatTr[i]);
            }
        },
        today:function(daystr){
            var date=new Date();
            var y = date.getFullYear();  
            var m = date.getMonth() + 1;  
            // m = m < 10 ? '0' + m : m;  
            var d = date.getDate();  
            // d = d < 10 ?  d : d; 
            var str=y + '-' + m + '-' + d; 
            if(daystr==str){
                return true;
            }
        },
        selectday:function(){
            this.thisMonth.addEventListener("click",function(e){
                var e=window.event||e;
                var target=e.srcElement||e.target;
                if(target.nodeName=="TD"&&target.innerHTML!="&nbsp;"){
                    var str=target.getAttribute("data-day");
                    alert(str);
                }
            })
        }
	}

	My.Calendar.init();

})(window)