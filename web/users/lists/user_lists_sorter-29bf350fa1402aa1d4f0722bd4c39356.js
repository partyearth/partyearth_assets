pe.routes={map:{search_autocomplete:"{{city_id}}/search/autocomplete.ehtml/",api_user_list:"/api/user_lists/{{id}}",api_reorder_user_list:"/api/user_lists/{{id}}/reorder",api_user_list_favorites:"/api/user_lists/{{id}}/favorites",api_favorite:"/api/favorites/{{id}}",holiday:"/{{city_id}}/holidays/{{id}}-7",holiday_comments:"/services/holidays/{{id}}/comments",holiday_reactions:"/holidays/{{id}}/reactions/all",new_holiday_reactions:"/holidays/{{id}}/reactions",holiday_calendar:"/{{city_id}}/holidays/{{id}}-7/calendar",
holiday_photos:"/api/{{city_id}}/holidays/{{id}}/photos",holiday_map_venues:"/api/maps/holidays/{{slug}}/venues",holiday_map_events:"/api/maps/holidays/{{slug}}/events",venue_map_popup:"/venues/{{venue_id}}/map_popup",map_venues:"/api/cities/{{city_id}}/maps/venues",map_events:"/api/cities/{{city_id}}/maps/events",map_neighborhood_venues:"/api/maps/neighborhoods/{{neighborhood_id}}/venues",map_neighborhood_events:"/api/maps/neighborhoods/{{neighborhood_id}}/events",map_neighborhood_endpoint_venues:"/api/maps/neighborhoods/{{neighborhood_id}}/endpoints/{{endpoint_id}}/venues",
map_neighborhood_endpoint_events:"/api/maps/neighborhoods/{{neighborhood_id}}/endpoints/{{endpoint_id}}/events",user_list_map_venues:"/api/maps/users/{{user_id}}/lists/{{id}}/venues",user_list_map_events:"/api/maps/users/{{user_id}}/lists/{{id}}/events",user_lists:"/users/{{user_id}}/lists",user_list:"/users/{{user_id}}/lists/{{id}}",user_comments:"/users/{{user_id}}/comments",user_reviews:"/users/{{user_id}}/reviews",list_comments:"/services/lists/{{id}}/comments",list_reactions:"/lists/{{id}}/reactions/all",
new_list_reactions:"/lists/{{id}}/reactions",user_personalities:"/users/{{id}}/personalities",user:"/users/{{id}}",api_user:"/api/users/{{id}}",event:"/{{city_id}}/{{*endpoints}}/{{id}}-1"}};pe.routes.build_path=function(a,b){var c=pe.routes.map[a],e=c.match(/\{\{\*(.+)\}\}/);_.each(e,function(a){b[a]&&(b[a]=b[a].join("/"))});c=c.replace(/\*/,"");return pe.routes.clean_url(pe.templatize(c,b))};
pe.routes.clean_url=function(a){return("/"+a).replace(/#[^$\/]+/,"").replace(/(^[^?]+)([^:])\/\//,"$1$2/").replace(/\/\//g,"/")};pe.routes.current_url_params=function(){var a=pe.routes.recognize_path(window.location.pathname);return a?a.params:{}};
pe.routes.recognize_path=function(a){a=pe.routes.clean_url(a);var b,c,e=_.find(_.keys(pe.routes.map),function(e){b=pe.routes.map[e];c=RegExp(b.replace(/\//g,"\\/").replace(/\{\{[^\{\}]+\}\}/g,"(.+)"));return c.test(a)});if(e){for(var f=_.map(b.match(/\{\{[^\}]+\}\}/g),function(a){return a.replace(/\{|\}/g,"")}),g=a.match(c).slice(1,99),h={params:{}},j=function(a){return!_.isEmpty(a)},d=0;d<f.length;d++)"*"==f[d][0]&&(f[d]=f[d].replace(/\*/g,""),g[d]=_.select(g[d].replace(/\*/g,"").split("/"),j)),
h.params[f[d]]=g[d];h.path_info={name:e,template:b};return h}return!1};pe.routes.Request=function(a,b,c){pe.routes.map[a]?(this.path=a,"object"!==typeof b&&(b={id:b}),this.params=b,this.callback=c):alert("This path is not registered in the routes map.")};pe.routes.Request.factory=function(a,b,c){return new pe.routes.Request(a,b,c)};pe.routes.Request.from_current_location=function(a,b,c){b=b||{};var e=pe.routes.current_url_params();return new pe.routes.Request(a,_.extend(e,b),c)};
pe.routes.Request.prototype.ajax=function(a,b){var c="function"===typeof b?b:this.callback;$.ajax({url:this.build_path(),data:this.params,type:a,success:c})};pe.routes.Request.prototype.build_path=function(){return pe.routes.build_path(this.path,this.params)};pe.routes.Request.prototype.get=function(a){this.ajax("GET",a)};pe.routes.Request.prototype.post=function(a){this.ajax("POST",a)};
(function(){var a=function(a,b){return function(){return a.apply(b,arguments)}},b=pe,c=function(b,c){this.container=b;this.trigger=c;this.disable_links=a(this.disable_links,this);this.trigger_clicked=a(this.trigger_clicked,this);this.on_remove_button_clicked=a(this.on_remove_button_clicked,this);this.on_drop=a(this.on_drop,this);this.drop=a(this.drop,this);this.disabled=!0;this.sorter=this.container.sortable({update:this.on_drop,containment:"#wrapper"});this.sorter.sortable("disable");this.trigger.click(this.trigger_clicked);
this.container.find(".RemoveButton").click(this.on_remove_button_clicked)};c.prototype.drop=function(a){return this.on_drop_callback=a};c.prototype.on_drop=function(){var a;a=this.sorter.sortable("toArray",{attribute:"data-favorite"});return pe.routes.Request.from_current_location("api_reorder_user_list",{favorite_ids:a}).post(this.on_drop_callback)};c.prototype.on_remove_button_clicked=function(a){var b;b=$(a.currentTarget).parents("li");b.css("opacity",0.3);a={id:b.data("favorite"),_method:"delete"};
(new pe.routes.Request("api_favorite",a)).post(function(){return b.remove()});return!1};c.prototype.trigger_clicked=function(){if(this.disabled)return this.disabled=!1,this.sorter.sortable("enable"),this.trigger.html("Done"),this.container.find("a").click(this.disable_links);this.disabled=!0;this.sorter.sortable("disable");this.trigger.html("Reorder");return this.container.find("a").unbind("click",this.disable_links)};c.prototype.disable_links=function(a){a.preventDefault();return!1};b.UserListSorter=
c}).call(this);
