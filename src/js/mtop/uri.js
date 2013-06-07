/**
 * @author 武仲(wuzhong@taobao.com)
 * @since 2013.6.3
 * @description
 *    URL 的生成工具
 */
;(function () {
    var http_env = {
        protocol: 'http://',
        sysType: (function(){
            return namespace('taobao.utils.server.config').sysType || 'm';
        })(),
    defaultDomain: 'taobao.com'
},
    ttQueryStr = (function (_appendParams) {
        var result = '';
        for (var i in _appendParams) {
            var key = _appendParams[i];
            var value = namespace('taobao.utils.server.uri.getParam')(key);
            if (value && value != '') {
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
var getUrl = function (param) {
    var url = param.url || (function(env){
        var host =  param.host || ( param.subdomain + '.' + http_env.sysType + '.' + http_env.defaultDomain);
        return http_env.protocol + host  + '/' + param.path;
    })(http_env);

    (url.indexOf('?') > 0) || (url += '?');
    url += ttQueryStr;

    if(param.data){
        url += (function(j){
            var s = '';
            if (null == j) {
                return s;
            }
            for (var k in j) {
                var v = j[k];
                if (null != v && '' != v) {
                    s += (k + '=' + encodeURIComponent(( "object" == typeof v ) ? JSON.stringify(v) : v) + '&');
                }
            }

            if ('' != s && (s.length - 1) == s.lastIndexOf('&')) {
                s = s.substr(0, s.length - 1);
            }
            return s;
        })(param.data);
    }
    return url;
}

namespace('taobao.utils.server.uri.getUrl',getUrl);

})();