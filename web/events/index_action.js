pe.ChangeImageOnHover=function(a,b){pe.init_widget(this,a);this.image_container=this.container.find(".ImageContainer");this.link_parent_class=b||null;this.include_caption=this.container.data("include-caption")||!1;this.object_links=this.container.find(".HoverLinkToChange");this.object_links.mouseover(this.callback(this.object_link_hovered));var c=b?this.container.find("."+b):[];this.link_wrappers=0<c.length?c:this.object_links.parent()};
pe.ChangeImageOnHover.prototype.image_html=function(a){var b='<a href="{{object_url}}" title="{{link_title}}" class="thumbnail_link"><img src="{{image_url}}" alt="{{alt_tag}}"></a>';this.include_caption&&(b+='<p class="name"><span class="date">{{link_prefix}}</span><a href="{{object_url}}">{{image_caption}}</a></p>');a={object_url:a.attr("href"),image_url:a.data("image-url"),link_title:a.data("title")||"",alt_tag:a.data("image-alt-tag")||"",link_prefix:a.data("link-prefix")||"",image_caption:a.html()};
return pe.templatize(b,a)};pe.ChangeImageOnHover.instantiate_all=function(a){return $.map($(".ChangeImageOnHoverContainer"),function(b){return new pe.ChangeImageOnHover($(b),a)})};pe.ChangeImageOnHover.prototype.object_link_hovered=function(a){a=$(a.target);this.object_links.removeClass("selected");this.link_wrappers.removeClass("selected");a.addClass("selected");this.link_wrapper(a).addClass("selected");this.image_container.html(this.image_html(a));pe.convert_to_rounded_corners()};
pe.ChangeImageOnHover.prototype.link_wrapper=function(a){return this.link_parent_class?a.closest("."+this.link_parent_class):a.parent()};
pe.Floater=function(a,b,c){pe.init_widget(this,a);this.bottom_margin=c||0;this.start_point_div=a.find(".FloatingAreaStart");this.end_point_div=b||null;this.stop_at=this.start_from=0;this.sticked=this.is_floating=!1;this.floater=this.container.find(".Floater");this.offset=0;this.disabled=!1;this.top=parseInt(this.floater.css("margin-top"),10)||0;$(window).scroll(this.callback(this.scrolling));this.set_floating_area();pe.Floater.register_floater(this)};
pe.Floater.events={TOP_REACHED:"Floater_TOP_REACHED",FLOATING:"Floater_FLOATING",BOTTOM_REACHED:"Floater_BOTTOM_REACHED"};pe.Floater.prototype.set_floating_area=function(){this.start_from=this.start_point_div.offset().top;this.end_point_div&&(this.stop_at=this.end_point_div.offset().top)};
pe.Floater.prototype.scrolling=function(){if(!this.disabled){this.set_floating_area();var a=$(window).scrollTop(),b=a+this.offset+this.bottom_margin<=this.start_from,c=a+this.offset+this.bottom_margin>this.start_from,d=this.floater.position().top+this.floater.outerHeight(!0)>this.stop_at;!this.is_floating&&c&&!d&&!this.sticked?(this.start_floating(),this.fire_event(pe.Floater.events.FLOATING,this),pe.fire_global_event(pe.Floater.events.FLOATING,this)):this.is_floating&&b?(this.stop_scrolling(),this.fire_event(pe.Floater.events.TOP_REACHED,
this)):this.end_point_div&&(!this.sticked&&d?(this.stick(),this.fire_event(pe.Floater.events.BOTTOM_REACHED,this)):this.sticked&&a+this.floater.outerHeight(!0)<=this.stop_at&&this.unstick())}};pe.Floater.prototype.start_floating=function(){this.floater.addClass("fixed");this.floater.removeClass("bottom");this.is_floating=!0;this.sticked=!1;this.set_offset()};
pe.Floater.prototype.stick=function(){this.floater.css("top",this.end_point_div.position().top-this.floater.outerHeight(!0)+"px");this.floater.removeClass("fixed");this.floater.css("position","absolute");this.is_floating=!1;this.sticked=!0};pe.Floater.prototype.disable=function(){this.floater.css("top",this.floater.position().top-140+"px");this.floater.removeClass("fixed");this.floater.css("position","absolute");this.is_floating=!1;this.disabled=this.sticked=!0};
pe.Floater.prototype.enable=function(){this.disabled=!1};pe.Floater.prototype.unstick=function(){this.floater.css("margin-top","");this.floater.css("top","");this.floater.css("position","");this.start_floating();this.fire_event(pe.Floater.events.FLOATING,this)};pe.Floater.prototype.stop_scrolling=function(){this.floater.css("margin-top","");this.floater.removeClass("fixed");this.floater.removeClass("bottom");this.sticked=this.is_floating=!1;this.set_offset()};
pe.Floater.prototype.set_offset=function(a){a&&(this.offset=a);0!==this.offset&&this.is_floating?this.floater.css("margin-top",this.top+this.offset+"px"):this.floater.css("margin-top","")};pe.Floater.registered_floaters=[];pe.Floater.register_floater=function(a){pe.Floater.registered_floaters.push(a);pe.Floater.update_positions()};
pe.Floater.update_positions=function(){pe.Floater.registered_floaters=_.sortBy(pe.Floater.registered_floaters,function(a){return a.container.offset().top},null);if(pe.Floater.registered_floaters[0]&&(pe.Floater.registered_floaters[0].offset=0,1<pe.Floater.registered_floaters.length))for(var a=1;a<pe.Floater.registered_floaters.length;a++){var b=pe.Floater.registered_floaters[a-1].offset+pe.Floater.registered_floaters[a-1].floater.outerHeight();pe.Floater.registered_floaters[a].offset=b;pe.Floater.registered_floaters[a].is_floating&&
pe.Floater.registered_floaters[a].start_floating();pe.Floater.registered_floaters[a].set_floating_area()}};
pe.ReadMore=function(a,b,c){0<a.length&&(pe.init_widget(this,a),this.read_more_control=this.container.find(".ReadMoreControl"),this.read_less_control=this.container.find(".ReadLessControl"),this.read_more_link=this.container.find(".ReadMoreLink"),this.read_more_link.click(this.callback(this.on_read_more_link_clicked)),this.read_less_link=this.container.find(".ReadLessLink"),this.read_less_link.click(this.callback(this.on_read_less_link_clicked)),this.long_description=this.container.find(".LongDescription"),
this.thumbs=this.container.find(".thumbnails"),this.photos=this.container.find(".photo"),this.read_more_handler=b,this.read_less_handler=c)};pe.ReadMore.events={LONG_DESC_OPENED:"ReadMore_LONG_DESC_OPENED"};
pe.ReadMore.prototype.on_read_more_link_clicked=function(){this.long_description.removeClass("clipped");this.read_less_control.show();this.read_more_control.hide();this.thumbs.addClass("hidden");this.photos.removeClass("hidden");pe.fire_global_event(pe.ReadMore.events.LONG_DESC_OPENED);"function"===typeof this.read_more_handler&&this.read_more_handler()};
pe.ReadMore.prototype.on_read_less_link_clicked=function(){this.read_less_control.hide();this.read_more_control.show();this.thumbs.removeClass("hidden");this.photos.addClass("hidden");this.long_description.addClass("clipped");"function"===typeof this.read_less_handler&&this.read_less_handler()};pe.ReadMore.instantiate=function(){return $.map($(".ReadMore"),function(a){return new pe.ReadMore($(a))})};
pe.PrefetcherModule=function(a){pe.init_widget(this,a);this.elements_with_prefetch_urls=this.container.find("[data-prefetch-url]");this.prefetch_data()};pe.PrefetcherModule.instantiate=function(){return new pe.PrefetcherModule($("body"))};pe.PrefetcherModule.prototype.is_image_url=function(a){return/\.(jpe?g|gif|png)(\?.*)?$/i.test(a)};pe.PrefetcherModule.prototype.prefetch_ajax_request=function(a){$.getScript(a)};
pe.PrefetcherModule.prototype.prefetch_data=function(){$.each(this.elements_with_prefetch_urls,this.callback(function(a,b){var b=$(b),c=b.data("prefetch-url");this.is_image_url(c)?this.prefetch_image(c):this.prefetch_ajax_request(c);b.removeAttr("data-prefetch-url")}))};pe.PrefetcherModule.prototype.prefetch_image=function(a){this.container.append(pe.templatize('<div style="display:none;"><img src="{{url}}"></div>',{url:a}))};pe.init_calendar_buttons=function(){new pe.AddToCalendarButton};
pe.AddToCalendarButton=function(){pe.init_widget(this,null);$(".AddToCalendarButton").live("click",this.callback(this.show_dialog))};pe.AddToCalendarButton.prototype.close_dialog=function(){};
pe.AddToCalendarButton.prototype.show_dialog=function(a){var b=$('<div title="Add to your calendar">'),c=function(){b.empty();b.dialog("destroy")};b.dialog({modal:!0,show:!1,close:c});b.html('<div style="margin:0 auto; width: 80px;"><img src="/assets/content_bg/spinner.gif"/></div>');a=$(a.currentTarget);pe.ajax_loader.add_to_calendar_dialog.load({event_id:a.data("event_id"),date:a.data("date")},function(a){b.html(a);b.find("a").click(c)});return!1};pe.dependency_manager=new pe.DependencyManager;
$(document).ready(function(){pe.ChangeImageOnHover.instantiate_all("LinkWrapper");pe.init_calendar_buttons();pe.convert_to_rounded_corners();pe.init_page_framework()});
