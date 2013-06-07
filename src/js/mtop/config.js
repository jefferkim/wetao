/**
* global configuration
*
* @sysType : check system type , m or wapa or waptest
*
* @author  : yanyuan
* @date	   : 2012-03-16
*/
(function(factory) {
    if (window['define'] == undefined) {
        var module = {},
            exports = module.exports = {};
        namespace('taobao.utils.server.config', (factory(null, exports, module) || module.exports));

    } else {
        define(factory);
    }
})(function(require, exports, module){
	// loading
	{
		var _checkSysType = 'm',_defaultAppKey='12574478';
		if(window.location.host=='localhost' || window.location.host.match('.*\\waptest\\.(taobao|tmall|etao|alibaba|alipay|aliyun)\\.com.*')){
			_checkSysType = 'waptest';
			_defaultAppKey='4272';
		} else if (window.location.host.match('.*\\wapa\\.(taobao|tmall|etao|alibaba|alipay|aliyun)\\.com.*'))
		{
			_checkSysType = 'wapa';
		}
		 else if (window.location.host.match('.*\\m\\.(taobao|tmall|etao|alibaba|alipay|aliyun)\\.com.*'))
        {
            _checkSysType = 'm';
        }
	}
	// _checkSysType = 'waptest';
	// [auto check]system type , m or wapa or waptest
     exports.sysType = _checkSysType || 'm';
 	 exports.defaultAppKey = _defaultAppKey || '12574478';
     //need remove flow code

	// [need config]index page
	exports.indexPage = 'http://fav.' + exports.sysType + '.taobao.com/h5proxy-midFav.htm';
	// [need config]error page
	exports.errorPage = 'http://fav.' + exports.sysType + '.taobao.com/fav_error.htm';

});
