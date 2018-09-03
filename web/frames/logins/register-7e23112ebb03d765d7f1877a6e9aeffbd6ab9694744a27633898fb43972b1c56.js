pe.accentMap={"&":"and","\xe0":"a","\xe1":"a","\xe2":"a","\xe3":"a","\xe4":"a","\xe5":"a","\xe7":"c","\xc0":"a","\xc1":"a","\xe8":"e","\xe9":"e","\xea":"e","\xeb":"e","\xc8":"e","\xc9":"e","\xec":"i","\xf1":"n","\xed":"i","\xee":"i","\xef":"i","\xf2":"o","\xf3":"o","\xf4":"o","\xf5":"o","\xf6":"o","\xf9":"u","\xfa":"u","\xfb":"u","\xfc":"u","!":"i",$:"s","-":""," ":"","'":"","\u2019":"",".":""},pe.ajax_error=function(){alert("The request failed. Please try again later.")},pe.ajax_send=function(e,t){var a=$("meta[name='csrf-token']").attr("content");t.setRequestHeader("X-CSRF-Token",a)},pe.alert=function(e){alert(e)},pe.animated_scrolling=function(e,t){if(0!==e.length){var a=e.offset().top-(t||25);$("html,body").stop().animate({scrollTop:a+"px"},800,"cubicEaseInOut",function(){return!1})}},pe.scrolling=function(e,t){if(0!==e.length){var a=e.offset().top-(t||25);$("html,body").scrollTop(a)}},pe.days_of_week=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],pe.array_contains=function(e,t){return _.isArray(t)?0===_.difference(t,e).length:-1<_.indexOf(e,t)},pe.arrays_equal=function(e,t){if(!e&&!t)return!0;if(!e&&0===t.length||0===e.length&&!t)return!0;if(e.length!=t.length)return!1;for(var a=e.sort(),n=t.sort(),i=0,r=e.length;i<r;i++)if(a[i]!==n[i])return!1;return!0},pe.array_match=function(e,a){var n=!1;return $.each(e,function(e,t){if(-1<a.indexOf(t))return!(n=!0)}),n},pe.array_merge=function(e,t){var a=e.concat(t);return a.sort(),a},pe.array_remove=function(e,t){return e?pe.is_array(t)?$.grep(e,function(e){return-1===t.indexOf(e)}):$.grep(e,function(e){return e!==t}):e},pe.assign_photo_size=function(e,t,a){return e?"original"===t?e.replace("xxx.jpg",t+".jpg"):e.replace("xxx.jpg","s"+t+".jpg"):"/assets/no_image_"+a+".png"},pe.remove_timestamp_from_asset_url=function(e){return e.split("?")[0]},pe.browser_is_ie8=function(){return $.browser.msie&&"8.0"===$.browser.version},pe.build_dob_field_name=function(e,t,a){return t?t+="_":t="",[e=e||"user","[",t,"dob(",a,"i)]"].join("")},pe.capitalise_first_letter=function(e){return null===e?"":e.charAt(0).toUpperCase()+e.slice(1)},pe.classes_starting_with=function(e,t){return $.map(e.attr("class").split(/\s+/),function(e){if(pe.string_starts_with(e,t))return e})},pe.compare=function(e,t){return pe.is_array(e)&&pe.is_array(t)?pe.arrays_equal(e,t):e===t},pe.convert_to_rounded_corners=function(e){var t=e||$(".ConvertToRoundedCorners");return t.each(function(e,t){var a=$(t);a.removeClass("ConvertToRoundedCorners"),a.addClass("rounded_corner_wrapper"),$('<div class="rounded_corner top_left"></div>').appendTo(a),$('<div class="rounded_corner top_right"></div>').appendTo(a),$('<div class="rounded_corner bottom_left"></div>').appendTo(a),$('<div class="rounded_corner bottom_right"></div>').appendTo(a)}),t},pe.convert_to_tabbed_pod=function(e,d){return $.map(e,function(e){var t=$(e);if(!t.hasClass("ConvertToTabbedPod"))return alert("format_tabbed_pod: element to convert must have class ConvertToTabbedPod. It only has "+t[0].className);var a=t.children("ul");a.addClass("tab"),a.children("li").each(function(e,t){var a=(t=$(t)).html();t.html(pe.templatize('<div class="left_end pod_sprite float_left"></div>{{content}}<div class="right_end pod_sprite float_left"></div>',{content:a}))});var n=a.html();a.remove();var i=t.html(),r=pe.classes_starting_with(t,"width");if(0===r.length)return alert("no width class found");if(1<r.length)return alert("more than 1 width class found");var s=r[0].substr(5);t.addClass("tabs"),t.removeClass("ConvertToTabs"),t.removeClass(r[0]),t.html(pe.templatize('<div><table class="width{{width}}" cellpadding="0" cellspacing="0"><tbody><tr><td class="header" colspan="4"><div class="header_row"><ul class="tab">{{headers}}</ul><div class="mid_section"></div><div class="right_corner pod_sprite"></div></div></td></tr><tr class="content_container"><td class="left_side pod_sides"></td><td class="content">{{content}}</td><td class="right_side pod_sides"></td></tr><tr class="footer_row"><td class="left_corner pod_sprite"></td><td class="mid_section"></td><td class="right_corner pod_sprite"></td></tr></tbody></table></div>',{width:s,headers:n,content:i}));var o=t.children().tabs(d),l=["first","second","third","fourth"];return t.find("ul.tab li").each(function(e,t){$(t).addClass(l[e])}),o})},pe.new_convert_to_tabbed_pod=function(e,d){return $.map(e,function(e){var t=$(e);if(!t.hasClass("ConvertToTabbedPod"))return alert("format_tabbed_pod: element to convert must have class ConvertToTabbedPod. It only has "+t[0].className);var a=t.children("ul"),n=a.html();a.remove();var i=t.html(),r=pe.classes_starting_with(t,"width");if(0===r.length)return alert("no width class found");if(1<r.length)return alert("more than 1 width class found");var s=r[0].substr(5);t.addClass("tabs"),t.removeClass("ConvertToTabs"),t.removeClass(r[0]),t.html(pe.templatize('<div class="width{{width}}"><ul class="tab">{{headers}}</ul>{{content}}</div>',{width:s,headers:n,content:i}));var o=t.children().tabs(d),l=["first","second","third","fourth"];return t.find("ul.tab li").each(function(e,t){$(t).addClass(l[e])}),o})},pe.date_string=function(e){return"string"==typeof e?e:e.getMonth()+1+"/"+e.getDate()+"/"+e.getFullYear()},pe.days_between_dates=function(e,t){var a="string"==typeof e?Date.parse(e):e,n="string"==typeof t?Date.parse(t):t;return Math.abs(Math.floor((a-n)/864e5))},pe.empty=function(){},pe.event_search_text=function(e){var a=[e.name,e.description,e.location_name,e.category,e.neighborhood_name,e.neighborhood_id];return e.tags&&$.each(e.tags,function(e,t){a.push(t)}),e.performer_names&&$.each(e.performer_names,function(e,t){a.push(t)}),a.join(" ")},pe.fetch_photo_id_from_url=function(e){return e.split("/photos/")[1]},pe.fix_ie7_rendering_bug=function(){$(".ConvertToTabbedPod").addClass("IeSucks")},pe.format_date=function(e){return e.getMonth()+1+"/"+e.getDate()+"/"+e.getFullYear()},pe.format_price=function(e){var t=Math.floor(e/100).toString(),a=(e%100).toString();return a.length<2&&(a="0"+a),"$"+t+"."+a},pe.format_duration=function(e,t){if(!e)return"0:00";var a=Math.floor(e/60),n=Math.floor(e%60);return pe.string_padding_left(a.toString(),t||1,"0")+":"+pe.string_padding_left(n.toString(),2,"0")},pe.get_city_id=function(){return window.city_id},pe.get_url_parameter=function(e,t){var a=new RegExp("[\\?&]"+t+"=([^&]+)","i").exec(e);return a?a[1]:null},pe.hash_length=function(e){var t=0;for(var a in e)e.hasOwnProperty(a)&&t++;return t},pe.hashes_equal=function(e,t){if(e===t)return!0;if(pe.hash_length(e)!=pe.hash_length(t))return!1;for(var a in e){var n=e[a],i=t[a];if(pe.is_array(n)){if(!pe.arrays_equal(n,i))return!1}else if(n!==i)return!1}return!0},pe.hashes_match=function(e,t){for(var a in e){var n=e[a],i=t[a];if(pe.is_array(n)){if(!pe.array_contains(i,n))return!1}else if(n!==i)return!1}return!0},pe.https=function(e){return-1===window.location.href.indexOf("https://")?e:e.replace("http://","https://")},pe.inject=function(e,t,a){var n=t;return $.each(e,function(e,t){n=a(n,t)}),n},pe.init_widget=function(e,t){"string"!=typeof t&&(null===t||t.length?(e.container=t,e.callback=function(e){for(var t=[e,this],a=1;a<arguments.length;a++)t.push(arguments[a]);return pe.bind_this.apply(this,t)},e.check_bind=function(e){if("undefined"==typeof this.container)throw" in: "+e},e.bind_event=function(e,t){pe.assert(e,"bind_event: parameter 'event_type' is empty"),this.container.bind(e,t)},e.fire_event=function(e,t){void 0===e&&alert("Must provide the event type to fire."),void 0===t&&(t={}),this.container.trigger(e,t)},e.show=function(){this.container.show()},e.hide=function(){this.container.hide()},e.toggle=function(e){this.container.toggle(e)},e.is_visible=function(){return this.container.is(":visible")}):alert("No container given."))},pe.install_easing=function(){jQuery.easing.cubicEaseInOut||(jQuery.easing.cubicEaseInOut=function(e,t,a,n){var i=a+n;return(e/=.5)<1?i/2*e*e*e+a:i/2*((e-=2)*e*e+2)+a})},pe.is_array=function(e){return!(!e||"object"!=typeof e||"number"!=typeof e.length||"function"!=typeof e.splice||e.propertyIsEnumerable("length"))},pe.is_valid_credit_card_number=function(e){return!!e.match(/^\d{4}(\s*|\s*\-\s*)?\d{4}(\s*|\s*\-\s*)?\d{4}(\s*|\s*\-\s*)?\d{4}$/)},pe.is_valid_date=function(e){var t=/^(\d{1,2})(\/|-)(\d{1,2})(\/|-)(\d{4})$/;return!!e.match(t)&&(e===$.datepicker.formatDate("m/d/yy",new Date(e))||e===$.datepicker.formatDate("mm/dd/yy",new Date(e)))},pe.is_valid_zip_code=function(e){return!!e.match(/^\d{5}(\s*\-\s*\d{4})?$/)},pe.load=function(e){return pe.assert(e,"error loading data"),e},pe.link_title_for_city=function(e){return"See the latest hotspots and events happening in "+e+"."},pe.link_title_for_city_party_climate=function(e){return"Check out the overview and photos of "+e+"."},pe.link_title_for_event=function(e,t){return t?"Check out event details, photos and videos of "+e+" at "+t+".":"Check out event details, photos and videos of "+e+"."},pe.link_title_for_neighborhood=function(e,t){return"Check out "+e+" description, photos, and venues in "+t+"."},pe.link_title_for_performer=function(e){return"See the latest "+e+" schedule, photos, videos and news."},pe.link_title_for_reviewer=function(e){switch(e){case"Lucas":return"Meet Lucas, the quintessential fun- loving, pub-crawling \u201cguy\u2019s guy\u201d. Learn about his personality and ratings.";case"Adriana":return"Meet Adriana, the epitome of a cosmopolitan girl. Learn about her personality and ratings.";case"Jonah":return"Meet Jonah, an affable, non-mainstream guy with natural curiosity about people and cultures. Learn about his personality and ratings.";case"Emma":return"Meet Emma, a lively, witty, and sociable \u201cgirl next door\u201d. Learn about her personality and ratings.";case"All":return"Meet Lucas, Adriana, Jonah and Emma. Learn how their personalities can help you maximize your social experiences in your city and your travels."}},pe.link_title_for_venue=function(e,t,a){return a?"Check out the review, photos, videos, map and events schedule of "+e+" - "+a+" in "+t+".":"Check out the review, photos, videos, map and events schedule of "+e+" in "+t+"."},pe.normalize=function(e){for(var t="",a=0,n=e.length;a<n;a++){var i=e.charAt(a),r=pe.accentMap[i];t+=void 0===r?i:r}return t},pe.object_hash_from_array=function(e){var a={};return $.each(e,function(e,t){a[t.id]=t}),a},pe.object_length=function(e){var t,a=0;for(t in e)e.hasOwnProperty(t)&&a++;return a},pe.parse_price=function(e){return Math.ceil(100*parseFloat(e.substring(1)))},pe.prepare_autocomplete_data=function(e){var n=[];return $.each(e,function(a,e){$.each(e,function(e,t){t.category=a,n.push(t)})}),n},pe.remove_anchor_from_url=function(e){return e?e.split("#")[0]:""},pe.remove_query_string_from_url=function(e){return e?e.split("?")[0]:""},pe.set_autocomplete_source=function(e,t,a){var n=pe.normalize(t.term).toLowerCase(),i=new RegExp($.ui.autocomplete.escapeRegex(n),"i"),r=$.grep(pe.prepare_autocomplete_data(e),function(e){return e=e.label||e.value||e,i.test(e)||i.test(pe.normalize(e))});a(r=_.sortBy(r,function(e){var t=e.label||e.value||e;return t=pe.normalize(t).toLowerCase(),[e.category,t!=n,e.label]}))},pe.shuffle_array=function(e){if(!e)return[];for(var t,a,n=e.length;n;)t=parseInt(Math.random()*n,10),a=e[--n],e[n]=e[t],e[t]=a;return e},pe.string_padding_left=function(e,t,a){for(var n=e;n.length<t;)n=a+n;return n},pe.string_starts_with=function(e,t){return e.substr(0,t.length)===t},pe.string_ends_with=function(e,t){return e.substr(e.length-t.length)===t},pe.structured_tags_as_flat_array=function(e){var a=[];return $.each(e,function(e,t){$.merge(a,t)}),a},pe.text_contains_query=function(a,e){var t=e.split(" "),n=!0;return $.each(t,function(e,t){if(-1===a.indexOf(t))return!(n=!1)}),n},pe.today_date_string=function(){var e=new Date;return pe.date_string(e)},pe.truncate_by_words=function(e,t,a){if(!e||!t)return alert("Sorry, but an error happened. We are already warned about that.");if(a=a||"...",e.length<t)return e;var n=e.slice(0,t-1);if(" "!==_.last(n)){var i=n.lastIndexOf(" ");n=n.slice(0,i)}return $.trim(n)+a},pe.value_from_cookie=function(e){var t=document.cookie.match(new RegExp("(^| )"+e+"=([^ ;]+)"));return t?t[2]:null},pe.venue_search_text=function(e){var a=[e.name,e.description,e.address,e.hotspot_text,e.neighborhood_name];return e.types&&$.each(e.types,function(e,t){a.push(t)}),e.tags&&$.each(e.tags,function(e,t){a.push(t)}),a.join(" ")},pe.xor=function(e,t){return!!(e?!t:t)},$(document).ready(function(){$(document).ajaxSend(pe.ajax_send)}),pe.Validator=function(t){this.message=t.message||"Invalid value.",this.callback=t.callback,this.unless_callback=t.unless||function(){return!1},(this.options=t).value?this.value=t.value:this.value=function(e){return t.callback(e)}},pe.Validator.prototype.passed=function(e){return!!this.callback($(e))},pe.Validator.prototype.failed=function(e){return!this.passed(e)},pe.Validator.prototype.unless=function(){return this.unless_callback()},pe.DateOfBirthWidget=function(e,t,a,n,i){pe.init_widget(this,e),this.validation_enabled=!1,this.month_dropdown=this.container.find("#"+t+"_dob_2i"),a&&this.month_dropdown.val(a),this.month_dropdown.change(this.callback(this.validate)),this.day_dropdown=this.container.find("#"+t+"_dob_3i"),n&&this.day_dropdown.val(n),this.day_dropdown.change(this.callback(this.validate)),this.on_validate=null,this.validator=new pe.Validator({callback:this.callback(function(){return this.is_valid()}),message:"Please enter a correct date."}),this.year_dropdown=this.container.find("#"+t+"_dob_1i"),i&&this.year_dropdown.val(i),this.year_dropdown.change(this.callback(this.validate))},pe.DateOfBirthWidget.prototype.is_valid=function(){return pe.is_valid_date(this.val())},pe.DateOfBirthWidget.prototype.val=function(){return[this.month_dropdown.val(),this.day_dropdown.val(),this.year_dropdown.val()].join("/")},pe.DateOfBirthWidget.prototype.validate=function(){var e=[this.month_dropdown.val(),this.day_dropdown.val(),this.year_dropdown.val()];return 3===_.compact(e).length&&(this.validation_enabled=!0),!this.validation_enabled||(this.on_validate&&this.on_validate(),0===_.compact(e).length?(pe.validation.show_message(this.container,"Date of Birth is required."),!1):this.is_valid()?(pe.validation.show_message(this.container,""),!0):(pe.validation.show_message(this.container,"Please enter a valid date of birth"),!1))},pe.DateOfBirthWidget.prototype.validate_on_submit=function(){return this.validation_enabled=!0,this.validate()},pe.PasswordBox=function(e){pe.init_widget(this,e),this.obfuscate_password=!0,this.password_obfuscated_field=pe.load(this.container.find("input.password")),this.password_clear_field=$("<input type='text' class='text_field' />"),this.password_clear_field.insertBefore(this.password_obfuscated_field),this.password_clear_field.hide(),this.password_clear_field.keyup(this.callback(this.on_clear_field_key_up)),$('<br><span class="ToggleLink toggle fake_link blue_link">Show Password</span>').insertAfter(this.password_obfuscated_field),this.toggle_link=pe.load(this.container.find(".ToggleLink")),this.toggle_link.click(this.callback(this.on_toggle_link_clicked))},pe.PasswordBox.prototype.on_clear_field_key_up=function(){if(!this.obfuscate_password){var e=this.password_clear_field.val();"string"==typeof e&&this.password_obfuscated_field.val(e).keyup()}},pe.PasswordBox.prototype.on_toggle_link_clicked=function(){if(this.obfuscate_password=!this.obfuscate_password,this.obfuscate_password){var e=this.password_clear_field.val();"string"==typeof e&&(this.password_obfuscated_field.val(e),this.toggle_link.html("Show Password"))}else{var t=this.password_obfuscated_field.val();"string"==typeof t&&this.password_clear_field.val(t),this.toggle_link.html("Hide Password")}this.password_obfuscated_field.toggle(),this.password_clear_field.toggle()},pe.validation.checked_validator=new pe.Validator({callback:function(e){return e.is(":checked")},message:"Please select one."}),pe.validation.email_validator=new pe.Validator({callback:function(e){var t=e.val();if(!t&&!e.data("text_entered"))return!1;e.data("text_entered",!0);var a=$.ajax({type:"GET",dataType:"JSON",url:"/api/users/check_email",data:{email:t},async:!1}),n=jQuery.parseJSON(a.responseText);return!(n&&!_.isEmpty(n.message))||(this.message=n.message,!1)},message:"Invalid email."}),pe.validation.name_validator=new pe.Validator({callback:function(e){return _.isEmpty($.trim(e.val()))?!(this.message="Required."):!(50<e.val().length)||!(this.message="Please shorten your name.")},message:"Invalid name."}),pe.validation.not_blank_validator=new pe.Validator({callback:function(e){return"checkbox"==e.attr("type")?$(e).is(":checked"):!_.isEmpty($.trim(e.val()))},message:"Required."}),pe.validation.password_validator=new pe.Validator({callback:function(e){var t=e.val();return _.isEmpty(t)?e.data("text_entered")?!(this.message="Please enter a password."):void 0:_.isEmpty(t)?!(this.message="Please enter a password."):0<t.length&&-1<t.indexOf(" ")?!(this.message="No spaces allowed for password."):t.length<6?!(this.message="Please enter a longer password."):50<t.length?!(this.message="Please shorten your password."):(e.data("text_entered",!0),!0)},message:"Invalid password."}),function(){pe.validation.dob_validator=new pe.Validator({message:"Please enter valid date.",callback:function(e){var t,a,n,i,r,s,o,l;return l=(s=_.map($(e).find("select"),function(e){return $(e).val()}))[2],r=s[0],n=s[1],!!(l&&r&&n)&&(i=(a=new Date(r+"/"+n+"/"+l)).getMonth()+1+"",t=a.getDate()+"",o=a.getFullYear()+"",i===r&&t===n&&o===l)}})}.call(this),function(){pe.validation.check_group_validator=new pe.Validator({message:"Please select something.",callback:function(e){return 0<e.find("input:checked").length}})}.call(this),pe.ValidatableForm=function(container,rules,bindings,after_submit){pe.init_widget(this,container),this.bindings=bindings||{},this.chained_fields=[],this.errors={},this.rules=rules||{},_.each(container.find(".input[data-required=true], select[data-required=true], input[data-required=true], textarea[data-required=true]"),this.callback(function(element){element=$(element);var selector="#"+element.attr("id"),validator=element.data("validator");this.rules[selector]=validator?eval(validator):pe.validation.not_blank_validator;var binding=element.data("binding");binding?this.bindings[selector]=binding:"text"==element.attr("type")||"textarea"==element.attr("tagName")?this.bindings[selector]="blur":this.rules[selector]==pe.validation.dob_validator?element.find("select").each(this.callback(function(e,t){$(t).change(this.callback(function(){this.validate_field(selector)}))})):this.bindings[selector]="change"})),this.save_button=this.container.find(".SaveButton"),this.submit_button=this.container.find(".SubmitButton"),this.after_submit=after_submit,this.init_bindings(),this.validate(),this.toggle_submit(),this.submit_button.click(this.callback(this.on_submit))},pe.ValidatableForm.prototype.init_bindings=function(){this.container.find("input, textarea, select").change(this.callback(function(){this.save_button.removeClass("disabled").removeAttr("disabled")})),_.each(this.bindings,function(e,t){"string"==typeof e?$(t).bind(e,this.callback(function(){this.validate_field(t)})):"function"==typeof e&&this.callback(e)(),this.rules[t].value($(t))&&this.validate_field(t)},this)},pe.ValidatableForm.prototype.on_submit=function(){var e=this.validate();return this.highlight_first_failed(),e&&this.after_submit&&this.after_submit(),e},pe.ValidatableForm.prototype.delete_error=function(t){delete this.errors[t],_.each(this.chained_fields,function(e){_.include(e,t)&&_.each(e,function(e){this.errors[e]&&this.delete_error(e)},this)},this)},pe.ValidatableForm.prototype.focus_on_failed=function(){if(!this.valid())return pe.install_easing(),pe.animated_scrolling($(".inline-errors:first").parents("li"),2),!1},pe.ValidatableForm.prototype.highlight_first_failed=function(){if(!this.validate()){if(!this.validation_shown()){var e=_.keys(this.errors)[0];this.render_field_error(e)}this.focus_on_failed()}},pe.ValidatableForm.prototype.render_errors=function(){_.each(this.errors,function(e,t){this.render_field_error(t)},this)},pe.ValidatableForm.prototype.render_field_error=function(e){var t=$(e).parents("li.input:first");0===t.length&&(t=$(e)),t.find(".inline-errors").remove(),t.append('<span class="inline-errors">'+this.errors[e]+"</span>"),t.find(".inline-success").remove()},pe.ValidatableForm.prototype.render_field_success=function(e){var t=$(e).parents("li.input:first");0===t.length&&(t=$(e)),t.find(".inline-success").remove(),t.append('<img class="inline-success" src="/assets/users/check.png" />'),t.find(".inline-errors").remove()},pe.ValidatableForm.prototype.render_success=function(){_.each(this.valid_fields(),function(e){this.render_field_success(e)},this)},pe.ValidatableForm.prototype.toggle_submit=function(){this.valid()?this.submit_button.removeClass("disabled").removeAttr("disabled"):this.submit_button.addClass("disabled")},pe.ValidatableForm.prototype.valid_fields=function(){return _.difference(_.keys(this.rules),_.keys(this.errors))},pe.ValidatableForm.prototype.validate_field=function(e){var t=this.rules[e],a=t.passed(e);return t.unless()?this.delete_error(e):a?(this.delete_error(e),this.render_field_success(e)):(this.errors[e]=$(e).data("message")||t.message,this.render_field_error(e)),this.toggle_submit(),a},pe.ValidatableForm.prototype.valid=function(){return _.isEmpty(this.errors)},pe.ValidatableForm.prototype.validate=function(){return _.each(this.rules,function(e,t){e.failed(t)?this.errors[t]=$(t).data("message")||e.message:delete this.errors[t]},this),this.valid()},pe.ValidatableForm.prototype.validate_together=function(){this.chained_fields.push(arguments)},pe.ValidatableForm.prototype.validation_shown=function(){return 0<this.container.find(".inline-errors").length},$(document).ready(function(){0<$("#user_password_input").length&&new pe.PasswordBox($("#user_password_input"));var e=window.date_of_birth||{},t=new pe.DateOfBirthWidget($(".DateOfBirth"),"user",e.month,e.day,e.year),a={".DateOfBirth":t.validator,"input:radio[name='user[is_male]']":pe.validation.checked_validator,"#user_first_name":pe.validation.name_validator,"#user_last_name":pe.validation.name_validator,"#user_password":pe.validation.password_validator,"#user_email":pe.validation.email_validator,"#user_city":pe.validation.not_blank_validator,"#user_default_city_id":pe.validation.not_blank_validator},n={".DateOfBirth":function(){t.on_validate=function(){r.validate_field(".DateOfBirth")}},"input:radio[name='user[is_male]']":"change","#user_first_name":"change","#user_last_name":"change","#user_email":"change","#user_password":"keyup","#user_city":"keyup","#user_default_city_id":"change"},i=$("form.user"),r=new pe.ValidatableForm(i,a,n);window.x=r,0<i.length&&$("form input[type=text]:first").focus(),pe.init_page_framework()}),function(){$(document).ready(function(){return $(".CloseButton").click(function(){return pe.fire_global_event(pe.events.IFRAME_CLOSE_BUTTON_CLICKED)}),pe.fire_global_event(pe.events.IFRAME_REGISTRATION_PAGE_READY,null),window.onunload=function(){return pe.fire_global_event(pe.events.IFRAME_REGISTRATION_PAGE_UNLOAD,null)}})}.call(this);