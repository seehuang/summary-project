/*
* @Author: hc
* @Date:   2018-02-05 11:04:26
* @Last Modified by:   hc
* @description 多页应用的静态资源加载的配置，主要是配置JS,CSS,Icon静态文件的自动加载，并在文件末尾添加版本号。
* @Last Modified time: 2018-02-06 15:36:38
*/
window.My = window.My || {};

My.config = {
    siteConfig:{
        version:'201711211400',
        icoPath:'images/favicon.png'
    },
    domainList:{
        global:{
            resource:'.'
        }
    },
    /**
     * @Author   hc
     * @DateTime 2018-02-05
     * @Describe 设置hash的版本号，根据时间生成
     * @return   {[type]}   [description]
     */
    getVersion:function(){
        var d = new Date();
        var version = d.getFullYear()+''+('0'+(d.getMonth()+1)).substr(-2,2)+''+('0'+d.getDate()).substr(-2,2) +'_'+Math.random();
        return this.siteConfig.version;
    },
    /**
     * @Author   hc
     * @DateTime 2018-02-06
     * @Describe 获取当前时间  格式 2018-01-01 11:02:59
     * @return   {[type]}   [description]
     */
    getCurrentTime(){
        var myDate = new Date();
        var y = myDate.getFullYear();    //获取完整的年份(4位,1970-????)
        var m = myDate.getMonth()+1;       //获取当前月份(0-11,0代表1月)
        var d = myDate.getDate();        //获取当前日(1-31)
        m=m>10?m:("0"+m);
        d=d>10?d:("0"+d);
        var hh= myDate.getHours();       //获取当前小时数(0-23)
        var mm = myDate.getMinutes();     //获取当前分钟数(0-59)
        var ss = myDate.getSeconds();     //获取当前秒数(0-59)
        var sss = myDate.getMilliseconds();    //获取当前毫秒数(0-999)
        var time =""+y+"-"+m+"-"+d+" "+hh+":"+mm+":"+ss;
        return time;
    },
    getDomain:function(key){
        return this.domainList['global'][key];
    },
    /**
     * @Author   hc
     * @DateTime 2018-02-05
     * @Describe 设置站点icon，需要手动调用
     * @return   {[type]}   [description]
     */
    loadIco:function(){
        var path = this.siteConfig.icoPath + '?v=' + this.getVersion();
        document.write('<link rel="shortcut icon" href="' + path + '" />');
    },
    /**
     * @Author   hc
     * @DateTime 2018-02-05
     * @Describe 自动加载CSS文件，只需传入文件名，不需要写后缀名, 函数会自动 寻找css文件夹下面的css文件
     * @param    {[type]}   path    [description]
     * @param    {[type]}   options [description]
     * @param    {[type]}   _doc    [description]
     * @return   {[type]}           [description]
     */
    loadCss:function(path,options,_doc){
        this.checkLoad(path,options,_doc,false);
    },
    /**
     * @Author   hc
     * @DateTime 2018-02-05
     * @Describe 自动加载JS文件，只需传入文件名，不需要写后缀名, 函数会自动 寻找js文件夹下面的js文件
     * @param    {[type]}   path    [description]
     * @param    {[type]}   options [description]
     * @param    {[type]}   _doc    [description]
     * @return   {[type]}           [description]
     */
    loadJs:function(path,options,_doc){
        this.checkLoad(path,options,_doc,true);
    },
    checkLoad:function(path,options,_doc,isLoadJs){
        var options = options || {};
        if(typeof path != 'string') return; 

        var domain = this.getDomain('resource');
        
        var _root = isLoadJs ? '/js' : '/css';  
        domain += _root;
        
        if(path.charAt(0) !== '/'){
            domain += '/';
        }

        var char = isLoadJs ? '.js' : '.css';
        if(path.indexOf(char) == -1){
            path += char;
        }
        
        var version = this.getVersion(); 
        if(path.indexOf('?') == -1){
            path += '?';
        }
        path += 'v=' + version;
    
        path = domain + path;
        
        if(isLoadJs){
            var charset = '';
            if(options.charset){
                charset = options.charset;
            }
        }

        var _load = isLoadJs 
            ? "<script " + (charset ? "charset=\"" + charset + "\" " : "") + " type=\"text/javascript\" src=\"" + path + "\"></" + "script>" 
            : '<link rel="stylesheet" href="' + path + '" type="text/css" />';
        (_doc || document).write(_load);
    }
};
