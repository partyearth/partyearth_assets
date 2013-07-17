(function(b){b.fn.editable=function(a,d){if("disable"==a)b(this).data("disabled.editable",!0);else if("enable"==a)b(this).data("disabled.editable",!1);else if("destroy"==a)b(this).unbind(b(this).data("event.editable")).removeData("disabled.editable").removeData("event.editable");else{var c=b.extend({},b.fn.editable.defaults,{target:a},d),e=b.editable.types[c.type].plugin||function(){},g=b.editable.types[c.type].submit||function(){},k=b.editable.types[c.type].buttons||b.editable.types.defaults.buttons,
p=b.editable.types[c.type].content||b.editable.types.defaults.content,j=b.editable.types[c.type].element||b.editable.types.defaults.element,q=b.editable.types[c.type].reset||b.editable.types.defaults.reset,r=c.callback||function(){},s=c.onedit||function(){},t=c.onsubmit||function(){},u=c.onreset||function(){},v=c.onerror||q;c.tooltip&&b(this).attr("title",c.tooltip);c.autowidth="auto"==c.width;c.autoheight="auto"==c.height;return this.each(function(){var a=this,d=b(a).width(),w=b(a).height();b(this).data("event.editable",
c.event);b.trim(b(this).html())||b(this).html(c.placeholder);b(this).bind(c.event,function(l){if(!0!==b(this).data("disabled.editable")&&!a.editing&&!1!==s.apply(this,[c,a])){l.preventDefault();l.stopPropagation();c.tooltip&&b(a).removeAttr("title");0==b(a).width()?(c.width=d,c.height=w):("none"!=c.width&&(c.width=c.autowidth?b(a).width():c.width),"none"!=c.height&&(c.height=c.autoheight?b(a).height():c.height));b(this).html().toLowerCase().replace(/(;|")/g,"")==c.placeholder.toLowerCase().replace(/(;|")/g,
"")&&b(this).html("");a.editing=!0;a.revert=b(a).html();b(a).html("");var f=b("<form />");c.cssclass&&("inherit"==c.cssclass?f.attr("class",b(a).attr("class")):f.attr("class",c.cssclass));c.style&&("inherit"==c.style?(f.attr("style",b(a).attr("style")),f.css("display",b(a).css("display"))):f.attr("style",c.style));var h=j.apply(f,[c,a]),m;if(c.loadurl){var n=setTimeout(function(){h.disabled=!0;p.apply(f,[c.loadtext,c,a])},100);l={};l[c.id]=a.id;b.isFunction(c.loaddata)?b.extend(l,c.loaddata.apply(a,
[a.revert,c])):b.extend(l,c.loaddata);b.ajax({type:c.loadtype,url:c.loadurl,data:l,async:!1,success:function(a){window.clearTimeout(n);m=a;h.disabled=!1}})}else c.data?(m=c.data,b.isFunction(c.data)&&(m=c.data.apply(a,[a.revert,c]))):m=a.revert;p.apply(f,[m,c,a]);h.attr("name",c.name);k.apply(f,[c,a]);b(a).append(f);e.apply(f,[c,a]);b(":input:visible:enabled:first",f).focus();c.select&&h.select();h.keydown(function(b){27==b.keyCode&&(b.preventDefault(),q.apply(f,[c,a]))});"cancel"==c.onblur?h.blur(function(){n=
setTimeout(function(){q.apply(f,[c,a])},500)}):"submit"==c.onblur?h.blur(function(){n=setTimeout(function(){f.submit()},200)}):b.isFunction(c.onblur)?h.blur(function(){c.onblur.apply(a,[h.val(),c])}):h.blur(function(){});f.submit(function(d){n&&clearTimeout(n);d.preventDefault();if(!1!==t.apply(f,[c,a])&&!1!==g.apply(f,[c,a]))if(b.isFunction(c.target))d=c.target.apply(a,[h.val(),c]),b(a).html(d),a.editing=!1,r.apply(a,[a.innerHTML,c]),b.trim(b(a).html())||b(a).html(c.placeholder);else{d={};d[c.name]=
h.val();d[c.id]=a.id;b.isFunction(c.submitdata)?b.extend(d,c.submitdata.apply(a,[a.revert,c])):b.extend(d,c.submitdata);"PUT"==c.method&&(d._method="put");b(a).html(c.indicator);var e={type:"POST",data:d,dataType:"html",url:c.target,success:function(d){"html"==e.dataType&&b(a).html(d);a.editing=!1;r.apply(a,[d,c]);b.trim(b(a).html())||b(a).html(c.placeholder)},error:function(b){v.apply(f,[c,a,b])}};b.extend(e,c.ajaxoptions);b.ajax(e)}b(a).attr("title",c.tooltip);return!1})}});this.reset=function(d){this.editing&&
!1!==u.apply(d,[c,a])&&(b(a).html(a.revert),a.editing=!1,b.trim(b(a).html())||b(a).html(c.placeholder),c.tooltip&&b(a).attr("title",c.tooltip))}})}};b.editable={types:{defaults:{element:function(){var a=b('<input type="hidden"></input>');b(this).append(a);return a},content:function(a){b(":input:first",this).val(a)},reset:function(a,b){b.reset(this)},buttons:function(a,d){var c=this;if(a.submit){if(a.submit.match(/>$/))var e=b(a.submit).click(function(){"submit"!=e.attr("type")&&c.submit()});else e=
b('<button type="submit" />'),e.html(a.submit);b(this).append(e)}if(a.cancel){if(a.cancel.match(/>$/))var g=b(a.cancel);else g=b('<button type="cancel" />'),g.html(a.cancel);b(this).append(g);b(g).click(function(){(b.isFunction(b.editable.types[a.type].reset)?b.editable.types[a.type].reset:b.editable.types.defaults.reset).apply(c,[a,d]);return!1})}}},text:{element:function(a){var d=b("<input />");"none"!=a.width&&d.width(a.width);"none"!=a.height&&d.height(a.height);d.attr("autocomplete","off");b(this).append(d);
return d}},textarea:{element:function(a){var d=b("<textarea />");a.rows?d.attr("rows",a.rows):"none"!=a.height&&d.height(a.height);a.cols?d.attr("cols",a.cols):"none"!=a.width&&d.width(a.width);b(this).append(d);return d}},select:{element:function(){var a=b("<select />");b(this).append(a);return a},content:function(a,d,c){if(String==a.constructor)eval("var json = "+a);else var e=a;for(var g in e)e.hasOwnProperty(g)&&"selected"!=g&&(a=b("<option />").val(g).append(e[g]),b("select",this).append(a));
b("select",this).children().each(function(){(b(this).val()==e.selected||b(this).text()==b.trim(c.revert))&&b(this).attr("selected","selected")})}}},addInputType:function(a,d){b.editable.types[a]=d}};b.fn.editable.defaults={name:"value",id:"id",type:"text",width:"auto",height:"auto",event:"click.editable",onblur:"cancel",loadtype:"GET",loadtext:"Loading...",placeholder:"Click to edit",loaddata:{},submitdata:{},ajaxoptions:{}}})(jQuery);
(function(){var b=pe,a=function(a,b){this.container=a;this.options=b;this.field=this.options.field;this.allow_empty_value=!!this.options.allow_empty_value;this.current_url_params=pe.routes.current_url_params();this.container.click(this.on_container_clicked);this.options.jeditable.data=function(a){return a.replace(/<br[\s\/]?>/gi,"\n").replace(/&amp;/,"&")};this.options.jeditable.select=!1;this.container.editable(this.on_value_changed,this.options.jeditable);this.on_submit=this.options.submit||function(){};
this.on_value_changed=function(){};this.on_value_submitted=function(){}};a.prototype.on_container_clicked=function(a){var b;b=$(a.currentTarget).find("textarea");if(0<b.length)return a=b.val(),a=a.replace(/\n\s+/g,"\n"),a=a.replace(/<br>/g,"\n"),a=a.replace(/&amp;/,"&"),b.val(a)};a.prototype.is_valid_value=function(a){return this.allow_empty_value||!(_.isEmpty(a.replace(/\s+/g,""))||this.options.jeditable.placeholder===a)};a.prototype.is_valid=function(){return this.is_valid_value(this.container.html())};
b.EditableField=a}).call(this);
pe.routes={map:{search_autocomplete:"{{city_id}}/search/autocomplete.ehtml/",api_user_list:"/api/user_lists/{{id}}",api_reorder_user_list:"/api/user_lists/{{id}}/reorder",api_user_list_favorites:"/api/user_lists/{{id}}/favorites",api_favorite:"/api/favorites/{{id}}",api_favorite_vote_yes:"/api/favorites/{{id}}/vote_yes",api_favorite_vote_huh:"/api/favorites/{{id}}/vote_huh",holiday:"/{{city_id}}/holidays/{{id}}-7",holiday_comments:"/services/holidays/{{id}}/comments",holiday_reactions:"/holidays/{{id}}/reactions/all",
new_holiday_reactions:"/holidays/{{id}}/reactions",holiday_calendar:"/{{city_id}}/holidays/{{id}}-7/calendar",holiday_photos:"/api/{{city_id}}/holidays/{{id}}/photos",holiday_map_venues:"/api/maps/holidays/{{slug}}/venues",holiday_map_events:"/api/maps/holidays/{{slug}}/events",venue_map_popup:"/venues/{{venue_id}}/map_popup",map_venues:"/api/cities/{{city_id}}/maps/venues",map_events:"/api/cities/{{city_id}}/maps/events",map_neighborhood_venues:"/api/maps/neighborhoods/{{neighborhood_id}}/venues",
map_neighborhood_events:"/api/maps/neighborhoods/{{neighborhood_id}}/events",map_neighborhood_endpoint_venues:"/api/maps/neighborhoods/{{neighborhood_id}}/endpoints/{{endpoint_id}}/venues",map_neighborhood_endpoint_events:"/api/maps/neighborhoods/{{neighborhood_id}}/endpoints/{{endpoint_id}}/events",user_list_map_venues:"/api/maps/users/{{user_id}}/lists/{{id}}/venues",user_list_map_events:"/api/maps/users/{{user_id}}/lists/{{id}}/events",user_list:"/users/{{user_id}}/lists/{{id}}",user_lists:"/users/{{user_id}}/lists",
user_comments:"/users/{{user_id}}/comments",user_reviews:"/users/{{user_id}}/reviews",list_items:"/lists/{{id}}/list_items",list_comments:"/services/lists/{{id}}/comments",list_reactions:"/lists/{{id}}/reactions/all",new_list_reactions:"/lists/{{id}}/reactions",user_personalities:"/users/{{id}}/personalities",user:"/users/{{id}}",api_user:"/api/users/{{id}}",event:"/{{city_id}}/{{*endpoints}}/{{id}}-1",event_type_tags:"/api/tags/event_types",find_your_scene:"/services/find_your_scene.ehtml",missing_info:"/services/contact_messages/missing_info.ehtml",
send_message:"/services/contact_messages/",subscription_close_dialog:"/services/subscriptions/close_dialog",subscription_select:"/services/subscriptions.ehtml",subscriptions_create:"/services/subscriptions",creeper_dialog:"/services/creeper.ehtml",creeper_subscribe:"/services/creeper/subscribe",creeper_close:"/services/creeper/close",character:"/pe-reviewers/{{id}}.ehtml"}};
pe.routes.build_path=function(b,a){var d=pe.routes.map[b],c=d.match(/\{\{\*(.+)\}\}/);_.each(c,function(b){a[b]&&(a[b]=a[b].join("/"))});d=d.replace(/\*/,"");return pe.routes.clean_url(pe.templatize(d,a))};pe.routes.clean_url=function(b){return("/"+b).replace(/#[^$\/]+/,"").replace(/(^[^?]+)([^:])\/\//,"$1$2/").replace(/\/\//g,"/")};pe.routes.current_url_params=function(){var b=pe.routes.recognize_path(window.location.pathname);return b?b.params:{}};
pe.routes.recognize_path=function(b){b=pe.routes.clean_url(b);var a,d,c=_.find(_.keys(pe.routes.map),function(c){a=pe.routes.map[c];d=RegExp(a.replace(/\//g,"\\/").replace(/\{\{[^\{\}]+\}\}/g,"(.+)"));return d.test(b)});if(c){for(var e=_.map(a.match(/\{\{[^\}]+\}\}/g),function(a){return a.replace(/\{|\}/g,"")}),g=b.match(d).slice(1,99),k={params:{}},p=function(a){return!_.isEmpty(a)},j=0;j<e.length;j++)"*"==e[j][0]&&(e[j]=e[j].replace(/\*/g,""),g[j]=_.select(g[j].replace(/\*/g,"").split("/"),p)),
k.params[e[j]]=g[j];k.path_info={name:c,template:a};return k}return!1};pe.routes.Request=function(b,a,d){pe.routes.map[b]?(this.path=b,"object"!==typeof a&&(a={id:a}),this.params=a,this.callback=d):alert("This path is not registered in the routes map.")};pe.routes.Request.factory=function(b,a,d){return new pe.routes.Request(b,a,d)};pe.routes.Request.from_current_location=function(b,a,d){a=a||{};var c=pe.routes.current_url_params();return new pe.routes.Request(b,_.extend(c,a),d)};
pe.routes.Request.prototype.ajax=function(b,a){var d="function"===typeof a?a:this.callback;$.ajax({url:this.build_path(),data:this.params,type:b,success:d})};pe.routes.Request.prototype.build_path=function(){return pe.routes.build_path(this.path,this.params)};pe.routes.Request.prototype.get=function(b){this.ajax("GET",b)};pe.routes.Request.prototype.post=function(b){this.ajax("POST",b)};
(function(){var b=function(a,b){return function(){return a.apply(b,arguments)}},a={}.hasOwnProperty,d=pe,c=function(a,c){var d=this;this.container=a;this.options=c;this.on_value_submitted=b(this.on_value_submitted,this);this.on_value_changed=b(this.on_value_changed,this);this.field=this.options.field;this.allow_empty_value=!!this.options.allow_empty_value;this.current_url_params=pe.routes.current_url_params();this.container.click(this.on_container_clicked);this.options.jeditable.data=function(a){return a.replace(/<br[\s\/]?>/gi,
"\n").replace(/&amp;/,"&")};this.options.jeditable.select=!1;_.each(this.container,function(a){d.options.jeditable.section_id=$(a).attr("id");d.options.jeditable.favorite_id=$(a).data("favorite_id");return $(a).editable(d.on_value_changed,d.options.jeditable)});this.on_submit=this.options.submit||function(){}},e=pe.EditableField,g=function(){this.constructor=c},k;for(k in e)a.call(e,k)&&(c[k]=e[k]);g.prototype=e.prototype;c.prototype=new g;c.__super__=e.prototype;c.prototype.on_value_changed=function(a,
b){var c;a=a.replace(/\n\s+/,"\n");a=a.replace(/&amp;/,"&");this.is_valid_value(a)&&(c={favorite:{},_method:"put",id:b.favorite_id},c.favorite[this.field]=a,c=pe.routes.Request.factory("api_favorite",c),c.post(this.on_value_submitted));this.on_submit(a,b);return a.replace(/\n/g,"<br>")};c.prototype.on_value_submitted=function(a){return a.instance.id};d.EditableFavoriteField=c}).call(this);
