/**
 * User: 晓田(tancy)
 * Date: 13-6-13
 * Time: 下午7:06
 */
(function(tb){
    window.tb=tb;
    var _doc=document,_ua=navigator.userAgent,_env;
    _env={
        ENV:function(){
            var b={
                DEBUG:window.location.host=="ibambo.com",
                STAGING:window.location.host.match(/mobile-staging/),
                REV:"NONE"
            };
            var e={logStartup:!0};
            if(window.ENV)
                e=window.ENV.DECIDER,delete window.ENV.DECIDER,_iba.augment(b,window.ENV,!0);
            b.DEBUG&&_iba.setLogLevel("debug");
            b.STAGING&&_iba.setLogLevel("debug");
            b.isEnabled=function(a){return e&&e[a]};
            return b
        }(),
        Browser:function(){
            var _browser={
                Svg:!1,
                HardwareAccel:!1,
                fixedPositioning:!1,
                Apple:!1,
                Safari:!1,
                Android:!1,
                WebKit:!1,
                Chrome:!1,
                iPad:!1,
                PlayBook:!1,
                TouchDevice:!0,
                Gecko:!1,
                Firefox:!1,
                Nokia:!1,
                version:0,
                desktop:!1
            },e;
            if(!_iba.isUndefined(navigator)){
                if(/ AppleWebKit\//.test(_ua))_browser.WebKit=!0;
                if(/Android/.test(_ua))_browser.Android=!0;
                if(/Chrome/.test(_ua))_browser.Chrome=!0;
                if(/RIM Tablet OS/.test(_ua))_browser.PlayBook=!0;
                if(/Nokia/.test(_ua))_browser.Nokia=!0;
                if(/Firefox/.test(_ua))_browser.Firefox=!0;
                if(/i(Phone|P(o|a)d)/.test(_ua))_browser.Apple=!0;
                if(/Gecko/.test(_ua)&&!/KHTML/.test(_ua)&&!/AppleWebKit/.test(_ua))_browser.Gecko=!0;
                if(_browser.Apple&&/iPad/.test(_ua))_browser.iPad=!0;
                if(_browser.Apple||!_browser.PlayBook&&!_browser.Android&&/Safari/.test(_ua))_browser.Safari=!0;
                _browser.tablet=!1;
                if(_browser.iPad||_browser.Chrome||_browser.PlayBook)_browser.tablet=!0;
                if((e=window.location.search.match(/html5=(\w+)/))&&e.length==2)
                    if(e=e[1].toLowerCase(),e=="android_tablet")
                        _browser.Apple=!1,_browser.iPad=!1,_browser.Android=!0,_browser.Chrome=!1,_browser.tablet=!0;
                if(_browser.Apple)
                    if((e=_ua.match(/iPhone OS (\d)/))&&e.length==2)
                        _browser.version=parseInt(e[1],10);
                    else{
                        if((e=_ua.match(/OS (\d)/))&&e.length==2)_browser.version=parseInt(e[1],10)
                    }else if(_browser.Android){
                    if((e=_ua.match(/Android (\d)\.(\d)/))&&e.length==3)_browser.version=parseFloat(e[1]+"."+e[2],10)
                }else if(_browser.Firefox&&(e=_ua.match(/Firefox\/(\d)?(\d)\.(\d)/))&&e.length==3)
                    _browser.version=parseFloat(e[1]+"."+e[2],10);
                if(_browser.Android&&_browser.version>=2.3||!_browser.Android&&_browser.Gecko)
                    _browser.fixedPositioning=!0;
                if(_browser.Apple&&_browser.Safari||_browser.tablet)
                    if(_browser.HardwareAccel=!0,_browser.Apple&&_browser.version<4)
                        _browser.HardwareAccel=!1
                try {
                    var svg = document.createElementNS( "http://www.w3.org/2000/svg", 'svg' );
                    _browser.Svg = typeof svg.createSVGPoint == 'function';
                } catch(e){}
            }
            if(typeof window.ontouchstart==="undefined"||_browser.Gecko)
                if(_browser.TouchDevice=!1,_browser.Apple)
                    _browser.desktop=!0;
            _browser.Android&&_iba.addClass(_doc.documentElement,"android");
            _browser.Apple&&!_browser.iPad&&_iba.addClass(_doc.documentElement,"iphone");
            _browser.iPad&&_iba.addClass(_doc.documentElement,"ipad");
            _browser.PlayBook&&_iba.addClass(_doc.documentElement,"playbook");
            _browser.tablet&&_iba.addClass(_doc.documentElement,"tablet");
            _browser.Firefox&&_iba.addClass(_doc.documentElement,"firefox");
            return _browser
        }()
    };
    _env.Browser.Gecko&&(window.HTMLElement.prototype.__defineGetter__("parentElement",function(){
        return this.parentNode
    }),window.HTMLElement.prototype.__defineGetter__("innerText",function(){
        var a=this.childNodes;
        if(a.length&&a[0].nodeType==3)
            return a[0].nodeValue;
        return this.innerHTML
    })
        );
    tb.env=_env;
})(window.tb||{});