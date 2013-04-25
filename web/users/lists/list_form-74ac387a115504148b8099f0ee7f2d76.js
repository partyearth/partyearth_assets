(function(c){function n(){if(c.fn.ajaxSubmit.debug){var a="[jquery.form] "+Array.prototype.join.call(arguments,"");window.console&&window.console.log?window.console.log(a):window.opera&&window.opera.postError&&window.opera.postError(a)}}c.fn.ajaxSubmit=function(a){function f(){function d(){var a=k.attr("target"),l=k.attr("action");b.setAttribute("target",g);"POST"!=b.getAttribute("method")&&b.setAttribute("method","POST");b.getAttribute("action")!=e.url&&b.setAttribute("action",e.url);e.skipEncodingOverride||
k.attr({encoding:"multipart/form-data",enctype:"multipart/form-data"});e.timeout&&setTimeout(function(){u=!0;f()},e.timeout);var m=[];try{if(e.extraData)for(var n in e.extraData)m.push(c('<input type="hidden" name="'+n+'" value="'+e.extraData[n]+'" />').appendTo(b)[0]);j.appendTo("body");h.attachEvent?h.attachEvent("onload",f):h.addEventListener("load",f,!1);b.submit()}finally{b.setAttribute("action",l),a?b.setAttribute("target",a):k.removeAttr("target"),c(m).remove()}}function f(){if(!l.aborted){var a=
h.contentWindow?h.contentWindow.document:h.contentDocument?h.contentDocument:h.document;if(a&&a.location.href!=e.iframeSrc){h.detachEvent?h.detachEvent("onload",f):h.removeEventListener("load",f,!1);var b=!0;try{if(u)throw"timeout";var d="xml"==e.dataType||a.XMLDocument||c.isXMLDoc(a);n("isXml="+d);if(!d&&(window.opera&&(null==a.body||""==a.body.innerHTML))&&--y){n("requeing onLoad callback, DOM not available");setTimeout(f,250);return}l.responseText=a.body?a.body.innerHTML:a.documentElement?a.documentElement.innerHTML:
null;l.responseXML=a.XMLDocument?a.XMLDocument:a;l.getResponseHeader=function(a){return{"content-type":e.dataType}[a]};var g=/(json|script)/.test(e.dataType);if(g||e.textarea){var k=a.getElementsByTagName("textarea")[0];if(k)l.responseText=k.value;else if(g){var q=a.getElementsByTagName("pre")[0],s=a.getElementsByTagName("body")[0];q?l.responseText=q.textContent:s&&(l.responseText=s.innerHTML)}}else"xml"==e.dataType&&(!l.responseXML&&null!=l.responseText)&&(l.responseXML=z(l.responseText));var a=
l,r=e.dataType,d=e,v=a.getResponseHeader("content-type")||"",w="xml"===r||!r&&0<=v.indexOf("xml"),p=w?a.responseXML:a.responseText;w&&"parsererror"===p.documentElement.nodeName&&c.error&&c.error("parsererror");d&&d.dataFilter&&(p=d.dataFilter(p,r));"string"===typeof p&&("json"===r||!r&&0<=v.indexOf("json")?p=A(p):("script"===r||!r&&0<=v.indexOf("javascript"))&&c.globalEval(p));x=p}catch(t){n("error caught:",t),b=!1,l.error=t,e.error&&e.error.call(e.context,l,"error",t),m&&c.event.trigger("ajaxError",
[l,e,t])}l.aborted&&(n("upload aborted"),b=!1);b&&(e.success&&e.success.call(e.context,x,"success",l),m&&c.event.trigger("ajaxSuccess",[l,e]));m&&c.event.trigger("ajaxComplete",[l,e]);m&&!--c.active&&c.event.trigger("ajaxStop");e.complete&&e.complete.call(e.context,l,b?"success":"error");setTimeout(function(){j.removeData("form-plugin-onload");j.remove();l.responseXML=null},100)}}}var b=k[0];if(c(":input[name=submit],:input[id=submit]",b).length)alert('Error: Form elements must not have name or id of "submit".');
else{var e=c.extend(!0,{},c.ajaxSettings,a);e.context=e.context||e;var g="jqFormIO"+(new Date).getTime(),j=c('<iframe id="'+g+'" name="'+g+'" src="'+e.iframeSrc+'" />'),h=j[0];j.css({position:"absolute",top:"-1000px",left:"-1000px"});var l={aborted:0,responseText:null,responseXML:null,status:0,statusText:"n/a",getAllResponseHeaders:function(){},getResponseHeader:function(){},setRequestHeader:function(){},abort:function(){n("aborting upload...");this.aborted=1;j.attr("src",e.iframeSrc);l.error="aborted";
e.error&&e.error.call(e.context,l,"error","aborted");m&&c.event.trigger("ajaxError",[l,e,"aborted"]);e.complete&&e.complete.call(e.context,l,"error")}},m=e.global;m&&!c.active++&&c.event.trigger("ajaxStart");m&&c.event.trigger("ajaxSend",[l,e]);if(e.beforeSend&&!1===e.beforeSend.call(e.context,l,e))e.global&&c.active--;else if(!l.aborted){var u=0,q=b.clk;if(q){var s=q.name;s&&!q.disabled&&(e.extraData=e.extraData||{},e.extraData[s]=q.value,"image"==q.type&&(e.extraData[s+".x"]=b.clk_x,e.extraData[s+
".y"]=b.clk_y))}e.forceSync?d():setTimeout(d,10);var x,y=50,z=c.parseXML||function(a,c){window.ActiveXObject?(c=new ActiveXObject("Microsoft.XMLDOM"),c.async="false",c.loadXML(a)):c=(new DOMParser).parseFromString(a,"text/xml");return c&&c.documentElement&&"parsererror"!=c.documentElement.nodeName?c:null},A=c.parseJSON||function(a){return window.eval("("+a+")")}}}}if(!this.length)return n("ajaxSubmit: skipping submit process - no element selected"),this;"function"==typeof a&&(a={success:a});var b=
this.attr("action");(b="string"===typeof b?c.trim(b):"")&&(b=(b.match(/^([^#]+)/)||[])[1]);b=b||window.location.href||"";a=c.extend(!0,{url:b,type:this[0].getAttribute("method")||"GET",iframeSrc:/^https/i.test(window.location.href||"")?"javascript:false":"about:blank"},a);b={};this.trigger("form-pre-serialize",[this,a,b]);if(b.veto)return n("ajaxSubmit: submit vetoed via form-pre-serialize trigger"),this;if(a.beforeSerialize&&!1===a.beforeSerialize(this,a))return n("ajaxSubmit: submit aborted via beforeSerialize callback"),
this;var d,g,j=this.formToArray(a.semantic);if(a.data)for(d in a.extraData=a.data,a.data)if(a.data[d]instanceof Array)for(var h in a.data[d])j.push({name:d,value:a.data[d][h]});else g=a.data[d],g=c.isFunction(g)?g():g,j.push({name:d,value:g});if(a.beforeSubmit&&!1===a.beforeSubmit(j,this,a))return n("ajaxSubmit: submit aborted via beforeSubmit callback"),this;this.trigger("form-submit-validate",[j,this,a,b]);if(b.veto)return n("ajaxSubmit: submit vetoed via form-submit-validate trigger"),this;d=c.param(j);
"GET"==a.type.toUpperCase()?(a.url+=(0<=a.url.indexOf("?")?"&":"?")+d,a.data=null):a.data=d;var k=this,m=[];a.resetForm&&m.push(function(){k.resetForm()});a.clearForm&&m.push(function(){k.clearForm()});if(!a.dataType&&a.target){var u=a.success||function(){};m.push(function(b){var d=a.replaceTarget?"replaceWith":"html";c(a.target)[d](b).each(u,arguments)})}else a.success&&m.push(a.success);a.success=function(c,b,d){for(var f=a.context||a,g=0,j=m.length;g<j;g++)m[g].apply(f,[c,b,d||k,k])};d=0<c("input:file",
this).length;h="multipart/form-data"==k.attr("enctype")||"multipart/form-data"==k.attr("encoding");!1!==a.iframe&&(d||a.iframe||h)?a.closeKeepAlive?c.get(a.closeKeepAlive,f):f():c.ajax(a);this.trigger("form-submit-notify",[this,a]);return this};c.fn.ajaxForm=function(a){if(0===this.length){var f=this.selector,b=this.context;if(!c.isReady&&f)return n("DOM not ready, queuing ajaxForm"),c(function(){c(f,b).ajaxForm(a)}),this;n("terminating; zero elements found by selector"+(c.isReady?"":" (DOM not ready)"));
return this}return this.ajaxFormUnbind().bind("submit.form-plugin",function(b){b.isDefaultPrevented()||(b.preventDefault(),c(this).ajaxSubmit(a))}).bind("click.form-plugin",function(a){var b=a.target,f=c(b);if(!f.is(":submit,input:image")){b=f.closest(":submit");if(0==b.length)return;b=b[0]}var h=this;h.clk=b;"image"==b.type&&(void 0!=a.offsetX?(h.clk_x=a.offsetX,h.clk_y=a.offsetY):"function"==typeof c.fn.offset?(f=f.offset(),h.clk_x=a.pageX-f.left,h.clk_y=a.pageY-f.top):(h.clk_x=a.pageX-b.offsetLeft,
h.clk_y=a.pageY-b.offsetTop));setTimeout(function(){h.clk=h.clk_x=h.clk_y=null},100)})};c.fn.ajaxFormUnbind=function(){return this.unbind("submit.form-plugin click.form-plugin")};c.fn.formToArray=function(a){var f=[];if(0===this.length)return f;var b=this[0],d=a?b.getElementsByTagName("*"):b.elements;if(!d)return f;var g,j,h,k,m,n;g=0;for(m=d.length;g<m;g++)if(j=d[g],h=j.name)if(a&&b.clk&&"image"==j.type)!j.disabled&&b.clk==j&&(f.push({name:h,value:c(j).val()}),f.push({name:h+".x",value:b.clk_x},
{name:h+".y",value:b.clk_y}));else if((k=c.fieldValue(j,!0))&&k.constructor==Array){j=0;for(n=k.length;j<n;j++)f.push({name:h,value:k[j]})}else null!==k&&"undefined"!=typeof k&&f.push({name:h,value:k});if(!a&&b.clk&&(a=c(b.clk),d=a[0],(h=d.name)&&!d.disabled&&"image"==d.type))f.push({name:h,value:a.val()}),f.push({name:h+".x",value:b.clk_x},{name:h+".y",value:b.clk_y});return f};c.fn.formSerialize=function(a){return c.param(this.formToArray(a))};c.fn.fieldSerialize=function(a){var f=[];this.each(function(){var b=
this.name;if(b){var d=c.fieldValue(this,a);if(d&&d.constructor==Array)for(var g=0,j=d.length;g<j;g++)f.push({name:b,value:d[g]});else null!==d&&"undefined"!=typeof d&&f.push({name:this.name,value:d})}});return c.param(f)};c.fn.fieldValue=function(a){for(var f=[],b=0,d=this.length;b<d;b++){var g=c.fieldValue(this[b],a);null===g||("undefined"==typeof g||g.constructor==Array&&!g.length)||(g.constructor==Array?c.merge(f,g):f.push(g))}return f};c.fieldValue=function(a,f){var b=a.name,d=a.type,g=a.tagName.toLowerCase();
void 0===f&&(f=!0);if(f&&(!b||a.disabled||"reset"==d||"button"==d||("checkbox"==d||"radio"==d)&&!a.checked||("submit"==d||"image"==d)&&a.form&&a.form.clk!=a||"select"==g&&-1==a.selectedIndex))return null;if("select"==g){var j=a.selectedIndex;if(0>j)return null;for(var b=[],g=a.options,h=(d="select-one"==d)?j+1:g.length,j=d?j:0;j<h;j++){var k=g[j];if(k.selected){var m=k.value;m||(m=k.attributes&&k.attributes.value&&!k.attributes.value.specified?k.text:k.value);if(d)return m;b.push(m)}}return b}return c(a).val()};
c.fn.clearForm=function(){return this.each(function(){c("input,select,textarea",this).clearFields()})};c.fn.clearFields=c.fn.clearInputs=function(){return this.each(function(){var a=this.type,c=this.tagName.toLowerCase();"text"==a||"password"==a||"textarea"==c?this.value="":"checkbox"==a||"radio"==a?this.checked=!1:"select"==c&&(this.selectedIndex=-1)})};c.fn.resetForm=function(){return this.each(function(){("function"==typeof this.reset||"object"==typeof this.reset&&!this.reset.nodeType)&&this.reset()})};
c.fn.enable=function(a){void 0===a&&(a=!0);return this.each(function(){this.disabled=!a})};c.fn.selected=function(a){void 0===a&&(a=!0);return this.each(function(){var f=this.type;"checkbox"==f||"radio"==f?this.checked=a:"option"==this.tagName.toLowerCase()&&(f=c(this).parent("select"),a&&(f[0]&&"select-one"==f[0].type)&&f.find("option").selected(!1),this.selected=a)})}})(jQuery);
(function(){var c=function(a,b){return function(){return a.apply(b,arguments)}},n=pe,a=function(a){this.container=a;this.validate=c(this.validate,this);this.on_submit=c(this.on_submit,this);this.error_container=this.container.find(".Error");this.submit_button=this.container.find(".SubmitButton");this.submit_button.click(this.on_submit);this.validators=[]};a.prototype.on_submit=function(){var a=this;if(this.validate())return this.container.ajaxSubmit(function(b){return 0===b.status?(a.submit_button.html("Please wait..."),
window.location.reload()):a.error_container.html(b.errors[0])})};a.prototype.add_validator=function(a){return this.validators.push(a)};a.prototype.validate=function(){var a;a=null;_.each(this.validators,function(b){if(b.failed())return a=b.message});a?(this.error_container.show(),this.error_container.html(a)):this.error_container.hide();return!a};n.ListForm=a}).call(this);
