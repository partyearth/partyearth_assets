(function(){if(!window.CKEDITOR||!window.CKEDITOR.dom){if(!window.CKEDITOR){var b=window,f=Math.floor(900*Math.random())+100,a=window.CKEDITOR_BASEPATH||"";if(!a)for(var e=document.getElementsByTagName("script"),g=0;g<e.length;g++){var n=e[g].src.match(/(^|.*[\\\/])ckeditor(?:_basic)?(?:_source)?.js(?:\?.*)?$/i);if(n){a=n[1];break}}-1==a.indexOf(":/")&&(a=0===a.indexOf("/")?location.href.match(/^.*?:\/\/[^\/]*/)[0]+a:location.href.match(/^[^\?]*\/(?:)/)[0]+a);if(!a)throw'The CKEditor installation path could not be automatically detected. Please set the global variable "CKEDITOR_BASEPATH" before creating editor instances.';
var j={timestamp:"C3HA5RM",version:"3.6.3",revision:"7474",rnd:f,_:{},status:"unloaded",basePath:a,getUrl:function(d){-1==d.indexOf(":/")&&0!==d.indexOf("/")&&(d=this.basePath+d);this.timestamp&&("/"!=d.charAt(d.length-1)&&!/[&?]t=/.test(d))&&(d+=(0<=d.indexOf("?")?"&":"?")+"t="+this.timestamp);return d}},p=window.CKEDITOR_GETURL;if(p){var s=j.getUrl;j.getUrl=function(d){return p.call(j,d)||s.call(j,d)}}b.CKEDITOR=j}var c=CKEDITOR;if(!c.event){c.event=function(){};c.event.implementOn=function(d){var a=
c.event.prototype,m;for(m in a)void 0==d[m]&&(d[m]=a[m])};var b=c.event,k=function(d){d=d.getPrivate&&d.getPrivate()||d._||(d._={});return d.events||(d.events={})},q=function(d){this.name=d;this.listeners=[]};q.prototype={getListenerIndex:function(d){for(var a=0,c=this.listeners;a<c.length;a++)if(c[a].fn==d)return a;return-1}};var l=!1,t=function(){l=!0},h=!1,u=function(){h=!0};b.prototype={on:function(d,a,c,v,e){var b=k(this),b=b[d]||(b[d]=new q(d));if(0>b.getListenerIndex(a)){b=b.listeners;c||(c=
this);isNaN(e)&&(e=10);var g=this,h=function(b,e,h,f){b={name:d,sender:this,editor:b,data:e,listenerData:v,stop:h,cancel:f,removeListener:function(){g.removeListener(d,a)}};a.call(c,b);return b.data};h.fn=a;h.priority=e;for(var f=b.length-1;0<=f;f--)if(b[f].priority<=e){b.splice(f+1,0,h);return}b.unshift(h)}},fire:function(d,a,c){var b=k(this)[d];d=l;var e=h;l=h=!1;if(b&&(b=b.listeners,b.length))for(var b=b.slice(0),f=0;f<b.length;f++){var g=b[f].call(this,c,a,t,u);"undefined"!=typeof g&&(a=g);if(l||
h)break}a=h||("undefined"==typeof a?!1:a);l=d;h=e;return a},fireOnce:function(d,a,c){a=this.fire(d,a,c);delete k(this)[d];return a},removeListener:function(d,a){var c=k(this)[d];if(c){var b=c.getListenerIndex(a);0<=b&&c.listeners.splice(b,1)}},hasListeners:function(d){return(d=k(this)[d])&&0<d.listeners.length}}}c.editor||(c.ELEMENT_MODE_NONE=0,c.ELEMENT_MODE_REPLACE=1,c.ELEMENT_MODE_APPENDTO=2,c.editor=function(d,a,b,e){this._={instanceConfig:d,element:a,data:e};this.elementMode=b||0;c.event.call(this);
this._init()},c.editor.replace=function(d,a){var b=d;if("object"!=typeof b){(b=document.getElementById(d))&&b.tagName.toLowerCase()in{style:1,script:1,base:1,link:1,meta:1,title:1}&&(b=null);if(!b)for(var e=0,f=document.getElementsByName(d);(b=f[e++])&&"textarea"!=b.tagName.toLowerCase(););if(!b)throw'[CKEDITOR.editor.replace] The element with id or name "'+d+'" was not found.';}b.style.visibility="hidden";return new c.editor(a,b,1)},c.editor.appendTo=function(d,a,b){var e=d;if("object"!=typeof e&&
(e=document.getElementById(d),!e))throw'[CKEDITOR.editor.appendTo] The element with id "'+d+'" was not found.';return new c.editor(a,e,2,b)},c.editor.prototype={_init:function(){(c.editor._pending||(c.editor._pending=[])).push(this)},fire:function(a,b){return c.event.prototype.fire.call(this,a,b,this)},fireOnce:function(a,b){return c.event.prototype.fireOnce.call(this,a,b,this)}},c.event.implementOn(c.editor.prototype,!0));if(!c.env){b=navigator.userAgent.toLowerCase();f=window.opera;a={ie:!1,opera:!!f&&
f.version,webkit:-1<b.indexOf(" applewebkit/"),air:-1<b.indexOf(" adobeair/"),mac:-1<b.indexOf("macintosh"),quirks:"BackCompat"==document.compatMode,mobile:-1<b.indexOf("mobile"),iOS:/(ipad|iphone|ipod)/.test(b),isCustomDomain:function(){if(!this.ie)return!1;var a=document.domain,c=window.location.hostname;return a!=c&&a!="["+c+"]"},secure:"https:"==location.protocol};a.gecko="Gecko"==navigator.product&&!a.webkit&&!a.opera;e=0;a.ie&&(e=parseFloat(b.match(/msie (\d+)/)[1]),a.ie8=!!document.documentMode,
a.ie8Compat=8==document.documentMode,a.ie9Compat=9==document.documentMode,a.ie7Compat=7==e&&!document.documentMode||7==document.documentMode,a.ie6Compat=7>e||a.quirks);if(a.gecko&&(g=b.match(/rv:([\d\.]+)/)))g=g[1].split("."),e=1E4*g[0]+100*(g[1]||0)+ +(g[2]||0);a.opera&&(e=parseFloat(f.version()));a.air&&(e=parseFloat(b.match(/ adobeair\/(\d+)/)[1]));a.webkit&&(e=parseFloat(b.match(/ applewebkit\/(\d+)/)[1]));a.version=e;a.isCompatible=a.iOS&&534<=e||!a.mobile&&(a.ie&&6<=e||a.gecko&&10801<=e||a.opera&&
9.5<=e||a.air&&1<=e||a.webkit&&522<=e||!1);a.cssClass="cke_browser_"+(a.ie?"ie":a.gecko?"gecko":a.opera?"opera":a.webkit?"webkit":"unknown");a.quirks&&(a.cssClass+=" cke_browser_quirks");a.ie&&(a.cssClass+=" cke_browser_ie"+(7>a.version?"6":8<=a.version?document.documentMode:"7"),a.quirks&&(a.cssClass+=" cke_browser_iequirks"));a.gecko&&10900>e&&(a.cssClass+=" cke_browser_gecko18");a.air&&(a.cssClass+=" cke_browser_air");c.env=a}var w=c.env;if("unloaded"==c.status){c.event.implementOn(c);c.loadFullCore=
function(){if("basic_ready"!=c.status)c.loadFullCore._load=1;else{delete c.loadFullCore;var a=document.createElement("script");a.type="text/javascript";a.src=c.basePath+"ckeditor.js";document.getElementsByTagName("head")[0].appendChild(a)}};c.loadFullCoreTimeout=0;c.replaceClass="ckeditor";c.replaceByClassEnabled=1;var r=function(a,b,e,f){return w.isCompatible?(c.loadFullCore&&c.loadFullCore(),a=e(a,b,f),c.add(a),a):null};c.replace=function(a,b){return r(a,b,c.editor.replace)};c.appendTo=function(a,
b,e){return r(a,b,c.editor.appendTo,e)};c.add=function(a){(this._.pending||(this._.pending=[])).push(a)};c.replaceAll=function(){for(var a=document.getElementsByTagName("textarea"),c=0;c<a.length;c++){var b=null,e=a[c];if(e.name||e.id){if("string"==typeof arguments[0]){if(!RegExp("(?:^|\\s)"+arguments[0]+"(?:$|\\s)").test(e.className))continue}else if("function"==typeof arguments[0]&&(b={},!1===arguments[0](e,b)))continue;this.replace(e,b)}}};b=function(){var a=c.loadFullCore,b=c.loadFullCoreTimeout;
c.replaceByClassEnabled&&c.replaceAll(c.replaceClass);c.status="basic_ready";a&&a._load?a():b&&setTimeout(function(){c.loadFullCore&&c.loadFullCore()},1E3*b)};window.addEventListener?window.addEventListener("load",b,!1):window.attachEvent&&window.attachEvent("onload",b);c.status="basic_loaded"}}})();
