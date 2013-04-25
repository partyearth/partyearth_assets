(function(a){a.fn.editable=function(b,d){if("disable"==b)a(this).data("disabled.editable",!0);else if("enable"==b)a(this).data("disabled.editable",!1);else if("destroy"==b)a(this).unbind(a(this).data("event.editable")).removeData("disabled.editable").removeData("event.editable");else{var c=a.extend({},a.fn.editable.defaults,{target:b},d),e=a.editable.types[c.type].plugin||function(){},g=a.editable.types[c.type].submit||function(){},l=a.editable.types[c.type].buttons||a.editable.types.defaults.buttons,
p=a.editable.types[c.type].content||a.editable.types.defaults.content,j=a.editable.types[c.type].element||a.editable.types.defaults.element,q=a.editable.types[c.type].reset||a.editable.types.defaults.reset,r=c.callback||function(){},s=c.onedit||function(){},t=c.onsubmit||function(){},u=c.onreset||function(){},v=c.onerror||q;c.tooltip&&a(this).attr("title",c.tooltip);c.autowidth="auto"==c.width;c.autoheight="auto"==c.height;return this.each(function(){var b=this,d=a(b).width(),w=a(b).height();a(this).data("event.editable",
c.event);a.trim(a(this).html())||a(this).html(c.placeholder);a(this).bind(c.event,function(k){if(!0!==a(this).data("disabled.editable")&&!b.editing&&!1!==s.apply(this,[c,b])){k.preventDefault();k.stopPropagation();c.tooltip&&a(b).removeAttr("title");0==a(b).width()?(c.width=d,c.height=w):("none"!=c.width&&(c.width=c.autowidth?a(b).width():c.width),"none"!=c.height&&(c.height=c.autoheight?a(b).height():c.height));a(this).html().toLowerCase().replace(/(;|")/g,"")==c.placeholder.toLowerCase().replace(/(;|")/g,
"")&&a(this).html("");b.editing=!0;b.revert=a(b).html();a(b).html("");var f=a("<form />");c.cssclass&&("inherit"==c.cssclass?f.attr("class",a(b).attr("class")):f.attr("class",c.cssclass));c.style&&("inherit"==c.style?(f.attr("style",a(b).attr("style")),f.css("display",a(b).css("display"))):f.attr("style",c.style));var h=j.apply(f,[c,b]),m;if(c.loadurl){var n=setTimeout(function(){h.disabled=!0;p.apply(f,[c.loadtext,c,b])},100);k={};k[c.id]=b.id;a.isFunction(c.loaddata)?a.extend(k,c.loaddata.apply(b,
[b.revert,c])):a.extend(k,c.loaddata);a.ajax({type:c.loadtype,url:c.loadurl,data:k,async:!1,success:function(b){window.clearTimeout(n);m=b;h.disabled=!1}})}else c.data?(m=c.data,a.isFunction(c.data)&&(m=c.data.apply(b,[b.revert,c]))):m=b.revert;p.apply(f,[m,c,b]);h.attr("name",c.name);l.apply(f,[c,b]);a(b).append(f);e.apply(f,[c,b]);a(":input:visible:enabled:first",f).focus();c.select&&h.select();h.keydown(function(a){27==a.keyCode&&(a.preventDefault(),q.apply(f,[c,b]))});"cancel"==c.onblur?h.blur(function(){n=
setTimeout(function(){q.apply(f,[c,b])},500)}):"submit"==c.onblur?h.blur(function(){n=setTimeout(function(){f.submit()},200)}):a.isFunction(c.onblur)?h.blur(function(){c.onblur.apply(b,[h.val(),c])}):h.blur(function(){});f.submit(function(d){n&&clearTimeout(n);d.preventDefault();if(!1!==t.apply(f,[c,b])&&!1!==g.apply(f,[c,b]))if(a.isFunction(c.target))d=c.target.apply(b,[h.val(),c]),a(b).html(d),b.editing=!1,r.apply(b,[b.innerHTML,c]),a.trim(a(b).html())||a(b).html(c.placeholder);else{d={};d[c.name]=
h.val();d[c.id]=b.id;a.isFunction(c.submitdata)?a.extend(d,c.submitdata.apply(b,[b.revert,c])):a.extend(d,c.submitdata);"PUT"==c.method&&(d._method="put");a(b).html(c.indicator);var e={type:"POST",data:d,dataType:"html",url:c.target,success:function(d){"html"==e.dataType&&a(b).html(d);b.editing=!1;r.apply(b,[d,c]);a.trim(a(b).html())||a(b).html(c.placeholder)},error:function(a){v.apply(f,[c,b,a])}};a.extend(e,c.ajaxoptions);a.ajax(e)}a(b).attr("title",c.tooltip);return!1})}});this.reset=function(d){this.editing&&
!1!==u.apply(d,[c,b])&&(a(b).html(b.revert),b.editing=!1,a.trim(a(b).html())||a(b).html(c.placeholder),c.tooltip&&a(b).attr("title",c.tooltip))}})}};a.editable={types:{defaults:{element:function(){var b=a('<input type="hidden"></input>');a(this).append(b);return b},content:function(b){a(":input:first",this).val(b)},reset:function(b,a){a.reset(this)},buttons:function(b,d){var c=this;if(b.submit){if(b.submit.match(/>$/))var e=a(b.submit).click(function(){"submit"!=e.attr("type")&&c.submit()});else e=
a('<button type="submit" />'),e.html(b.submit);a(this).append(e)}if(b.cancel){if(b.cancel.match(/>$/))var g=a(b.cancel);else g=a('<button type="cancel" />'),g.html(b.cancel);a(this).append(g);a(g).click(function(){(a.isFunction(a.editable.types[b.type].reset)?a.editable.types[b.type].reset:a.editable.types.defaults.reset).apply(c,[b,d]);return!1})}}},text:{element:function(b){var d=a("<input />");"none"!=b.width&&d.width(b.width);"none"!=b.height&&d.height(b.height);d.attr("autocomplete","off");a(this).append(d);
return d}},textarea:{element:function(b){var d=a("<textarea />");b.rows?d.attr("rows",b.rows):"none"!=b.height&&d.height(b.height);b.cols?d.attr("cols",b.cols):"none"!=b.width&&d.width(b.width);a(this).append(d);return d}},select:{element:function(){var b=a("<select />");a(this).append(b);return b},content:function(b,d,c){if(String==b.constructor)eval("var json = "+b);else var e=b;for(var g in e)e.hasOwnProperty(g)&&"selected"!=g&&(b=a("<option />").val(g).append(e[g]),a("select",this).append(b));
a("select",this).children().each(function(){(a(this).val()==e.selected||a(this).text()==a.trim(c.revert))&&a(this).attr("selected","selected")})}}},addInputType:function(b,d){a.editable.types[b]=d}};a.fn.editable.defaults={name:"value",id:"id",type:"text",width:"auto",height:"auto",event:"click.editable",onblur:"cancel",loadtype:"GET",loadtext:"Loading...",placeholder:"Click to edit",loaddata:{},submitdata:{},ajaxoptions:{}}})(jQuery);
pe.routes={map:{search_autocomplete:"{{city_id}}/search/autocomplete.ehtml/",api_user_list:"/api/user_lists/{{id}}",api_reorder_user_list:"/api/user_lists/{{id}}/reorder",api_user_list_favorites:"/api/user_lists/{{id}}/favorites",api_favorite:"/api/favorites/{{id}}",holiday:"/{{city_id}}/holidays/{{id}}-7",holiday_comments:"/services/holidays/{{id}}/comments",holiday_reactions:"/holidays/{{id}}/reactions/all",new_holiday_reactions:"/holidays/{{id}}/reactions",holiday_calendar:"/{{city_id}}/holidays/{{id}}-7/calendar",
holiday_photos:"/api/{{city_id}}/holidays/{{id}}/photos",holiday_map_venues:"/api/maps/holidays/{{slug}}/venues",holiday_map_events:"/api/maps/holidays/{{slug}}/events",venue_map_popup:"/venues/{{venue_id}}/map_popup",map_venues:"/api/cities/{{city_id}}/maps/venues",map_events:"/api/cities/{{city_id}}/maps/events",map_neighborhood_venues:"/api/maps/neighborhoods/{{neighborhood_id}}/venues",map_neighborhood_events:"/api/maps/neighborhoods/{{neighborhood_id}}/events",map_neighborhood_endpoint_venues:"/api/maps/neighborhoods/{{neighborhood_id}}/endpoints/{{endpoint_id}}/venues",
map_neighborhood_endpoint_events:"/api/maps/neighborhoods/{{neighborhood_id}}/endpoints/{{endpoint_id}}/events",user_list_map_venues:"/api/maps/users/{{user_id}}/lists/{{id}}/venues",user_list_map_events:"/api/maps/users/{{user_id}}/lists/{{id}}/events",user_lists:"/users/{{user_id}}/lists",user_list:"/users/{{user_id}}/lists/{{id}}",user_comments:"/users/{{user_id}}/comments",user_reviews:"/users/{{user_id}}/reviews",list_comments:"/services/lists/{{id}}/comments",list_reactions:"/lists/{{id}}/reactions/all",
new_list_reactions:"/lists/{{id}}/reactions",user_personalities:"/users/{{id}}/personalities",user:"/users/{{id}}",api_user:"/api/users/{{id}}",event:"/{{city_id}}/{{*endpoints}}/{{id}}-1"}};pe.routes.build_path=function(a,b){var d=pe.routes.map[a],c=d.match(/\{\{\*(.+)\}\}/);_.each(c,function(a){b[a]&&(b[a]=b[a].join("/"))});d=d.replace(/\*/,"");return pe.routes.clean_url(pe.templatize(d,b))};
pe.routes.clean_url=function(a){return("/"+a).replace(/#[^$\/]+/,"").replace(/(^[^?]+)([^:])\/\//,"$1$2/").replace(/\/\//g,"/")};pe.routes.current_url_params=function(){var a=pe.routes.recognize_path(window.location.pathname);return a?a.params:{}};
pe.routes.recognize_path=function(a){a=pe.routes.clean_url(a);var b,d,c=_.find(_.keys(pe.routes.map),function(c){b=pe.routes.map[c];d=RegExp(b.replace(/\//g,"\\/").replace(/\{\{[^\{\}]+\}\}/g,"(.+)"));return d.test(a)});if(c){for(var e=_.map(b.match(/\{\{[^\}]+\}\}/g),function(a){return a.replace(/\{|\}/g,"")}),g=a.match(d).slice(1,99),l={params:{}},p=function(a){return!_.isEmpty(a)},j=0;j<e.length;j++)"*"==e[j][0]&&(e[j]=e[j].replace(/\*/g,""),g[j]=_.select(g[j].replace(/\*/g,"").split("/"),p)),
l.params[e[j]]=g[j];l.path_info={name:c,template:b};return l}return!1};pe.routes.Request=function(a,b,d){pe.routes.map[a]?(this.path=a,"object"!==typeof b&&(b={id:b}),this.params=b,this.callback=d):alert("This path is not registered in the routes map.")};pe.routes.Request.factory=function(a,b,d){return new pe.routes.Request(a,b,d)};pe.routes.Request.from_current_location=function(a,b,d){b=b||{};var c=pe.routes.current_url_params();return new pe.routes.Request(a,_.extend(c,b),d)};
pe.routes.Request.prototype.ajax=function(a,b){var d="function"===typeof b?b:this.callback;$.ajax({url:this.build_path(),data:this.params,type:a,success:d})};pe.routes.Request.prototype.build_path=function(){return pe.routes.build_path(this.path,this.params)};pe.routes.Request.prototype.get=function(a){this.ajax("GET",a)};pe.routes.Request.prototype.post=function(a){this.ajax("POST",a)};
(function(){var a=function(a,b){return function(){return a.apply(b,arguments)}},b=pe,d=function(b,d){this.container=b;this.options=d;this.on_value_submitted=a(this.on_value_submitted,this);this.on_value_changed=a(this.on_value_changed,this);this.field=this.options.field;this.allow_empty_value=!!this.options.allow_empty_value;this.current_url_params=pe.routes.current_url_params();this.container.click(this.on_container_clicked);this.options.jeditable.data=function(a){return a.replace(/<br[\s\/]?>/gi,
"\n")};this.container.editable(this.on_value_changed,this.options.jeditable);this.on_submit=this.options.submit||function(){}};d.prototype.on_container_clicked=function(a){var b;b=$(a.currentTarget).find("textarea");if(0<b.length)return a=b.val(),a=a.replace(/\n\s+/g,"\n"),a=a.replace(/<br>/g,"\n"),b.val(a)};d.prototype.on_value_changed=function(a){var b;a=a.replace(/\n\s+/,"\n");this.is_valid_value(a)&&(b={user_list:{},_method:"put"},b.user_list[this.field]=a,b=pe.routes.Request.from_current_location("api_user_list",
b),b.post(this.on_value_submitted));this.on_submit();return a.replace(/\n/g,"<br>")};d.prototype.on_value_submitted=function(a){a=a.instance.url_param;if(this.current_url_params.id!==a)return window.location=pe.routes.build_path("user_list",{user_id:this.current_url_params.user_id,id:a})};d.prototype.is_valid_value=function(a){return this.allow_empty_value||!(_.isEmpty(a.replace(/\s+/g,""))||this.options.jeditable.placeholder===a)};d.prototype.is_valid=function(){return this.is_valid_value(this.container.html())};
b.EditableListField=d}).call(this);
