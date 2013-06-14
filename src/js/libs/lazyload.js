/* Lazyload
 *页面图片延迟加载
 *
 *  caochun edit by 20120724,修复safari下,前进回退键到当前页面onscroll事件失效
 *  caochun edit by 20130220,扩展图片高清方案
 */
(function($){
    var win = window;
    function compare(d1,d2){
        var left = d2.right > d1.left && d2.left < d1.right,
            top = d2.bottom > d1.top && d2.top < d1.bottom;
        return left && top;
    }
    function getCoord(obj,param){
        if(!obj) return;
        var w,h,l,t,el;
        if(obj != win){
            el = obj.offset ? obj : $(obj);
            el = el.offset();
            w = el.width;
            h = el.height;
            l = el.left;
            t = el.top;
        }
        else{  //container
            var lazyHeight = param && param.x || 0,
                lazyWidth =  param && param.y || 0;
            w = obj.innerWidth + lazyWidth;
            h = obj.innerHeight + lazyHeight;
            l = obj.pageXOffset;
            t = obj.pageYOffset;
        }
        return{
            'left' : l,
            'top' : t,
            'right' : l + w,
            'bottom' : t + h
        }
    }
    // $ = require ? require('zepto') : window['$'],
    var lazyload = {
            init : function(opt){
                this.img.init(opt);
            },
            img : {
                init : function(opt){
                    var that = this;
                    if(that.isload){  //已经初始化过，就触发trigger
                        that.trigger();
                        return;
                    }
                    var op = {
                            lazyHeight : 400, //预加载当前屏幕以下lazyHeight内的图片
                            lazyWidth : 0,
                            definition : false,  //true表示retina需要显示size大小的图片
                            size : null  //图片尺寸大小，默认直接去掉后缀使用原图大小，支持多种DPI{'1.5' : '120x120' , '2' : '180x180'}
                        },
                        opt = opt || {};
                    $.extend(that,op,opt);
                    var definition = that.definition,
                        devicePixelRatio = win.devicePixelRatio;
                    that.definition = definition && devicePixelRatio && devicePixelRatio > 1 || false;  //配置true且devicePixelRatio大于1，部分安卓机器是1.5的
                    that.DPR = devicePixelRatio;
                    var minDist = 5,
                        minTime = 200,  //单位ms
                        isPhone = that.isPhone = that.fetchVersion();
                    if(isPhone){  //针对ios6以下的版本,后退键回到页面不触发onscroll时，直接使用touch事件替代
                        var touchLazy,
                            timerPhone;
                        $(win).on('touchstart', function(ev){
                            //var et = ev.changedTouches[0];
                            touchLazy = {
                                //sx : et.clientX,
                                sy : win.pageYOffset,
                                time : Date.now()
                            };
                            //$('#test')[0].innerHTML += 'starty:'+window.scrollY+'<br>';
                            timerPhone && clearTimeout(timerPhone);
                        }).on('touchend', function(ev){
                                if(ev && ev.changedTouches){
                                    var disty = Math.abs(win.pageYOffset - touchLazy.sy);
                                    //distx = Math.abs(et.clientX - touchLazy.sx),
                                    //$('#test')[0].innerHTML += 'endy:'+window.scrollY+'<br>';
                                    if(disty > minDist){/* && disty > distx*/
                                        var timedist = Date.now() - touchLazy.time;
                                        timerPhone = setTimeout(function(){
                                            that.changeimg();
                                            touchLazy = {};
                                            clearTimeout(timerPhone);
                                            timerPhone = null;
                                        },timedist > minTime ? 0 : 200);
                                    }
                                }
                                else{  //trigger触发
                                    that.changeimg();
                                }
                            }).on('touchcancel',function(){
                                timerPhone && clearTimeout(timerPhone);
                                touchLazy = null;
                            });
                    }
                    else{
                        $(win).on('scroll', function(){
                            that.changeimg();
                        });
                    }
                    that.trigger();
                    that.isload = true;
                },
                trigger : function(size){
                    var that = this,
                        isPhone = that.isPhone,
                        eventType = isPhone && 'touchend' || 'scroll';
                    if(that['imglist']){
                        that['imglist'].each(function(n,node){
                            node && (node.onerror = node.onload = null);
                        });
                    }
                    size && (that.size = size);
                    that['imglist'] = $('img.lazy');
                    //that['prevlist'] = $(that['imglist'].concat());
                    $(window).trigger(eventType);
                },
                fetchVersion : function(){
                    var systemVer = navigator.appVersion.match(/(iPhone\sOS)\s([\d_]+)/),
                        isPhone = systemVer && true || false,
                        version = isPhone && systemVer[2].split('_');
                    version = version && parseFloat(version.length > 1 ? version.splice(0,2).join('.') : version[0],10);
                    return isPhone && version < 6;
                },
                setImgSrc : function(url,size){
                    if(!url) return;
                    size = size || this.size;
                    size = size && (typeof size == 'string' ? size : size[this.DPR]) || null;
                    size && (size = ['_' , size , '.jpg'].join(''));
                    var arr = url.lastIndexOf('_.'),  //查找最后一个，url中可能存在_.
                        last = arr != -1 ? url.slice(arr+2) : null,  //取到_.后的字符串
                        isWebp = last && last.toLowerCase() == 'webp' ? true : false,  //是否webp
                        newurl = isWebp ? url.slice(0,arr) : url,
                        src = newurl.replace(/_\d+x\d+\.jpg?/g,'');  //去掉存在的后缀_100x100.jpg
                    src += size;
                    return isWebp && (src + '_.webp') || src;
                },
                getCoord : getCoord,
                changeimg : function(){
                    var that = this,
                        win = window,
                        lazyo = {
                            x : that.lazyWidth,
                            y : that.lazyHeight
                        },
                        definition = that.definition;
                    /*function inViewport(el){
                     var top = win.pageYOffset,
                     btm = top + win.innerHeight,
                     offset = el.offset(),
                     elTop = offset.top;
                     //console.log(el.offset().top);
                     if(elTop == 0 && offset.left == 0){  //当页面隐藏时，宽高为0（img取高度会存在延时，所以取img的left & top）
                     return false;
                     }
                     return elTop >= top && elTop - lazyHeight <= btm;
                     }*/
                    function act(_self,n){
                        var original = _self.attr('dataimg'),
                            datasize = _self.attr('datasize');
                        if(!original) return;
                        definition && (original = that.setImgSrc(original,datasize));
                        _self.attr('src', original);
                        if(!_self[0].onload){
                            _self[0].onload = _self[0].onerror = function(){
                                $(this).removeClass('lazy').removeAttr('dataimg');
                                that['imglist'][n] = null;
                                this.onerror = this.onload = null;
                            }
                            /*_self[0].onerror = function(){
                             this.src = 'http://a.tbcdn.cn/mw/s/common/icons/nopic/no-90.png';
                             $(this).removeClass('lazy').removeAttr('dataimg');
                             that['imglist'][n] = null;
                             this.onerror = this.onload = null;
                             }*/
                        }
                    }
                    that['imglist'].each(function(index,node){
                        if(!node) return;
                        var $this = $(node);
                        if(!compare(getCoord(win,lazyo),getCoord($this))) return;
                        act($this,index);
                    });
                }
            }
        };
    window.lazyload= lazyload;
})(Zepto);
