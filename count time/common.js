/*
* @Author: hc
* @Date:   2018-03-08 10:12:42
* @Last Modified by:   hc
* @Last Modified time: 2018-03-08 10:13:03
*/
var jx = {
    identifyingCode: function () {
        var e = {
            wait: arguments[0] ? arguments[0] : 60,
            showText: arguments[1] ? arguments[1] : "再次获取验证码",
            dynamicText: arguments[2] ? arguments[2] : "秒后再次获取",
            nextDynamicText: arguments[3] ? arguments[3] : "",
            hsTime: function (e) {
                if (t = $(this), 0 == this.wait) $(e).removeAttr("disabled").val(this.showText).removeClass("disabled").addClass("enable"), t.wait = this.wait; else {
                    var t = this;

                    $(e).prop("disabled", !0).val(this.nextDynamicText + t.wait + " " + this.dynamicText).removeClass("enable").addClass("disabled"), this.wait--, setTimeout(function () {
                        t.hsTime(e)
                    }, 1e3)
                }
            }
        };
        e.hsTime(".obtain-code")
    }
};
function addCookie(name, value, expiresHours) {
    var cookieString = name + "=" + escape(value);
    //判断是否设置过期时间,0代表关闭浏览器时失效
    if (expiresHours > 0) {
        var date = new Date();
        date.setTime(date.getTime() + expiresHours * 1000);
        cookieString = cookieString + ";expires=" + date.toUTCString();
    }
    document.cookie = cookieString;
}

//根据名字获取cookie的值
function getCookie(name) {
    var strCookie = document.cookie;
    var arrCookie = strCookie.split("; ");
    for (var i = 0; i < arrCookie.length; i++) {
        var arr = arrCookie[i].split("=");
        if (arr[0] == name) {
            return unescape(arr[1]);
            break;
        }
    }

}
//删除cookies
function delCookie(name) {
    var exp = new Date();
    exp.setTime(exp.getTime() - 1);
    var cval = getCookieValue(name);
    if (cval != null)
        document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString();
}