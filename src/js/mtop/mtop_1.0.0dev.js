(function () {
    window['namespace'] = function (key, value) {
        // set value
        if (2 === arguments.length) {
            var nsArray = key.split('.'),
                tmp = window,
                i = 0,nsKey;
            for (; i < nsArray.length; i++) {
                nsKey = nsArray[i];
                if (i === (nsArray.length - 1)) {
                    if (tmp[ nsKey]) {
                        console.error("namespace aleady exist :" + key + "|" + value + "|" + tmp[ nsKey]);
                    } else {
                        tmp[ nsKey] = value;
                    }
                    break;
                }
                tmp[nsKey] || (tmp[nsKey] = {});
                tmp = tmp[nsKey];
            }
            return tmp;
        }
        //get value
        if (1 === arguments.length) {
            try {
                return eval('window.' + key);
            } catch (e) {
                return undefined;
            }
        }
    };

    window['_define'] = function (moduleName, factory) {
        if (window['define']) {
            return window['define'](arguments[arguments.length - 1]);
        }
        var module = {},
            exports = module.exports = {};
        namespace(moduleName) || namespace(moduleName, (factory(null, exports, module) || module.exports));
    };

})();
/**
 * global configuration
 *
 * @sysType : check system type , m or wapa or waptest
 *
 * @author  : yanyuan
 * @date       : 2012-03-16
 */
_define('taobao.utils.config', function (require, exports) {
    // loading
    var _checkSysType = 'm', _defaultAppKey = '12574478';
    if (window.location.host === 'localhost' || window.location.host.match('.*\\waptest\\.(taobao|tmall|etao|alibaba|alipay|aliyun)\\.com.*')) {
        _checkSysType = 'waptest';
        _defaultAppKey = '4272';
    } else if (window.location.host.match('.*\\wapa\\.(taobao|tmall|etao|alibaba|alipay|aliyun)\\.com.*')) {
        _checkSysType = 'wapa';
    }
    else if (window.location.host.match('.*\\m\\.(taobao|tmall|etao|alibaba|alipay|aliyun)\\.com.*')) {
        _checkSysType = 'm';
    }
    // _checkSysType = 'waptest';
    // [auto check]system type , m or wapa or waptest
    exports.sysType = _checkSysType || 'm';
    exports.defaultAppKey = _defaultAppKey || '12574478';
    //need remove flow code
});

/**
 * cookie get、del
 *
 */
