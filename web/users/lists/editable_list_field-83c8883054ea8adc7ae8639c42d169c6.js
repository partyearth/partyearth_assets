(function(b){b.fn.editable=function(a,d){if("disable"==a)b(this).data("disabled.editable",!0);else if("enable"==a)b(this).data("disabled.editable",!1);else if("destroy"==a)b(this).unbind(b(this).data("event.editable")).removeData("disabled.editable").removeData("event.editable");else{var c=b.extend({},b.fn.editable.defaults,{target:a},d),e=b.editable.types[c.type].plugin||function(){},f=b.editable.types[c.type].submit||function(){},k=b.editable.types[c.type].buttons||b.editable.types.defaults.buttons,
l=b.editable.types[c.type].content||b.editable.types.defaults.content,h=b.editable.types[c.type].element||b.editable.types.defaults.element,q=b.editable.types[c.type].reset||b.editable.types.defaults.reset,r=c.callback||function(){},s=c.onedit||function(){},t=c.onsubmit||function(){},u=c.onreset||function(){},v=c.onerror||q;c.tooltip&&b(this).attr("title",c.tooltip);c.autowidth="auto"==c.width;c.autoheight="auto"==c.height;return this.each(function(){var a=this,d=b(a).width(),w=b(a).height();b(this).data("event.editable",
c.event);b.trim(b(this).html())||b(this).html(c.placeholder);b(this).bind(c.event,function(m){if(!0!==b(this).data("disabled.editable")&&!a.editing&&!1!==s.apply(this,[c,a])){m.preventDefault();m.stopPropagation();c.tooltip&&b(a).removeAttr("title");0==b(a).width()?(c.width=d,c.height=w):("none"!=c.width&&(c.width=c.autowidth?b(a).width():c.width),"none"!=c.height&&(c.height=c.autoheight?b(a).height():c.height));b(this).html().toLowerCase().replace(/(;|")/g,"")==c.placeholder.toLowerCase().replace(/(;|")/g,
"")&&b(this).html("");a.editing=!0;a.revert=b(a).html();b(a).html("");var g=b("<form />");c.cssclass&&("inherit"==c.cssclass?g.attr("class",b(a).attr("class")):g.attr("class",c.cssclass));c.style&&("inherit"==c.style?(g.attr("style",b(a).attr("style")),g.css("display",b(a).css("display"))):g.attr("style",c.style));var j=h.apply(g,[c,a]),n;if(c.loadurl){var p=setTimeout(function(){j.disabled=!0;l.apply(g,[c.loadtext,c,a])},100);m={};m[c.id]=a.id;b.isFunction(c.loaddata)?b.extend(m,c.loaddata.apply(a,
[a.revert,c])):b.extend(m,c.loaddata);b.ajax({type:c.loadtype,url:c.loadurl,data:m,async:!1,success:function(a){window.clearTimeout(p);n=a;j.disabled=!1}})}else c.data?(n=c.data,b.isFunction(c.data)&&(n=c.data.apply(a,[a.revert,c]))):n=a.revert;l.apply(g,[n,c,a]);j.attr("name",c.name);k.apply(g,[c,a]);b(a).append(g);e.apply(g,[c,a]);b(":input:visible:enabled:first",g).focus();c.select&&j.select();j.keydown(function(b){27==b.keyCode&&(b.preventDefault(),q.apply(g,[c,a]))});"cancel"==c.onblur?j.blur(function(){p=
setTimeout(function(){q.apply(g,[c,a])},500)}):"submit"==c.onblur?j.blur(function(){p=setTimeout(function(){g.submit()},200)}):b.isFunction(c.onblur)?j.blur(function(){c.onblur.apply(a,[j.val(),c])}):j.blur(function(){});g.submit(function(d){p&&clearTimeout(p);d.preventDefault();if(!1!==t.apply(g,[c,a])&&!1!==f.apply(g,[c,a]))if(b.isFunction(c.target))d=c.target.apply(a,[j.val(),c]),b(a).html(d),a.editing=!1,r.apply(a,[a.innerHTML,c]),b.trim(b(a).html())||b(a).html(c.placeholder);else{d={};d[c.name]=
j.val();d[c.id]=a.id;b.isFunction(c.submitdata)?b.extend(d,c.submitdata.apply(a,[a.revert,c])):b.extend(d,c.submitdata);"PUT"==c.method&&(d._method="put");b(a).html(c.indicator);var e={type:"POST",data:d,dataType:"html",url:c.target,success:function(d){"html"==e.dataType&&b(a).html(d);a.editing=!1;r.apply(a,[d,c]);b.trim(b(a).html())||b(a).html(c.placeholder)},error:function(b){v.apply(g,[c,a,b])}};b.extend(e,c.ajaxoptions);b.ajax(e)}b(a).attr("title",c.tooltip);return!1})}});this.reset=function(d){this.editing&&
!1!==u.apply(d,[c,a])&&(b(a).html(a.revert),a.editing=!1,b.trim(b(a).html())||b(a).html(c.placeholder),c.tooltip&&b(a).attr("title",c.tooltip))}})}};b.editable={types:{defaults:{element:function(){var a=b('<input type="hidden"></input>');b(this).append(a);return a},content:function(a){b(":input:first",this).val(a)},reset:function(a,b){b.reset(this)},buttons:function(a,d){var c=this;if(a.submit){if(a.submit.match(/>$/))var e=b(a.submit).click(function(){"submit"!=e.attr("type")&&c.submit()});else e=
b('<button type="submit" />'),e.html(a.submit);b(this).append(e)}if(a.cancel){if(a.cancel.match(/>$/))var f=b(a.cancel);else f=b('<button type="cancel" />'),f.html(a.cancel);b(this).append(f);b(f).click(function(){(b.isFunction(b.editable.types[a.type].reset)?b.editable.types[a.type].reset:b.editable.types.defaults.reset).apply(c,[a,d]);return!1})}}},text:{element:function(a){var d=b("<input />");"none"!=a.width&&d.width(a.width);"none"!=a.height&&d.height(a.height);d.attr("autocomplete","off");b(this).append(d);
return d}},textarea:{element:function(a){var d=b("<textarea />");a.rows?d.attr("rows",a.rows):"none"!=a.height&&d.height(a.height);a.cols?d.attr("cols",a.cols):"none"!=a.width&&d.width(a.width);b(this).append(d);return d}},select:{element:function(){var a=b("<select />");b(this).append(a);return a},content:function(a,d,c){if(String==a.constructor)eval("var json = "+a);else var e=a;for(var f in e)e.hasOwnProperty(f)&&"selected"!=f&&(a=b("<option />").val(f).append(e[f]),b("select",this).append(a));
b("select",this).children().each(function(){(b(this).val()==e.selected||b(this).text()==b.trim(c.revert))&&b(this).attr("selected","selected")})}}},addInputType:function(a,d){b.editable.types[a]=d}};b.fn.editable.defaults={name:"value",id:"id",type:"text",width:"auto",height:"auto",event:"click.editable",onblur:"cancel",loadtype:"GET",loadtext:"Loading...",placeholder:"Click to edit",loaddata:{},submitdata:{},ajaxoptions:{}}})(jQuery);
(function(){var b=pe,a=function(a,b){this.container=a;this.options=b;this.field=this.options.field;this.allow_empty_value=!!this.options.allow_empty_value;this.current_url_params=pe.routes.current_url_params();this.container.click(this.on_container_clicked);this.options.jeditable.data=function(a){return a.replace(/<br[\s\/]?>/gi,"\n").replace(/&amp;/,"&")};this.options.jeditable.select=!1;this.container.editable(this.on_value_changed,this.options.jeditable);this.on_submit=this.options.submit||function(){}};
a.prototype.on_container_clicked=function(a){var b;b=$(a.currentTarget).find("textarea");if(0<b.length)return a=b.val(),a=a.replace(/\n\s+/g,"\n"),a=a.replace(/<br>/g,"\n"),a=a.replace(/&amp;/,"&"),b.val(a)};a.prototype.is_valid_value=function(a){return this.allow_empty_value||!(_.isEmpty(a.replace(/\s+/g,""))||this.options.jeditable.placeholder===a)};a.prototype.is_valid=function(){return this.is_valid_value(this.container.html())};b.EditableField=a}).call(this);
pe.routes={map:{search_autocomplete:"{{city_id}}/search/autocomplete.ehtml/",api_user_list:"/api/user_lists/{{id}}",api_reorder_user_list:"/api/user_lists/{{id}}/reorder",api_user_list_favorites:"/api/user_lists/{{id}}/favorites",api_favorite:"/api/favorites/{{id}}",api_favorite_vote_yes:"/api/favorites/{{id}}/vote_yes",api_favorite_vote_huh:"/api/favorites/{{id}}/vote_huh",holiday:"/{{city_id}}/holidays/{{id}}-7",holiday_comments:"/services/holidays/{{id}}/comments",holiday_reactions:"/holidays/{{id}}/reactions/all",
new_holiday_reactions:"/holidays/{{id}}/reactions",holiday_calendar:"/{{city_id}}/holidays/{{id}}-7/calendar",holiday_photos:"/api/{{city_id}}/holidays/{{id}}/photos",holiday_map_venues:"/api/maps/holidays/{{slug}}/venues",holiday_map_events:"/api/maps/holidays/{{slug}}/events",venue_map_popup:"/venues/{{venue_id}}/map_popup",map_venues:"/api/cities/{{city_id}}/maps/venues",map_events:"/api/cities/{{city_id}}/maps/events",map_neighborhood_venues:"/api/maps/neighborhoods/{{neighborhood_id}}/venues",
map_neighborhood_events:"/api/maps/neighborhoods/{{neighborhood_id}}/events",map_neighborhood_endpoint_venues:"/api/maps/neighborhoods/{{neighborhood_id}}/endpoints/{{endpoint_id}}/venues",map_neighborhood_endpoint_events:"/api/maps/neighborhoods/{{neighborhood_id}}/endpoints/{{endpoint_id}}/events",user_list_map_venues:"/api/maps/users/{{user_id}}/lists/{{id}}/venues",user_list_map_events:"/api/maps/users/{{user_id}}/lists/{{id}}/events",create_button_user_dashboard_event:"/users/{{user_id}}/events-dashboard/{{id}}/create_button",
generate_button_user_dashboard_event:"/users/{{user_id}}/events-dashboard/{{id}}/generate_button",user_list:"/users/{{user_id}}/lists/{{id}}",user_lists:"/users/{{user_id}}/lists",user_comments:"/users/{{user_id}}/comments",user_reviews:"/users/{{user_id}}/reviews",list_items:"/lists/{{id}}/list_items",list_comments:"/services/lists/{{id}}/comments",list_reactions:"/lists/{{id}}/reactions/all",new_list_reactions:"/lists/{{id}}/reactions",user_personalities:"/users/{{id}}/personalities",user:"/users/{{id}}",
api_user:"/api/users/{{id}}",event:"/{{city_id}}/{{*endpoints}}/{{id}}-1",tickets:"/{{city_id}}/{{*endpoints}}/{{id}}-1/tickets",purchase_tickets:"/{{city_id}}/{{*endpoints}}/{{id}}-1/tickets/purchase",tickets_confirmation:"/{{city_id}}/{{*endpoints}}/{{id}}-1/tickets/confirmation",api_ticket_orders:"/api/ticket_orders",api_close_ticket_order:"/api/ticket_orders/{{id}}/close",api_ticket_orders_disable_pending:"/api/ticket_orders/disable_pending",api_ticket_orders_countdown_seconds:"/api/ticket_orders/countdown_seconds",
event_type_tags:"/api/tags/event_types",find_your_scene:"/services/find_your_scene.ehtml",missing_info:"/services/contact_messages/missing_info.ehtml",send_message:"/services/contact_messages/",subscription_select:"/services/subscriptions/web.ehtml",subscriptions_create:"/services/subscriptions/web",creeper_dialog:"/services/creeper.ehtml",creeper_subscribe:"/services/creeper/subscribe",creeper_close:"/services/creeper/close",character:"/pe-reviewers/{{id}}.ehtml",ask_party_earth:"/api/questions",
mobile_subscribe:"/services/subscriptions/mobile"}};pe.routes.build_path=function(b,a){var d=pe.routes.map[b],c=d.match(/\{\{\*(.+)\}\}/);_.each(c,function(b){a[b]&&(a[b]=a[b].join("/"))});d=d.replace(/\*/,"");a=a||{};return pe.routes.clean_url(pe.templatize(d,a))};pe.routes.clean_url=function(b){return("/"+b).replace(/#[^$\/]+/,"").replace(/(^[^?]+)([^:])\/\//,"$1$2/").replace(/\/\//g,"/")};
pe.routes.current_url_params=function(){var b=pe.routes.recognize_path(window.location.pathname);return b?b.params:{}};
pe.routes.recognize_path=function(b){b=pe.routes.clean_url(b);var a,d,c=_.find(_.keys(pe.routes.map),function(c){a=pe.routes.map[c];d=RegExp(a.replace(/\//g,"\\/").replace(/\{\{[^\{\}]+\}\}/g,"(.+)"));return d.test(b)});if(c){for(var e=_.map(a.match(/\{\{[^\}]+\}\}/g),function(a){return a.replace(/\{|\}/g,"")}),f=b.match(d).slice(1,99),k={params:{}},l=function(a){return!_.isEmpty(a)},h=0;h<e.length;h++)"*"==e[h][0]&&(e[h]=e[h].replace(/\*/g,""),f[h]=_.select(f[h].replace(/\*/g,"").split("/"),l)),
k.params[e[h]]=f[h];k.path_info={name:c,template:a};return k}return!1};pe.routes.Request=function(b,a,d){pe.routes.map[b]?(this.path=b,"object"!==typeof a&&(a={id:a}),this.params=a,this.callback=d):alert("This path is not registered in the routes map.")};pe.routes.Request.factory=function(b,a,d){return new pe.routes.Request(b,a,d)};pe.routes.Request.from_current_location=function(b,a,d){a=a||{};var c=pe.routes.current_url_params();return new pe.routes.Request(b,_.extend(c,a),d)};
pe.routes.Request.prototype.ajax=function(b,a){var d="function"===typeof a?a:this.callback;$.ajax({url:this.build_path(),data:this.params,type:b,success:d})};pe.routes.Request.prototype.build_path=function(){return pe.routes.build_path(this.path,this.params)};pe.routes.Request.prototype.get=function(b){this.ajax("GET",b)};pe.routes.Request.prototype.post=function(b){this.ajax("POST",b)};
(function(){var b,a=function(a,b){return function(){return a.apply(b,arguments)}},d={}.hasOwnProperty,c=pe,e=function(){this.on_value_submitted=a(this.on_value_submitted,this);this.on_value_changed=a(this.on_value_changed,this);return b=e.__super__.constructor.apply(this,arguments)},f=e,k=pe.EditableField,l=function(){this.constructor=f},h;for(h in k)d.call(k,h)&&(f[h]=k[h]);l.prototype=k.prototype;f.prototype=new l;f.__super__=k.prototype;e.prototype.on_value_changed=function(a){var b;a=a.replace(/\n\s+/,
"\n");a=a.replace(/&amp;/,"&");this.is_valid_value(a)&&(b={user_list:{},_method:"put"},b.user_list[this.field]=a,b=pe.routes.Request.from_current_location("api_user_list",b),b.post(this.on_value_submitted));this.on_submit();return a.replace(/\n/g,"<br>").replace(/&amp;/,"&")};e.prototype.on_value_submitted=function(a){a=a.instance.url_param;if(this.current_url_params.id!==a)return window.location=pe.routes.build_path("user_list",{user_id:this.current_url_params.user_id,id:a})};c.EditableListField=
e}).call(this);
