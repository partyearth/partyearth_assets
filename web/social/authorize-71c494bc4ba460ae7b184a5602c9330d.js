pe.accentMap={"&":"and","\u00e0":"a","\u00e1":"a","\u00e2":"a","\u00e3":"a","\u00e4":"a","\u00e5":"a","\u00e7":"c","\u00c0":"a","\u00c1":"a","\u00e8":"e","\u00e9":"e","\u00ea":"e","\u00eb":"e","\u00c8":"e","\u00c9":"e","\u00ec":"i","\u00f1":"n","\u00ed":"i","\u00ee":"i","\u00ef":"i","\u00f2":"o","\u00f3":"o","\u00f4":"o","\u00f5":"o","\u00f6":"o","\u00f9":"u","\u00fa":"u","\u00fb":"u","\u00fc":"u","!":"i",$:"s","-":""," ":"","'":"","\u2019":"",".":""};
pe.animated_scrolling=function(a,b){if(0!==a.length){var c=a.offset().top-(b||25);$("html,body").stop().animate({scrollTop:c+"px"},800,"cubicEaseInOut",function(){return!1})}};pe.scrolling=function(a,b){if(0!==a.length){var c=a.offset().top-(b||25);$("html,body").scrollTop(c)}};pe.days_of_week="Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" ");pe.array_contains=function(a,b){return _.isArray(b)?0===_.difference(b,a).length:-1<_.indexOf(a,b)};
pe.arrays_equal=function(a,b){if(!a&&!b||!a&&0===b.length||0===a.length&&!b)return!0;if(a.length!=b.length)return!1;for(var c=a.sort(),d=b.sort(),e=0,f=a.length;e<f;e++)if(c[e]!==d[e])return!1;return!0};pe.array_match=function(a,b){var c=!1;$.each(a,function(a,e){if(-1<b.indexOf(e))return c=!0,!1});return c};pe.array_merge=function(a,b){var c=a.concat(b);c.sort();return c};
pe.array_remove=function(a,b){return!a?a:pe.is_array(b)?$.grep(a,function(a){return-1===b.indexOf(a)}):$.grep(a,function(a){return a!==b})};pe.assign_photo_size=function(a,b,c){return!a?"/assets/no_image_"+c+".png":"original"===b?a.replace("xxx.jpg",b+".jpg"):a.replace("xxx.jpg","s"+b+".jpg")};pe.remove_timestamp_from_asset_url=function(a){return a.split("?")[0]};pe.browser_is_ie8=function(){return $.browser.msie&&"8.0"===$.browser.version};
pe.build_dob_field_name=function(a,b,c){return[a||"user","[",b?b+"_":"","dob(",c,"i)]"].join("")};pe.capitalise_first_letter=function(a){return null===a?"":a.charAt(0).toUpperCase()+a.slice(1)};pe.classes_starting_with=function(a,b){return $.map(a.attr("class").split(/\s+/),function(a){if(pe.string_starts_with(a,b))return a})};pe.compare=function(a,b){return pe.is_array(a)&&pe.is_array(b)?pe.arrays_equal(a,b):a===b};
pe.convert_to_rounded_corners=function(a){a=a||$(".ConvertToRoundedCorners");a.each(function(a,c){var d=$(c);d.removeClass("ConvertToRoundedCorners");d.addClass("rounded_corner_wrapper");$('<div class="rounded_corner top_left"></div>').appendTo(d);$('<div class="rounded_corner top_right"></div>').appendTo(d);$('<div class="rounded_corner bottom_left"></div>').appendTo(d);$('<div class="rounded_corner bottom_right"></div>').appendTo(d)});return a};
pe.convert_to_tabbed_pod=function(a,b){return $.map(a,function(a){a=$(a);if(!a.hasClass("ConvertToTabbedPod"))return alert("format_tabbed_pod: element to convert must have class ConvertToTabbedPod. It only has "+a[0].className);var d=a.children("ul");d.addClass("tab");d.children("li").each(function(a,b){b=$(b);var c=b.html();b.html(pe.templatize('<div class="left_end pod_sprite float_left"></div>{{content}}<div class="right_end pod_sprite float_left"></div>',{content:c}))});var e=d.html();d.remove();
var d=a.html(),f=pe.classes_starting_with(a,"width");if(0===f.length)return alert("no width class found");if(1<f.length)return alert("more than 1 width class found");var g=f[0].substr(5);a.addClass("tabs");a.removeClass("ConvertToTabs");a.removeClass(f[0]);a.html(pe.templatize('<div><table class="width{{width}}" cellpadding="0" cellspacing="0"><tbody><tr><td class="header" colspan="4"><div class="header_row"><ul class="tab">{{headers}}</ul><div class="mid_section"></div><div class="right_corner pod_sprite"></div></div></td></tr><tr class="content_container"><td class="left_side pod_sides"></td><td class="content">{{content}}</td><td class="right_side pod_sides"></td></tr><tr class="footer_row"><td class="left_corner pod_sprite"></td><td class="mid_section"></td><td class="right_corner pod_sprite"></td></tr></tbody></table></div>',
{width:g,headers:e,content:d}));var e=a.children().tabs(b),h=["first","second","third","fourth"];a.find("ul.tab li").each(function(a,b){$(b).addClass(h[a])});return e})};
pe.new_convert_to_tabbed_pod=function(a,b){return $.map(a,function(a){a=$(a);if(!a.hasClass("ConvertToTabbedPod"))return alert("format_tabbed_pod: element to convert must have class ConvertToTabbedPod. It only has "+a[0].className);var d=a.children("ul"),e=d.html();d.remove();var d=a.html(),f=pe.classes_starting_with(a,"width");if(0===f.length)return alert("no width class found");if(1<f.length)return alert("more than 1 width class found");var g=f[0].substr(5);a.addClass("tabs");a.removeClass("ConvertToTabs");
a.removeClass(f[0]);a.html(pe.templatize('<div class="width{{width}}"><ul class="tab">{{headers}}</ul>{{content}}</div>',{width:g,headers:e,content:d}));var e=a.children().tabs(b),h=["first","second","third","fourth"];a.find("ul.tab li").each(function(a,b){$(b).addClass(h[a])});return e})};pe.date_string=function(a){return"string"===typeof a?a:a.getMonth()+1+"/"+a.getDate()+"/"+a.getFullYear()};
pe.days_between_dates=function(a,b){var c="string"===typeof a?Date.parse(a):a,d="string"===typeof b?Date.parse(b):b;return Math.abs(Math.floor((c-d)/864E5))};pe.event_search_text=function(a){var b=[a.name,a.description,a.location_name,a.category,a.neighborhood_name,a.neighborhood_id];a.tags&&$.each(a.tags,function(a,d){b.push(d)});a.performer_names&&$.each(a.performer_names,function(a,d){b.push(d)});return b.join(" ")};pe.fetch_photo_id_from_url=function(a){return a.split("/photos/")[1]};
pe.fix_ie7_rendering_bug=function(){$(".ConvertToTabbedPod").addClass("IeSucks")};pe.format_date=function(a){return a.getMonth()+1+"/"+a.getDate()+"/"+a.getFullYear()};pe.format_price=function(a){var b=Math.floor(a/100).toString();a=(a%100).toString();2>a.length&&(a="0"+a);return"$"+b+"."+a};pe.format_duration=function(a,b){if(!a)return"0:00";var c=Math.floor(a%60);return pe.string_padding_left(Math.floor(a/60).toString(),b||1,"0")+":"+pe.string_padding_left(c.toString(),2,"0")};
pe.get_url_parameter=function(a,b){var c=RegExp("[\\?&]"+b+"=([^&]+)","i").exec(a);return c?c[1]:null};pe.hash_length=function(a){var b=0,c;for(c in a)a.hasOwnProperty(c)&&b++;return b};pe.hashes_equal=function(a,b){if(a===b)return!0;if(pe.hash_length(a)!=pe.hash_length(b))return!1;for(var c in a){var d=a[c],e=b[c];if(pe.is_array(d)){if(!pe.arrays_equal(d,e))return!1}else if(d!==e)return!1}return!0};
pe.hashes_match=function(a,b){for(var c in a){var d=a[c],e=b[c];if(pe.is_array(d)){if(!pe.array_contains(e,d))return!1}else if(d!==e)return!1}return!0};pe.https=function(a){return-1===window.location.href.indexOf("https://")?a:a.replace("http://","https://")};pe.inject=function(a,b,c){var d=b;$.each(a,function(a,b){d=c(d,b)});return d};pe.install_easing=function(){jQuery.easing.cubicEaseInOut||(jQuery.easing.cubicEaseInOut=function(a,b,c,d){b=c+d;return 1>(a/=0.5)?b/2*a*a*a+c:b/2*((a-=2)*a*a+2)+c})};
pe.is_array=function(a){return!(!a||!("object"===typeof a&&"number"===typeof a.length&&"function"===typeof a.splice&&!a.propertyIsEnumerable("length")))};pe.is_valid_credit_card_number=function(a){return!!a.match(/^\d{4}(\s*|\s*\-\s*)?\d{4}(\s*|\s*\-\s*)?\d{4}(\s*|\s*\-\s*)?\d{4}$/)};pe.is_valid_date=function(a){return!a.match(/^(\d{1,2})(\/|-)(\d{1,2})(\/|-)(\d{4})$/)?!1:a!==$.datepicker.formatDate("m/d/yy",new Date(a))?a===$.datepicker.formatDate("mm/dd/yy",new Date(a)):!0};
pe.is_valid_zip_code=function(a){return!!a.match(/^\d{5}(\s*\-\s*\d{4})?$/)};pe.load=function(a){pe.assert(a,"error loading data");return a};pe.link_title_for_city=function(a){return"See the latest hotspots and events happening in "+a+"."};pe.link_title_for_city_party_climate=function(a){return"Check out the overview and photos of "+a+"."};
pe.link_title_for_event=function(a,b){return b?"Check out event details, photos and videos of "+a+" at "+b+".":"Check out event details, photos and videos of "+a+"."};pe.link_title_for_neighborhood=function(a,b){return"Check out "+a+" description, photos, and venues in "+b+"."};pe.link_title_for_performer=function(a){return"See the latest "+a+" schedule, photos, videos and news."};
pe.link_title_for_reviewer=function(a){switch(a){case "Lucas":return"Meet Lucas, the quintessential fun- loving, pub-crawling \u201cguy\u2019s guy\u201d. Learn about his personality and ratings.";case "Adriana":return"Meet Adriana, the epitome of a cosmopolitan girl. Learn about her personality and ratings.";case "Jonah":return"Meet Jonah, an affable, non-mainstream guy with natural curiosity about people and cultures. Learn about his personality and ratings.";case "Emma":return"Meet Emma, a lively, witty, and sociable \u201cgirl next door\u201d. Learn about her personality and ratings.";
case "All":return"Meet Lucas, Adriana, Jonah and Emma. Learn how their personalities can help you maximize your social experiences in your city and your travels."}};pe.link_title_for_venue=function(a,b,c){return c?"Check out the review, photos, videos, map and events schedule of "+a+" - "+c+" in "+b+".":"Check out the review, photos, videos, map and events schedule of "+a+" in "+b+"."};
pe.normalize=function(a){for(var b="",c=0,d=a.length;c<d;c++)var e=a.charAt(c),f=pe.accentMap[e],b=b+("undefined"===typeof f?e:f);return b};pe.object_hash_from_array=function(a){var b={};$.each(a,function(a,d){b[d.id]=d});return b};pe.object_length=function(a){var b=0,c;for(c in a)a.hasOwnProperty(c)&&b++;return b};pe.parse_price=function(a){return Math.ceil(100*parseFloat(a.substring(1)))};
pe.prepare_autocomplete_data=function(a){var b=[];$.each(a,function(a,d){$.each(d,function(d,f){f.category=a;b.push(f)})});return b};pe.remove_anchor_from_url=function(a){return a?a.split("#")[0]:""};pe.remove_query_string_from_url=function(a){return a?a.split("?")[0]:""};
pe.set_autocomplete_source=function(a,b,c){var d=pe.normalize(b.term).toLowerCase(),e=RegExp($.ui.autocomplete.escapeRegex(d),"i");a=$.grep(pe.prepare_autocomplete_data(a),function(a){a=a.label||a.value||a;return e.test(a)||e.test(pe.normalize(a))});a=_.sortBy(a,function(a){var b=a.label||a.value||a,b=pe.normalize(b).toLowerCase();return[a.category,b!=d,a.label]});c(a)};pe.shuffle_array=function(a){if(!a)return[];for(var b,c,d=a.length;d;)b=parseInt(Math.random()*d,10),c=a[--d],a[d]=a[b],a[b]=c;return a};
pe.string_padding_left=function(a,b,c){for(;a.length<b;)a=c+a;return a};pe.structured_tags_as_flat_array=function(a){var b=[];$.each(a,function(a,d){$.merge(b,d)});return b};pe.text_contains_query=function(a,b){var c=b.split(" "),d=!0;$.each(c,function(b,c){if(-1===a.indexOf(c))return d=!1,!0});return d};pe.today_date_string=function(){return pe.date_string(new Date)};
pe.venue_search_text=function(a){var b=[a.name,a.description,a.address,a.hotspot_text,a.neighborhood_name];a.types&&$.each(a.types,function(a,d){b.push(d)});a.tags&&$.each(a.tags,function(a,d){b.push(d)});return b.join(" ")};pe.xor=function(a,b){return!!(a?!b:b)};pe.Validator=function(a){this.message=a.message||"Invalid value.";this.callback=a.callback;this.unless_callback=a.unless||function(){return!1};this.value=a.value?a.value:function(b){return a.callback(b)}};pe.Validator.prototype.passed=function(a){return!!this.callback($(a))};
pe.Validator.prototype.failed=function(a){return!this.passed(a)};pe.Validator.prototype.unless=function(){return this.unless_callback()};
pe.DateOfBirthWidget=function(a,b,c,d,e){pe.init_widget(this,a);this.validation_enabled=!1;this.month_dropdown=this.container.find("#"+b+"_dob_2i");c&&this.month_dropdown.val(c);this.month_dropdown.change(this.callback(this.validate));this.day_dropdown=this.container.find("#"+b+"_dob_3i");d&&this.day_dropdown.val(d);this.day_dropdown.change(this.callback(this.validate));this.on_validate=null;this.validator=new pe.Validator({callback:this.callback(function(){return this.is_valid()}),message:"Please enter a correct date."});
this.year_dropdown=this.container.find("#"+b+"_dob_1i");e&&this.year_dropdown.val(e);this.year_dropdown.change(this.callback(this.validate))};pe.DateOfBirthWidget.prototype.is_valid=function(){return pe.is_valid_date(this.val())};pe.DateOfBirthWidget.prototype.val=function(){return[this.month_dropdown.val(),this.day_dropdown.val(),this.year_dropdown.val()].join("/")};
pe.DateOfBirthWidget.prototype.validate=function(){var a=[this.month_dropdown.val(),this.day_dropdown.val(),this.year_dropdown.val()];3===_.compact(a).length&&(this.validation_enabled=!0);if(!this.validation_enabled)return!0;if(this.on_validate)this.on_validate();if(0===_.compact(a).length)return pe.validation.show_message(this.container,"Date of Birth is required."),!1;if(this.is_valid())return pe.validation.show_message(this.container,""),!0;pe.validation.show_message(this.container,"Please enter a valid date of birth");
return!1};pe.DateOfBirthWidget.prototype.validate_on_submit=function(){this.validation_enabled=!0;return this.validate()};
pe.PasswordBox=function(a){pe.init_widget(this,a);this.obfuscate_password=!0;this.password_obfuscated_field=pe.load(this.container.find("input.password"));this.password_clear_field=$("<input type='text' class='text_field' />");this.password_clear_field.insertBefore(this.password_obfuscated_field);this.password_clear_field.hide();this.password_clear_field.keyup(this.callback(this.on_clear_field_key_up));$('<br><span class="ToggleLink toggle fake_link blue_link">Show Password</span>').insertAfter(this.password_obfuscated_field);
this.toggle_link=pe.load(this.container.find(".ToggleLink"));this.toggle_link.click(this.callback(this.on_toggle_link_clicked))};pe.PasswordBox.prototype.on_clear_field_key_up=function(){if(!this.obfuscate_password){var a=this.password_clear_field.val();"string"===typeof a&&this.password_obfuscated_field.val(a).keyup()}};
pe.PasswordBox.prototype.on_toggle_link_clicked=function(){if(this.obfuscate_password=!this.obfuscate_password){var a=this.password_clear_field.val();"string"===typeof a&&(this.password_obfuscated_field.val(a),this.toggle_link.html("Show Password"))}else a=this.password_obfuscated_field.val(),"string"===typeof a&&this.password_clear_field.val(a),this.toggle_link.html("Hide Password");this.password_obfuscated_field.toggle();this.password_clear_field.toggle()};
pe.validation.checked_validator=new pe.Validator({callback:function(a){return a.is(":checked")},message:"Please select one."});pe.validation.email_validator=new pe.Validator({callback:function(a){var b=a.val();if(!b&&!a.data("text_entered"))return!1;a.data("text_entered",!0);a=$.ajax({type:"GET",dataType:"JSON",url:"/api/users/check_email",data:{email:b},async:!1});return(a=jQuery.parseJSON(a.responseText))&&!_.isEmpty(a.message)?(this.message=a.message,!1):!0},message:"Invalid email."});
pe.validation.name_validator=new pe.Validator({callback:function(a){return _.isEmpty($.trim(a.val()))?(this.message="Field cannot be blank.",!1):50<a.val().length?(this.message="Please shorten your name.",!1):!0},message:"Invalid name."});pe.validation.not_blank_validator=new pe.Validator({callback:function(a){return!_.isEmpty($.trim(a.val()))},message:"Field cannot be blank."});
pe.ValidatableForm=function(a,b,c){pe.init_widget(this,a);this.bindings=c||{};this.chained_fields=[];this.errors={};this.rules=b||{};this.save_button=this.container.find(".SaveButton");this.submit_button=this.container.find(".SubmitButton");this.init_bindings();this.validate();this.toggle_submit();this.submit_button.click(this.callback(this.on_submit))};
pe.ValidatableForm.prototype.init_bindings=function(){this.container.find("input, textarea, select").change(this.callback(function(){this.save_button.removeClass("disabled").removeAttr("disabled")}));_.each(this.bindings,function(a,b){"string"===typeof a?$(b).bind(a,this.callback(function(){this.validate_field(b)})):"function"===typeof a&&this.callback(a)();this.rules[b].value($(b))&&this.validate_field(b)},this)};
pe.ValidatableForm.prototype.on_submit=function(){var a=this.validate();this.highlight_first_failed();return a};pe.ValidatableForm.prototype.delete_error=function(a){delete this.errors[a];_.each(this.chained_fields,function(b){_.include(b,a)&&_.each(b,function(a){this.errors[a]&&this.delete_error(a)},this)},this)};pe.ValidatableForm.prototype.focus_on_failed=function(){if(!this.valid())return pe.install_easing(),pe.animated_scrolling($(".inline-errors:first").parents("li"),2),!1};
pe.ValidatableForm.prototype.highlight_first_failed=function(){if(!this.validate()){if(!this.validation_shown()){var a=_.keys(this.errors)[0];this.render_field_error(a)}this.focus_on_failed()}};pe.ValidatableForm.prototype.render_errors=function(){_.each(this.errors,function(a,b){this.render_field_error(b)},this)};
pe.ValidatableForm.prototype.render_field_error=function(a){var b=$(a).parents("li.input");0===b.length&&(b=$(a));b.find(".inline-errors").remove();b.append('<span class="inline-errors">'+this.errors[a]+"</span>");b.find(".inline-success").remove()};pe.ValidatableForm.prototype.render_field_success=function(a){var b=$(a).parents("li.input");0===b.length&&(b=$(a));b.find(".inline-success").remove();b.append('<img class="inline-success" src="/assets/users/check.png" />');b.find(".inline-errors").remove()};
pe.ValidatableForm.prototype.render_success=function(){_.each(this.valid_fields(),function(a){this.render_field_success(a)},this)};pe.ValidatableForm.prototype.toggle_submit=function(){this.valid()?this.submit_button.removeClass("disabled").removeAttr("disabled"):this.submit_button.addClass("disabled")};pe.ValidatableForm.prototype.valid_fields=function(){return _.difference(_.keys(this.rules),_.keys(this.errors))};
pe.ValidatableForm.prototype.validate_field=function(a){var b=this.rules[a],c=b.passed(a);b.unless()?this.delete_error(a):c?(this.delete_error(a),this.render_field_success(a)):(this.errors[a]=b.message,this.render_field_error(a));this.toggle_submit();return c};pe.ValidatableForm.prototype.valid=function(){return _.isEmpty(this.errors)};pe.ValidatableForm.prototype.validate=function(){_.each(this.rules,function(a,b){a.failed(b)&&(this.errors[b]=a.message)},this);return this.valid()};
pe.ValidatableForm.prototype.validate_together=function(){this.chained_fields.push(arguments)};pe.ValidatableForm.prototype.validation_shown=function(){return 0<this.container.find(".inline-errors").length};
$(document).ready(function(){var a={"#user_first_name":pe.validation.name_validator,"#user_last_name":pe.validation.name_validator,"#user_email":pe.validation.email_validator},b={"#user_first_name":"change","#user_last_name":"change","#user_email":"change"};0<$("input:radio[name='user[is_male]']").length&&(a["input:radio[name='user[is_male]']"]=pe.validation.checked_validator,b["input:radio[name='user[is_male]']"]="change");if(0<$(".DateOfBirth").length){var c=window.date_of_birth||{},d=new pe.DateOfBirthWidget($(".DateOfBirth"),
"user",c.month,c.day,c.year);a[".DateOfBirth"]=d.validator;b[".DateOfBirth"]=function(){d.on_validate=function(){e.validate_field(".DateOfBirth")}}}0<$("#user_city").length&&(a["#user_city"]=pe.validation.not_blank_validator,b["#user_city"]="keyup");0<$("#user_default_city_id").length&&(a["#user_default_city_id"]=pe.validation.not_blank_validator,b["#user_default_city_id"]="change");var c=$("form#new_user"),e=new pe.ValidatableForm(c,a,b);0<c.length&&$("form input[type=text]:first").focus();pe.validate_user_exists($("#link_account_user_email"),
$("#link_account_user_password"));pe.init_page_framework()});
