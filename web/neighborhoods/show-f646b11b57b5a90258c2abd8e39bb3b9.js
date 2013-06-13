pe.routes={map:{search_autocomplete:"{{city_id}}/search/autocomplete.ehtml/",api_user_list:"/api/user_lists/{{id}}",api_reorder_user_list:"/api/user_lists/{{id}}/reorder",api_user_list_favorites:"/api/user_lists/{{id}}/favorites",api_favorite:"/api/favorites/{{id}}",holiday:"/{{city_id}}/holidays/{{id}}-7",holiday_comments:"/services/holidays/{{id}}/comments",holiday_reactions:"/holidays/{{id}}/reactions/all",new_holiday_reactions:"/holidays/{{id}}/reactions",holiday_calendar:"/{{city_id}}/holidays/{{id}}-7/calendar",
holiday_photos:"/api/{{city_id}}/holidays/{{id}}/photos",holiday_map_venues:"/api/maps/holidays/{{slug}}/venues",holiday_map_events:"/api/maps/holidays/{{slug}}/events",venue_map_popup:"/venues/{{venue_id}}/map_popup",map_venues:"/api/cities/{{city_id}}/maps/venues",map_events:"/api/cities/{{city_id}}/maps/events",map_neighborhood_venues:"/api/maps/neighborhoods/{{neighborhood_id}}/venues",map_neighborhood_events:"/api/maps/neighborhoods/{{neighborhood_id}}/events",map_neighborhood_endpoint_venues:"/api/maps/neighborhoods/{{neighborhood_id}}/endpoints/{{endpoint_id}}/venues",
map_neighborhood_endpoint_events:"/api/maps/neighborhoods/{{neighborhood_id}}/endpoints/{{endpoint_id}}/events",user_list_map_venues:"/api/maps/users/{{user_id}}/lists/{{id}}/venues",user_list_map_events:"/api/maps/users/{{user_id}}/lists/{{id}}/events",user_list:"/users/{{user_id}}/lists/{{id}}",user_lists:"/users/{{user_id}}/lists",user_comments:"/users/{{user_id}}/comments",user_reviews:"/users/{{user_id}}/reviews",list_comments:"/services/lists/{{id}}/comments",list_reactions:"/lists/{{id}}/reactions/all",
new_list_reactions:"/lists/{{id}}/reactions",user_personalities:"/users/{{id}}/personalities",user:"/users/{{id}}",api_user:"/api/users/{{id}}",event:"/{{city_id}}/{{*endpoints}}/{{id}}-1",event_type_tags:"/api/tags/event_types"}};pe.routes.build_path=function(a,c){var b=pe.routes.map[a],d=b.match(/\{\{\*(.+)\}\}/);_.each(d,function(a){c[a]&&(c[a]=c[a].join("/"))});b=b.replace(/\*/,"");return pe.routes.clean_url(pe.templatize(b,c))};
pe.routes.clean_url=function(a){return("/"+a).replace(/#[^$\/]+/,"").replace(/(^[^?]+)([^:])\/\//,"$1$2/").replace(/\/\//g,"/")};pe.routes.current_url_params=function(){var a=pe.routes.recognize_path(window.location.pathname);return a?a.params:{}};
pe.routes.recognize_path=function(a){a=pe.routes.clean_url(a);var c,b,d=_.find(_.keys(pe.routes.map),function(d){c=pe.routes.map[d];b=RegExp(c.replace(/\//g,"\\/").replace(/\{\{[^\{\}]+\}\}/g,"(.+)"));return b.test(a)});if(d){for(var e=_.map(c.match(/\{\{[^\}]+\}\}/g),function(a){return a.replace(/\{|\}/g,"")}),f=a.match(b).slice(1,99),h={params:{}},j=function(a){return!_.isEmpty(a)},g=0;g<e.length;g++)"*"==e[g][0]&&(e[g]=e[g].replace(/\*/g,""),f[g]=_.select(f[g].replace(/\*/g,"").split("/"),j)),
h.params[e[g]]=f[g];h.path_info={name:d,template:c};return h}return!1};pe.routes.Request=function(a,c,b){pe.routes.map[a]?(this.path=a,"object"!==typeof c&&(c={id:c}),this.params=c,this.callback=b):alert("This path is not registered in the routes map.")};pe.routes.Request.factory=function(a,c,b){return new pe.routes.Request(a,c,b)};pe.routes.Request.from_current_location=function(a,c,b){c=c||{};var d=pe.routes.current_url_params();return new pe.routes.Request(a,_.extend(d,c),b)};
pe.routes.Request.prototype.ajax=function(a,c){var b="function"===typeof c?c:this.callback;$.ajax({url:this.build_path(),data:this.params,type:a,success:b})};pe.routes.Request.prototype.build_path=function(){return pe.routes.build_path(this.path,this.params)};pe.routes.Request.prototype.get=function(a){this.ajax("GET",a)};pe.routes.Request.prototype.post=function(a){this.ajax("POST",a)};pe.init_calendar_buttons=function(){new pe.AddToCalendarButton};
pe.AddToCalendarButton=function(){pe.init_widget(this,null);$(".AddToCalendarButton").live("click",this.callback(this.show_dialog))};pe.AddToCalendarButton.prototype.close_dialog=function(){};
pe.AddToCalendarButton.prototype.show_dialog=function(a){var c=$('<div title="Add to your calendar">'),b=function(){c.empty();c.dialog("destroy")};c.dialog({modal:!0,show:!1,close:b});c.html('<div style="margin:0 auto; width: 80px;"><img src="/assets/content_bg/spinner.gif"/></div>');a=$(a.currentTarget);_.isEmpty(a.data("event_id"))?(a=a.data("source_path"),_.isEmpty(a)?alert("NOR event_id, source_path is set for calendar button"):(a=pe.routes.recognize_path(a))?pe.routes.Request.factory(a.path_info.name+
"_calendar",a.params,function(a){c.html(a);c.find("a").click(b)}).get():alert("Calendar route is not recognized")):pe.ajax_loader.add_to_calendar_dialog.load({event_id:a.data("event_id"),date:a.data("date")},function(a){c.html(a);c.find("a").click(b)});return!1};
pe.HelpModule2=function(){var a=$(".HelperModule");a.length&&(pe.init_widget(this,a),this.container.live("click",this.callback(this.helper_module_div_clicked)),this.container.live("hover",this.callback(this.helper_module_div_hovered)),this.active_popup=null)};pe.HelpModule2.prototype.close_button_clicked=function(){this.destroy_active_popup()};pe.HelpModule2.prototype.create_popup=function(a,c){this.active_popup=$(c);a.append(this.active_popup);$("body").bind("click",this.callback(this.close_button_clicked))};
pe.HelpModule2.prototype.destroy_active_popup=function(){$("body").unbind("click");this.active_popup.remove();this.active_popup=null};pe.HelpModule2.prototype.helper_module_div_hovered=function(a){a=$(a.target);(a=(a.hasClass("HelperModule")?a:a.closest(".HelperModule")).data("page-id"))&&pe.ajax_loader.help_page.load({page_id:a},this.callback(function(){}))};
pe.HelpModule2.prototype.helper_module_div_clicked=function(a){var c=$(a.target),b;b=c.hasClass("HelperModule")?c:c.closest(".HelperModule");this.active_popup&&this.destroy_active_popup();(c=b.data("page-id"))&&pe.ajax_loader.help_page.load({page_id:c},this.callback(function(a){this.create_popup(b,this.popup_html(a))}));a.stopPropagation()};
pe.HelpModule2.prototype.popup_html=function(a){return pe.templatize('<div class="DialogBox dialog_box"><div class="dialog_content_wrapper clearfix"><div class="CloseButton close_btn" title="Close"></div><div class="dialog_img"></div><div class="dialog_content"> <span class="title">{{title}}:&nbsp;&nbsp;</span> {{content}}</div></div></div><div class="dialog_point"><div class="dialog_inner_point"></div></div>',a)};
pe.ChangeImageOnHover=function(a,c){pe.init_widget(this,a);this.image_container=this.container.find(".ImageContainer");this.link_parent_class=c||null;this.include_caption=this.container.data("include-caption")||!1;this.object_links=this.container.find(".HoverLinkToChange");this.object_links.mouseover(this.callback(this.object_link_hovered));var b=c?this.container.find("."+c):[];this.link_wrappers=0<b.length?b:this.object_links.parent()};
pe.ChangeImageOnHover.prototype.image_html=function(a){var c='<a href="{{object_url}}" title="{{link_title}}" class="thumbnail_link"><img src="{{image_url}}" alt="{{alt_tag}}"></a>';this.include_caption&&(c+='<p class="name"><span class="date">{{link_prefix}}</span><a href="{{object_url}}">{{image_caption}}</a></p>');a={object_url:a.attr("href"),image_url:a.data("image-url"),link_title:a.data("title")||"",alt_tag:a.data("image-alt-tag")||"",link_prefix:a.data("link-prefix")||"",image_caption:a.html()};
return pe.templatize(c,a)};pe.ChangeImageOnHover.instantiate_all=function(a){return $.map($(".ChangeImageOnHoverContainer"),function(c){return new pe.ChangeImageOnHover($(c),a)})};pe.ChangeImageOnHover.prototype.object_link_hovered=function(a){a=$(a.target);this.object_links.removeClass("selected");this.link_wrappers.removeClass("selected");a.addClass("selected");this.link_wrapper(a).addClass("selected");this.image_container.html(this.image_html(a));pe.convert_to_rounded_corners()};
pe.ChangeImageOnHover.prototype.link_wrapper=function(a){return this.link_parent_class?a.closest("."+this.link_parent_class):a.parent()};pe.map_tools={};pe.map_tools.array_contains_marker=function(a,c){var b=!1;$.each(a,function(a,e){if(e.object_id===c)return b=!0,!1});return b};
pe.map_tools.event_map_data=function(a){var c=[];$.each(a,function(a,d){$.each(d.locations,function(a,b){if(!b.latitude)return!0;var h=b.name,j=pe.map_tools.find_venue_by_name_in_array(c,h);j||(j={name:h,url:b.url,id:b.id,latitude:b.latitude,longitude:b.longitude,thumbnail:b.photo,small_pin:b.small_pin,ordering:d.ordering,favorite_id:d.favorite_id,city_id:d.city_id,events:[]},c.push(j));j.events.push(d)})});return c};
pe.map_tools.find_marker=function(a,c){var b=null;$.each(a,function(a,e){if(e.object_id===c)return b=e,!1});return b};pe.map_tools.find_markers_to_remove=function(a,c){return $.map(a,function(a){if(a.type===pe.Map.marker_types.USER_LOCATION)return!0;var d=pe.map_tools.get_marker_object(c,a);if(!d||!1===d.map_visibility||JSON.stringify(a.events)!==JSON.stringify(d.events))return a})};
pe.map_tools.find_objects_to_add=function(a,c){var b=[];$.each(c,function(c,e){pe.map_tools.markers_contain_venue(a,e)||b.push(e)});return b};pe.map_tools.find_venue_by_name_in_array=function(a,c){var b=null;$.each(a,function(a,e){if(e.name===c)return b=e,!1});return b};pe.map_tools.get_city_name_from_google_address_lookup_result=function(a){var c=null;$.each(a.address_components,function(a,d){var e=!1;$.each(d.types,function(a,b){"locality"===b&&(e=!0)});if(e)return c=d.long_name,!1});return c};
pe.map_tools.get_marker_object=function(a,c){var b=null;$.each(a,function(a,e){if(c.object_id===e.id)return b=e,!1});return b};pe.map_tools.markers_contain_venue=function(a,c){var b=!1;$.each(a,function(a,e){if(e.object_id===c.id&&JSON.stringify(e.events)===JSON.stringify(c.events))return b=!0,!1});return b};
pe.map_tools.marker_icon=function(a,c){var b="http://www.partyearth.com/assets/map/";switch(a){case pe.Map.marker_types.CITY:b+="city.png";break;case pe.Map.marker_types.CURRENT_OBJECT:b+="location.png";break;case pe.Map.marker_types.EVENT:b+=c.disabled?"event_transparent.png":"event.png";break;case pe.Map.marker_types.EVENT_HIGHLIGHTED:b+="event_highlighted.png";break;case pe.Map.marker_types.HOTSPOT:b+=c.disabled?"hotspot_transparent.png":"hotspot.png";break;case pe.Map.marker_types.LANDMARK:b+=
"landmark.png";break;case pe.Map.marker_types.OTHER_EVENT:b+="event_small.png";break;case pe.Map.marker_types.OTHER_VENUE:b+="venue_small.png";break;case pe.Map.marker_types.RUNNERS:b+="pamplona/runners.png";break;case pe.Map.marker_types.SPECTATORS:b+="pamplona/spectators.png";break;case pe.Map.marker_types.TIME:b+="pamplona/time.png";break;case pe.Map.marker_types.USER_LOCATION:b+="location.png";break;case pe.Map.marker_types.VENUE:b+=c.disabled?"venue_transparent.png":"venue.png"}return b};
pe.map_tools.numbered_marker_icon=function(a,c){var b=a.toLowerCase(),d=pe.map_tools.format_marker_id(String(c));return"http://cdn.partyearth.com/assets/map/pins/"+b+"/map/"+d+".png"};pe.map_tools.format_marker_id=function(a){return 3<a.length?"0000":"0000".substr(0,4-a.length)+a};pe.map_tools.objects_have_marker=function(a,c){var b=!1;$.each(a,function(a,e){if(c.object_id===e.id&&JSON.stringify(c.events)===JSON.stringify(e.events))return b=!0,!1});return b};
pe.map_tools.remove_marker_from_array=function(a,c){return $.map(a,function(a){return a.object_id===c.object_id?null:a})};pe.map_tools.venues_contain_venue=function(a,c){var b=!1;$.each(a,function(a,e){if(e.id===c)return b=!0,!1});return b};
pe.Map=function(a,c,b,d,e,f){pe.init_widget(this,a);f=f||{};this.map=new google.maps.Map(a[0],{zoom:d,center:new google.maps.LatLng(c,b),mapTypeId:e,minZoom:2,scrollwheel:!1,mapTypeControlOptions:{style:google.maps.MapTypeControlStyle.DROPDOWN_MENU},navigationControlOptions:{style:google.maps.NavigationControlStyle.SMALL}});this.bounds=new google.maps.LatLngBounds;google.maps.event.addListener(this.map,"zoom_changed",this.callback(this.zoom_changed));google.maps.event.addListener(this.map,"dragend",
this.callback(this.dragend));c=new google.maps.OverlayView;c.draw=function(){};c.setMap(this.map);this.overlay=c;c=$(".MapTooltip");0===c.length&&(c=$('<div class="map_tooltip MapTooltip"></div>'),a.parent().append(c));this.map_tooltip=c;c=$(".MapPopup");0===c.length&&(c=$('<div class="map_popup MapPopup"></div>'),a.parent().append(c));this.map_popup=c;this.markers={};this.markers.CITY=[];this.markers.CURRENT_OBJECT=[];this.markers.EVENT=[];this.markers.LANDMARK=[];this.markers.USER_LOCATION=[];this.markers.VENUE=
[];this.current_venue_ids=[];this.global_zoom_level_limit=8;this.current_zoom_level=d;this.zoom_state=null;this.zoom_changed();this.clicked_marker=null;this.default_city=f.city};pe.Map.events={CITY_CHANGED:"Map_CITY_CHANGED",CITY_MARKER_CLICKED:"Map_CITY_MARKER_CLICKED",DRAGEND:"Map_DRAGEND",MARKER_CLICKED:"Map_MARKER_CLICKED",MARKER_HOVERED:"Map_MARKER_HOVERED",MARKER_BLURRED:"Map_MARKER_BLURRED",LANDMARK_MARKER_CLICKED:"Map_LANDMARK_MARKER_CLICKED",ZOOM_LEVEL_CHANGED:"Map_ZOOM_LEVEL_CHANGED",ZOOM_STATE_CHANGED:"Map_ZOOM_STATE_CHANGED"};
pe.Map.marker_types={CITY:"CITY",CURRENT_OBJECT:"CURRENT_OBJECT",EVENT:"EVENT",EVENT_HIGHLIGHTED:"EVENT_HIGHLIGHTED",HOTSPOT:"HOTSPOT",LANDMARK:"LANDMARK",OTHER_EVENT:"OTHER_EVENT",OTHER_VENUE:"OTHER_VENUE",RUNNERS:"Tip for Runners",SPECTATORS:"Tip for Spectators",TIME:"Pamplona Run Time",USER_LOCATION:"USER_LOCATION",VENUE:"VENUE"};pe.Map.zoom_states={GLOBAL:"GLOBAL",LOCAL:"LOCAL"};
pe.Map.prototype.add_marker=function(a){var c=a.small_pin?500:1E3;a.ordering&&(c-=a.ordering);var c={position:new google.maps.LatLng(a.latitude,a.longitude),map:this.map,icon:a.icon,cursor:"pointer",zIndex:a.zIndex||c},b=new google.maps.Marker(c);b.bubble_html=a.bubble_html;b.popup_html=a.popup_html;b.type=a.type;b.object_id=a.object_id;b.object_url=a.object_url;b.city_id=a.city_id;b.events=a.events;b.is_visible=a.is_visible;b.small_pin=a.small_pin;b.ordering=a.ordering;b.favorite_id=a.favorite_id;
var d=this;google.maps.event.addListener(b,"click",function(){d.marker_clicked(b);d.fire_event(pe.Map.events.MARKER_CLICKED,this)});google.maps.event.addListener(b,"mouseover",function(){d.marker_hovered(b);d.fire_event(pe.Map.events.MARKER_HOVERED,this)});google.maps.event.addListener(b,"mouseout",function(){d.marker_blurred(b);d.fire_event(pe.Map.events.MARKER_BLURRED,this)});this.markers[a.type].push(b);return b};
pe.Map.prototype.centrize=function(){var a=this.map.getCenter();google.maps.event.trigger(this.map,"resize");this.map.setCenter(a)};pe.Map.prototype.centrize_bounds=function(){var a=this.bounds.getCenter();google.maps.event.trigger(this.map,"resize");this.map.setCenter(a)};pe.Map.prototype.centrize_to_marker=function(a){if(a=a||_.sortBy(_.union(this.markers.VENUE,this.markers.EVENT),function(a){return a.ordering})[0])a=a.position,google.maps.event.trigger(this.map,"resize"),this.map.setCenter(a)};
pe.Map.prototype.marker_coordinates_weights=function(a){return a.small_pin?{left:{x:15,y:40},right:{x:15,y:40}}:{left:{x:15,y:50},right:{x:25,y:50}}};pe.Map.prototype.marker_blurred=function(){this.map_tooltip.hide()};pe.Map.prototype.marker_hovered=function(a){this.clicked_marker!=a&&(this.map_tooltip.html(a.bubble_html),this.map_tooltip.show(),this.set_popup_tooltip_div_position(this.map_tooltip,a))};
pe.Map.prototype.marker_clicked=function(a){this.clicked_marker=a;switch(a.type){case pe.Map.marker_types.VENUE:a.is_visible&&this.show_popup(a);break;case pe.Map.marker_types.EVENT:this.show_popup(a)}};
pe.Map.prototype.set_popup_tooltip_div_position=function(a,c){var b=this.marker_position_on_map(c),d=this.container.width(),e=this.marker_coordinates_weights(c);b.x>d/2?(a.css("right",d-b.x+e.right.x),a.css("left",""),a.css("top",b.y-e.right.y),a.removeClass("map_popup_right")):(a.css("right",""),a.css("left",b.x+e.left.x),a.css("top",b.y-e.left.y),a.addClass("map_popup_right"))};pe.Map.prototype.marker_position_on_map=function(a){var c=this.overlay.getProjection();a=a.getPosition();return c.fromLatLngToContainerPixel(a)};
pe.Map.prototype.marker_position_on_page=function(a){a=this.marker_position_on_map(a);return{x:this.container.offset().left+a.x,y:this.container.offset().top+a.y}};pe.Map.prototype.bubble_template_city=function(a){return pe.templatize('<div class="bubble_text"><span class="bubble_headline">{{name}}</span></div>',a)};
pe.Map.prototype.bubble_template_event=function(a){if(a.events){var c=a.events[0],b=c.start_date||c.date;c.formatted_date=b?$.datepicker.formatDate("M d",new Date(b)):"";a.events_text=pe.templatize('<li><span class="event_date">{{formatted_date}}</span><a href="{{url}}" class="blue_text">{{name}}</a></li>',c)}return pe.templatize('<div class="map_tooltip_content"><div class="map_popup_tip"><div class="map_popup_tip_inner"></div></div><span class="title">{{name}}</span><ul class="event_list">{{events_text}}</ul></div>',
a)};pe.Map.prototype.bubble_template_landmark=function(a){return pe.templatize('<div class="map_tooltip_content"><div class="map_popup_tip"><div class="map_popup_tip_inner"></div></div><span class="title">{{name}}</span></div>',a)};
pe.Map.prototype.bubble_template_venue=function(a){a.venue_types_text=a.venue_types.join(" / ");return pe.templatize('<div class="map_tooltip_content"><div class="map_popup_tip"><div class="map_popup_tip_inner"></div></div><span class="title">{{name}}</span><span class="venue_type">{{venue_types_text}}</span></div>',a)};pe.Map.prototype.city_marker_clicked=function(a){this.fire_event(pe.Map.events.CITY_MARKER_CLICKED,a)};
pe.Map.prototype.landmark_marker_clicked=function(a){this.fire_event(pe.Map.events.LANDMARK_MARKER_CLICKED,a)};
pe.Map.prototype.popup_template_landmark=function(a){a.image="";a.thumbnail&&(a.image=pe.templatize('<div class="map_venue_img float_left ConvertToRoundedCorners"><img src="'+pe.https(pe.assign_photo_size(a.thumbnail,"100","100x100"))+'" /></div>',a));return pe.templatize('<div class="map_popup_content"><div class="map_popup_close CloseButton"></div><div class="map_popup_tip"><div class="map_popup_tip_inner"></div></div><div class="header">{{name}}</div><div class="main clearfix">{{image}}<div class="details">{{description}}</div></div></div>',a)};
pe.Map.prototype.popup_template_user_location=function(a){return pe.templatize('<div class="user_location_popup" style="width:200px !important; height:80px !important;">{{user_location}}</div>',{user_location:a})};pe.Map.prototype.remove_marker=function(a){a.setMap(null);this.markers[a.type]=pe.map_tools.remove_marker_from_array(this.markers[a.type],a)};
pe.Map.prototype.set_cities=function(a){$.each(this.markers.CITY,this.callback(function(a,b){this.remove_marker(b)}));$.each(a,this.callback(function(a,b){var d=this.bubble_template_city(b);this.add_marker({type:pe.Map.marker_types.CITY,icon:pe.map_tools.marker_icon(pe.Map.marker_types.CITY,b),object_id:b.id,object_url:b.url,latitude:b.latitude,longitude:b.longitude,bubble_html:d,marker_clicked:this.callback(this.city_marker_clicked)})}))};
pe.Map.prototype.set_current_event=function(a){a=pe.map_tools.event_map_data([a]);a=pe.map_tools.find_objects_to_add(this.markers.EVENT,a);$.each(a,this.callback(function(a,b){this.add_marker({type:pe.Map.marker_types.CURRENT_OBJECT,icon:pe.map_tools.marker_icon(pe.Map.marker_types.CURRENT_OBJECT,b),zIndex:1E3,object_id:b.id,object_url:b.url,latitude:b.latitude,longitude:b.longitude,bubble_html:this.bubble_template_event(b),city_id:b.city_id,events:b.events});this.current_venue_ids.push(b.id)}))};
pe.Map.prototype.set_current_venue=function(a){this.add_marker({type:pe.Map.marker_types.CURRENT_OBJECT,icon:pe.map_tools.marker_icon(pe.Map.marker_types.CURRENT_OBJECT,a),zIndex:2E3,object_id:a.id,object_url:a.url,latitude:a.latitude,longitude:a.longitude,bubble_html:this.bubble_template_venue(a),city_id:a.city_id});this.current_venue_ids.push(a.id)};
pe.Map.prototype.set_events=function(a,c){var b=pe.map_tools.event_map_data(a),d=pe.map_tools.find_markers_to_remove(this.markers.EVENT,b);$.each(d,this.callback(function(a,b){-1<this.current_venue_ids.indexOf(b.object_id)||this.remove_marker(b)}));b=pe.map_tools.find_objects_to_add(this.markers.EVENT,b);$.each(b,this.callback(function(a,b){var d=b.small_pin?pe.Map.marker_types.OTHER_EVENT:pe.Map.marker_types.EVENT,d=c?pe.map_tools.numbered_marker_icon("event",b.ordering):pe.map_tools.marker_icon(d,
b);-1<this.current_venue_ids.indexOf(b.id)||(d=this.add_marker({small_pin:b.small_pin,type:pe.Map.marker_types.EVENT,icon:d,object_id:b.id,object_url:b.url,latitude:b.latitude,longitude:b.longitude,bubble_html:this.bubble_template_event(b),city_id:b.city_id,events:b.events,favorite_id:b.favorite_id,ordering:b.ordering}),this.bounds.extend(d.position))}))};
pe.Map.prototype.set_landmarks=function(a){$.each(this.markers.LANDMARK,this.callback(function(a,b){this.remove_marker(b)}));$.each(a,this.callback(function(a,b){0===b.type&&b.map_visibility&&this.add_marker({type:pe.Map.marker_types.LANDMARK,icon:pe.map_tools.marker_icon(pe.Map.marker_types.LANDMARK,b),object_id:b.id,object_url:b.url,latitude:b.latitude,longitude:b.longitude,bubble_html:this.bubble_template_landmark(b),popup_html:this.popup_template_landmark(b),marker_clicked:this.callback(this.landmark_marker_clicked)})}))};
pe.Map.prototype.set_venues=function(a,c){var b=pe.map_tools.find_markers_to_remove(this.markers.VENUE,a);$.each(b,this.callback(function(a,b){-1<this.current_venue_ids.indexOf(b.object_id)||this.remove_marker(b)}));b=pe.map_tools.find_objects_to_add(this.markers.VENUE,a);$.each(b,this.callback(function(a,b){if(!(-1<this.current_venue_ids.indexOf(b.id))){var f=this.bubble_template_venue(b),h=b.small_pin?pe.Map.marker_types.OTHER_VENUE:pe.Map.marker_types.VENUE,h=c?pe.map_tools.numbered_marker_icon("venue",
b.ordering):pe.map_tools.marker_icon(h,b),f=this.add_marker({small_pin:b.small_pin,type:pe.Map.marker_types.VENUE,icon:h,object_id:b.id,object_url:b.url,latitude:b.latitude,longitude:b.longitude,is_visible:b.is_visible,bubble_html:f,city_id:b.city_id,favorite_id:b.favorite_id,ordering:b.ordering});this.bounds.extend(f.position)}}))};pe.Map.prototype.set_view=function(a,c,b){this.map.setCenter(new google.maps.LatLng(a,c));a=parseInt(b,10);isNaN(a)||(this.map.setZoom(a),this.zoom_changed())};
pe.Map.prototype.show_popup=function(a){this.map_tooltip.hide();this.map_popup.hide();(this.default_city===a.city_id?this.load_venue_popup:this.load_default_venue_popup)(a,this.callback(function(c){this.map_popup.html(c);(new pe.CloseButton(this.map_popup,pe.CloseButton.close_methods.HIDE)).bind_event(pe.CloseButton.events.CLOSED,this.callback(function(){this.clicked_marker=null}));this.set_popup_tooltip_div_position(this.map_popup,a);this.map_popup.show()}))};
pe.Map.prototype.switch_to_global_view=function(){this.zoom_state=pe.Map.zoom_states.GLOBAL;this.map.setMapTypeId(google.maps.MapTypeId.TERRAIN);pe.ajax_loader.cities.load(this.callback(function(a){this.set_cities(a);this.set_venues([]);this.set_events([])}));this.fire_event(pe.Map.events.ZOOM_STATE_CHANGED,this.zoom_state)};
pe.Map.prototype.switch_to_local_view=function(a){this.zoom_state=pe.Map.zoom_states.LOCAL;this.map.setMapTypeId(google.maps.MapTypeId.ROADMAP);setTimeout(this.callback(function(){var c=this.map.getBounds();a===this.global_zoom_level_limit&&pe.ajax_loader.locate_city.load({north:c.getNorthEast().lat(),south:c.getSouthWest().lat(),east:c.getNorthEast().lng(),west:c.getSouthWest().lng()},this.callback(function(a){1===a.length&&this.load_default_map_objects(a[0].id);this.fire_event(pe.Map.events.ZOOM_STATE_CHANGED,
this.zoom_state)}))}),0)};pe.Map.prototype.load_default_map_objects=function(a){var c=this.default_city===a?this.load_events:this.load_default_events;(this.default_city===a?this.load_venues:this.load_default_venues)(a,this.callback(function(b){this.set_venues(b);this.fire_event(pe.Map.events.CITY_CHANGED,a);this.set_cities([])}));c(a,this.callback(function(a){this.set_events(a)}))};pe.Map.prototype.load_default_venues=function(a,c){pe.routes.Request.factory("map_venues",{city_id:a}).get(function(a){c(pe.json_expander.expand_venues(a))})};
pe.Map.prototype.load_default_events=function(a,c){pe.routes.Request.factory("map_events",{city_id:a}).get(function(a){c(pe.json_expander.expand_events(a))})};pe.Map.prototype.load_default_venue_popup=function(a,c){pe.routes.Request.factory("venue_map_popup",{venue_id:a.object_id}).get(c)};pe.Map.prototype.load_venues=function(a,c){pe.routes.Request.factory("map_venues",{city_id:a}).get(function(a){c(pe.json_expander.expand_venues(a))})};
pe.Map.prototype.load_events=function(a,c){pe.routes.Request.factory("map_events",{city_id:a}).get(function(a){c(pe.json_expander.expand_events(a))})};pe.Map.prototype.load_venue_popup=function(a,c){pe.routes.Request.factory("venue_map_popup",{venue_id:a.object_id}).get(c)};
pe.Map.prototype.dragend=function(){this.clicked_marker&&(this.map.getBounds().contains(this.clicked_marker.getPosition())?this.set_popup_tooltip_div_position(this.map_popup,this.clicked_marker):(this.map_popup.hide(),this.clicked_marker=null))};
pe.Map.prototype.zoom_changed=function(){this.map_popup.hide();var a=this.map.getZoom();a<this.global_zoom_level_limit&&this.zoom_state!==pe.Map.zoom_states.GLOBAL&&this.switch_to_global_view();a>=this.global_zoom_level_limit&&this.zoom_state!==pe.Map.zoom_states.LOCAL&&this.switch_to_local_view(a);this.fire_event(pe.Map.events.ZOOM_LEVEL_CHANGED,a)};
(function(){var a=function(a,b){return function(){return a.apply(b,arguments)}},c=pe,b=function(b){this.container=b;this.map_loaded=a(this.map_loaded,this);this.expand_map_clicked=a(this.expand_map_clicked,this);this.expand_gallery_clicked=a(this.expand_gallery_clicked,this);this.map_container=$(".VenueMap");this.marker_tips=$(".MarkerTip");this.gallery_container=$(".PhotoSlideShow");this.gallery_quick_nav=$(".GalleryQuickNav");this.expand_map_link=$(".ExpandMap.Link");this.expand_gallery_link=$(".ExpandGallery.Link");
this.map_popup=this.container.find(".map_popup");this.map_tooltip=this.container.find(".map_tooltip");$(".ExpandMap").click(this.expand_map_clicked);$(".ExpandGallery").click(this.expand_gallery_clicked)};b.prototype.centrize_map=function(){var a,b;a=this.map.map;b=a.getCenter();google.maps.event.trigger(a,"resize");return a.setCenter(b)};b.prototype.expand_gallery_clicked=function(){return this.expand_map(!1)};b.prototype.expand_map_clicked=function(){return this.expand_map()};b.prototype.expand_map=
function(a){null==a&&(a=!0);this.map_popup.hide();this.map_container.unbind("click");a?(this.map_container.removeClass("collapsed"),$(".SlideshowCont").addClass("collapsed"),$(".MapCont").removeClass("collapsed"),this.map.map.setOptions({mapTypeControl:!0,navigationControl:!0,streetViewControl:!0})):(this.map_container.addClass("collapsed"),$(".SlideshowCont").removeClass("collapsed"),$(".MapCont").addClass("collapsed"),this.map.map.setOptions({disableDefaultUI:!0,mapTypeControl:!1,navigationControl:!1,
streetViewControl:!1}),this.map_container.click(this.expand_map_clicked));this.centrize_map();return this.toggle_expanders()};b.prototype.toggle_expanders=function(){this.expand_map_link.toggle();this.expand_gallery_link.toggle();this.gallery_quick_nav.toggle();return this.marker_tips.toggle()};b.prototype.map_loaded=function(){if("#map"===window.location.hash)return this.expand_map()};c.GalleryMappable=b}).call(this);
pe.PhotoModule=function(a,c,b,d,e,f){pe.init_widget(this,a);this.container.html(this.dom(b));this.slide_show_div=this.container.find(".SlideShow");this.slide_show_div.html(this.render_photos(c,d,e,f));0<c.length&&(this.slide_show_div.addClass("slider"),this.slide_show_div.nivoSlider({effect:"slideInRight",startSlide:0,animSpeed:70,pauseTime:0,directionNav:1<c.length,directionNavHide:!0,controlNav:!1,keyboardNav:!0,manualAdvance:!0}))};
pe.PhotoModule.prototype.dom=function(a){return'<div class="SlideShow '+a+'"></div>'};
pe.PhotoModule.prototype.render_photos=function(a,c,b,d){var e="";if(0===a.length)e+='<img src="'+pe.https(pe.assign_photo_size("",c,b))+'" alt="" title="">';else{var f=this,h=a.length;$.each(a,function(a,g){g.photo=pe.https(pe.assign_photo_size(g.src,c,b));g.position=a+1+" of "+h;g.title_div="title_div_"+d+"_"+a;g.photo_caption_container=""===g.title?"":'<div class="photo_caption float_left"><span class="text float_left">'+g.title+'</span><div class="line_divider"></div></div>';f.container.append(pe.templatize('<div id="{{title_div}}" class="nivo-html-caption"><table width="100%" cellpadding="0" cellspacing="0"><tbody><tr><td width="90%">{{photo_caption_container}}</td><td valign="bottom"><div class="photo_number float_right"><span class="text"><nobr>{{position}}</nobr></span><div></td></tr></tbody></table></div>',
g));e=g.url?e+pe.templatize('<a href="{{url}}"><img src="{{photo}}" alt="" title="#{{title_div}}"/></a>',g):e+pe.templatize('<img src="{{photo}}" alt="" title="#{{title_div}}"/>',g)})}return e};
(function(){var a=function(a,b){return function(){return a.apply(b,arguments)}},c={}.hasOwnProperty,b=pe,d=function(b,c,e){this.nearby_events_loaded=a(this.nearby_events_loaded,this);this.nearby_venues_loaded=a(this.nearby_venues_loaded,this);d.__super__.constructor.call(this,b);this.map_data=c;this.create_map();0<e?this.load_neighborhood_photos(this.map_data.url_param):this.expand_map()},e=d,f=pe.GalleryMappable,h=function(){this.constructor=e},j;for(j in f)c.call(f,j)&&(e[j]=f[j]);h.prototype=f.prototype;
e.prototype=new h;e.__super__=f.prototype;d.prototype.create_map=function(){var a=this;this.map=new pe.Map(this.map_container,this.map_data.latitude,this.map_data.longitude,this.map_data.default_zoom_level,google.maps.MapTypeId.ROADMAP,{city:this.map_data.city_id});google.maps.event.addListenerOnce(this.map.map,"idle",this.map_loaded);this.map.map.setOptions({disableDefaultUI:!0});this.map.load_venues=function(b,c){return pe.routes.Request.factory("map_neighborhood_venues",{neighborhood_id:a.map_data.url_param}).get(function(a){return c(pe.json_expander.expand_venues(a))})};
this.map.load_events=function(b,c){return pe.routes.Request.factory("map_neighborhood_events",{neighborhood_id:a.map_data.url_param}).get(function(a){return c(pe.json_expander.expand_events(a))})};this.map.marker_coordinates_weights=function(a){return a.small_pin?{left:{x:25,y:40},right:{x:15,y:40}}:{left:{x:25,y:50},right:{x:25,y:50}}};pe.routes.Request.factory("map_neighborhood_venues",{neighborhood_id:this.map_data.url_param}).get(this.nearby_venues_loaded);return pe.routes.Request.factory("map_neighborhood_events",
{neighborhood_id:this.map_data.url_param}).get(this.nearby_events_loaded)};d.prototype.load_neighborhood_photos=function(a){return pe.ajax_loader.neighborhood_photos.load({neighborhood_id:a},function(a){if(0<a.length)return new pe.PhotoModule($(".PhotoSlideShow"),a,"width460","460","460","neighborhood")})};d.prototype.nearby_venues_loaded=function(a){return this.map.set_venues(pe.json_expander.expand_venues(a))};d.prototype.nearby_events_loaded=function(a){return this.map.set_events(pe.json_expander.expand_events(a))};
d.prototype.toggle_expanders=function(){this.expand_map_link.toggle();return this.expand_gallery_link.toggle()};b.NeighborhoodGalleryMap=d}).call(this);
pe.ScrollPaginator=function(a,c){pe.init_widget(this,a);this.cells=this.container.find(".Cell");this.cells.click(this.callback(this.pagination_cell_clicked));this.cells_container=this.container.find(".CellsContainer");this.current_page_number=0;this.pages=this.container.find(".Page");this.prev_button=this.container.find(".PrevButton");this.prev_button.click(this.callback(this.prev_button_clicked));this.next_button=this.container.find(".NextButton");this.next_button.click(this.callback(this.next_button_clicked));
this.scroll_duration=c||500;this.show_current_page()};pe.ScrollPaginator.prototype.pagination_cell_clicked=function(a){this.container.find(".Cell").removeClass("current");$(a.currentTarget).addClass("current");this.show_page(this.cells.index(a.currentTarget));return!1};pe.ScrollPaginator.prototype.prev_button_clicked=function(a){0===this.current_page_number?a&&a.stopPropagation():this.show_page(this.current_page_number-1)};
pe.ScrollPaginator.prototype.show_current_page=function(){this.cells.removeClass("current");$(this.cells[this.current_page_number]).addClass("current");$(this.container.find(".page_slide.current")).index()<this.current_page_number?this.container.find(".page_slide.current").addClass("move_left").delay(this.scroll_duration).queue(function(a){$(this).removeClass("move_left");a()}):this.container.find(".page_slide.current").addClass("move_right").delay(this.scroll_duration).queue(function(a){$(this).removeClass("move_right");
a()});this.pages.removeClass("current located_left located_right");$(this.pages[this.current_page_number]).addClass("current").removeClass("located_left located_right");$(this.pages[this.current_page_number]).prevUntil().addClass("located_left");$(this.pages[this.current_page_number]).nextUntil().addClass("located_right");this.next_button.toggleClass("disabled",this.current_page_number===this.pages.length-1);this.prev_button.toggleClass("disabled",0===this.current_page_number)};
pe.ScrollPaginator.prototype.show_page=function(a){this.current_page_number!=a&&(this.current_page_number=a,this.show_current_page())};pe.ScrollPaginator.prototype.next_button_clicked=function(a){this.current_page_number>=this.pages.length-1?a&&a.stopPropagation():this.show_page(this.current_page_number+1)};pe.PrefetcherModule=function(a){pe.init_widget(this,a);this.elements_with_prefetch_urls=this.container.find("[data-prefetch-url]");this.prefetch_data()};pe.PrefetcherModule.instantiate=function(){return new pe.PrefetcherModule($("body"))};
pe.PrefetcherModule.prototype.is_image_url=function(a){return/\.(jpe?g|gif|png)(\?.*)?$/i.test(a)};pe.PrefetcherModule.prototype.prefetch_ajax_request=function(a){$.getScript(a)};pe.PrefetcherModule.prototype.prefetch_data=function(){$.each(this.elements_with_prefetch_urls,this.callback(function(a,c){c=$(c);var b=c.data("prefetch-url");this.is_image_url(b)?this.prefetch_image(b):this.prefetch_ajax_request(b);c.removeAttr("data-prefetch-url")}))};
pe.PrefetcherModule.prototype.prefetch_image=function(a){this.container.append(pe.templatize('<div style="display:none;"><img src="{{url}}"></div>',{url:a}))};
pe.Expander=function(a,c){pe.init_widget(this,a);this.collapsed_height=c||72;this.content_container=this.container.find(".Content");this.content_height_container=this.container.find(".ContentHeight");this.trigger=this.container.find(".Button");this.content_height_container.height()>this.collapsed_height?this.trigger.click(this.callback(this.on_trigger_clicked)):this.trigger.parent().hide()};
pe.Expander.prototype.on_trigger_clicked=function(a){a=$(a.currentTarget);var c=this.content_container.attr("scrollHeight");this.content_container.height()<=this.collapsed_height?this.content_container.animate({height:c},1E3):this.content_container.animate({height:this.collapsed_height+"px"},1E3);this.trigger.hide();this.trigger.not(a).show()};
pe.PageSlideScroller=function(a,c){pe.init_widget(this,a);var b=$.extend({scroll_duration:1100,inactive_button_class:"loop_back",loop_scrolling:!1},c);this.scroller_container=this.container.find(".ScreensContainer");this.current_item=0;this.scroll_duration=b.scroll_duration;this.inactive_button_class=b.inactive_button_class;this.individual_items=this.scroller_container.find(".IndividualItem");this.single_item_width=b.single_item_width||this.individual_items.width()+37;this.items_count=this.individual_items.length;
this.next_button=this.container.find(".NextButton");this.previous_button=this.container.find(".PreviousButton");this.page_display_container=this.container.find(".PageDisplay");this.dots_container=$(this.page_display_container.selector+" .Dot");this.dots_container.live("click",this.callback(this.dot_clicked));this.page_display_format=b.page_display_format||pe.PageSlideScroller.dots_template(this.items_count);this.loop_scrolling=b.loop_scrolling;if(this.enable_buttons=1<this.items_count){this.next_button.click(this.callback(this.next_button_clicked));
this.previous_button.click(this.callback(this.previous_button_clicked));var b=this.individual_items.first(),d=this.individual_items.last();this.loop_scrolling&&(d.clone().insertBefore(b),b.clone().insertAfter(d));this.update_display();this.update_page_display()}else this.next_button.addClass("disabled"),this.previous_button.addClass("disabled")};
pe.PageSlideScroller.dots_template=function(a){a=Math.min(a,4);for(var c=["one","two","three","four"],b="<ul class='page_count slide{{current_item_number}}'>",d=0;d<=a-1;d++)b+="<li class='Dot dot "+c[d]+"' data-page_number='"+d+"'></li>";return b+"</ul>"};
pe.PageSlideScroller.prototype.animate_scrolling=function(a){this.enable_buttons=!1;this.current_item=a;this.update_page_display();this.scroller_container.animate({left:"-"+this.compute_scroll_offset(this.current_item)+"px"},this.scroll_duration,"cubicEaseInOut",this.callback(this.update_display))};
pe.PageSlideScroller.prototype.update_display=function(){this.current_item=this.constraint_page(this.current_item);this.previous_button.toggleClass(this.inactive_button_class,0>=this.current_item);this.next_button.toggleClass(this.inactive_button_class,this.current_item>=this.items_count-1);this.scroller_container.css("left","-"+this.compute_scroll_offset(this.current_item)+"px");this.enable_buttons=!0};
pe.PageSlideScroller.prototype.update_page_display=function(){var a=pe.templatize(this.page_display_format,{current_item_number:this.constraint_page(this.current_item)+1,items_count:this.items_count});this.page_display_container.html(a)};pe.PageSlideScroller.prototype.compute_scroll_offset=function(a){return(a+(this.loop_scrolling?1:0))*this.single_item_width};
pe.PageSlideScroller.prototype.constraint_page=function(a){return this.loop_scrolling?a>=this.items_count?0:0>a?this.items_count-1:a:Math.max(Math.min(a,this.items_count-1),0)};pe.PageSlideScroller.prototype.next_button_clicked=function(){if(this.enable_buttons){var a=this.current_item+1;a>=this.items_count&&(a=0);this.loop_scrolling||(a=Math.min(a,this.items_count-1));a!=this.current_item&&this.animate_scrolling(a)}};
pe.PageSlideScroller.prototype.previous_button_clicked=function(){if(this.enable_buttons){var a=this.current_item-1;0>a&&(a=this.items_count-1);this.loop_scrolling||(a=Math.max(a,0));a!=this.current_item&&this.animate_scrolling(a)}};pe.PageSlideScroller.prototype.dot_clicked=function(a){this.animate_scrolling($(a.currentTarget).data("page_number")-0)};
pe.init_multiline_titles=function(a){var c=a||"two_line_title",b,d;_.each($(".FlexibleHeight"),function(a){d=$(a).find(".FlexibleHeightItem");for(b=0;b<d.length;b++)if(a=$(d[b]),parseInt(a.css("line-height"),10)<a.height()){a.parents(".FlexibleHeight").addClass(c);break}})};
$(document).ready(function(){pe.init_page_framework();new pe.NeighborhoodGalleryMap($("#gal_map"),window.neighborhood.map_data,window.neighborhood.live_photos_count);0<$(".ThingsToDoScroller").length&&(pe.install_easing(),pe.things_to_do_scroller=new pe.PageSlideScroller($(".ThingsToDoScroller")),pe.help_module=new pe.HelpModule2);0<$(".PaginationScroller").length&&(pe.venues_scroller=new pe.ScrollPaginator($(".PaginationScroller")));pe.ChangeImageOnHover.instantiate_all("LinkWrapper");pe.PrefetcherModule.instantiate();
0<$(".AddToCalendarButton").length&&pe.init_calendar_buttons();0<$(".ReadMoreScroll").length&&(pe.expander=new pe.Expander($(".ReadMoreScroll"),60),0===$(".ThingsToDoScroller").length&&pe.expander.trigger.filter(":visible").click());$(".NeighborhoodDropdown").click(pe.neighborhood_dropdown_clicked);setTimeout(function(){pe.init_multiline_titles()},5)});pe.neighborhood_dropdown_clicked=function(){$(this).toggleClass("expanded")};
