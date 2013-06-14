/**
 * User: 晓田(tancy)
 * Date: 13-6-6
 * Time: PM1:57
 */


//全局函数
weTao={isDesktop:false};


(function (we) {

    var R_desktop = /(\bwindows\b|\bmacintosh\b|\blinux\b|\bunix\b)/;
    if(R_desktop.exec(navigator.userAgent.toLowerCase())){
        we.isDesktop=true;
        $('body').addClass('desktop');
    }


    we.getDpi=function(){
        var dpiRatio = 1;
        if (window.devicePixelRatio) {
            dpiRatio = window.devicePixelRatio;
        }
        return dpiRatio;
    }

    we.isRetina=function(){
        if(this.getDpi()>=2){
            return true;
        }else {
            return false;
        }
    }

    var defaultDpi = we.getDpi(),
        manulDpi,
    //110x100000.jpg 等宽缩放   , 580, 620, 790
        widths = [110, 150, 170,180, 220, 240, 290, 450, 570],
    //裁剪成正方形  , 640
        xzs = [120,145,230,270,290, 310,360,460, 580];

    /**
     * 手工设置图片裁剪时候的缩放比率，默认根据dpi
     * @param {number} ratio
     */
    we.setRatio = function (ratio) {
        manulDpi = ratio;
    }

    function getRatio() {
        return manulDpi || defaultDpi;
    }

    /**
     *
     * 裁剪图片，默认根据宽度裁剪
     * @param {object} param  请求参数
     * @param {string} param.url  图片地址
     * @param {number} param.expWidth  期望宽度
     * @param {number} param.rWidth  真实宽度
     * @param {number} param.rHeight  真实高度
     * @param {boolean} param.isXz  是否需要裁剪成正方形
     *
     * @returns {{}} result 裁剪后图片的数据
     * @returns {string} result.url  裁剪后图片的真实url
     * @returns {number} result.expWidth 裁剪后图片期望img标签的宽度
     * @returns {number} result.expHeight 裁剪后图片期望img标签的宽度
     * @returns {number} result.rWidth 裁剪后图片的真实宽度
     * @returns {number} result.rHeight 裁剪后图片的真实高度
     */
    we.trim = function (param) {
        if (param.isXz) {
            return we.trimXz(param);
        }
        var result = {};
        var ratio = param.ratio || getRatio();
        // (param.rWidth >= param.rHeight) && (param.isXz = false);
        var trimWidth = getTrimSize(param.expWidth * ratio, param.rWidth, widths),
            imgUrl = param.url,
            expWidth = param.expWidth, rWidth = param.rWidth, rHeight = param.rHeight;

        //需要裁剪
        if (trimWidth) {
            imgUrl += ("_" + trimWidth + "x10000.jpg");
            rWidth = trimWidth;
            rHeight = param.rHeight * rWidth / param.rWidth;
        }

        result.expWidth = expWidth;
        result.expHeight = expWidth * rHeight / param.rWidth;
        result.rWidth = rWidth;
        result.rHeight = rHeight;
        result.url = imgUrl;//cdn.getOriginalImg();
        return result;
    }

    /**
     * 参考trim方法 {@link trim}
     */
    we.trimXz = function (param) {
        var result = {};
        var ratio = param.ratio || getRatio();
        // (param.rWidth >= param.rHeight) && (param.isXz = false);
        var imgUrl = param.url,
        //是否是高图
            higher = param.rHeight > param.rWidth,
            trimSize = getTrimSize(param.expWidth * ratio, higher ? param.rHeight : param.rWidth, xzs),
        //fixme
            expHeight, expWidth = param.expWidth, rWidth = param.rWidth, rHeight = param.rHeight;

        //需要裁剪
        if (trimSize) {
            imgUrl += ("_" + trimSize + "x" + trimSize + "xz.jpg");
            //是高图
            if(higher){
                rHeight = trimSize;
                rWidth = trimSize < rWidth ? trimSize : rWidth;


            }else{
                rWidth = trimSize;
                //比真实图片高度还高，明显不可能
                rHeight = trimSize < rHeight ? trimSize : rHeight;

            }
        }
        expHeight = expWidth * rHeight / rWidth;
        result.expWidth = expWidth;
        result.expHeight =  expHeight;
        result.rWidth = rWidth;
        result.rHeight = rHeight;

        result.url =imgUrl;// cdn.getOriginalImg(imgUrl);
        return result;
    }

    /****
     * 获取裁剪尺寸
     * @param exp
     * @param real
     * @param arr
     */
    function getTrimSize(exp, real, arr) {
        // 期望值大于实际值，那么就不必裁剪了，反正也不能变大～
        var trimSize;
        if (exp > real) {
            trimSize = real;
        } else {
            trimSize = calBest(exp, arr);
        }

        //没有匹配到，那就不用裁剪了～
        if (trimSize) {
            // 大于max的值，强制裁剪到最大尺寸，避免影响内存和流量
            var max = arr[arr.length - 1];
            if (max < trimSize) {
                trimSize = max;
            }
            //如果裁剪尺寸和实际尺寸一致，那就不裁剪了
            if (trimSize === real) {
                trimSize = undefined;
            }
        }
        return trimSize;
    }

    /**
     * 查找与期望值最接近的一个值
     * @param exp
     * @param arr
     * @returns {number}
     */
    function calBest(exp, arr) {
        var max = arr[arr.length - 1];
        if (max <= exp) {
            return max;
        }
        var bestWidth = 0;
        for (var i = arr.length; i >= 0; i--) {
            if (arr[i] <= exp) {
                if (arr[i] == exp) {
                    bestWidth = exp;
                } else {
                    i < ( arr.length - 1 ) && (bestWidth = arr[i + 1]);
                }
                break;
            }
        }
        return bestWidth;
    }

})(weTao);






