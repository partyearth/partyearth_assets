pe.map_tools={};pe.map_tools.array_contains_marker=function(a,c){var b=!1;$.each(a,function(a,e){if(e.object_id===c)return b=!0,!1});return b};
pe.map_tools.event_map_data=function(a){var c=[];$.each(a,function(a,d){$.each(d.locations,function(a,b){if(!b.latitude)return!0;var g=b.name,h=pe.map_tools.find_venue_by_name_in_array(c,g);h||(h={name:g,address:b.address,url:b.url,id:b.id,latitude:b.latitude,longitude:b.longitude,thumbnail:b.photo,neighborhood_id:d.neighborhood_id,events:[]},c.push(h));h.events.push(d)})});return c};pe.map_tools.find_marker=function(a,c){var b=null;$.each(a,function(a,e){if(e.object_id===c)return b=e,!1});return b};
pe.map_tools.find_markers_to_remove=function(a,c){return $.map(a,function(a){if(a.type===pe.Map.marker_types.USER_LOCATION)return!0;var d=pe.map_tools.get_marker_object(c,a);if(!d||!1===d.map_visibility||JSON.stringify(a.events)!==JSON.stringify(d.events))return a})};pe.map_tools.find_objects_to_add=function(a,c){var b=[];$.each(c,function(c,e){pe.map_tools.markers_contain_venue(a,e)||b.push(e)});return b};
pe.map_tools.find_venue_by_name_in_array=function(a,c){var b=null;$.each(a,function(a,e){if(e.name===c)return b=e,!1});return b};pe.map_tools.get_city_name_from_google_address_lookup_result=function(a){var c=null;$.each(a.address_components,function(a,d){var e=!1;$.each(d.types,function(a,b){"locality"===b&&(e=!0)});if(e)return c=d.long_name,!1});return c};pe.map_tools.get_marker_object=function(a,c){var b=null;$.each(a,function(a,e){if(c.object_id===e.id)return b=e,!1});return b};
pe.map_tools.markers_contain_venue=function(a,c){var b=!1;$.each(a,function(a,e){if(e.object_id===c.id&&JSON.stringify(e.events)===JSON.stringify(c.events))return b=!0,!1});return b};
pe.map_tools.marker_icon=function(a,c){var b="http://www.partyearth.com/assets/map/";switch(a){case pe.Map.marker_types.CITY:b+="city.png";break;case pe.Map.marker_types.CURRENT_OBJECT:b+="location.png";break;case pe.Map.marker_types.EVENT:b+=c.disabled?"event_transparent.png":"event.png";break;case pe.Map.marker_types.EVENT_HIGHLIGHTED:b+="event_highlighted.png";break;case pe.Map.marker_types.HOTSPOT:b+=c.disabled?"hotspot_transparent.png":"hotspot.png";break;case pe.Map.marker_types.LANDMARK:b+=
"landmark.png";break;case pe.Map.marker_types.OTHER_EVENT:b+="event_transparent.png";break;case pe.Map.marker_types.OTHER_VENUE:b+="venue_transparent.png";break;case pe.Map.marker_types.RUNNERS:b+="pamplona/runners.png";break;case pe.Map.marker_types.SPECTATORS:b+="pamplona/spectators.png";break;case pe.Map.marker_types.TIME:b+="pamplona/time.png";break;case pe.Map.marker_types.USER_LOCATION:b+="location.png";break;case pe.Map.marker_types.VENUE:b+=c.disabled?"venue_transparent.png":"venue.png"}return b+=
"?"+pe.assets_timestamp()};pe.map_tools.objects_have_marker=function(a,c){var b=!1;$.each(a,function(a,e){if(c.object_id===e.id&&JSON.stringify(c.events)===JSON.stringify(e.events))return b=!0,!1});return b};pe.map_tools.remove_marker_from_array=function(a,c){return $.map(a,function(a){return a.object_id===c.object_id?null:a})};pe.map_tools.venues_contain_venue=function(a,c){var b=!1;$.each(a,function(a,e){if(e.id===c)return b=!0,!1});return b};pe.mouse_position={};pe.mouse_position.x=0;
pe.mouse_position.y=0;pe.mouse_position.on_mouse_move=function(a){pe.mouse_position.x=a.pageX;pe.mouse_position.y=a.pageY};pe.mouse_position.track=function(){$("body").mousemove(pe.mouse_position.on_mouse_move)};pe.RatingsModule=function(a,c,b,d){pe.init_widget(this,a);this.container.html(this.html(c,d));this.container.addClass(d?"with_image":"no_image");this.rating_div=this.container.find(".StarRating");this.rating_div.html(this.render_rating(c,b))};
pe.RatingsModule.prototype.html=function(a,c){var b=a.toLowerCase();return c?'<a target="_blank" title="'+pe.link_title_for_reviewer(a)+'" href="/pe-reviewers/'+b+'">  <div class="figure '+b+' ratings_sprite"></div></a><div class="StarRating big_stars"></div><h3 class="name '+b+' tab_text">  <strong>'+a+"</strong></h3>":'<div class="StarRating Stars small_stars ratings_sprite" title="'+pe.link_title_for_reviewer(a)+'"></div>'};
pe.RatingsModule.prototype.render_rating=function(a,c){for(var b=[],d=a.toLowerCase(),e=1;4>=e;e++)b[e]='<div class="star '+(e<=c?d:"disabled")+'"></div>';return b.join("\n")};
pe.SearchResultCharacterRatingModule=function(a,c){pe.init_widget(this,a);this.container.html(this.html());var b=this.container.find(".LucasRating"),d=c.rating_lucas,e=this.container.find(".AdrianaRating"),f=c.rating_adriana,g=this.container.find(".JonahRating"),h=c.rating_jonah,j=this.container.find(".EmmaRating"),i=c.rating_emma;void 0!==d&&new pe.RatingsModule(b,"Lucas",d,!1);void 0!==f&&new pe.RatingsModule(e,"Adriana",f,!1);void 0!==h&&new pe.RatingsModule(g,"Jonah",h,!1);void 0!==i&&new pe.RatingsModule(j,
"Emma",i,!1)};
pe.SearchResultCharacterRatingModule.prototype.html=function(){return'<a href="/pe-reviewers/lucas" target="_blank" title="'+pe.link_title_for_reviewer("Lucas")+'">  <div class="char_rating_small LucasRating"></div></a><a href="/pe-reviewers/adriana" target="_blank" title="'+pe.link_title_for_reviewer("Adriana")+'">  <div class="char_rating_small AdrianaRating"></div></a><a href="/pe-reviewers/jonah" target="_blank" title="'+pe.link_title_for_reviewer("Jonah")+'">  <div class="char_rating_small JonahRating"></div></a><a href="/pe-reviewers/emma" target="_blank" title="'+pe.link_title_for_reviewer("Emma")+
'">  <div class="char_rating_small EmmaRating"></div></a>'};pe.VenueSearcher=function(){pe.init_widget(this,null)};
pe.VenueSearcher.prototype.get_matching_venues=function(a,c){!a.has_filters("city")||"all"===a.get_filter("city")?c([]):pe.ajax_loader.city_venues.load({city_id:a.get_filter("city"),timestamp:pe.venues_timestamp()},function(b){$.each(b,function(a,b){b.disabled=null});b=pe.VenueSearcher.filter_by_result_types(b,a);b=pe.VenueSearcher.filter_by_neighborhood(b,a);b=pe.VenueSearcher.filter_by_character(b,a);b=pe.VenueSearcher.filter_by_venue_types(b,a);b=pe.VenueSearcher.filter_by_tags(b,a);b=pe.VenueSearcher.filter_by_venue_name(b,
a);b=pe.VenueSearcher.filter_by_fulltext(b,a);b=pe.VenueSearcher.filter_by_performer_name(b,a);pe.VenueSearcher.mark_hotspots(b,a);pe.VenueSearcher.mark_venue_map_visibility(b,a);c(b)})};pe.VenueSearcher.filter_by_city=function(a,c){var b=c.get_filter("city");return!b?a:$.map(a,function(a){if(a.city===b)return a})};
pe.VenueSearcher.filter_by_character=function(a,c){var b=c.get_filter("characters");if(!b||4===b.length)return a;if(0===b.length)return[];var d=[];-1<b.indexOf("adriana")&&$.each(a,function(a,b){3<=b.rating_adriana&&!pe.map_tools.venues_contain_venue(d,b.id)&&d.push(b)});-1<b.indexOf("lucas")&&$.each(a,function(a,b){3<=b.rating_lucas&&!pe.map_tools.venues_contain_venue(d,b.id)&&d.push(b)});-1<b.indexOf("jonah")&&$.each(a,function(a,b){3<=b.rating_jonah&&!pe.map_tools.venues_contain_venue(d,b.id)&&
d.push(b)});-1<b.indexOf("emma")&&$.each(a,function(a,b){3<=b.rating_emma&&!pe.map_tools.venues_contain_venue(d,b.id)&&d.push(b)});return d};pe.VenueSearcher.filter_by_fulltext=function(a,c){var b=c.get_filter("fulltext");return!b?a:$.map(a,function(a){if(pe.text_contains_query(pe.venue_search_text(a),b))return a})};pe.VenueSearcher.filter_by_neighborhood=function(a,c){var b=c.get_filter("neighborhood");if(!b||"all"===b)return a;$.each(a,function(a,c){c.neighborhood_id!==b&&(c.disabled=!0)});return a};
pe.VenueSearcher.filter_by_performer_name=function(a,c){if(!c.get_filter("performer_name"))return a;$.each(a,function(a,c){c.disabled=!0});return a};pe.VenueSearcher.filter_by_result_types=function(a,c){var b=c.get_filter("result_types");if(!b||-1<b.indexOf("venues"))return a;if(-1<b.indexOf("hotspots")){var d=new Date(c.get_filter("start_date_or_default")),e=(b=c.get_filter("end_date"))?new Date(b):d;return $.map(a,function(a){if(pe.VenueSearcher.venue_is_hotspot_in_date_range(a,d,e))return a})}return[]};
pe.VenueSearcher.filter_by_tags=function(a,c){var b=c.get_filter("tags");if(!b)return a;var b=pe.VenueSearcher.remove_event_tags(b),d=pe.structured_tags_as_flat_array(b);return $.map(a,function(a){if(pe.array_contains(a.tags,d))return a})};pe.VenueSearcher.filter_by_venue_name=function(a,c){var b=c.get_filter("venue_name");return!b?a:$.map(a,function(a){if(-1<b.indexOf(a.name))return a})};
pe.VenueSearcher.filter_by_venue_types=function(a,c){var b=c.get_filter("Venue Type");return!b||"all"===b?a:$.grep(a,function(a){return pe.array_match(b,a.all_venue_types)})};pe.VenueSearcher.find_used_tags=function(a,c){var b={};$.each(a,function(a,e){$.each(c,function(c,g){$.each(e,function(c,e){-1<g.tags.indexOf(c)&&(b[a]||(b[a]={}),b[a][c]||(b[a][c]=[]));$.each(e,function(e,f){if(g.tags.indexOf(f)>-1){b[a]||(b[a]={});b[a][c]||(b[a][c]=[]);b[a][c].push(f)}})})})});return b};
pe.VenueSearcher.mark_hotspots=function(a,c){var b=new Date(c.get_filter("start_date_or_default")),d=new Date(c.get_filter("end_date_or_default"));$.each(a,function(a,c){c.hotspot=pe.VenueSearcher.venue_is_hotspot_in_date_range(c,b,d)})};pe.VenueSearcher.find_hotspots=function(a){return $.grep(a,function(a){return a.hotspot})};pe.VenueSearcher.find_map_hotspots=function(a){return $.map(a,function(a){if(a.map_icon===pe.Map.marker_types.HOTSPOT)return a})};
pe.VenueSearcher.find_map_venues=function(a){return $.map(a,function(a){if(a.map_icon===pe.Map.marker_types.VENUE)return a})};pe.VenueSearcher.mark_venue_map_visibility=function(a,c){var b=c.get_filter("result_types"),d=b?-1<b.indexOf("venues"):!0,e=b?-1<b.indexOf("hotspots"):!0;$.each(a,function(a,b){b.map_icon=b.hotspot?pe.Map.marker_types.HOTSPOT:pe.Map.marker_types.VENUE;d?(b.map_visibility=!0,b.hotspot&&!e&&(b.map_icon=pe.Map.marker_types.VENUE)):b.map_visibility=!(!b.hotspot||!e)})};
pe.VenueSearcher.get_day_of_week_range=function(a,c){if(6<pe.days_between_dates(a,c))return[0,1,2,3,4,5,6];if(!c||a===c)return[a.getDay()];var b=[],d=a.getDay(),e=c.getDay();b.push(d);do d+=1,6<d&&(d=0),b.push(d);while(d!==e);return b};pe.VenueSearcher.remove_event_tags=function(a){var c={};$.each(a,function(a,d){"Event Type"!==a&&(c[a]=d)});return c};
pe.VenueSearcher.venue_is_hotspot_in_date_range=function(a,c,b){if(0===c-b)return pe.VenueSearcher.venue_is_hotspot_on_date(a,c.getDay());c=pe.VenueSearcher.get_day_of_week_range(c,b);return pe.array_match(a.hotspot_days,c)};pe.VenueSearcher.venue_is_hotspot_on_date=function(a,c){return-1<a.hotspot_days.indexOf(c)};
pe.Map=function(a,c,b,d,e,f){pe.init_widget(this,a);f=f||{};this.popups=f.popups||["ALL"];this.bubbles=f.bubbles||["ALL"];this.map=new google.maps.Map(a[0],{zoom:d,center:new google.maps.LatLng(c,b),mapTypeId:e,scrollwheel:!1,mapTypeControlOptions:{style:google.maps.MapTypeControlStyle.DROPDOWN_MENU},navigationControlOptions:{style:google.maps.NavigationControlStyle.SMALL}});google.maps.event.addListener(this.map,"zoom_changed",this.callback(this.zoom_changed));pe.mouse_position.track();a=new google.maps.OverlayView;
a.draw=function(){};a.setMap(this.map);this.overlay=a;this.tooltip_div=$('<div class="map_tooltip"></div>');$("body").append(this.tooltip_div);this.markers={};this.markers.CITY=[];this.markers.CURRENT_OBJECT=[];this.markers.EVENT=[];this.markers.HOTSPOT=[];this.markers.LANDMARK=[];this.markers.USER_LOCATION=[];this.markers.VENUE=[];this.current_venue_ids=[];this.infowindow=null;this.global_zoom_level_limit=8;this.current_zoom_level=d;this.zoom_state=null;this.page=this.get_page();this.zoom_changed()};
pe.Map.events={CITY_CHANGED:"Map_CITY_CHANGED",CITY_MARKER_CLICKED:"Map_CITY_MARKER_CLICKED",MARKER_CLICKED:"Map_MARKER_CLICKED",LANDMARK_MARKER_CLICKED:"Map_LANDMARK_MARKER_CLICKED",ZOOM_LEVEL_CHANGED:"Map_ZOOM_LEVEL_CHANGED",ZOOM_STATE_CHANGED:"Map_ZOOM_STATE_CHANGED"};
pe.Map.marker_types={CITY:"CITY",CURRENT_OBJECT:"CURRENT_OBJECT",EVENT:"EVENT",EVENT_HIGHLIGHTED:"EVENT_HIGHLIGHTED",HOTSPOT:"HOTSPOT",LANDMARK:"LANDMARK",OTHER_EVENT:"OTHER_EVENT",OTHER_VENUE:"OTHER_VENUE",RUNNERS:"Tip for Runners",SPECTATORS:"Tip for Spectators",TIME:"Pamplona Run Time",USER_LOCATION:"USER_LOCATION",VENUE:"VENUE"};pe.Map.pages={SEARCH:"SEARCH"};pe.Map.zoom_states={GLOBAL:"GLOBAL",LOCAL:"LOCAL"};
pe.Map.prototype.add_marker=function(a){var c={position:new google.maps.LatLng(a.latitude,a.longitude),map:this.map,icon:a.icon,cursor:"pointer",zIndex:a.zIndex||500},b=new google.maps.Marker(c);b.bubble_html=a.bubble_html;b.popup_html=a.popup_html;b.type=a.type;b.object_id=a.object_id;b.object_url=a.object_url;b.neighborhood=a.neighborhood;b.events=a.events;b.ratings=a.ratings;b.is_visible=a.is_visible;var d=this;google.maps.event.addListener(b,"click",function(){d.fire_event(pe.Map.events.MARKER_CLICKED,
this)});if(-1<this.bubbles.indexOf("ALL")||-1<this.bubbles.indexOf(a.type))google.maps.event.addListener(b,"mouseover",function(){d.tooltip_div.html(this.bubble_html);d.tooltip_div.show();d.tooltip_div.css("left",pe.mouse_position.x);d.tooltip_div.css("top",pe.mouse_position.y+20)}),google.maps.event.addListener(b,"mouseout",function(){d.tooltip_div.hide()});if(-1<this.popups.indexOf("ALL")||-1<this.popups.indexOf(a.type))b.popup_html&&("VENUE"!=b.type&&"HOTSPOT"!=b.type||b.is_visible)&&google.maps.event.addListener(b,
"click",this.callback(function(){this.show_popup(b)})),a.marker_clicked&&google.maps.event.addListener(b,"click",function(){a.marker_clicked(this)});this.markers[a.type].push(b)};pe.Map.prototype.marker_position_on_map=function(a){var c=this.overlay.getProjection(),a=a.getPosition();return c.fromLatLngToContainerPixel(a)};pe.Map.prototype.marker_position_on_page=function(a){a=this.marker_position_on_map(a);return{x:this.container.offset().left+a.x,y:this.container.offset().top+a.y}};
pe.Map.prototype.bubble_template_city=function(a){return pe.templatize('<div class="bubble_text"><span class="bubble_headline">{{name}}</span></div>',a)};
pe.Map.prototype.bubble_template_event=function(a){if(a.events){var c=a.events[0];c.formatted_start_date=c.start_date?$.datepicker.formatDate("M d",new Date(c.start_date)):"";a.events_text=pe.templatize('<li><span class="event_date">{{formatted_start_date}}</span><a href="{{url}}" class="blue_text">{{name}}</a></li>',c)}return pe.templatize('<div class="map_tooltip_content"><span class="title">{{name}}</span><ul class="event_list">{{events_text}}</ul></div>',a)};
pe.Map.prototype.bubble_template_landmark=function(a){return pe.templatize('<div class="map_tooltip_content"><span class="title">{{name}}</span></div>',a)};pe.Map.prototype.bubble_template_venue=function(a){a.venue_types_text=a.venue_types.join(" / ");return pe.templatize('<div class="map_tooltip_content"><span class="title">{{name}}</span><span class="venue_type">{{venue_types_text}}</span></div>',a)};
pe.Map.prototype.city_marker_clicked=function(a){this.fire_event(pe.Map.events.CITY_MARKER_CLICKED,a)};pe.Map.prototype.landmark_marker_clicked=function(a){this.fire_event(pe.Map.events.LANDMARK_MARKER_CLICKED,a)};pe.Map.prototype.close_info_window=function(){this.infowindow&&this.infowindow.close()};pe.Map.prototype.remove_all_venue_marker_highlights=function(){$.each(this.markers.VENUE,function(a,c){c.setIcon(null)})};pe.Map.prototype.get_page=function(){if(-1<window.location.href.indexOf("/search"))return pe.Map.pages.SEARCH};
pe.Map.prototype.popup_template_city=function(a){return pe.templatize('<div class="map_popup"><a class="name eb_font_title headline" href="/{{id}}" target="_blank">{{name}}</a><div>{{description}}<a href="/{{id}}" target="_blank">read more</a></div><a href="javascript:pe.zoom_to_city(\'{{id}}\', true);">zoom in</a></div>',a)};
pe.Map.prototype.popup_template_event=function(a){a.image=a.id?pe.templatize('<div class="map_event_img float_left"><a href="/venues/{{id}}" target="_blank" class="ConvertToRoundedCorners"><img src="'+pe.https(pe.assign_photo_size(a.thumbnail,"100","100x100"))+'"/></a></div>',a):pe.templatize('<div class="map_event_img float_left"><img src="'+pe.https(pe.assign_photo_size(a.thumbnail,"100","100x100"))+'"/></div>',a);var c=a.events.slice(0,this.page===pe.Map.pages.SEARCH?3:2);a.events_text=$.map(c,
function(a){a.formatted_start_date=a.start_date?$.datepicker.formatDate("M d",new Date(a.start_date)):"";return pe.templatize('<tr><td valign="top"><span class="start_date">{{formatted_start_date}}</span></td><td valign="top"><a href="/events/{{id}}" target="_blank">{{name}}</a></td></tr>',a)}).join("");a.photo_text=a.photo?'<img src="'+pe.https(a.photo)+'">':"";return pe.templatize('<div class="event_popup" style="width:330px !important; height:130px !important;"><div class="event_name eb_font_title headline float_left"><a href="{{url}}" target="_blank">{{name}}</a></div><div class="clear"></div>{{image}}<div class="events_list"><table cellpadding="0" cellspacing="0"><tbody>{{events_text}}</tbody></table></div><div class="read_more_txt_link_right"><a href="{{url}}" class="blue_link" target="_blank">See more events</a></div><br>{{photo_text}}</div>',
a)};
pe.Map.prototype.popup_template_hotspot=function(a){a.image=pe.templatize('<div class="map_venue_img float_left"><a href="/venues/{{id}}" target="_blank" class="ConvertToRoundedCorners"><img src="'+pe.https(pe.assign_photo_size(a.thumbnail,"100","100x100"))+'" /></a></div>',a);a.venue_types_text=a.venue_types.join("/");a.neighborhood_template=a.neighborhood_is_visible?pe.templatize('<div class="neighborhood"><a href="/{{city_id}}/{{neighborhood_id}}-5/" class="blue_link" target="_blank">{{neighborhood_name}}</a></div>',a):
pe.templatize('<div class="neighborhood"><span class="gray_link">{{neighborhood_name}}</span></div>',a);return this.page===pe.Map.pages.SEARCH?pe.templatize('<div class="VenuePopup venue_popup" style="width: 330px !important; height:155px !important;"><div class="venue_name eb_font_title headline float_left"><a href="/venues/{{id}}" target="_blank">{{name}}</a></div><div class="clear"></div>{{image}}<div class="type">{{venue_types_text}}</div>{{neighborhood_template}}<div id="char_rating" class="CharacterRating ratings_small_wrapper float_left"></div><div class="address">{{address}}</div><div class="phone_number">{{phone}}</div><div class="clear"></div><div class="hotspot_text_wrapper"><span class="hot_spot icon_types"></span><span class="hotspot_text"> Hotspot on {{hotspot_text}}</span></div></div>',
a):pe.templatize('<div class="VenuePopup venue_popup" style="width: 330px !important; height:130px !important;"><div class="venue_name eb_font_title headline float_left"><a href="/venues/{{id}}" target="_blank">{{name}}</a></div><div class="clear"></div> {{image}}<div class="type">{{venue_types_text}}</div>{{neighborhood_template}}<div id="char_rating" class="CharacterRating ratings_small_wrapper float_left"></div><div class="address">{{address}}</div><div class="phone_number">{{phone}}</div><div class="clear"></div> </div>',
a)};
pe.Map.prototype.popup_template_landmark=function(a){a.image="";a.thumbnail&&(a.image=pe.templatize('<div class="map_venue_img float_left ConvertToRoundedCorners"><img src="'+pe.https(pe.assign_photo_size(a.thumbnail,"100","100x100"))+'" /></div>',a));return pe.templatize('<div class="VenuePopup venue_popup landmark" style="width: 330px !important; height:130px !important;"><div class="venue_name eb_font_title headline float_left">{{name}}</div><div class="clear"></div> {{image}}<div class="desc">{{description}}</div><div class="clear"></div> </div>',a)};
pe.Map.prototype.popup_template_user_location=function(a){return pe.templatize('<div class="user_location_popup" style="width:200px !important; height:80px !important;">{{user_location}}</div>',{user_location:a})};
pe.Map.prototype.popup_template_venue=function(a){a.image=pe.templatize('<div class="map_venue_img float_left"><a href="{{url}}" target="_blank" class="ConvertToRoundedCorners"><img src="'+pe.https(pe.assign_photo_size(a.thumbnail,"100","100x100"))+'" /></a></div>',a);a.venue_types_text=a.venue_types.join("/");a.neighborhood_template=a.neighborhood_is_visible?pe.templatize('<div class="neighborhood"><a href="/{{city_id}}/{{neighborhood_id}}-5/" class="blue_link" target="_blank">{{neighborhood_name}}</a></div>',
a):pe.templatize('<div class="neighborhood"><span class="gray_link">{{neighborhood_name}}</span></div>',a);return this.page===pe.Map.pages.SEARCH?pe.templatize('<div class="VenuePopup venue_popup" style="width: 330px !important; height:130px !important;"><div class="venue_name eb_font_title headline float_left"><a href="{{url}}" target="_blank">{{name}}</a></div><div class="clear"></div>{{image}}<div class="type">{{venue_types_text}}</div>{{neighborhood_template}}<div id="char_rating" class="CharacterRating ratings_small_wrapper float_left"></div><div class="address">{{address}}</div><div class="phone_number">{{phone}}</div><div class="clear"></div> </div>',
a):pe.templatize('<div class="VenuePopup venue_popup" style="width: 330px !important; height:130px !important;"><div class="venue_name eb_font_title headline float_left"><a href="{{url}}" target="_blank">{{name}}</a></div><div class="clear"></div> {{image}}<div class="type">{{venue_types_text}}</div>{{neighborhood_template}}<div id="char_rating" class="CharacterRating ratings_small_wrapper float_left"></div><div class="address">{{address}}</div><div class="phone_number">{{phone}}</div><div class="clear"></div> </div>',
a)};pe.Map.prototype.remove_marker=function(a){a.setMap(null);this.markers[a.type]=pe.map_tools.remove_marker_from_array(this.markers[a.type],a)};
pe.Map.prototype.set_cities=function(a){this.close_info_window();$.each(this.markers.CITY,this.callback(function(a,b){this.remove_marker(b)}));$.each(a,this.callback(function(a,b){var d=this.bubble_template_city(b);this.add_marker({type:pe.Map.marker_types.CITY,icon:pe.map_tools.marker_icon(pe.Map.marker_types.CITY,b),object_id:b.id,object_url:b.url,latitude:b.latitude,longitude:b.longitude,bubble_html:d,marker_clicked:this.callback(this.city_marker_clicked)})}))};
pe.Map.prototype.set_current_event=function(a){a=pe.map_tools.event_map_data([a]);a=pe.map_tools.find_objects_to_add(this.markers.EVENT,a);$.each(a,this.callback(function(a,b){this.add_marker({type:pe.Map.marker_types.CURRENT_OBJECT,icon:pe.map_tools.marker_icon(pe.Map.marker_types.CURRENT_OBJECT,b),zIndex:1E3,object_id:b.id,object_url:b.url,latitude:b.latitude,longitude:b.longitude,bubble_html:this.bubble_template_event(b),popup_html:this.popup_template_event(b),neighborhood:b.neighborhood,events:b.events});
this.current_venue_ids.push(b.id)}))};pe.Map.prototype.set_current_venue=function(a){this.add_marker({type:pe.Map.marker_types.CURRENT_OBJECT,icon:pe.map_tools.marker_icon(pe.Map.marker_types.CURRENT_OBJECT,a),zIndex:2E3,object_id:a.id,object_url:a.url,latitude:a.latitude,longitude:a.longitude,bubble_html:this.bubble_template_venue(a),neighborhood:a.neighborhood,ratings:{rating_lucas:a.rating_lucas,rating_adriana:a.rating_adriana,rating_jonah:a.rating_jonah,rating_emma:a.rating_emma}});this.current_venue_ids.push(a.id)};
pe.Map.prototype.set_events=function(a,c){this.close_info_window();var b=pe.map_tools.event_map_data(a),d=pe.map_tools.find_markers_to_remove(this.markers.EVENT,b);$.each(d,this.callback(function(a,b){-1<this.current_venue_ids.indexOf(b.object_id)||this.remove_marker(b)}));b=pe.map_tools.find_objects_to_add(this.markers.EVENT,b);$.each(b,this.callback(function(a,b){var d=c&&b.neighborhood_id!==c?pe.Map.marker_types.OTHER_EVENT:pe.Map.marker_types.EVENT;-1<this.current_venue_ids.indexOf(b.id)||this.add_marker({type:pe.Map.marker_types.EVENT,
icon:pe.map_tools.marker_icon(d,b),object_id:b.id,object_url:b.url,latitude:b.latitude,longitude:b.longitude,bubble_html:this.bubble_template_event(b),popup_html:this.popup_template_event(b),neighborhood:b.neighborhood,events:b.events})}))};
pe.Map.prototype.set_landmarks=function(a){this.close_info_window();$.each(this.markers.LANDMARK,this.callback(function(a,b){this.remove_marker(b)}));$.each(a,this.callback(function(a,b){0===b.type&&b.map_visibility&&this.add_marker({type:pe.Map.marker_types.LANDMARK,icon:pe.map_tools.marker_icon(pe.Map.marker_types.LANDMARK,b),object_id:b.id,object_url:b.url,latitude:b.latitude,longitude:b.longitude,bubble_html:this.bubble_template_landmark(b),popup_html:this.popup_template_landmark(b),marker_clicked:this.callback(this.landmark_marker_clicked)})}))};
pe.Map.prototype.set_venues=function(a,c){this.close_info_window();var b=pe.VenueSearcher.find_map_hotspots(a),d=pe.VenueSearcher.find_map_venues(a),e=pe.map_tools.find_markers_to_remove(this.markers.VENUE,d);$.each(e,this.callback(function(a,b){-1<this.current_venue_ids.indexOf(b.object_id)||this.remove_marker(b)}));e=pe.map_tools.find_markers_to_remove(this.markers.HOTSPOT,b);$.each(e,this.callback(function(a,b){this.remove_marker(b)}));d=pe.map_tools.find_objects_to_add(this.markers.VENUE,d);$.each(d,
this.callback(function(a,b){if(!(-1<this.current_venue_ids.indexOf(b.id))){var d=this.bubble_template_venue(b);this.add_marker({type:pe.Map.marker_types.VENUE,icon:pe.map_tools.marker_icon(c&&b.neighborhood_id!==c?pe.Map.marker_types.OTHER_VENUE:pe.Map.marker_types.VENUE,b),object_id:b.id,object_url:b.url,latitude:b.latitude,longitude:b.longitude,is_visible:b.is_visible,bubble_html:d,popup_html:this.popup_template_venue(b),neighborhood:b.neighborhood,ratings:{rating_lucas:b.rating_lucas,rating_adriana:b.rating_adriana,
rating_jonah:b.rating_jonah,rating_emma:b.rating_emma}})}}));b=pe.map_tools.find_objects_to_add(this.markers.HOTSPOT,b);$.each(b,this.callback(function(a,b){var c=this.bubble_template_venue(b);this.add_marker({type:pe.Map.marker_types.HOTSPOT,icon:pe.map_tools.marker_icon(pe.Map.marker_types.HOTSPOT,b),object_id:b.id,object_url:b.url,latitude:b.latitude,longitude:b.longitude,is_visible:b.is_visible,bubble_html:c,popup_html:this.popup_template_hotspot(b),neighborhood:b.neighborhood,ratings:{rating_lucas:b.rating_lucas,
rating_adriana:b.rating_adriana,rating_jonah:b.rating_jonah,rating_emma:b.rating_emma}})}))};pe.Map.prototype.set_view=function(a,c,b){this.map.setCenter(new google.maps.LatLng(a,c));a=parseInt(b,10);isNaN(a)||(this.map.setZoom(a),this.zoom_changed())};
pe.Map.prototype.show_popup=function(a){var c=null;"string"===typeof a?($.each(this.markers.VENUE,function(b,e){if(e.object_id===a)return c=e,!1}),c||$.each(this.markers.HOTSPOT,function(b,e){if(e.object_id===a)return c=e,!1}),c||$.each(this.markers.EVENT,function(b,e){if(e.object_id===a)return c=e,!1})):c=a;if(c){var b=new google.maps.InfoWindow({content:c.popup_html});this.close_info_window();b.open(this.map,c);this.infowindow=b;pe.convert_to_rounded_corners();google.maps.event.addListener(b,"domready",
function(){var a=$(".VenuePopup .CharacterRating");a.length&&c.ratings&&new pe.SearchResultCharacterRatingModule(a,c.ratings)})}};pe.Map.prototype.switch_to_global_view=function(){this.zoom_state=pe.Map.zoom_states.GLOBAL;this.map.setMapTypeId(google.maps.MapTypeId.TERRAIN);pe.ajax_loader.cities.load(pe.cities_timestamp(),this.callback(function(a){this.set_cities(a);this.set_venues([]);this.set_events([])}));this.fire_event(pe.Map.events.ZOOM_STATE_CHANGED,this.zoom_state)};
pe.Map.prototype.switch_to_local_view=function(a){this.zoom_state=pe.Map.zoom_states.LOCAL;this.map.setMapTypeId(google.maps.MapTypeId.ROADMAP);setTimeout(this.callback(function(){var c=this.map.getBounds();a===this.global_zoom_level_limit&&pe.ajax_loader.locate_city.load({north:c.getNorthEast().lat(),south:c.getSouthWest().lat(),east:c.getNorthEast().lng(),west:c.getSouthWest().lng()},this.callback(function(a){if(1===a.length){pe.ajax_loader.city_venues_for_map.load({city_id:a[0].id},this.callback(function(c){var d=
new pe.SearchConfiguration;pe.VenueSearcher.mark_hotspots(c,d);pe.VenueSearcher.mark_venue_map_visibility(c,d);this.set_venues(c);this.fire_event(pe.Map.events.CITY_CHANGED,a[0]);this.set_cities([])}));var c=pe.today_date_string();pe.ajax_loader.city_events_on_date_for_map.load({city:a[0].id,start_date:c,end_date:c,timestamp:pe.events_timestamp()},this.callback(function(a){this.set_events(a)}))}this.fire_event(pe.Map.events.ZOOM_STATE_CHANGED,this.zoom_state)}))}),0)};
pe.Map.prototype.zoom_changed=function(){var a=this.map.getZoom();a<this.global_zoom_level_limit&&this.zoom_state!==pe.Map.zoom_states.GLOBAL&&this.switch_to_global_view();a>=this.global_zoom_level_limit&&this.zoom_state!==pe.Map.zoom_states.LOCAL&&this.switch_to_local_view(a);this.fire_event(pe.Map.events.ZOOM_LEVEL_CHANGED,a)};
$(document).ready(function(){pe.map=new pe.Map($(".map"),window.map_data.latitude,window.map_data.longitude,window.map_data.default_zoom_level,google.maps.MapTypeId.ROADMAP,{});$(".edit_city").submit(pe.submitting);pe.ajax_loader.city_venues.load({city_id:window.map_data.id,timestamp:pe.venues_timestamp()},function(a){pe.map.set_venues(a)});pe.init_page_framework()});
pe.submitting=function(){var a=pe.map.map.getCenter();$("#city_latitude").val(a.lat().toString());$("#city_longitude").val(a.lng().toString());$("#city_default_zoom_level").val(pe.map.map.getZoom().toString())};