_define('taobao.utils.cookie', function (require, exports) {
    /**
     * 判断浏览器是否能使用cookie
     */
    exports.isCookieEnable = function () {
        if (!window.navigator.cookieEnabled) {
            return false;
        }
        var key = '_s_cookie_',
            v = this.getCookie(key);
        this.setCookie(key, '1');
        if (v === '1') {
            this.delCookie(key);
            return true;
        }
        return false;
    };
    /**
     * get cookieVauel
     */
    exports.getCookieVal = function (offset) {
        var endstr = document.cookie.indexOf(";", offset);
        if (endstr === -1) {
            endstr = document.cookie.length;
        }
        return window.unescape(decodeURIComponent(document.cookie.substring(offset, endstr)));
    };
    /**
     * getCookie
     * if not exist ,return null
     */
    exports.getCookie = function (name) {
        var arg = name + "=", alen = arg.length, clen = document.cookie.length, i = 0,j;
        while (i < clen) {
            j = i + alen;
            if (document.cookie.substring(i, j) === arg){
                return this.getCookieVal(j);
            }
            i = document.cookie.indexOf(" ", i) + 1;
            if (i === 0){
                break;
            }
        }
        return null;
    };
    /**
     * 将cookie设置到taobao域下
     */
    exports.setCookie = function (key, value) {
        var host = window.location.host,
            index = host.indexOf("."),
            subDomain = host.substring(0, index),
            expires = (arguments.length > 2) ? arguments[2] : null,
            expdate = new Date();
        if (subDomain !== 'waptest' && subDomain !== 'wapa' && subDomain !== 'm' && (host.indexOf("taobao") > -1 || host.indexOf("tmall") > -1)) {
            host = host.substr(index + 1);
        }
        if (expires == null) {
            document.cookie = key + "=" + window.escape(value) + ";path=/;domain=" + host;
        } else {
            expdate.setTime(expdate.getTime() + (expires * 1000 ));
            document.cookie = key + "=" + window.escape(value) + ";path=/;domain=" + host + ";expires=" + expdate.toGMTString();
        }

    };

    exports.delCookie = function (name)
        //删除Cookie
    {
        var exp = new Date(),
            cval = this.getCookie(name);
        exp.setTime(exp.getTime() - 1);
        document.cookie = name + "=" + cval + "; expires=" + exp.toGMTString();
    };
});
_define('taobao.utils.encode.md5',function () {

    return function (string) {

        function rotateLeft(lValue, iShiftBits) {
            return (lValue << iShiftBits) | (lValue >>> (32 - iShiftBits));
        }

        function addUnsigned(lX, lY) {
            var lX4, lY4, lX8, lY8, lResult;
            lX8 = (lX & 0x80000000);
            lY8 = (lY & 0x80000000);
            lX4 = (lX & 0x40000000);
            lY4 = (lY & 0x40000000);
            lResult = (lX & 0x3FFFFFFF) + (lY & 0x3FFFFFFF);
            if (lX4 & lY4) {
                return (lResult ^ 0x80000000 ^ lX8 ^ lY8);
            }
            if (lX4 | lY4) {
                if (lResult & 0x40000000) {
                    return (lResult ^ 0xC0000000 ^ lX8 ^ lY8);
                } else {
                    return (lResult ^ 0x40000000 ^ lX8 ^ lY8);
                }
            } else {
                return (lResult ^ lX8 ^ lY8);
            }
        }

        function f(x, y, z) {
            return (x & y) | ((~x) & z);
        }

        function g(x, y, z) {
            return (x & z) | (y & (~z));
        }

        function h(x, y, z) {
            return (x ^ y ^ z);
        }

        function i(x, y, z) {
            return (y ^ (x | (~z)));
        }

        function FF(a, b, c, d, x, s, ac) {
            a = addUnsigned(a, addUnsigned(addUnsigned(f(b, c, d), x), ac));
            return addUnsigned(rotateLeft(a, s), b);
        }

        function GG(a, b, c, d, x, s, ac) {
            a = addUnsigned(a, addUnsigned(addUnsigned(g(b, c, d), x), ac));
            return addUnsigned(rotateLeft(a, s), b);
        }

        function HH(a, b, c, d, x, s, ac) {
            a = addUnsigned(a, addUnsigned(addUnsigned(h(b, c, d), x), ac));
            return addUnsigned(rotateLeft(a, s), b);
        }

        function II(a, b, c, d, x, s, ac) {
            a = addUnsigned(a, addUnsigned(addUnsigned(i(b, c, d), x), ac));
            return addUnsigned(rotateLeft(a, s), b);
        }

        function convertToWordArray(string) {
            var lWordCount;
            var lMessageLength = string.length;
            var lNumberOfWords_temp1 = lMessageLength + 8;
            var lNumberOfWords_temp2 = (lNumberOfWords_temp1 - (lNumberOfWords_temp1 % 64)) / 64;
            var lNumberOfWords = (lNumberOfWords_temp2 + 1) * 16;
            var lWordArray = new Array(lNumberOfWords - 1);
            var lBytePosition = 0;
            var lByteCount = 0;
            while (lByteCount < lMessageLength) {
                lWordCount = (lByteCount - (lByteCount % 4)) / 4;
                lBytePosition = (lByteCount % 4) * 8;
                lWordArray[lWordCount] = (lWordArray[lWordCount] | (string.charCodeAt(lByteCount) << lBytePosition));
                lByteCount++;
            }
            lWordCount = (lByteCount - (lByteCount % 4)) / 4;
            lBytePosition = (lByteCount % 4) * 8;
            lWordArray[lWordCount] = lWordArray[lWordCount] | (0x80 << lBytePosition);
            lWordArray[lNumberOfWords - 2] = lMessageLength << 3;
            lWordArray[lNumberOfWords - 1] = lMessageLength >>> 29;
            return lWordArray;
        }

        function wordToHex(lValue) {
            var WordToHexValue = "", WordToHexValue_temp = "", lByte, lCount;
            for (lCount = 0; lCount <= 3; lCount++) {
                lByte = (lValue >>> (lCount * 8)) & 255;
                WordToHexValue_temp = "0" + lByte.toString(16);
                WordToHexValue = WordToHexValue + WordToHexValue_temp.substr(WordToHexValue_temp.length - 2, 2);
            }
            return WordToHexValue;
        }

        function utf8Encode(string) {
            string = string.replace(/\r\n/g, "\n");
            var utftext = "";

            for (var n = 0; n < string.length; n++) {

                var c = string.charCodeAt(n);

                if (c < 128) {
                    utftext += String.fromCharCode(c);
                }
                else if ((c > 127) && (c < 2048)) {
                    utftext += String.fromCharCode((c >> 6) | 192);
                    utftext += String.fromCharCode((c & 63) | 128);
                }
                else {
                    utftext += String.fromCharCode((c >> 12) | 224);
                    utftext += String.fromCharCode(((c >> 6) & 63) | 128);
                    utftext += String.fromCharCode((c & 63) | 128);
                }

            }

            return utftext;
        }

        var x = [],
         k, AA, BB, CC, DD, a, b, c, d,
         S11 = 7, S12 = 12, S13 = 17, S14 = 22,
         S21 = 5, S22 = 9 , S23 = 14, S24 = 20,
         S31 = 4, S32 = 11, S33 = 16, S34 = 23,
         S41 = 6, S42 = 10, S43 = 15, S44 = 21;

        string = utf8Encode(string);

        x = convertToWordArray(string);

        a = 0x67452301;
        b = 0xEFCDAB89;
        c = 0x98BADCFE;
        d = 0x10325476;

        for (k = 0; k < x.length; k += 16) {
            AA = a;
            BB = b;
            CC = c;
            DD = d;
            a = FF(a, b, c, d, x[k + 0], S11, 0xD76AA478);
            d = FF(d, a, b, c, x[k + 1], S12, 0xE8C7B756);
            c = FF(c, d, a, b, x[k + 2], S13, 0x242070DB);
            b = FF(b, c, d, a, x[k + 3], S14, 0xC1BDCEEE);
            a = FF(a, b, c, d, x[k + 4], S11, 0xF57C0FAF);
            d = FF(d, a, b, c, x[k + 5], S12, 0x4787C62A);
            c = FF(c, d, a, b, x[k + 6], S13, 0xA8304613);
            b = FF(b, c, d, a, x[k + 7], S14, 0xFD469501);
            a = FF(a, b, c, d, x[k + 8], S11, 0x698098D8);
            d = FF(d, a, b, c, x[k + 9], S12, 0x8B44F7AF);
            c = FF(c, d, a, b, x[k + 10], S13, 0xFFFF5BB1);
            b = FF(b, c, d, a, x[k + 11], S14, 0x895CD7BE);
            a = FF(a, b, c, d, x[k + 12], S11, 0x6B901122);
            d = FF(d, a, b, c, x[k + 13], S12, 0xFD987193);
            c = FF(c, d, a, b, x[k + 14], S13, 0xA679438E);
            b = FF(b, c, d, a, x[k + 15], S14, 0x49B40821);
            a = GG(a, b, c, d, x[k + 1], S21, 0xF61E2562);
            d = GG(d, a, b, c, x[k + 6], S22, 0xC040B340);
            c = GG(c, d, a, b, x[k + 11], S23, 0x265E5A51);
            b = GG(b, c, d, a, x[k + 0], S24, 0xE9B6C7AA);
            a = GG(a, b, c, d, x[k + 5], S21, 0xD62F105D);
            d = GG(d, a, b, c, x[k + 10], S22, 0x2441453);
            c = GG(c, d, a, b, x[k + 15], S23, 0xD8A1E681);
            b = GG(b, c, d, a, x[k + 4], S24, 0xE7D3FBC8);
            a = GG(a, b, c, d, x[k + 9], S21, 0x21E1CDE6);
            d = GG(d, a, b, c, x[k + 14], S22, 0xC33707D6);
            c = GG(c, d, a, b, x[k + 3], S23, 0xF4D50D87);
            b = GG(b, c, d, a, x[k + 8], S24, 0x455A14ED);
            a = GG(a, b, c, d, x[k + 13], S21, 0xA9E3E905);
            d = GG(d, a, b, c, x[k + 2], S22, 0xFCEFA3F8);
            c = GG(c, d, a, b, x[k + 7], S23, 0x676F02D9);
            b = GG(b, c, d, a, x[k + 12], S24, 0x8D2A4C8A);
            a = HH(a, b, c, d, x[k + 5], S31, 0xFFFA3942);
            d = HH(d, a, b, c, x[k + 8], S32, 0x8771F681);
            c = HH(c, d, a, b, x[k + 11], S33, 0x6D9D6122);
            b = HH(b, c, d, a, x[k + 14], S34, 0xFDE5380C);
            a = HH(a, b, c, d, x[k + 1], S31, 0xA4BEEA44);
            d = HH(d, a, b, c, x[k + 4], S32, 0x4BDECFA9);
            c = HH(c, d, a, b, x[k + 7], S33, 0xF6BB4B60);
            b = HH(b, c, d, a, x[k + 10], S34, 0xBEBFBC70);
            a = HH(a, b, c, d, x[k + 13], S31, 0x289B7EC6);
            d = HH(d, a, b, c, x[k + 0], S32, 0xEAA127FA);
            c = HH(c, d, a, b, x[k + 3], S33, 0xD4EF3085);
            b = HH(b, c, d, a, x[k + 6], S34, 0x4881D05);
            a = HH(a, b, c, d, x[k + 9], S31, 0xD9D4D039);
            d = HH(d, a, b, c, x[k + 12], S32, 0xE6DB99E5);
            c = HH(c, d, a, b, x[k + 15], S33, 0x1FA27CF8);
            b = HH(b, c, d, a, x[k + 2], S34, 0xC4AC5665);
            a = II(a, b, c, d, x[k + 0], S41, 0xF4292244);
            d = II(d, a, b, c, x[k + 7], S42, 0x432AFF97);
            c = II(c, d, a, b, x[k + 14], S43, 0xAB9423A7);
            b = II(b, c, d, a, x[k + 5], S44, 0xFC93A039);
            a = II(a, b, c, d, x[k + 12], S41, 0x655B59C3);
            d = II(d, a, b, c, x[k + 3], S42, 0x8F0CCC92);
            c = II(c, d, a, b, x[k + 10], S43, 0xFFEFF47D);
            b = II(b, c, d, a, x[k + 1], S44, 0x85845DD1);
            a = II(a, b, c, d, x[k + 8], S41, 0x6FA87E4F);
            d = II(d, a, b, c, x[k + 15], S42, 0xFE2CE6E0);
            c = II(c, d, a, b, x[k + 6], S43, 0xA3014314);
            b = II(b, c, d, a, x[k + 13], S44, 0x4E0811A1);
            a = II(a, b, c, d, x[k + 4], S41, 0xF7537E82);
            d = II(d, a, b, c, x[k + 11], S42, 0xBD3AF235);
            c = II(c, d, a, b, x[k + 2], S43, 0x2AD7D2BB);
            b = II(b, c, d, a, x[k + 9], S44, 0xEB86D391);
            a = addUnsigned(a, AA);
            b = addUnsigned(b, BB);
            c = addUnsigned(c, CC);
            d = addUnsigned(d, DD);
        }

        var temp = wordToHex(a) + wordToHex(b) + wordToHex(c) + wordToHex(d);

        return temp.toLowerCase();
    };
});

