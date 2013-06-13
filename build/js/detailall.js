
/*! PROJECT_NAME - v0.1.0 - 2013-06-13
* http://PROJECT_WEBSITE/
* Copyright (c) 2013 YOUR_NAME; Licensed MIT */
(function(a){String.prototype.trim===a&&(String.prototype.trim=function(){return this.replace(/^\s+|\s+$/g,"")}),Array.prototype.reduce===a&&(Array.prototype.reduce=function(b){if(this===void 0||this===null)throw new TypeError;var c=Object(this),d=c.length>>>0,e=0,f;if(typeof b!="function")throw new TypeError;if(d==0&&arguments.length==1)throw new TypeError;if(arguments.length>=2)f=arguments[1];else do{if(e in c){f=c[e++];break}if(++e>=d)throw new TypeError}while(!0);while(e<d)e in c&&(f=b.call(a,f,c[e],e,c)),e++;return f})})();var Zepto=function(){function E(a){return a==null?String(a):y[z.call(a)]||"object"}function F(a){return E(a)=="function"}function G(a){return a!=null&&a==a.window}function H(a){return a!=null&&a.nodeType==a.DOCUMENT_NODE}function I(a){return E(a)=="object"}function J(a){return I(a)&&!G(a)&&a.__proto__==Object.prototype}function K(a){return a instanceof Array}function L(a){return typeof a.length=="number"}function M(a){return g.call(a,function(a){return a!=null})}function N(a){return a.length>0?c.fn.concat.apply([],a):a}function O(a){return a.replace(/::/g,"/").replace(/([A-Z]+)([A-Z][a-z])/g,"$1_$2").replace(/([a-z\d])([A-Z])/g,"$1_$2").replace(/_/g,"-").toLowerCase()}function P(a){return a in j?j[a]:j[a]=new RegExp("(^|\\s)"+a+"(\\s|$)")}function Q(a,b){return typeof b=="number"&&!l[O(a)]?b+"px":b}function R(a){var b,c;return i[a]||(b=h.createElement(a),h.body.appendChild(b),c=k(b,"").getPropertyValue("display"),b.parentNode.removeChild(b),c=="none"&&(c="block"),i[a]=c),i[a]}function S(a){return"children"in a?f.call(a.children):c.map(a.childNodes,function(a){if(a.nodeType==1)return a})}function T(c,d,e){for(b in d)e&&(J(d[b])||K(d[b]))?(J(d[b])&&!J(c[b])&&(c[b]={}),K(d[b])&&!K(c[b])&&(c[b]=[]),T(c[b],d[b],e)):d[b]!==a&&(c[b]=d[b])}function U(b,d){return d===a?c(b):c(b).filter(d)}function V(a,b,c,d){return F(b)?b.call(a,c,d):b}function W(a,b,c){c==null?a.removeAttribute(b):a.setAttribute(b,c)}function X(b,c){var d=b.className,e=d&&d.baseVal!==a;if(c===a)return e?d.baseVal:d;e?d.baseVal=c:b.className=c}function Y(a){var b;try{return a?a=="true"||(a=="false"?!1:a=="null"?null:isNaN(b=Number(a))?/^[\[\{]/.test(a)?c.parseJSON(a):a:b):a}catch(d){return a}}function Z(a,b){b(a);for(var c in a.childNodes)Z(a.childNodes[c],b)}var a,b,c,d,e=[],f=e.slice,g=e.filter,h=window.document,i={},j={},k=h.defaultView.getComputedStyle,l={"column-count":1,columns:1,"font-weight":1,"line-height":1,opacity:1,"z-index":1,zoom:1},m=/^\s*<(\w+|!)[^>]*>/,n=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,o=/^(?:body|html)$/i,p=["val","css","html","text","data","width","height","offset"],q=["after","prepend","before","append"],r=h.createElement("table"),s=h.createElement("tr"),t={tr:h.createElement("tbody"),tbody:r,thead:r,tfoot:r,td:s,th:s,"*":h.createElement("div")},u=/complete|loaded|interactive/,v=/^\.([\w-]+)$/,w=/^#([\w-]*)$/,x=/^[\w-]+$/,y={},z=y.toString,A={},B,C,D=h.createElement("div");return A.matches=function(a,b){if(!a||a.nodeType!==1)return!1;var c=a.webkitMatchesSelector||a.mozMatchesSelector||a.oMatchesSelector||a.matchesSelector;if(c)return c.call(a,b);var d,e=a.parentNode,f=!e;return f&&(e=D).appendChild(a),d=~A.qsa(e,b).indexOf(a),f&&D.removeChild(a),d},B=function(a){return a.replace(/-+(.)?/g,function(a,b){return b?b.toUpperCase():""})},C=function(a){return g.call(a,function(b,c){return a.indexOf(b)==c})},A.fragment=function(b,d,e){b.replace&&(b=b.replace(n,"<$1></$2>")),d===a&&(d=m.test(b)&&RegExp.$1),d in t||(d="*");var g,h,i=t[d];return i.innerHTML=""+b,h=c.each(f.call(i.childNodes),function(){i.removeChild(this)}),J(e)&&(g=c(h),c.each(e,function(a,b){p.indexOf(a)>-1?g[a](b):g.attr(a,b)})),h},A.Z=function(a,b){return a=a||[],a.__proto__=c.fn,a.selector=b||"",a},A.isZ=function(a){return a instanceof A.Z},A.init=function(b,d){if(!b)return A.Z();if(F(b))return c(h).ready(b);if(A.isZ(b))return b;var e;if(K(b))e=M(b);else if(I(b))e=[J(b)?c.extend({},b):b],b=null;else if(m.test(b))e=A.fragment(b.trim(),RegExp.$1,d),b=null;else{if(d!==a)return c(d).find(b);e=A.qsa(h,b)}return A.Z(e,b)},c=function(a,b){return A.init(a,b)},c.extend=function(a){var b,c=f.call(arguments,1);return typeof a=="boolean"&&(b=a,a=c.shift()),c.forEach(function(c){T(a,c,b)}),a},A.qsa=function(a,b){var c;return H(a)&&w.test(b)?(c=a.getElementById(RegExp.$1))?[c]:[]:a.nodeType!==1&&a.nodeType!==9?[]:f.call(v.test(b)?a.getElementsByClassName(RegExp.$1):x.test(b)?a.getElementsByTagName(b):a.querySelectorAll(b))},c.contains=function(a,b){return a!==b&&a.contains(b)},c.type=E,c.isFunction=F,c.isWindow=G,c.isArray=K,c.isPlainObject=J,c.isEmptyObject=function(a){var b;for(b in a)return!1;return!0},c.inArray=function(a,b,c){return e.indexOf.call(b,a,c)},c.camelCase=B,c.trim=function(a){return a.trim()},c.uuid=0,c.support={},c.expr={},c.map=function(a,b){var c,d=[],e,f;if(L(a))for(e=0;e<a.length;e++)c=b(a[e],e),c!=null&&d.push(c);else for(f in a)c=b(a[f],f),c!=null&&d.push(c);return N(d)},c.each=function(a,b){var c,d;if(L(a)){for(c=0;c<a.length;c++)if(b.call(a[c],c,a[c])===!1)return a}else for(d in a)if(b.call(a[d],d,a[d])===!1)return a;return a},c.grep=function(a,b){return g.call(a,b)},window.JSON&&(c.parseJSON=JSON.parse),c.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){y["[object "+b+"]"]=b.toLowerCase()}),c.fn={forEach:e.forEach,reduce:e.reduce,push:e.push,sort:e.sort,indexOf:e.indexOf,concat:e.concat,map:function(a){return c(c.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return c(f.apply(this,arguments))},ready:function(a){return u.test(h.readyState)?a(c):h.addEventListener("DOMContentLoaded",function(){a(c)},!1),this},get:function(b){return b===a?f.call(this):this[b>=0?b:b+this.length]},toArray:function(){return this.get()},size:function(){return this.length},remove:function(){return this.each(function(){this.parentNode!=null&&this.parentNode.removeChild(this)})},each:function(a){return e.every.call(this,function(b,c){return a.call(b,c,b)!==!1}),this},filter:function(a){return F(a)?this.not(this.not(a)):c(g.call(this,function(b){return A.matches(b,a)}))},add:function(a,b){return c(C(this.concat(c(a,b))))},is:function(a){return this.length>0&&A.matches(this[0],a)},not:function(b){var d=[];if(F(b)&&b.call!==a)this.each(function(a){b.call(this,a)||d.push(this)});else{var e=typeof b=="string"?this.filter(b):L(b)&&F(b.item)?f.call(b):c(b);this.forEach(function(a){e.indexOf(a)<0&&d.push(a)})}return c(d)},has:function(a){return this.filter(function(){return I(a)?c.contains(this,a):c(this).find(a).size()})},eq:function(a){return a===-1?this.slice(a):this.slice(a,+a+1)},first:function(){var a=this[0];return a&&!I(a)?a:c(a)},last:function(){var a=this[this.length-1];return a&&!I(a)?a:c(a)},find:function(a){var b,d=this;return typeof a=="object"?b=c(a).filter(function(){var a=this;return e.some.call(d,function(b){return c.contains(b,a)})}):this.length==1?b=c(A.qsa(this[0],a)):b=this.map(function(){return A.qsa(this,a)}),b},closest:function(a,b){var d=this[0],e=!1;typeof a=="object"&&(e=c(a));while(d&&!(e?e.indexOf(d)>=0:A.matches(d,a)))d=d!==b&&!H(d)&&d.parentNode;return c(d)},parents:function(a){var b=[],d=this;while(d.length>0)d=c.map(d,function(a){if((a=a.parentNode)&&!H(a)&&b.indexOf(a)<0)return b.push(a),a});return U(b,a)},parent:function(a){return U(C(this.pluck("parentNode")),a)},children:function(a){return U(this.map(function(){return S(this)}),a)},contents:function(){return this.map(function(){return f.call(this.childNodes)})},siblings:function(a){return U(this.map(function(a,b){return g.call(S(b.parentNode),function(a){return a!==b})}),a)},empty:function(){return this.each(function(){this.innerHTML=""})},pluck:function(a){return c.map(this,function(b){return b[a]})},show:function(){return this.each(function(){this.style.display=="none"&&(this.style.display=null),k(this,"").getPropertyValue("display")=="none"&&(this.style.display=R(this.nodeName))})},replaceWith:function(a){return this.before(a).remove()},wrap:function(a){var b=F(a);if(this[0]&&!b)var d=c(a).get(0),e=d.parentNode||this.length>1;return this.each(function(f){c(this).wrapAll(b?a.call(this,f):e?d.cloneNode(!0):d)})},wrapAll:function(a){if(this[0]){c(this[0]).before(a=c(a));var b;while((b=a.children()).length)a=b.first();c(a).append(this)}return this},wrapInner:function(a){var b=F(a);return this.each(function(d){var e=c(this),f=e.contents(),g=b?a.call(this,d):a;f.length?f.wrapAll(g):e.append(g)})},unwrap:function(){return this.parent().each(function(){c(this).replaceWith(c(this).children())}),this},clone:function(){return this.map(function(){return this.cloneNode(!0)})},hide:function(){return this.css("display","none")},toggle:function(b){return this.each(function(){var d=c(this);(b===a?d.css("display")=="none":b)?d.show():d.hide()})},prev:function(a){return c(this.pluck("previousElementSibling")).filter(a||"*")},next:function(a){return c(this.pluck("nextElementSibling")).filter(a||"*")},html:function(b){return b===a?this.length>0?this[0].innerHTML:null:this.each(function(a){var d=this.innerHTML;c(this).empty().append(V(this,b,a,d))})},text:function(b){return b===a?this.length>0?this[0].textContent:null:this.each(function(){this.textContent=b})},attr:function(c,d){var e;return typeof c=="string"&&d===a?this.length==0||this[0].nodeType!==1?a:c=="value"&&this[0].nodeName=="INPUT"?this.val():!(e=this[0].getAttribute(c))&&c in this[0]?this[0][c]:e:this.each(function(a){if(this.nodeType!==1)return;if(I(c))for(b in c)W(this,b,c[b]);else W(this,c,V(this,d,a,this.getAttribute(c)))})},removeAttr:function(a){return this.each(function(){this.nodeType===1&&W(this,a)})},prop:function(b,c){return c===a?this[0]&&this[0][b]:this.each(function(a){this[b]=V(this,c,a,this[b])})},data:function(b,c){var d=this.attr("data-"+O(b),c);return d!==null?Y(d):a},val:function(b){return b===a?this[0]&&(this[0].multiple?c(this[0]).find("option").filter(function(a){return this.selected}).pluck("value"):this[0].value):this.each(function(a){this.value=V(this,b,a,this.value)})},offset:function(a){if(a)return this.each(function(b){var d=c(this),e=V(this,a,b,d.offset()),f=d.offsetParent().offset(),g={top:e.top-f.top,left:e.left-f.left};d.css("position")=="static"&&(g.position="relative"),d.css(g)});if(this.length==0)return null;var b=this[0].getBoundingClientRect();return{left:b.left+window.pageXOffset,top:b.top+window.pageYOffset,width:Math.round(b.width),height:Math.round(b.height)}},css:function(a,c){if(arguments.length<2&&typeof a=="string")return this[0]&&(this[0].style[B(a)]||k(this[0],"").getPropertyValue(a));var d="";if(E(a)=="string")!c&&c!==0?this.each(function(){this.style.removeProperty(O(a))}):d=O(a)+":"+Q(a,c);else for(b in a)!a[b]&&a[b]!==0?this.each(function(){this.style.removeProperty(O(b))}):d+=O(b)+":"+Q(b,a[b])+";";return this.each(function(){this.style.cssText+=";"+d})},index:function(a){return a?this.indexOf(c(a)[0]):this.parent().children().indexOf(this[0])},hasClass:function(a){return e.some.call(this,function(a){return this.test(X(a))},P(a))},addClass:function(a){return this.each(function(b){d=[];var e=X(this),f=V(this,a,b,e);f.split(/\s+/g).forEach(function(a){c(this).hasClass(a)||d.push(a)},this),d.length&&X(this,e+(e?" ":"")+d.join(" "))})},removeClass:function(b){return this.each(function(c){if(b===a)return X(this,"");d=X(this),V(this,b,c,d).split(/\s+/g).forEach(function(a){d=d.replace(P(a)," ")}),X(this,d.trim())})},toggleClass:function(b,d){return this.each(function(e){var f=c(this),g=V(this,b,e,X(this));g.split(/\s+/g).forEach(function(b){(d===a?!f.hasClass(b):d)?f.addClass(b):f.removeClass(b)})})},scrollTop:function(){if(!this.length)return;return"scrollTop"in this[0]?this[0].scrollTop:this[0].scrollY},position:function(){if(!this.length)return;var a=this[0],b=this.offsetParent(),d=this.offset(),e=o.test(b[0].nodeName)?{top:0,left:0}:b.offset();return d.top-=parseFloat(c(a).css("margin-top"))||0,d.left-=parseFloat(c(a).css("margin-left"))||0,e.top+=parseFloat(c(b[0]).css("border-top-width"))||0,e.left+=parseFloat(c(b[0]).css("border-left-width"))||0,{top:d.top-e.top,left:d.left-e.left}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||h.body;while(a&&!o.test(a.nodeName)&&c(a).css("position")=="static")a=a.offsetParent;return a})}},c.fn.detach=c.fn.remove,["width","height"].forEach(function(b){c.fn[b]=function(d){var e,f=this[0],g=b.replace(/./,function(a){return a[0].toUpperCase()});return d===a?G(f)?f["inner"+g]:H(f)?f.documentElement["offset"+g]:(e=this.offset())&&e[b]:this.each(function(a){f=c(this),f.css(b,V(this,d,a,f[b]()))})}}),q.forEach(function(a,b){var d=b%2;c.fn[a]=function(){var a,e=c.map(arguments,function(b){return a=E(b),a=="object"||a=="array"||b==null?b:A.fragment(b)}),f,g=this.length>1;return e.length<1?this:this.each(function(a,h){f=d?h:h.parentNode,h=b==0?h.nextSibling:b==1?h.firstChild:b==2?h:null,e.forEach(function(a){if(g)a=a.cloneNode(!0);else if(!f)return c(a).remove();Z(f.insertBefore(a,h),function(a){a.nodeName!=null&&a.nodeName.toUpperCase()==="SCRIPT"&&(!a.type||a.type==="text/javascript")&&!a.src&&window.eval.call(window,a.innerHTML)})})})},c.fn[d?a+"To":"insert"+(b?"Before":"After")]=function(b){return c(b)[a](this),this}}),A.Z.prototype=c.fn,A.uniq=C,A.deserializeValue=Y,c.zepto=A,c}();window.Zepto=Zepto,"$"in window||(window.$=Zepto),function(a){function b(a){var b=this.os={},c=this.browser={},d=a.match(/WebKit\/([\d.]+)/),e=a.match(/(Android)\s+([\d.]+)/),f=a.match(/(iPad).*OS\s([\d_]+)/),g=!f&&a.match(/(iPhone\sOS)\s([\d_]+)/),h=a.match(/(webOS|hpwOS)[\s\/]([\d.]+)/),i=h&&a.match(/TouchPad/),j=a.match(/Kindle\/([\d.]+)/),k=a.match(/Silk\/([\d._]+)/),l=a.match(/(BlackBerry).*Version\/([\d.]+)/),m=a.match(/(BB10).*Version\/([\d.]+)/),n=a.match(/(RIM\sTablet\sOS)\s([\d.]+)/),o=a.match(/PlayBook/),p=a.match(/Chrome\/([\d.]+)/)||a.match(/CriOS\/([\d.]+)/),q=a.match(/Firefox\/([\d.]+)/);if(c.webkit=!!d)c.version=d[1];e&&(b.android=!0,b.version=e[2]),g&&(b.ios=b.iphone=!0,b.version=g[2].replace(/_/g,".")),f&&(b.ios=b.ipad=!0,b.version=f[2].replace(/_/g,".")),h&&(b.webos=!0,b.version=h[2]),i&&(b.touchpad=!0),l&&(b.blackberry=!0,b.version=l[2]),m&&(b.bb10=!0,b.version=m[2]),n&&(b.rimtabletos=!0,b.version=n[2]),o&&(c.playbook=!0),j&&(b.kindle=!0,b.version=j[1]),k&&(c.silk=!0,c.version=k[1]),!k&&b.android&&a.match(/Kindle Fire/)&&(c.silk=!0),p&&(c.chrome=!0,c.version=p[1]),q&&(c.firefox=!0,c.version=q[1]),b.tablet=!!(f||o||e&&!a.match(/Mobile/)||q&&a.match(/Tablet/)),b.phone=!b.tablet&&!!(e||g||h||l||m||p&&a.match(/Android/)||p&&a.match(/CriOS\/([\d.]+)/)||q&&a.match(/Mobile/))}b.call(a,navigator.userAgent),a.__detect=b}(Zepto),function(a){function g(a){return a._zid||(a._zid=d++)}function h(a,b,d,e){b=i(b);if(b.ns)var f=j(b.ns);return(c[g(a)]||[]).filter(function(a){return a&&(!b.e||a.e==b.e)&&(!b.ns||f.test(a.ns))&&(!d||g(a.fn)===g(d))&&(!e||a.sel==e)})}function i(a){var b=(""+a).split(".");return{e:b[0],ns:b.slice(1).sort().join(" ")}}function j(a){return new RegExp("(?:^| )"+a.replace(" "," .* ?")+"(?: |$)")}function k(b,c,d){a.type(b)!="string"?a.each(b,d):b.split(/\s/).forEach(function(a){d(a,c)})}function l(a,b){return a.del&&(a.e=="focus"||a.e=="blur")||!!b}function m(a){return f[a]||a}function n(b,d,e,h,j,n){var o=g(b),p=c[o]||(c[o]=[]);k(d,e,function(c,d){var e=i(c);e.fn=d,e.sel=h,e.e in f&&(d=function(b){var c=b.relatedTarget;if(!c||c!==this&&!a.contains(this,c))return e.fn.apply(this,arguments)}),e.del=j&&j(d,c);var g=e.del||d;e.proxy=function(a){var c=g.apply(b,[a].concat(a.data));return c===!1&&(a.preventDefault(),a.stopPropagation()),c},e.i=p.length,p.push(e),b.addEventListener(m(e.e),e.proxy,l(e,n))})}function o(a,b,d,e,f){var i=g(a);k(b||"",d,function(b,d){h(a,b,d,e).forEach(function(b){delete c[i][b.i],a.removeEventListener(m(b.e),b.proxy,l(b,f))})})}function t(b){var c,d={originalEvent:b};for(c in b)!r.test(c)&&b[c]!==undefined&&(d[c]=b[c]);return a.each(s,function(a,c){d[a]=function(){return this[c]=p,b[a].apply(b,arguments)},d[c]=q}),d}function u(a){if(!("defaultPrevented"in a)){a.defaultPrevented=!1;var b=a.preventDefault;a.preventDefault=function(){this.defaultPrevented=!0,b.call(this)}}}var b=a.zepto.qsa,c={},d=1,e={},f={mouseenter:"mouseover",mouseleave:"mouseout"};e.click=e.mousedown=e.mouseup=e.mousemove="MouseEvents",a.event={add:n,remove:o},a.proxy=function(b,c){if(a.isFunction(b)){var d=function(){return b.apply(c,arguments)};return d._zid=g(b),d}if(typeof c=="string")return a.proxy(b[c],b);throw new TypeError("expected function")},a.fn.bind=function(a,b){return this.each(function(){n(this,a,b)})},a.fn.unbind=function(a,b){return this.each(function(){o(this,a,b)})},a.fn.one=function(a,b){return this.each(function(c,d){n(this,a,b,null,function(a,b){return function(){var c=a.apply(d,arguments);return o(d,b,a),c}})})};var p=function(){return!0},q=function(){return!1},r=/^([A-Z]|layer[XY]$)/,s={preventDefault:"isDefaultPrevented",stopImmediatePropagation:"isImmediatePropagationStopped",stopPropagation:"isPropagationStopped"};a.fn.delegate=function(b,c,d){return this.each(function(e,f){n(f,c,d,b,function(c){return function(d){var e,g=a(d.target).closest(b,f).get(0);if(g)return e=a.extend(t(d),{currentTarget:g,liveFired:f}),c.apply(g,[e].concat([].slice.call(arguments,1)))}})})},a.fn.undelegate=function(a,b,c){return this.each(function(){o(this,b,c,a)})},a.fn.live=function(b,c){return a(document.body).delegate(this.selector,b,c),this},a.fn.die=function(b,c){return a(document.body).undelegate(this.selector,b,c),this},a.fn.on=function(b,c,d){return!c||a.isFunction(c)?this.bind(b,c||d):this.delegate(c,b,d)},a.fn.off=function(b,c,d){return!c||a.isFunction(c)?this.unbind(b,c||d):this.undelegate(c,b,d)},a.fn.trigger=function(b,c){if(typeof b=="string"||a.isPlainObject(b))b=a.Event(b);return u(b),b.data=c,this.each(function(){"dispatchEvent"in this&&this.dispatchEvent(b)})},a.fn.triggerHandler=function(b,c){var d,e;return this.each(function(f,g){d=t(typeof b=="string"?a.Event(b):b),d.data=c,d.target=g,a.each(h(g,b.type||b),function(a,b){e=b.proxy(d);if(d.isImmediatePropagationStopped())return!1})}),e},"focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error".split(" ").forEach(function(b){a.fn[b]=function(a){return a?this.bind(b,a):this.trigger(b)}}),["focus","blur"].forEach(function(b){a.fn[b]=function(a){return a?this.bind(b,a):this.each(function(){try{this[b]()}catch(a){}}),this}}),a.Event=function(a,b){typeof a!="string"&&(b=a,a=b.type);var c=document.createEvent(e[a]||"Events"),d=!0;if(b)for(var f in b)f=="bubbles"?d=!!b[f]:c[f]=b[f];return c.initEvent(a,d,!0,null,null,null,null,null,null,null,null,null,null,null,null),c.isDefaultPrevented=function(){return this.defaultPrevented},c}}(Zepto),function($){function triggerAndReturn(a,b,c){var d=$.Event(b);return $(a).trigger(d,c),!d.defaultPrevented}function triggerGlobal(a,b,c,d){if(a.global)return triggerAndReturn(b||document,c,d)}function ajaxStart(a){a.global&&$.active++===0&&triggerGlobal(a,null,"ajaxStart")}function ajaxStop(a){a.global&&!--$.active&&triggerGlobal(a,null,"ajaxStop")}function ajaxBeforeSend(a,b){var c=b.context;if(b.beforeSend.call(c,a,b)===!1||triggerGlobal(b,c,"ajaxBeforeSend",[a,b])===!1)return!1;triggerGlobal(b,c,"ajaxSend",[a,b])}function ajaxSuccess(a,b,c){var d=c.context,e="success";c.success.call(d,a,e,b),triggerGlobal(c,d,"ajaxSuccess",[b,c,a]),ajaxComplete(e,b,c)}function ajaxError(a,b,c,d){var e=d.context;d.error.call(e,c,b,a),triggerGlobal(d,e,"ajaxError",[c,d,a]),ajaxComplete(b,c,d)}function ajaxComplete(a,b,c){var d=c.context;c.complete.call(d,b,a),triggerGlobal(c,d,"ajaxComplete",[b,c]),ajaxStop(c)}function empty(){}function mimeToDataType(a){return a&&(a=a.split(";",2)[0]),a&&(a==htmlType?"html":a==jsonType?"json":scriptTypeRE.test(a)?"script":xmlTypeRE.test(a)&&"xml")||"text"}function appendQuery(a,b){return(a+"&"+b).replace(/[&?]{1,2}/,"?")}function serializeData(a){a.processData&&a.data&&$.type(a.data)!="string"&&(a.data=$.param(a.data,a.traditional)),a.data&&(!a.type||a.type.toUpperCase()=="GET")&&(a.url=appendQuery(a.url,a.data))}function parseArguments(a,b,c,d){var e=!$.isFunction(b);return{url:a,data:e?b:undefined,success:e?$.isFunction(c)?c:undefined:b,dataType:e?d||c:c}}function serialize(a,b,c,d){var e,f=$.isArray(b);$.each(b,function(b,g){e=$.type(g),d&&(b=c?d:d+"["+(f?"":b)+"]"),!d&&f?a.add(g.name,g.value):e=="array"||!c&&e=="object"?serialize(a,g,c,b):a.add(b,g)})}var jsonpID=0,document=window.document,key,name,rscript=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,scriptTypeRE=/^(?:text|application)\/javascript/i,xmlTypeRE=/^(?:text|application)\/xml/i,jsonType="application/json",htmlType="text/html",blankRE=/^\s*$/;$.active=0,$.ajaxJSONP=function(a){if("type"in a){var b="jsonp"+ ++jsonpID,c=document.createElement("script"),d=function(){clearTimeout(g),$(c).remove(),delete window[b]},e=function(c){d();if(!c||c=="timeout")window[b]=empty;ajaxError(null,c||"abort",f,a)},f={abort:e},g;return ajaxBeforeSend(f,a)===!1?(e("abort"),!1):(window[b]=function(b){d(),ajaxSuccess(b,f,a)},c.onerror=function(){e("error")},c.src=a.url.replace(/=\?/,"="+b),$("head").append(c),a.timeout>0&&(g=setTimeout(function(){e("timeout")},a.timeout)),f)}return $.ajax(a)},$.ajaxSettings={type:"GET",beforeSend:empty,success:empty,error:empty,complete:empty,context:null,global:!0,xhr:function(){return new window.XMLHttpRequest},accepts:{script:"text/javascript, application/javascript",json:jsonType,xml:"application/xml, text/xml",html:htmlType,text:"text/plain"},crossDomain:!1,timeout:0,processData:!0,cache:!0},$.ajax=function(options){var settings=$.extend({},options||{});for(key in $.ajaxSettings)settings[key]===undefined&&(settings[key]=$.ajaxSettings[key]);ajaxStart(settings),settings.crossDomain||(settings.crossDomain=/^([\w-]+:)?\/\/([^\/]+)/.test(settings.url)&&RegExp.$2!=window.location.host),settings.url||(settings.url=window.location.toString()),serializeData(settings),settings.cache===!1&&(settings.url=appendQuery(settings.url,"_="+Date.now()));var dataType=settings.dataType,hasPlaceholder=/=\?/.test(settings.url);if(dataType=="jsonp"||hasPlaceholder)return hasPlaceholder||(settings.url=appendQuery(settings.url,"callback=?")),$.ajaxJSONP(settings);var mime=settings.accepts[dataType],baseHeaders={},protocol=/^([\w-]+:)\/\//.test(settings.url)?RegExp.$1:window.location.protocol,xhr=settings.xhr(),abortTimeout;settings.crossDomain||(baseHeaders["X-Requested-With"]="XMLHttpRequest"),mime&&(baseHeaders.Accept=mime,mime.indexOf(",")>-1&&(mime=mime.split(",",2)[0]),xhr.overrideMimeType&&xhr.overrideMimeType(mime));if(settings.contentType||settings.contentType!==!1&&settings.data&&settings.type.toUpperCase()!="GET")baseHeaders["Content-Type"]=settings.contentType||"application/x-www-form-urlencoded";settings.headers=$.extend(baseHeaders,settings.headers||{}),xhr.onreadystatechange=function(){if(xhr.readyState==4){xhr.onreadystatechange=empty,clearTimeout(abortTimeout);var result,error=!1;if(xhr.status>=200&&xhr.status<300||xhr.status==304||xhr.status==0&&protocol=="file:"){dataType=dataType||mimeToDataType(xhr.getResponseHeader("content-type")),result=xhr.responseText;try{dataType=="script"?(1,eval)(result):dataType=="xml"?result=xhr.responseXML:dataType=="json"&&(result=blankRE.test(result)?null:$.parseJSON(result))}catch(e){error=e}error?ajaxError(error,"parsererror",xhr,settings):ajaxSuccess(result,xhr,settings)}else ajaxError(null,xhr.status?"error":"abort",xhr,settings)}};var async="async"in settings?settings.async:!0;xhr.open(settings.type,settings.url,async);for(name in settings.headers)xhr.setRequestHeader(name,settings.headers[name]);return ajaxBeforeSend(xhr,settings)===!1?(xhr.abort(),!1):(settings.timeout>0&&(abortTimeout=setTimeout(function(){xhr.onreadystatechange=empty,xhr.abort(),ajaxError(null,"timeout",xhr,settings)},settings.timeout)),xhr.send(settings.data?settings.data:null),xhr)},$.get=function(a,b,c,d){return $.ajax(parseArguments.apply(null,arguments))},$.post=function(a,b,c,d){var e=parseArguments.apply(null,arguments);return e.type="POST",$.ajax(e)},$.getJSON=function(a,b,c){var d=parseArguments.apply(null,arguments);return d.dataType="json",$.ajax(d)},$.fn.load=function(a,b,c){if(!this.length)return this;var d=this,e=a.split(/\s/),f,g=parseArguments(a,b,c),h=g.success;return e.length>1&&(g.url=e[0],f=e[1]),g.success=function(a){d.html(f?$("<div>").html(a.replace(rscript,"")).find(f):a),h&&h.apply(d,arguments)},$.ajax(g),this};var escape=encodeURIComponent;$.param=function(a,b){var c=[];return c.add=function(a,b){this.push(escape(a)+"="+escape(b))},serialize(c,a,b),c.join("&").replace(/%20/g,"+")}}(Zepto),function(a){a.fn.serializeArray=function(){var b=[],c;return a(Array.prototype.slice.call(this.get(0).elements)).each(function(){c=a(this);var d=c.attr("type");this.nodeName.toLowerCase()!="fieldset"&&!this.disabled&&d!="submit"&&d!="reset"&&d!="button"&&(d!="radio"&&d!="checkbox"||this.checked)&&b.push({name:c.attr("name"),value:c.val()})}),b},a.fn.serialize=function(){var a=[];return this.serializeArray().forEach(function(b){a.push(encodeURIComponent(b.name)+"="+encodeURIComponent(b.value))}),a.join("&")},a.fn.submit=function(b){if(b)this.bind("submit",b);else if(this.length){var c=a.Event("submit");this.eq(0).trigger(c),c.defaultPrevented||this.get(0).submit()}return this}}(Zepto),function(a,b){function s(a){return t(a.replace(/([a-z])([A-Z])/,"$1-$2"))}function t(a){return a.toLowerCase()}function u(a){return d?d+a:t(a)}var c="",d,e,f,g={Webkit:"webkit",Moz:"",O:"o",ms:"MS"},h=window.document,i=h.createElement("div"),j=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i,k,l,m,n,o,p,q,r={};a.each(g,function(a,e){if(i.style[a+"TransitionProperty"]!==b)return c="-"+t(a)+"-",d=e,!1}),k=c+"transform",r[l=c+"transition-property"]=r[m=c+"transition-duration"]=r[n=c+"transition-timing-function"]=r[o=c+"animation-name"]=r[p=c+"animation-duration"]=r[q=c+"animation-timing-function"]="",a.fx={off:d===b&&i.style.transitionProperty===b,speeds:{_default:400,fast:200,slow:600},cssPrefix:c,transitionEnd:u("TransitionEnd"),animationEnd:u("AnimationEnd")},a.fn.animate=function(b,c,d,e){return a.isPlainObject(c)&&(d=c.easing,e=c.complete,c=c.duration),c&&(c=(typeof c=="number"?c:a.fx.speeds[c]||a.fx.speeds._default)/1e3),this.anim(b,c,d,e)},a.fn.anim=function(c,d,e,f){var g,h={},i,t="",u=this,v,w=a.fx.transitionEnd;d===b&&(d=.4),a.fx.off&&(d=0);if(typeof c=="string")h[o]=c,h[p]=d+"s",h[q]=e||"linear",w=a.fx.animationEnd;else{i=[];for(g in c)j.test(g)?t+=g+"("+c[g]+") ":(h[g]=c[g],i.push(s(g)));t&&(h[k]=t,i.push(k)),d>0&&typeof c=="object"&&(h[l]=i.join(", "),h[m]=d+"s",h[n]=e||"linear")}return v=function(b){if(typeof b!="undefined"){if(b.target!==b.currentTarget)return;a(b.target).unbind(w,v)}a(this).css(r),f&&f.call(this)},d>0&&this.bind(w,v),this.size()&&this.get(0).clientLeft,this.css(h),d<=0&&setTimeout(function(){u.each(function(){v.call(this)})},0),this},i=null}(Zepto);
(function(){var n=this,t=n._,r={},e=Array.prototype,u=Object.prototype,i=Function.prototype,a=e.push,o=e.slice,c=e.concat,l=u.toString,f=u.hasOwnProperty,s=e.forEach,p=e.map,h=e.reduce,v=e.reduceRight,d=e.filter,g=e.every,m=e.some,y=e.indexOf,b=e.lastIndexOf,x=Array.isArray,_=Object.keys,j=i.bind,w=function(n){return n instanceof w?n:this instanceof w?(this._wrapped=n,void 0):new w(n)};"undefined"!=typeof exports?("undefined"!=typeof module&&module.exports&&(exports=module.exports=w),exports._=w):n._=w,w.VERSION="1.4.4";var A=w.each=w.forEach=function(n,t,e){if(null!=n)if(s&&n.forEach===s)n.forEach(t,e);else if(n.length===+n.length){for(var u=0,i=n.length;i>u;u++)if(t.call(e,n[u],u,n)===r)return}else for(var a in n)if(w.has(n,a)&&t.call(e,n[a],a,n)===r)return};w.map=w.collect=function(n,t,r){var e=[];return null==n?e:p&&n.map===p?n.map(t,r):(A(n,function(n,u,i){e[e.length]=t.call(r,n,u,i)}),e)};var O="Reduce of empty array with no initial value";w.reduce=w.foldl=w.inject=function(n,t,r,e){var u=arguments.length>2;if(null==n&&(n=[]),h&&n.reduce===h)return e&&(t=w.bind(t,e)),u?n.reduce(t,r):n.reduce(t);if(A(n,function(n,i,a){u?r=t.call(e,r,n,i,a):(r=n,u=!0)}),!u)throw new TypeError(O);return r},w.reduceRight=w.foldr=function(n,t,r,e){var u=arguments.length>2;if(null==n&&(n=[]),v&&n.reduceRight===v)return e&&(t=w.bind(t,e)),u?n.reduceRight(t,r):n.reduceRight(t);var i=n.length;if(i!==+i){var a=w.keys(n);i=a.length}if(A(n,function(o,c,l){c=a?a[--i]:--i,u?r=t.call(e,r,n[c],c,l):(r=n[c],u=!0)}),!u)throw new TypeError(O);return r},w.find=w.detect=function(n,t,r){var e;return E(n,function(n,u,i){return t.call(r,n,u,i)?(e=n,!0):void 0}),e},w.filter=w.select=function(n,t,r){var e=[];return null==n?e:d&&n.filter===d?n.filter(t,r):(A(n,function(n,u,i){t.call(r,n,u,i)&&(e[e.length]=n)}),e)},w.reject=function(n,t,r){return w.filter(n,function(n,e,u){return!t.call(r,n,e,u)},r)},w.every=w.all=function(n,t,e){t||(t=w.identity);var u=!0;return null==n?u:g&&n.every===g?n.every(t,e):(A(n,function(n,i,a){return(u=u&&t.call(e,n,i,a))?void 0:r}),!!u)};var E=w.some=w.any=function(n,t,e){t||(t=w.identity);var u=!1;return null==n?u:m&&n.some===m?n.some(t,e):(A(n,function(n,i,a){return u||(u=t.call(e,n,i,a))?r:void 0}),!!u)};w.contains=w.include=function(n,t){return null==n?!1:y&&n.indexOf===y?n.indexOf(t)!=-1:E(n,function(n){return n===t})},w.invoke=function(n,t){var r=o.call(arguments,2),e=w.isFunction(t);return w.map(n,function(n){return(e?t:n[t]).apply(n,r)})},w.pluck=function(n,t){return w.map(n,function(n){return n[t]})},w.where=function(n,t,r){return w.isEmpty(t)?r?null:[]:w[r?"find":"filter"](n,function(n){for(var r in t)if(t[r]!==n[r])return!1;return!0})},w.findWhere=function(n,t){return w.where(n,t,!0)},w.max=function(n,t,r){if(!t&&w.isArray(n)&&n[0]===+n[0]&&65535>n.length)return Math.max.apply(Math,n);if(!t&&w.isEmpty(n))return-1/0;var e={computed:-1/0,value:-1/0};return A(n,function(n,u,i){var a=t?t.call(r,n,u,i):n;a>=e.computed&&(e={value:n,computed:a})}),e.value},w.min=function(n,t,r){if(!t&&w.isArray(n)&&n[0]===+n[0]&&65535>n.length)return Math.min.apply(Math,n);if(!t&&w.isEmpty(n))return 1/0;var e={computed:1/0,value:1/0};return A(n,function(n,u,i){var a=t?t.call(r,n,u,i):n;e.computed>a&&(e={value:n,computed:a})}),e.value},w.shuffle=function(n){var t,r=0,e=[];return A(n,function(n){t=w.random(r++),e[r-1]=e[t],e[t]=n}),e};var k=function(n){return w.isFunction(n)?n:function(t){return t[n]}};w.sortBy=function(n,t,r){var e=k(t);return w.pluck(w.map(n,function(n,t,u){return{value:n,index:t,criteria:e.call(r,n,t,u)}}).sort(function(n,t){var r=n.criteria,e=t.criteria;if(r!==e){if(r>e||r===void 0)return 1;if(e>r||e===void 0)return-1}return n.index<t.index?-1:1}),"value")};var F=function(n,t,r,e){var u={},i=k(t||w.identity);return A(n,function(t,a){var o=i.call(r,t,a,n);e(u,o,t)}),u};w.groupBy=function(n,t,r){return F(n,t,r,function(n,t,r){(w.has(n,t)?n[t]:n[t]=[]).push(r)})},w.countBy=function(n,t,r){return F(n,t,r,function(n,t){w.has(n,t)||(n[t]=0),n[t]++})},w.sortedIndex=function(n,t,r,e){r=null==r?w.identity:k(r);for(var u=r.call(e,t),i=0,a=n.length;a>i;){var o=i+a>>>1;u>r.call(e,n[o])?i=o+1:a=o}return i},w.toArray=function(n){return n?w.isArray(n)?o.call(n):n.length===+n.length?w.map(n,w.identity):w.values(n):[]},w.size=function(n){return null==n?0:n.length===+n.length?n.length:w.keys(n).length},w.first=w.head=w.take=function(n,t,r){return null==n?void 0:null==t||r?n[0]:o.call(n,0,t)},w.initial=function(n,t,r){return o.call(n,0,n.length-(null==t||r?1:t))},w.last=function(n,t,r){return null==n?void 0:null==t||r?n[n.length-1]:o.call(n,Math.max(n.length-t,0))},w.rest=w.tail=w.drop=function(n,t,r){return o.call(n,null==t||r?1:t)},w.compact=function(n){return w.filter(n,w.identity)};var R=function(n,t,r){return A(n,function(n){w.isArray(n)?t?a.apply(r,n):R(n,t,r):r.push(n)}),r};w.flatten=function(n,t){return R(n,t,[])},w.without=function(n){return w.difference(n,o.call(arguments,1))},w.uniq=w.unique=function(n,t,r,e){w.isFunction(t)&&(e=r,r=t,t=!1);var u=r?w.map(n,r,e):n,i=[],a=[];return A(u,function(r,e){(t?e&&a[a.length-1]===r:w.contains(a,r))||(a.push(r),i.push(n[e]))}),i},w.union=function(){return w.uniq(c.apply(e,arguments))},w.intersection=function(n){var t=o.call(arguments,1);return w.filter(w.uniq(n),function(n){return w.every(t,function(t){return w.indexOf(t,n)>=0})})},w.difference=function(n){var t=c.apply(e,o.call(arguments,1));return w.filter(n,function(n){return!w.contains(t,n)})},w.zip=function(){for(var n=o.call(arguments),t=w.max(w.pluck(n,"length")),r=Array(t),e=0;t>e;e++)r[e]=w.pluck(n,""+e);return r},w.object=function(n,t){if(null==n)return{};for(var r={},e=0,u=n.length;u>e;e++)t?r[n[e]]=t[e]:r[n[e][0]]=n[e][1];return r},w.indexOf=function(n,t,r){if(null==n)return-1;var e=0,u=n.length;if(r){if("number"!=typeof r)return e=w.sortedIndex(n,t),n[e]===t?e:-1;e=0>r?Math.max(0,u+r):r}if(y&&n.indexOf===y)return n.indexOf(t,r);for(;u>e;e++)if(n[e]===t)return e;return-1},w.lastIndexOf=function(n,t,r){if(null==n)return-1;var e=null!=r;if(b&&n.lastIndexOf===b)return e?n.lastIndexOf(t,r):n.lastIndexOf(t);for(var u=e?r:n.length;u--;)if(n[u]===t)return u;return-1},w.range=function(n,t,r){1>=arguments.length&&(t=n||0,n=0),r=arguments[2]||1;for(var e=Math.max(Math.ceil((t-n)/r),0),u=0,i=Array(e);e>u;)i[u++]=n,n+=r;return i},w.bind=function(n,t){if(n.bind===j&&j)return j.apply(n,o.call(arguments,1));var r=o.call(arguments,2);return function(){return n.apply(t,r.concat(o.call(arguments)))}},w.partial=function(n){var t=o.call(arguments,1);return function(){return n.apply(this,t.concat(o.call(arguments)))}},w.bindAll=function(n){var t=o.call(arguments,1);return 0===t.length&&(t=w.functions(n)),A(t,function(t){n[t]=w.bind(n[t],n)}),n},w.memoize=function(n,t){var r={};return t||(t=w.identity),function(){var e=t.apply(this,arguments);return w.has(r,e)?r[e]:r[e]=n.apply(this,arguments)}},w.delay=function(n,t){var r=o.call(arguments,2);return setTimeout(function(){return n.apply(null,r)},t)},w.defer=function(n){return w.delay.apply(w,[n,1].concat(o.call(arguments,1)))},w.throttle=function(n,t){var r,e,u,i,a=0,o=function(){a=new Date,u=null,i=n.apply(r,e)};return function(){var c=new Date,l=t-(c-a);return r=this,e=arguments,0>=l?(clearTimeout(u),u=null,a=c,i=n.apply(r,e)):u||(u=setTimeout(o,l)),i}},w.debounce=function(n,t,r){var e,u;return function(){var i=this,a=arguments,o=function(){e=null,r||(u=n.apply(i,a))},c=r&&!e;return clearTimeout(e),e=setTimeout(o,t),c&&(u=n.apply(i,a)),u}},w.once=function(n){var t,r=!1;return function(){return r?t:(r=!0,t=n.apply(this,arguments),n=null,t)}},w.wrap=function(n,t){return function(){var r=[n];return a.apply(r,arguments),t.apply(this,r)}},w.compose=function(){var n=arguments;return function(){for(var t=arguments,r=n.length-1;r>=0;r--)t=[n[r].apply(this,t)];return t[0]}},w.after=function(n,t){return 0>=n?t():function(){return 1>--n?t.apply(this,arguments):void 0}},w.keys=_||function(n){if(n!==Object(n))throw new TypeError("Invalid object");var t=[];for(var r in n)w.has(n,r)&&(t[t.length]=r);return t},w.values=function(n){var t=[];for(var r in n)w.has(n,r)&&t.push(n[r]);return t},w.pairs=function(n){var t=[];for(var r in n)w.has(n,r)&&t.push([r,n[r]]);return t},w.invert=function(n){var t={};for(var r in n)w.has(n,r)&&(t[n[r]]=r);return t},w.functions=w.methods=function(n){var t=[];for(var r in n)w.isFunction(n[r])&&t.push(r);return t.sort()},w.extend=function(n){return A(o.call(arguments,1),function(t){if(t)for(var r in t)n[r]=t[r]}),n},w.pick=function(n){var t={},r=c.apply(e,o.call(arguments,1));return A(r,function(r){r in n&&(t[r]=n[r])}),t},w.omit=function(n){var t={},r=c.apply(e,o.call(arguments,1));for(var u in n)w.contains(r,u)||(t[u]=n[u]);return t},w.defaults=function(n){return A(o.call(arguments,1),function(t){if(t)for(var r in t)null==n[r]&&(n[r]=t[r])}),n},w.clone=function(n){return w.isObject(n)?w.isArray(n)?n.slice():w.extend({},n):n},w.tap=function(n,t){return t(n),n};var I=function(n,t,r,e){if(n===t)return 0!==n||1/n==1/t;if(null==n||null==t)return n===t;n instanceof w&&(n=n._wrapped),t instanceof w&&(t=t._wrapped);var u=l.call(n);if(u!=l.call(t))return!1;switch(u){case"[object String]":return n==t+"";case"[object Number]":return n!=+n?t!=+t:0==n?1/n==1/t:n==+t;case"[object Date]":case"[object Boolean]":return+n==+t;case"[object RegExp]":return n.source==t.source&&n.global==t.global&&n.multiline==t.multiline&&n.ignoreCase==t.ignoreCase}if("object"!=typeof n||"object"!=typeof t)return!1;for(var i=r.length;i--;)if(r[i]==n)return e[i]==t;r.push(n),e.push(t);var a=0,o=!0;if("[object Array]"==u){if(a=n.length,o=a==t.length)for(;a--&&(o=I(n[a],t[a],r,e)););}else{var c=n.constructor,f=t.constructor;if(c!==f&&!(w.isFunction(c)&&c instanceof c&&w.isFunction(f)&&f instanceof f))return!1;for(var s in n)if(w.has(n,s)&&(a++,!(o=w.has(t,s)&&I(n[s],t[s],r,e))))break;if(o){for(s in t)if(w.has(t,s)&&!a--)break;o=!a}}return r.pop(),e.pop(),o};w.isEqual=function(n,t){return I(n,t,[],[])},w.isEmpty=function(n){if(null==n)return!0;if(w.isArray(n)||w.isString(n))return 0===n.length;for(var t in n)if(w.has(n,t))return!1;return!0},w.isElement=function(n){return!(!n||1!==n.nodeType)},w.isArray=x||function(n){return"[object Array]"==l.call(n)},w.isObject=function(n){return n===Object(n)},A(["Arguments","Function","String","Number","Date","RegExp"],function(n){w["is"+n]=function(t){return l.call(t)=="[object "+n+"]"}}),w.isArguments(arguments)||(w.isArguments=function(n){return!(!n||!w.has(n,"callee"))}),"function"!=typeof/./&&(w.isFunction=function(n){return"function"==typeof n}),w.isFinite=function(n){return isFinite(n)&&!isNaN(parseFloat(n))},w.isNaN=function(n){return w.isNumber(n)&&n!=+n},w.isBoolean=function(n){return n===!0||n===!1||"[object Boolean]"==l.call(n)},w.isNull=function(n){return null===n},w.isUndefined=function(n){return n===void 0},w.has=function(n,t){return f.call(n,t)},w.noConflict=function(){return n._=t,this},w.identity=function(n){return n},w.times=function(n,t,r){for(var e=Array(n),u=0;n>u;u++)e[u]=t.call(r,u);return e},w.random=function(n,t){return null==t&&(t=n,n=0),n+Math.floor(Math.random()*(t-n+1))};var M={escape:{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","/":"&#x2F;"}};M.unescape=w.invert(M.escape);var S={escape:RegExp("["+w.keys(M.escape).join("")+"]","g"),unescape:RegExp("("+w.keys(M.unescape).join("|")+")","g")};w.each(["escape","unescape"],function(n){w[n]=function(t){return null==t?"":(""+t).replace(S[n],function(t){return M[n][t]})}}),w.result=function(n,t){if(null==n)return null;var r=n[t];return w.isFunction(r)?r.call(n):r},w.mixin=function(n){A(w.functions(n),function(t){var r=w[t]=n[t];w.prototype[t]=function(){var n=[this._wrapped];return a.apply(n,arguments),D.call(this,r.apply(w,n))}})};var N=0;w.uniqueId=function(n){var t=++N+"";return n?n+t:t},w.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var T=/(.)^/,q={"'":"'","\\":"\\","\r":"r","\n":"n","	":"t","\u2028":"u2028","\u2029":"u2029"},B=/\\|'|\r|\n|\t|\u2028|\u2029/g;w.template=function(n,t,r){var e;r=w.defaults({},r,w.templateSettings);var u=RegExp([(r.escape||T).source,(r.interpolate||T).source,(r.evaluate||T).source].join("|")+"|$","g"),i=0,a="__p+='";n.replace(u,function(t,r,e,u,o){return a+=n.slice(i,o).replace(B,function(n){return"\\"+q[n]}),r&&(a+="'+\n((__t=("+r+"))==null?'':_.escape(__t))+\n'"),e&&(a+="'+\n((__t=("+e+"))==null?'':__t)+\n'"),u&&(a+="';\n"+u+"\n__p+='"),i=o+t.length,t}),a+="';\n",r.variable||(a="with(obj||{}){\n"+a+"}\n"),a="var __t,__p='',__j=Array.prototype.join,"+"print=function(){__p+=__j.call(arguments,'');};\n"+a+"return __p;\n";try{e=Function(r.variable||"obj","_",a)}catch(o){throw o.source=a,o}if(t)return e(t,w);var c=function(n){return e.call(this,n,w)};return c.source="function("+(r.variable||"obj")+"){\n"+a+"}",c},w.chain=function(n){return w(n).chain()};var D=function(n){return this._chain?w(n).chain():n};w.mixin(w),A(["pop","push","reverse","shift","sort","splice","unshift"],function(n){var t=e[n];w.prototype[n]=function(){var r=this._wrapped;return t.apply(r,arguments),"shift"!=n&&"splice"!=n||0!==r.length||delete r[0],D.call(this,r)}}),A(["concat","join","slice"],function(n){var t=e[n];w.prototype[n]=function(){return D.call(this,t.apply(this._wrapped,arguments))}}),w.extend(w.prototype,{chain:function(){return this._chain=!0,this},value:function(){return this._wrapped}})}).call(this);
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
        if(parseInt(d.commentCount)>0){
            _h+='<span class="icon-comment cmt-count">'+d.commentCount+'</span>';
        }
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
        _h+='<a href="'+ d.linkUrl +'" class="more-content log" data-log="linkUrl">';
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
    var prices=[];
    $.ajax({
        type:'GET',
        dataType:'json',
        url:namespace('taobao.utils.uri').getUrl({'subdomain':'s','path':'search_turn_page_iphone.htm'})+'?nid='+ ids.join(",") + '&callback=?',
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


