pe.HelpModule2=function(){var a=$(".HelperModule");a.length&&(pe.init_widget(this,a),this.container.live("click",this.callback(this.helper_module_div_clicked)),this.container.live("hover",this.callback(this.helper_module_div_hovered)),this.active_popup=null)};pe.HelpModule2.prototype.close_button_clicked=function(){this.destroy_active_popup()};pe.HelpModule2.prototype.create_popup=function(a,b){this.active_popup=$(b);a.append(this.active_popup);$("body").bind("click",this.callback(this.close_button_clicked))};
pe.HelpModule2.prototype.destroy_active_popup=function(){$("body").unbind("click");this.active_popup.remove();this.active_popup=null};pe.HelpModule2.prototype.helper_module_div_hovered=function(a){a=$(a.target);(a=(a.hasClass("HelperModule")?a:a.closest(".HelperModule")).data("page-id"))&&pe.ajax_loader.help_page.load({page_id:a},this.callback(function(){}))};
pe.HelpModule2.prototype.helper_module_div_clicked=function(a){var b=$(a.target),c;c=b.hasClass("HelperModule")?b:b.closest(".HelperModule");this.active_popup&&this.destroy_active_popup();(b=c.data("page-id"))&&pe.ajax_loader.help_page.load({page_id:b},this.callback(function(a){this.create_popup(c,this.popup_html(a))}));a.stopPropagation()};
pe.HelpModule2.prototype.popup_html=function(a){return pe.templatize('<div class="DialogBox dialog_box"><div class="dialog_content_wrapper clearfix"><div class="CloseButton close_btn" title="Close"></div><div class="dialog_img"></div><div class="dialog_content"> <span class="title">{{title}}:&nbsp;&nbsp;</span> {{content}}</div></div></div><div class="dialog_point"><div class="dialog_inner_point"></div></div>',a)};
pe.PageSlideScroller=function(a,b){pe.init_widget(this,a);var c=$.extend({scroll_duration:1100,inactive_button_class:"loop_back",loop_scrolling:!1},b);this.scroller_container=this.container.find(".ScreensContainer");this.current_item=0;this.scroll_duration=c.scroll_duration;this.inactive_button_class=c.inactive_button_class;this.individual_items=this.scroller_container.find(".IndividualItem");this.single_item_width=c.single_item_width||this.individual_items.width()+37;this.items_count=this.individual_items.length;
this.next_button=this.container.find(".NextButton");this.previous_button=this.container.find(".PreviousButton");this.page_display_container=this.container.find(".PageDisplay");this.dots_container=$(this.page_display_container.selector+" .Dot");this.dots_container.live("click",this.callback(this.dot_clicked));this.page_display_format=c.page_display_format||pe.PageSlideScroller.dots_template(this.items_count);this.loop_scrolling=c.loop_scrolling;if(this.enable_buttons=1<this.items_count){this.next_button.click(this.callback(this.next_button_clicked));
this.previous_button.click(this.callback(this.previous_button_clicked));var c=this.individual_items.first(),d=this.individual_items.last();this.loop_scrolling&&(d.clone().insertBefore(c),c.clone().insertAfter(d));this.update_display();this.update_page_display()}else this.next_button.addClass("disabled"),this.previous_button.addClass("disabled")};
pe.PageSlideScroller.dots_template=function(a){a=Math.min(a,4);for(var b=["one","two","three","four"],c="<ul class='page_count slide{{current_item_number}}'>",d=0;d<=a-1;d++)c+="<li class='Dot dot "+b[d]+"' data-page_number='"+d+"'></li>";return c+"</ul>"};
pe.PageSlideScroller.prototype.animate_scrolling=function(a){this.enable_buttons=!1;this.current_item=a;this.update_page_display();this.scroller_container.animate({left:"-"+this.compute_scroll_offset(this.current_item)+"px"},this.scroll_duration,"cubicEaseInOut",this.callback(this.update_display))};
pe.PageSlideScroller.prototype.update_display=function(){this.current_item=this.constraint_page(this.current_item);this.previous_button.toggleClass(this.inactive_button_class,0>=this.current_item);this.next_button.toggleClass(this.inactive_button_class,this.current_item>=this.items_count-1);this.scroller_container.css("left","-"+this.compute_scroll_offset(this.current_item)+"px");this.enable_buttons=!0};
pe.PageSlideScroller.prototype.update_page_display=function(){var a=pe.templatize(this.page_display_format,{current_item_number:this.constraint_page(this.current_item)+1,items_count:this.items_count});this.page_display_container.html(a)};pe.PageSlideScroller.prototype.compute_scroll_offset=function(a){return(a+(this.loop_scrolling?1:0))*this.single_item_width};
pe.PageSlideScroller.prototype.constraint_page=function(a){return this.loop_scrolling?a>=this.items_count?0:0>a?this.items_count-1:a:Math.max(Math.min(a,this.items_count-1),0)};pe.PageSlideScroller.prototype.next_button_clicked=function(){if(this.enable_buttons){var a=this.current_item+1;a>=this.items_count&&(a=0);this.loop_scrolling||(a=Math.min(a,this.items_count-1));a!=this.current_item&&this.animate_scrolling(a)}};
pe.PageSlideScroller.prototype.previous_button_clicked=function(){if(this.enable_buttons){var a=this.current_item-1;0>a&&(a=this.items_count-1);this.loop_scrolling||(a=Math.max(a,0));a!=this.current_item&&this.animate_scrolling(a)}};pe.PageSlideScroller.prototype.dot_clicked=function(a){this.animate_scrolling($(a.currentTarget).data("page_number")-0)};pe.PrefetcherModule=function(a){pe.init_widget(this,a);this.elements_with_prefetch_urls=this.container.find("[data-prefetch-url]");this.prefetch_data()};
pe.PrefetcherModule.instantiate=function(){return new pe.PrefetcherModule($("body"))};pe.PrefetcherModule.prototype.is_image_url=function(a){return/\.(jpe?g|gif|png)(\?.*)?$/i.test(a)};pe.PrefetcherModule.prototype.prefetch_ajax_request=function(a){$.getScript(a)};pe.PrefetcherModule.prototype.prefetch_data=function(){$.each(this.elements_with_prefetch_urls,this.callback(function(a,b){b=$(b);var c=b.data("prefetch-url");this.is_image_url(c)?this.prefetch_image(c):this.prefetch_ajax_request(c);b.removeAttr("data-prefetch-url")}))};
pe.PrefetcherModule.prototype.prefetch_image=function(a){this.container.append(pe.templatize('<div style="display:none;"><img src="{{url}}"></div>',{url:a}))};
pe.ReadMore=function(a,b,c){0<a.length&&(pe.init_widget(this,a),this.read_more_control_selector=".ReadMoreControl",this.read_more_control=this.container.find(this.read_more_control_selector),this.read_less_control_selector=".ReadLessControl",this.read_less_control=this.container.find(this.read_less_control_selector),this.read_more_link=this.container.find(".ReadMoreLink"),this.read_more_link.click(this.callback(this.on_read_more_link_clicked)),this.read_less_link=this.container.find(".ReadLessLink"),
this.read_less_link.click(this.callback(this.on_read_less_link_clicked)),this.long_description_selector=".LongDescription",this.long_description=this.container.find(this.long_description_selector),this.thumbs_selector=".thumbnails",this.thumbs=this.container.find(this.thumbs_selector),this.photos_selector=".photo",this.photos=this.container.find(this.photos_selector),this.read_more_handler=b,this.read_less_handler=c)};pe.ReadMore.events={LONG_DESC_OPENED:"ReadMore_LONG_DESC_OPENED"};
pe.ReadMore.instantiate_all=function(){var a=$(".ReadMore");0<a.length&&new pe.ReadMore(a)};pe.ReadMore.prototype.on_read_more_link_clicked=function(a){this.expand_section($(a.currentTarget).closest(this.container.selector));pe.fire_global_event(pe.ReadMore.events.LONG_DESC_OPENED);"function"===typeof this.read_more_handler&&this.read_more_handler()};
pe.ReadMore.prototype.expand_section=function(a){0<a.length?(a.find(this.long_description_selector).removeClass("clipped"),a.find(this.read_less_control_selector).show(),a.find(this.read_more_control_selector).hide(),a.find(this.thumbs_selector).addClass("hidden"),a.find(this.photos_selector).removeClass("hidden")):(this.long_description.removeClass("clipped"),this.read_less_control.show(),this.read_more_control.hide(),this.thumbs.addClass("hidden"),this.photos.removeClass("hidden"))};
pe.ReadMore.prototype.collapse_section=function(a){0<a.length?(a.find(this.read_less_control_selector).hide(),a.find(this.read_more_control_selector).show(),a.find(this.thumbs_selector).removeClass("hidden"),a.find(this.photos_selector).addClass("hidden"),a.find(this.long_description_selector).addClass("clipped")):(this.read_less_control.hide(),this.read_more_control.show(),this.thumbs.removeClass("hidden"),this.photos.addClass("hidden"),this.long_description.addClass("clipped"))};
pe.ReadMore.prototype.on_read_less_link_clicked=function(a){this.collapse_section($(a.currentTarget).closest(this.container.selector));"function"===typeof this.read_less_handler&&this.read_less_handler()};pe.ReadMore.instantiate=function(){return $.map($(".ReadMore"),function(a){return new pe.ReadMore($(a))})};
pe.ChangeImageOnHover=function(a,b){pe.init_widget(this,a);this.image_container=this.container.find(".ImageContainer");this.link_parent_class=b||null;this.include_caption=this.container.data("include-caption")||!1;this.object_links=this.container.find(".HoverLinkToChange");this.object_links.mouseover(this.callback(this.object_link_hovered));var c=b?this.container.find("."+b):[];this.link_wrappers=0<c.length?c:this.object_links.parent()};
pe.ChangeImageOnHover.prototype.image_html=function(a){var b='<a href="{{object_url}}" title="{{link_title}}" class="thumbnail_link"><img src="{{image_url}}" alt="{{alt_tag}}"></a>';this.include_caption&&(b+='<p class="name"><span class="date">{{link_prefix}}</span><a href="{{object_url}}">{{image_caption}}</a></p>');a={object_url:a.attr("href"),image_url:a.data("image-url"),link_title:a.data("title")||"",alt_tag:a.data("image-alt-tag")||"",link_prefix:a.data("link-prefix")||"",image_caption:a.html()};
return pe.templatize(b,a)};pe.ChangeImageOnHover.instantiate_all=function(a){return $.map($(".ChangeImageOnHoverContainer"),function(b){return new pe.ChangeImageOnHover($(b),a)})};pe.ChangeImageOnHover.prototype.object_link_hovered=function(a){a=$(a.target);this.object_links.removeClass("selected");this.link_wrappers.removeClass("selected");a.addClass("selected");this.link_wrapper(a).addClass("selected");this.image_container.html(this.image_html(a));pe.convert_to_rounded_corners()};
pe.ChangeImageOnHover.prototype.link_wrapper=function(a){return this.link_parent_class?a.closest("."+this.link_parent_class):a.parent()};pe.VenuesLandingPageAccordion=function(a){pe.init_widget(this,a);this.container.liteAccordion({firstSlide:this.getSlideId(),onActivate:function(){window.location.hash=this.parent().data("hashtag")},containerWidth:706,containerHeight:270,theme:"pe",headerWidth:59})};
pe.VenuesLandingPageAccordion.prototype.getSlideId=function(){var a=["#lucas","#adriana","#jonah","#emma"],b=_.indexOf(a,window.location.hash),a=$('li[data-hashtag="'+(a[b]||"#lucas")+'"] .character_content');this.container.find(".character_content").not(a).removeClass("opened");return 0>b?1:b+1};
(function(a){a.fn.liteAccordion=function(b){var c=a.extend({},{containerWidth:960,containerHeight:320,headerWidth:48,firstSlide:1,onActivate:function(){},slideSpeed:800,slideCallback:function(){},autoPlay:!1,pauseOnHover:!1,cycleSpeed:6E3,theme:"basic",rounded:!1,enumerateSlides:!1},b),d=this.find("li"),e=d.length,h=c.containerWidth-e*c.headerWidth,f=d.children(".accordion_tab"),g={getGroup:function(a,b){if(this.offsetLeft===a.left)return f.slice(b+1,e).filter(function(){return this.offsetLeft===
f.index(this)*c.headerWidth});if(this.offsetLeft===a.right)return f.slice(0,b+1).filter(function(){return this.offsetLeft===h+f.index(this)*c.headerWidth})},nextSlide:function(a){var b=a+1||c.firstSlide;return function(){return b++%e}},play:function(a){var b=g.nextSlide(a?a:"");g.playing=setInterval(function(){f.eq(b()).click()},c.cycleSpeed)},pause:function(){clearInterval(g.playing)},playing:0,sentinel:!1};this.height(c.containerHeight).width(c.containerWidth).addClass(c.theme).addClass(c.rounded&&
"rounded");f.width(c.containerHeight).height(c.headerWidth).eq(c.firstSlide-1).addClass("selected");if(a.browser.msie)if(8<a.browser.version.substr(0,1))f.css("filter","none");else if(7>a.browser.version.substr(0,1))return!1;f.each(function(b){var d=a(this),e=b*c.headerWidth;b>=c.firstSlide&&(e+=h);d.css("left",e).next().width(h).css({left:e,paddingLeft:c.headerWidth});c.enumerateSlides&&d.append("<b>"+(b+1)+"</b>")});f.click(function(b){var e=a(this),l=f.index(e),m=e.next(),k={left:l*c.headerWidth,
right:l*c.headerWidth+h,newPos:0},l=g.getGroup.call(this,k,l);this.offsetLeft===k.left?k.newPos=h:this.offsetLeft===k.right&&(k.newPos=-h);if(!f.is(":animated")){if(b.originalEvent){if(g.sentinel===this)return!1;c.onActivate.call(m);g.sentinel=this}else c.onActivate.call(m),g.sentinel=!1;f.removeClass("selected").filter(e).addClass("selected");d.children().removeClass("opened");m.addClass("opened");l.animate({left:"+="+k.newPos},c.slideSpeed,function(){c.slideCallback.call(m)}).next().animate({left:"+="+
k.newPos},c.slideSpeed)}});c.pauseOnHover&&this.hover(function(){g.pause()},function(){g.play(f.index(f.filter(".selected")))});c.autoPlay&&g.play();return this}})(jQuery);
pe.routes={map:{search_autocomplete:"{{city_id}}/search/autocomplete.ehtml/",api_user_list:"/api/user_lists/{{id}}",api_reorder_user_list:"/api/user_lists/{{id}}/reorder",api_user_list_favorites:"/api/user_lists/{{id}}/favorites",api_favorite:"/api/favorites/{{id}}",api_favorite_vote_yes:"/api/favorites/{{id}}/vote_yes",api_favorite_vote_huh:"/api/favorites/{{id}}/vote_huh",holiday:"/{{city_id}}/holidays/{{id}}-7",holiday_comments:"/services/holidays/{{id}}/comments",holiday_reactions:"/holidays/{{id}}/reactions/all",
new_holiday_reactions:"/holidays/{{id}}/reactions",holiday_calendar:"/{{city_id}}/holidays/{{id}}-7/calendar",holiday_photos:"/api/{{city_id}}/holidays/{{id}}/photos",holiday_map_venues:"/api/maps/holidays/{{slug}}/venues",holiday_map_events:"/api/maps/holidays/{{slug}}/events",venue_map_popup:"/venues/{{venue_id}}/map_popup",map_venues:"/api/cities/{{city_id}}/maps/venues",map_events:"/api/cities/{{city_id}}/maps/events",map_neighborhood_venues:"/api/maps/neighborhoods/{{neighborhood_id}}/venues",
map_neighborhood_events:"/api/maps/neighborhoods/{{neighborhood_id}}/events",map_neighborhood_endpoint_venues:"/api/maps/neighborhoods/{{neighborhood_id}}/endpoints/{{endpoint_id}}/venues",map_neighborhood_endpoint_events:"/api/maps/neighborhoods/{{neighborhood_id}}/endpoints/{{endpoint_id}}/events",user_list_map_venues:"/api/maps/users/{{user_id}}/lists/{{id}}/venues",user_list_map_events:"/api/maps/users/{{user_id}}/lists/{{id}}/events",create_button_user_dashboard_event:"/users/{{user_id}}/dashboard/buttons/{{id}}",
generate_button_user_dashboard_event:"/users/{{user_id}}/dashboard/buttons/{{id}}/generate",user_list:"/users/{{user_id}}/lists/{{id}}",user_lists:"/users/{{user_id}}/lists",user_comments:"/users/{{user_id}}/comments",user_reviews:"/users/{{user_id}}/reviews",list_items:"/lists/{{id}}/list_items",list_comments:"/services/lists/{{id}}/comments",list_reactions:"/lists/{{id}}/reactions/all",new_list_reactions:"/lists/{{id}}/reactions",user_personalities:"/users/{{id}}/personalities",user:"/users/{{id}}",
api_user:"/api/users/{{id}}",event:"/{{city_id}}/{{*endpoints}}/{{id}}-1",tickets:"/{{city_id}}/{{*endpoints}}/{{id}}-1/tickets",purchase_tickets:"/{{city_id}}/{{*endpoints}}/{{id}}-1/tickets/purchase",tickets_confirmation:"/{{city_id}}/{{*endpoints}}/{{id}}-1/tickets/confirmation",api_ticket_orders:"/api/ticket_orders",api_close_ticket_order:"/api/ticket_orders/{{id}}/close",api_apply_ticket_order_promo_code:"/api/ticket_orders/apply_promo",api_remove_ticket_order_promo_code:"/api/ticket_orders/remove_promo",
api_ticket_orders_disable_pending:"/api/ticket_orders/disable_pending",api_ticket_orders_countdown_seconds:"/api/ticket_orders/countdown_seconds",admin_event_ticket_types:"/admin/events/{{event_id}}/ticket_types",admin_event_ticket_promo_codes:"/admin/events/{{event_id}}/ticket_promo_codes",update_status_admin_event_ticket_promo_codes:"/admin/events/{{event_id}}/ticket_promo_codes/{{id}}/update_status",event_type_tags:"/api/tags/event_types",find_your_scene:"/services/find_your_scene.ehtml",missing_info:"/services/contact_messages/missing_info.ehtml",
send_message:"/services/contact_messages/",subscription_select:"/services/subscriptions/web.ehtml",subscriptions_create:"/services/subscriptions/web",creeper_dialog:"/services/creeper.ehtml",creeper_subscribe:"/services/creeper/subscribe",creeper_close:"/services/creeper/close",character:"/pe-reviewers/{{id}}.ehtml",ask_party_earth:"/api/questions",mobile_subscribe:"/services/subscriptions/mobile",client_signup_form:"/clients/forms.ehtml"}};
pe.routes.build_path=function(a,b){var c=pe.routes.map[a],d=c.match(/\{\{\*(.+)\}\}/);_.each(d,function(a){b[a]&&(b[a]=b[a].join("/"))});c=c.replace(/\*/,"");b=b||{};return pe.routes.clean_url(pe.templatize(c,b))};pe.routes.clean_url=function(a){return("/"+a).replace(/#[^$\/]+/,"").replace(/(^[^?]+)([^:])\/\//,"$1$2/").replace(/\/\//g,"/")};pe.routes.current_url_params=function(){var a=pe.routes.recognize_path(window.location.pathname);return a?a.params:{}};
pe.routes.recognize_path=function(a){a=pe.routes.clean_url(a);var b,c,d=_.find(_.keys(pe.routes.map),function(d){b=pe.routes.map[d];c=RegExp(b.replace(/\//g,"\\/").replace(/\{\{[^\{\}]+\}\}/g,"(.+)"));return c.test(a)});if(d){for(var e=_.map(b.match(/\{\{[^\}]+\}\}/g),function(a){return a.replace(/\{|\}/g,"")}),h=a.match(c).slice(1,99),f={params:{}},g=function(a){return!_.isEmpty(a)},j=0;j<e.length;j++)"*"==e[j][0]&&(e[j]=e[j].replace(/\*/g,""),h[j]=_.select(h[j].replace(/\*/g,"").split("/"),g)),
f.params[e[j]]=h[j];f.path_info={name:d,template:b};return f}return!1};pe.routes.Request=function(a,b,c){pe.routes.map[a]?(this.path=a,"object"!==typeof b&&(b={id:b}),this.params=b,this.callback=c):alert("This path is not registered in the routes map.")};pe.routes.Request.factory=function(a,b,c){return new pe.routes.Request(a,b,c)};pe.routes.Request.from_current_location=function(a,b,c){b=b||{};var d=pe.routes.current_url_params();return new pe.routes.Request(a,_.extend(d,b),c)};
pe.routes.Request.prototype.ajax=function(a,b){var c="function"===typeof b?b:this.callback;$.ajax({url:this.build_path(),data:this.params,type:a,success:c})};pe.routes.Request.prototype.build_path=function(){return pe.routes.build_path(this.path,this.params)};pe.routes.Request.prototype.get=function(a){this.ajax("GET",a)};pe.routes.Request.prototype.post=function(a){this.ajax("POST",a)};pe.init_calendar_buttons=function(){new pe.AddToCalendarButton};
pe.AddToCalendarButton=function(){pe.init_widget(this,null);$(".AddToCalendarButton").live("click",this.callback(this.show_dialog))};pe.AddToCalendarButton.prototype.close_dialog=function(){};
pe.AddToCalendarButton.prototype.show_dialog=function(a){var b=$('<div title="Add to your calendar">'),c=function(){b.empty();b.dialog("destroy")};b.dialog({modal:!0,show:!1,close:c});b.html('<div style="margin:0 auto; width: 80px;"><img src="/assets/content_bg/spinner.gif"/></div>');a=$(a.currentTarget);params={event_id:a.data("event_id")};date=a.data("date");params.date=date?date:null;_.isEmpty(a.data("event_id"))?(a=a.data("source_path"),_.isEmpty(a)?alert("NOR event_id, source_path is set for calendar button"):
(a=pe.routes.recognize_path(a))?pe.routes.Request.factory(a.path_info.name+"_calendar",a.params,function(a){b.html(a);b.find("a").click(c)}).get():alert("Calendar route is not recognized")):pe.ajax_loader.add_to_calendar_dialog.load(params,function(a){b.html(a);b.find("a").click(c)});return!1};
pe.ServersidePaginator=function(a,b){pe.init_widget(this,a);this.current_page_number=0;this.loader=new pe.ajax_loader.MultiLoader(b,pe.ajax_loader.Loader.data_types.EHTML);this.objects_list=pe.load(this.container.find(".ObjectsList"));this.previous_button=pe.load(this.container.find(".PrevButton"));this.previous_button.click(this.callback(this.previous_button_clicked));this.next_button=pe.load(this.container.find(".NextButton"));this.next_button.click(this.callback(this.next_button_clicked));this.current_page_number_display=
pe.load(this.container.find(".CurrentPageNumber"));this.max_page_number_display=pe.load(this.container.find(".MaxPageNumber"));this.max_page_number=parseInt(this.max_page_number_display.text(),10);this.update_buttons();pe.convert_to_rounded_corners(this.objects_list.find(".ConvertToRoundedCorners"))};pe.ServersidePaginator.events={PAGE_CHANGED:"ServersidePaginator_PAGE_CHANGED"};
pe.ServersidePaginator.prototype.destroy=function(){this.previous_button.unbind("click");this.next_button.unbind("click");this.current_page_number_display=this.next_button=this.previous_button=this.objects_list=this.loader=null};
pe.ServersidePaginator.prototype.show_page=function(a){this.current_page_number=a;this.current_page_number_display.html((a+1).toString());this.update_buttons();this.loader.load(a.toString(),this.callback(function(a){this.objects_list.html(a);this.fire_event(pe.ServersidePaginator.events.PAGE_CHANGED);pe.convert_to_rounded_corners(this.objects_list.find(".ConvertToRoundedCorners"));""===a&&this.current_page_number_display.html("0")}))};
pe.ServersidePaginator.prototype.next_button_clicked=function(a){this.current_page_number>=this.max_page_number-1?a.stopPropagation():this.show_page(this.current_page_number+1)};pe.ServersidePaginator.prototype.previous_button_clicked=function(a){0===this.current_page_number?a.stopPropagation():this.show_page(this.current_page_number-1)};
pe.ServersidePaginator.prototype.update_buttons=function(){0===this.current_page_number?(this.previous_button.addClass("disabled"),2>this.max_page_number?this.next_button.addClass("disabled"):this.next_button.removeClass("disabled")):this.current_page_number>=this.max_page_number-1?(this.previous_button.removeClass("disabled"),this.next_button.addClass("disabled")):(this.previous_button.removeClass("disabled"),this.next_button.removeClass("disabled"))};
pe.TweetSection=function(a,b,c,d){pe.init_widget(this,a);this.tweets_display=a.find(".Tweets");this.live_update_url=b+".ehtml";d&&this.update_tweets();this.tweet_update_delay=10;this.paginator=c?new pe.ServersidePaginator(a,c+"?page={{id}}"):null};pe.TweetSection.prototype.update_tweets=function(){$.ajax({url:this.live_update_url,type:"GET",dataType:"text",success:this.callback(this.update_tweets_success)})};
pe.TweetSection.prototype.update_tweets_success=function(a){"later"===a?(setTimeout(this.callback(function(){this.update_tweets()}),1E3*this.tweet_update_delay),this.tweet_update_delay*=2):this.tweets_display.html(a)};pe.init_multiline_titles=function(a){var b=a||"two_line_title",c,d;_.each($(".FlexibleHeight"),function(a){d=$(a).find(".FlexibleHeightItem");for(c=0;c<d.length;c++)if(a=$(d[c]),parseInt(a.css("line-height"),10)<a.height()){a.parents(".FlexibleHeight").addClass(b);break}})};
$(document).ready(function(){pe.install_easing();pe.convert_to_rounded_corners();pe.restaurants_scroller=new pe.PageSlideScroller($(".RestaurantsScroller"));new pe.VenuesLandingPageAccordion($(".Accordion"));pe.ChangeImageOnHover.instantiate_all("LinkWrapper");new pe.ReadMore($(".MissingVenueReadMore"));new pe.HelpModule2;pe.init_page_framework(function(){pe.PrefetcherModule.instantiate()});setTimeout(function(){pe.init_multiline_titles()},5)});
