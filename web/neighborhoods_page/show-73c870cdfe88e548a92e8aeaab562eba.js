pe.routes.map={search_autocomplete:"{{city_id}}/search/autocomplete.ehtml/",api_user_list:"/api/user_lists/{{id}}",api_reorder_user_list:"/api/user_lists/{{id}}/reorder",api_user_list_favorites:"/api/user_lists/{{id}}/favorites",api_favorite:"/api/favorites/{{id}}",api_favorite_vote_yes:"/api/favorites/{{id}}/vote_yes",api_favorite_vote_huh:"/api/favorites/{{id}}/vote_huh",holiday:"/{{city_id}}/holidays/{{id}}-7",holiday_comments:"/services/holidays/{{id}}/comments",holiday_reactions:"/holidays/{{id}}/reactions/all",
new_holiday_reactions:"/holidays/{{id}}/reactions",holiday_calendar:"/{{city_id}}/holidays/{{id}}-7/calendar",holiday_photos:"/api/{{city_id}}/holidays/{{id}}/photos",holiday_map_venues:"/api/maps/holidays/{{slug}}/venues",holiday_map_events:"/api/maps/holidays/{{slug}}/events",venue_map_popup:"/venues/{{venue_id}}/map_popup",map_venues:"/api/cities/{{city_id}}/maps/venues",map_events:"/api/cities/{{city_id}}/maps/events",map_neighborhood_venues:"/api/maps/neighborhoods/{{neighborhood_id}}/venues",
map_neighborhood_events:"/api/maps/neighborhoods/{{neighborhood_id}}/events",map_neighborhood_endpoint_venues:"/api/maps/neighborhoods/{{neighborhood_id}}/endpoints/{{endpoint_id}}/venues",map_neighborhood_endpoint_events:"/api/maps/neighborhoods/{{neighborhood_id}}/endpoints/{{endpoint_id}}/events",user_list_map_venues:"/api/maps/users/{{user_id}}/lists/{{id}}/venues",user_list_map_events:"/api/maps/users/{{user_id}}/lists/{{id}}/events",create_button_user_dashboard_event:"/users/{{user_id}}/dashboard/buttons/{{id}}",
generate_button_user_dashboard_event:"/users/{{user_id}}/dashboard/buttons/{{id}}/generate",boxoffice:"/users/{{user_id}}/dashboard/{{id}}/boxoffice",boxoffice_check_ticket_number:"/users/{{user_id}}/dashboard/{{id}}/boxoffice/{{ticket_number}}/check",user_dashboard_detail:"/users/{{user_id}}/dashboard/{{id}}",user_dashboard_details:"/users/{{user_id}}/dashboard",user_list:"/users/{{user_id}}/lists/{{id}}",user_lists:"/users/{{user_id}}/lists",user_comments:"/users/{{user_id}}/comments",user_reviews:"/users/{{user_id}}/reviews",
list_items:"/lists/{{id}}/list_items",list_comments:"/services/lists/{{id}}/comments",list_reactions:"/lists/{{id}}/reactions/all",new_list_reactions:"/lists/{{id}}/reactions",user_personalities:"/users/{{id}}/personalities",user:"/users/{{id}}",api_user:"/api/users/{{id}}",event:"/{{city_id}}/{{*endpoints}}/{{id}}-1",tickets:"/{{city_id}}/{{*endpoints}}/{{id}}-1/tickets",purchase_tickets:"/{{city_id}}/{{*endpoints}}/{{id}}-1/tickets/purchase",tickets_purchase_form:"/{{city_id}}/{{*endpoints}}/{{id}}-1/tickets/purchase_form",
tickets_confirmation:"/{{city_id}}/{{*endpoints}}/{{id}}-1/tickets/confirmation",api_ticket_orders:"/api/ticket_orders",api_close_ticket_order:"/api/ticket_orders/{{id}}/close",api_apply_ticket_order_promo_code:"/api/ticket_orders/apply_promo",api_remove_ticket_order_promo_code:"/api/ticket_orders/remove_promo",api_ticket_orders_disable_pending:"/api/ticket_orders/disable_pending",api_ticket_orders_countdown_seconds:"/api/ticket_orders/countdown_seconds",api_ticket_order_status:"/api/ticket_orders/{{id}}/status",
admin_event_ticket_types:"/admin/events/{{event_id}}/ticket_types",admin_event_ticket_promo_codes:"/admin/events/{{event_id}}/ticket_promo_codes",update_status_admin_event_ticket_promo_codes:"/admin/events/{{event_id}}/ticket_promo_codes/{{id}}/update_status",event_type_tags:"/api/tags/event_types",find_your_scene:"/services/find_your_scene.ehtml",missing_info:"/services/contact_messages/missing_info.ehtml",send_message:"/services/contact_messages/",subscription_select:"/services/subscriptions/web.ehtml",
subscriptions_create:"/services/subscriptions/web",creeper_dialog:"/services/creeper.ehtml",creeper_subscribe:"/services/creeper/subscribe",creeper_close:"/services/creeper/close",character:"/pe-reviewers/{{id}}.ehtml",ask_party_earth:"/api/questions",mobile_subscribe:"/services/subscriptions/mobile",client_signup_form:"/clients/forms.ehtml"};
pe.routes.build_path=function(a,b){var c=pe.routes.map[a],e=c.match(/\{\{\*(.+)\}\}/);_.each(e,function(a){b[a]&&(b[a]=b[a].join("/"))});c=c.replace(/\*/,"");b=b||{};return pe.routes.clean_url(pe.templatize(c,b))};pe.routes.clean_url=function(a){return("/"+a).replace(/#[^$\/]+/,"").replace(/(^[^?]+)([^:])\/\//,"$1$2/").replace(/\/\//g,"/")};pe.routes.current_url_params=function(){var a=pe.routes.recognize_path(window.location.pathname);return a?a.params:{}};
pe.routes.recognize_path=function(a){a=pe.routes.clean_url(a);var b,c,e=_.find(_.keys(pe.routes.map),function(e){b=pe.routes.map[e];c=RegExp(b.replace(/\//g,"\\/").replace(/\{\{[^\{\}]+\}\}/g,"(.+)"));return c.test(a)});if(e){for(var f=_.map(b.match(/\{\{[^\}]+\}\}/g),function(a){return a.replace(/\{|\}/g,"")}),g=a.match(c).slice(1,99),h={params:{}},j=function(a){return!_.isEmpty(a)},d=0;d<f.length;d++)"*"==f[d][0]&&(f[d]=f[d].replace(/\*/g,""),g[d]=_.select(g[d].replace(/\*/g,"").split("/"),j)),
h.params[f[d]]=g[d];h.path_info={name:e,template:b};return h}return!1};pe.routes.Request=function(a,b,c){pe.routes.map[a]?(this.path=a,"object"!==typeof b&&(b={id:b}),this.params=b,this.callback=c):alert("This path is not registered in the routes map.")};pe.routes.Request.factory=function(a,b,c){return new pe.routes.Request(a,b,c)};pe.routes.Request.from_current_location=function(a,b,c){b=b||{};var e=pe.routes.current_url_params();return new pe.routes.Request(a,_.extend(e,b),c)};
pe.routes.Request.prototype.ajax=function(a,b){var c="function"===typeof b?b:this.callback;$.ajax({url:this.build_path(),data:this.params,type:a,success:c})};pe.routes.Request.prototype.build_path=function(){return pe.routes.build_path(this.path,this.params)};pe.routes.Request.prototype.get=function(a){this.ajax("GET",a)};pe.routes.Request.prototype.post=function(a){this.ajax("POST",a)};pe.init_calendar_buttons=function(){new pe.AddToCalendarButton};
pe.AddToCalendarButton=function(){pe.init_widget(this,null);$(".AddToCalendarButton").live("click",this.callback(this.show_dialog))};pe.AddToCalendarButton.prototype.close_dialog=function(){};
pe.AddToCalendarButton.prototype.show_dialog=function(a){var b=$('<div title="Add to your calendar">'),c=function(){b.empty();b.dialog("destroy")};b.dialog({modal:!0,show:!1,close:c});b.html('<div style="margin:0 auto; width: 80px;"><img src="/assets/content_bg/spinner.gif"/></div>');a=$(a.currentTarget);params={event_id:a.data("event_id")};date=a.data("date");params.date=date?date:null;_.isEmpty(a.data("event_id"))?(a=a.data("source_path"),_.isEmpty(a)?alert("NOR event_id, source_path is set for calendar button"):
(a=pe.routes.recognize_path(a))?pe.routes.Request.factory(a.path_info.name+"_calendar",a.params,function(a){b.html(a);b.find("a").click(c)}).get():alert("Calendar route is not recognized")):pe.ajax_loader.add_to_calendar_dialog.load(params,function(a){b.html(a);b.find("a").click(c)});return!1};
pe.ChangeImageOnHover=function(a,b){pe.init_widget(this,a);this.image_container=this.container.find(".ImageContainer");this.link_parent_class=b||null;this.include_caption=this.container.data("include-caption")||!1;this.object_links=this.container.find(".HoverLinkToChange");this.object_links.mouseover(this.callback(this.object_link_hovered));var c=b?this.container.find("."+b):[];this.link_wrappers=0<c.length?c:this.object_links.parent()};
pe.ChangeImageOnHover.prototype.image_html=function(a){var b='<a href="{{object_url}}" title="{{link_title}}" class="thumbnail_link"><img src="{{image_url}}" alt="{{alt_tag}}"></a>';this.include_caption&&(b+='<p class="name"><span class="date">{{link_prefix}}</span><a href="{{object_url}}">{{image_caption}}</a></p>');a={object_url:a.attr("href"),image_url:a.data("image-url"),link_title:a.data("title")||"",alt_tag:a.data("image-alt-tag")||"",link_prefix:a.data("link-prefix")||"",image_caption:a.html()};
return pe.templatize(b,a)};pe.ChangeImageOnHover.instantiate_all=function(a){return $.map($(".ChangeImageOnHoverContainer"),function(b){return new pe.ChangeImageOnHover($(b),a)})};pe.ChangeImageOnHover.prototype.object_link_hovered=function(a){a=$(a.target);this.object_links.removeClass("selected");this.link_wrappers.removeClass("selected");a.addClass("selected");this.link_wrapper(a).addClass("selected");this.image_container.html(this.image_html(a));pe.convert_to_rounded_corners()};
pe.ChangeImageOnHover.prototype.link_wrapper=function(a){return this.link_parent_class?a.closest("."+this.link_parent_class):a.parent()};pe.PrefetcherModule=function(a){pe.init_widget(this,a);this.elements_with_prefetch_urls=this.container.find("[data-prefetch-url]");this.prefetch_data()};pe.PrefetcherModule.instantiate=function(){return new pe.PrefetcherModule($("body"))};pe.PrefetcherModule.prototype.is_image_url=function(a){return/\.(jpe?g|gif|png)(\?.*)?$/i.test(a)};
pe.PrefetcherModule.prototype.prefetch_ajax_request=function(a){$.getScript(a)};pe.PrefetcherModule.prototype.prefetch_data=function(){$.each(this.elements_with_prefetch_urls,this.callback(function(a,b){b=$(b);var c=b.data("prefetch-url");this.is_image_url(c)?this.prefetch_image(c):this.prefetch_ajax_request(c);b.removeAttr("data-prefetch-url")}))};pe.PrefetcherModule.prototype.prefetch_image=function(a){this.container.append(pe.templatize('<div style="display:none;"><img src="{{url}}"></div>',{url:a}))};
pe.FakeLink=function(a){pe.init_widget(this,a);this.links=a.find(".FakeLink");this.links.live("click",this.callback(this.goto_link))};pe.FakeLink.prototype.goto_link=function(a){0===$(a.target).closest("a").length&&(a=$(a.currentTarget).data("object_path"))&&this.open_link(""+a)};pe.FakeLink.prototype.open_link=function(a){window.location=a};
pe.HelpModule2=function(){var a=$(".HelperModule");a.length&&(pe.init_widget(this,a),this.container.live("click",this.callback(this.helper_module_div_clicked)),this.container.live("hover",this.callback(this.helper_module_div_hovered)),this.active_popup=null)};pe.HelpModule2.prototype.close_button_clicked=function(){this.destroy_active_popup()};pe.HelpModule2.prototype.create_popup=function(a,b){this.active_popup=$(b);a.append(this.active_popup);$("body").bind("click",this.callback(this.close_button_clicked))};
pe.HelpModule2.prototype.destroy_active_popup=function(){$("body").unbind("click");this.active_popup.remove();this.active_popup=null};pe.HelpModule2.prototype.helper_module_div_hovered=function(a){a=$(a.target);(a=(a.hasClass("HelperModule")?a:a.closest(".HelperModule")).data("page-id"))&&pe.ajax_loader.help_page.load({page_id:a},this.callback(function(){}))};
pe.HelpModule2.prototype.helper_module_div_clicked=function(a){var b=$(a.target),c;c=b.hasClass("HelperModule")?b:b.closest(".HelperModule");this.active_popup&&this.destroy_active_popup();(b=c.data("page-id"))&&pe.ajax_loader.help_page.load({page_id:b},this.callback(function(a){this.create_popup(c,this.popup_html(a))}));a.stopPropagation()};
pe.HelpModule2.prototype.popup_html=function(a){return pe.templatize('<div class="DialogBox dialog_box"><div class="dialog_content_wrapper clearfix"><div class="CloseButton close_btn" title="Close"></div><div class="dialog_img"></div><div class="dialog_content"> <span class="title">{{title}}:&nbsp;&nbsp;</span> {{content}}</div></div></div><div class="dialog_point"><div class="dialog_inner_point"></div></div>',a)};
$(document).ready(function(){pe.ChangeImageOnHover.instantiate_all();pe.install_easing();pe.convert_to_rounded_corners();pe.init_calendar_buttons();new pe.FakeLink($(".NeighborhoodsList"));pe.init_page_framework(function(){pe.PrefetcherModule.instantiate()})});
