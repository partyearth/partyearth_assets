pe.routes={map:{search_autocomplete:"{{city_id}}/search/autocomplete.ehtml/",api_user_list:"/api/user_lists/{{id}}",api_reorder_user_list:"/api/user_lists/{{id}}/reorder",api_user_list_favorites:"/api/user_lists/{{id}}/favorites",api_favorite:"/api/favorites/{{id}}",api_favorite_vote_yes:"/api/favorites/{{id}}/vote_yes",api_favorite_vote_huh:"/api/favorites/{{id}}/vote_huh",holiday:"/{{city_id}}/holidays/{{id}}-7",holiday_comments:"/services/holidays/{{id}}/comments",holiday_reactions:"/holidays/{{id}}/reactions/all",
new_holiday_reactions:"/holidays/{{id}}/reactions",holiday_calendar:"/{{city_id}}/holidays/{{id}}-7/calendar",holiday_photos:"/api/{{city_id}}/holidays/{{id}}/photos",holiday_map_venues:"/api/maps/holidays/{{slug}}/venues",holiday_map_events:"/api/maps/holidays/{{slug}}/events",venue_map_popup:"/venues/{{venue_id}}/map_popup",map_venues:"/api/cities/{{city_id}}/maps/venues",map_events:"/api/cities/{{city_id}}/maps/events",map_neighborhood_venues:"/api/maps/neighborhoods/{{neighborhood_id}}/venues",
map_neighborhood_events:"/api/maps/neighborhoods/{{neighborhood_id}}/events",map_neighborhood_endpoint_venues:"/api/maps/neighborhoods/{{neighborhood_id}}/endpoints/{{endpoint_id}}/venues",map_neighborhood_endpoint_events:"/api/maps/neighborhoods/{{neighborhood_id}}/endpoints/{{endpoint_id}}/events",user_list_map_venues:"/api/maps/users/{{user_id}}/lists/{{id}}/venues",user_list_map_events:"/api/maps/users/{{user_id}}/lists/{{id}}/events",create_button_user_dashboard_event:"/users/{{user_id}}/dashboard/buttons/{{id}}",
generate_button_user_dashboard_event:"/users/{{user_id}}/dashboard/buttons/{{id}}/generate",user_list:"/users/{{user_id}}/lists/{{id}}",user_lists:"/users/{{user_id}}/lists",user_comments:"/users/{{user_id}}/comments",user_reviews:"/users/{{user_id}}/reviews",list_items:"/lists/{{id}}/list_items",list_comments:"/services/lists/{{id}}/comments",list_reactions:"/lists/{{id}}/reactions/all",new_list_reactions:"/lists/{{id}}/reactions",user_personalities:"/users/{{id}}/personalities",user:"/users/{{id}}",
api_user:"/api/users/{{id}}",event:"/{{city_id}}/{{*endpoints}}/{{id}}-1",tickets:"/{{city_id}}/{{*endpoints}}/{{id}}-1/tickets",purchase_tickets:"/{{city_id}}/{{*endpoints}}/{{id}}-1/tickets/purchase",tickets_confirmation:"/{{city_id}}/{{*endpoints}}/{{id}}-1/tickets/confirmation",api_ticket_orders:"/api/ticket_orders",api_close_ticket_order:"/api/ticket_orders/{{id}}/close",api_ticket_orders_disable_pending:"/api/ticket_orders/disable_pending",api_ticket_orders_countdown_seconds:"/api/ticket_orders/countdown_seconds",
admin_event_ticket_types:"/admin/events/{{event_id}}/ticket_types",admin_event_ticket_promo_codes:"/admin/events/{{event_id}}/ticket_promo_codes",update_status_admin_event_ticket_promo_codes:"/admin/events/{{event_id}}/ticket_promo_codes/{{id}}/update_status",event_type_tags:"/api/tags/event_types",find_your_scene:"/services/find_your_scene.ehtml",missing_info:"/services/contact_messages/missing_info.ehtml",send_message:"/services/contact_messages/",subscription_select:"/services/subscriptions/web.ehtml",
subscriptions_create:"/services/subscriptions/web",creeper_dialog:"/services/creeper.ehtml",creeper_subscribe:"/services/creeper/subscribe",creeper_close:"/services/creeper/close",character:"/pe-reviewers/{{id}}.ehtml",ask_party_earth:"/api/questions",mobile_subscribe:"/services/subscriptions/mobile",client_signup_form:"/clients/forms.ehtml"}};
pe.routes.build_path=function(a,b){var d=pe.routes.map[a],c=d.match(/\{\{\*(.+)\}\}/);_.each(c,function(c){b[c]&&(b[c]=b[c].join("/"))});d=d.replace(/\*/,"");b=b||{};return pe.routes.clean_url(pe.templatize(d,b))};pe.routes.clean_url=function(a){return("/"+a).replace(/#[^$\/]+/,"").replace(/(^[^?]+)([^:])\/\//,"$1$2/").replace(/\/\//g,"/")};pe.routes.current_url_params=function(){var a=pe.routes.recognize_path(window.location.pathname);return a?a.params:{}};
pe.routes.recognize_path=function(a){a=pe.routes.clean_url(a);var b,d,c=_.find(_.keys(pe.routes.map),function(c){b=pe.routes.map[c];d=RegExp(b.replace(/\//g,"\\/").replace(/\{\{[^\{\}]+\}\}/g,"(.+)"));return d.test(a)});if(c){for(var g=_.map(b.match(/\{\{[^\}]+\}\}/g),function(c){return c.replace(/\{|\}/g,"")}),h=a.match(d).slice(1,99),f={params:{}},j=function(c){return!_.isEmpty(c)},e=0;e<g.length;e++)"*"==g[e][0]&&(g[e]=g[e].replace(/\*/g,""),h[e]=_.select(h[e].replace(/\*/g,"").split("/"),j)),
f.params[g[e]]=h[e];f.path_info={name:c,template:b};return f}return!1};pe.routes.Request=function(a,b,d){pe.routes.map[a]?(this.path=a,"object"!==typeof b&&(b={id:b}),this.params=b,this.callback=d):alert("This path is not registered in the routes map.")};pe.routes.Request.factory=function(a,b,d){return new pe.routes.Request(a,b,d)};pe.routes.Request.from_current_location=function(a,b,d){b=b||{};var c=pe.routes.current_url_params();return new pe.routes.Request(a,_.extend(c,b),d)};
pe.routes.Request.prototype.ajax=function(a,b){var d="function"===typeof b?b:this.callback;$.ajax({url:this.build_path(),data:this.params,type:a,success:d})};pe.routes.Request.prototype.build_path=function(){return pe.routes.build_path(this.path,this.params)};pe.routes.Request.prototype.get=function(a){this.ajax("GET",a)};pe.routes.Request.prototype.post=function(a){this.ajax("POST",a)};
(function(){var a=function(c,a){return function(){return c.apply(a,arguments)}},b=pe,d=function(c){this.container=c;this.vote_huh=a(this.vote_huh,this);this.vote_yes=a(this.vote_yes,this);this.cookie_name="favorites_yes_huh";this.yes_selector=".Yes";this.huh_selector=".Huh";this.container.find(this.yes_selector).click(this.vote_yes);this.container.find(this.huh_selector).click(this.vote_huh);this.select_voted_buttons()};d.prototype.vote_yes=function(c){var a;a=$(c.currentTarget);c=a.closest(this.container.selector);
a.toggleClass("selected");c.find(this.huh_selector).removeClass("selected");return this.vote(c,"api_favorite_vote_yes")};d.prototype.vote_huh=function(c){var a;a=$(c.currentTarget);c=a.closest(this.container.selector);a.toggleClass("selected");c.find(this.yes_selector).removeClass("selected");return this.vote(c,"api_favorite_vote_huh")};d.prototype.get_cookie=function(){var c,a,b;a=document.cookie.split(";");b=null;c=this.cookie_name;_.each(a,function(a){a=a.split("=");if($.trim(a[0])===c)return b=
decodeURIComponent(a[1]),!0});return b?JSON.parse(b):{}};d.prototype.select_voted_buttons=function(){var a;a=this.get_cookie();return _.each(a,function(a,c){var b;b=$(".YesHuhButtons[data-favorite_id="+c+"]");"yes"===a&&b.find(".Yes").addClass("selected");if("huh"===a)return b.find(".Huh").addClass("selected")})};d.prototype.vote=function(a,b){var d,f=this;d={_method:"put",id:a.data("favorite_id")};return pe.routes.Request.factory(b,d).post(function(b){var d;d=b.instance;b=0<d.yes_count?d.yes_count:
"";d=0<d.huh_count?d.huh_count:"";a.find(f.yes_selector).find(".Count").html(b);return a.find(f.huh_selector).find(".Count").html(d)})};b.YesHuhButtons=d}).call(this);
