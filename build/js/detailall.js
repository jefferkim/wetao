(function(a){String.prototype.trim===a&&(String.prototype.trim=function(){return this.replace(/^\s+|\s+$/g,"")}),Array.prototype.reduce===a&&(Array.prototype.reduce=function(b){if(this===void 0||this===null)throw new TypeError;var c=Object(this),d=c.length>>>0,e=0,f;if(typeof b!="function")throw new TypeError;if(d==0&&arguments.length==1)throw new TypeError;if(arguments.length>=2)f=arguments[1];else do{if(e in c){f=c[e++];break}if(++e>=d)throw new TypeError}while(!0);while(e<d)e in c&&(f=b.call(a,f,c[e],e,c)),e++;return f})})();var Zepto=function(){function E(a){return a==null?String(a):y[z.call(a)]||"object"}function F(a){return E(a)=="function"}function G(a){return a!=null&&a==a.window}function H(a){return a!=null&&a.nodeType==a.DOCUMENT_NODE}function I(a){return E(a)=="object"}function J(a){return I(a)&&!G(a)&&a.__proto__==Object.prototype}function K(a){return a instanceof Array}function L(a){return typeof a.length=="number"}function M(a){return g.call(a,function(a){return a!=null})}function N(a){return a.length>0?c.fn.concat.apply([],a):a}function O(a){return a.replace(/::/g,"/").replace(/([A-Z]+)([A-Z][a-z])/g,"$1_$2").replace(/([a-z\d])([A-Z])/g,"$1_$2").replace(/_/g,"-").toLowerCase()}function P(a){return a in j?j[a]:j[a]=new RegExp("(^|\\s)"+a+"(\\s|$)")}function Q(a,b){return typeof b=="number"&&!l[O(a)]?b+"px":b}function R(a){var b,c;return i[a]||(b=h.createElement(a),h.body.appendChild(b),c=k(b,"").getPropertyValue("display"),b.parentNode.removeChild(b),c=="none"&&(c="block"),i[a]=c),i[a]}function S(a){return"children"in a?f.call(a.children):c.map(a.childNodes,function(a){if(a.nodeType==1)return a})}function T(c,d,e){for(b in d)e&&(J(d[b])||K(d[b]))?(J(d[b])&&!J(c[b])&&(c[b]={}),K(d[b])&&!K(c[b])&&(c[b]=[]),T(c[b],d[b],e)):d[b]!==a&&(c[b]=d[b])}function U(b,d){return d===a?c(b):c(b).filter(d)}function V(a,b,c,d){return F(b)?b.call(a,c,d):b}function W(a,b,c){c==null?a.removeAttribute(b):a.setAttribute(b,c)}function X(b,c){var d=b.className,e=d&&d.baseVal!==a;if(c===a)return e?d.baseVal:d;e?d.baseVal=c:b.className=c}function Y(a){var b;try{return a?a=="true"||(a=="false"?!1:a=="null"?null:isNaN(b=Number(a))?/^[\[\{]/.test(a)?c.parseJSON(a):a:b):a}catch(d){return a}}function Z(a,b){b(a);for(var c in a.childNodes)Z(a.childNodes[c],b)}var a,b,c,d,e=[],f=e.slice,g=e.filter,h=window.document,i={},j={},k=h.defaultView.getComputedStyle,l={"column-count":1,columns:1,"font-weight":1,"line-height":1,opacity:1,"z-index":1,zoom:1},m=/^\s*<(\w+|!)[^>]*>/,n=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,o=/^(?:body|html)$/i,p=["val","css","html","text","data","width","height","offset"],q=["after","prepend","before","append"],r=h.createElement("table"),s=h.createElement("tr"),t={tr:h.createElement("tbody"),tbody:r,thead:r,tfoot:r,td:s,th:s,"*":h.createElement("div")},u=/complete|loaded|interactive/,v=/^\.([\w-]+)$/,w=/^#([\w-]*)$/,x=/^[\w-]+$/,y={},z=y.toString,A={},B,C,D=h.createElement("div");return A.matches=function(a,b){if(!a||a.nodeType!==1)return!1;var c=a.webkitMatchesSelector||a.mozMatchesSelector||a.oMatchesSelector||a.matchesSelector;if(c)return c.call(a,b);var d,e=a.parentNode,f=!e;return f&&(e=D).appendChild(a),d=~A.qsa(e,b).indexOf(a),f&&D.removeChild(a),d},B=function(a){return a.replace(/-+(.)?/g,function(a,b){return b?b.toUpperCase():""})},C=function(a){return g.call(a,function(b,c){return a.indexOf(b)==c})},A.fragment=function(b,d,e){b.replace&&(b=b.replace(n,"<$1></$2>")),d===a&&(d=m.test(b)&&RegExp.$1),d in t||(d="*");var g,h,i=t[d];return i.innerHTML=""+b,h=c.each(f.call(i.childNodes),function(){i.removeChild(this)}),J(e)&&(g=c(h),c.each(e,function(a,b){p.indexOf(a)>-1?g[a](b):g.attr(a,b)})),h},A.Z=function(a,b){return a=a||[],a.__proto__=c.fn,a.selector=b||"",a},A.isZ=function(a){return a instanceof A.Z},A.init=function(b,d){if(!b)return A.Z();if(F(b))return c(h).ready(b);if(A.isZ(b))return b;var e;if(K(b))e=M(b);else if(I(b))e=[J(b)?c.extend({},b):b],b=null;else if(m.test(b))e=A.fragment(b.trim(),RegExp.$1,d),b=null;else{if(d!==a)return c(d).find(b);e=A.qsa(h,b)}return A.Z(e,b)},c=function(a,b){return A.init(a,b)},c.extend=function(a){var b,c=f.call(arguments,1);return typeof a=="boolean"&&(b=a,a=c.shift()),c.forEach(function(c){T(a,c,b)}),a},A.qsa=function(a,b){var c;return H(a)&&w.test(b)?(c=a.getElementById(RegExp.$1))?[c]:[]:a.nodeType!==1&&a.nodeType!==9?[]:f.call(v.test(b)?a.getElementsByClassName(RegExp.$1):x.test(b)?a.getElementsByTagName(b):a.querySelectorAll(b))},c.contains=function(a,b){return a!==b&&a.contains(b)},c.type=E,c.isFunction=F,c.isWindow=G,c.isArray=K,c.isPlainObject=J,c.isEmptyObject=function(a){var b;for(b in a)return!1;return!0},c.inArray=function(a,b,c){return e.indexOf.call(b,a,c)},c.camelCase=B,c.trim=function(a){return a.trim()},c.uuid=0,c.support={},c.expr={},c.map=function(a,b){var c,d=[],e,f;if(L(a))for(e=0;e<a.length;e++)c=b(a[e],e),c!=null&&d.push(c);else for(f in a)c=b(a[f],f),c!=null&&d.push(c);return N(d)},c.each=function(a,b){var c,d;if(L(a)){for(c=0;c<a.length;c++)if(b.call(a[c],c,a[c])===!1)return a}else for(d in a)if(b.call(a[d],d,a[d])===!1)return a;return a},c.grep=function(a,b){return g.call(a,b)},window.JSON&&(c.parseJSON=JSON.parse),c.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){y["[object "+b+"]"]=b.toLowerCase()}),c.fn={forEach:e.forEach,reduce:e.reduce,push:e.push,sort:e.sort,indexOf:e.indexOf,concat:e.concat,map:function(a){return c(c.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return c(f.apply(this,arguments))},ready:function(a){return u.test(h.readyState)?a(c):h.addEventListener("DOMContentLoaded",function(){a(c)},!1),this},get:function(b){return b===a?f.call(this):this[b>=0?b:b+this.length]},toArray:function(){return this.get()},size:function(){return this.length},remove:function(){return this.each(function(){this.parentNode!=null&&this.parentNode.removeChild(this)})},each:function(a){return e.every.call(this,function(b,c){return a.call(b,c,b)!==!1}),this},filter:function(a){return F(a)?this.not(this.not(a)):c(g.call(this,function(b){return A.matches(b,a)}))},add:function(a,b){return c(C(this.concat(c(a,b))))},is:function(a){return this.length>0&&A.matches(this[0],a)},not:function(b){var d=[];if(F(b)&&b.call!==a)this.each(function(a){b.call(this,a)||d.push(this)});else{var e=typeof b=="string"?this.filter(b):L(b)&&F(b.item)?f.call(b):c(b);this.forEach(function(a){e.indexOf(a)<0&&d.push(a)})}return c(d)},has:function(a){return this.filter(function(){return I(a)?c.contains(this,a):c(this).find(a).size()})},eq:function(a){return a===-1?this.slice(a):this.slice(a,+a+1)},first:function(){var a=this[0];return a&&!I(a)?a:c(a)},last:function(){var a=this[this.length-1];return a&&!I(a)?a:c(a)},find:function(a){var b,d=this;return typeof a=="object"?b=c(a).filter(function(){var a=this;return e.some.call(d,function(b){return c.contains(b,a)})}):this.length==1?b=c(A.qsa(this[0],a)):b=this.map(function(){return A.qsa(this,a)}),b},closest:function(a,b){var d=this[0],e=!1;typeof a=="object"&&(e=c(a));while(d&&!(e?e.indexOf(d)>=0:A.matches(d,a)))d=d!==b&&!H(d)&&d.parentNode;return c(d)},parents:function(a){var b=[],d=this;while(d.length>0)d=c.map(d,function(a){if((a=a.parentNode)&&!H(a)&&b.indexOf(a)<0)return b.push(a),a});return U(b,a)},parent:function(a){return U(C(this.pluck("parentNode")),a)},children:function(a){return U(this.map(function(){return S(this)}),a)},contents:function(){return this.map(function(){return f.call(this.childNodes)})},siblings:function(a){return U(this.map(function(a,b){return g.call(S(b.parentNode),function(a){return a!==b})}),a)},empty:function(){return this.each(function(){this.innerHTML=""})},pluck:function(a){return c.map(this,function(b){return b[a]})},show:function(){return this.each(function(){this.style.display=="none"&&(this.style.display=null),k(this,"").getPropertyValue("display")=="none"&&(this.style.display=R(this.nodeName))})},replaceWith:function(a){return this.before(a).remove()},wrap:function(a){var b=F(a);if(this[0]&&!b)var d=c(a).get(0),e=d.parentNode||this.length>1;return this.each(function(f){c(this).wrapAll(b?a.call(this,f):e?d.cloneNode(!0):d)})},wrapAll:function(a){if(this[0]){c(this[0]).before(a=c(a));var b;while((b=a.children()).length)a=b.first();c(a).append(this)}return this},wrapInner:function(a){var b=F(a);return this.each(function(d){var e=c(this),f=e.contents(),g=b?a.call(this,d):a;f.length?f.wrapAll(g):e.append(g)})},unwrap:function(){return this.parent().each(function(){c(this).replaceWith(c(this).children())}),this},clone:function(){return this.map(function(){return this.cloneNode(!0)})},hide:function(){return this.css("display","none")},toggle:function(b){return this.each(function(){var d=c(this);(b===a?d.css("display")=="none":b)?d.show():d.hide()})},prev:function(a){return c(this.pluck("previousElementSibling")).filter(a||"*")},next:function(a){return c(this.pluck("nextElementSibling")).filter(a||"*")},html:function(b){return b===a?this.length>0?this[0].innerHTML:null:this.each(function(a){var d=this.innerHTML;c(this).empty().append(V(this,b,a,d))})},text:function(b){return b===a?this.length>0?this[0].textContent:null:this.each(function(){this.textContent=b})},attr:function(c,d){var e;return typeof c=="string"&&d===a?this.length==0||this[0].nodeType!==1?a:c=="value"&&this[0].nodeName=="INPUT"?this.val():!(e=this[0].getAttribute(c))&&c in this[0]?this[0][c]:e:this.each(function(a){if(this.nodeType!==1)return;if(I(c))for(b in c)W(this,b,c[b]);else W(this,c,V(this,d,a,this.getAttribute(c)))})},removeAttr:function(a){return this.each(function(){this.nodeType===1&&W(this,a)})},prop:function(b,c){return c===a?this[0]&&this[0][b]:this.each(function(a){this[b]=V(this,c,a,this[b])})},data:function(b,c){var d=this.attr("data-"+O(b),c);return d!==null?Y(d):a},val:function(b){return b===a?this[0]&&(this[0].multiple?c(this[0]).find("option").filter(function(a){return this.selected}).pluck("value"):this[0].value):this.each(function(a){this.value=V(this,b,a,this.value)})},offset:function(a){if(a)return this.each(function(b){var d=c(this),e=V(this,a,b,d.offset()),f=d.offsetParent().offset(),g={top:e.top-f.top,left:e.left-f.left};d.css("position")=="static"&&(g.position="relative"),d.css(g)});if(this.length==0)return null;var b=this[0].getBoundingClientRect();return{left:b.left+window.pageXOffset,top:b.top+window.pageYOffset,width:Math.round(b.width),height:Math.round(b.height)}},css:function(a,c){if(arguments.length<2&&typeof a=="string")return this[0]&&(this[0].style[B(a)]||k(this[0],"").getPropertyValue(a));var d="";if(E(a)=="string")!c&&c!==0?this.each(function(){this.style.removeProperty(O(a))}):d=O(a)+":"+Q(a,c);else for(b in a)!a[b]&&a[b]!==0?this.each(function(){this.style.removeProperty(O(b))}):d+=O(b)+":"+Q(b,a[b])+";";return this.each(function(){this.style.cssText+=";"+d})},index:function(a){return a?this.indexOf(c(a)[0]):this.parent().children().indexOf(this[0])},hasClass:function(a){return e.some.call(this,function(a){return this.test(X(a))},P(a))},addClass:function(a){return this.each(function(b){d=[];var e=X(this),f=V(this,a,b,e);f.split(/\s+/g).forEach(function(a){c(this).hasClass(a)||d.push(a)},this),d.length&&X(this,e+(e?" ":"")+d.join(" "))})},removeClass:function(b){return this.each(function(c){if(b===a)return X(this,"");d=X(this),V(this,b,c,d).split(/\s+/g).forEach(function(a){d=d.replace(P(a)," ")}),X(this,d.trim())})},toggleClass:function(b,d){return this.each(function(e){var f=c(this),g=V(this,b,e,X(this));g.split(/\s+/g).forEach(function(b){(d===a?!f.hasClass(b):d)?f.addClass(b):f.removeClass(b)})})},scrollTop:function(){if(!this.length)return;return"scrollTop"in this[0]?this[0].scrollTop:this[0].scrollY},position:function(){if(!this.length)return;var a=this[0],b=this.offsetParent(),d=this.offset(),e=o.test(b[0].nodeName)?{top:0,left:0}:b.offset();return d.top-=parseFloat(c(a).css("margin-top"))||0,d.left-=parseFloat(c(a).css("margin-left"))||0,e.top+=parseFloat(c(b[0]).css("border-top-width"))||0,e.left+=parseFloat(c(b[0]).css("border-left-width"))||0,{top:d.top-e.top,left:d.left-e.left}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||h.body;while(a&&!o.test(a.nodeName)&&c(a).css("position")=="static")a=a.offsetParent;return a})}},c.fn.detach=c.fn.remove,["width","height"].forEach(function(b){c.fn[b]=function(d){var e,f=this[0],g=b.replace(/./,function(a){return a[0].toUpperCase()});return d===a?G(f)?f["inner"+g]:H(f)?f.documentElement["offset"+g]:(e=this.offset())&&e[b]:this.each(function(a){f=c(this),f.css(b,V(this,d,a,f[b]()))})}}),q.forEach(function(a,b){var d=b%2;c.fn[a]=function(){var a,e=c.map(arguments,function(b){return a=E(b),a=="object"||a=="array"||b==null?b:A.fragment(b)}),f,g=this.length>1;return e.length<1?this:this.each(function(a,h){f=d?h:h.parentNode,h=b==0?h.nextSibling:b==1?h.firstChild:b==2?h:null,e.forEach(function(a){if(g)a=a.cloneNode(!0);else if(!f)return c(a).remove();Z(f.insertBefore(a,h),function(a){a.nodeName!=null&&a.nodeName.toUpperCase()==="SCRIPT"&&(!a.type||a.type==="text/javascript")&&!a.src&&window.eval.call(window,a.innerHTML)})})})},c.fn[d?a+"To":"insert"+(b?"Before":"After")]=function(b){return c(b)[a](this),this}}),A.Z.prototype=c.fn,A.uniq=C,A.deserializeValue=Y,c.zepto=A,c}();window.Zepto=Zepto,"$"in window||(window.$=Zepto),function(a){function b(a){var b=this.os={},c=this.browser={},d=a.match(/WebKit\/([\d.]+)/),e=a.match(/(Android)\s+([\d.]+)/),f=a.match(/(iPad).*OS\s([\d_]+)/),g=!f&&a.match(/(iPhone\sOS)\s([\d_]+)/),h=a.match(/(webOS|hpwOS)[\s\/]([\d.]+)/),i=h&&a.match(/TouchPad/),j=a.match(/Kindle\/([\d.]+)/),k=a.match(/Silk\/([\d._]+)/),l=a.match(/(BlackBerry).*Version\/([\d.]+)/),m=a.match(/(BB10).*Version\/([\d.]+)/),n=a.match(/(RIM\sTablet\sOS)\s([\d.]+)/),o=a.match(/PlayBook/),p=a.match(/Chrome\/([\d.]+)/)||a.match(/CriOS\/([\d.]+)/),q=a.match(/Firefox\/([\d.]+)/);if(c.webkit=!!d)c.version=d[1];e&&(b.android=!0,b.version=e[2]),g&&(b.ios=b.iphone=!0,b.version=g[2].replace(/_/g,".")),f&&(b.ios=b.ipad=!0,b.version=f[2].replace(/_/g,".")),h&&(b.webos=!0,b.version=h[2]),i&&(b.touchpad=!0),l&&(b.blackberry=!0,b.version=l[2]),m&&(b.bb10=!0,b.version=m[2]),n&&(b.rimtabletos=!0,b.version=n[2]),o&&(c.playbook=!0),j&&(b.kindle=!0,b.version=j[1]),k&&(c.silk=!0,c.version=k[1]),!k&&b.android&&a.match(/Kindle Fire/)&&(c.silk=!0),p&&(c.chrome=!0,c.version=p[1]),q&&(c.firefox=!0,c.version=q[1]),b.tablet=!!(f||o||e&&!a.match(/Mobile/)||q&&a.match(/Tablet/)),b.phone=!b.tablet&&!!(e||g||h||l||m||p&&a.match(/Android/)||p&&a.match(/CriOS\/([\d.]+)/)||q&&a.match(/Mobile/))}b.call(a,navigator.userAgent),a.__detect=b}(Zepto),function(a){function g(a){return a._zid||(a._zid=d++)}function h(a,b,d,e){b=i(b);if(b.ns)var f=j(b.ns);return(c[g(a)]||[]).filter(function(a){return a&&(!b.e||a.e==b.e)&&(!b.ns||f.test(a.ns))&&(!d||g(a.fn)===g(d))&&(!e||a.sel==e)})}function i(a){var b=(""+a).split(".");return{e:b[0],ns:b.slice(1).sort().join(" ")}}function j(a){return new RegExp("(?:^| )"+a.replace(" "," .* ?")+"(?: |$)")}function k(b,c,d){a.type(b)!="string"?a.each(b,d):b.split(/\s/).forEach(function(a){d(a,c)})}function l(a,b){return a.del&&(a.e=="focus"||a.e=="blur")||!!b}function m(a){return f[a]||a}function n(b,d,e,h,j,n){var o=g(b),p=c[o]||(c[o]=[]);k(d,e,function(c,d){var e=i(c);e.fn=d,e.sel=h,e.e in f&&(d=function(b){var c=b.relatedTarget;if(!c||c!==this&&!a.contains(this,c))return e.fn.apply(this,arguments)}),e.del=j&&j(d,c);var g=e.del||d;e.proxy=function(a){var c=g.apply(b,[a].concat(a.data));return c===!1&&(a.preventDefault(),a.stopPropagation()),c},e.i=p.length,p.push(e),b.addEventListener(m(e.e),e.proxy,l(e,n))})}function o(a,b,d,e,f){var i=g(a);k(b||"",d,function(b,d){h(a,b,d,e).forEach(function(b){delete c[i][b.i],a.removeEventListener(m(b.e),b.proxy,l(b,f))})})}function t(b){var c,d={originalEvent:b};for(c in b)!r.test(c)&&b[c]!==undefined&&(d[c]=b[c]);return a.each(s,function(a,c){d[a]=function(){return this[c]=p,b[a].apply(b,arguments)},d[c]=q}),d}function u(a){if(!("defaultPrevented"in a)){a.defaultPrevented=!1;var b=a.preventDefault;a.preventDefault=function(){this.defaultPrevented=!0,b.call(this)}}}var b=a.zepto.qsa,c={},d=1,e={},f={mouseenter:"mouseover",mouseleave:"mouseout"};e.click=e.mousedown=e.mouseup=e.mousemove="MouseEvents",a.event={add:n,remove:o},a.proxy=function(b,c){if(a.isFunction(b)){var d=function(){return b.apply(c,arguments)};return d._zid=g(b),d}if(typeof c=="string")return a.proxy(b[c],b);throw new TypeError("expected function")},a.fn.bind=function(a,b){return this.each(function(){n(this,a,b)})},a.fn.unbind=function(a,b){return this.each(function(){o(this,a,b)})},a.fn.one=function(a,b){return this.each(function(c,d){n(this,a,b,null,function(a,b){return function(){var c=a.apply(d,arguments);return o(d,b,a),c}})})};var p=function(){return!0},q=function(){return!1},r=/^([A-Z]|layer[XY]$)/,s={preventDefault:"isDefaultPrevented",stopImmediatePropagation:"isImmediatePropagationStopped",stopPropagation:"isPropagationStopped"};a.fn.delegate=function(b,c,d){return this.each(function(e,f){n(f,c,d,b,function(c){return function(d){var e,g=a(d.target).closest(b,f).get(0);if(g)return e=a.extend(t(d),{currentTarget:g,liveFired:f}),c.apply(g,[e].concat([].slice.call(arguments,1)))}})})},a.fn.undelegate=function(a,b,c){return this.each(function(){o(this,b,c,a)})},a.fn.live=function(b,c){return a(document.body).delegate(this.selector,b,c),this},a.fn.die=function(b,c){return a(document.body).undelegate(this.selector,b,c),this},a.fn.on=function(b,c,d){return!c||a.isFunction(c)?this.bind(b,c||d):this.delegate(c,b,d)},a.fn.off=function(b,c,d){return!c||a.isFunction(c)?this.unbind(b,c||d):this.undelegate(c,b,d)},a.fn.trigger=function(b,c){if(typeof b=="string"||a.isPlainObject(b))b=a.Event(b);return u(b),b.data=c,this.each(function(){"dispatchEvent"in this&&this.dispatchEvent(b)})},a.fn.triggerHandler=function(b,c){var d,e;return this.each(function(f,g){d=t(typeof b=="string"?a.Event(b):b),d.data=c,d.target=g,a.each(h(g,b.type||b),function(a,b){e=b.proxy(d);if(d.isImmediatePropagationStopped())return!1})}),e},"focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error".split(" ").forEach(function(b){a.fn[b]=function(a){return a?this.bind(b,a):this.trigger(b)}}),["focus","blur"].forEach(function(b){a.fn[b]=function(a){return a?this.bind(b,a):this.each(function(){try{this[b]()}catch(a){}}),this}}),a.Event=function(a,b){typeof a!="string"&&(b=a,a=b.type);var c=document.createEvent(e[a]||"Events"),d=!0;if(b)for(var f in b)f=="bubbles"?d=!!b[f]:c[f]=b[f];return c.initEvent(a,d,!0,null,null,null,null,null,null,null,null,null,null,null,null),c.isDefaultPrevented=function(){return this.defaultPrevented},c}}(Zepto),function($){function triggerAndReturn(a,b,c){var d=$.Event(b);return $(a).trigger(d,c),!d.defaultPrevented}function triggerGlobal(a,b,c,d){if(a.global)return triggerAndReturn(b||document,c,d)}function ajaxStart(a){a.global&&$.active++===0&&triggerGlobal(a,null,"ajaxStart")}function ajaxStop(a){a.global&&!--$.active&&triggerGlobal(a,null,"ajaxStop")}function ajaxBeforeSend(a,b){var c=b.context;if(b.beforeSend.call(c,a,b)===!1||triggerGlobal(b,c,"ajaxBeforeSend",[a,b])===!1)return!1;triggerGlobal(b,c,"ajaxSend",[a,b])}function ajaxSuccess(a,b,c){var d=c.context,e="success";c.success.call(d,a,e,b),triggerGlobal(c,d,"ajaxSuccess",[b,c,a]),ajaxComplete(e,b,c)}function ajaxError(a,b,c,d){var e=d.context;d.error.call(e,c,b,a),triggerGlobal(d,e,"ajaxError",[c,d,a]),ajaxComplete(b,c,d)}function ajaxComplete(a,b,c){var d=c.context;c.complete.call(d,b,a),triggerGlobal(c,d,"ajaxComplete",[b,c]),ajaxStop(c)}function empty(){}function mimeToDataType(a){return a&&(a=a.split(";",2)[0]),a&&(a==htmlType?"html":a==jsonType?"json":scriptTypeRE.test(a)?"script":xmlTypeRE.test(a)&&"xml")||"text"}function appendQuery(a,b){return(a+"&"+b).replace(/[&?]{1,2}/,"?")}function serializeData(a){a.processData&&a.data&&$.type(a.data)!="string"&&(a.data=$.param(a.data,a.traditional)),a.data&&(!a.type||a.type.toUpperCase()=="GET")&&(a.url=appendQuery(a.url,a.data))}function parseArguments(a,b,c,d){var e=!$.isFunction(b);return{url:a,data:e?b:undefined,success:e?$.isFunction(c)?c:undefined:b,dataType:e?d||c:c}}function serialize(a,b,c,d){var e,f=$.isArray(b);$.each(b,function(b,g){e=$.type(g),d&&(b=c?d:d+"["+(f?"":b)+"]"),!d&&f?a.add(g.name,g.value):e=="array"||!c&&e=="object"?serialize(a,g,c,b):a.add(b,g)})}var jsonpID=0,document=window.document,key,name,rscript=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,scriptTypeRE=/^(?:text|application)\/javascript/i,xmlTypeRE=/^(?:text|application)\/xml/i,jsonType="application/json",htmlType="text/html",blankRE=/^\s*$/;$.active=0,$.ajaxJSONP=function(a){if("type"in a){var b="jsonp"+ ++jsonpID,c=document.createElement("script"),d=function(){clearTimeout(g),$(c).remove(),delete window[b]},e=function(c){d();if(!c||c=="timeout")window[b]=empty;ajaxError(null,c||"abort",f,a)},f={abort:e},g;return ajaxBeforeSend(f,a)===!1?(e("abort"),!1):(window[b]=function(b){d(),ajaxSuccess(b,f,a)},c.onerror=function(){e("error")},c.src=a.url.replace(/=\?/,"="+b),$("head").append(c),a.timeout>0&&(g=setTimeout(function(){e("timeout")},a.timeout)),f)}return $.ajax(a)},$.ajaxSettings={type:"GET",beforeSend:empty,success:empty,error:empty,complete:empty,context:null,global:!0,xhr:function(){return new window.XMLHttpRequest},accepts:{script:"text/javascript, application/javascript",json:jsonType,xml:"application/xml, text/xml",html:htmlType,text:"text/plain"},crossDomain:!1,timeout:0,processData:!0,cache:!0},$.ajax=function(options){var settings=$.extend({},options||{});for(key in $.ajaxSettings)settings[key]===undefined&&(settings[key]=$.ajaxSettings[key]);ajaxStart(settings),settings.crossDomain||(settings.crossDomain=/^([\w-]+:)?\/\/([^\/]+)/.test(settings.url)&&RegExp.$2!=window.location.host),settings.url||(settings.url=window.location.toString()),serializeData(settings),settings.cache===!1&&(settings.url=appendQuery(settings.url,"_="+Date.now()));var dataType=settings.dataType,hasPlaceholder=/=\?/.test(settings.url);if(dataType=="jsonp"||hasPlaceholder)return hasPlaceholder||(settings.url=appendQuery(settings.url,"callback=?")),$.ajaxJSONP(settings);var mime=settings.accepts[dataType],baseHeaders={},protocol=/^([\w-]+:)\/\//.test(settings.url)?RegExp.$1:window.location.protocol,xhr=settings.xhr(),abortTimeout;settings.crossDomain||(baseHeaders["X-Requested-With"]="XMLHttpRequest"),mime&&(baseHeaders.Accept=mime,mime.indexOf(",")>-1&&(mime=mime.split(",",2)[0]),xhr.overrideMimeType&&xhr.overrideMimeType(mime));if(settings.contentType||settings.contentType!==!1&&settings.data&&settings.type.toUpperCase()!="GET")baseHeaders["Content-Type"]=settings.contentType||"application/x-www-form-urlencoded";settings.headers=$.extend(baseHeaders,settings.headers||{}),xhr.onreadystatechange=function(){if(xhr.readyState==4){xhr.onreadystatechange=empty,clearTimeout(abortTimeout);var result,error=!1;if(xhr.status>=200&&xhr.status<300||xhr.status==304||xhr.status==0&&protocol=="file:"){dataType=dataType||mimeToDataType(xhr.getResponseHeader("content-type")),result=xhr.responseText;try{dataType=="script"?(1,eval)(result):dataType=="xml"?result=xhr.responseXML:dataType=="json"&&(result=blankRE.test(result)?null:$.parseJSON(result))}catch(e){error=e}error?ajaxError(error,"parsererror",xhr,settings):ajaxSuccess(result,xhr,settings)}else ajaxError(null,xhr.status?"error":"abort",xhr,settings)}};var async="async"in settings?settings.async:!0;xhr.open(settings.type,settings.url,async);for(name in settings.headers)xhr.setRequestHeader(name,settings.headers[name]);return ajaxBeforeSend(xhr,settings)===!1?(xhr.abort(),!1):(settings.timeout>0&&(abortTimeout=setTimeout(function(){xhr.onreadystatechange=empty,xhr.abort(),ajaxError(null,"timeout",xhr,settings)},settings.timeout)),xhr.send(settings.data?settings.data:null),xhr)},$.get=function(a,b,c,d){return $.ajax(parseArguments.apply(null,arguments))},$.post=function(a,b,c,d){var e=parseArguments.apply(null,arguments);return e.type="POST",$.ajax(e)},$.getJSON=function(a,b,c){var d=parseArguments.apply(null,arguments);return d.dataType="json",$.ajax(d)},$.fn.load=function(a,b,c){if(!this.length)return this;var d=this,e=a.split(/\s/),f,g=parseArguments(a,b,c),h=g.success;return e.length>1&&(g.url=e[0],f=e[1]),g.success=function(a){d.html(f?$("<div>").html(a.replace(rscript,"")).find(f):a),h&&h.apply(d,arguments)},$.ajax(g),this};var escape=encodeURIComponent;$.param=function(a,b){var c=[];return c.add=function(a,b){this.push(escape(a)+"="+escape(b))},serialize(c,a,b),c.join("&").replace(/%20/g,"+")}}(Zepto),function(a){a.fn.serializeArray=function(){var b=[],c;return a(Array.prototype.slice.call(this.get(0).elements)).each(function(){c=a(this);var d=c.attr("type");this.nodeName.toLowerCase()!="fieldset"&&!this.disabled&&d!="submit"&&d!="reset"&&d!="button"&&(d!="radio"&&d!="checkbox"||this.checked)&&b.push({name:c.attr("name"),value:c.val()})}),b},a.fn.serialize=function(){var a=[];return this.serializeArray().forEach(function(b){a.push(encodeURIComponent(b.name)+"="+encodeURIComponent(b.value))}),a.join("&")},a.fn.submit=function(b){if(b)this.bind("submit",b);else if(this.length){var c=a.Event("submit");this.eq(0).trigger(c),c.defaultPrevented||this.get(0).submit()}return this}}(Zepto),function(a,b){function s(a){return t(a.replace(/([a-z])([A-Z])/,"$1-$2"))}function t(a){return a.toLowerCase()}function u(a){return d?d+a:t(a)}var c="",d,e,f,g={Webkit:"webkit",Moz:"",O:"o",ms:"MS"},h=window.document,i=h.createElement("div"),j=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i,k,l,m,n,o,p,q,r={};a.each(g,function(a,e){if(i.style[a+"TransitionProperty"]!==b)return c="-"+t(a)+"-",d=e,!1}),k=c+"transform",r[l=c+"transition-property"]=r[m=c+"transition-duration"]=r[n=c+"transition-timing-function"]=r[o=c+"animation-name"]=r[p=c+"animation-duration"]=r[q=c+"animation-timing-function"]="",a.fx={off:d===b&&i.style.transitionProperty===b,speeds:{_default:400,fast:200,slow:600},cssPrefix:c,transitionEnd:u("TransitionEnd"),animationEnd:u("AnimationEnd")},a.fn.animate=function(b,c,d,e){return a.isPlainObject(c)&&(d=c.easing,e=c.complete,c=c.duration),c&&(c=(typeof c=="number"?c:a.fx.speeds[c]||a.fx.speeds._default)/1e3),this.anim(b,c,d,e)},a.fn.anim=function(c,d,e,f){var g,h={},i,t="",u=this,v,w=a.fx.transitionEnd;d===b&&(d=.4),a.fx.off&&(d=0);if(typeof c=="string")h[o]=c,h[p]=d+"s",h[q]=e||"linear",w=a.fx.animationEnd;else{i=[];for(g in c)j.test(g)?t+=g+"("+c[g]+") ":(h[g]=c[g],i.push(s(g)));t&&(h[k]=t,i.push(k)),d>0&&typeof c=="object"&&(h[l]=i.join(", "),h[m]=d+"s",h[n]=e||"linear")}return v=function(b){if(typeof b!="undefined"){if(b.target!==b.currentTarget)return;a(b.target).unbind(w,v)}a(this).css(r),f&&f.call(this)},d>0&&this.bind(w,v),this.size()&&this.get(0).clientLeft,this.css(h),d<=0&&setTimeout(function(){u.each(function(){v.call(this)})},0),this},i=null}(Zepto)
/*
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



var getPrices = function (ids, fun) {
    var result = [];
    var uncachedIds = [];
    ids.forEach(function (id) {
        if (priceCache[id]) {
            result.push({id:id, price:priceCache[id]});
        } else {
            uncachedIds.push(id);
        }
    });
    if (uncachedIds.length) {
        $.ajax({
            type:'GET',
            dataType:'json',
            url:namespace('taobao.utils.uri').getUrl("s_price", {nid:uncachedIds.join(",")}) + "&callback=?",
            success:function (sret) {
                if (sret.result && "true" == sret.result && sret.listItem) {
                    sret.listItem.forEach(function (item) {
                        priceCache[item.itemNumId] = item.price;
                        result.push({id:item.itemNumId, price:item.price});
                    })
                }
                fun && fun.call(arguments.callee, result);
            },
            error:function (error) {
                console.log(error);
                fun && fun.call(arguments.callee, result);
            }
        });
    } else {
        fun && fun.call(arguments.callee, result);
    }
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
            _h+='<a style="display: block" href="'+ getItemDetailUrl('a', { itemId: d.tiles[i].item.id })+'" class="item"';
            _h+='data-id="'+ d.tiles[i].item.id +'">';
            _h+='<img class="lazy"';
            if(weTao.isDesktop){
                _h+='dataimg="'+ getBetterImg(d.tiles[i].path, 370, parseInt(d.tiles[i].picWidth),true) +'"';
                _h+='style="'+ detailImageSizeStyle(d.tiles[i].picWidth, d.tiles[i].picHeight) +'"';
            }else{
                _h+='dataimg="'+ getBetterImg(d.tiles[i].path, window.innerWidth-30, parseInt(d.tiles[i].picWidth)) +'"';
                _h+='style="'+ detailImageSizeStyle(d.tiles[i].picWidth, d.tiles[i].picHeight) +'"';
            }
            _h+='src="http://a.tbcdn.cn/mw/webapp/fav/img/grey.gif">';
            _h+='<div class="price" style="display: none;"></div></a></div>';
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
    var rui=namespace('taobao.utils.uri').getUrl(module, param);
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

    $.ajax({
        type:'GET',
        dataType:'json',
        url:namespace('taobao.utils.uri').getUrl("s_price", {nid:ids.join(",")}) + "&callback=?",
        success:function (sret) {
            if (sret.result && "true" == sret.result && sret.listItem) {
                sret.listItem.forEach(function (item) {
                    priceCache[item.itemNumId] = item.price;
                    result.push({id:item.itemNumId, price:item.price});
                })
            }
            fun && fun.call(arguments.callee, result);
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
            //getPrices(result.data);
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





