pe.accentMap={"&":"and","\u00e0":"a","\u00e1":"a","\u00e2":"a","\u00e3":"a","\u00e4":"a","\u00e5":"a","\u00e7":"c","\u00c0":"a","\u00c1":"a","\u00e8":"e","\u00e9":"e","\u00ea":"e","\u00eb":"e","\u00c8":"e","\u00c9":"e","\u00ec":"i","\u00f1":"n","\u00ed":"i","\u00ee":"i","\u00ef":"i","\u00f2":"o","\u00f3":"o","\u00f4":"o","\u00f5":"o","\u00f6":"o","\u00f9":"u","\u00fa":"u","\u00fb":"u","\u00fc":"u","!":"i",$:"s","-":""," ":"","'":"","\u2019":"",".":""};
pe.animated_scrolling=function(a,b){if(0!==a.length){var c=a.offset().top-(b||25);$("html,body").stop().animate({scrollTop:c+"px"},800,"cubicEaseInOut",function(){return!1})}};pe.scrolling=function(a,b){if(0!==a.length){var c=a.offset().top-(b||25);$("html,body").scrollTop(c)}};pe.days_of_week="Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday".split(",");pe.array_contains=function(a,b){return _.isArray(b)?0===_.difference(b,a).length:-1<_.indexOf(a,b)};
pe.arrays_equal=function(a,b){if(!a&&!b||!a&&0===b.length||0===a.length&&!b)return!0;if(a.length!=b.length)return!1;for(var c=a.sort(),d=b.sort(),e=0,f=a.length;e<f;e++)if(c[e]!==d[e])return!1;return!0};pe.array_match=function(a,b){var c=!1;$.each(a,function(a,e){if(-1<b.indexOf(e))return c=!0,!1});return c};pe.array_merge=function(a,b){var c=a.concat(b);c.sort();return c};
pe.array_remove=function(a,b){return!a?a:pe.is_array(b)?$.grep(a,function(a){return-1===b.indexOf(a)}):$.grep(a,function(a){return a!==b})};pe.assign_photo_size=function(a,b,c){return!a?"/assets/no_image_"+c+".png":"original"===b?a.replace("xxx.jpg",b+".jpg"):a.replace("xxx.jpg","s"+b+".jpg")};pe.remove_timestamp_from_asset_url=function(a){return a.split("?")[0]};pe.browser_is_ie8=function(){return $.browser.msie&&"8.0"===$.browser.version};
pe.build_dob_field_name=function(a,b,c){return[a||"user","[",b?b+"_":"","dob(",c,"i)]"].join("")};pe.capitalise_first_letter=function(a){return null===a?"":a.charAt(0).toUpperCase()+a.slice(1)};pe.classes_starting_with=function(a,b){return $.map(a.attr("class").split(/\s+/),function(a){if(pe.string_starts_with(a,b))return a})};pe.compare=function(a,b){return pe.is_array(a)&&pe.is_array(b)?pe.arrays_equal(a,b):a===b};
pe.convert_to_rounded_corners=function(a){a=a||$(".ConvertToRoundedCorners");a.each(function(a,c){var d=$(c);d.removeClass("ConvertToRoundedCorners");d.addClass("rounded_corner_wrapper");$('<div class="rounded_corner top_left"></div>').appendTo(d);$('<div class="rounded_corner top_right"></div>').appendTo(d);$('<div class="rounded_corner bottom_left"></div>').appendTo(d);$('<div class="rounded_corner bottom_right"></div>').appendTo(d)});return a};
pe.convert_to_tabbed_pod=function(a,b){return $.map(a,function(a){a=$(a);if(!a.hasClass("ConvertToTabbedPod"))return alert("format_tabbed_pod: element to convert must have class ConvertToTabbedPod. It only has "+a[0].className);var d=a.children("ul");d.addClass("tab");d.children("li").each(function(a,b){var b=$(b),c=b.html();b.html(pe.templatize('<div class="left_end pod_sprite float_left"></div>{{content}}<div class="right_end pod_sprite float_left"></div>',{content:c}))});var e=d.html();d.remove();
var d=a.html(),f=pe.classes_starting_with(a,"width");if(0===f.length)return alert("no width class found");if(1<f.length)return alert("more than 1 width class found");var g=f[0].substr(5);a.addClass("tabs");a.removeClass("ConvertToTabs");a.removeClass(f[0]);a.html(pe.templatize('<div><table class="width{{width}}" cellpadding="0" cellspacing="0"><tbody><tr><td class="header" colspan="4"><div class="header_row"><ul class="tab">{{headers}}</ul><div class="mid_section"></div><div class="right_corner pod_sprite"></div></div></td></tr><tr class="content_container"><td class="left_side pod_sides"></td><td class="content">{{content}}</td><td class="right_side pod_sides"></td></tr><tr class="footer_row"><td class="left_corner pod_sprite"></td><td class="mid_section"></td><td class="right_corner pod_sprite"></td></tr></tbody></table></div>',
{width:g,headers:e,content:d}));var e=a.children().tabs(b),h=["first","second","third","fourth"];a.find("ul.tab li").each(function(a,b){$(b).addClass(h[a])});return e})};
pe.new_convert_to_tabbed_pod=function(a,b){return $.map(a,function(a){a=$(a);if(!a.hasClass("ConvertToTabbedPod"))return alert("format_tabbed_pod: element to convert must have class ConvertToTabbedPod. It only has "+a[0].className);var d=a.children("ul"),e=d.html();d.remove();var d=a.html(),f=pe.classes_starting_with(a,"width");if(0===f.length)return alert("no width class found");if(1<f.length)return alert("more than 1 width class found");var g=f[0].substr(5);a.addClass("tabs");a.removeClass("ConvertToTabs");
a.removeClass(f[0]);a.html(pe.templatize('<div class="width{{width}}"><ul class="tab">{{headers}}</ul>{{content}}</div>',{width:g,headers:e,content:d}));var e=a.children().tabs(b),h=["first","second","third","fourth"];a.find("ul.tab li").each(function(a,b){$(b).addClass(h[a])});return e})};pe.date_string=function(a){return"string"===typeof a?a:a.getMonth()+1+"/"+a.getDate()+"/"+a.getFullYear()};
pe.days_between_dates=function(a,b){var c="string"===typeof a?Date.parse(a):a,d="string"===typeof b?Date.parse(b):b;return Math.abs(Math.floor((c-d)/864E5))};pe.event_search_text=function(a){var b=[a.name,a.description,a.location_name,a.category,a.neighborhood_name,a.neighborhood_id];a.tags&&$.each(a.tags,function(a,d){b.push(d)});a.performer_names&&$.each(a.performer_names,function(a,d){b.push(d)});return b.join(" ")};pe.fetch_photo_id_from_url=function(a){return a.split("/photos/")[1]};
pe.fix_ie7_rendering_bug=function(){$(".ConvertToTabbedPod").addClass("IeSucks")};pe.format_date=function(a){return a.getMonth()+1+"/"+a.getDate()+"/"+a.getFullYear()};pe.format_price=function(a){var b=Math.floor(a/100).toString(),a=(a%100).toString();2>a.length&&(a="0"+a);return"$"+b+"."+a};pe.format_duration=function(a,b){if(!a)return"0:00";var c=Math.floor(a%60);return pe.string_padding_left(Math.floor(a/60).toString(),b||1,"0")+":"+pe.string_padding_left(c.toString(),2,"0")};
pe.get_url_parameter=function(a,b){var c=RegExp("[\\?&]"+b+"=([^&]+)","i").exec(a);return c?c[1]:null};pe.hash_length=function(a){var b=0,c;for(c in a)a.hasOwnProperty(c)&&b++;return b};pe.hashes_equal=function(a,b){if(a===b)return!0;if(pe.hash_length(a)!=pe.hash_length(b))return!1;for(var c in a){var d=a[c],e=b[c];if(pe.is_array(d)){if(!pe.arrays_equal(d,e))return!1}else if(d!==e)return!1}return!0};
pe.hashes_match=function(a,b){for(var c in a){var d=a[c],e=b[c];if(pe.is_array(d)){if(!pe.array_contains(e,d))return!1}else if(d!==e)return!1}return!0};pe.https=function(a){return-1===window.location.href.indexOf("https://")?a:a.replace("http://","https://")};pe.inject=function(a,b,c){var d=b;$.each(a,function(a,b){d=c(d,b)});return d};pe.install_easing=function(){jQuery.easing.cubicEaseInOut=function(a,b,c,d){b=c+d;return 1>(a/=0.5)?b/2*a*a*a+c:b/2*((a-=2)*a*a+2)+c}};
pe.is_array=function(a){return!(!a||!("object"===typeof a&&"number"===typeof a.length&&"function"===typeof a.splice&&!a.propertyIsEnumerable("length")))};pe.is_valid_credit_card_number=function(a){return!!a.match(/^\d{4}(\s*|\s*\-\s*)?\d{4}(\s*|\s*\-\s*)?\d{4}(\s*|\s*\-\s*)?\d{4}$/)};pe.is_valid_date=function(a){return!a.match(/^(\d{1,2})(\/|-)(\d{1,2})(\/|-)(\d{4})$/)?!1:a!==$.datepicker.formatDate("m/d/yy",new Date(a))?a===$.datepicker.formatDate("mm/dd/yy",new Date(a)):!0};
pe.is_valid_zip_code=function(a){return!!a.match(/^\d{5}(\s*\-\s*\d{4})?$/)};pe.load=function(a){pe.assert(a,"error loading data");return a};pe.link_title_for_city=function(a){return"See the latest hotspots and events happening in "+a+"."};pe.link_title_for_city_party_climate=function(a){return"Check out the overview and photos of "+a+"."};
pe.link_title_for_event=function(a,b){return b?"Check out event details, photos and videos of "+a+" at "+b+".":"Check out event details, photos and videos of "+a+"."};pe.link_title_for_neighborhood=function(a,b){return"Check out "+a+" description, photos, and venues in "+b+"."};pe.link_title_for_performer=function(a){return"See the latest "+a+" schedule, photos, videos and news."};
pe.link_title_for_reviewer=function(a){switch(a){case "Lucas":return"Meet Lucas, the quintessential fun- loving, pub-crawling \u201cguy\u2019s guy\u201d. Learn about his personality and ratings.";case "Adriana":return"Meet Adriana, the epitome of a cosmopolitan girl. Learn about her personality and ratings.";case "Jonah":return"Meet Jonah, an affable, non-mainstream guy with natural curiosity about people and cultures. Learn about his personality and ratings.";case "Emma":return"Meet Emma, a lively, witty, and sociable \u201cgirl next door\u201d. Learn about her personality and ratings.";
case "All":return"Meet Lucas, Adriana, Jonah and Emma. Learn how their personalities can help you maximize your social experiences in your city and your travels."}};pe.link_title_for_venue=function(a,b,c){return c?"Check out the review, photos, videos, map and events schedule of "+a+" - "+c+" in "+b+".":"Check out the review, photos, videos, map and events schedule of "+a+" in "+b+"."};
pe.normalize=function(a){for(var b="",c=0,d=a.length;c<d;c++)var e=a.charAt(c),f=pe.accentMap[e],b=b+("undefined"===typeof f?e:f);return b};pe.object_hash_from_array=function(a){var b={};$.each(a,function(a,d){b[d.id]=d});return b};pe.object_length=function(a){var b=0,c;for(c in a)a.hasOwnProperty(c)&&b++;return b};pe.parse_price=function(a){return Math.ceil(100*parseFloat(a.substring(1)))};
pe.prepare_autocomplete_data=function(a){var b=[];$.each(a,function(a,d){$.each(d,function(d,f){f.category=a;b.push(f)})});return b};pe.remove_anchor_from_url=function(a){return a?a.split("#")[0]:""};pe.set_autocomplete_source=function(a,b,c){var d=RegExp($.ui.autocomplete.escapeRegex(pe.normalize(b.term)),"i");c($.grep(pe.prepare_autocomplete_data(a),function(a){a=a.label||a.value||a;return d.test(a)||d.test(pe.normalize(a))}))};
pe.shuffle_array=function(a){if(!a)return[];for(var b,c,d=a.length;d;)b=parseInt(Math.random()*d,10),c=a[--d],a[d]=a[b],a[b]=c;return a};pe.string_padding_left=function(a,b,c){for(;a.length<b;)a=c+a;return a};pe.structured_tags_as_flat_array=function(a){var b=[];$.each(a,function(a,d){$.merge(b,d)});return b};pe.text_contains_query=function(a,b){var c=b.split(" "),d=!0;$.each(c,function(b,c){if(-1===a.indexOf(c))return d=!1,!0});return d};pe.today_date_string=function(){return pe.date_string(new Date)};
pe.venue_search_text=function(a){var b=[a.name,a.description,a.address,a.hotspot_text,a.neighborhood_name];a.types&&$.each(a.types,function(a,d){b.push(d)});a.tags&&$.each(a.tags,function(a,d){b.push(d)});return b.join(" ")};pe.xor=function(a,b){return!!(a?!b:b)};pe.Validator=function(a){this.message=a.message||"Invalid value.";this.callback=a.callback;this.value=a.value?a.value:function(b){return a.callback(b)}};pe.Validator.prototype.passed=function(a){return!!this.callback($(a))};
pe.Validator.prototype.failed=function(a){return!this.passed(a)};
pe.DateOfBirthWidget=function(a,b,c,d,e){pe.init_widget(this,a);this.validation_enabled=!1;this.month_dropdown=this.container.find("#"+b+"_dob_2i");c&&this.month_dropdown.val(c);this.month_dropdown.change(this.callback(this.validate));this.day_dropdown=this.container.find("#"+b+"_dob_3i");d&&this.day_dropdown.val(d);this.day_dropdown.change(this.callback(this.validate));this.on_validate=null;this.validator=new pe.Validator({callback:this.callback(function(){return this.is_valid()}),message:"Please enter a correct date."});
this.year_dropdown=this.container.find("#"+b+"_dob_1i");e&&this.year_dropdown.val(e);this.year_dropdown.change(this.callback(this.validate))};pe.DateOfBirthWidget.prototype.is_valid=function(){return pe.is_valid_date(this.val())};pe.DateOfBirthWidget.prototype.val=function(){return[this.month_dropdown.val(),this.day_dropdown.val(),this.year_dropdown.val()].join("/")};
pe.DateOfBirthWidget.prototype.validate=function(){var a=[this.month_dropdown.val(),this.day_dropdown.val(),this.year_dropdown.val()];3===_.compact(a).length&&(this.validation_enabled=!0);if(!this.validation_enabled)return!0;if(this.on_validate)this.on_validate();if(0===_.compact(a).length)return pe.validation.show_message(this.container,"Date of Birth is required."),!1;if(this.is_valid())return pe.validation.show_message(this.container,""),!0;pe.validation.show_message(this.container,"Please enter a valid date of birth");
return!1};pe.DateOfBirthWidget.prototype.validate_on_submit=function(){this.validation_enabled=!0;return this.validate()};pe.validation={};pe.validatables=[];pe.validation.autocomplete_open=!1;pe.validate_on_key_up=function(a,b){a.keyup(function(){b(a)});a.val()&&b(a);return a};pe.validate_on_blur=function(a,b,c){a.blur(function(){b(a)});!c&&a.val()&&b(a);return a};pe.validate_on_change=function(a,b,c){a.change(function(){b(a)});!c&&a.val()&&b(a);return a};
pe.validate_before_submit=function(a){a.submit(function(){pe.validation.clear_error_messages(a);a.find("input").each(function(a,b){var c=$(b);c.data("text_entered",!0);c.keyup();c.blur()});a.find("select").each(function(a,b){var c=$(b);c.data("text_entered",!0);c.change()});a.find("textarea").each(function(a,b){var c=$(b);c.data("text_entered",!0);c.keyup();c.blur()});var b=!0;$.each(pe.validatables,function(a,c){b=c.validate_on_submit()&&b});if(0<a.find(".inline-errors").length||!b){var c=a.find(".inline-errors:first").parent(),
d=c.find("input:first");0<d.length?d.is(":hidden")?(d.show(),d.focus(),d.hide()):d.focus():(d=c.find("textarea"),c=c.find('select option:selected[value=""]').parent(),d&&d.focus(),c&&c.focus());return!1}})};
pe.validate_user_exists=function(a,b){form=$(a.parents("form")[0]);form.submit(function(){pe.validation.clear_error_messages(form);$.post("/api/users/check_user_exists",{login:a.val(),password:b.val()},function(c){pe.validation.show_message(a,c.username);pe.validation.show_message(b,c.password);_.isEmpty(c)&&(form.unbind("submit"),form.submit())});return!1})};pe.validation.clear_error_messages=function(a){pe.validation.find_error_messages(a).remove()};pe.validation.find_error_messages=function(a){return a.find(".inline-errors")};
pe.validation.show_message=function(a,b){a.parent().find(".inline-errors,img").remove();b?a.after('<span class="inline-errors">'+b+"</span>"):a.after('<img src="/assets/users/check.png" />')};pe.validation.is_more_than_5_words=function(a){return!!a.match(/(\w+\s+){5}\w+/)};pe.validation.is_single_non_character=function(a){return!a?!1:!a.match(/[a-zA-Z]+/)};pe.validation.is_valid_email_address=function(a){return!!a.match(/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9])([A-Za-z0-9_\-\.])*\.([A-Za-z]{2,4})$/)};
pe.validation.is_valid_email_list=function(a){if(!a)return"Please enter at least one email.";var a=a.split(","),b="";$.each(a,function(a,d){d=$.trim(d);if(!pe.validation.is_valid_email_address(d))return b=d+" is not a valid email address.",!1});return b};pe.validation.contains_illegal_characters=function(a){return!!a.match(/[\!@#\$%\^&\*\(\)\{\}\[\]\/\=\"<>\~\;_\+\?\\]/)};
pe.validation.ensure_email_not_blank_and_is_valid=function(a){var b=a.val();if(!("string"!==typeof b||!b&&!a.data("text_entered"))){a.data("text_entered",!0);var c=a.attr("data_label")||"Email";if(0===b.length)pe.validation.show_message(a,c+" cannot be blank.");else{var d=!0,e=/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9])([A-Za-z0-9_\-\.])*\.([A-Za-z]{2,4})$/;$.each(b.split(","),function(a,b){d=d&&0<b.length&&e.test($.trim(b))});d?(pe.validation.show_message(a,""),a.data("text_entered",!0)):pe.validation.show_message(a,
"Please enter a valid email.")}}};
pe.validation.validate_name=function(a){var b=a.val();"string"!==typeof b||!b&&!a.data("text_entered")||(a.data("text_entered",!0),pe.validation.is_single_non_character(b)?pe.validation.show_message(a,"Please enter a valid "+pe.validation.get_name_error_message(a)+"."):pe.validation.contains_illegal_characters(b)?pe.validation.show_message(a,"Please enter a valid name."):50<b.length?pe.validation.show_message(a,"Please shorten your name."):pe.validation.is_more_than_5_words(b)?pe.validation.show_message(a,
"Please enter fewer than 5 words."):0<b.length?pe.validation.show_message(a,""):0<a[0].id.indexOf("first_name")?pe.validation.show_message(a,"Please enter your first name."):0<a[0].id.indexOf("last_name")?pe.validation.show_message(a,"Please enter your last name."):pe.validation.show_message(a,"Please enter your name."))};
pe.validation.ensure_not_blank=function(a){var b=a.val();"string"!==typeof b||!b&&!a.data("text_entered")||(a.data("text_entered",!0),0===a.val().length?(b=a.attr("data_label")||"Field",pe.validation.show_message(a,b+" cannot be blank.")):(pe.validation.show_message(a,""),a.data("text_entered",!0)))};
pe.validation.validate_credit_card_number=function(a){var b=a.val();if(!(16>b.length)||a.data("text_entered"))a.data("text_entered",!0),"string"===typeof b&&pe.is_valid_credit_card_number(b)?pe.validation.show_message(a,""):pe.validation.show_message(a,"Please enter a valid card number.")};pe.validation.validate_email=function(a){var b=a.val();if(b||a.data("text_entered"))a.data("text_entered",!0),$.getJSON("/api/users/check_email",{email:b},function(b){pe.validation.show_message(a,b.message)})};
pe.validation.validate_edited_email=function(a,b){var c=b.val();if(c||b.data("text_entered"))b.data("text_entered",!0),$.getJSON("/api/users/"+a+"/check_edited_email",{email:c},function(a){pe.validation.show_message(b,a.message)})};
pe.validation.validate_email_format=function(a){var b=a.val(),c=/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9])([A-Za-z0-9_\-\.])*\.([A-Za-z]{2,4})$/;0<b.length&&!c.test(b)?pe.validation.show_message(a,"Please enter a valid email."):0<b.length&&c.test(b)&&(pe.validation.show_message(a,""),a.data("text_entered",!0))};pe.validation.validate_email_list=function(a){var b=a.val();"string"===typeof b&&(b=pe.validation.is_valid_email_list(b))&&pe.validation.show_message(a,b)};
pe.validation.validate_password=function(a){var b=a.val();b?0<b.length&&-1<b.indexOf(" ")?pe.validation.show_message(a,"No spaces allowed for password."):6>b.length?pe.validation.show_message(a,"Please enter a longer password."):(pe.validation.show_message(a,""),a.data("text_entered",!0)):a.data("text_entered")&&pe.validation.show_message(a,"Please enter a password.")};
pe.validation.validate_security_code=function(a){var b=a.val();if(!(3>b.length)||a.data("text_entered"))a.data("text_entered",!0),b.match(/^\d{3}$/)||pe.validation.show_message(a,"Please enter a valid security code.")};
pe.validation.validate_user_name=function(a){var b=a.val();a.attr("disabled")||!b&&!a.data("text_entered")||(a.data("text_entered",!0),50<b.length?pe.validation.show_message(a,"Please shorten your name."):0===b.length?pe.validation.show_message(a,"Please enter a user name."):$.getJSON("/api/users/check_username",{username:b},function(b){pe.validation.show_message(a,b.message)}))};
pe.validation.validate_change_of_username=function(a,b){var c=b.val();if(c||b.data("text_entered"))b.data("text_entered",!0),50<c.length?pe.validation.show_message(b,"Please shorten your name."):0===c.length?pe.validation.show_message(b,"Please enter a user name."):$.getJSON("/api/users/"+a+"/check_edited_username",{username:c},function(a){pe.validation.show_message(b,a.message)})};
pe.validation.validate_zip_code=function(a){var b=a.val();if(!(5>b.length)||a.data("text_entered"))a.data("text_entered",!0),5>b.length?pe.validation.show_message(a,"Please enter a valid zip code."):"string"===typeof b&&pe.is_valid_zip_code(b)?pe.validation.show_message(a,""):pe.validation.show_message(a,"Please enter a valid zip code.")};
pe.validation.terms_accepted=function(a){if(a.attr("checked")||a.data("text_entered"))a.data("text_entered",!0),a.attr("checked")?pe.validation.show_message(a.parent(),""):pe.validation.show_message(a.parent(),"Please accept the terms of use")};pe.validation.get_name_error_message=function(a){return 0<a[0].id.indexOf("first_name")?"first name":0<a[0].id.indexOf("last_name")?"last name":"name"};
pe.SubmitToContest=function(a){pe.init_widget(this,a);this.model_name="contestant";this.form_container=a.find(".Form");this.form=this.form_container.find("form");this.thank_you=a.find(".ThankYou");this.thank_you_close_button=this.thank_you.find(".Close");this.thank_you_close_button.click(this.callback(this.close_thank_you_click));this.init_form();this.form.submit(this.callback(this.pack_date));pe.validate_before_submit(this.form)};
pe.SubmitToContest.prototype.init_form=function(){this.first_name_field=this.field_container_by_name("first_name");this.last_name_field=this.field_container_by_name("last_name");this.email_field=this.field_container_by_name("email");this.zip_code_field=this.field_container_by_name("zip_code");this.dob_field=this.field_container_by_name("dob");this.terms_of_service=this.field_container_by_name("terms_of_service",":checkbox");this.dob_module_container=$(".DateOfBirth");this.dob_module=new pe.DateOfBirthWidget(this.dob_module_container,
this.model_name);pe.validatables.push(this.dob_module);pe.validate_on_blur(this.first_name_field,pe.validation.validate_name);pe.validate_on_blur(this.last_name_field,pe.validation.validate_name);pe.validate_on_blur(this.email_field,pe.validation.ensure_email_not_blank_and_is_valid);pe.validate_on_blur(this.zip_code_field,pe.validation.ensure_not_blank);pe.validate_on_blur(this.terms_of_service,pe.validation.terms_accepted);this.first_name_field.focus()};
pe.SubmitToContest.prototype.field_container_by_name=function(a,b){return this.form.find('[name="'+this.model_name+"["+a+']"]'+(b||""))};pe.SubmitToContest.prototype.pack_date=function(){this.dob_field.val(this.dob_module.val())};pe.SubmitToContest.prototype.close_thank_you_click=function(){this.form_container.removeClass("hidden");this.thank_you.addClass("hidden")};$(document).ready(function(){var a=$(".SubmitToContest");0<a.length&&(pe.submit_to_contest=new pe.SubmitToContest(a))});
