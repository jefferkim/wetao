;
(function () {
    namespace('taobao.utils.server.uri.getParam', function (paramKey) {
        var queryString = this.queryMap || (function (paramStr) {
            if (paramStr.length < 1) {
                return "";
            }
            paramStr = paramStr.substr(1);
            var params = paramStr.split('&');
            var queryString = {};
            for (i in params) {
                var aparam = params[i].split('=');
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
    });
})();