function getBetterImg (name, expwidth, rwidth, isXz) {
    return weTao.trim({url: name, expWidth: expwidth, rWidth: rwidth, isXz: isXz}).url;
};

function timestamps(time){

    if(typeof time == 'string'){
        time = parseInt(time);
    }

    var ONE_SECOND = 1000,
        ONE_MINUTE = ONE_SECOND * 60,
        ONE_HOUR   = ONE_MINUTE * 60,
        ONE_DAY    = ONE_HOUR   * 24;

    var iTrueTime = null,
        dNow = new Date(),
        iNow = dNow.getTime(),
        ret = "";

    if(typeof time == 'number'){

        iTrueTime = time;
    } else if(typeof time == 'object'){

        if(time.getTime){// an object of Date
            iTrueTime = time.getTime();
        }
    }
    if( iTrueTime != NaN){
        var dTrueTime = new Date();
        dTrueTime.setTime(iTrueTime);
    }
    var minutes=dTrueTime.getMinutes();
    if(minutes<10){
        minutes='0'+minutes;
    }
    if(iTrueTime == NaN){
        ret = "-";
    }else if(iTrueTime > iNow){
        ret = "刚刚";
    } else if( iTrueTime > iNow - ONE_SECOND * 10){
        ret = "刚刚";
    } else if( iTrueTime > iNow - ONE_MINUTE){
        // e.g. 30秒前
        ret = parseInt((iNow - iTrueTime) / ONE_SECOND / 10).toString() + "0秒前";
    } else if( iTrueTime > iNow - ONE_HOUR){
        // e.g. 3分钟前
        ret = parseInt((iNow - iTrueTime) / ONE_MINUTE) + "分钟前";
    } else if(dTrueTime.getYear() == dNow.getYear() && dTrueTime.getMonth() == dNow.getMonth() && dTrueTime.getDate() ==dNow.getDate()){
        // e.g. 今天11:39
        ret = "今天" + dTrueTime.getHours() + ":" + minutes;
    } else if(dTrueTime.getYear() == dNow.getYear() && dTrueTime.getMonth() == dNow.getMonth() && dNow.getDate()-dTrueTime.getDate()==1){
        ret = "昨天" + dTrueTime.getHours() + ":" + minutes;
    } else{
        if(dTrueTime.getYear() == dNow.getYear()){
            // e.g. 9月10日 07:50
            ret = (dTrueTime.getMonth()+1) + "月" + dTrueTime.getDate() + "日 " + dTrueTime.getHours() + ":" + minutes;
        }else{
            // e.g. 2011年2月3日 12:39
            ret = dTrueTime.getFullYear() + "年" + (dTrueTime.getMonth()+1) + "月" + dTrueTime.getDate() + "日 " + dTrueTime.getHours() + ":" + minutes;
        }
    }
    return ret;
}
function isLongImg(data) {
    return data && (parseFloat(data.picWidth) / parseFloat(data.picHeight) > 1.45)
}

