/**
 * User: 晓田(tancy)
 * Date: 13-6-13
 * Time: 下午4:54
 */
(function(win,doc){

    /**
     * 去除首尾空格
     * @mothod trim
     * @param s
     * @return {String}
     */
    function trim(s){
        return String(s).replace(/^\s+|\s+$/g,"")
    }

    /**
     * cookies
     * @param name
     * @param value
     * @param exdays
     * @return {String}
     */
    function cookies(name,value,exdays){//c_name,value,exdays  b,e,c
        var i,k,l;
        if(typeof value!=="undefined"){
            exdays=exdays||{};
            if(value===null)value="",exdays.expires=-1;
            l="";
            exdays.expires&&typeof exdays.expires==="number"&&(i=new Date,i.setTime(i.getTime()+exdays.expires*864E5),l="; expires="+i.toUTCString());
            i=exdays.path?"; path="+exdays.path:"";
            exdays=exdays.domain?"; domain="+exdays.domain:"";
            k=win.location.protocol==="https:"?"; secure":"";
            doc.cookie=[name,"=",encodeURIComponent(value),l,i,exdays,k].join("")
        }else if(doc.cookie&&doc.cookie!==""){
            value=doc.cookie.split(";");
            for(i=0;i<value.length;i++){
                if(l=trim(value[i]),l.substring(0,name.length+1)===name+"=")return decodeURIComponent(l.substring(name.length+1))
            }
        }
    }
    /**
     * csrf_token
     * Cross Site Request Forgery CSRF(跨站请求伪造)
     * @return {*}
     */
    function csrf_token(){
        var a=cookies(e);
        if(trim(a||"")!=="")return a;
        a=function(){
            var a="",b;
            for(b=0;b<17;b++)
                a+="abcdefghijklmnopqrstuvwxyz0123456789".charAt(Math.floor(Math.random()*36));
            return a
        }();
        cookies(e,a,{expires:1,path:"/"});
        return a
    }
    var e="error_csrf_tkn";
    /**
     * win.onerror
     * @event win.onerror
     * @param msg
     * @param url
     * @param line
     */
    win.onerror=function(msg,url,line){
        //c h d
        //msg: 错误信息
        //url：错误所在文件
        //line： 错误所在代码行，整型
        var i={},f=win.location;
        i.error=msg;
        i.error_line=line;
        i.error_file=url;
        i.revision=win.ENV&&win.ENV.REV||"UNKNOWN";
        i.path=f.protocol+"//"+f.hostname+(f.hash?f.hash.replace("#!",""):f.pathname);
        //c=win.localStorage;
        //f=!!c;

        //检查localstorage 是否支持及使用大小
        var size=0,m;
        if(!!win.localStorage){
            try{
                for(m in win.localStorage){
                    win.localStorage.hasOwnProperty(m)&&(size+=c[m].length);
                }
            }catch(n){}
        }
        i.storage=!!win.localStorage;
        i.storage_size=size;
        var q,s,o;
        try{
            if(url===win.location.href)q=document.documentElement;
            o=q?(s=q.innerHTML.split("\n"))&&s.length>=line?s[line-3]:"Invalid Line Number":"Script not found in index: "+url;
        }catch(p){
            o="Exception while getting codeline: "+line+" in file: "+url+" - "+p.message
        }
        i.code_line=o;
        i[e]=csrf_token();

        //建立异步请求发送错误信息
        h=new XMLHttpRequest;
        d=[];
        var t;
//        h.open("POST","/api/client_error",!0);
//        h.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
//        h.setRequestHeader("Accept","application/json");
        /**
         * 遍历参数
         */
        for(t in i){
            i.hasOwnProperty(t)&&d.push(t+"="+encodeURIComponent(String(i[t])));
        }
        console.log(i);
        //d=d.join("&");
        console.log(d);
        //alert(JSON.stringify(d));
        //h.send(d);
    }
})(window,document);