jQuery&&function(c){c.extend(c.fn,{uploadify:function(d){c(this).each(function(){settings=c.extend({id:c(this).attr("id"),uploader:"uploadify.swf",script:"uploadify.php",expressInstall:null,folder:"",height:30,width:110,cancelImg:"cancel.png",wmode:"opaque",scriptAccess:"sameDomain",fileDataName:"Filedata",method:"POST",queueSizeLimit:999,simUploadLimit:1,queueID:!1,displayData:"percentage",onInit:function(){},onSelect:function(){},onQueueFull:function(){},onCheck:function(){},onCancel:function(){},
onError:function(){},onProgress:function(){},onComplete:function(){},onAllComplete:function(){}},d);var b=location.pathname,b=b.split("/");b.pop();var b=b.join("/")+"/",a={};a.uploadifyID=settings.id;a.pagepath=b;settings.buttonImg&&(a.buttonImg=escape(settings.buttonImg));settings.buttonText&&(a.buttonText=escape(settings.buttonText));settings.rollover&&(a.rollover=!0);a.script=settings.script;a.folder=escape(settings.folder);if(settings.scriptData){var e="",g;for(g in settings.scriptData)e+="&"+
g+"="+settings.scriptData[g];a.scriptData=escape(e.substr(1))}a.width=settings.width;a.height=settings.height;a.wmode=settings.wmode;a.method=settings.method;a.queueSizeLimit=settings.queueSizeLimit;a.simUploadLimit=settings.simUploadLimit;settings.hideButton&&(a.hideButton=!0);settings.fileDesc&&(a.fileDesc=settings.fileDesc);settings.fileExt&&(a.fileExt=settings.fileExt);settings.multi&&(a.multi=!0);settings.auto&&(a.auto=!0);settings.sizeLimit&&(a.sizeLimit=settings.sizeLimit);settings.checkScript&&
(a.checkScript=settings.checkScript);settings.fileDataName&&(a.fileDataName=settings.fileDataName);settings.queueID&&(a.queueID=settings.queueID);!1!==settings.onInit()&&(c(this).css("display","none"),c(this).after('<div id="'+c(this).attr("id")+'Uploader"></div>'),swfobject.embedSWF(settings.uploader,settings.id+"Uploader",settings.width,settings.height,"9.0.24",settings.expressInstall,a,{quality:"high",wmode:settings.wmode,allowScriptAccess:settings.scriptAccess}),!1==settings.queueID&&c("#"+c(this).attr("id")+
"Uploader").after('<div id="'+c(this).attr("id")+'Queue" class="uploadifyQueue"></div>'));"function"==typeof settings.onOpen&&c(this).bind("uploadifyOpen",settings.onOpen);c(this).bind("uploadifySelect",{action:settings.onSelect,queueID:settings.queueID},function(a,b,d){if(a.data.action(a,b,d)!==false){var e=Math.round(d.size/1024*100)*0.01,g="KB";if(e>1E3){e=Math.round(e*0.1)*0.01;g="MB"}e=e.toString().split(".");e=e.length>1?e[0]+"."+e[1].substr(0,2):e[0];fileName=d.name.length>20?d.name.substr(0,
20)+"...":d.name;queue="#"+c(this).attr("id")+"Queue";a.data.queueID&&(queue="#"+a.data.queueID);c(queue).append('<div id="'+c(this).attr("id")+b+'" class="uploadifyQueueItem"><div class="cancel"><a href="javascript:jQuery(\'#'+c(this).attr("id")+"').uploadifyCancel('"+b+'\')"><img src="'+settings.cancelImg+'" border="0" /></a></div><span class="fileName">'+fileName+" ("+e+g+')</span><span class="percentage"></span><div class="uploadifyProgress"><div id="'+c(this).attr("id")+b+'ProgressBar" class="uploadifyProgressBar"><\!--Progress Bar--\></div></div></div>')}});
"function"==typeof settings.onSelectOnce&&c(this).bind("uploadifySelectOnce",settings.onSelectOnce);c(this).bind("uploadifyQueueFull",{action:settings.onQueueFull},function(a,c){a.data.action(a,c)!==false&&alert("The queue is full.  The max size is "+c+".")});c(this).bind("uploadifyCheckExist",{action:settings.onCheck},function(a,d,e,g,i){var k={},k=e;k.folder=b+g;if(i)for(var H in e)var y=H;c.post(d,k,function(b){for(var k in b)a.data.action(a,d,e,g,i)!==false&&(confirm("Do you want to replace the file "+
b[k]+"?")||document.getElementById(c(a.target).attr("id")+"Uploader").cancelFileUpload(k,true,true));i?document.getElementById(c(a.target).attr("id")+"Uploader").startFileUpload(y,true):document.getElementById(c(a.target).attr("id")+"Uploader").startFileUpload(null,true)},"json")});c(this).bind("uploadifyCancel",{action:settings.onCancel},function(a,b,d,e,g){a.data.action(a,b,d,e,g)!==false&&c("#"+c(this).attr("id")+b).fadeOut(g==true?0:250,function(){c(this).remove()})});"function"==typeof settings.onClearQueue&&
c(this).bind("uploadifyClearQueue",settings.onClearQueue);var i=[];c(this).bind("uploadifyError",{action:settings.onError},function(a,b,d,e){if(a.data.action(a,b,d,e)!==false){i.push([b,d,e]);c("#"+c(this).attr("id")+b+" .percentage").text(" - "+e.type+" Error");c("#"+c(this).attr("id")+b).addClass("uploadifyError")}});c(this).bind("uploadifyProgress",{action:settings.onProgress,toDisplay:settings.displayData},function(a,b,d,e){if(a.data.action(a,b,d,e)!==false){c("#"+c(this).attr("id")+b+"ProgressBar").css("width",
e.percentage+"%");a.data.toDisplay=="percentage"&&(displayData=" - "+e.percentage+"%");a.data.toDisplay=="speed"&&(displayData=" - "+e.speed+"KB/s");a.data.toDisplay==null&&(displayData=" ");c("#"+c(this).attr("id")+b+" .percentage").text(displayData)}});c(this).bind("uploadifyComplete",{action:settings.onComplete},function(a,b,e,d,g){if(a.data.action(a,b,e,unescape(d),g)!==false){c("#"+c(this).attr("id")+b+" .percentage").text(" - Completed");c("#"+c(this).attr("id")+b).fadeOut(250,function(){c(this).remove()})}});
"function"==typeof settings.onAllComplete&&c(this).bind("uploadifyAllComplete",{action:settings.onAllComplete},function(a,b){a.data.action(a,b)!==false&&(i=[])})})},uploadifySettings:function(d,b,a){var e=!1;c(this).each(function(){if("scriptData"==d&&null!=b){var g=a?b:c.extend(settings.scriptData,b),i="",q;for(q in g)i+="&"+q+"="+escape(g[q]);b=i.substr(1)}e=document.getElementById(c(this).attr("id")+"Uploader").updateSettings(d,b)});if(null==b){if("scriptData"==d){for(var g=unescape(e).split("&"),
i={},r=0;r<g.length;r++){var q=g[r].split("=");i[q[0]]=q[1]}e=i}return e}},uploadifyUpload:function(d){c(this).each(function(){document.getElementById(c(this).attr("id")+"Uploader").startFileUpload(d,!1)})},uploadifyCancel:function(d){c(this).each(function(){document.getElementById(c(this).attr("id")+"Uploader").cancelFileUpload(d,!0,!1)})},uploadifyClearQueue:function(){c(this).each(function(){document.getElementById(c(this).attr("id")+"Uploader").clearFileUploadQueue(!1)})}})}(jQuery);
var swfobject=function(){function c(){if(!x){try{var j=h.getElementsByTagName("body")[0].appendChild(h.createElement("span"));j.parentNode.removeChild(j)}catch(a){return}x=!0;for(var j=B.length,b=0;b<j;b++)B[b]()}}function d(j){x?j():B[B.length]=j}function b(j){if(typeof o.addEventListener!=l)o.addEventListener("load",j,!1);else if(typeof h.addEventListener!=l)h.addEventListener("load",j,!1);else if(typeof o.attachEvent!=l)H(o,"onload",j);else if("function"==typeof o.onload){var a=o.onload;o.onload=
function(){a();j()}}else o.onload=j}function a(){var j=h.getElementsByTagName("body")[0],a=h.createElement(s);a.setAttribute("type",C);var b=j.appendChild(a);if(b){var c=0;(function(){if(typeof b.GetVariable!=l){var d=b.GetVariable("$version");d&&(d=d.split(" ")[1].split(","),f.pv=[parseInt(d[0],10),parseInt(d[1],10),parseInt(d[2],10)])}else if(10>c){c++;setTimeout(arguments.callee,10);return}j.removeChild(a);b=null;e()})()}else e()}function e(){var j=u.length;if(0<j)for(var a=0;a<j;a++){var b=u[a].id,
c=u[a].callbackFn,d={success:!1,id:b};if(0<f.pv[0]){var e=k(b);if(e)if(y(u[a].swfVersion)&&!(f.wk&&312>f.wk))w(b,!0),c&&(d.success=!0,d.ref=g(b),c(d));else if(u[a].expressInstall&&i()){d={};d.data=u[a].expressInstall;d.width=e.getAttribute("width")||"0";d.height=e.getAttribute("height")||"0";e.getAttribute("class")&&(d.styleclass=e.getAttribute("class"));e.getAttribute("align")&&(d.align=e.getAttribute("align"));for(var h={},e=e.getElementsByTagName("param"),R=e.length,n=0;n<R;n++)"movie"!=e[n].getAttribute("name").toLowerCase()&&
(h[e[n].getAttribute("name")]=e[n].getAttribute("value"));r(d,h,b,c)}else q(e),c&&c(d)}else if(w(b,!0),c){if((b=g(b))&&typeof b.SetVariable!=l)d.success=!0,d.ref=b;c(d)}}}function g(j){var a=null;if((j=k(j))&&"OBJECT"==j.nodeName)typeof j.SetVariable!=l?a=j:(j=j.getElementsByTagName(s)[0])&&(a=j);return a}function i(){return!D&&y("6.0.65")&&(f.win||f.mac)&&!(f.wk&&312>f.wk)}function r(a,b,c,d){D=!0;I=d||null;M={success:!1,id:c};var e=k(c);if(e){"OBJECT"==e.nodeName?(A=t(e),E=null):(A=e,E=c);a.id=
N;if(typeof a.width==l||!/%$/.test(a.width)&&310>parseInt(a.width,10))a.width="310";if(typeof a.height==l||!/%$/.test(a.height)&&137>parseInt(a.height,10))a.height="137";h.title=h.title.slice(0,47)+" - Flash Player Installation";d=f.ie&&f.win?"ActiveX":"PlugIn";d="MMredirectURL="+o.location.toString().replace(/&/g,"%26")+"&MMplayerType="+d+"&MMdoctitle="+h.title;b.flashvars=typeof b.flashvars!=l?b.flashvars+("&"+d):d;f.ie&&f.win&&4!=e.readyState&&(d=h.createElement("div"),c+="SWFObjectNew",d.setAttribute("id",
c),e.parentNode.insertBefore(d,e),e.style.display="none",function(){e.readyState==4?e.parentNode.removeChild(e):setTimeout(arguments.callee,10)}());G(a,b,c)}}function q(a){if(f.ie&&f.win&&4!=a.readyState){var b=h.createElement("div");a.parentNode.insertBefore(b,a);b.parentNode.replaceChild(t(a),b);a.style.display="none";(function(){4==a.readyState?a.parentNode.removeChild(a):setTimeout(arguments.callee,10)})()}else a.parentNode.replaceChild(t(a),a)}function t(a){var b=h.createElement("div");if(f.win&&
f.ie)b.innerHTML=a.innerHTML;else if(a=a.getElementsByTagName(s)[0])if(a=a.childNodes)for(var c=a.length,d=0;d<c;d++)!(1==a[d].nodeType&&"PARAM"==a[d].nodeName)&&8!=a[d].nodeType&&b.appendChild(a[d].cloneNode(!0));return b}function G(a,b,c){var d,e=k(c);if(f.wk&&312>f.wk)return d;if(e)if(typeof a.id==l&&(a.id=c),f.ie&&f.win){var g="",m;for(m in a)a[m]!=Object.prototype[m]&&("data"==m.toLowerCase()?b.movie=a[m]:"styleclass"==m.toLowerCase()?g+=' class="'+a[m]+'"':"classid"!=m.toLowerCase()&&(g+=" "+
m+'="'+a[m]+'"'));m="";for(var i in b)b[i]!=Object.prototype[i]&&(m+='<param name="'+i+'" value="'+b[i]+'" />');e.outerHTML='<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"'+g+">"+m+"</object>";F[F.length]=a.id;d=k(a.id)}else{i=h.createElement(s);i.setAttribute("type",C);for(var n in a)a[n]!=Object.prototype[n]&&("styleclass"==n.toLowerCase()?i.setAttribute("class",a[n]):"classid"!=n.toLowerCase()&&i.setAttribute(n,a[n]));for(g in b)b[g]!=Object.prototype[g]&&"movie"!=g.toLowerCase()&&
(a=i,m=g,n=b[g],c=h.createElement("param"),c.setAttribute("name",m),c.setAttribute("value",n),a.appendChild(c));e.parentNode.replaceChild(i,e);d=i}return d}function K(a){var b=k(a);b&&"OBJECT"==b.nodeName&&(f.ie&&f.win?(b.style.display="none",function(){if(4==b.readyState){var c=k(a);if(c){for(var d in c)"function"==typeof c[d]&&(c[d]=null);c.parentNode.removeChild(c)}}else setTimeout(arguments.callee,10)}()):b.parentNode.removeChild(b))}function k(a){var b=null;try{b=h.getElementById(a)}catch(c){}return b}
function H(a,b,c){a.attachEvent(b,c);z[z.length]=[a,b,c]}function y(a){var b=f.pv,a=a.split(".");a[0]=parseInt(a[0],10);a[1]=parseInt(a[1],10)||0;a[2]=parseInt(a[2],10)||0;return b[0]>a[0]||b[0]==a[0]&&b[1]>a[1]||b[0]==a[0]&&b[1]==a[1]&&b[2]>=a[2]?!0:!1}function L(a,b,c,d){if(!f.ie||!f.mac){var e=h.getElementsByTagName("head")[0];if(e){c=c&&"string"==typeof c?c:"screen";d&&(J=p=null);if(!p||J!=c)d=h.createElement("style"),d.setAttribute("type","text/css"),d.setAttribute("media",c),p=e.appendChild(d),
f.ie&&f.win&&typeof h.styleSheets!=l&&0<h.styleSheets.length&&(p=h.styleSheets[h.styleSheets.length-1]),J=c;f.ie&&f.win?p&&typeof p.addRule==s&&p.addRule(a,b):p&&typeof h.createTextNode!=l&&p.appendChild(h.createTextNode(a+" {"+b+"}"))}}}function w(a,b){if(O){var c=b?"visible":"hidden";x&&k(a)?k(a).style.visibility=c:L("#"+a,"visibility:"+c)}}function P(a){return null!=/[\\\"<>\.;]/.exec(a)&&typeof encodeURIComponent!=l?encodeURIComponent(a):a}var l="undefined",s="object",C="application/x-shockwave-flash",
N="SWFObjectExprInst",o=window,h=document,v=navigator,Q=!1,B=[function(){Q?a():e()}],u=[],F=[],z=[],A,E,I,M,x=!1,D=!1,p,J,O=!0,f=function(){var a=typeof h.getElementById!=l&&typeof h.getElementsByTagName!=l&&typeof h.createElement!=l,b=v.userAgent.toLowerCase(),c=v.platform.toLowerCase(),d=c?/win/.test(c):/win/.test(b),c=c?/mac/.test(c):/mac/.test(b),b=/webkit/.test(b)?parseFloat(b.replace(/^.*webkit\/(\d+(\.\d+)?).*$/,"$1")):!1,e=!+"\v1",g=[0,0,0],f=null;if(typeof v.plugins!=l&&typeof v.plugins["Shockwave Flash"]==
s){if((f=v.plugins["Shockwave Flash"].description)&&!(typeof v.mimeTypes!=l&&v.mimeTypes[C]&&!v.mimeTypes[C].enabledPlugin))Q=!0,e=!1,f=f.replace(/^.*\s+(\S+\s+\S+$)/,"$1"),g[0]=parseInt(f.replace(/^(.*)\..*$/,"$1"),10),g[1]=parseInt(f.replace(/^.*\.(.*)\s.*$/,"$1"),10),g[2]=/[a-zA-Z]/.test(f)?parseInt(f.replace(/^.*[a-zA-Z]+(.*)$/,"$1"),10):0}else if(typeof o.ActiveXObject!=l)try{var i=new ActiveXObject("ShockwaveFlash.ShockwaveFlash");if(i&&(f=i.GetVariable("$version")))e=!0,f=f.split(" ")[1].split(","),
g=[parseInt(f[0],10),parseInt(f[1],10),parseInt(f[2],10)]}catch(n){}return{w3:a,pv:g,wk:b,ie:e,win:d,mac:c}}();(function(){f.w3&&((typeof h.readyState!=l&&"complete"==h.readyState||typeof h.readyState==l&&(h.getElementsByTagName("body")[0]||h.body))&&c(),x||(typeof h.addEventListener!=l&&h.addEventListener("DOMContentLoaded",c,!1),f.ie&&f.win&&(h.attachEvent("onreadystatechange",function(){"complete"==h.readyState&&(h.detachEvent("onreadystatechange",arguments.callee),c())}),o==top&&function(){if(!x){try{h.documentElement.doScroll("left")}catch(a){setTimeout(arguments.callee,
0);return}c()}}()),f.wk&&function(){x||(/loaded|complete/.test(h.readyState)?c():setTimeout(arguments.callee,0))}(),b(c)))})();(function(){f.ie&&f.win&&window.attachEvent("onunload",function(){for(var a=z.length,b=0;b<a;b++)z[b][0].detachEvent(z[b][1],z[b][2]);a=F.length;for(b=0;b<a;b++)K(F[b]);for(var c in f)f[c]=null;f=null;for(var d in swfobject)swfobject[d]=null;swfobject=null})})();return{registerObject:function(a,b,c,d){if(f.w3&&a&&b){var e={};e.id=a;e.swfVersion=b;e.expressInstall=c;e.callbackFn=
d;u[u.length]=e;w(a,!1)}else d&&d({success:!1,id:a})},getObjectById:function(a){if(f.w3)return g(a)},embedSWF:function(a,b,c,e,g,h,m,q,n,k){var t={success:!1,id:b};f.w3&&!(f.wk&&312>f.wk)&&a&&b&&c&&e&&g?(w(b,!1),d(function(){c+="";e+="";var d={};if(n&&typeof n===s)for(var f in n)d[f]=n[f];d.data=a;d.width=c;d.height=e;f={};if(q&&typeof q===s)for(var o in q)f[o]=q[o];if(m&&typeof m===s)for(var p in m)f.flashvars=typeof f.flashvars!=l?f.flashvars+("&"+p+"="+m[p]):p+"="+m[p];if(y(g))o=G(d,f,b),d.id==
b&&w(b,!0),t.success=!0,t.ref=o;else{if(h&&i()){d.data=h;r(d,f,b,k);return}w(b,!0)}k&&k(t)})):k&&k(t)},switchOffAutoHideShow:function(){O=!1},ua:f,getFlashPlayerVersion:function(){return{major:f.pv[0],minor:f.pv[1],release:f.pv[2]}},hasFlashPlayerVersion:y,createSWF:function(a,b,c){if(f.w3)return G(a,b,c)},showExpressInstall:function(a,b,c,d){f.w3&&i()&&r(a,b,c,d)},removeSWF:function(a){f.w3&&K(a)},createCSS:function(a,b,c,d){f.w3&&L(a,b,c,d)},addDomLoadEvent:d,addLoadEvent:b,getQueryParamValue:function(a){var b=
h.location.search||h.location.hash;if(b){/\?/.test(b)&&(b=b.split("?")[1]);if(null==a)return P(b);for(var b=b.split("&"),c=0;c<b.length;c++)if(b[c].substring(0,b[c].indexOf("="))==a)return P(b[c].substring(b[c].indexOf("=")+1))}return""},expressInstallCallback:function(){if(D){var a=k(N);a&&A&&(a.parentNode.replaceChild(A,a),E&&(w(E,!0),f.ie&&f.win&&(A.style.display="block")),I&&I(M));D=!1}}}}();
(function(c){var d;c.rails=d={linkClickSelector:"a[data-confirm], a[data-method], a[data-remote]",formSubmitSelector:"form",formInputClickSelector:"form input[type=submit], form input[type=image], form button[type=submit], form button:not([type])",disableSelector:"input[data-disable-with], button[data-disable-with], textarea[data-disable-with]",enableSelector:"input[data-disable-with]:disabled, button[data-disable-with]:disabled, textarea[data-disable-with]:disabled",requiredInputSelector:"input[name][required],textarea[name][required]",
fileInputSelector:"input:file",CSRFProtection:function(b){var a=c('meta[name="csrf-token"]').attr("content");a&&b.setRequestHeader("X-CSRF-Token",a)},fire:function(b,a,d){a=c.Event(a);b.trigger(a,d);return!1!==a.result},confirm:function(b){return confirm(b)},ajax:function(b){return c.ajax(b)},handleRemote:function(b){var a,e,g,i=b.data("type")||c.ajaxSettings&&c.ajaxSettings.dataType;if(d.fire(b,"ajax:before")){if(b.is("form")){a=b.attr("method");e=b.attr("action");g=b.serializeArray();var r=b.data("ujs:submit-button");
r&&(g.push(r),b.data("ujs:submit-button",null))}else a=b.data("method"),e=b.attr("href"),g=null;d.ajax({url:e,type:a||"GET",data:g,dataType:i,beforeSend:function(a,c){void 0===c.dataType&&a.setRequestHeader("accept","*/*;q=0.5, "+c.accepts.script);return d.fire(b,"ajax:beforeSend",[a,c])},success:function(a,c,d){b.trigger("ajax:success",[a,c,d])},complete:function(a,c){b.trigger("ajax:complete",[a,c])},error:function(a,c,d){b.trigger("ajax:error",[a,c,d])}})}},handleMethod:function(b){var a=b.attr("href"),
d=b.data("method"),b=c("meta[name=csrf-token]").attr("content"),g=c("meta[name=csrf-param]").attr("content"),a=c('<form method="post" action="'+a+'"></form>'),d='<input name="_method" value="'+d+'" type="hidden" />';void 0!==g&&void 0!==b&&(d+='<input name="'+g+'" value="'+b+'" type="hidden" />');a.hide().append(d).appendTo("body");a.submit()},disableFormElements:function(b){b.find(d.disableSelector).each(function(){var a=c(this),b=a.is("button")?"html":"val";a.data("ujs:enable-with",a[b]());a[b](a.data("disable-with"));
a.attr("disabled","disabled")})},enableFormElements:function(b){b.find(d.enableSelector).each(function(){var a=c(this),b=a.is("button")?"html":"val";if(a.data("ujs:enable-with"))a[b](a.data("ujs:enable-with"));a.removeAttr("disabled")})},allowAction:function(b){var a=b.data("confirm"),c=!1,g;if(!a)return!0;d.fire(b,"confirm")&&(c=d.confirm(a),g=d.fire(b,"confirm:complete",[c]));return c&&g},blankInputs:function(b,a,d){var g=c(),i;b.find(a||"input,textarea").each(function(){i=c(this);if(d?i.val():
!i.val())g=g.add(i)});return g.length?g:!1},nonBlankInputs:function(b,a){return d.blankInputs(b,a,!0)},stopEverything:function(b){b.stopImmediatePropagation();return!1},callFormSubmitBindings:function(b){var b=b.data("events"),a=!0;void 0!==b&&void 0!==b.submit&&c.each(b.submit,function(b,c){if("function"===typeof c.handler)return a=c.handler(c.data)});return a}};"ajaxPrefilter"in c?c.ajaxPrefilter(function(b,a,c){d.CSRFProtection(c)}):c(document).ajaxSend(function(b,a){d.CSRFProtection(a)});c(d.linkClickSelector).live("click.rails",
function(b){var a=c(this);if(!d.allowAction(a))return d.stopEverything(b);if(void 0!==a.data("remote"))return d.handleRemote(a),!1;if(a.data("method"))return d.handleMethod(a),!1});c(d.formSubmitSelector).live("submit.rails",function(b){var a=c(this),e=void 0!==a.data("remote"),g=d.blankInputs(a,d.requiredInputSelector),i=d.nonBlankInputs(a,d.fileInputSelector);if(!d.allowAction(a))return d.stopEverything(b);if(g&&d.fire(a,"ajax:aborted:required",[g]))return!e;if(e){if(i)return d.fire(a,"ajax:aborted:file",
[i]);if(!c.support.submitBubbles&&!1===d.callFormSubmitBindings(a))return d.stopEverything(b);d.handleRemote(a);return!1}setTimeout(function(){d.disableFormElements(a)},13)});c(d.formInputClickSelector).live("click.rails",function(b){var a=c(this);if(!d.allowAction(a))return d.stopEverything(b);b=(b=a.attr("name"))?{name:b,value:a.val()}:null;a.closest("form").data("ujs:submit-button",b)});c(d.formSubmitSelector).live("ajax:beforeSend.rails",function(b){this==b.target&&d.disableFormElements(c(this))});
c(d.formSubmitSelector).live("ajax:complete.rails",function(b){this==b.target&&d.enableFormElements(c(this))})})(jQuery);
$(document).ready(function(){var c=window.script_data,d=$("meta[name=csrf-token]").attr("content"),b=$("meta[name=csrf-param]").attr("content");c[b]=encodeURI(encodeURIComponent(d.toString()));$("#fileInput").uploadify({script:window.upload_url,uploader:"/assets/external/uploadify/uploadify.swf",cancelImg:"/assets/external/uploadify/cancel.png",auto:!1,folder:"",scriptAcess:"always",multi:"true",fileDesc:"Please select the photos to upload",fileExt:"*.jpg;*.jpeg;*.jpe;*.gif;*.png",buttonText:"Choose photos",
scriptData:c,onAllComplete:function(){window.location.reload()},onError:function(a,b,c,d){alert(d.type+" Error: "+d.info)}});pe.init_page_framework()});