function isSquareImg(data) {
    return data && (parseFloat(data.picWidth) / parseFloat(data.picHeight) <= 1.45)
}

// 判斷螢幕旋轉方向
function setOrientation() {
    var orient;

    if (window.orientation) {
        orient = Math.abs(window.orientation) === 90 ? 'landscape' : 'portrait';
    }
    else if (window.screen) {
        var width = screen.width;
        var height = screen.height;
        orient = (width > height) ? 'landscape' : 'portrait';
    }
    else {
        orient = 'unknow';
    }
    return orient;
}

function feedImageSizeStyle(actualWidth, actualHeight){
    var width = parseInt(actualWidth);
    var height = parseInt(actualHeight);
    var expectWidth ;
    expectWidth= window.innerWidth - 30;
    if(setOrientation()=='portrait'){
        //if(window.innerWidth>)
        expectWidth= window.innerWidth - 30;
    }else{
        expectWidth=(window.innerWidth>window.innerHeight?window.innerWidth:window.innerHeight)-30;
        //expectWidth=window.innerHeight-30;
    }
    var expectHeight = 0;
    if(width<height){
        //高度大于宽度的时候裁剪图像
        if (width < expectWidth) {
            //屏幕宽度大于图像原尺寸进行等比放大
            expectHeight = (expectWidth / width) * height;
            //放大后高度大于屏幕宽度 则 高度为屏幕宽度
            if(expectHeight>expectWidth){
                expectHeight=expectWidth;
            }
        }else{
            expectHeight = expectWidth;
        }
    }else{
        if (width < expectWidth) {
            expectHeight = (expectWidth / width) * height
        } else {
            expectHeight = height / (width / expectWidth)
        }
    }
    //临时处理pc端问题，使期不会放大图片
    if(!weTao.isDesktop){
        if (!expectHeight) return "width: 100%"
        else return "width: " + expectWidth + 'px; ' + 'height: ' + expectHeight + 'px;'
    }


}

function detailImageSizeStyle(actualWidth, actualHeight) {

    var width = parseInt(actualWidth)
    var height = parseInt(actualHeight)
    //$('#content').attr('')
    var expectWidth = $('#content')[0].offsetWidth - 24;
    var expectHeight = 0;

    if (width < expectWidth) {
        expectHeight = (expectWidth / width) * height
    } else {
        expectHeight = height / (width / expectWidth)
    }
    //临时处理pc端问题，使期不会放大图片
    //if(!weTao.isDesktop){
    if (!expectHeight) return "width: 100%"
    else return "width: " + expectWidth + 'px; ' + 'height: ' + expectHeight + 'px;'
    //}
}





var numToBinary = function(num){
    var str = "";
    var next = num;
    var result ;
//    do{
//        result = next % 2;
//        str = result + str ;
//        next = Math.floor(next / 2)
//    }while(next != 0)
    return str;
}
/**
 *
 * @param type
 * @returns {boolean}
 */

var noHelper = function(type){
    var v=numToBinary(type),r=false;
    v='0000'+v;
    return v.substring(v.length-4,v.length-3)!='1';
}

/**
 * 格式化关注数
 * @param fansCount
 */
