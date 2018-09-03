pe.Floater=function(t,e,i){pe.init_widget(this,t),this.bottom_margin=i||0,this.start_point_div=t.find(".FloatingAreaStart"),this.end_point_div=e||null,this.start_from=0,this.stop_at=0,this.is_floating=!1,this.sticked=!1,this.floater=this.container.find(".Floater"),this.offset=0,this.disabled=!1,this.top=parseInt(this.floater.css("margin-top"),10)||0,$(window).scroll(this.callback(this.scrolling)),this.set_floating_area(),pe.Floater.register_floater(this)},pe.Floater.events={TOP_REACHED:"Floater_TOP_REACHED",FLOATING:"Floater_FLOATING",BOTTOM_REACHED:"Floater_BOTTOM_REACHED"},pe.Floater.prototype.set_floating_area=function(){this.start_from=this.start_point_div.offset().top,this.end_point_div&&(this.stop_at=this.end_point_div.offset().top)},pe.Floater.prototype.scrolling=function(){if(!this.disabled){this.set_floating_area();var t=$(window).scrollTop(),e=t+this.offset+this.bottom_margin<=this.start_from,i=t+this.offset+this.bottom_margin>this.start_from,a=this.floater.position().top+this.floater.outerHeight(!0)>this.stop_at;this.is_floating||!i||a||this.sticked?this.is_floating&&e?(this.stop_scrolling(),this.fire_event(pe.Floater.events.TOP_REACHED,this)):this.end_point_div&&(!this.sticked&&a?(this.stick(),this.fire_event(pe.Floater.events.BOTTOM_REACHED,this)):this.sticked&&t+this.floater.outerHeight(!0)<=this.stop_at&&this.unstick()):(this.start_floating(),this.fire_event(pe.Floater.events.FLOATING,this),pe.fire_global_event(pe.Floater.events.FLOATING,this))}},pe.Floater.prototype.start_floating=function(){this.floater.addClass("fixed"),this.floater.removeClass("bottom"),this.is_floating=!0,this.sticked=!1,this.set_offset()},pe.Floater.prototype.stick=function(){this.floater.css("top",this.end_point_div.position().top-this.floater.outerHeight(!0)+"px"),this.floater.removeClass("fixed"),this.floater.css("position","absolute"),this.is_floating=!1,this.sticked=!0},pe.Floater.prototype.disable=function(){this.floater.css("top",this.floater.position().top-140+"px"),this.floater.removeClass("fixed"),this.floater.css("position","absolute"),this.is_floating=!1,this.sticked=!0,this.disabled=!0},pe.Floater.prototype.enable=function(){this.disabled=!1},pe.Floater.prototype.unstick=function(){this.floater.css("margin-top",""),this.floater.css("top",""),this.floater.css("position",""),this.start_floating(),this.fire_event(pe.Floater.events.FLOATING,this)},pe.Floater.prototype.stop_scrolling=function(){this.floater.css("margin-top",""),this.floater.removeClass("fixed"),this.floater.removeClass("bottom"),this.is_floating=!1,this.sticked=!1,this.set_offset()},pe.Floater.prototype.set_offset=function(t){t&&(this.offset=t),0!==this.offset&&this.is_floating?this.floater.css("margin-top",this.top+this.offset+"px"):this.floater.css("margin-top","")},pe.Floater.registered_floaters=[],pe.Floater.register_floater=function(t){pe.Floater.registered_floaters.push(t),pe.Floater.update_positions()},pe.Floater.update_positions=function(){if(pe.Floater.registered_floaters=_.sortBy(pe.Floater.registered_floaters,function(t){return t.container.offset().top},null),pe.Floater.registered_floaters[0]&&(pe.Floater.registered_floaters[0].offset=0,1<pe.Floater.registered_floaters.length))for(var t=1;t<pe.Floater.registered_floaters.length;t++){var e=pe.Floater.registered_floaters[t-1].floater,i=(pe.Floater.registered_floaters[t].floater,pe.Floater.registered_floaters[t-1].offset+e.outerHeight());pe.Floater.registered_floaters[t].offset=i,pe.Floater.registered_floaters[t].is_floating&&pe.Floater.registered_floaters[t].start_floating(),pe.Floater.registered_floaters[t].set_floating_area()}},pe.ChangeImageOnHover=function(t,e){pe.init_widget(this,t),this.image_container=this.container.find(".ImageContainer"),this.link_parent_class=e||null,this.include_caption=this.container.data("include-caption")||!1,this.object_links=this.container.find(".HoverLinkToChange"),this.object_links.mouseover(this.callback(this.object_link_hovered));var i=e?this.container.find("."+e):[];this.link_wrappers=0<i.length?i:this.object_links.parent()},pe.ChangeImageOnHover.prototype.image_html=function(t){var e='<a href="{{object_url}}" title="{{link_title}}" class="thumbnail_link"><img src="{{image_url}}" alt="{{alt_tag}}"></a>';this.include_caption&&(e+='<p class="name"><span class="date">{{link_prefix}}</span><a href="{{object_url}}">{{image_caption}}</a></p>');var i={object_url:t.attr("href"),image_url:t.data("image-url"),link_title:t.data("title")||"",alt_tag:t.data("image-alt-tag")||"",link_prefix:t.data("link-prefix")||"",image_caption:t.html()};return pe.templatize(e,i)},pe.ChangeImageOnHover.instantiate_all=function(e){return $.map($(".ChangeImageOnHoverContainer"),function(t){return new pe.ChangeImageOnHover($(t),e)})},pe.ChangeImageOnHover.prototype.object_link_hovered=function(t){var e=$(t.target);this.object_links.removeClass("selected"),this.link_wrappers.removeClass("selected"),e.addClass("selected"),this.link_wrapper(e).addClass("selected"),this.image_container.html(this.image_html(e)),pe.convert_to_rounded_corners()},pe.ChangeImageOnHover.prototype.link_wrapper=function(t){return this.link_parent_class?t.closest("."+this.link_parent_class):t.parent()},function(s){var n;s.rails=n={linkClickSelector:"a[data-confirm], a[data-method], a[data-remote]",formSubmitSelector:"form",formInputClickSelector:"form input[type=submit], form input[type=image], form button[type=submit], form button:not([type])",disableSelector:"input[data-disable-with], button[data-disable-with], textarea[data-disable-with]",enableSelector:"input[data-disable-with]:disabled, button[data-disable-with]:disabled, textarea[data-disable-with]:disabled",requiredInputSelector:"input[name][required],textarea[name][required]",fileInputSelector:"input:file",CSRFProtection:function(t){var e=s('meta[name="csrf-token"]').attr("content");e&&t.setRequestHeader("X-CSRF-Token",e)},fire:function(t,e,i){var a=s.Event(e);return t.trigger(a,i),!1!==a.result},confirm:function(t){return confirm(t)},ajax:function(t){return s.ajax(t)},handleRemote:function(a){var t,e,i,o=a.data("type")||s.ajaxSettings&&s.ajaxSettings.dataType;if(n.fire(a,"ajax:before")){if(a.is("form")){t=a.attr("method"),e=a.attr("action"),i=a.serializeArray();var r=a.data("ujs:submit-button");r&&(i.push(r),a.data("ujs:submit-button",null))}else t=a.data("method"),e=a.attr("href"),i=null;n.ajax({url:e,type:t||"GET",data:i,dataType:o,beforeSend:function(t,e){return e.dataType===undefined&&t.setRequestHeader("accept","*/*;q=0.5, "+e.accepts.script),n.fire(a,"ajax:beforeSend",[t,e])},success:function(t,e,i){a.trigger("ajax:success",[t,e,i])},complete:function(t,e){a.trigger("ajax:complete",[t,e])},error:function(t,e,i){a.trigger("ajax:error",[t,e,i])}})}},handleMethod:function(t){var e=t.attr("href"),i=t.data("method"),a=s("meta[name=csrf-token]").attr("content"),o=s("meta[name=csrf-param]").attr("content"),r=s('<form method="post" action="'+e+'"></form>'),n='<input name="_method" value="'+i+'" type="hidden" />';o!==undefined&&a!==undefined&&(n+='<input name="'+o+'" value="'+a+'" type="hidden" />'),r.hide().append(n).appendTo("body"),r.submit()},disableFormElements:function(t){t.find(n.disableSelector).each(function(){var t=s(this),e=t.is("button")?"html":"val";t.data("ujs:enable-with",t[e]()),t[e](t.data("disable-with")),t.attr("disabled","disabled")})},enableFormElements:function(t){t.find(n.enableSelector).each(function(){var t=s(this),e=t.is("button")?"html":"val";t.data("ujs:enable-with")&&t[e](t.data("ujs:enable-with")),t.removeAttr("disabled")})},allowAction:function(t){var e,i=t.data("confirm"),a=!1;return!i||(n.fire(t,"confirm")&&(a=n.confirm(i),e=n.fire(t,"confirm:complete",[a])),a&&e)},blankInputs:function(t,e,i){var a,o=s(),r=e||"input,textarea";return t.find(r).each(function(){a=s(this),(i?a.val():!a.val())&&(o=o.add(a))}),!!o.length&&o},nonBlankInputs:function(t,e){return n.blankInputs(t,e,!0)},stopEverything:function(t){return t.stopImmediatePropagation(),!1},callFormSubmitBindings:function(t){var e=t.data("events"),i=!0;return e!==undefined&&e.submit!==undefined&&s.each(e.submit,function(t,e){if("function"==typeof e.handler)return i=e.handler(e.data)}),i}},"ajaxPrefilter"in s?s.ajaxPrefilter(function(t,e,i){n.CSRFProtection(i)}):s(document).ajaxSend(function(t,e){n.CSRFProtection(e)}),s(n.linkClickSelector).live("click.rails",function(t){var e=s(this);return n.allowAction(e)?e.data("remote")!==undefined?(n.handleRemote(e),!1):e.data("method")?(n.handleMethod(e),!1):void 0:n.stopEverything(t)}),s(n.formSubmitSelector).live("submit.rails",function(t){var e=s(this),i=e.data("remote")!==undefined,a=n.blankInputs(e,n.requiredInputSelector),o=n.nonBlankInputs(e,n.fileInputSelector);return n.allowAction(e)?a&&n.fire(e,"ajax:aborted:required",[a])?!i:i?o?n.fire(e,"ajax:aborted:file",[o]):s.support.submitBubbles||!1!==n.callFormSubmitBindings(e)?(n.handleRemote(e),!1):n.stopEverything(t):void setTimeout(function(){n.disableFormElements(e)},13):n.stopEverything(t)}),s(n.formInputClickSelector).live("click.rails",function(t){var e=s(this);if(!n.allowAction(e))return n.stopEverything(t);var i=e.attr("name"),a=i?{name:i,value:e.val()}:null;e.closest("form").data("ujs:submit-button",a)}),s(n.formSubmitSelector).live("ajax:beforeSend.rails",function(t){this==t.target&&n.disableFormElements(s(this))}),s(n.formSubmitSelector).live("ajax:complete.rails",function(t){this==t.target&&n.enableFormElements(s(this))})}(jQuery),$(document).ready(function(){new pe.Floater($(".FloaterContainer")),pe.init_page_framework()});