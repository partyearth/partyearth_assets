(function(b){function n(){if(b.fn.ajaxSubmit.debug){var a="[jquery.form] "+Array.prototype.join.call(arguments,"");window.console&&window.console.log?window.console.log(a):window.opera&&window.opera.postError&&window.opera.postError(a)}}b.fn.ajaxSubmit=function(a){function f(){function d(){var a=k.attr("target"),l=k.attr("action");c.setAttribute("target",h);"POST"!=c.getAttribute("method")&&c.setAttribute("method","POST");c.getAttribute("action")!=e.url&&c.setAttribute("action",e.url);e.skipEncodingOverride||
k.attr({encoding:"multipart/form-data",enctype:"multipart/form-data"});e.timeout&&setTimeout(function(){u=!0;f()},e.timeout);var m=[];try{if(e.extraData)for(var n in e.extraData)m.push(b('<input type="hidden" name="'+n+'" value="'+e.extraData[n]+'" />').appendTo(c)[0]);j.appendTo("body");g.attachEvent?g.attachEvent("onload",f):g.addEventListener("load",f,!1);c.submit()}finally{c.setAttribute("action",l),a?c.setAttribute("target",a):k.removeAttr("target"),b(m).remove()}}function f(){if(!l.aborted){var a=
g.contentWindow?g.contentWindow.document:g.contentDocument?g.contentDocument:g.document;if(a&&a.location.href!=e.iframeSrc){g.detachEvent?g.detachEvent("onload",f):g.removeEventListener("load",f,!1);var c=!0;try{if(u)throw"timeout";var d="xml"==e.dataType||a.XMLDocument||b.isXMLDoc(a);n("isXml="+d);if(!d&&(window.opera&&(null==a.body||""==a.body.innerHTML))&&--y){n("requeing onLoad callback, DOM not available");setTimeout(f,250);return}l.responseText=a.body?a.body.innerHTML:a.documentElement?a.documentElement.innerHTML:
null;l.responseXML=a.XMLDocument?a.XMLDocument:a;l.getResponseHeader=function(a){return{"content-type":e.dataType}[a]};var h=/(json|script)/.test(e.dataType);if(h||e.textarea){var k=a.getElementsByTagName("textarea")[0];if(k)l.responseText=k.value;else if(h){var q=a.getElementsByTagName("pre")[0],s=a.getElementsByTagName("body")[0];q?l.responseText=q.textContent:s&&(l.responseText=s.innerHTML)}}else"xml"==e.dataType&&(!l.responseXML&&null!=l.responseText)&&(l.responseXML=z(l.responseText));var a=
l,r=e.dataType,d=e,v=a.getResponseHeader("content-type")||"",w="xml"===r||!r&&0<=v.indexOf("xml"),p=w?a.responseXML:a.responseText;w&&"parsererror"===p.documentElement.nodeName&&b.error&&b.error("parsererror");d&&d.dataFilter&&(p=d.dataFilter(p,r));"string"===typeof p&&("json"===r||!r&&0<=v.indexOf("json")?p=A(p):("script"===r||!r&&0<=v.indexOf("javascript"))&&b.globalEval(p));x=p}catch(t){n("error caught:",t),c=!1,l.error=t,e.error&&e.error.call(e.context,l,"error",t),m&&b.event.trigger("ajaxError",
[l,e,t])}l.aborted&&(n("upload aborted"),c=!1);c&&(e.success&&e.success.call(e.context,x,"success",l),m&&b.event.trigger("ajaxSuccess",[l,e]));m&&b.event.trigger("ajaxComplete",[l,e]);m&&!--b.active&&b.event.trigger("ajaxStop");e.complete&&e.complete.call(e.context,l,c?"success":"error");setTimeout(function(){j.removeData("form-plugin-onload");j.remove();l.responseXML=null},100)}}}var c=k[0];if(b(":input[name=submit],:input[id=submit]",c).length)alert('Error: Form elements must not have name or id of "submit".');
else{var e=b.extend(!0,{},b.ajaxSettings,a);e.context=e.context||e;var h="jqFormIO"+(new Date).getTime(),j=b('<iframe id="'+h+'" name="'+h+'" src="'+e.iframeSrc+'" />'),g=j[0];j.css({position:"absolute",top:"-1000px",left:"-1000px"});var l={aborted:0,responseText:null,responseXML:null,status:0,statusText:"n/a",getAllResponseHeaders:function(){},getResponseHeader:function(){},setRequestHeader:function(){},abort:function(){n("aborting upload...");this.aborted=1;j.attr("src",e.iframeSrc);l.error="aborted";
e.error&&e.error.call(e.context,l,"error","aborted");m&&b.event.trigger("ajaxError",[l,e,"aborted"]);e.complete&&e.complete.call(e.context,l,"error")}},m=e.global;m&&!b.active++&&b.event.trigger("ajaxStart");m&&b.event.trigger("ajaxSend",[l,e]);if(e.beforeSend&&!1===e.beforeSend.call(e.context,l,e))e.global&&b.active--;else if(!l.aborted){var u=0,q=c.clk;if(q){var s=q.name;s&&!q.disabled&&(e.extraData=e.extraData||{},e.extraData[s]=q.value,"image"==q.type&&(e.extraData[s+".x"]=c.clk_x,e.extraData[s+
".y"]=c.clk_y))}e.forceSync?d():setTimeout(d,10);var x,y=50,z=b.parseXML||function(a,b){window.ActiveXObject?(b=new ActiveXObject("Microsoft.XMLDOM"),b.async="false",b.loadXML(a)):b=(new DOMParser).parseFromString(a,"text/xml");return b&&b.documentElement&&"parsererror"!=b.documentElement.nodeName?b:null},A=b.parseJSON||function(a){return window.eval("("+a+")")}}}}if(!this.length)return n("ajaxSubmit: skipping submit process - no element selected"),this;"function"==typeof a&&(a={success:a});var c=
this.attr("action");(c="string"===typeof c?b.trim(c):"")&&(c=(c.match(/^([^#]+)/)||[])[1]);c=c||window.location.href||"";a=b.extend(!0,{url:c,type:this[0].getAttribute("method")||"GET",iframeSrc:/^https/i.test(window.location.href||"")?"javascript:false":"about:blank"},a);c={};this.trigger("form-pre-serialize",[this,a,c]);if(c.veto)return n("ajaxSubmit: submit vetoed via form-pre-serialize trigger"),this;if(a.beforeSerialize&&!1===a.beforeSerialize(this,a))return n("ajaxSubmit: submit aborted via beforeSerialize callback"),
this;var d,h,j=this.formToArray(a.semantic);if(a.data)for(d in a.extraData=a.data,a.data)if(a.data[d]instanceof Array)for(var g in a.data[d])j.push({name:d,value:a.data[d][g]});else h=a.data[d],h=b.isFunction(h)?h():h,j.push({name:d,value:h});if(a.beforeSubmit&&!1===a.beforeSubmit(j,this,a))return n("ajaxSubmit: submit aborted via beforeSubmit callback"),this;this.trigger("form-submit-validate",[j,this,a,c]);if(c.veto)return n("ajaxSubmit: submit vetoed via form-submit-validate trigger"),this;d=b.param(j);
"GET"==a.type.toUpperCase()?(a.url+=(0<=a.url.indexOf("?")?"&":"?")+d,a.data=null):a.data=d;var k=this,m=[];a.resetForm&&m.push(function(){k.resetForm()});a.clearForm&&m.push(function(){k.clearForm()});if(!a.dataType&&a.target){var u=a.success||function(){};m.push(function(d){var c=a.replaceTarget?"replaceWith":"html";b(a.target)[c](d).each(u,arguments)})}else a.success&&m.push(a.success);a.success=function(b,d,c){for(var e=a.context||a,f=0,h=m.length;f<h;f++)m[f].apply(e,[b,d,c||k,k])};d=0<b("input:file",
this).length;g="multipart/form-data"==k.attr("enctype")||"multipart/form-data"==k.attr("encoding");!1!==a.iframe&&(d||a.iframe||g)?a.closeKeepAlive?b.get(a.closeKeepAlive,f):f():b.ajax(a);this.trigger("form-submit-notify",[this,a]);return this};b.fn.ajaxForm=function(a){if(0===this.length){var f=this.selector,c=this.context;if(!b.isReady&&f)return n("DOM not ready, queuing ajaxForm"),b(function(){b(f,c).ajaxForm(a)}),this;n("terminating; zero elements found by selector"+(b.isReady?"":" (DOM not ready)"));
return this}return this.ajaxFormUnbind().bind("submit.form-plugin",function(d){d.isDefaultPrevented()||(d.preventDefault(),b(this).ajaxSubmit(a))}).bind("click.form-plugin",function(a){var c=a.target,f=b(c);if(!f.is(":submit,input:image")){c=f.closest(":submit");if(0==c.length)return;c=c[0]}var g=this;g.clk=c;"image"==c.type&&(void 0!=a.offsetX?(g.clk_x=a.offsetX,g.clk_y=a.offsetY):"function"==typeof b.fn.offset?(f=f.offset(),g.clk_x=a.pageX-f.left,g.clk_y=a.pageY-f.top):(g.clk_x=a.pageX-c.offsetLeft,
g.clk_y=a.pageY-c.offsetTop));setTimeout(function(){g.clk=g.clk_x=g.clk_y=null},100)})};b.fn.ajaxFormUnbind=function(){return this.unbind("submit.form-plugin click.form-plugin")};b.fn.formToArray=function(a){var f=[];if(0===this.length)return f;var c=this[0],d=a?c.getElementsByTagName("*"):c.elements;if(!d)return f;var h,j,g,k,m,n;h=0;for(m=d.length;h<m;h++)if(j=d[h],g=j.name)if(a&&c.clk&&"image"==j.type)!j.disabled&&c.clk==j&&(f.push({name:g,value:b(j).val()}),f.push({name:g+".x",value:c.clk_x},
{name:g+".y",value:c.clk_y}));else if((k=b.fieldValue(j,!0))&&k.constructor==Array){j=0;for(n=k.length;j<n;j++)f.push({name:g,value:k[j]})}else null!==k&&"undefined"!=typeof k&&f.push({name:g,value:k});if(!a&&c.clk&&(a=b(c.clk),d=a[0],(g=d.name)&&!d.disabled&&"image"==d.type))f.push({name:g,value:a.val()}),f.push({name:g+".x",value:c.clk_x},{name:g+".y",value:c.clk_y});return f};b.fn.formSerialize=function(a){return b.param(this.formToArray(a))};b.fn.fieldSerialize=function(a){var f=[];this.each(function(){var c=
this.name;if(c){var d=b.fieldValue(this,a);if(d&&d.constructor==Array)for(var h=0,j=d.length;h<j;h++)f.push({name:c,value:d[h]});else null!==d&&"undefined"!=typeof d&&f.push({name:this.name,value:d})}});return b.param(f)};b.fn.fieldValue=function(a){for(var f=[],c=0,d=this.length;c<d;c++){var h=b.fieldValue(this[c],a);null===h||("undefined"==typeof h||h.constructor==Array&&!h.length)||(h.constructor==Array?b.merge(f,h):f.push(h))}return f};b.fieldValue=function(a,f){var c=a.name,d=a.type,h=a.tagName.toLowerCase();
void 0===f&&(f=!0);if(f&&(!c||a.disabled||"reset"==d||"button"==d||("checkbox"==d||"radio"==d)&&!a.checked||("submit"==d||"image"==d)&&a.form&&a.form.clk!=a||"select"==h&&-1==a.selectedIndex))return null;if("select"==h){var j=a.selectedIndex;if(0>j)return null;for(var c=[],h=a.options,g=(d="select-one"==d)?j+1:h.length,j=d?j:0;j<g;j++){var k=h[j];if(k.selected){var m=k.value;m||(m=k.attributes&&k.attributes.value&&!k.attributes.value.specified?k.text:k.value);if(d)return m;c.push(m)}}return c}return b(a).val()};
b.fn.clearForm=function(){return this.each(function(){b("input,select,textarea",this).clearFields()})};b.fn.clearFields=b.fn.clearInputs=function(){return this.each(function(){var a=this.type,b=this.tagName.toLowerCase();"text"==a||"password"==a||"textarea"==b?this.value="":"checkbox"==a||"radio"==a?this.checked=!1:"select"==b&&(this.selectedIndex=-1)})};b.fn.resetForm=function(){return this.each(function(){("function"==typeof this.reset||"object"==typeof this.reset&&!this.reset.nodeType)&&this.reset()})};
b.fn.enable=function(a){void 0===a&&(a=!0);return this.each(function(){this.disabled=!a})};b.fn.selected=function(a){void 0===a&&(a=!0);return this.each(function(){var f=this.type;"checkbox"==f||"radio"==f?this.checked=a:"option"==this.tagName.toLowerCase()&&(f=b(this).parent("select"),a&&(f[0]&&"select-one"==f[0].type)&&f.find("option").selected(!1),this.selected=a)})}})(jQuery);
(function(){var b=function(a,b){return function(){return a.apply(b,arguments)}};pe.users||(pe.users={});var n=pe.users,a=function(a){this.container=a;this.on_ajax=b(this.on_ajax,this);this.on_page_clicked=b(this.on_page_clicked,this);this.on_form_changed=b(this.on_form_changed,this);this.lists_container=this.container.find(".Lists");this.container.find("select").change(this.on_form_changed);this.on_form_changed()};a.prototype.on_form_changed=function(){return this.container.ajaxSubmit(this.on_ajax)};
a.prototype.on_page_clicked=function(a){var b;pe.animated_scrolling(this.container);(b=$(a.currentTarget).attr("href"))&&$.get(b,this.on_ajax);return!1};a.prototype.on_ajax=function(a){this.lists_container.html(a);this.container.find(".Paginator a").click(this.on_page_clicked);if(this.on_after_changed)return this.on_after_changed()};a.prototype.change=function(a){return this.on_after_changed=a};n.CollectionSearchForm=a}).call(this);
