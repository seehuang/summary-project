/*
* @Author: hc
* @Date:   2018-02-23 14:49:18
* @Last Modified by:   hc
* @Last Modified time: 2018-02-23 14:51:17
*/
//倒计时按钮方法
//
(function(window){

	var countnumber=60;

    window.My = window.My||{};

    My.countnumber = {

        timecount:function(){
            var getMessage=$$("getMessage");
         if(countnumber==0){
            //getMessage.addEventListener("click",checkphone());
            getMessage.removeAttribute("disabled");
            getMessage.value="获取验证码";
            countnumber=60;
         }
        else{
            getMessage.setAttribute("disabled",false);
            
            getMessage.value="正在获取("+countnumber+")";
            countnumber--;
            setTimeout(function(){
                timecount();
            },1000)
        }
        }
    }

})(window)
     