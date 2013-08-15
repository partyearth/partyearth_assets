pe.map_tools={};pe.map_tools.array_contains_marker=function(a,c){var b=!1;$.each(a,function(a,e){if(e.object_id===c)return b=!0,!1});return b};
pe.map_tools.event_map_data=function(a){var c=[];$.each(a,function(a,d){$.each(d.locations,function(a,b){if(!b.latitude)return!0;var g=b.name,j=pe.map_tools.find_venue_by_name_in_array(c,g);j||(j={name:g,url:b.url,id:b.id,latitude:b.latitude,longitude:b.longitude,thumbnail:b.photo,small_pin:b.small_pin,ordering:d.ordering,favorite_id:d.favorite_id,city_id:d.city_id,events:[]},c.push(j));j.events.push(d)})});return c};
pe.map_tools.find_marker=function(a,c){var b=null;$.each(a,function(a,e){if(e.object_id===c)return b=e,!1});return b};pe.map_tools.find_markers_to_remove=function(a,c){return $.map(a,function(a){if(a.type===pe.Map.marker_types.USER_LOCATION)return!0;var d=pe.map_tools.get_marker_object(c,a);if(!d||!1===d.map_visibility||JSON.stringify(a.events)!==JSON.stringify(d.events))return a})};
pe.map_tools.find_objects_to_add=function(a,c){var b=[];$.each(c,function(c,e){pe.map_tools.markers_contain_venue(a,e)||b.push(e)});return b};pe.map_tools.find_venue_by_name_in_array=function(a,c){var b=null;$.each(a,function(a,e){if(e.name===c)return b=e,!1});return b};pe.map_tools.get_city_name_from_google_address_lookup_result=function(a){var c=null;$.each(a.address_components,function(a,d){var e=!1;$.each(d.types,function(a,b){"locality"===b&&(e=!0)});if(e)return c=d.long_name,!1});return c};
pe.map_tools.get_marker_object=function(a,c){var b=null;$.each(a,function(a,e){if(c.object_id===e.id)return b=e,!1});return b};pe.map_tools.markers_contain_venue=function(a,c){var b=!1;$.each(a,function(a,e){if(e.object_id===c.id&&JSON.stringify(e.events)===JSON.stringify(c.events))return b=!0,!1});return b};
pe.map_tools.marker_icon=function(a,c){var b="http://www.partyearth.com/assets/map/";switch(a){case pe.Map.marker_types.CITY:b+="city.png";break;case pe.Map.marker_types.CURRENT_OBJECT:b+="location.png";break;case pe.Map.marker_types.EVENT:b+=c.disabled?"event_transparent.png":"event.png";break;case pe.Map.marker_types.EVENT_HIGHLIGHTED:b+="event_highlighted.png";break;case pe.Map.marker_types.HOTSPOT:b+=c.disabled?"hotspot_transparent.png":"hotspot.png";break;case pe.Map.marker_types.LANDMARK:b+=
"landmark.png";break;case pe.Map.marker_types.OTHER_EVENT:b+="event_small.png";break;case pe.Map.marker_types.OTHER_VENUE:b+="venue_small.png";break;case pe.Map.marker_types.RUNNERS:b+="pamplona/runners.png";break;case pe.Map.marker_types.SPECTATORS:b+="pamplona/spectators.png";break;case pe.Map.marker_types.TIME:b+="pamplona/time.png";break;case pe.Map.marker_types.USER_LOCATION:b+="location.png";break;case pe.Map.marker_types.VENUE:b+=c.disabled?"venue_transparent.png":"venue.png"}return b};
pe.map_tools.numbered_marker_icon=function(a,c){var b=a.toLowerCase(),d=pe.map_tools.format_marker_id(String(c));return"http://cdn.partyearth.com/assets/map/pins/"+b+"/map/"+d+".png"};pe.map_tools.format_marker_id=function(a){return 3<a.length?"0000":"0000".substr(0,4-a.length)+a};pe.map_tools.objects_have_marker=function(a,c){var b=!1;$.each(a,function(a,e){if(c.object_id===e.id&&JSON.stringify(c.events)===JSON.stringify(e.events))return b=!0,!1});return b};
pe.map_tools.remove_marker_from_array=function(a,c){return $.map(a,function(a){return a.object_id===c.object_id?null:a})};pe.map_tools.venues_contain_venue=function(a,c){var b=!1;$.each(a,function(a,e){if(e.id===c)return b=!0,!1});return b};
pe.routes={map:{search_autocomplete:"{{city_id}}/search/autocomplete.ehtml/",api_user_list:"/api/user_lists/{{id}}",api_reorder_user_list:"/api/user_lists/{{id}}/reorder",api_user_list_favorites:"/api/user_lists/{{id}}/favorites",api_favorite:"/api/favorites/{{id}}",api_favorite_vote_yes:"/api/favorites/{{id}}/vote_yes",api_favorite_vote_huh:"/api/favorites/{{id}}/vote_huh",holiday:"/{{city_id}}/holidays/{{id}}-7",holiday_comments:"/services/holidays/{{id}}/comments",holiday_reactions:"/holidays/{{id}}/reactions/all",
new_holiday_reactions:"/holidays/{{id}}/reactions",holiday_calendar:"/{{city_id}}/holidays/{{id}}-7/calendar",holiday_photos:"/api/{{city_id}}/holidays/{{id}}/photos",holiday_map_venues:"/api/maps/holidays/{{slug}}/venues",holiday_map_events:"/api/maps/holidays/{{slug}}/events",venue_map_popup:"/venues/{{venue_id}}/map_popup",map_venues:"/api/cities/{{city_id}}/maps/venues",map_events:"/api/cities/{{city_id}}/maps/events",map_neighborhood_venues:"/api/maps/neighborhoods/{{neighborhood_id}}/venues",
map_neighborhood_events:"/api/maps/neighborhoods/{{neighborhood_id}}/events",map_neighborhood_endpoint_venues:"/api/maps/neighborhoods/{{neighborhood_id}}/endpoints/{{endpoint_id}}/venues",map_neighborhood_endpoint_events:"/api/maps/neighborhoods/{{neighborhood_id}}/endpoints/{{endpoint_id}}/events",user_list_map_venues:"/api/maps/users/{{user_id}}/lists/{{id}}/venues",user_list_map_events:"/api/maps/users/{{user_id}}/lists/{{id}}/events",create_button_user_dashboard_event:"/users/{{user_id}}/events-dashboard/{{id}}/create_button",
generate_button_user_dashboard_event:"/users/{{user_id}}/events-dashboard/{{id}}/generate_button",user_list:"/users/{{user_id}}/lists/{{id}}",user_lists:"/users/{{user_id}}/lists",user_comments:"/users/{{user_id}}/comments",user_reviews:"/users/{{user_id}}/reviews",list_items:"/lists/{{id}}/list_items",list_comments:"/services/lists/{{id}}/comments",list_reactions:"/lists/{{id}}/reactions/all",new_list_reactions:"/lists/{{id}}/reactions",user_personalities:"/users/{{id}}/personalities",user:"/users/{{id}}",
api_user:"/api/users/{{id}}",event:"/{{city_id}}/{{*endpoints}}/{{id}}-1",tickets:"/{{city_id}}/{{*endpoints}}/{{id}}-1/tickets",purchase_tickets:"/{{city_id}}/{{*endpoints}}/{{id}}-1/tickets/purchase",tickets_confirmation:"/{{city_id}}/{{*endpoints}}/{{id}}-1/tickets/confirmation",api_ticket_orders:"/api/ticket_orders",api_close_ticket_order:"/api/ticket_orders/{{id}}/close",api_ticket_orders_disable_pending:"/api/ticket_orders/disable_pending",api_ticket_orders_countdown_seconds:"/api/ticket_orders/countdown_seconds",
event_type_tags:"/api/tags/event_types",find_your_scene:"/services/find_your_scene.ehtml",missing_info:"/services/contact_messages/missing_info.ehtml",send_message:"/services/contact_messages/",subscription_select:"/services/subscriptions/web.ehtml",subscriptions_create:"/services/subscriptions/web",creeper_dialog:"/services/creeper.ehtml",creeper_subscribe:"/services/creeper/subscribe",creeper_close:"/services/creeper/close",character:"/pe-reviewers/{{id}}.ehtml",ask_party_earth:"/api/questions",
mobile_subscribe:"/services/subscriptions/mobile"}};pe.routes.build_path=function(a,c){var b=pe.routes.map[a],d=b.match(/\{\{\*(.+)\}\}/);_.each(d,function(a){c[a]&&(c[a]=c[a].join("/"))});b=b.replace(/\*/,"");c=c||{};return pe.routes.clean_url(pe.templatize(b,c))};pe.routes.clean_url=function(a){return("/"+a).replace(/#[^$\/]+/,"").replace(/(^[^?]+)([^:])\/\//,"$1$2/").replace(/\/\//g,"/")};
pe.routes.current_url_params=function(){var a=pe.routes.recognize_path(window.location.pathname);return a?a.params:{}};
pe.routes.recognize_path=function(a){a=pe.routes.clean_url(a);var c,b,d=_.find(_.keys(pe.routes.map),function(d){c=pe.routes.map[d];b=RegExp(c.replace(/\//g,"\\/").replace(/\{\{[^\{\}]+\}\}/g,"(.+)"));return b.test(a)});if(d){for(var e=_.map(c.match(/\{\{[^\}]+\}\}/g),function(a){return a.replace(/\{|\}/g,"")}),f=a.match(b).slice(1,99),g={params:{}},j=function(a){return!_.isEmpty(a)},h=0;h<e.length;h++)"*"==e[h][0]&&(e[h]=e[h].replace(/\*/g,""),f[h]=_.select(f[h].replace(/\*/g,"").split("/"),j)),
g.params[e[h]]=f[h];g.path_info={name:d,template:c};return g}return!1};pe.routes.Request=function(a,c,b){pe.routes.map[a]?(this.path=a,"object"!==typeof c&&(c={id:c}),this.params=c,this.callback=b):alert("This path is not registered in the routes map.")};pe.routes.Request.factory=function(a,c,b){return new pe.routes.Request(a,c,b)};pe.routes.Request.from_current_location=function(a,c,b){c=c||{};var d=pe.routes.current_url_params();return new pe.routes.Request(a,_.extend(d,c),b)};
pe.routes.Request.prototype.ajax=function(a,c){var b="function"===typeof c?c:this.callback;$.ajax({url:this.build_path(),data:this.params,type:a,success:b})};pe.routes.Request.prototype.build_path=function(){return pe.routes.build_path(this.path,this.params)};pe.routes.Request.prototype.get=function(a){this.ajax("GET",a)};pe.routes.Request.prototype.post=function(a){this.ajax("POST",a)};
pe.Map=function(a,c,b,d,e,f){pe.init_widget(this,a);f=f||{};this.map=new google.maps.Map(a[0],{zoom:d,center:new google.maps.LatLng(c,b),mapTypeId:e,minZoom:2,scrollwheel:!1,mapTypeControlOptions:{style:google.maps.MapTypeControlStyle.DROPDOWN_MENU},navigationControlOptions:{style:google.maps.NavigationControlStyle.SMALL}});this.bounds=new google.maps.LatLngBounds;google.maps.event.addListener(this.map,"zoom_changed",this.callback(this.zoom_changed));google.maps.event.addListener(this.map,"dragend",
this.callback(this.dragend));c=new google.maps.OverlayView;c.draw=function(){};c.setMap(this.map);this.overlay=c;c=$(".MapTooltip");0===c.length&&(c=$('<div class="map_tooltip MapTooltip"></div>'),a.parent().append(c));this.map_tooltip=c;c=$(".MapPopup");0===c.length&&(c=$('<div class="map_popup MapPopup"></div>'),a.parent().append(c));this.map_popup=c;this.markers={};this.markers.CITY=[];this.markers.CURRENT_OBJECT=[];this.markers.EVENT=[];this.markers.LANDMARK=[];this.markers.USER_LOCATION=[];this.markers.VENUE=
[];this.current_venue_ids=[];this.global_zoom_level_limit=8;this.current_zoom_level=d;this.zoom_state=null;this.zoom_changed();this.clicked_marker=null;this.default_city=f.city;this.show_tooltips=!0};
pe.Map.events={CITY_CHANGED:"Map_CITY_CHANGED",CITY_MARKER_CLICKED:"Map_CITY_MARKER_CLICKED",DRAGEND:"Map_DRAGEND",MARKER_CLICKED:"Map_MARKER_CLICKED",MARKER_HOVERED:"Map_MARKER_HOVERED",MARKER_BLURRED:"Map_MARKER_BLURRED",LANDMARK_MARKER_CLICKED:"Map_LANDMARK_MARKER_CLICKED",ZOOM_LEVEL_CHANGED:"Map_ZOOM_LEVEL_CHANGED",ZOOM_STATE_CHANGED:"Map_ZOOM_STATE_CHANGED"};
pe.Map.marker_types={CITY:"CITY",CURRENT_OBJECT:"CURRENT_OBJECT",EVENT:"EVENT",EVENT_HIGHLIGHTED:"EVENT_HIGHLIGHTED",HOTSPOT:"HOTSPOT",LANDMARK:"LANDMARK",OTHER_EVENT:"OTHER_EVENT",OTHER_VENUE:"OTHER_VENUE",RUNNERS:"Tip for Runners",SPECTATORS:"Tip for Spectators",TIME:"Pamplona Run Time",USER_LOCATION:"USER_LOCATION",VENUE:"VENUE"};pe.Map.zoom_states={GLOBAL:"GLOBAL",LOCAL:"LOCAL"};
pe.Map.prototype.add_marker=function(a){var c=a.small_pin?500:1E3;a.ordering&&(c-=a.ordering);var c={position:new google.maps.LatLng(a.latitude,a.longitude),map:this.map,icon:a.icon,cursor:this.show_tooltips?"pointer":"https://maps.gstatic.com/mapfiles/openhand_8_8.cur",zIndex:a.zIndex||c},b=new google.maps.Marker(c);b.bubble_html=a.bubble_html;b.popup_html=a.popup_html;b.type=a.type;b.object_id=a.object_id;b.object_url=a.object_url;b.city_id=a.city_id;b.events=a.events;b.is_visible=a.is_visible;
b.small_pin=a.small_pin;b.ordering=a.ordering;b.favorite_id=a.favorite_id;var d=this;d.show_tooltips&&google.maps.event.addListener(b,"click",function(){d.marker_clicked(b);d.fire_event(pe.Map.events.MARKER_CLICKED,this)});d.show_tooltips&&google.maps.event.addListener(b,"mouseover",function(){d.marker_hovered(b);d.fire_event(pe.Map.events.MARKER_HOVERED,this)});google.maps.event.addListener(b,"mouseout",function(){d.marker_blurred(b);d.fire_event(pe.Map.events.MARKER_BLURRED,this)});this.markers[a.type].push(b);
return b};pe.Map.prototype.centrize=function(){var a=this.map.getCenter();google.maps.event.trigger(this.map,"resize");this.map.setCenter(a)};pe.Map.prototype.centrize_bounds=function(){var a=this.bounds.getCenter();google.maps.event.trigger(this.map,"resize");this.map.setCenter(a)};pe.Map.prototype.centrize_to_marker=function(a){if(a=a||_.sortBy(_.union(this.markers.VENUE,this.markers.EVENT),function(a){return a.ordering})[0])a=a.position,google.maps.event.trigger(this.map,"resize"),this.map.setCenter(a)};
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
pe.Map.prototype.set_current_event=function(a){a=pe.map_tools.event_map_data([a]);a=pe.map_tools.find_objects_to_add(this.markers.EVENT,a);$.each(a,this.callback(function(a,b){this.add_marker({type:pe.Map.marker_types.CURRENT_OBJECT,icon:pe.map_tools.marker_icon(pe.Map.marker_types.CURRENT_OBJECT,b),zIndex:1500,object_id:b.id,object_url:b.url,latitude:b.latitude,longitude:b.longitude,bubble_html:this.bubble_template_event(b),city_id:b.city_id,events:b.events});this.current_venue_ids.push(b.id)}))};
pe.Map.prototype.set_current_venue=function(a){this.add_marker({type:pe.Map.marker_types.CURRENT_OBJECT,icon:pe.map_tools.marker_icon(pe.Map.marker_types.CURRENT_OBJECT,a),zIndex:2E3,object_id:a.id,object_url:a.url,latitude:a.latitude,longitude:a.longitude,bubble_html:this.bubble_template_venue(a),city_id:a.city_id});this.current_venue_ids.push(a.id)};
pe.Map.prototype.set_events=function(a,c){var b=pe.map_tools.event_map_data(a),d=pe.map_tools.find_markers_to_remove(this.markers.EVENT,b);$.each(d,this.callback(function(a,b){-1<this.current_venue_ids.indexOf(b.object_id)||this.remove_marker(b)}));b=pe.map_tools.find_objects_to_add(this.markers.EVENT,b);$.each(b,this.callback(function(a,b){var d=b.small_pin?pe.Map.marker_types.OTHER_EVENT:pe.Map.marker_types.EVENT,d=c?pe.map_tools.numbered_marker_icon("event",b.ordering):pe.map_tools.marker_icon(d,
b);-1<this.current_venue_ids.indexOf(b.id)||(d=this.add_marker({small_pin:b.small_pin,type:pe.Map.marker_types.EVENT,icon:d,object_id:b.id,object_url:b.url,latitude:b.latitude,longitude:b.longitude,bubble_html:this.bubble_template_event(b),city_id:b.city_id,events:b.events,favorite_id:b.favorite_id,ordering:b.ordering}),this.bounds.extend(d.position))}))};
pe.Map.prototype.set_landmarks=function(a){$.each(this.markers.LANDMARK,this.callback(function(a,b){this.remove_marker(b)}));$.each(a,this.callback(function(a,b){0===b.type&&b.map_visibility&&this.add_marker({type:pe.Map.marker_types.LANDMARK,icon:pe.map_tools.marker_icon(pe.Map.marker_types.LANDMARK,b),object_id:b.id,object_url:b.url,latitude:b.latitude,longitude:b.longitude,bubble_html:this.bubble_template_landmark(b),popup_html:this.popup_template_landmark(b),marker_clicked:this.callback(this.landmark_marker_clicked)})}))};
pe.Map.prototype.set_venues=function(a,c){var b=pe.map_tools.find_markers_to_remove(this.markers.VENUE,a);$.each(b,this.callback(function(a,b){-1<this.current_venue_ids.indexOf(b.object_id)||this.remove_marker(b)}));b=pe.map_tools.find_objects_to_add(this.markers.VENUE,a);$.each(b,this.callback(function(a,b){if(!(-1<this.current_venue_ids.indexOf(b.id))){var f=this.bubble_template_venue(b),g=b.small_pin?pe.Map.marker_types.OTHER_VENUE:pe.Map.marker_types.VENUE,g=c?pe.map_tools.numbered_marker_icon("venue",
b.ordering):pe.map_tools.marker_icon(g,b),f=this.add_marker({small_pin:b.small_pin,type:pe.Map.marker_types.VENUE,icon:g,object_id:b.id,object_url:b.url,latitude:b.latitude,longitude:b.longitude,is_visible:b.is_visible,bubble_html:f,city_id:b.city_id,favorite_id:b.favorite_id,ordering:b.ordering});this.bounds.extend(f.position)}}))};pe.Map.prototype.set_view=function(a,c,b){this.map.setCenter(new google.maps.LatLng(a,c));a=parseInt(b,10);isNaN(a)||(this.map.setZoom(a),this.zoom_changed())};
pe.Map.prototype.show_popup=function(a){this.map_tooltip.hide();this.map_popup.hide();(this.default_city===a.city_id?this.load_venue_popup:this.load_default_venue_popup)(a,this.callback(function(c){this.map_popup.html(c);(new pe.CloseButton(this.map_popup,pe.CloseButton.close_methods.HIDE)).bind_event(pe.CloseButton.events.CLOSED,this.callback(function(){this.clicked_marker=null}));this.set_popup_tooltip_div_position(this.map_popup,a);this.map_popup.show()}))};
pe.Map.prototype.switch_to_global_view=function(){this.zoom_state=pe.Map.zoom_states.GLOBAL;this.map.setMapTypeId(google.maps.MapTypeId.TERRAIN);pe.ajax_loader.cities.load(this.callback(function(a){this.set_cities(a);this.set_venues([]);this.set_events([])}));this.fire_event(pe.Map.events.ZOOM_STATE_CHANGED,this.zoom_state)};
pe.Map.prototype.switch_to_local_view=function(a){this.zoom_state=pe.Map.zoom_states.LOCAL;this.map.setMapTypeId(google.maps.MapTypeId.ROADMAP);setTimeout(this.callback(function(){var c=this.map.getBounds();a===this.global_zoom_level_limit&&pe.ajax_loader.locate_city.load({north:c.getNorthEast().lat(),south:c.getSouthWest().lat(),east:c.getNorthEast().lng(),west:c.getSouthWest().lng()},this.callback(function(a){1===a.length&&this.load_default_map_objects(a[0].id);this.fire_event(pe.Map.events.ZOOM_STATE_CHANGED,
this.zoom_state)}))}),0)};pe.Map.prototype.load_default_map_objects=function(a){var c=this.default_city===a?this.load_events:this.load_default_events;(this.default_city===a?this.load_venues:this.load_default_venues)(a,this.callback(function(b){this.set_venues(b);this.fire_event(pe.Map.events.CITY_CHANGED,a);this.set_cities([])}));c(a,this.callback(function(a){this.set_events(a)}))};pe.Map.prototype.load_default_venues=function(a,c){pe.routes.Request.factory("map_venues",{city_id:a}).get(function(a){c(pe.json_expander.expand_venues(a))})};
pe.Map.prototype.load_default_events=function(a,c){pe.routes.Request.factory("map_events",{city_id:a}).get(function(a){c(pe.json_expander.expand_events(a))})};pe.Map.prototype.load_default_venue_popup=function(a,c){pe.routes.Request.factory("venue_map_popup",{venue_id:a.object_id}).get(c)};pe.Map.prototype.load_venues=function(a,c){pe.routes.Request.factory("map_venues",{city_id:a}).get(function(a){c(pe.json_expander.expand_venues(a))})};
pe.Map.prototype.load_events=function(a,c){pe.routes.Request.factory("map_events",{city_id:a}).get(function(a){c(pe.json_expander.expand_events(a))})};pe.Map.prototype.load_venue_popup=function(a,c){pe.routes.Request.factory("venue_map_popup",{venue_id:a.object_id}).get(c)};
pe.Map.prototype.dragend=function(){this.clicked_marker&&(this.map.getBounds().contains(this.clicked_marker.getPosition())?this.set_popup_tooltip_div_position(this.map_popup,this.clicked_marker):(this.map_popup.hide(),this.clicked_marker=null))};
pe.Map.prototype.zoom_changed=function(){this.map_popup.hide();var a=this.map.getZoom();a<this.global_zoom_level_limit&&this.zoom_state!==pe.Map.zoom_states.GLOBAL&&this.switch_to_global_view();a>=this.global_zoom_level_limit&&this.zoom_state!==pe.Map.zoom_states.LOCAL&&this.switch_to_local_view(a);this.fire_event(pe.Map.events.ZOOM_LEVEL_CHANGED,a)};pe.mouse_position={};pe.mouse_position.x=0;pe.mouse_position.y=0;
pe.mouse_position.on_mouse_move=function(a){pe.mouse_position.x=a.pageX;pe.mouse_position.y=a.pageY};pe.mouse_position.track=function(){$("body").mousemove(pe.mouse_position.on_mouse_move)};pe.RatingsModule=function(a,c,b,d){pe.init_widget(this,a);this.container.html(this.html(c,d));this.container.addClass(d?"with_image":"no_image");this.rating_div=this.container.find(".StarRating");this.rating_div.html(this.render_rating(c,b))};
pe.RatingsModule.prototype.html=function(a,c){var b=a.toLowerCase();return c?'<a target="_blank" title="'+pe.link_title_for_reviewer(a)+'" href="/pe-reviewers/'+b+'">  <div class="figure '+b+' ratings_sprite"></div></a><div class="StarRating big_stars"></div><h3 class="name '+b+' tab_text">  <strong>'+a+"</strong></h3>":'<div class="StarRating Stars small_stars ratings_sprite" title="'+pe.link_title_for_reviewer(a)+'"></div>'};
pe.RatingsModule.prototype.render_rating=function(a,c){for(var b=[],d=a.toLowerCase(),e=1;4>=e;e++)b[e]='<div class="star '+(e<=c?d:"disabled")+'"></div>';return b.join("\n")};
pe.SearchResultCharacterRatingModule=function(a,c){pe.init_widget(this,a);this.container.html(this.html());var b=this.container.find(".LucasRating"),d=c.rating_lucas,e=this.container.find(".AdrianaRating"),f=c.rating_adriana,g=this.container.find(".JonahRating"),j=c.rating_jonah,h=this.container.find(".EmmaRating"),k=c.rating_emma;void 0!==d&&new pe.RatingsModule(b,"Lucas",d,!1);void 0!==f&&new pe.RatingsModule(e,"Adriana",f,!1);void 0!==j&&new pe.RatingsModule(g,"Jonah",j,!1);void 0!==k&&new pe.RatingsModule(h,
"Emma",k,!1)};
pe.SearchResultCharacterRatingModule.prototype.html=function(){return'<a href="/pe-reviewers/lucas" target="_blank" title="'+pe.link_title_for_reviewer("Lucas")+'">  <div class="char_rating_small LucasRating"></div></a><a href="/pe-reviewers/adriana" target="_blank" title="'+pe.link_title_for_reviewer("Adriana")+'">  <div class="char_rating_small AdrianaRating"></div></a><a href="/pe-reviewers/jonah" target="_blank" title="'+pe.link_title_for_reviewer("Jonah")+'">  <div class="char_rating_small JonahRating"></div></a><a href="/pe-reviewers/emma" target="_blank" title="'+pe.link_title_for_reviewer("Emma")+
'">  <div class="char_rating_small EmmaRating"></div></a>'};pe.VenueSearcher=function(){pe.init_widget(this,null)};
pe.VenueSearcher.prototype.get_matching_venues=function(a,c){!a.has_filters("city")||"all"===a.get_filter("city")?c([]):pe.ajax_loader.city_venues.load({city_id:a.get_filter("city")},function(b){$.each(b,function(a,b){b.disabled=null});b=pe.VenueSearcher.filter_by_result_types(b,a);b=pe.VenueSearcher.filter_by_neighborhood(b,a);b=pe.VenueSearcher.filter_by_character(b,a);b=pe.VenueSearcher.filter_by_venue_types(b,a);b=pe.VenueSearcher.filter_by_tags(b,a);b=pe.VenueSearcher.filter_by_venue_name(b,
a);b=pe.VenueSearcher.filter_by_fulltext(b,a);b=pe.VenueSearcher.filter_by_performer_name(b,a);c(b)})};pe.VenueSearcher.filter_by_city=function(a,c){var b=c.get_filter("city");return!b?a:$.map(a,function(a){if(a.city===b)return a})};
pe.VenueSearcher.filter_by_character=function(a,c){var b=c.get_filter("characters");if(!b||4===b.length)return a;if(0===b.length)return[];var d=[];-1<b.indexOf("adriana")&&$.each(a,function(a,b){3<=b.rating_adriana&&!pe.map_tools.venues_contain_venue(d,b.id)&&d.push(b)});-1<b.indexOf("lucas")&&$.each(a,function(a,b){3<=b.rating_lucas&&!pe.map_tools.venues_contain_venue(d,b.id)&&d.push(b)});-1<b.indexOf("jonah")&&$.each(a,function(a,b){3<=b.rating_jonah&&!pe.map_tools.venues_contain_venue(d,b.id)&&
d.push(b)});-1<b.indexOf("emma")&&$.each(a,function(a,b){3<=b.rating_emma&&!pe.map_tools.venues_contain_venue(d,b.id)&&d.push(b)});return d};pe.VenueSearcher.filter_by_fulltext=function(a,c){var b=c.get_filter("fulltext");return!b?a:$.map(a,function(a){if(pe.text_contains_query(pe.venue_search_text(a),b))return a})};pe.VenueSearcher.filter_by_neighborhood=function(a,c){var b=c.get_filter("neighborhood");if(!b||"all"===b)return a;$.each(a,function(a,c){c.neighborhood_id!==b&&(c.disabled=!0)});return a};
pe.VenueSearcher.filter_by_performer_name=function(a,c){if(!c.get_filter("performer_name"))return a;$.each(a,function(a,c){c.disabled=!0});return a};pe.VenueSearcher.filter_by_result_types=function(a,c){var b=c.get_filter("result_types");if(!b||-1<b.indexOf("venues"))return a;if(-1<b.indexOf("hotspots")){var d=new Date(c.get_filter("start_date_or_default")),e=(b=c.get_filter("end_date"))?new Date(b):d;return $.map(a,function(a){if(pe.VenueSearcher.venue_is_hotspot_in_date_range(a,d,e))return a})}return[]};
pe.VenueSearcher.filter_by_tags=function(a,c){var b=c.get_filter("tags");if(!b)return a;var b=pe.VenueSearcher.remove_event_tags(b),d=pe.structured_tags_as_flat_array(b);return $.map(a,function(a){if(pe.array_contains(a.tags,d))return a})};pe.VenueSearcher.filter_by_venue_name=function(a,c){var b=c.get_filter("venue_name");return!b?a:$.map(a,function(a){if(-1<b.indexOf(a.name))return a})};
pe.VenueSearcher.filter_by_venue_types=function(a,c){var b=c.get_filter("Venue Type");return!b||"all"===b?a:$.grep(a,function(a){return pe.array_match(b,a.all_venue_types)})};pe.VenueSearcher.find_used_tags=function(a,c){var b={};$.each(a,function(a,e){$.each(c,function(c,g){$.each(e,function(c,e){-1<g.tags.indexOf(c)&&(b[a]||(b[a]={}),b[a][c]||(b[a][c]=[]));$.each(e,function(e,f){-1<g.tags.indexOf(f)&&(b[a]||(b[a]={}),b[a][c]||(b[a][c]=[]),b[a][c].push(f))})})})});return b};
pe.VenueSearcher.mark_venue_map_visibility=function(a,c){var b=c.get_filter("result_types"),d=b?-1<b.indexOf("venues"):!0,e=b?-1<b.indexOf("hotspots"):!0;$.each(a,function(a,b){b.map_icon=b.hotspot?pe.Map.marker_types.HOTSPOT:pe.Map.marker_types.VENUE;d?(b.map_visibility=!0,b.hotspot&&!e&&(b.map_icon=pe.Map.marker_types.VENUE)):b.map_visibility=!(!b.hotspot||!e)})};
pe.VenueSearcher.get_day_of_week_range=function(a,c){if(6<pe.days_between_dates(a,c))return[0,1,2,3,4,5,6];if(!c||a===c)return[a.getDay()];var b=[],d=a.getDay(),e=c.getDay();b.push(d);do d+=1,6<d&&(d=0),b.push(d);while(d!==e);return b};pe.VenueSearcher.remove_event_tags=function(a){var c={};$.each(a,function(a,d){"Event Type"!==a&&(c[a]=d)});return c};
pe.VenueSearcher.venue_is_hotspot_in_date_range=function(a,c,b){if(0===c-b)return pe.VenueSearcher.venue_is_hotspot_on_date(a,c.getDay());c=pe.VenueSearcher.get_day_of_week_range(c,b);return pe.array_match(a.hotspot_days,c)};pe.VenueSearcher.venue_is_hotspot_on_date=function(a,c){return-1<a.hotspot_days.indexOf(c)};
$(document).ready(function(){pe.map=new pe.Map($(".map"),window.map_data.latitude,window.map_data.longitude,window.map_data.default_zoom_level,google.maps.MapTypeId.ROADMAP,{});pe.map.set_venues(pe.json_expander.expand_venues(window.map_venues));pe.input_lat=pe.load($("#neighborhood_latitude"));pe.input_lng=pe.load($("#neighborhood_longitude"));pe.input_zoom=pe.load($("#neighborhood_default_zoom_level"));google.maps.event.addListener(pe.map.map,"zoom_changed",pe.map_changed);google.maps.event.addListener(pe.map.map,
"dragend",pe.map_changed);pe.init_page_framework()});pe.map_changed=function(){var a=pe.map.map.getCenter();pe.input_lat.val(a.lat().toString());pe.input_lng.val(a.lng().toString());pe.input_zoom.val(pe.map.map.getZoom().toString())};