_define('taobao.utils.uri.getParam',function() {
   return function (paramKey) {
        var queryString = this.queryMap || (function (paramStr) {
            if (paramStr.length < 1) {
                return "";
            }
            paramStr = paramStr.substr(1);
            var params = paramStr.split('&'),
                queryString = {},aparam,i;
            for (i in params) {
                aparam = params[i].split('=');
                queryString[decodeURIComponent(aparam[0])] = decodeURIComponent(aparam[1]);
            }
            return queryString;
        })(location.search);
        this.queryMap = queryString;
        if (paramKey) {
            return queryString[paramKey];
        }
        else {
            return queryString;
        }
    };
});
/**
 * @author 武仲(wuzhong@taobao.com)
 * @since 2013.6.3
 * @description
 *    URL 的生成工具
 */
_define('taobao.utils.uri.getUrl',function (require) {

    var config = require ? require('../config.js') : namespace('taobao.utils.config'),
        getParam = require? require('./parameter.js') : namespace('taobao.utils.uri.getParam'),
        http_env = {
            protocol: 'http://',
            sysType:  config.sysType,
            defaultDomain: 'taobao.com'
        },
        ttQueryStr = (function (_appendParams) {
            var result = '', i,key,value;
            for (i in _appendParams) {
                key = _appendParams[i];
                value = getParam(key);
                if (value && value !== '') {
                    result += ("&" + key + "=" + value);
                }
            }
            return result;
        })(['ttid', 'sprefer']);

    /**
     * @name uri
     * @requires config
     * @class uri
     * @param {Object} param
     * @param {String} param.subdomain   如 H5，API
     * @param {String} param.host  对应的host，如m.taobao.com
     * @param {String} param.path  location.pathname
     * @param {String} param.url 对应具体的url，如果设置了这个，以上参数全失效
     * @param {Object} param.data 请求参数
     *
     */
     return function (param) {

         function __append(dist,append){
             if(!append){
                 return dist;
             }
             if(dist.indexOf("?") < 0){
                 dist += '?';
             }
             var last = dist.charAt(dist.length - 1),
                 first = append.charAt(0);
             if('?' === last || '&' === last){
                 if('?' === first || '&' === first){
                     return dist + append.substr(1);
                 }else{
                     return dist + append;
                 }
             }else{
                 if('?' === first || '&' === first){
                     return dist + append;
                 }else{
                     return dist + '&' + append;
                 }
             }
         }

        var url = param.url || (function (http_env) {
            var host = param.host || ( param.subdomain + '.' + http_env.sysType + '.' + http_env.defaultDomain);
            return http_env.protocol + host + '/' + param.path;
        })(http_env);

        (url.indexOf('?') > 0) || (url += '?');
        url = __append(url,ttQueryStr);

        if (param.data) {
            url = __append(url,(function (j) {
                var s = '', k,v;
                if (null == j) {
                    return s;
                }
                for (k in j) {
                    v = j[k];
                    if (null != v && '' !== v) {
                        s += (k + '=' + encodeURIComponent(( "object" === typeof v ) ? JSON.stringify(v) : v) + '&');
                    }
                }

                if ('' !== s && (s.length - 1) === s.lastIndexOf('&')) {
                    s = s.substr(0, s.length - 1);
                }
                return s;
            })(param.data));
        }
        return url;
    };

});
/**
 * @author 武仲(wuzhong@taobao.com)
 * @since 2013.6.3
 * @name mtop
 * @requires $,url,md5,cookie
 * @module mtop
 * @description
 *    精简版本的mtop
 *    ## TODO
 *    1. mtop api 的实现过程
 *       1. 生成mtop请求url
 *       2. 获取mtop种在cookie中的token和当前时间并对url进行MD5加签
 *       3. 使用jsonp发起一次远程调用
 *    2. 注意的问题
 *       1. 必须和mtop同域
 */
