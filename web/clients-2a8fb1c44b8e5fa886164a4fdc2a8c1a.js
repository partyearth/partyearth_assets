pe.routes.map={search_autocomplete:"{{city_id}}/search/autocomplete.ehtml/",api_user_list:"/api/user_lists/{{id}}",api_reorder_user_list:"/api/user_lists/{{id}}/reorder",api_user_list_favorites:"/api/user_lists/{{id}}/favorites",api_favorite:"/api/favorites/{{id}}",api_favorite_vote_yes:"/api/favorites/{{id}}/vote_yes",api_favorite_vote_huh:"/api/favorites/{{id}}/vote_huh",holiday:"/{{city_id}}/holidays/{{id}}-7",holiday_comments:"/services/holidays/{{id}}/comments",holiday_reactions:"/holidays/{{id}}/reactions/all",
new_holiday_reactions:"/holidays/{{id}}/reactions",holiday_calendar:"/{{city_id}}/holidays/{{id}}-7/calendar",holiday_photos:"/api/{{city_id}}/holidays/{{id}}/photos",holiday_map_venues:"/api/maps/holidays/{{slug}}/venues",holiday_map_events:"/api/maps/holidays/{{slug}}/events",venue_map_popup:"/venues/{{venue_id}}/map_popup",map_venues:"/api/cities/{{city_id}}/maps/venues",map_events:"/api/cities/{{city_id}}/maps/events",map_neighborhood_venues:"/api/maps/neighborhoods/{{neighborhood_id}}/venues",
map_neighborhood_events:"/api/maps/neighborhoods/{{neighborhood_id}}/events",map_neighborhood_endpoint_venues:"/api/maps/neighborhoods/{{neighborhood_id}}/endpoints/{{endpoint_id}}/venues",map_neighborhood_endpoint_events:"/api/maps/neighborhoods/{{neighborhood_id}}/endpoints/{{endpoint_id}}/events",user_list_map_venues:"/api/maps/users/{{user_id}}/lists/{{id}}/venues",user_list_map_events:"/api/maps/users/{{user_id}}/lists/{{id}}/events",create_button_user_dashboard_event:"/users/{{user_id}}/dashboard/buttons/{{id}}",
generate_button_user_dashboard_event:"/users/{{user_id}}/dashboard/buttons/{{id}}/generate",boxoffice:"/users/{{user_id}}/dashboard/{{id}}/boxoffice",boxoffice_check_ticket_number:"/users/{{user_id}}/dashboard/{{id}}/boxoffice/{{ticket_number}}/check",user_list:"/users/{{user_id}}/lists/{{id}}",user_lists:"/users/{{user_id}}/lists",user_comments:"/users/{{user_id}}/comments",user_reviews:"/users/{{user_id}}/reviews",list_items:"/lists/{{id}}/list_items",list_comments:"/services/lists/{{id}}/comments",
list_reactions:"/lists/{{id}}/reactions/all",new_list_reactions:"/lists/{{id}}/reactions",user_personalities:"/users/{{id}}/personalities",user:"/users/{{id}}",api_user:"/api/users/{{id}}",event:"/{{city_id}}/{{*endpoints}}/{{id}}-1",tickets:"/{{city_id}}/{{*endpoints}}/{{id}}-1/tickets",purchase_tickets:"/{{city_id}}/{{*endpoints}}/{{id}}-1/tickets/purchase",tickets_purchase_form:"/{{city_id}}/{{*endpoints}}/{{id}}-1/tickets/purchase_form",tickets_confirmation:"/{{city_id}}/{{*endpoints}}/{{id}}-1/tickets/confirmation",
api_ticket_orders:"/api/ticket_orders",api_close_ticket_order:"/api/ticket_orders/{{id}}/close",api_apply_ticket_order_promo_code:"/api/ticket_orders/apply_promo",api_remove_ticket_order_promo_code:"/api/ticket_orders/remove_promo",api_ticket_orders_disable_pending:"/api/ticket_orders/disable_pending",api_ticket_orders_countdown_seconds:"/api/ticket_orders/countdown_seconds",api_ticket_order_status:"/api/ticket_orders/{{id}}/status",admin_event_ticket_types:"/admin/events/{{event_id}}/ticket_types",
admin_event_ticket_promo_codes:"/admin/events/{{event_id}}/ticket_promo_codes",update_status_admin_event_ticket_promo_codes:"/admin/events/{{event_id}}/ticket_promo_codes/{{id}}/update_status",event_type_tags:"/api/tags/event_types",find_your_scene:"/services/find_your_scene.ehtml",missing_info:"/services/contact_messages/missing_info.ehtml",send_message:"/services/contact_messages/",subscription_select:"/services/subscriptions/web.ehtml",subscriptions_create:"/services/subscriptions/web",creeper_dialog:"/services/creeper.ehtml",
creeper_subscribe:"/services/creeper/subscribe",creeper_close:"/services/creeper/close",character:"/pe-reviewers/{{id}}.ehtml",ask_party_earth:"/api/questions",mobile_subscribe:"/services/subscriptions/mobile",client_signup_form:"/clients/forms.ehtml"};pe.routes.build_path=function(a,b){var c=pe.routes.map[a],d=c.match(/\{\{\*(.+)\}\}/);_.each(d,function(a){b[a]&&(b[a]=b[a].join("/"))});c=c.replace(/\*/,"");b=b||{};return pe.routes.clean_url(pe.templatize(c,b))};
pe.routes.clean_url=function(a){return("/"+a).replace(/#[^$\/]+/,"").replace(/(^[^?]+)([^:])\/\//,"$1$2/").replace(/\/\//g,"/")};pe.routes.current_url_params=function(){var a=pe.routes.recognize_path(window.location.pathname);return a?a.params:{}};
pe.routes.recognize_path=function(a){a=pe.routes.clean_url(a);var b,c,d=_.find(_.keys(pe.routes.map),function(d){b=pe.routes.map[d];c=RegExp(b.replace(/\//g,"\\/").replace(/\{\{[^\{\}]+\}\}/g,"(.+)"));return c.test(a)});if(d){for(var f=_.map(b.match(/\{\{[^\}]+\}\}/g),function(a){return a.replace(/\{|\}/g,"")}),g=a.match(c).slice(1,99),h={params:{}},j=function(a){return!_.isEmpty(a)},e=0;e<f.length;e++)"*"==f[e][0]&&(f[e]=f[e].replace(/\*/g,""),g[e]=_.select(g[e].replace(/\*/g,"").split("/"),j)),
h.params[f[e]]=g[e];h.path_info={name:d,template:b};return h}return!1};pe.routes.Request=function(a,b,c){pe.routes.map[a]?(this.path=a,"object"!==typeof b&&(b={id:b}),this.params=b,this.callback=c):alert("This path is not registered in the routes map.")};pe.routes.Request.factory=function(a,b,c){return new pe.routes.Request(a,b,c)};pe.routes.Request.from_current_location=function(a,b,c){b=b||{};var d=pe.routes.current_url_params();return new pe.routes.Request(a,_.extend(d,b),c)};
pe.routes.Request.prototype.ajax=function(a,b){var c="function"===typeof b?b:this.callback;$.ajax({url:this.build_path(),data:this.params,type:a,success:c})};pe.routes.Request.prototype.build_path=function(){return pe.routes.build_path(this.path,this.params)};pe.routes.Request.prototype.get=function(a){this.ajax("GET",a)};pe.routes.Request.prototype.post=function(a){this.ajax("POST",a)};
pe.PasswordBox=function(a){pe.init_widget(this,a);this.obfuscate_password=!0;this.password_obfuscated_field=pe.load(this.container.find("input.password"));this.password_clear_field=$("<input type='text' class='text_field' />");this.password_clear_field.insertBefore(this.password_obfuscated_field);this.password_clear_field.hide();this.password_clear_field.keyup(this.callback(this.on_clear_field_key_up));$('<br><span class="ToggleLink toggle fake_link blue_link">Show Password</span>').insertAfter(this.password_obfuscated_field);
this.toggle_link=pe.load(this.container.find(".ToggleLink"));this.toggle_link.click(this.callback(this.on_toggle_link_clicked))};pe.PasswordBox.prototype.on_clear_field_key_up=function(){if(!this.obfuscate_password){var a=this.password_clear_field.val();"string"===typeof a&&this.password_obfuscated_field.val(a).keyup()}};
pe.PasswordBox.prototype.on_toggle_link_clicked=function(){if(this.obfuscate_password=!this.obfuscate_password){var a=this.password_clear_field.val();"string"===typeof a&&(this.password_obfuscated_field.val(a),this.toggle_link.html("Show Password"))}else a=this.password_obfuscated_field.val(),"string"===typeof a&&this.password_clear_field.val(a),this.toggle_link.html("Hide Password");this.password_obfuscated_field.toggle();this.password_clear_field.toggle()};
pe.Validator=function(a){this.message=a.message||"Invalid value.";this.callback=a.callback;this.unless_callback=a.unless||function(){return!1};this.options=a;this.value=a.value?a.value:function(b){return a.callback(b)}};pe.Validator.prototype.passed=function(a){return!!this.callback($(a))};pe.Validator.prototype.failed=function(a){return!this.passed(a)};pe.Validator.prototype.unless=function(){return this.unless_callback()};
pe.validation.email_format_validator=new pe.Validator({callback:function(a){return pe.validation.check_email_format(a.val())},message:"Please enter a valid email address."});pe.validation.check_email_format=function(a){return/^([a-zA-Z0-9_.-])+@([a-zA-Z0-9_.-])+\.([a-zA-Z])+([a-zA-Z])+/.test($.trim(a))};
pe.validation.name_validator=new pe.Validator({callback:function(a){return _.isEmpty($.trim(a.val()))?(this.message="Field cannot be blank.",!1):50<a.val().length?(this.message="Please shorten your name.",!1):!0},message:"Invalid name."});pe.validation.not_blank_validator=new pe.Validator({callback:function(a){return!_.isEmpty($.trim(a.val()))},message:"Field cannot be blank."});
pe.validation.password_validator=new pe.Validator({callback:function(a){var b=a.val();if(_.isEmpty(b)){if(a.data("text_entered"))return this.message="Please enter a password.",!1}else{if(_.isEmpty(b))return this.message="Please enter a password.",!1;if(0<b.length&&-1<b.indexOf(" "))return this.message="No spaces allowed for password.",!1;if(6>b.length)return this.message="Please enter a longer password.",!1;if(50<b.length)return this.message="Please shorten your password.",!1;a.data("text_entered",
!0);return!0}},message:"Invalid password."});pe.ValidatableForm=function(a,b,c,d){pe.init_widget(this,a);this.bindings=c||{};this.chained_fields=[];this.errors={};this.rules=b||{};this.save_button=this.container.find(".SaveButton");this.submit_button=this.container.find(".SubmitButton");this.after_submit=d;this.init_bindings();this.validate();this.toggle_submit();this.submit_button.click(this.callback(this.on_submit))};
pe.ValidatableForm.prototype.init_bindings=function(){this.container.find("input, textarea, select").change(this.callback(function(){this.save_button.removeClass("disabled").removeAttr("disabled")}));_.each(this.bindings,function(a,b){"string"===typeof a?$(b).bind(a,this.callback(function(){this.validate_field(b)})):"function"===typeof a&&this.callback(a)();this.rules[b].value($(b))&&this.validate_field(b)},this)};
pe.ValidatableForm.prototype.on_submit=function(){var a=this.validate();this.highlight_first_failed();a&&this.after_submit&&this.after_submit();return a};pe.ValidatableForm.prototype.delete_error=function(a){delete this.errors[a];_.each(this.chained_fields,function(b){_.include(b,a)&&_.each(b,function(a){this.errors[a]&&this.delete_error(a)},this)},this)};
pe.ValidatableForm.prototype.focus_on_failed=function(){if(!this.valid())return pe.install_easing(),pe.animated_scrolling($(".inline-errors:first").parents("li"),2),!1};pe.ValidatableForm.prototype.highlight_first_failed=function(){if(!this.validate()){if(!this.validation_shown()){var a=_.keys(this.errors)[0];this.render_field_error(a)}this.focus_on_failed()}};pe.ValidatableForm.prototype.render_errors=function(){_.each(this.errors,function(a,b){this.render_field_error(b)},this)};
pe.ValidatableForm.prototype.render_field_error=function(a){var b=$(a).parents("li.input");0===b.length&&(b=$(a));b.find(".inline-errors").remove();b.append('<span class="inline-errors">'+this.errors[a]+"</span>");b.find(".inline-success").remove()};pe.ValidatableForm.prototype.render_field_success=function(a){var b=$(a).parents("li.input");0===b.length&&(b=$(a));b.find(".inline-success").remove();b.append('<img class="inline-success" src="/assets/users/check.png" />');b.find(".inline-errors").remove()};
pe.ValidatableForm.prototype.render_success=function(){_.each(this.valid_fields(),function(a){this.render_field_success(a)},this)};pe.ValidatableForm.prototype.toggle_submit=function(){this.valid()?this.submit_button.removeClass("disabled").removeAttr("disabled"):this.submit_button.addClass("disabled")};pe.ValidatableForm.prototype.valid_fields=function(){return _.difference(_.keys(this.rules),_.keys(this.errors))};
pe.ValidatableForm.prototype.validate_field=function(a){var b=this.rules[a],c=b.passed(a);b.unless()?this.delete_error(a):c?(this.delete_error(a),this.render_field_success(a)):(this.errors[a]=b.message,this.render_field_error(a));this.toggle_submit();return c};pe.ValidatableForm.prototype.valid=function(){return _.isEmpty(this.errors)};pe.ValidatableForm.prototype.validate=function(){_.each(this.rules,function(a,b){a.failed(b)?this.errors[b]=a.message:delete this.errors[b]},this);return this.valid()};
pe.ValidatableForm.prototype.validate_together=function(){this.chained_fields.push(arguments)};pe.ValidatableForm.prototype.validation_shown=function(){return 0<this.container.find(".inline-errors").length};
(function(){pe.refresh_validations=function(){var a,b,c;b=$("#Email");b.change(function(){var a;return(a=$(this).val())&&pe.validation.check_email_format(a)?(a={email:a},0<$("#NewPassword").length&&(a.first_name=$("#FirstName").val(),a.last_name=$("#LastName").val()),pe.routes.Request.factory("client_signup_form",{user:a}).get(function(a){pe.client_signup_wrapper.html(a);return pe.refresh_validations()})):!1});c={"#Email":pe.validation.email_format_validator};a={"#Email":"change"};0<$("#NewPassword").length?
(c["#FirstName"]=pe.validation.name_validator,c["#LastName"]=pe.validation.name_validator,c["#NewPassword"]=pe.validation.password_validator,a["#FirstName"]="change",a["#LastName"]="change",a["#NewPassword"]="keyup",new pe.PasswordBox($("#NewPasswordDiv"))):(c["#Password"]=pe.validation.not_blank_validator,a["#Password"]="change");window.x=new pe.ValidatableForm($(".ClientSignUp"),c,a);if(0===$(".SubmitButton").length)return b.keyup(function(a){if(13===a.keyCode)return b.change()})};$(function(){pe.client_signup_wrapper=
$(".ClientForm");pe.refresh_validations();return pe.init_page_framework()})}).call(this);
