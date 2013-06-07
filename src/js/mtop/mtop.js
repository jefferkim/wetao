/**
 * @author 武仲(wuzhong@taobao.com)
 * @since 2013.6.3
 * @description
 *    精简版本的mtop
 */
;(function () {
    // require module
    var $ = window.$,
        cookie = namespace('taobao.utils.server.cookie'),
        md5 = namespace('taobao.utils.server.encode.md5'),
        getUrl = namespace('taobao.utils.server.uri.getUrl'),
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
        })(), appToken,
        callQue = [];


    /**
     * @name mtop
     * @requires $,url,md5,cookie
     * @class 精简的mtop api
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
    var mtop = {
        getApi: function(api, v, data, extParam, callback, errorback) {
            extParam.api = api;
            extParam.v = v || "*";
            extParam.data = typeof (data) == "string" ? JSON.parse(data) : data;
            callQue.push({params: extParam, callback: callback, errorback: errorback});
            if (!isOnExcute) {
                isOnExcute = true;
                _exceutCall();
            }
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
    }

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
    }

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
                        if (-1 != ret.indexOf('SUCCESS::')) {
                            failTimes = 0;
                        }
                        else {
                            if (-1 != ret.indexOf('TOKEN_EMPTY::') || -1 != ret.indexOf('TOKEN_EXOIRED::')) {
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
                        if (status != 'success' && that.errorback) {
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
                    data: this.options.params,
                });
            return this._addJsonParam(url) + '&appKey=' + this.appKey + '&sign=' + this._sign(JSON.stringify(this.options.params.data)) + '&t=' + this.t;
        },

        _addJsonParam: function (url) {
            if (-1 == url.indexOf('callback=')) {
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
    })
    ;

    namespace('taobao.utils.server.simplemtop', mtop);

})();