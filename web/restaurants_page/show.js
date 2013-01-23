pe.HelpModule2=function(){var a=$(".HelperModule");a.length&&(pe.init_widget(this,a),this.container.live("click",this.callback(this.helper_module_div_clicked)),this.container.live("hover",this.callback(this.helper_module_div_hovered)),this.active_popup=null)};pe.HelpModule2.prototype.close_button_clicked=function(){this.destroy_active_popup()};pe.HelpModule2.prototype.create_popup=function(a,c){this.active_popup=$(c);a.append(this.active_popup);$("body").bind("click",this.callback(this.close_button_clicked))};
pe.HelpModule2.prototype.destroy_active_popup=function(){$("body").unbind("click");this.active_popup.remove();this.active_popup=null};pe.HelpModule2.prototype.helper_module_div_hovered=function(a){a=$(a.target);(a=(a.hasClass("HelperModule")?a:a.closest(".HelperModule")).data("page-id"))&&pe.ajax_loader.help_page.load({page_id:a,timestamp:pe.pages_timestamp()},this.callback(function(){}))};
pe.HelpModule2.prototype.helper_module_div_clicked=function(a){var c=$(a.target),b;b=c.hasClass("HelperModule")?c:c.closest(".HelperModule");this.active_popup&&this.destroy_active_popup();(c=b.data("page-id"))&&pe.ajax_loader.help_page.load({page_id:c,timestamp:pe.pages_timestamp()},this.callback(function(a){this.create_popup(b,this.popup_html(a))}));a.stopPropagation()};
pe.HelpModule2.prototype.popup_html=function(a){return pe.templatize('<div class="DialogBox dialog_box"><div class="dialog_content_wrapper clearfix"><div class="CloseButton close_btn" title="Close"></div><div class="dialog_img"></div><div class="dialog_content"> <span class="title">{{title}}:&nbsp;&nbsp;</span> {{content}}</div></div></div><div class="dialog_point"><div class="dialog_inner_point"></div></div>',a)};
pe.PageSlideScroller=function(a,c){pe.init_widget(this,a);var b=$.extend({scroll_duration:1100,inactive_button_class:"loop_back",loop_scrolling:!1},c);this.scroller_container=this.container.find(".ScreensContainer");this.current_item=0;this.scroll_duration=b.scroll_duration;this.inactive_button_class=b.inactive_button_class;this.individual_items=this.scroller_container.find(".IndividualItem");this.single_item_width=b.single_item_width||this.individual_items.width();this.items_count=this.individual_items.length;
this.next_button=this.container.find(".NextButton");this.previous_button=this.container.find(".PreviousButton");this.page_display_container=this.container.find(".PageDisplay");this.dots_container=$(this.page_display_container.selector+" .Dot");this.dots_container.live("click",this.callback(this.dot_clicked));this.page_display_format=b.page_display_format||pe.PageSlideScroller.dots_template(this.items_count);this.loop_scrolling=b.loop_scrolling;if(this.enable_buttons=1<this.items_count){this.next_button.click(this.callback(this.next_button_clicked));
this.previous_button.click(this.callback(this.previous_button_clicked));var b=this.individual_items.first(),d=this.individual_items.last();this.loop_scrolling&&(d.clone().insertBefore(b),b.clone().insertAfter(d));this.update_display();this.update_page_display()}else this.next_button.addClass("disabled"),this.previous_button.addClass("disabled")};
pe.PageSlideScroller.dots_template=function(a){for(var a=Math.min(a,4),c=["one","two","three","four"],b="<ul class='page_count slide{{current_item_number}}'>",d=0;d<=a-1;d++)b+="<li class='Dot dot "+c[d]+"' data-page_number='"+d+"'></li>";return b+"</ul>"};
pe.PageSlideScroller.prototype.animate_scrolling=function(a){this.enable_buttons=!1;this.current_item=a;this.update_page_display();this.scroller_container.animate({left:"-"+this.compute_scroll_offset(this.current_item)+"px"},this.scroll_duration,"cubicEaseInOut",this.callback(this.update_display))};
pe.PageSlideScroller.prototype.update_display=function(){this.current_item=this.constraint_page(this.current_item);this.previous_button.toggleClass(this.inactive_button_class,0>=this.current_item);this.next_button.toggleClass(this.inactive_button_class,this.current_item>=this.items_count-1);this.scroller_container.css("left","-"+this.compute_scroll_offset(this.current_item)+"px");this.enable_buttons=!0};
pe.PageSlideScroller.prototype.update_page_display=function(){this.page_display_container.html(pe.templatize(this.page_display_format,{current_item_number:this.constraint_page(this.current_item)+1,items_count:this.items_count}))};pe.PageSlideScroller.prototype.compute_scroll_offset=function(a){return(a+(this.loop_scrolling?1:0))*this.single_item_width};
pe.PageSlideScroller.prototype.constraint_page=function(a){return this.loop_scrolling?a>=this.items_count?0:0>a?this.items_count-1:a:Math.max(Math.min(a,this.items_count-1),0)};pe.PageSlideScroller.prototype.next_button_clicked=function(){if(this.enable_buttons){var a=this.current_item+1;a>=this.items_count&&(a=0);this.loop_scrolling||(a=Math.min(a,this.items_count-1));a!=this.current_item&&this.animate_scrolling(a)}};
pe.PageSlideScroller.prototype.previous_button_clicked=function(){if(this.enable_buttons){var a=this.current_item-1;0>a&&(a=this.items_count-1);this.loop_scrolling||(a=Math.max(a,0));a!=this.current_item&&this.animate_scrolling(a)}};pe.PageSlideScroller.prototype.dot_clicked=function(a){this.animate_scrolling($(a.currentTarget).data("page_number")-0)};pe.PrefetcherModule=function(a){pe.init_widget(this,a);this.elements_with_prefetch_urls=this.container.find("[data-prefetch-url]");this.prefetch_data()};
pe.PrefetcherModule.instantiate=function(){return new pe.PrefetcherModule($("body"))};pe.PrefetcherModule.prototype.is_image_url=function(a){return/\.(jpe?g|gif|png)(\?.*)?$/i.test(a)};pe.PrefetcherModule.prototype.prefetch_ajax_request=function(a){$.getScript(a)};pe.PrefetcherModule.prototype.prefetch_data=function(){$.each(this.elements_with_prefetch_urls,this.callback(function(a,c){var c=$(c),b=c.data("prefetch-url");this.is_image_url(b)?this.prefetch_image(b):this.prefetch_ajax_request(b);c.removeAttr("data-prefetch-url")}))};
pe.PrefetcherModule.prototype.prefetch_image=function(a){this.container.append(pe.templatize('<div style="display:none;"><img src="{{url}}"></div>',{url:a}))};
pe.ReadMore=function(a,c,b){0<a.length&&(pe.init_widget(this,a),this.read_more_control=this.container.find(".ReadMoreControl"),this.read_less_control=this.container.find(".ReadLessControl"),this.read_more_link=this.container.find(".ReadMoreLink"),this.read_more_link.click(this.callback(this.on_read_more_link_clicked)),this.read_less_link=this.container.find(".ReadLessLink"),this.read_less_link.click(this.callback(this.on_read_less_link_clicked)),this.long_description=this.container.find(".LongDescription"),
this.thumbs=this.container.find(".thumbnails"),this.photos=this.container.find(".photo"),this.read_more_handler=c,this.read_less_handler=b)};pe.ReadMore.events={LONG_DESC_OPENED:"ReadMore_LONG_DESC_OPENED"};
pe.ReadMore.prototype.on_read_more_link_clicked=function(){this.long_description.removeClass("clipped");this.read_less_control.show();this.read_more_control.hide();this.thumbs.addClass("hidden");this.photos.removeClass("hidden");pe.fire_global_event(pe.ReadMore.events.LONG_DESC_OPENED);"function"===typeof this.read_more_handler&&this.read_more_handler()};
pe.ReadMore.prototype.on_read_less_link_clicked=function(){this.read_less_control.hide();this.read_more_control.show();this.thumbs.removeClass("hidden");this.photos.addClass("hidden");this.long_description.addClass("clipped");"function"===typeof this.read_less_handler&&this.read_less_handler()};pe.ReadMore.instantiate=function(){return $.map($(".ReadMore"),function(a){return new pe.ReadMore($(a))})};
pe.ChangeImageOnHover=function(a,c){pe.init_widget(this,a);this.image_container=this.container.find(".ImageContainer");this.link_parent_class=c||null;this.include_caption=this.container.data("include-caption")||!1;this.object_links=this.container.find(".HoverLinkToChange");this.object_links.mouseover(this.callback(this.object_link_hovered));var b=c?this.container.find("."+c):[];this.link_wrappers=0<b.length?b:this.object_links.parent()};
pe.ChangeImageOnHover.prototype.image_html=function(a){var c='<a href="{{object_url}}" title="{{link_title}}" class="thumbnail_link"><img src="{{image_url}}" alt="{{alt_tag}}"></a>';this.include_caption&&(c+='<p class="name"><span class="date">{{link_prefix}}</span><a href="{{object_url}}">{{image_caption}}</a></p>');a={object_url:a.attr("href"),image_url:a.data("image-url"),link_title:a.data("title")||"",alt_tag:a.data("image-alt-tag")||"",link_prefix:a.data("link-prefix")||"",image_caption:a.html()};
return pe.templatize(c,a)};pe.ChangeImageOnHover.instantiate_all=function(a){return $.map($(".ChangeImageOnHoverContainer"),function(c){return new pe.ChangeImageOnHover($(c),a)})};pe.ChangeImageOnHover.prototype.object_link_hovered=function(a){a=$(a.target);this.object_links.removeClass("selected");this.link_wrappers.removeClass("selected");a.addClass("selected");this.link_wrapper(a).addClass("selected");this.image_container.html(this.image_html(a));pe.convert_to_rounded_corners()};
pe.ChangeImageOnHover.prototype.link_wrapper=function(a){return this.link_parent_class?a.closest("."+this.link_parent_class):a.parent()};pe.VenuesLandingPageAccordion=function(a){pe.init_widget(this,a);this.container.liteAccordion({firstSlide:this.getSlideId(),onActivate:function(){window.location.hash=this.parent().data("hashtag")},containerWidth:706,containerHeight:270,theme:"pe",headerWidth:59})};
pe.VenuesLandingPageAccordion.prototype.getSlideId=function(){var a=["#lucas","#adriana","#jonah","#emma"],c=_.indexOf(a,window.location.hash),a=$('li[data-hashtag="'+(a[c]||"#lucas")+'"] .character_content');this.container.find(".character_content").not(a).removeClass("opened");return 0>c?1:c+1};
(function(a){a.fn.liteAccordion=function(c){var b=a.extend({},{containerWidth:960,containerHeight:320,headerWidth:48,firstSlide:1,onActivate:function(){},slideSpeed:800,slideCallback:function(){},autoPlay:!1,pauseOnHover:!1,cycleSpeed:6E3,theme:"basic",rounded:!1,enumerateSlides:!1},c),d=this.find("li"),g=d.length,i=b.containerWidth-g*b.headerWidth,e=d.children(".accordion_tab"),f={getGroup:function(a,c){if(this.offsetLeft===a.left)return e.slice(c+1,g).filter(function(){return this.offsetLeft===
e.index(this)*b.headerWidth});if(this.offsetLeft===a.right)return e.slice(0,c+1).filter(function(){return this.offsetLeft===i+e.index(this)*b.headerWidth})},nextSlide:function(a){var c=a+1||b.firstSlide;return function(){return c++%g}},play:function(a){var c=f.nextSlide(a?a:"");f.playing=setInterval(function(){e.eq(c()).click()},b.cycleSpeed)},pause:function(){clearInterval(f.playing)},playing:0,sentinel:!1};this.height(b.containerHeight).width(b.containerWidth).addClass(b.theme).addClass(b.rounded&&
"rounded");e.width(b.containerHeight).height(b.headerWidth).eq(b.firstSlide-1).addClass("selected");if(a.browser.msie)if(8<a.browser.version.substr(0,1))e.css("filter","none");else if(7>a.browser.version.substr(0,1))return!1;e.each(function(c){var d=a(this),e=c*b.headerWidth;c>=b.firstSlide&&(e+=i);d.css("left",e).next().width(i).css({left:e,paddingLeft:b.headerWidth});b.enumerateSlides&&d.append("<b>"+(c+1)+"</b>")});e.click(function(c){var g=a(this),j=e.index(g),k=g.next(),h={left:j*b.headerWidth,
right:j*b.headerWidth+i,newPos:0},j=f.getGroup.call(this,h,j);this.offsetLeft===h.left?h.newPos=i:this.offsetLeft===h.right&&(h.newPos=-i);if(!e.is(":animated")){if(c.originalEvent){if(f.sentinel===this)return!1;b.onActivate.call(k);f.sentinel=this}else b.onActivate.call(k),f.sentinel=!1;e.removeClass("selected").filter(g).addClass("selected");d.children().removeClass("opened");k.addClass("opened");j.animate({left:"+="+h.newPos},b.slideSpeed,function(){b.slideCallback.call(k)}).next().animate({left:"+="+
h.newPos},b.slideSpeed)}});b.pauseOnHover&&this.hover(function(){f.pause()},function(){f.play(e.index(e.filter(".selected")))});b.autoPlay&&f.play();return this}})(jQuery);pe.init_calendar_buttons=function(){new pe.AddToCalendarButton};pe.AddToCalendarButton=function(){pe.init_widget(this,null);$(".AddToCalendarButton").live("click",this.callback(this.show_dialog))};pe.AddToCalendarButton.prototype.close_dialog=function(){};
pe.AddToCalendarButton.prototype.show_dialog=function(a){var c=$('<div title="Add to your calendar">'),b=function(){c.empty();c.dialog("destroy")};c.dialog({modal:!0,show:!1,close:b});c.html('<div style="margin:0 auto; width: 80px;"><img src="/assets/content_bg/spinner.gif"/></div>');a=$(a.currentTarget);pe.ajax_loader.add_to_calendar_dialog.load({event_id:a.data("event_id"),date:a.data("date")},function(a){c.html(a);c.find("a").click(b)});return!1};
pe.ServersidePaginator=function(a,c){pe.init_widget(this,a);this.current_page_number=0;this.loader=new pe.ajax_loader.MultiLoader(c,pe.ajax_loader.Loader.data_types.EHTML);this.objects_list=pe.load(this.container.find(".ObjectsList"));this.previous_button=pe.load(this.container.find(".PrevButton"));this.previous_button.click(this.callback(this.previous_button_clicked));this.next_button=pe.load(this.container.find(".NextButton"));this.next_button.click(this.callback(this.next_button_clicked));this.current_page_number_display=
pe.load(this.container.find(".CurrentPageNumber"));this.max_page_number_display=pe.load(this.container.find(".MaxPageNumber"));this.max_page_number=parseInt(this.max_page_number_display.text(),10);this.update_buttons();pe.convert_to_rounded_corners(this.objects_list.find(".ConvertToRoundedCorners"))};pe.ServersidePaginator.events={PAGE_CHANGED:"ServersidePaginator_PAGE_CHANGED"};
pe.ServersidePaginator.prototype.destroy=function(){this.previous_button.unbind("click");this.next_button.unbind("click");this.current_page_number_display=this.next_button=this.previous_button=this.objects_list=this.loader=null};
pe.ServersidePaginator.prototype.show_page=function(a){this.current_page_number=a;this.current_page_number_display.html((a+1).toString());this.update_buttons();this.loader.load(a.toString(),this.callback(function(a){this.objects_list.html(a);this.fire_event(pe.ServersidePaginator.events.PAGE_CHANGED);pe.convert_to_rounded_corners(this.objects_list.find(".ConvertToRoundedCorners"));""===a&&this.current_page_number_display.html("0")}))};
pe.ServersidePaginator.prototype.next_button_clicked=function(a){this.current_page_number>=this.max_page_number-1?a.stopPropagation():this.show_page(this.current_page_number+1)};pe.ServersidePaginator.prototype.previous_button_clicked=function(a){0===this.current_page_number?a.stopPropagation():this.show_page(this.current_page_number-1)};
pe.ServersidePaginator.prototype.update_buttons=function(){0===this.current_page_number?(this.previous_button.addClass("disabled"),2>this.max_page_number?this.next_button.addClass("disabled"):this.next_button.removeClass("disabled")):this.current_page_number>=this.max_page_number-1?(this.previous_button.removeClass("disabled"),this.next_button.addClass("disabled")):(this.previous_button.removeClass("disabled"),this.next_button.removeClass("disabled"))};
pe.TweetSection=function(a,c,b,d){pe.init_widget(this,a);this.tweets_display=a.find(".Tweets");this.live_update_url=c+".ehtml";d&&this.update_tweets();this.tweet_update_delay=10;this.paginator=b?new pe.ServersidePaginator(a,b+"?page={{id}}"):null};pe.TweetSection.prototype.update_tweets=function(){$.ajax({url:this.live_update_url,type:"GET",dataType:"text",success:this.callback(this.update_tweets_success)})};
pe.TweetSection.prototype.update_tweets_success=function(a){"later"===a?(setTimeout(this.callback(function(){this.update_tweets()}),1E3*this.tweet_update_delay),this.tweet_update_delay*=2):this.tweets_display.html(a)};pe.init_multiline_titles=function(a){var c=a||"two_line_title",b,d;_.each($(".FlexibleHeight"),function(a){d=$(a).find(".FlexibleHeightItem");for(b=0;b<d.length;b++)if(a=$(d[b]),parseInt(a.css("line-height"),10)<a.height()){a.parents(".FlexibleHeight").addClass(c);break}})};
$(document).ready(function(){pe.install_easing();pe.convert_to_rounded_corners();pe.restaurants_scroller=new pe.PageSlideScroller($(".RestaurantsScroller"));new pe.VenuesLandingPageAccordion($(".Accordion"));pe.ChangeImageOnHover.instantiate_all("LinkWrapper");new pe.ReadMore($(".MissingVenueReadMore"));new pe.HelpModule2;pe.init_page_framework(function(){pe.PrefetcherModule.instantiate()});setTimeout(function(){pe.init_multiline_titles()},5)});