_define('taobao.biz.mtop',function(require, exports) {
    // require module
    var $ = require ? require("zepto","$") : namespace("$"),
        cookie = require ? require('../../utils/cookie') : namespace('taobao.utils.cookie'),
        md5 =  require ?  require('../../utils/encode/md5') : namespace('taobao.utils.encode.md5'),
        getUrl =  require ? require('../../utils/uri/uri.js') : namespace('taobao.utils.uri.getUrl'),
        app_key_id = 'J_app_key',
        apiType = 'h5ApiUpdate.do',
        tokenKey = "_m_h5_tk",
        failTimes = 0,
        maxFailTimes = 5,
        isOnExcute = false,
        appKey = (function () {
            var dom = document.getElementById(app_key_id);
            if (dom) {
                return dom.value;
            } else {
                return '12574478';
            }
        })(),
        callQue = [];


    /**
     * @example
     *    namespace('taobao.utils.server.simplemtop').getApi(
     *    'mtop.wdetail.getItemDetail',
     *    '3.0',
     *    {'itemNumId': 19741499469}, {'ttid': '2000@taobao_h5_3.0'},
     *    function (result) {
     *               console.log(result);
     *           }, function () {
     *               alert(error);
     *           }
     *    )
     *
     * @param {String} api  对应的mtop api
     * @param {String} v    api版本
     * @param {Object} data   mtop接口的入参
     * @param {Object} extParam   额外的参数
     * @param {Function} callback 成功的回调
     * @param {Function} errorback  失败的回调
     */
    exports.getApi = function(api, v, data, extParam, callback, errorback) {
        extParam.api = api;
        extParam.v = v || "*";
        extParam.data = typeof (data) === "string" ? JSON.parse(data) : data;
        callQue.push({params: extParam, callback: callback, errorback: errorback});
        if (!isOnExcute) {
            isOnExcute = true;
            _exceutCall();
        }
    };

    /**
     *执行队列方法
     */
    var _exceutCall = function () {
        if (callQue.length > 0) {
            new MtopExecutor(callQue.pop(0)).run();
        }
        else {
            isOnExcute = false;
        }
    };

    /**
     * url,
     * @param options
     * @constructor
     */
    var MtopExecutor = function (options) {
        this.options = options;
        this.appKey = appKey;
        this.appToken = this.getToken();
        this.t = (new Date()).getTime();
        this.callback = options.callback;
        this.errorback = options.errorback;
        this.isChunk = !!options.params.apis;
    };

    $.extend(MtopExecutor.prototype, {
        run: function () {
            var that = this,
                sendUrl = this._genSignUrl(),
                options = {
                    type: 'GET',
                    url: sendUrl,
                    timeout: 20000,
                    success: function (result) {
                        // if token is expired, low percent event.
                        var ret = (result.ret ? result.ret : "").toString();
                        //如果是token过期重新发送请求
                        //如果成功failTimes为0
                        if (-1 !== ret.indexOf('SUCCESS::')) {
                            failTimes = 0;
                        }
                        else {
                            if (-1 !== ret.indexOf('TOKEN_EMPTY::') || -1 !== ret.indexOf('TOKEN_EXOIRED::')) {
                                failTimes++;
                                if (failTimes < maxFailTimes) {
                                    new MtopExecutor(that.options).run();
                                    return;
                                }
                                else {
                                    cookie.delCookie(tokenKey);
                                    console.log('try exceed times');
                                }
                            }
                        }
                        if (that.callback) {
                            that.callback(result);
                        }
                        _exceutCall();

                    },
                    error: function (error) {
                        if (that.errorback) {
                            that.errorback(error);
                        }
                        _exceutCall();
                    },
                    complete: function (xhr, status) {
                        if (status !== 'success' && that.errorback) {
                            that.errorback(status);
                        }
                        _exceutCall();
                    }
                };

            $.ajax(options);
        },

        getToken: function () {
            return  (cookie.getCookie(tokenKey) || '').split('_')[0];
        },

        _genSignUrl: function () {
            var path = 'rest/' + apiType,
                url = getUrl({
                    subdomain: 'api',
                    path: path,
                    data: this.options.params
                });
            return this._addJsonParam(url) + '&appKey=' + this.appKey + '&sign=' + this._sign(JSON.stringify(this.options.params.data)) + '&t=' + this.t;
        },

        _addJsonParam: function (url) {
            if (-1 === url.indexOf('callback=')) {
                var index = url.indexOf('?');
                return url.substr(0, index) + '?callback=?&type=jsonp&' + url.substr(index + 1, url.length);
            }
            else {
                return url;
            }
        },

        _sign: function (dataStr) {
            var signTemp = this.appToken + '&' + this.t + "&" + this.appKey + "&" + dataStr;
            //  console.log('原串：'+signTemp);
            signTemp = md5(signTemp);
            // console.log('签名串：'+signTemp);
            return signTemp;
        }
    });
});