var formatFans = function(fansCount){
    if(typeof fansCount == 'string')
    {
        fansCount = parseInt(fansCount);
    }
    if(fansCount > 99999999)
    {
        fansCount = fansCount.toString();
        return fansCount.substr(0,fansCount.length-8)+'亿';
    }
    else if(fansCount > 999999)
    {
        fansCount = fansCount.toString();
        return fansCount.substr(0,fansCount.length-4)+'万';
    }
    else if(fansCount  > 9999)
    {
        fansCount = fansCount.toString();
        var dian = fansCount.charAt(fansCount.length-4);
        return fansCount.substr(0,fansCount.length-4)+(dian =='0' ? '':'.'+dian)+'万';
    }
    return fansCount.toString();
}

/**
 *
 * @param d 用户数据
 * @returns {string} 返回DOM结构
 */
var getAccountInfoHtml = function(d){
//    var _html = '<img src="' + d.logoUrl +(weTao.isRetina()?'_64x64.jpg':'_32x32.jpg')+'" /><div><h2>' + d.nick +'</h2>';
//
//    if(noHelper(d.accountType)){
//        if (d.fansCount == 0) {
//            _html+='<a>还没有人关注</a>';
//        } else{
//            _html+='<a>' + d.fansCount + '关注</a>';
//        }
//    }
//    _html+='</div>';

    var _html=_.template($('#detail_accinfo_tpl').html())

    return  _html(d);
}

var getAccountInfoData =function(snsId){

    namespace('taobao.biz.mtop').getApi("mtop.sns.pubAccount.info",
        '2.0',
        {'snsId':snsId},
        {},
        function (result) {
            //success
            var d = result.data;

            var h=getAccountInfoHtml(d)
            $('#detailPage div.account').html(h);
        },
        function(result){
            //fail

        }
    );
}

/**
 *  标准类型detail dom 结构
 * @param d
 * @returns {string} 返回Dom 结构
 */
var getDetailInfoHtml = function(d){
    var _h='';
    _h+='<h1>'+ d.title +'</h1>';
    //_h+='<div class="favbtn <% if(isLiked =='1'){%> faved <% } %> log" data-log="<% if(isLiked =='1'){%>cancelfaved<% }else{ %>addfav<% } %>"></div>'
    if (d.time) {
        _h+='<p class="detail-info">';
        _h+='<span class="icon-clock pub-time">'+ timestamps(d.time)+'</span>';
        _h+='</p>';
    }
    for (var i = 0; i < d.tiles.length; i++) {
        if (d.tiles[i].type == "pic") {
            _h+='<div class="media"><img class="lazy"';
            if(weTao.isDesktop){
                _h+='dataimg="'+getBetterImg(d.tiles[i].path, 370, parseInt(d.tiles[i].picWidth),true)+'"';
            }else{
                _h+='dataimg="'+getBetterImg(d.tiles[i].path, window.innerWidth-30, parseInt(d.tiles[i].picWidth))+'"';

            }
            _h+='style="'+detailImageSizeStyle(d.tiles[i].picWidth, d.tiles[i].picHeight)+'"';
            _h+='src="http://a.tbcdn.cn/mw/webapp/fav/img/grey.gif"></div>';
        } else if (d.tiles[i].type == "text") {

            _h+='<p class="text">'+ d.tiles[i].text.replace(/(\n)+/g, '<span style="height:5px;display:block"></span>')+'</p>';

        } else if (d.tiles[i].type == "picItem") {
            _h+='<div class="media">';
            _h+='<a style="display: block" href="'+ getItemDetailUrl('a', { itemId: d.tiles[i].item.id })+'" class="item">';
            _h+='<img class="lazy"';
            if(weTao.isDesktop){
                _h+='dataimg="'+ getBetterImg(d.tiles[i].path, 370, parseInt(d.tiles[i].picWidth),true) +'"';
                _h+='style="'+ detailImageSizeStyle(d.tiles[i].picWidth, d.tiles[i].picHeight) +'"';
            }else{
                _h+='dataimg="'+ getBetterImg(d.tiles[i].path, window.innerWidth-30, parseInt(d.tiles[i].picWidth)) +'"';
                _h+='style="'+ detailImageSizeStyle(d.tiles[i].picWidth, d.tiles[i].picHeight) +'"';
            }
            _h+='src="http://a.tbcdn.cn/mw/webapp/fav/img/grey.gif">';
            _h+='<div id="price'+ d.tiles[i].item.id +'" class="price" style="display: none;"></div></a></div>';
        }
    }
    if (d.linkUrl) {
        _h+='<a href="'+d.linkUrl +'" class="more-content log" data-log="linkUrl">';
        _h+='<span class="link-icon"></span>';
        _h+='<span class="link-title">'+ (d.linkTitle || '更多内容') +'</span></a>';
    }
    return _h;
}

