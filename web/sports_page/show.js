pe.routes={map:{search_autocomplete:"{{city_id}}/search/autocomplete.ehtml/",api_user_list:"/api/user_lists/{{id}}",api_reorder_user_list:"/api/user_lists/{{id}}/reorder",api_user_list_favorites:"/api/user_lists/{{id}}/favorites",api_favorite:"/api/favorites/{{id}}",holiday:"/{{city_id}}/holidays/{{id}}-7",holiday_comments:"/services/holidays/{{id}}/comments",holiday_reactions:"/holidays/{{id}}/reactions/all",new_holiday_reactions:"/holidays/{{id}}/reactions",holiday_calendar:"/{{city_id}}/holidays/{{id}}-7/calendar",
holiday_photos:"/api/{{city_id}}/holidays/{{id}}/photos",holiday_map_venues:"/api/maps/holidays/{{slug}}/venues",holiday_map_events:"/api/maps/holidays/{{slug}}/events",venue_map_popup:"/venues/{{venue_id}}/map_popup",map_venues:"/api/cities/{{city_id}}/maps/venues",map_events:"/api/cities/{{city_id}}/maps/events",map_neighborhood_venues:"/api/maps/neighborhoods/{{neighborhood_id}}/venues",map_neighborhood_events:"/api/maps/neighborhoods/{{neighborhood_id}}/events",map_neighborhood_endpoint_venues:"/api/maps/neighborhoods/{{neighborhood_id}}/endpoints/{{endpoint_id}}/venues",
map_neighborhood_endpoint_events:"/api/maps/neighborhoods/{{neighborhood_id}}/endpoints/{{endpoint_id}}/events",user_list_map_venues:"/api/maps/users/{{user_id}}/lists/{{id}}/venues",user_list_map_events:"/api/maps/users/{{user_id}}/lists/{{id}}/events",user_list:"/users/{{user_id}}/lists/{{id}}",user_lists:"/users/{{user_id}}/lists",user_comments:"/users/{{user_id}}/comments",user_reviews:"/users/{{user_id}}/reviews",list_comments:"/services/lists/{{id}}/comments",list_reactions:"/lists/{{id}}/reactions/all",
new_list_reactions:"/lists/{{id}}/reactions",user_personalities:"/users/{{id}}/personalities",user:"/users/{{id}}",api_user:"/api/users/{{id}}",event:"/{{city_id}}/{{*endpoints}}/{{id}}-1",event_type_tags:"/api/tags/event_types"}};pe.routes.build_path=function(a,b){var c=pe.routes.map[a],d=c.match(/\{\{\*(.+)\}\}/);_.each(d,function(a){b[a]&&(b[a]=b[a].join("/"))});c=c.replace(/\*/,"");return pe.routes.clean_url(pe.templatize(c,b))};
pe.routes.clean_url=function(a){return("/"+a).replace(/#[^$\/]+/,"").replace(/(^[^?]+)([^:])\/\//,"$1$2/").replace(/\/\//g,"/")};pe.routes.current_url_params=function(){var a=pe.routes.recognize_path(window.location.pathname);return a?a.params:{}};
pe.routes.recognize_path=function(a){a=pe.routes.clean_url(a);var b,c,d=_.find(_.keys(pe.routes.map),function(d){b=pe.routes.map[d];c=RegExp(b.replace(/\//g,"\\/").replace(/\{\{[^\{\}]+\}\}/g,"(.+)"));return c.test(a)});if(d){for(var e=_.map(b.match(/\{\{[^\}]+\}\}/g),function(a){return a.replace(/\{|\}/g,"")}),h=a.match(c).slice(1,99),g={params:{}},j=function(a){return!_.isEmpty(a)},f=0;f<e.length;f++)"*"==e[f][0]&&(e[f]=e[f].replace(/\*/g,""),h[f]=_.select(h[f].replace(/\*/g,"").split("/"),j)),
g.params[e[f]]=h[f];g.path_info={name:d,template:b};return g}return!1};pe.routes.Request=function(a,b,c){pe.routes.map[a]?(this.path=a,"object"!==typeof b&&(b={id:b}),this.params=b,this.callback=c):alert("This path is not registered in the routes map.")};pe.routes.Request.factory=function(a,b,c){return new pe.routes.Request(a,b,c)};pe.routes.Request.from_current_location=function(a,b,c){b=b||{};var d=pe.routes.current_url_params();return new pe.routes.Request(a,_.extend(d,b),c)};
pe.routes.Request.prototype.ajax=function(a,b){var c="function"===typeof b?b:this.callback;$.ajax({url:this.build_path(),data:this.params,type:a,success:c})};pe.routes.Request.prototype.build_path=function(){return pe.routes.build_path(this.path,this.params)};pe.routes.Request.prototype.get=function(a){this.ajax("GET",a)};pe.routes.Request.prototype.post=function(a){this.ajax("POST",a)};pe.init_calendar_buttons=function(){new pe.AddToCalendarButton};
pe.AddToCalendarButton=function(){pe.init_widget(this,null);$(".AddToCalendarButton").live("click",this.callback(this.show_dialog))};pe.AddToCalendarButton.prototype.close_dialog=function(){};
pe.AddToCalendarButton.prototype.show_dialog=function(a){var b=$('<div title="Add to your calendar">'),c=function(){b.empty();b.dialog("destroy")};b.dialog({modal:!0,show:!1,close:c});b.html('<div style="margin:0 auto; width: 80px;"><img src="/assets/content_bg/spinner.gif"/></div>');a=$(a.currentTarget);_.isEmpty(a.data("event_id"))?(a=a.data("source_path"),_.isEmpty(a)?alert("NOR event_id, source_path is set for calendar button"):(a=pe.routes.recognize_path(a))?pe.routes.Request.factory(a.path_info.name+
"_calendar",a.params,function(a){b.html(a);b.find("a").click(c)}).get():alert("Calendar route is not recognized")):pe.ajax_loader.add_to_calendar_dialog.load({event_id:a.data("event_id"),date:a.data("date")},function(a){b.html(a);b.find("a").click(c)});return!1};
pe.Scroller=function(a,b,c,d,e,h,g,j){pe.init_widget(this,a);this.scroller_container=this.container.find(".ScreensContainer");this.current_item=0;this.scroll_duration=b;this.inactive_button_class=c;this.visible_items_count=d||1;this.scroll_by=e||1;this.single_item_width=h;this.individual_items=this.scroller_container.find(".IndividualItem");this.items_count=this.individual_items.length;this.next_button=this.container.find(".NextButton");this.next_button.click(this.callback(this.next_button_clicked));
this.previous_button=this.container.find(".PreviousButton");this.previous_button.click(this.callback(this.previous_button_clicked));this.page_display_container=this.container.find(".PageDisplay");this.page_display_format=g||"";this.loop_scrolling=j||!1;this.update_display()};
pe.Scroller.prototype.animate_scrolling=function(a){a!=this.current_item&&(this.current_item=a,a=this.current_item*(this.single_item_width||this.individual_items.width()),this.scroller_container.animate({left:"-"+a+"px"},this.scroll_duration,"cubicEaseInOut"),this.update_display())};
pe.Scroller.prototype.update_display=function(){0>=this.current_item?this.previous_button.addClass(this.inactive_button_class):this.previous_button.removeClass(this.inactive_button_class);this.current_item>=this.items_count-this.visible_items_count?this.next_button.addClass(this.inactive_button_class):this.next_button.removeClass(this.inactive_button_class);this.page_display_container.html(pe.templatize(this.page_display_format,{current_item_number:this.current_item+1,items_count:this.items_count}))};
pe.Scroller.prototype.next_button_clicked=function(){var a=this.current_item+this.scroll_by;a>this.items_count-this.visible_items_count&&(a=this.loop_scrolling?0:this.items_count-this.visible_items_count);this.animate_scrolling(a)};pe.Scroller.prototype.previous_button_clicked=function(){var a=this.current_item-this.scroll_by;0>a&&(a=this.loop_scrolling?this.items_count-this.visible_items_count:0);this.animate_scrolling(a)};
pe.ChangeImageOnHover=function(a,b){pe.init_widget(this,a);this.image_container=this.container.find(".ImageContainer");this.link_parent_class=b||null;this.include_caption=this.container.data("include-caption")||!1;this.object_links=this.container.find(".HoverLinkToChange");this.object_links.mouseover(this.callback(this.object_link_hovered));var c=b?this.container.find("."+b):[];this.link_wrappers=0<c.length?c:this.object_links.parent()};
pe.ChangeImageOnHover.prototype.image_html=function(a){var b='<a href="{{object_url}}" title="{{link_title}}" class="thumbnail_link"><img src="{{image_url}}" alt="{{alt_tag}}"></a>';this.include_caption&&(b+='<p class="name"><span class="date">{{link_prefix}}</span><a href="{{object_url}}">{{image_caption}}</a></p>');a={object_url:a.attr("href"),image_url:a.data("image-url"),link_title:a.data("title")||"",alt_tag:a.data("image-alt-tag")||"",link_prefix:a.data("link-prefix")||"",image_caption:a.html()};
return pe.templatize(b,a)};pe.ChangeImageOnHover.instantiate_all=function(a){return $.map($(".ChangeImageOnHoverContainer"),function(b){return new pe.ChangeImageOnHover($(b),a)})};pe.ChangeImageOnHover.prototype.object_link_hovered=function(a){a=$(a.target);this.object_links.removeClass("selected");this.link_wrappers.removeClass("selected");a.addClass("selected");this.link_wrapper(a).addClass("selected");this.image_container.html(this.image_html(a));pe.convert_to_rounded_corners()};
pe.ChangeImageOnHover.prototype.link_wrapper=function(a){return this.link_parent_class?a.closest("."+this.link_parent_class):a.parent()};pe.PrefetcherModule=function(a){pe.init_widget(this,a);this.elements_with_prefetch_urls=this.container.find("[data-prefetch-url]");this.prefetch_data()};pe.PrefetcherModule.instantiate=function(){return new pe.PrefetcherModule($("body"))};pe.PrefetcherModule.prototype.is_image_url=function(a){return/\.(jpe?g|gif|png)(\?.*)?$/i.test(a)};
pe.PrefetcherModule.prototype.prefetch_ajax_request=function(a){$.getScript(a)};pe.PrefetcherModule.prototype.prefetch_data=function(){$.each(this.elements_with_prefetch_urls,this.callback(function(a,b){b=$(b);var c=b.data("prefetch-url");this.is_image_url(c)?this.prefetch_image(c):this.prefetch_ajax_request(c);b.removeAttr("data-prefetch-url")}))};pe.PrefetcherModule.prototype.prefetch_image=function(a){this.container.append(pe.templatize('<div style="display:none;"><img src="{{url}}"></div>',{url:a}))};
pe.ReadMore=function(a,b,c){0<a.length&&(pe.init_widget(this,a),this.read_more_control=this.container.find(".ReadMoreControl"),this.read_less_control=this.container.find(".ReadLessControl"),this.read_more_link=this.container.find(".ReadMoreLink"),this.read_more_link.click(this.callback(this.on_read_more_link_clicked)),this.read_less_link=this.container.find(".ReadLessLink"),this.read_less_link.click(this.callback(this.on_read_less_link_clicked)),this.long_description=this.container.find(".LongDescription"),
this.thumbs=this.container.find(".thumbnails"),this.photos=this.container.find(".photo"),this.read_more_handler=b,this.read_less_handler=c)};pe.ReadMore.events={LONG_DESC_OPENED:"ReadMore_LONG_DESC_OPENED"};pe.ReadMore.instantiate_all=function(){var a=$(".ReadMore");0<a.length&&new pe.ReadMore(a)};
pe.ReadMore.prototype.on_read_more_link_clicked=function(){this.long_description.removeClass("clipped");this.read_less_control.show();this.read_more_control.hide();this.thumbs.addClass("hidden");this.photos.removeClass("hidden");pe.fire_global_event(pe.ReadMore.events.LONG_DESC_OPENED);"function"===typeof this.read_more_handler&&this.read_more_handler()};
pe.ReadMore.prototype.on_read_less_link_clicked=function(){this.read_less_control.hide();this.read_more_control.show();this.thumbs.removeClass("hidden");this.photos.addClass("hidden");this.long_description.addClass("clipped");"function"===typeof this.read_less_handler&&this.read_less_handler()};pe.ReadMore.instantiate=function(){return $.map($(".ReadMore"),function(a){return new pe.ReadMore($(a))})};
pe.ServersidePaginator=function(a,b){pe.init_widget(this,a);this.current_page_number=0;this.loader=new pe.ajax_loader.MultiLoader(b,pe.ajax_loader.Loader.data_types.EHTML);this.objects_list=pe.load(this.container.find(".ObjectsList"));this.previous_button=pe.load(this.container.find(".PrevButton"));this.previous_button.click(this.callback(this.previous_button_clicked));this.next_button=pe.load(this.container.find(".NextButton"));this.next_button.click(this.callback(this.next_button_clicked));this.current_page_number_display=
pe.load(this.container.find(".CurrentPageNumber"));this.max_page_number_display=pe.load(this.container.find(".MaxPageNumber"));this.max_page_number=parseInt(this.max_page_number_display.text(),10);this.update_buttons();pe.convert_to_rounded_corners(this.objects_list.find(".ConvertToRoundedCorners"))};pe.ServersidePaginator.events={PAGE_CHANGED:"ServersidePaginator_PAGE_CHANGED"};
pe.ServersidePaginator.prototype.destroy=function(){this.previous_button.unbind("click");this.next_button.unbind("click");this.current_page_number_display=this.next_button=this.previous_button=this.objects_list=this.loader=null};
pe.ServersidePaginator.prototype.show_page=function(a){this.current_page_number=a;this.current_page_number_display.html((a+1).toString());this.update_buttons();this.loader.load(a.toString(),this.callback(function(a){this.objects_list.html(a);this.fire_event(pe.ServersidePaginator.events.PAGE_CHANGED);pe.convert_to_rounded_corners(this.objects_list.find(".ConvertToRoundedCorners"));""===a&&this.current_page_number_display.html("0")}))};
pe.ServersidePaginator.prototype.next_button_clicked=function(a){this.current_page_number>=this.max_page_number-1?a.stopPropagation():this.show_page(this.current_page_number+1)};pe.ServersidePaginator.prototype.previous_button_clicked=function(a){0===this.current_page_number?a.stopPropagation():this.show_page(this.current_page_number-1)};
pe.ServersidePaginator.prototype.update_buttons=function(){0===this.current_page_number?(this.previous_button.addClass("disabled"),2>this.max_page_number?this.next_button.addClass("disabled"):this.next_button.removeClass("disabled")):this.current_page_number>=this.max_page_number-1?(this.previous_button.removeClass("disabled"),this.next_button.addClass("disabled")):(this.previous_button.removeClass("disabled"),this.next_button.removeClass("disabled"))};
pe.TweetSection=function(a,b,c,d){pe.init_widget(this,a);this.tweets_display=a.find(".Tweets");this.live_update_url=b+".ehtml";d&&this.update_tweets();this.tweet_update_delay=10;this.paginator=c?new pe.ServersidePaginator(a,c+"?page={{id}}"):null};pe.TweetSection.prototype.update_tweets=function(){$.ajax({url:this.live_update_url,type:"GET",dataType:"text",success:this.callback(this.update_tweets_success)})};
pe.TweetSection.prototype.update_tweets_success=function(a){"later"===a?(setTimeout(this.callback(function(){this.update_tweets()}),1E3*this.tweet_update_delay),this.tweet_update_delay*=2):this.tweets_display.html(a)};pe.HelpModule2=function(){var a=$(".HelperModule");a.length&&(pe.init_widget(this,a),this.container.live("click",this.callback(this.helper_module_div_clicked)),this.container.live("hover",this.callback(this.helper_module_div_hovered)),this.active_popup=null)};
pe.HelpModule2.prototype.close_button_clicked=function(){this.destroy_active_popup()};pe.HelpModule2.prototype.create_popup=function(a,b){this.active_popup=$(b);a.append(this.active_popup);$("body").bind("click",this.callback(this.close_button_clicked))};pe.HelpModule2.prototype.destroy_active_popup=function(){$("body").unbind("click");this.active_popup.remove();this.active_popup=null};
pe.HelpModule2.prototype.helper_module_div_hovered=function(a){a=$(a.target);(a=(a.hasClass("HelperModule")?a:a.closest(".HelperModule")).data("page-id"))&&pe.ajax_loader.help_page.load({page_id:a},this.callback(function(){}))};
pe.HelpModule2.prototype.helper_module_div_clicked=function(a){var b=$(a.target),c;c=b.hasClass("HelperModule")?b:b.closest(".HelperModule");this.active_popup&&this.destroy_active_popup();(b=c.data("page-id"))&&pe.ajax_loader.help_page.load({page_id:b},this.callback(function(a){this.create_popup(c,this.popup_html(a))}));a.stopPropagation()};
pe.HelpModule2.prototype.popup_html=function(a){return pe.templatize('<div class="DialogBox dialog_box"><div class="dialog_content_wrapper clearfix"><div class="CloseButton close_btn" title="Close"></div><div class="dialog_img"></div><div class="dialog_content"> <span class="title">{{title}}:&nbsp;&nbsp;</span> {{content}}</div></div></div><div class="dialog_point"><div class="dialog_inner_point"></div></div>',a)};
pe.CustomVideoPlayer=function(a,b,c,d,e,h){pe.init_widget(this,a);this.event_lock_duration=300;this.slider_area_padding_offset_ie8_fullscreen=this.slider_area_padding_offset=46;var g=a.width();pe.browser_is_ie8()&&h&&(g-=17);e={wmode:"transparent",controls:0,start:e?e:0};d&&(e.autoplay=1);this.player=new YT.Player(b,{width:g,height:a.height()-(h?42:150),videoId:c,playerVars:e,events:{onStateChange:this.callback(this.player_state_changed),onError:this.callback(this.on_error)}});this.player_div_id=
b;this.current_youtube_id=c;this.play_button=a.find(".PlayButton");this.play_button.unbind("click");this.play_button.click(this.callback(this.play_button_clicked));this.play_button.mousedown(this.callback(this.play_button_mouse_down));this.play_button.mouseup(this.callback(this.play_button_mouse_up));this.play_button.mouseleave(this.callback(this.play_button_mouse_leave));this.elapsed_time_display=a.find(".ElapsedTime");this.total_time_div=a.find(".TotalTime");this.progress_bar_div=a.find(".ProgressBar");
this.progress_bar_div.unbind("mousemove");this.progress_bar_div.mousemove(this.callback(this.progress_bar_mouse_move));this.progress_bar_div.unbind("mouseenter");this.progress_bar_div.mouseenter(this.callback(this.progress_bar_mouse_enter));this.progress_bar_div.unbind("mouseleave");this.progress_bar_div.mouseleave(this.callback(this.progress_bar_mouse_leave));this.buffered_bar=a.find(".BufferedBar");this.buffered_bar.width(0);this.played_bar=a.find(".PlayedBar");this.played_bar.width(0);this.mute_button=
a.find(".Mute");this.mute_button.unbind("click");this.mute_button.click(this.callback(this.mute_button_clicked));this.volume_lights={};var j=this.callback(this.volume_light_clicked),f=this.callback(this.volume_light_mouse_entered);a.find(".Volume .Display .Light").each(this.callback(function(a,b){var c=$(b);c.unbind("click");c.click(j);c.unbind("mouseenter");c.mouseenter(f);var d=parseInt(c.attr("data-volume"),10);this.volume_lights[d]=c}));this.volume_div=a.find(".Controls .Volume");this.volume_div.unbind("mousedown");
this.volume_div.mousedown(this.callback(this.on_mouse_down));this.volume_div.unbind("mouseup");this.volume_div.mouseup(this.callback(this.on_mouse_up));this.mouse_is_pressed=!1;this.fullscreen_button=a.find(".Fullscreen");this.fullscreen_button.unbind("click");this.fullscreen_button.click(this.callback(this.fullscreen_button_clicked));this.fullscreen_button.mousedown(this.callback(this.fullscreen_button_mousedown));this.fullscreen_button.mouseup(this.callback(this.fullscreen_button_mouseup));this.fullscreen_button.mouseleave(this.callback(this.fullscreen_button_mouseleave));
this.is_playing=!1;this.timer_id=null;this.total_bytes=this.total_seconds=0;this.update_frequency=500;this.slider=a.find(".ProgressBar .Slider").slider({slide:this.callback(this.on_sliding),start:this.callback(this.on_sliding_start),stop:this.callback(this.on_sliding_stop)});this.progress_sliding=!1;this.progressbar_popup_offset_x=-18;this.progressbar_popup_offset_y=-20;$(".ProgressBarPopup").remove();this.progressbar_hover_div=$('<div class="ProgressBarPopup"></div>');this.progressbar_hover_div.appendTo("body");
this.progressbar_hover_div.hide();this.offset=pe.browser_is_ie8()&&h?this.slider_area_padding_offset_ie8_fullscreen:this.slider_area_padding_offset;this.total_bar_width=g-this.play_button.width()-$(".TimeDisplay").width()-this.volume_div.width()-this.fullscreen_button.width()-this.offset;this.progress_bar_div.width(this.total_bar_width);a=this.progress_bar_div.offset().left;this.total_bar_offset_x="number"===typeof a?a:0;this.player_volume=100};
pe.CustomVideoPlayer.events={ENDED:"CustomVideoPlayer_ENDED",FULLSCREEN:"CustomVideoPlayer_FULLSCREEN"};pe.CustomVideoPlayer.prototype.current_video_id=function(){return this.current_youtube_id};pe.CustomVideoPlayer.prototype.current_video_playtime=function(){return this.player.getCurrentTime()};pe.CustomVideoPlayer.prototype.destroy=function(){clearInterval(this.timer_id);this.container.find("#"+this.player_div_id).empty();this.container.unbind()};
pe.CustomVideoPlayer.prototype.fullscreen_button_clicked=function(){this.fire_event(pe.CustomVideoPlayer.events.FULLSCREEN)};pe.CustomVideoPlayer.prototype.fullscreen_button_mousedown=function(){this.fullscreen_button.addClass("pressed")};pe.CustomVideoPlayer.prototype.fullscreen_button_mouseleave=function(){this.fullscreen_button.removeClass("pressed")};pe.CustomVideoPlayer.prototype.fullscreen_button_mouseup=function(){this.fullscreen_button.removeClass("pressed")};
pe.CustomVideoPlayer.prototype.load_and_play_video=function(a){this.player.loadVideoById(a);this.play_button.addClass("playing").removeClass("paused");this.current_youtube_id=a};
pe.CustomVideoPlayer.prototype.mute_button_clicked=function(){this.player&&(this.player.isMuted()?(this.player.unMute(),this.mute_button.removeClass("on").addClass("off"),this.player.getVolume(),this.set_volume(this.player_volume)):(this.player.mute(),this.mute_button.removeClass("off").addClass("on"),$.each(this.volume_lights,function(a,b){$(b).removeClass("on").addClass("off")})))};pe.CustomVideoPlayer.prototype.on_error=function(){alert("Youtube error, please try again later.")};
pe.CustomVideoPlayer.prototype.on_mouse_down=function(){this.mouse_is_pressed=!0};pe.CustomVideoPlayer.prototype.on_mouse_up=function(){this.mouse_is_pressed=!1};pe.CustomVideoPlayer.prototype.play_button_mouse_leave=function(){this.play_button.removeClass("pressed")};pe.CustomVideoPlayer.prototype.play_button_mouse_down=function(){this.play_button.addClass("pressed")};pe.CustomVideoPlayer.prototype.play_button_mouse_up=function(){this.play_button.removeClass("pressed")};
pe.CustomVideoPlayer.prototype.on_sliding=function(a,b){this.player.seekTo(b.value,!1)};pe.CustomVideoPlayer.prototype.on_sliding_start=function(){this.progress_sliding=!0};pe.CustomVideoPlayer.prototype.on_sliding_stop=function(a,b){this.player.seekTo(b.value,!0);this.progress_sliding=!1};pe.CustomVideoPlayer.prototype.play_button_clicked=function(){this.is_playing?this.player.pauseVideo():this.player.playVideo()};
pe.CustomVideoPlayer.prototype.player_state_changed=function(a){switch(a.data){case YT.PlayerState.ENDED:if(this.ended_event_lock)break;this.ended_event_lock=1;setTimeout(this.callback(function(){this.ended_event_lock=0}),this.event_lock_duration);this.fire_event(pe.CustomVideoPlayer.events.ENDED);break;case YT.PlayerState.PLAYING:this.is_playing=!0;this.play_button.removeClass("paused");this.play_button.addClass("playing");this.video_bytes_total=this.total_seconds=0;this.timer_id||(this.timer_id=
setInterval(this.callback(this.update_player_ui),this.update_frequency));break;case YT.PlayerState.PAUSED:this.play_button.removeClass("playing"),this.play_button.addClass("paused"),this.is_playing=!1}};pe.CustomVideoPlayer.prototype.progress_bar_mouse_leave=function(){this.progressbar_hover_div.hide()};pe.CustomVideoPlayer.prototype.progress_bar_mouse_enter=function(){this.progressbar_hover_div.css("top",this.progress_bar_div.offset().top+this.progressbar_popup_offset_y);this.progressbar_hover_div.show()};
pe.CustomVideoPlayer.prototype.progress_bar_mouse_move=function(a){this.progressbar_hover_div.html(pe.format_duration((a.pageX-this.total_bar_offset_x)/this.total_bar_width*this.total_seconds));this.progressbar_hover_div.css("left",a.pageX+this.progressbar_popup_offset_x)};
pe.CustomVideoPlayer.prototype.set_volume=function(a){this.mute_button.removeClass("on").addClass("off");this.player.setVolume(a);this.player_volume=a;$.each(this.volume_lights,function(b,c){var d=$(c);b>a?d.addClass("off").removeClass("on"):d.addClass("on").removeClass("off")})};
pe.CustomVideoPlayer.prototype.update_player_ui=function(){if(this.timer_id){if(!this.total_seconds&&(this.total_seconds=this.player.getDuration()))this.total_time_div.html(pe.format_duration(this.total_seconds)),this.slider.slider("option","max",this.total_seconds);var a=this.player.getCurrentTime();this.elapsed_time_display.html(pe.format_duration(a,600<this.total_seconds?2:1));this.total_bar_width=this.container.width()-this.play_button.width()-$(".TimeDisplay").width()-this.volume_div.width()-
this.fullscreen_button.width()-this.offset;this.progress_bar_div.width(this.total_bar_width);this.total_bytes||(this.total_bytes=this.player.getVideoBytesTotal());if(this.total_bytes){var a=this.player.getVideoBytesLoaded(),b=this.player.getVideoStartBytes();this.buffered_bar.width((a+b)/this.total_bytes*this.total_bar_width)}this.total_seconds&&(a=this.player.getCurrentTime(),this.played_bar.width(a/this.total_seconds*this.total_bar_width),this.progress_sliding||this.slider.slider("value",a))}};
pe.CustomVideoPlayer.prototype.volume_light_clicked=function(a){a=$(a.target).closest(".Light");this.set_volume(parseInt(a.attr("data-volume"),10))};pe.CustomVideoPlayer.prototype.volume_light_mouse_entered=function(a){this.mouse_is_pressed&&(a=$(a.target).closest(".Light"),this.set_volume(parseInt(a.attr("data-volume"),10)))};
pe.YoutubePlayer=function(a,b){pe.init_widget(this,a);this.player=new YT.Player("youtube_player",{width:"333",height:"250",videoId:b,playerVars:{wmode:"transparent"},events:{onStateChange:this.callback(this.on_player_state_changed),onError:this.callback(this.on_error)}});this.ended_event_lock=0;this.event_lock_duration=300};pe.YoutubePlayer.events={ENDED:"YoutubePlayer_ENDED"};
pe.YoutubePlayer.prototype.on_player_state_changed=function(a){a.data===YT.PlayerState.ENDED&&!this.ended_event_lock&&(this.ended_event_lock=1,setTimeout(this.callback(function(){this.ended_event_lock=0}),this.event_lock_duration),this.fire_event(pe.YoutubePlayer.events.ENDED))};pe.YoutubePlayer.prototype.on_error=function(){alert("Youtube error, please try again later.")};pe.YoutubePlayer.prototype.load_and_play_video=function(a){this.player.loadVideoById(a)};
pe.VideoSection=function(a,b){pe.init_widget(this,a);this.video_player_div=a.find(".VideoPlayer");this.video_title_div=a.find(".VideoTitle");$(".Video .PlayButton").click(this.callback(this.video_thumbnail_clicked));this.scroller=new pe.Scroller(this.container.find(".MoreVideos"),1100,"hidden",1,1,b);this.embedded_player=null};
pe.VideoSection.prototype.create_player=function(a,b,c,d){a=this.container.find(".VideoPlayer");this.embedded_player=new pe.CustomVideoPlayer(a,"youtube_embedded_player",b,c,d,!1);this.embedded_player.bind_event(pe.CustomVideoPlayer.events.ENDED,this.callback(this.video_ended));this.embedded_player.bind_event(pe.CustomVideoPlayer.events.FULLSCREEN,this.callback(this.embedded_player_fullscreen_clicked))};
pe.VideoSection.prototype.embedded_player_fullscreen_clicked=function(){var a=this.embedded_player.current_video_id(),b=this.embedded_player.current_video_playtime(),c=$("#site_container").addClass("hidden");this.embedded_player.player.pauseVideo();if(this.fullscreen_player)this.fullscreen_player.container.show(),this.fullscreen_player.player.seekTo(b),this.fullscreen_player.player.playVideo(),this.fullscreen_player.update_player_ui();else{var d;d='<div class="CustomFullscreenPlayer VideoPlayer full_screen_player"><div id="youtube_fullscreen_player"></div><div class="watermark"></div><div class="Controls controls"></div></div>';
d=$(d);d.find(".Controls").html(this.embedded_player.container.find(".Controls").html());c.after(d);this.fullscreen_player=new pe.CustomVideoPlayer(d,"youtube_fullscreen_player",a,!0,b,!0);this.fullscreen_player.bind_event(pe.CustomVideoPlayer.events.FULLSCREEN,this.callback(this.fullscreen_player_fullscreen_button_clicked));this.fullscreen_player.bind_event(pe.CustomVideoPlayer.events.ENDED,this.callback(this.fullscreen_video_ended))}};
pe.VideoSection.prototype.fullscreen_player_fullscreen_button_clicked=function(){this.fullscreen_player.current_video_id();var a=this.fullscreen_player.current_video_playtime();this.fullscreen_player.player.pauseVideo();this.fullscreen_player.container.hide();$("#site_container").removeClass("hidden");this.embedded_player.player.seekTo(a);this.embedded_player.player.playVideo();pe.animated_scrolling($(".VideoSectionLinkTarget"),null)};
pe.VideoSection.prototype.fullscreen_video_ended=function(){var a=this.container.find(".Video.playing"),b=a.next(".Video");1>b.length&&(b=parseInt(a.attr("data_number"),10)+1,b=this.container.find(".Video[data_number="+b+"]"),this.scroller.next_button_clicked());1>b.length&&(b=this.container.find(".Video:first"),this.scroller.animate_scrolling(0));a=b.attr("data_youtube_id");"string"===typeof a&&(this.container.find(".playing").removeClass("playing"),b.addClass("playing"),this.fullscreen_player.load_and_play_video(a),
this.embedded_player.player.loadVideoById(a),b=b.find(".Title").html(),this.video_title_div.html(b))};pe.VideoSection.prototype.play_next_video=function(){var a=this.container.find(".playing"),b=a.next(".Video");1>b.length&&(b=parseInt(a.attr("data_number"),10)+1,b=this.container.find(".Video[data_number="+b+"]"),this.scroller.next_button_clicked());1>b.length&&(b=this.container.find(".Video:first"),this.scroller.animate_scrolling(0));a=new jQuery.Event;a.target=b;this.video_thumbnail_clicked(a)};
pe.VideoSection.prototype.video_ended=function(){this.play_next_video()};pe.VideoSection.prototype.video_thumbnail_clicked=function(a){a=$(a.target).closest(".Video");var b=a.attr("data_youtube_id");"string"===typeof b&&(this.container.find(".playing").removeClass("playing"),a.addClass("playing"),this.embedded_player.load_and_play_video(b),this.fullscreen_player&&this.fullscreen_player.player.loadVideoById(b),a=a.find(".Title").html(),this.video_title_div.html(a))};
pe.init_multiline_titles=function(a){var b=a||"two_line_title",c,d;_.each($(".FlexibleHeight"),function(a){d=$(a).find(".FlexibleHeightItem");for(c=0;c<d.length;c++)if(a=$(d[c]),parseInt(a.css("line-height"),10)<a.height()){a.parents(".FlexibleHeight").addClass(b);break}})};pe.dependency_manager=new pe.DependencyManager;
$(document).ready(function(){pe.ChangeImageOnHover.instantiate_all();pe.install_easing();pe.convert_to_rounded_corners();new pe.ReadMore($(".ReadMore"));var a=$(".TeamsScroller");6<a.find(".IndividualItem").length&&new pe.Scroller(a,1100,"disabled",4,4);new pe.HelpModule2;a=$(".VideoSection");0<a.length&&(pe.video_section=new pe.VideoSection(a,360),pe.dependency_manager.set_flag("video_section"),pe.dependency_manager.call_when(["youtube_api","video_section"],function(){pe.video_section.create_player("youtube_player",
window.video_id)}));pe.init_calendar_buttons();new pe.ReadMore.instantiate;setTimeout(function(){pe.init_multiline_titles()},5);pe.init_page_framework(function(){pe.PrefetcherModule.instantiate()})});window.onYouTubePlayerAPIReady=function(){pe.dependency_manager.set_flag("youtube_api")};
