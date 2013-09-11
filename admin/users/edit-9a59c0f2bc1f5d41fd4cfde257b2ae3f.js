pe.accentMap={"&":"and","\u00e0":"a","\u00e1":"a","\u00e2":"a","\u00e3":"a","\u00e4":"a","\u00e5":"a","\u00e7":"c","\u00c0":"a","\u00c1":"a","\u00e8":"e","\u00e9":"e","\u00ea":"e","\u00eb":"e","\u00c8":"e","\u00c9":"e","\u00ec":"i","\u00f1":"n","\u00ed":"i","\u00ee":"i","\u00ef":"i","\u00f2":"o","\u00f3":"o","\u00f4":"o","\u00f5":"o","\u00f6":"o","\u00f9":"u","\u00fa":"u","\u00fb":"u","\u00fc":"u","!":"i",$:"s","-":""," ":"","'":"","\u2019":"",".":""};pe.ajax_error=function(){alert("The request failed. Please try again later.")};
pe.ajax_send=function(a,b){var c=$("meta[name='csrf-token']").attr("content");b.setRequestHeader("X-CSRF-Token",c)};pe.alert=function(a){alert(a)};pe.animated_scrolling=function(a,b){if(0!==a.length){var c=a.offset().top-(b||25);$("html,body").stop().animate({scrollTop:c+"px"},800,"cubicEaseInOut",function(){return!1})}};pe.scrolling=function(a,b){if(0!==a.length){var c=a.offset().top-(b||25);$("html,body").scrollTop(c)}};pe.days_of_week="Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" ");
pe.array_contains=function(a,b){return _.isArray(b)?0===_.difference(b,a).length:-1<_.indexOf(a,b)};pe.arrays_equal=function(a,b){if(!a&&!b||!a&&0===b.length||0===a.length&&!b)return!0;if(a.length!=b.length)return!1;for(var c=a.sort(),d=b.sort(),e=0,f=a.length;e<f;e++)if(c[e]!==d[e])return!1;return!0};pe.array_match=function(a,b){var c=!1;$.each(a,function(a,e){if(-1<b.indexOf(e))return c=!0,!1});return c};pe.array_merge=function(a,b){var c=a.concat(b);c.sort();return c};
pe.array_remove=function(a,b){return!a?a:pe.is_array(b)?$.grep(a,function(a){return-1===b.indexOf(a)}):$.grep(a,function(a){return a!==b})};pe.assign_photo_size=function(a,b,c){return!a?"/assets/no_image_"+c+".png":"original"===b?a.replace("xxx.jpg",b+".jpg"):a.replace("xxx.jpg","s"+b+".jpg")};pe.remove_timestamp_from_asset_url=function(a){return a.split("?")[0]};pe.browser_is_ie8=function(){return $.browser.msie&&"8.0"===$.browser.version};
pe.build_dob_field_name=function(a,b,c){return[a||"user","[",b?b+"_":"","dob(",c,"i)]"].join("")};pe.capitalise_first_letter=function(a){return null===a?"":a.charAt(0).toUpperCase()+a.slice(1)};pe.classes_starting_with=function(a,b){return $.map(a.attr("class").split(/\s+/),function(a){if(pe.string_starts_with(a,b))return a})};pe.compare=function(a,b){return pe.is_array(a)&&pe.is_array(b)?pe.arrays_equal(a,b):a===b};
pe.convert_to_rounded_corners=function(a){a=a||$(".ConvertToRoundedCorners");a.each(function(a,c){var d=$(c);d.removeClass("ConvertToRoundedCorners");d.addClass("rounded_corner_wrapper");$('<div class="rounded_corner top_left"></div>').appendTo(d);$('<div class="rounded_corner top_right"></div>').appendTo(d);$('<div class="rounded_corner bottom_left"></div>').appendTo(d);$('<div class="rounded_corner bottom_right"></div>').appendTo(d)});return a};
pe.convert_to_tabbed_pod=function(a,b){return $.map(a,function(a){a=$(a);if(!a.hasClass("ConvertToTabbedPod"))return alert("format_tabbed_pod: element to convert must have class ConvertToTabbedPod. It only has "+a[0].className);var d=a.children("ul");d.addClass("tab");d.children("li").each(function(a,b){b=$(b);var c=b.html();b.html(pe.templatize('<div class="left_end pod_sprite float_left"></div>{{content}}<div class="right_end pod_sprite float_left"></div>',{content:c}))});var e=d.html();d.remove();
var d=a.html(),f=pe.classes_starting_with(a,"width");if(0===f.length)return alert("no width class found");if(1<f.length)return alert("more than 1 width class found");var g=f[0].substr(5);a.addClass("tabs");a.removeClass("ConvertToTabs");a.removeClass(f[0]);a.html(pe.templatize('<div><table class="width{{width}}" cellpadding="0" cellspacing="0"><tbody><tr><td class="header" colspan="4"><div class="header_row"><ul class="tab">{{headers}}</ul><div class="mid_section"></div><div class="right_corner pod_sprite"></div></div></td></tr><tr class="content_container"><td class="left_side pod_sides"></td><td class="content">{{content}}</td><td class="right_side pod_sides"></td></tr><tr class="footer_row"><td class="left_corner pod_sprite"></td><td class="mid_section"></td><td class="right_corner pod_sprite"></td></tr></tbody></table></div>',
{width:g,headers:e,content:d}));var e=a.children().tabs(b),h=["first","second","third","fourth"];a.find("ul.tab li").each(function(a,b){$(b).addClass(h[a])});return e})};
pe.new_convert_to_tabbed_pod=function(a,b){return $.map(a,function(a){a=$(a);if(!a.hasClass("ConvertToTabbedPod"))return alert("format_tabbed_pod: element to convert must have class ConvertToTabbedPod. It only has "+a[0].className);var d=a.children("ul"),e=d.html();d.remove();var d=a.html(),f=pe.classes_starting_with(a,"width");if(0===f.length)return alert("no width class found");if(1<f.length)return alert("more than 1 width class found");var g=f[0].substr(5);a.addClass("tabs");a.removeClass("ConvertToTabs");
a.removeClass(f[0]);a.html(pe.templatize('<div class="width{{width}}"><ul class="tab">{{headers}}</ul>{{content}}</div>',{width:g,headers:e,content:d}));var e=a.children().tabs(b),h=["first","second","third","fourth"];a.find("ul.tab li").each(function(a,b){$(b).addClass(h[a])});return e})};pe.date_string=function(a){return"string"===typeof a?a:a.getMonth()+1+"/"+a.getDate()+"/"+a.getFullYear()};
pe.days_between_dates=function(a,b){var c="string"===typeof a?Date.parse(a):a,d="string"===typeof b?Date.parse(b):b;return Math.abs(Math.floor((c-d)/864E5))};pe.empty=function(){};pe.event_search_text=function(a){var b=[a.name,a.description,a.location_name,a.category,a.neighborhood_name,a.neighborhood_id];a.tags&&$.each(a.tags,function(a,d){b.push(d)});a.performer_names&&$.each(a.performer_names,function(a,d){b.push(d)});return b.join(" ")};pe.fetch_photo_id_from_url=function(a){return a.split("/photos/")[1]};
pe.fix_ie7_rendering_bug=function(){$(".ConvertToTabbedPod").addClass("IeSucks")};pe.format_date=function(a){return a.getMonth()+1+"/"+a.getDate()+"/"+a.getFullYear()};pe.format_price=function(a){var b=Math.floor(a/100).toString();a=(a%100).toString();2>a.length&&(a="0"+a);return"$"+b+"."+a};pe.format_duration=function(a,b){if(!a)return"0:00";var c=Math.floor(a%60);return pe.string_padding_left(Math.floor(a/60).toString(),b||1,"0")+":"+pe.string_padding_left(c.toString(),2,"0")};pe.get_city_id=function(){return window.city_id};
pe.get_url_parameter=function(a,b){var c=RegExp("[\\?&]"+b+"=([^&]+)","i").exec(a);return c?c[1]:null};pe.hash_length=function(a){var b=0,c;for(c in a)a.hasOwnProperty(c)&&b++;return b};pe.hashes_equal=function(a,b){if(a===b)return!0;if(pe.hash_length(a)!=pe.hash_length(b))return!1;for(var c in a){var d=a[c],e=b[c];if(pe.is_array(d)){if(!pe.arrays_equal(d,e))return!1}else if(d!==e)return!1}return!0};
pe.hashes_match=function(a,b){for(var c in a){var d=a[c],e=b[c];if(pe.is_array(d)){if(!pe.array_contains(e,d))return!1}else if(d!==e)return!1}return!0};pe.https=function(a){return-1===window.location.href.indexOf("https://")?a:a.replace("http://","https://")};pe.inject=function(a,b,c){var d=b;$.each(a,function(a,b){d=c(d,b)});return d};
pe.init_widget=function(a,b){"string"!==typeof b&&(null!==b&&!b.length?alert("No container given."):(a.container=b,a.callback=function(a){for(var b=[a,this],e=1;e<arguments.length;e++)b.push(arguments[e]);return pe.bind_this.apply(this,b)},a.check_bind=function(a){if("undefined"===typeof this.container)throw"Incorrect scope binding"+a?" in: "+a:".";},a.bind_event=function(a,b){pe.assert(a,"bind_event: parameter 'event_type' is empty");this.container.bind(a,b)},a.fire_event=function(a,b){"undefined"===
typeof a&&alert("Must provide the event type to fire.");"undefined"===typeof b&&(b={});this.container.trigger(a,b)},a.show=function(){this.container.show()},a.hide=function(){this.container.hide()},a.toggle=function(a){this.container.toggle(a)},a.is_visible=function(){return this.container.is(":visible")}))};pe.install_easing=function(){jQuery.easing.cubicEaseInOut||(jQuery.easing.cubicEaseInOut=function(a,b,c,d){b=c+d;return 1>(a/=0.5)?b/2*a*a*a+c:b/2*((a-=2)*a*a+2)+c})};
pe.is_array=function(a){return!(!a||!("object"===typeof a&&"number"===typeof a.length&&"function"===typeof a.splice&&!a.propertyIsEnumerable("length")))};pe.is_valid_credit_card_number=function(a){return!!a.match(/^\d{4}(\s*|\s*\-\s*)?\d{4}(\s*|\s*\-\s*)?\d{4}(\s*|\s*\-\s*)?\d{4}$/)};pe.is_valid_date=function(a){return!a.match(/^(\d{1,2})(\/|-)(\d{1,2})(\/|-)(\d{4})$/)?!1:a!==$.datepicker.formatDate("m/d/yy",new Date(a))?a===$.datepicker.formatDate("mm/dd/yy",new Date(a)):!0};
pe.is_valid_zip_code=function(a){return!!a.match(/^\d{5}(\s*\-\s*\d{4})?$/)};pe.load=function(a){pe.assert(a,"error loading data");return a};pe.link_title_for_city=function(a){return"See the latest hotspots and events happening in "+a+"."};pe.link_title_for_city_party_climate=function(a){return"Check out the overview and photos of "+a+"."};
pe.link_title_for_event=function(a,b){return b?"Check out event details, photos and videos of "+a+" at "+b+".":"Check out event details, photos and videos of "+a+"."};pe.link_title_for_neighborhood=function(a,b){return"Check out "+a+" description, photos, and venues in "+b+"."};pe.link_title_for_performer=function(a){return"See the latest "+a+" schedule, photos, videos and news."};
pe.link_title_for_reviewer=function(a){switch(a){case "Lucas":return"Meet Lucas, the quintessential fun- loving, pub-crawling \u201cguy\u2019s guy\u201d. Learn about his personality and ratings.";case "Adriana":return"Meet Adriana, the epitome of a cosmopolitan girl. Learn about her personality and ratings.";case "Jonah":return"Meet Jonah, an affable, non-mainstream guy with natural curiosity about people and cultures. Learn about his personality and ratings.";case "Emma":return"Meet Emma, a lively, witty, and sociable \u201cgirl next door\u201d. Learn about her personality and ratings.";
case "All":return"Meet Lucas, Adriana, Jonah and Emma. Learn how their personalities can help you maximize your social experiences in your city and your travels."}};pe.link_title_for_venue=function(a,b,c){return c?"Check out the review, photos, videos, map and events schedule of "+a+" - "+c+" in "+b+".":"Check out the review, photos, videos, map and events schedule of "+a+" in "+b+"."};
pe.normalize=function(a){for(var b="",c=0,d=a.length;c<d;c++)var e=a.charAt(c),f=pe.accentMap[e],b=b+("undefined"===typeof f?e:f);return b};pe.object_hash_from_array=function(a){var b={};$.each(a,function(a,d){b[d.id]=d});return b};pe.object_length=function(a){var b=0,c;for(c in a)a.hasOwnProperty(c)&&b++;return b};pe.parse_price=function(a){return Math.ceil(100*parseFloat(a.substring(1)))};
pe.prepare_autocomplete_data=function(a){var b=[];$.each(a,function(a,d){$.each(d,function(d,f){f.category=a;b.push(f)})});return b};pe.remove_anchor_from_url=function(a){return a?a.split("#")[0]:""};pe.remove_query_string_from_url=function(a){return a?a.split("?")[0]:""};
pe.set_autocomplete_source=function(a,b,c){var d=pe.normalize(b.term).toLowerCase(),e=RegExp($.ui.autocomplete.escapeRegex(d),"i");a=$.grep(pe.prepare_autocomplete_data(a),function(a){a=a.label||a.value||a;return e.test(a)||e.test(pe.normalize(a))});a=_.sortBy(a,function(a){var b=a.label||a.value||a,b=pe.normalize(b).toLowerCase();return[a.category,b!=d,a.label]});c(a)};pe.shuffle_array=function(a){if(!a)return[];for(var b,c,d=a.length;d;)b=parseInt(Math.random()*d,10),c=a[--d],a[d]=a[b],a[b]=c;return a};
pe.string_padding_left=function(a,b,c){for(;a.length<b;)a=c+a;return a};pe.string_starts_with=function(a,b){return a.substr(0,b.length)===b};pe.string_ends_with=function(a,b){return a.substr(a.length-b.length)===b};pe.structured_tags_as_flat_array=function(a){var b=[];$.each(a,function(a,d){$.merge(b,d)});return b};pe.text_contains_query=function(a,b){var c=b.split(" "),d=!0;$.each(c,function(b,c){if(-1===a.indexOf(c))return d=!1,!0});return d};pe.today_date_string=function(){return pe.date_string(new Date)};
pe.truncate_by_words=function(a,b,c){if(!a||!b)return alert("Sorry, but an error happened. We are already warned about that.");c=c||"...";if(a.length<b)return a;a=a.slice(0,b-1);" "!==_.last(a)&&(b=a.lastIndexOf(" "),a=a.slice(0,b));return $.trim(a)+c};pe.value_from_cookie=function(a){return(a=document.cookie.match(RegExp("(^| )"+a+"=([^ ;]+)")))?a[2]:null};
pe.venue_search_text=function(a){var b=[a.name,a.description,a.address,a.hotspot_text,a.neighborhood_name];a.types&&$.each(a.types,function(a,d){b.push(d)});a.tags&&$.each(a.tags,function(a,d){b.push(d)});return b.join(" ")};pe.xor=function(a,b){return!!(a?!b:b)};$(document).ready(function(){$(document).ajaxSend(pe.ajax_send)});
pe.Validator=function(a){this.message=a.message||"Invalid value.";this.callback=a.callback;this.unless_callback=a.unless||function(){return!1};this.options=a;this.value=a.value?a.value:function(b){return a.callback(b)}};pe.Validator.prototype.passed=function(a){return!!this.callback($(a))};pe.Validator.prototype.failed=function(a){return!this.passed(a)};pe.Validator.prototype.unless=function(){return this.unless_callback()};
pe.DateOfBirthWidget=function(a,b,c,d,e){pe.init_widget(this,a);this.validation_enabled=!1;this.month_dropdown=this.container.find("#"+b+"_dob_2i");c&&this.month_dropdown.val(c);this.month_dropdown.change(this.callback(this.validate));this.day_dropdown=this.container.find("#"+b+"_dob_3i");d&&this.day_dropdown.val(d);this.day_dropdown.change(this.callback(this.validate));this.on_validate=null;this.validator=new pe.Validator({callback:this.callback(function(){return this.is_valid()}),message:"Please enter a correct date."});
this.year_dropdown=this.container.find("#"+b+"_dob_1i");e&&this.year_dropdown.val(e);this.year_dropdown.change(this.callback(this.validate))};pe.DateOfBirthWidget.prototype.is_valid=function(){return pe.is_valid_date(this.val())};pe.DateOfBirthWidget.prototype.val=function(){return[this.month_dropdown.val(),this.day_dropdown.val(),this.year_dropdown.val()].join("/")};
pe.DateOfBirthWidget.prototype.validate=function(){var a=[this.month_dropdown.val(),this.day_dropdown.val(),this.year_dropdown.val()];3===_.compact(a).length&&(this.validation_enabled=!0);if(!this.validation_enabled)return!0;if(this.on_validate)this.on_validate();if(0===_.compact(a).length)return pe.validation.show_message(this.container,"Date of Birth is required."),!1;if(this.is_valid())return pe.validation.show_message(this.container,""),!0;pe.validation.show_message(this.container,"Please enter a valid date of birth");
return!1};pe.DateOfBirthWidget.prototype.validate_on_submit=function(){this.validation_enabled=!0;return this.validate()};
pe.PasswordBox=function(a){pe.init_widget(this,a);this.obfuscate_password=!0;this.password_obfuscated_field=pe.load(this.container.find("input.password"));this.password_clear_field=$("<input type='text' class='text_field' />");this.password_clear_field.insertBefore(this.password_obfuscated_field);this.password_clear_field.hide();this.password_clear_field.keyup(this.callback(this.on_clear_field_key_up));$('<br><span class="ToggleLink toggle fake_link blue_link">Show Password</span>').insertAfter(this.password_obfuscated_field);
this.toggle_link=pe.load(this.container.find(".ToggleLink"));this.toggle_link.click(this.callback(this.on_toggle_link_clicked))};pe.PasswordBox.prototype.on_clear_field_key_up=function(){if(!this.obfuscate_password){var a=this.password_clear_field.val();"string"===typeof a&&this.password_obfuscated_field.val(a).keyup()}};
pe.PasswordBox.prototype.on_toggle_link_clicked=function(){if(this.obfuscate_password=!this.obfuscate_password){var a=this.password_clear_field.val();"string"===typeof a&&(this.password_obfuscated_field.val(a),this.toggle_link.html("Show Password"))}else a=this.password_obfuscated_field.val(),"string"===typeof a&&this.password_clear_field.val(a),this.toggle_link.html("Hide Password");this.password_obfuscated_field.toggle();this.password_clear_field.toggle()};
pe.validation.checked_validator=new pe.Validator({callback:function(a){return a.is(":checked")},message:"Please select one."});pe.validation.email_validator=new pe.Validator({callback:function(a){var b=a.val();if(!b&&!a.data("text_entered"))return!1;a.data("text_entered",!0);a=$.ajax({type:"GET",dataType:"JSON",url:"/api/users/check_email",data:{email:b},async:!1});return(a=jQuery.parseJSON(a.responseText))&&!_.isEmpty(a.message)?(this.message=a.message,!1):!0},message:"Invalid email."});
pe.validation.name_validator=new pe.Validator({callback:function(a){return _.isEmpty($.trim(a.val()))?(this.message="Field cannot be blank.",!1):50<a.val().length?(this.message="Please shorten your name.",!1):!0},message:"Invalid name."});pe.validation.not_blank_validator=new pe.Validator({callback:function(a){return!_.isEmpty($.trim(a.val()))},message:"Field cannot be blank."});
pe.ValidatableForm=function(a,b,c,d){pe.init_widget(this,a);this.bindings=c||{};this.chained_fields=[];this.errors={};this.rules=b||{};this.save_button=this.container.find(".SaveButton");this.submit_button=this.container.find(".SubmitButton");this.after_submit=d;this.init_bindings();this.validate();this.toggle_submit();this.submit_button.click(this.callback(this.on_submit))};
pe.ValidatableForm.prototype.init_bindings=function(){this.container.find("input, textarea, select").change(this.callback(function(){this.save_button.removeClass("disabled").removeAttr("disabled")}));_.each(this.bindings,function(a,b){"string"===typeof a?$(b).bind(a,this.callback(function(){this.validate_field(b)})):"function"===typeof a&&this.callback(a)();this.rules[b].value($(b))&&this.validate_field(b)},this)};
pe.ValidatableForm.prototype.on_submit=function(){var a=this.validate();this.highlight_first_failed();a&&this.after_submit&&this.after_submit();return a};pe.ValidatableForm.prototype.delete_error=function(a){delete this.errors[a];_.each(this.chained_fields,function(b){_.include(b,a)&&_.each(b,function(a){this.errors[a]&&this.delete_error(a)},this)},this)};
pe.ValidatableForm.prototype.focus_on_failed=function(){if(!this.valid())return pe.install_easing(),pe.animated_scrolling($(".inline-errors:first").parents("li"),2),!1};pe.ValidatableForm.prototype.highlight_first_failed=function(){if(!this.validate()){if(!this.validation_shown()){var a=_.keys(this.errors)[0];this.render_field_error(a)}this.focus_on_failed()}};pe.ValidatableForm.prototype.render_errors=function(){_.each(this.errors,function(a,b){this.render_field_error(b)},this)};
pe.ValidatableForm.prototype.render_field_error=function(a){var b=$(a).parents("li.input");0===b.length&&(b=$(a));b.find(".inline-errors").remove();b.append('<span class="inline-errors">'+this.errors[a]+"</span>");b.find(".inline-success").remove()};pe.ValidatableForm.prototype.render_field_success=function(a){var b=$(a).parents("li.input");0===b.length&&(b=$(a));b.find(".inline-success").remove();b.append('<img class="inline-success" src="/assets/users/check.png" />');b.find(".inline-errors").remove()};
pe.ValidatableForm.prototype.render_success=function(){_.each(this.valid_fields(),function(a){this.render_field_success(a)},this)};pe.ValidatableForm.prototype.toggle_submit=function(){this.valid()?this.submit_button.removeClass("disabled").removeAttr("disabled"):this.submit_button.addClass("disabled")};pe.ValidatableForm.prototype.valid_fields=function(){return _.difference(_.keys(this.rules),_.keys(this.errors))};
pe.ValidatableForm.prototype.validate_field=function(a){var b=this.rules[a],c=b.passed(a);b.unless()?this.delete_error(a):c?(this.delete_error(a),this.render_field_success(a)):(this.errors[a]=b.message,this.render_field_error(a));this.toggle_submit();return c};pe.ValidatableForm.prototype.valid=function(){return _.isEmpty(this.errors)};pe.ValidatableForm.prototype.validate=function(){_.each(this.rules,function(a,b){a.failed(b)?this.errors[b]=a.message:delete this.errors[b]},this);return this.valid()};
pe.ValidatableForm.prototype.validate_together=function(){this.chained_fields.push(arguments)};pe.ValidatableForm.prototype.validation_shown=function(){return 0<this.container.find(".inline-errors").length};
pe.CloseButton=function(a,b){pe.init_widget(this,a);this.close_button=a.find(".CloseButton");if("function"===typeof b)this.close_button.click(b);else switch(b){case pe.CloseButton.close_methods.REMOVE:this.close_button.click(this.callback(this.remove_container));break;case pe.CloseButton.close_methods.HIDE:this.close_button.click(this.callback(this.hide_container));break;default:alert("unknown value for 'close_method' parameter.")}};pe.CloseButton.close_methods={REMOVE:"REMOVE",HIDE:"HIDE"};
pe.CloseButton.events={CLOSED:"CloseButton_CLOSED"};pe.CloseButton.prototype.remove_container=function(){this.container.detach();this.fire_event(pe.CloseButton.events.CLOSED);this.container.remove();return!1};pe.CloseButton.prototype.hide_container=function(){this.fire_event(pe.CloseButton.events.CLOSED);this.container.hide();return!1};
pe.SortableAutocomplete=function(a,b,c,d,e){pe.init_widget(this,a);this.autocomplete_data_or_url=b;this.limit=d;this.input_field_name=c;this.container.html(this.html());this.dummy_input_field=this.container.find(".DummyInputField");this.messaging_area=this.container.find(".Messaging");this.autocomplete_input_field=this.container.find(".AutocompleteField");a=this.autocomplete_input_field.autocomplete({source:this.autocomplete_data_or_url,minLength:1,close:this.callback(this.autocomplete_closed),select:this.callback(this.autocomplete_entry_selected)}).data("autocomplete");
a._renderItem=pe.SortableAutocomplete.render_autocomplete_entry;a._renderMenu=pe.SortableAutocomplete.render_autocomplete_list;this.selected_data_list_div=this.container.find(".SelectedDataList");this.selected_data_list_div.sortable();this.selected_data_list_div.disableSelection();e&&this.add_data_to_list(e)};pe.SortableAutocomplete.events={SELECTED:"SortableAutocomplete_SELECTED"};
pe.SortableAutocomplete.prototype.add_data_to_list=function(a){0!==a.length&&(this.remove_dummy_row(),$.each(a,this.callback(function(a,c){this.add_selected_data(c.label,c.id,c.category)})),this.enforce_limit())};pe.SortableAutocomplete.prototype.add_dummy_row=function(){this.dummy_input_field||(this.dummy_input_field=$('<input class="DummyInputField" type="hidden" name="'+this.input_field_name+'" value="">'),this.autocomplete_input_field.after(this.dummy_input_field))};
pe.SortableAutocomplete.prototype.add_selected_data=function(a,b,c){this.remove_dummy_row();this.selected_data_list_div.append(this.selected_data_html(a,b,c));(new pe.CloseButton(this.selected_data_list_div.find(".SelectedInputData").last(),pe.CloseButton.close_methods.REMOVE)).bind_event(pe.CloseButton.events.CLOSED,this.callback(this.close_button_clicked));this.enforce_limit()};pe.SortableAutocomplete.prototype.autocomplete_closed=function(){this.autocomplete_input_field.val("")};
pe.SortableAutocomplete.prototype.autocomplete_entry_selected=function(a,b){var c=b.item;this.add_selected_data(c.label,c.id,c.category);this.fire_event(pe.SortableAutocomplete.events.SELECTED,c.id)};pe.SortableAutocomplete.prototype.close_button_clicked=function(){0===this.selected_data_list_div.find(".SelectedInputData").length&&this.add_dummy_row();this.enforce_limit()};
pe.SortableAutocomplete.prototype.enforce_limit=function(){this.selected_data_list_div.find(".SelectedInputData").length>=this.limit?(this.messaging_area.html("You have reached the selection limit. Please remove before adding."),this.autocomplete_input_field.autocomplete("disable")):(this.messaging_area.html(""),this.autocomplete_input_field.autocomplete("enable"))};
pe.SortableAutocomplete.prototype.html=function(){return'<input class="AutocompleteField" type="text"><div class="Messaging"></div><input class="DummyInputField" type="hidden" name="'+this.input_field_name+'" value=""><ul class="SelectedDataList" id="sortable"></ul>'};pe.SortableAutocomplete.prototype.remove_dummy_row=function(){this.dummy_input_field&&(this.dummy_input_field.remove(),this.dummy_input_field=null)};
pe.SortableAutocomplete.render_autocomplete_entry=function(a,b){b.display_label=b.category?pe.templatize("{{label}} ({{category}})",b):b.label;var c=$(pe.templatize("<li><a>{{display_label}}</a></li>",b));c.data("item.autocomplete",b);a.append(c);return c};pe.SortableAutocomplete.render_autocomplete_list=function(a,b){var c=this,d="";$.each(b,function(b,f){f.type!=d&&(a.append("<li class='ui-autocomplete-category  first_category'>"+f.type+"</li>"),d=f.type);c._renderItem(a,f)})};
pe.SortableAutocomplete.prototype.selected_data_html=function(a,b,c){return'<li class="SelectedInputData ui-state-default"><img style="margin-right:20px; width: 15px; height: 15px;" src="/assets/events/close.png"class="CloseButton float_left"><p class="float_left">'+(c?a+"("+c+")":a)+'</p><input type="hidden" value="'+b+'" name="'+this.input_field_name+'"><div class="clear"></div></li>'};
(function(a){var b;a.rails=b={linkClickSelector:"a[data-confirm], a[data-method], a[data-remote]",formSubmitSelector:"form",formInputClickSelector:"form input[type=submit], form input[type=image], form button[type=submit], form button:not([type])",disableSelector:"input[data-disable-with], button[data-disable-with], textarea[data-disable-with]",enableSelector:"input[data-disable-with]:disabled, button[data-disable-with]:disabled, textarea[data-disable-with]:disabled",requiredInputSelector:"input[name][required],textarea[name][required]",
fileInputSelector:"input:file",CSRFProtection:function(b){var d=a('meta[name="csrf-token"]').attr("content");d&&b.setRequestHeader("X-CSRF-Token",d)},fire:function(b,d,e){d=a.Event(d);b.trigger(d,e);return!1!==d.result},confirm:function(a){return confirm(a)},ajax:function(b){return a.ajax(b)},handleRemote:function(c){var d,e,f,g=c.data("type")||a.ajaxSettings&&a.ajaxSettings.dataType;if(b.fire(c,"ajax:before")){if(c.is("form")){d=c.attr("method");e=c.attr("action");f=c.serializeArray();var h=c.data("ujs:submit-button");
h&&(f.push(h),c.data("ujs:submit-button",null))}else d=c.data("method"),e=c.attr("href"),f=null;b.ajax({url:e,type:d||"GET",data:f,dataType:g,beforeSend:function(a,d){void 0===d.dataType&&a.setRequestHeader("accept","*/*;q=0.5, "+d.accepts.script);return b.fire(c,"ajax:beforeSend",[a,d])},success:function(a,b,d){c.trigger("ajax:success",[a,b,d])},complete:function(a,b){c.trigger("ajax:complete",[a,b])},error:function(a,b,d){c.trigger("ajax:error",[a,b,d])}})}},handleMethod:function(b){var d=b.attr("href"),
e=b.data("method");b=a("meta[name=csrf-token]").attr("content");var f=a("meta[name=csrf-param]").attr("content"),d=a('<form method="post" action="'+d+'"></form>'),e='<input name="_method" value="'+e+'" type="hidden" />';void 0!==f&&void 0!==b&&(e+='<input name="'+f+'" value="'+b+'" type="hidden" />');d.hide().append(e).appendTo("body");d.submit()},disableFormElements:function(c){c.find(b.disableSelector).each(function(){var b=a(this),c=b.is("button")?"html":"val";b.data("ujs:enable-with",b[c]());
b[c](b.data("disable-with"));b.attr("disabled","disabled")})},enableFormElements:function(c){c.find(b.enableSelector).each(function(){var b=a(this),c=b.is("button")?"html":"val";if(b.data("ujs:enable-with"))b[c](b.data("ujs:enable-with"));b.removeAttr("disabled")})},allowAction:function(a){var d=a.data("confirm"),e=!1,f;if(!d)return!0;b.fire(a,"confirm")&&(e=b.confirm(d),f=b.fire(a,"confirm:complete",[e]));return e&&f},blankInputs:function(b,d,e){var f=a(),g;b.find(d||"input,textarea").each(function(){g=
a(this);if(e?g.val():!g.val())f=f.add(g)});return f.length?f:!1},nonBlankInputs:function(a,d){return b.blankInputs(a,d,!0)},stopEverything:function(a){a.stopImmediatePropagation();return!1},callFormSubmitBindings:function(b){b=b.data("events");var d=!0;void 0!==b&&void 0!==b.submit&&a.each(b.submit,function(a,b){if("function"===typeof b.handler)return d=b.handler(b.data)});return d}};"ajaxPrefilter"in a?a.ajaxPrefilter(function(a,d,e){b.CSRFProtection(e)}):a(document).ajaxSend(function(a,d){b.CSRFProtection(d)});
a(b.linkClickSelector).live("click.rails",function(c){var d=a(this);if(!b.allowAction(d))return b.stopEverything(c);if(void 0!==d.data("remote"))return b.handleRemote(d),!1;if(d.data("method"))return b.handleMethod(d),!1});a(b.formSubmitSelector).live("submit.rails",function(c){var d=a(this),e=void 0!==d.data("remote"),f=b.blankInputs(d,b.requiredInputSelector),g=b.nonBlankInputs(d,b.fileInputSelector);if(!b.allowAction(d))return b.stopEverything(c);if(f&&b.fire(d,"ajax:aborted:required",[f]))return!e;
if(e){if(g)return b.fire(d,"ajax:aborted:file",[g]);if(!a.support.submitBubbles&&!1===b.callFormSubmitBindings(d))return b.stopEverything(c);b.handleRemote(d);return!1}setTimeout(function(){b.disableFormElements(d)},13)});a(b.formInputClickSelector).live("click.rails",function(c){var d=a(this);if(!b.allowAction(d))return b.stopEverything(c);c=(c=d.attr("name"))?{name:c,value:d.val()}:null;d.closest("form").data("ujs:submit-button",c)});a(b.formSubmitSelector).live("ajax:beforeSend.rails",function(c){this==
c.target&&b.disableFormElements(a(this))});a(b.formSubmitSelector).live("ajax:complete.rails",function(c){this==c.target&&b.enableFormElements(a(this))})})(jQuery);
$(document).ready(function(){var a=window.is_get_paid_to_party_admin,b=window.is_writer;if(window.is_users_admin){var c=new pe.Validator({callback:function(a){a=$.ajax({type:"GET",dataType:"JSON",url:"/api/users/"+window.user_id+"/check_edited_email",data:{email:a.val()},async:!1});return(a=jQuery.parseJSON(a.responseText))&&!_.isEmpty(a.message)?(this.message=a.message,!1):!0},message:"Invalid email."}),d=new pe.DateOfBirthWidget($(".DateOfBirth"),"user"),c={".DateOfBirth":d.validator,"#user_first_name":pe.validation.name_validator,
"#user_last_name":pe.validation.name_validator,"#user_url_param":pe.validation.not_blank_validator,"#user_email":c,"#user_city":pe.validation.not_blank_validator,"#user_default_city_id":pe.validation.not_blank_validator},e=$("form.user"),f=new pe.ValidatableForm(e,c,{".DateOfBirth":function(){d.on_validate=function(){f.validate_field(".DateOfBirth")}},"#user_default_city_id":"change","#user_first_name":"blur","#user_last_name":"blur","#user_url_param":"keyup","#user_email":"blur","#user_city":"keyup"});
0<e.length&&$("form input[type=text]:first").focus()}a&&b&&new pe.SortableAutocomplete($(".VenueSelector"),"/api/venues/autocomplete.json","user[ordered_favorite_venue_ids][]",5,window.favorite_venues);pe.init_page_framework()});