/**
 *
 * @param module
 * @param param
 * @returns {*}
 */
getItemDetailUrl = function(module, param){
    var rui=namespace('taobao.utils.uri').getUrl({'subdomain':'a','path':'i'+param.itemId+'.htm'});
        //'http://a.m.taobao.com/i'+param.itemId+'.htm';
    //uri.createURI(_modules[0])
        //namespace('taobao.utils.uriBroker').getUrl(module, param);
    if(rui.indexOf('?')==-1){
        rui=rui+'?ap_ref='+encodeURIComponent(window.location.href);
    }else{
        rui=rui+'&ap_ref='+encodeURIComponent(window.location.href);
    }
    return rui;
}
/**
 * 获取detail plugin 模板
 * @param param
 * @param success
 * @param fail
 */
var getTemplate = function(param,success,fail){

    namespace('taobao.biz.mtop').getApi("mtop.sns.component.template",
        '2.0',
        {'componentId':param.cid},
        {},
        function (result) {
            //success
            var d = result.data;
            success&&success(d);
        },
        function(result){
            //fail
            fail&&fail(result);
        }
    );
}

/**
 *
 * @param d
 */
var getDetailByComponent = function (d,cb){

//    getTemplate({'cid': d.componentId},function(tpl){
//    });

    var pluginTpl=_.template($('#detail_plugin').html());

    $('#detailPage div.main').addClass('plugIn_content').html(pluginTpl(d));
}

var getPrices=function(result,fun) {
    //获取价格参数
    var ids = [];
    result.tiles &&  result.tiles.forEach(function(tile){
            tile.item &&  ids.push(tile.item.id);
        }
    );
    if(ids.length==0)return false;
    var prices=[];
    $.ajax({
        type:'GET',
        dataType:'json',
        url:namespace('taobao.utils.uri').getUrl({'subdomain':'s','path':'search_turn_page_iphone.htm'})+'nid='+ ids.join(",") + '&callback=?',
//        url:'http://s.m.taobao.com/search_turn_page_iphone.htm,
        success:function (sret) {
            if (sret.result && "true" == sret.result && sret.listItem) {
                sret.listItem.forEach(function (item) {
                    //priceCache[item.itemNumId] = item.price;
                    prices.push({id:item.itemNumId, price:item.price});
                })
            }
            fun && fun.call(arguments.callee, prices);
        },
        error:function (error) {
            console.log(error);
            fun && fun.call(arguments.callee, result);
        }
    });

}

var getDetailData = function(snsId,feedId){

    namespace('taobao.biz.mtop').getApi("mtop.sns.feed.detail",
        '2.0',
        {'snsId':snsId,'feedId':feedId},
        {},
        function (result) {
            //success
            //console.log(result);
            if(typeof result.data.componentId!='undefined'){
                $('#detailPage div.main').html(getDetailByComponent(result.data));

            }else{
                $('#detailPage div.main').html(getDetailInfoHtml(result.data));
            }

            getPrices(result.data,function(d){
                for(var i= 0,len= d.length;i<len;i++){
                    $('#price'+ d[i].id).text(d[i].price + '元').show()
                }
            });
            window.lazyload.reload();
        },
        function(result){
            //fail
        }
    );
}




///dfdfdfgfgfhhdfdgfg
$(function(){
    window.lazyload.init({ lazyHeight: 300 })
    window.lazyload.reload = function () {
        window.lazyload.img.trigger()
    }

    var _hash = window.location.hash.split('/');

    getAccountInfoData(_hash[1]);
    getDetailData(_hash[1],_hash[2]);


});





