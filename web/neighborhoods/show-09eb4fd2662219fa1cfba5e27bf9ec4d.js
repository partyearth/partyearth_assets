pe.init_calendar_buttons=function(){new pe.AddToCalendarButton};pe.AddToCalendarButton=function(){pe.init_widget(this,null);$(".AddToCalendarButton").live("click",this.callback(this.show_dialog))};pe.AddToCalendarButton.prototype.close_dialog=function(){};
pe.AddToCalendarButton.prototype.show_dialog=function(a){var b=$('<div title="Add to your calendar">'),c=function(){b.empty();b.dialog("destroy")};b.dialog({modal:!0,show:!1,close:c});b.html('<div style="margin:0 auto; width: 80px;"><img src="/assets/content_bg/spinner.gif"/></div>');a=$(a.currentTarget);pe.ajax_loader.add_to_calendar_dialog.load({event_id:a.data("event_id"),date:a.data("date")},function(a){b.html(a);b.find("a").click(c)});return!1};
pe.HelpModule2=function(){var a=$(".HelperModule");a.length&&(pe.init_widget(this,a),this.container.live("click",this.callback(this.helper_module_div_clicked)),this.container.live("hover",this.callback(this.helper_module_div_hovered)),this.active_popup=null)};pe.HelpModule2.prototype.close_button_clicked=function(){this.destroy_active_popup()};pe.HelpModule2.prototype.create_popup=function(a,b){this.active_popup=$(b);a.append(this.active_popup);$("body").bind("click",this.callback(this.close_button_clicked))};
pe.HelpModule2.prototype.destroy_active_popup=function(){$("body").unbind("click");this.active_popup.remove();this.active_popup=null};pe.HelpModule2.prototype.helper_module_div_hovered=function(a){a=$(a.target);(a=(a.hasClass("HelperModule")?a:a.closest(".HelperModule")).data("page-id"))&&pe.ajax_loader.help_page.load({page_id:a,timestamp:pe.pages_timestamp()},this.callback(function(){}))};
pe.HelpModule2.prototype.helper_module_div_clicked=function(a){var b=$(a.target),c;c=b.hasClass("HelperModule")?b:b.closest(".HelperModule");this.active_popup&&this.destroy_active_popup();(b=c.data("page-id"))&&pe.ajax_loader.help_page.load({page_id:b,timestamp:pe.pages_timestamp()},this.callback(function(a){this.create_popup(c,this.popup_html(a))}));a.stopPropagation()};
pe.HelpModule2.prototype.popup_html=function(a){return pe.templatize('<div class="DialogBox dialog_box"><div class="dialog_content_wrapper clearfix"><div class="CloseButton close_btn" title="Close"></div><div class="dialog_img"></div><div class="dialog_content"> <span class="title">{{title}}:&nbsp;&nbsp;</span> {{content}}</div></div></div><div class="dialog_point"><div class="dialog_inner_point"></div></div>',a)};
pe.ChangeImageOnHover=function(a,b){pe.init_widget(this,a);this.image_container=this.container.find(".ImageContainer");this.link_parent_class=b||null;this.include_caption=this.container.data("include-caption")||!1;this.object_links=this.container.find(".HoverLinkToChange");this.object_links.mouseover(this.callback(this.object_link_hovered));var c=b?this.container.find("."+b):[];this.link_wrappers=0<c.length?c:this.object_links.parent()};
pe.ChangeImageOnHover.prototype.image_html=function(a){var b='<a href="{{object_url}}" title="{{link_title}}" class="thumbnail_link"><img src="{{image_url}}" alt="{{alt_tag}}"></a>';this.include_caption&&(b+='<p class="name"><span class="date">{{link_prefix}}</span><a href="{{object_url}}">{{image_caption}}</a></p>');a={object_url:a.attr("href"),image_url:a.data("image-url"),link_title:a.data("title")||"",alt_tag:a.data("image-alt-tag")||"",link_prefix:a.data("link-prefix")||"",image_caption:a.html()};
return pe.templatize(b,a)};pe.ChangeImageOnHover.instantiate_all=function(a){return $.map($(".ChangeImageOnHoverContainer"),function(b){return new pe.ChangeImageOnHover($(b),a)})};pe.ChangeImageOnHover.prototype.object_link_hovered=function(a){a=$(a.target);this.object_links.removeClass("selected");this.link_wrappers.removeClass("selected");a.addClass("selected");this.link_wrapper(a).addClass("selected");this.image_container.html(this.image_html(a));pe.convert_to_rounded_corners()};
pe.ChangeImageOnHover.prototype.link_wrapper=function(a){return this.link_parent_class?a.closest("."+this.link_parent_class):a.parent()};pe.map_tools={};pe.map_tools.array_contains_marker=function(a,b){var c=!1;$.each(a,function(a,d){if(d.object_id===b)return c=!0,!1});return c};
pe.map_tools.event_map_data=function(a){var b=[];$.each(a,function(a,e){$.each(e.locations,function(a,c){if(!c.latitude)return!0;var g=c.name,i=pe.map_tools.find_venue_by_name_in_array(b,g);i||(i={name:g,address:c.address,url:c.url,id:c.id,latitude:c.latitude,longitude:c.longitude,thumbnail:c.photo,small_pin:c.small_pin,events:[]},b.push(i));i.events.push(e)})});return b};pe.map_tools.find_marker=function(a,b){var c=null;$.each(a,function(a,d){if(d.object_id===b)return c=d,!1});return c};
pe.map_tools.find_markers_to_remove=function(a,b){return $.map(a,function(a){if(a.type===pe.Map.marker_types.USER_LOCATION)return!0;var e=pe.map_tools.get_marker_object(b,a);if(!e||!1===e.map_visibility||JSON.stringify(a.events)!==JSON.stringify(e.events))return a})};pe.map_tools.find_objects_to_add=function(a,b){var c=[];$.each(b,function(b,d){pe.map_tools.markers_contain_venue(a,d)||c.push(d)});return c};
pe.map_tools.find_venue_by_name_in_array=function(a,b){var c=null;$.each(a,function(a,d){if(d.name===b)return c=d,!1});return c};pe.map_tools.get_city_name_from_google_address_lookup_result=function(a){var b=null;$.each(a.address_components,function(a,e){var d=!1;$.each(e.types,function(a,c){"locality"===c&&(d=!0)});if(d)return b=e.long_name,!1});return b};pe.map_tools.get_marker_object=function(a,b){var c=null;$.each(a,function(a,d){if(b.object_id===d.id)return c=d,!1});return c};
pe.map_tools.markers_contain_venue=function(a,b){var c=!1;$.each(a,function(a,d){if(d.object_id===b.id&&JSON.stringify(d.events)===JSON.stringify(b.events))return c=!0,!1});return c};
pe.map_tools.marker_icon=function(a,b){var c="http://www.partyearth.com/assets/map/";switch(a){case pe.Map.marker_types.CITY:c+="city.png";break;case pe.Map.marker_types.CURRENT_OBJECT:c+="location.png";break;case pe.Map.marker_types.EVENT:c+=b.disabled?"event_transparent.png":"event.png";break;case pe.Map.marker_types.EVENT_HIGHLIGHTED:c+="event_highlighted.png";break;case pe.Map.marker_types.HOTSPOT:c+=b.disabled?"hotspot_transparent.png":"hotspot.png";break;case pe.Map.marker_types.LANDMARK:c+=
"landmark.png";break;case pe.Map.marker_types.OTHER_EVENT:c+="event_small.png";break;case pe.Map.marker_types.OTHER_VENUE:c+="venue_small.png";break;case pe.Map.marker_types.RUNNERS:c+="pamplona/runners.png";break;case pe.Map.marker_types.SPECTATORS:c+="pamplona/spectators.png";break;case pe.Map.marker_types.TIME:c+="pamplona/time.png";break;case pe.Map.marker_types.USER_LOCATION:c+="location.png";break;case pe.Map.marker_types.VENUE:c+=b.disabled?"venue_transparent.png":"venue.png"}return c};
pe.map_tools.objects_have_marker=function(a,b){var c=!1;$.each(a,function(a,d){if(b.object_id===d.id&&JSON.stringify(b.events)===JSON.stringify(d.events))return c=!0,!1});return c};pe.map_tools.remove_marker_from_array=function(a,b){return $.map(a,function(a){return a.object_id===b.object_id?null:a})};pe.map_tools.venues_contain_venue=function(a,b){var c=!1;$.each(a,function(a,d){if(d.id===b)return c=!0,!1});return c};
pe.Map=function(a,b,c,e,d){pe.init_widget(this,a);this.map=new google.maps.Map(a[0],{zoom:e,center:new google.maps.LatLng(b,c),mapTypeId:d,scrollwheel:!1,mapTypeControlOptions:{style:google.maps.MapTypeControlStyle.DROPDOWN_MENU},navigationControlOptions:{style:google.maps.NavigationControlStyle.SMALL}});google.maps.event.addListener(this.map,"zoom_changed",this.callback(this.zoom_changed));a=new google.maps.OverlayView;a.draw=function(){};a.setMap(this.map);this.overlay=a;this.markers={};this.markers.CITY=
[];this.markers.CURRENT_OBJECT=[];this.markers.EVENT=[];this.markers.LANDMARK=[];this.markers.USER_LOCATION=[];this.markers.VENUE=[];this.current_venue_ids=[];this.infowindow=null;this.global_zoom_level_limit=8;this.current_zoom_level=e;this.zoom_state=null;this.page=this.get_page();this.zoom_changed();this.clicked_marker=null};
pe.Map.events={CITY_CHANGED:"Map_CITY_CHANGED",CITY_MARKER_CLICKED:"Map_CITY_MARKER_CLICKED",MARKER_CLICKED:"Map_MARKER_CLICKED",MARKER_HOVERED:"Map_MARKER_HOVERED",MARKER_BLURRED:"Map_MARKER_BLURRED",LANDMARK_MARKER_CLICKED:"Map_LANDMARK_MARKER_CLICKED",ZOOM_LEVEL_CHANGED:"Map_ZOOM_LEVEL_CHANGED",ZOOM_STATE_CHANGED:"Map_ZOOM_STATE_CHANGED"};
pe.Map.marker_types={CITY:"CITY",CURRENT_OBJECT:"CURRENT_OBJECT",EVENT:"EVENT",EVENT_HIGHLIGHTED:"EVENT_HIGHLIGHTED",HOTSPOT:"HOTSPOT",LANDMARK:"LANDMARK",OTHER_EVENT:"OTHER_EVENT",OTHER_VENUE:"OTHER_VENUE",RUNNERS:"Tip for Runners",SPECTATORS:"Tip for Spectators",TIME:"Pamplona Run Time",USER_LOCATION:"USER_LOCATION",VENUE:"VENUE"};pe.Map.pages={SEARCH:"SEARCH"};pe.Map.zoom_states={GLOBAL:"GLOBAL",LOCAL:"LOCAL"};
pe.Map.prototype.add_marker=function(a){var b={position:new google.maps.LatLng(a.latitude,a.longitude),map:this.map,icon:a.icon,cursor:"pointer",zIndex:a.zIndex||(a.small_pin?499:500)},b=new google.maps.Marker(b);b.bubble_html=a.bubble_html;b.popup_html=a.popup_html;b.type=a.type;b.object_id=a.object_id;b.object_url=a.object_url;b.neighborhood=a.neighborhood;b.events=a.events;b.ratings=a.ratings;b.is_visible=a.is_visible;b.small_pin=a.small_pin;var c=this;google.maps.event.addListener(b,"click",function(){c.fire_event(pe.Map.events.MARKER_CLICKED,
this)});google.maps.event.addListener(b,"mouseover",function(){c.fire_event(pe.Map.events.MARKER_HOVERED,this)});google.maps.event.addListener(b,"mouseout",function(){c.fire_event(pe.Map.events.MARKER_BLURRED,this)});this.markers[a.type].push(b)};pe.Map.prototype.marker_coordinates_weights=function(a){return a.small_pin?{x:27,y:40}:{x:25,y:50}};pe.Map.prototype.marker_position_on_map=function(a){var b=this.overlay.getProjection(),a=a.getPosition();return b.fromLatLngToContainerPixel(a)};
pe.Map.prototype.marker_position_on_page=function(a){a=this.marker_position_on_map(a);return{x:this.container.offset().left+a.x,y:this.container.offset().top+a.y}};pe.Map.prototype.bubble_template_city=function(a){return pe.templatize('<div class="bubble_text"><span class="bubble_headline">{{name}}</span></div>',a)};
pe.Map.prototype.bubble_template_event=function(a){if(a.events){var b=a.events[0];b.formatted_start_date=b.start_date?$.datepicker.formatDate("M d",new Date(b.start_date)):"";a.events_text=pe.templatize('<li><span class="event_date">{{formatted_start_date}}</span><a href="{{url}}" class="blue_text">{{name}}</a></li>',b)}return pe.templatize('<div class="map_tooltip_content"><div class="map_popup_tip"><div class="map_popup_tip_inner"></div></div><span class="title">{{name}}</span><ul class="event_list">{{events_text}}</ul></div>',
a)};pe.Map.prototype.bubble_template_landmark=function(a){return pe.templatize('<div class="map_tooltip_content"><div class="map_popup_tip"><div class="map_popup_tip_inner"></div></div><span class="title">{{name}}</span></div>',a)};
pe.Map.prototype.bubble_template_venue=function(a){a.venue_types_text=a.venue_types.join(" / ");return pe.templatize('<div class="map_tooltip_content"><div class="map_popup_tip"><div class="map_popup_tip_inner"></div></div><span class="title">{{name}}</span><span class="venue_type">{{venue_types_text}}</span></div>',a)};pe.Map.prototype.city_marker_clicked=function(a){this.fire_event(pe.Map.events.CITY_MARKER_CLICKED,a)};
pe.Map.prototype.landmark_marker_clicked=function(a){this.fire_event(pe.Map.events.LANDMARK_MARKER_CLICKED,a)};pe.Map.prototype.close_info_window=function(){this.infowindow&&this.infowindow.close()};pe.Map.prototype.remove_all_venue_marker_highlights=function(){$.each(this.markers.VENUE,function(a,b){b.setIcon(null)})};pe.Map.prototype.get_page=function(){if(-1<window.location.href.indexOf("/search"))return pe.Map.pages.SEARCH};
pe.Map.prototype.popup_template_city=function(a){return pe.templatize('<div class="map_popup"><a class="name eb_font_title headline" href="/{{id}}" target="_blank">{{name}}</a><div>{{description}}<a href="/{{id}}" target="_blank">read more</a></div><a href="javascript:pe.zoom_to_city(\'{{id}}\', true);">zoom in</a></div>',a)};
pe.Map.prototype.popup_template_event=function(a){a.image=a.id?pe.templatize('<div class="map_event_img float_left"><a href="/venues/{{id}}" target="_blank" class="ConvertToRoundedCorners"><img src="'+pe.https(pe.assign_photo_size(a.thumbnail,"100","100x100"))+'"/></a></div>',a):pe.templatize('<div class="map_event_img float_left"><img src="'+pe.https(pe.assign_photo_size(a.thumbnail,"100","100x100"))+'"/></div>',a);var b=a.events.slice(0,this.page===pe.Map.pages.SEARCH?3:2);a.events_text=$.map(b,
function(a){a.formatted_start_date=a.start_date?$.datepicker.formatDate("M d",new Date(a.start_date)):"";return pe.templatize('<tr><td valign="top"><span class="start_date">{{formatted_start_date}}</span></td><td valign="top"><a href="/events/{{id}}" target="_blank">{{name}}</a></td></tr>',a)}).join("");a.photo_text=a.photo?'<img src="'+pe.https(a.photo)+'">':"";return pe.templatize('<div class="event_popup" style="width:330px !important; height:130px !important;"><div class="event_name eb_font_title headline float_left"><a href="{{url}}" target="_blank">{{name}}</a></div><div class="clear"></div>{{image}}<div class="events_list"><table cellpadding="0" cellspacing="0"><tbody>{{events_text}}</tbody></table></div><div class="read_more_txt_link_right"><a href="{{url}}" class="blue_link" target="_blank">See more events</a></div><br>{{photo_text}}</div>',
a)};
pe.Map.prototype.popup_template_landmark=function(a){a.image="";a.thumbnail&&(a.image=pe.templatize('<div class="map_venue_img float_left ConvertToRoundedCorners"><img src="'+pe.https(pe.assign_photo_size(a.thumbnail,"100","100x100"))+'" /></div>',a));return pe.templatize('<div class="map_popup_content"><div class="map_popup_close CloseButton"></div><div class="map_popup_tip"><div class="map_popup_tip_inner"></div></div><div class="header">{{name}}</div><div class="main clearfix">{{image}}<div class="details">{{description}}</div></div></div>',a)};
pe.Map.prototype.popup_template_user_location=function(a){return pe.templatize('<div class="user_location_popup" style="width:200px !important; height:80px !important;">{{user_location}}</div>',{user_location:a})};
pe.Map.prototype.popup_template_venue=function(a){a.image=pe.templatize('<div class="map_venue_img float_left"><a href="{{url}}" target="_blank" class="ConvertToRoundedCorners"><img src="'+pe.https(pe.assign_photo_size(a.thumbnail,"100","100x100"))+'" /></a></div>',a);a.venue_types_text=a.venue_types.join("/");a.neighborhood_template=a.neighborhood_is_visible?pe.templatize('<div class="neighborhood"><a href="/{{city_id}}/{{neighborhood_id}}-5/" class="blue_link" target="_blank">{{neighborhood_name}}</a></div>',
a):pe.templatize('<div class="neighborhood"><span class="gray_link">{{neighborhood_name}}</span></div>',a);return this.page===pe.Map.pages.SEARCH?pe.templatize('<div class="VenuePopup venue_popup" style="width: 330px !important; height:130px !important;"><div class="venue_name eb_font_title headline float_left"><a href="{{url}}" target="_blank">{{name}}</a></div><div class="clear"></div>{{image}}<div class="type">{{venue_types_text}}</div>{{neighborhood_template}}<div id="char_rating" class="CharacterRating ratings_small_wrapper float_left"></div><div class="address">{{address}}</div><div class="phone_number">{{phone}}</div><div class="clear"></div> </div>',
a):pe.templatize('<div class="VenuePopup venue_popup" style="width: 330px !important; height:130px !important;"><div class="venue_name eb_font_title headline float_left"><a href="{{url}}" target="_blank">{{name}}</a></div><div class="clear"></div> {{image}}<div class="type">{{venue_types_text}}</div>{{neighborhood_template}}<div id="char_rating" class="CharacterRating ratings_small_wrapper float_left"></div><div class="address">{{address}}</div><div class="phone_number">{{phone}}</div><div class="clear"></div> </div>',
a)};pe.Map.prototype.remove_marker=function(a){a.setMap(null);this.markers[a.type]=pe.map_tools.remove_marker_from_array(this.markers[a.type],a)};
pe.Map.prototype.set_cities=function(a){this.close_info_window();$.each(this.markers.CITY,this.callback(function(a,c){this.remove_marker(c)}));$.each(a,this.callback(function(a,c){var e=this.bubble_template_city(c);this.add_marker({type:pe.Map.marker_types.CITY,icon:pe.map_tools.marker_icon(pe.Map.marker_types.CITY,c),object_id:c.id,object_url:c.url,latitude:c.latitude,longitude:c.longitude,bubble_html:e,marker_clicked:this.callback(this.city_marker_clicked)})}))};
pe.Map.prototype.set_current_event=function(a){a=pe.map_tools.event_map_data([a]);a=pe.map_tools.find_objects_to_add(this.markers.EVENT,a);$.each(a,this.callback(function(a,c){this.add_marker({type:pe.Map.marker_types.CURRENT_OBJECT,icon:pe.map_tools.marker_icon(pe.Map.marker_types.CURRENT_OBJECT,c),zIndex:1E3,object_id:c.id,object_url:c.url,latitude:c.latitude,longitude:c.longitude,bubble_html:this.bubble_template_event(c),popup_html:this.popup_template_event(c),neighborhood:c.neighborhood,events:c.events});
this.current_venue_ids.push(c.id)}))};pe.Map.prototype.set_current_venue=function(a){this.add_marker({type:pe.Map.marker_types.CURRENT_OBJECT,icon:pe.map_tools.marker_icon(pe.Map.marker_types.CURRENT_OBJECT,a),zIndex:2E3,object_id:a.id,object_url:a.url,latitude:a.latitude,longitude:a.longitude,bubble_html:this.bubble_template_venue(a),neighborhood:a.neighborhood,ratings:{rating_lucas:a.rating_lucas,rating_adriana:a.rating_adriana,rating_jonah:a.rating_jonah,rating_emma:a.rating_emma}});this.current_venue_ids.push(a.id)};
pe.Map.prototype.set_events=function(a){this.close_info_window();var a=pe.map_tools.event_map_data(a),b=pe.map_tools.find_markers_to_remove(this.markers.EVENT,a);$.each(b,this.callback(function(a,b){-1<this.current_venue_ids.indexOf(b.object_id)||this.remove_marker(b)}));a=pe.map_tools.find_objects_to_add(this.markers.EVENT,a);$.each(a,this.callback(function(a,b){var d=b.small_pin?pe.Map.marker_types.OTHER_EVENT:pe.Map.marker_types.EVENT;-1<this.current_venue_ids.indexOf(b.id)||this.add_marker({small_pin:b.small_pin,
type:pe.Map.marker_types.EVENT,icon:pe.map_tools.marker_icon(d,b),object_id:b.id,object_url:b.url,latitude:b.latitude,longitude:b.longitude,bubble_html:this.bubble_template_event(b),popup_html:this.popup_template_event(b),neighborhood:b.neighborhood,events:b.events})}))};
pe.Map.prototype.set_landmarks=function(a){this.close_info_window();$.each(this.markers.LANDMARK,this.callback(function(a,c){this.remove_marker(c)}));$.each(a,this.callback(function(a,c){0===c.type&&c.map_visibility&&this.add_marker({type:pe.Map.marker_types.LANDMARK,icon:pe.map_tools.marker_icon(pe.Map.marker_types.LANDMARK,c),object_id:c.id,object_url:c.url,latitude:c.latitude,longitude:c.longitude,bubble_html:this.bubble_template_landmark(c),popup_html:this.popup_template_landmark(c),marker_clicked:this.callback(this.landmark_marker_clicked)})}))};
pe.Map.prototype.set_venues=function(a){this.close_info_window();var b=pe.map_tools.find_markers_to_remove(this.markers.VENUE,a);$.each(b,this.callback(function(a,b){-1<this.current_venue_ids.indexOf(b.object_id)||this.remove_marker(b)}));a=pe.map_tools.find_objects_to_add(this.markers.VENUE,a);$.each(a,this.callback(function(a,b){if(!(-1<this.current_venue_ids.indexOf(b.id))){var d=this.bubble_template_venue(b);this.add_marker({small_pin:b.small_pin,type:pe.Map.marker_types.VENUE,icon:pe.map_tools.marker_icon(b.small_pin?
pe.Map.marker_types.OTHER_VENUE:pe.Map.marker_types.VENUE,b),object_id:b.id,object_url:b.url,latitude:b.latitude,longitude:b.longitude,is_visible:b.is_visible,bubble_html:d,popup_html:this.popup_template_venue(b),neighborhood:b.neighborhood,ratings:{rating_lucas:b.rating_lucas,rating_adriana:b.rating_adriana,rating_jonah:b.rating_jonah,rating_emma:b.rating_emma}})}}))};
pe.Map.prototype.set_view=function(a,b,c){this.map.setCenter(new google.maps.LatLng(a,b));a=parseInt(c,10);isNaN(a)||(this.map.setZoom(a),this.zoom_changed())};pe.Map.prototype.show_popup=function(){};
pe.Map.prototype.switch_to_global_view=function(){this.zoom_state=pe.Map.zoom_states.GLOBAL;this.map.setMapTypeId(google.maps.MapTypeId.TERRAIN);pe.ajax_loader.cities.load(pe.cities_timestamp(),this.callback(function(a){this.set_cities(a);this.set_venues([]);this.set_events([])}));this.fire_event(pe.Map.events.ZOOM_STATE_CHANGED,this.zoom_state)};
pe.Map.prototype.switch_to_local_view=function(a){this.zoom_state=pe.Map.zoom_states.LOCAL;this.map.setMapTypeId(google.maps.MapTypeId.ROADMAP);setTimeout(this.callback(function(){var b=this.map.getBounds();a===this.global_zoom_level_limit&&pe.ajax_loader.locate_city.load({north:b.getNorthEast().lat(),south:b.getSouthWest().lat(),east:b.getNorthEast().lng(),west:b.getSouthWest().lng()},this.callback(function(a){1===a.length&&this.load_default_map_objects(a[0].id);this.fire_event(pe.Map.events.ZOOM_STATE_CHANGED,
this.zoom_state)}))}),0)};pe.Map.prototype.load_default_map_objects=function(a){pe.ajax_loader.city_venues_for_map.load({city_id:a},this.callback(function(b){this.set_venues(b);this.fire_event(pe.Map.events.CITY_CHANGED,a);this.set_cities([])}));var b=pe.today_date_string();pe.ajax_loader.city_events_on_date_for_map.load({city:a,start_date:b,end_date:b},this.callback(function(a){this.set_events(a)}))};
pe.Map.prototype.zoom_changed=function(){var a=this.map.getZoom();a<this.global_zoom_level_limit&&this.zoom_state!==pe.Map.zoom_states.GLOBAL&&this.switch_to_global_view();a>=this.global_zoom_level_limit&&this.zoom_state!==pe.Map.zoom_states.LOCAL&&this.switch_to_local_view(a);this.fire_event(pe.Map.events.ZOOM_LEVEL_CHANGED,a)};
(function(){var a=function(a,c){return function(){return a.apply(c,arguments)}};pe.GalleryMappable=function(){function b(b){this.container=b;this.map_loaded=a(this.map_loaded,this);this.expand_map_clicked=a(this.expand_map_clicked,this);this.expand_gallery_clicked=a(this.expand_gallery_clicked,this);this.map_container=$(".VenueMap");this.marker_tips=$(".MarkerTip");this.gallery_container=$(".PhotoSlideShow");this.gallery_quick_nav=$(".GalleryQuickNav");this.expand_map_link=$(".ExpandMap.Link");this.expand_gallery_link=
$(".ExpandGallery.Link");this.map_popup=this.container.find(".map_popup");this.map_tooltip=this.container.find(".map_tooltip");$(".ExpandMap").click(this.expand_map_clicked);$(".ExpandGallery").click(this.expand_gallery_clicked)}b.prototype.centrize_map=function(){var a,b;a=this.map.map;b=a.getCenter();google.maps.event.trigger(a,"resize");return a.setCenter(b)};b.prototype.expand_gallery_clicked=function(){return this.expand_map(!1)};b.prototype.expand_map_clicked=function(){return this.expand_map()};
b.prototype.expand_map=function(a){null==a&&(a=!0);this.map_popup.hide();this.map_container.unbind("click");a?(this.map_container.removeClass("collapsed"),$(".SlideshowCont").addClass("collapsed"),$(".MapCont").removeClass("collapsed"),this.map.map.setOptions({mapTypeControl:!0,navigationControl:!0,streetViewControl:!0})):(this.map_container.addClass("collapsed"),$(".SlideshowCont").removeClass("collapsed"),$(".MapCont").addClass("collapsed"),this.map.map.setOptions({disableDefaultUI:!0,mapTypeControl:!1,
navigationControl:!1,streetViewControl:!1}),this.map_container.click(this.expand_map_clicked));this.centrize_map();return this.toggle_expanders()};b.prototype.toggle_expanders=function(){this.expand_map_link.toggle();this.expand_gallery_link.toggle();this.gallery_quick_nav.toggle();return this.marker_tips.toggle()};b.prototype.map_loaded=function(){if("#map"===window.location.hash)return this.expand_map()};return b}()}).call(this);
pe.PhotoModule=function(a,b,c,e,d,h){pe.init_widget(this,a);this.container.html(this.dom(c));this.slide_show_div=this.container.find(".SlideShow");this.slide_show_div.html(this.render_photos(b,e,d,h));0<b.length&&(this.slide_show_div.addClass("slider"),this.slide_show_div.nivoSlider({effect:"slideInRight",startSlide:0,animSpeed:70,pauseTime:0,directionNav:1<b.length,directionNavHide:!0,controlNav:!1,keyboardNav:!0,manualAdvance:!0}))};
pe.PhotoModule.prototype.dom=function(a){return'<div class="SlideShow '+a+'"></div>'};
pe.PhotoModule.prototype.render_photos=function(a,b,c,e){var d="";if(0===a.length)d+='<img src="'+pe.https(pe.assign_photo_size("",b,c))+'" alt="" title="">';else{var h=this,g=a.length;$.each(a,function(a,f){f.photo=pe.https(pe.assign_photo_size(f.src,b,c));f.position=a+1+" of "+g;f.title_div="title_div_"+e+"_"+a;f.photo_caption_container=""===f.title?"":'<div class="photo_caption float_left"><span class="text float_left">'+f.title+'</span><div class="line_divider"></div></div>';h.container.append(pe.templatize('<div id="{{title_div}}" class="nivo-html-caption"><table width="100%" cellpadding="0" cellspacing="0"><tbody><tr><td width="90%">{{photo_caption_container}}</td><td valign="bottom"><div class="photo_number float_right"><span class="text"><nobr>{{position}}</nobr></span><div></td></tr></tbody></table></div>',
f));d=f.url?d+pe.templatize('<a href="{{url}}"><img src="{{photo}}" alt="" title="#{{title_div}}"/></a>',f):d+pe.templatize('<img src="{{photo}}" alt="" title="#{{title_div}}"/>',f)})}return d};
(function(){var a=function(a,b){return function(){return a.apply(b,arguments)}},b={}.hasOwnProperty,c=function(a,c){function h(){this.constructor=a}for(var g in c)b.call(c,g)&&(a[g]=c[g]);h.prototype=c.prototype;a.prototype=new h;a.__super__=c.prototype;return a};pe.NeighborhoodGalleryMap=function(b){function d(b,c,e){this.nearby_events_loaded=a(this.nearby_events_loaded,this);this.nearby_venues_loaded=a(this.nearby_venues_loaded,this);this.map_marker_blurred=a(this.map_marker_blurred,this);this.map_marker_hovered=
a(this.map_marker_hovered,this);this.map_marker_clicked=a(this.map_marker_clicked,this);d.__super__.constructor.call(this,b);this.neighborhood_map_data=c;this.create_map();0<e?this.load_neighborhood_photos(this.neighborhood_map_data.url_param):this.expand_map()}c(d,b);d.prototype.create_map=function(){var a,b,c=this;this.map=new pe.Map(this.map_container,this.neighborhood_map_data.latitude,this.neighborhood_map_data.longitude,this.neighborhood_map_data.default_zoom_level,google.maps.MapTypeId.ROADMAP,
{bubbles:[],popups:[]});a=this.neighborhood_map_data;this.map.load_default_map_objects=function(b){var d;if(a.city_id===b)return pe.ajax_loader.map_neighborhood_venues.load({neighborhood_id:a.url_param},function(a){c.map.set_venues(a);return c.map.set_cities([])}),d=new Date,d=new Date(d.getFullYear(),d.getMonth()+2,d.getDate()),pe.ajax_loader.map_neighborhood_events.load({neighborhood_id:a.url_param,start_date:pe.today_date_string(),end_date:pe.date_string(d)},c.nearby_events_loaded);pe.ajax_loader.city_venues_for_map.load({city_id:b},
function(a){c.map.set_venues(a);return c.map.set_cities([])});d=new Date;d=new Date(d.getFullYear(),d.getMonth()+2,d.getDate());return pe.ajax_loader.city_events_on_date_for_map.load({city:b,start_date:pe.today_date_string(),end_date:pe.date_string(d)},c.nearby_events_loaded)};this.map.bind_event(pe.Map.events.MARKER_CLICKED,this.map_marker_clicked);this.map.bind_event(pe.Map.events.MARKER_HOVERED,this.map_marker_hovered);this.map.bind_event(pe.Map.events.MARKER_BLURRED,this.map_marker_blurred);google.maps.event.addListenerOnce(this.map.map,
"idle",this.map_loaded);this.map.map.setOptions({disableDefaultUI:!0});pe.ajax_loader.map_neighborhood_venues.load({neighborhood_id:this.neighborhood_map_data.url_param},this.nearby_venues_loaded);b=new Date;b=new Date(b.getFullYear(),b.getMonth()+2,b.getDate());return pe.ajax_loader.map_neighborhood_events.load({neighborhood_id:a.url_param,start_date:pe.today_date_string(),end_date:pe.date_string(b)},this.nearby_events_loaded)};d.prototype.load_neighborhood_photos=function(a){return pe.ajax_loader.neighborhood_photos.load({neighborhood_id:a},
function(a){if(0<a.length)return new pe.PhotoModule($(".PhotoSlideShow"),a,"width460","460","460","neighborhood")})};d.prototype.map_marker_clicked=function(a,b){this.map.clicked_marker=b;switch(b.type){case pe.Map.marker_types.VENUE:if(b.is_visible)return this.show_popup(b);break;case pe.Map.marker_types.EVENT:return this.show_popup(b)}};d.prototype.map_marker_hovered=function(a,b){var c,d,e;if(this.map.clicked_marker!==b){this.map_tooltip.html(b.bubble_html);this.map_tooltip.show();d=this.map.marker_position_on_map(b);
c=this.map.container.width();e=this.map.marker_coordinates_weights(b);if(d.x>c/2)return this.map_tooltip.css("right",this.map.container.width()-d.x+e.x),this.map_tooltip.css("left",""),this.map_tooltip.css("top",d.y-e.y),this.map_tooltip.removeClass("map_tooltip_right");this.map_tooltip.css("right","");this.map_tooltip.css("left",d.x+e.x);this.map_tooltip.css("top",d.y-e.y);return this.map_tooltip.addClass("map_tooltip_right")}};d.prototype.map_marker_blurred=function(){return this.map_tooltip.hide()};
d.prototype.nearby_venues_loaded=function(a){return this.map.set_venues(a)};d.prototype.nearby_events_loaded=function(a){return this.map.set_events(a)};d.prototype.show_popup=function(a){var b=this;this.map_tooltip.hide();this.map_popup.hide();return $.get("/venues/"+a.object_id+"/map_popup",function(c){var d,e;b.map_popup.html(c);(new pe.CloseButton(b.map_popup,pe.CloseButton.close_methods.HIDE)).bind_event(pe.CloseButton.events.CLOSED,function(){return b.map.clicked_marker=null});d=b.map.marker_position_on_map(a);
c=b.map.container.width();e=b.map.marker_coordinates_weights(a);d.x>c/2?(b.map_popup.css("right",b.map.container.width()-d.x+e.x),b.map_popup.css("left",""),b.map_popup.css("top",d.y-e.y),b.map_popup.removeClass("map_popup_right")):(b.map_popup.css("right",""),b.map_popup.css("left",d.x+e.x),b.map_popup.css("top",d.y-e.y),b.map_popup.addClass("map_popup_right"));return b.map_popup.show()})};d.prototype.toggle_expanders=function(){this.expand_map_link.toggle();return this.expand_gallery_link.toggle()};
return d}(pe.GalleryMappable)}).call(this);
pe.ScrollPaginator=function(a,b){pe.init_widget(this,a);this.cells=this.container.find(".Cell");this.cells.click(this.callback(this.pagination_cell_clicked));this.cells_container=this.container.find(".CellsContainer");this.current_page_number=0;this.pages=this.container.find(".Page");this.prev_button=this.container.find(".PrevButton");this.prev_button.click(this.callback(this.prev_button_clicked));this.next_button=this.container.find(".NextButton");this.next_button.click(this.callback(this.next_button_clicked));this.scroll_duration=
b||500;this.show_current_page()};pe.ScrollPaginator.prototype.pagination_cell_clicked=function(a){this.container.find(".Cell").removeClass("current");$(a.currentTarget).addClass("current");this.show_page(this.cells.index(a.currentTarget));return!1};pe.ScrollPaginator.prototype.prev_button_clicked=function(a){0===this.current_page_number?a&&a.stopPropagation():this.show_page(this.current_page_number-1)};
pe.ScrollPaginator.prototype.show_current_page=function(){this.cells.removeClass("current");$(this.cells[this.current_page_number]).addClass("current");$(this.container.find(".page_slide.current")).index()<this.current_page_number?this.container.find(".page_slide.current").addClass("move_left").delay(this.scroll_duration).queue(function(a){$(this).removeClass("move_left");a()}):this.container.find(".page_slide.current").addClass("move_right").delay(this.scroll_duration).queue(function(a){$(this).removeClass("move_right");
a()});this.pages.removeClass("current located_left located_right");$(this.pages[this.current_page_number]).addClass("current").removeClass("located_left located_right");$(this.pages[this.current_page_number]).prevUntil().addClass("located_left");$(this.pages[this.current_page_number]).nextUntil().addClass("located_right");this.next_button.toggleClass("disabled",this.current_page_number===this.pages.length-1);this.prev_button.toggleClass("disabled",0===this.current_page_number)};
pe.ScrollPaginator.prototype.show_page=function(a){this.current_page_number!=a&&(this.current_page_number=a,this.show_current_page())};pe.ScrollPaginator.prototype.next_button_clicked=function(a){this.current_page_number>=this.pages.length-1?a&&a.stopPropagation():this.show_page(this.current_page_number+1)};pe.PrefetcherModule=function(a){pe.init_widget(this,a);this.elements_with_prefetch_urls=this.container.find("[data-prefetch-url]");this.prefetch_data()};pe.PrefetcherModule.instantiate=function(){return new pe.PrefetcherModule($("body"))};
pe.PrefetcherModule.prototype.is_image_url=function(a){return/\.(jpe?g|gif|png)(\?.*)?$/i.test(a)};pe.PrefetcherModule.prototype.prefetch_ajax_request=function(a){$.getScript(a)};pe.PrefetcherModule.prototype.prefetch_data=function(){$.each(this.elements_with_prefetch_urls,this.callback(function(a,b){var b=$(b),c=b.data("prefetch-url");this.is_image_url(c)?this.prefetch_image(c):this.prefetch_ajax_request(c);b.removeAttr("data-prefetch-url")}))};
pe.PrefetcherModule.prototype.prefetch_image=function(a){this.container.append(pe.templatize('<div style="display:none;"><img src="{{url}}"></div>',{url:a}))};
pe.Expander=function(a,b){pe.init_widget(this,a);this.collapsed_height=b||72;this.content_container=this.container.find(".Content");this.content_height_container=this.container.find(".ContentHeight");this.trigger=this.container.find(".Button");this.content_height_container.height()>this.collapsed_height?this.trigger.click(this.callback(this.on_trigger_clicked)):this.trigger.parent().hide()};
pe.Expander.prototype.on_trigger_clicked=function(a){var a=$(a.currentTarget),b=this.content_container.attr("scrollHeight");this.content_container.height()<=this.collapsed_height?this.content_container.animate({height:b},1E3):this.content_container.animate({height:this.collapsed_height+"px"},1E3);this.trigger.hide();this.trigger.not(a).show()};
pe.PageSlideScroller=function(a,b){pe.init_widget(this,a);var c=$.extend({scroll_duration:1100,inactive_button_class:"loop_back",loop_scrolling:!1},b);this.scroller_container=this.container.find(".ScreensContainer");this.current_item=0;this.scroll_duration=c.scroll_duration;this.inactive_button_class=c.inactive_button_class;this.individual_items=this.scroller_container.find(".IndividualItem");this.single_item_width=c.single_item_width||this.individual_items.width();this.items_count=this.individual_items.length;
this.next_button=this.container.find(".NextButton");this.previous_button=this.container.find(".PreviousButton");this.page_display_container=this.container.find(".PageDisplay");this.dots_container=$(this.page_display_container.selector+" .Dot");this.dots_container.live("click",this.callback(this.dot_clicked));this.page_display_format=c.page_display_format||pe.PageSlideScroller.dots_template(this.items_count);this.loop_scrolling=c.loop_scrolling;if(this.enable_buttons=1<this.items_count){this.next_button.click(this.callback(this.next_button_clicked));
this.previous_button.click(this.callback(this.previous_button_clicked));var c=this.individual_items.first(),e=this.individual_items.last();this.loop_scrolling&&(e.clone().insertBefore(c),c.clone().insertAfter(e));this.update_display();this.update_page_display()}else this.next_button.addClass("disabled"),this.previous_button.addClass("disabled")};
pe.PageSlideScroller.dots_template=function(a){for(var a=Math.min(a,4),b=["one","two","three","four"],c="<ul class='page_count slide{{current_item_number}}'>",e=0;e<=a-1;e++)c+="<li class='Dot dot "+b[e]+"' data-page_number='"+e+"'></li>";return c+"</ul>"};
pe.PageSlideScroller.prototype.animate_scrolling=function(a){this.enable_buttons=!1;this.current_item=a;this.update_page_display();this.scroller_container.animate({left:"-"+this.compute_scroll_offset(this.current_item)+"px"},this.scroll_duration,"cubicEaseInOut",this.callback(this.update_display))};
pe.PageSlideScroller.prototype.update_display=function(){this.current_item=this.constraint_page(this.current_item);this.previous_button.toggleClass(this.inactive_button_class,0>=this.current_item);this.next_button.toggleClass(this.inactive_button_class,this.current_item>=this.items_count-1);this.scroller_container.css("left","-"+this.compute_scroll_offset(this.current_item)+"px");this.enable_buttons=!0};
pe.PageSlideScroller.prototype.update_page_display=function(){this.page_display_container.html(pe.templatize(this.page_display_format,{current_item_number:this.constraint_page(this.current_item)+1,items_count:this.items_count}))};pe.PageSlideScroller.prototype.compute_scroll_offset=function(a){return(a+(this.loop_scrolling?1:0))*this.single_item_width};
pe.PageSlideScroller.prototype.constraint_page=function(a){return this.loop_scrolling?a>=this.items_count?0:0>a?this.items_count-1:a:Math.max(Math.min(a,this.items_count-1),0)};pe.PageSlideScroller.prototype.next_button_clicked=function(){if(this.enable_buttons){var a=this.current_item+1;a>=this.items_count&&(a=0);this.loop_scrolling||(a=Math.min(a,this.items_count-1));a!=this.current_item&&this.animate_scrolling(a)}};
pe.PageSlideScroller.prototype.previous_button_clicked=function(){if(this.enable_buttons){var a=this.current_item-1;0>a&&(a=this.items_count-1);this.loop_scrolling||(a=Math.max(a,0));a!=this.current_item&&this.animate_scrolling(a)}};pe.PageSlideScroller.prototype.dot_clicked=function(a){this.animate_scrolling($(a.currentTarget).data("page_number")-0)};
pe.init_multiline_titles=function(a){var b=a||"two_line_title",c,e;_.each($(".FlexibleHeight"),function(a){e=$(a).find(".FlexibleHeightItem");for(c=0;c<e.length;c++)if(a=$(e[c]),parseInt(a.css("line-height"),10)<a.height()){a.parents(".FlexibleHeight").addClass(b);break}})};
$(document).ready(function(){pe.init_page_framework();new pe.NeighborhoodGalleryMap($("#gal_map"),window.neighborhood.map_data,window.neighborhood.live_photos_count);0<$(".ThingsToDoScroller").length&&(pe.install_easing(),pe.things_to_do_scroller=new pe.PageSlideScroller($(".ThingsToDoScroller")),pe.help_module=new pe.HelpModule2);0<$(".PaginationScroller").length&&(pe.venues_scroller=new pe.ScrollPaginator($(".PaginationScroller")));pe.ChangeImageOnHover.instantiate_all("LinkWrapper");pe.PrefetcherModule.instantiate();
0<$(".AddToCalendarButton").length&&pe.init_calendar_buttons();0<$(".ReadMoreScroll").length&&(pe.expander=new pe.Expander($(".ReadMoreScroll"),60),0===$(".ThingsToDoScroller").length&&pe.expander.trigger.filter(":visible").click());$(".NeighborhoodDropdown").click(pe.neighborhood_dropdown_clicked);setTimeout(function(){pe.init_multiline_titles()},5);setTimeout(function(){pe.initialize_extra_content()},5)});pe.neighborhood_dropdown_clicked=function(){$(this).toggleClass("expanded")};
