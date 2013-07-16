pe.CloseButton=function(a,b){pe.init_widget(this,a);this.close_button=a.find(".CloseButton");if("function"===typeof b)this.close_button.click(b);else switch(b){case pe.CloseButton.close_methods.REMOVE:this.close_button.click(this.callback(this.remove_container));break;case pe.CloseButton.close_methods.HIDE:this.close_button.click(this.callback(this.hide_container));break;default:alert("unknown value for 'close_method' parameter.")}};pe.CloseButton.close_methods={REMOVE:"REMOVE",HIDE:"HIDE"};
pe.CloseButton.events={CLOSED:"CloseButton_CLOSED"};pe.CloseButton.prototype.remove_container=function(){this.container.detach();this.fire_event(pe.CloseButton.events.CLOSED);this.container.remove();return!1};pe.CloseButton.prototype.hide_container=function(){this.fire_event(pe.CloseButton.events.CLOSED);this.container.hide();return!1};
pe.GeneralAutocompleteInputModule=function(a,b,d,c){pe.init_widget(this,a);this.autocomplete_data_or_url=b;this.input_field_name=d;this.container.html(this.html());this.dummy_input_field=this.container.find(".DummyInputField");this.autocomplete_input_field=this.container.find(".AutocompleteField");this.autocomplete_handler();this.selected_data_list_div=this.container.find(".SelectedDataList");this.selected_data_list_div.sortable();c&&this.add_data_to_list(c)};
pe.GeneralAutocompleteInputModule.events={SELECTED:"GeneralAutocompleteInputModule_SELECTED",REMOVED:"GeneralAutocompleteInputModule_REMOVED",EMPTIED:"GeneralAutocompleteInputMOdule_EMPTIED"};pe.GeneralAutocompleteInputModule.prototype.add_data_to_list=function(a){this.remove_dummy_row();$.each(a,this.callback(function(a,d){-1===$.inArray(d.id.toString(),this.all_values())&&this.autocomplete_data_selected(d.label,d.id,d.category)}))};
pe.GeneralAutocompleteInputModule.prototype.add_dummy_row=function(){this.dummy_input_field||(this.dummy_input_field=$('<input class="DummyInputField"        type="hidden" name="'+this.input_field_name+'"       value="x_mock_single_value_x">'),this.autocomplete_input_field.after(this.dummy_input_field))};pe.GeneralAutocompleteInputModule.prototype.all_values=function(){return this.selected_data_list_div.find('[name="'+this.input_field_name+'"]').map(function(){return this.value}).toArray()};
pe.GeneralAutocompleteInputModule.prototype.autocomplete_data_selected=function(a,b,d){this.remove_dummy_row();this.selected_data_list_div.append(this.selected_data_html(a,b,d));(new pe.CloseButton(this.selected_data_list_div.find(".SelectedInputData").last(),pe.CloseButton.close_methods.REMOVE)).bind_event(pe.CloseButton.events.CLOSED,this.callback(this.close_button_clicked))};
pe.GeneralAutocompleteInputModule.prototype.autocomplete_handler=function(){this.autocomplete_input_field.autocomplete({source:this.set_autocomplete_data(),minLength:1,close:this.callback(function(){this.autocomplete_input_field.val("")}),select:this.callback(function(a,b){var d=b.item;this.autocomplete_data_selected(d.label,d.id,d.category);this.fire_event(pe.GeneralAutocompleteInputModule.events.SELECTED,d.id)})}).data("autocomplete")._renderItem=function(a,b){b.display_label=b.category?pe.templatize("{{label}} ({{category}})",
b):b.label;return $("<li></li>").data("item.autocomplete",b).append(pe.templatize("<a>{{display_label}}</a>",b)).appendTo(a)}};
pe.GeneralAutocompleteInputModule.prototype.set_autocomplete_data=function(){return"string"==typeof this.autocomplete_data_or_url?this.callback(function(a,b){$.getJSON(this.autocomplete_data_or_url,{term:this.autocomplete_input_field.val(),val:this.all_values().join(",")},function(d){pe.GeneralAutocompleteInputModule.sort_autocomplete_results(d,a,b)})}):this.callback(pe.GeneralAutocompleteInputModule.sort_autocomplete_results,this.autocomplete_data_or_url)};
pe.GeneralAutocompleteInputModule.sort_autocomplete_results=function(a,b,d){var c=pe.normalize(b.term).toLowerCase(),e=RegExp($.ui.autocomplete.escapeRegex(c),"i");a=$.grep(a,function(a){a=a.label||a.value||a;return e.test(a)||e.test(pe.normalize(a))});var f=RegExp("^"+$.ui.autocomplete.escapeRegex(c),"i");a=_.sortBy(a,function(a){a=pe.normalize(a.label).toLowerCase();return[a!=c,!f.test(a)]});d(a)};
pe.GeneralAutocompleteInputModule.prototype.clear_selected_data=function(){this.selected_data_list_div.html("");this.add_dummy_row()};pe.GeneralAutocompleteInputModule.prototype.close_button_clicked=function(){this.is_empty()&&this.add_dummy_row();this.fire_event(pe.GeneralAutocompleteInputModule.events.REMOVED);this.is_empty()&&this.fire_event(pe.GeneralAutocompleteInputModule.events.EMPTIED)};pe.GeneralAutocompleteInputModule.prototype.display_close_button=function(){this.selected_data_list_div.find(".CloseButton").show()};
pe.GeneralAutocompleteInputModule.prototype.hide_close_button=function(){this.selected_data_list_div.find(".CloseButton").hide()};pe.GeneralAutocompleteInputModule.prototype.html=function(){return'<input class="AutocompleteField" type="text"><input class="DummyInputField" type="hidden" name="'+this.input_field_name+'" value="x_mock_single_value_x"><ul class="SelectedDataList" id="sortable"></ul>'};pe.GeneralAutocompleteInputModule.prototype.is_empty=function(){return 0===this.selected_data_list_div.find(".SelectedInputData").length};
pe.GeneralAutocompleteInputModule.prototype.remove_dummy_row=function(){this.dummy_input_field&&(this.dummy_input_field.remove(),this.dummy_input_field=null)};pe.GeneralAutocompleteInputModule.prototype.replace_data_in_list=function(a){a&&(this.clear_selected_data(),this.add_data_to_list(a))};
pe.GeneralAutocompleteInputModule.prototype.selected_data_html=function(a,b,d){return'<li class="SelectedInputData">  <img style="padding-right:20px; width: 15px; height: 15px;" src="/assets/events/close.png"\t\tclass="CloseButton float_left">  <p class="float_left">'+(d?a+"("+d+")":a)+'</p>  <input type="hidden" value="'+b+'" name="'+this.input_field_name+'">  <div class="clear"></div></li>'};
pe.AjaxForm=function(a){pe.init_widget(this,a);this.update_url=this.container.attr("data_update_url");this.update_key=this.container.attr("data_update_key");this.input=pe.load(this.container.find(".Input"));this.update_button=this.container.find(".Update");this.update_button.click(this.callback(this.update_clicked))};
pe.AjaxForm.prototype.update_clicked=function(){var a=null;if("textarea"===this.input[0].type)a=this.input.val();else if(this.input.is(":checkbox"))a=this.input.is(":checked");else if(this.input.is(":text"))a=this.input.val();else{alert("unknown input field");return}var b={};b[this.update_key]=a;$.ajax({url:this.update_url,data:b,type:"PUT"})};pe.AjaxForm.instantiate=function(){$(".AjaxForm").each(function(a,b){new pe.AjaxForm($(b))})};
pe.AjaxInput=function(a){pe.init_widget(this,a);this.update_url=this.container.attr("data_update_url");this.update_key=this.container.attr("data_update_key");this.input=pe.load(this.container.find(".Input"));this.input.change(this.callback(this.input_changed))};
pe.AjaxInput.prototype.input_changed=function(){var a=null;if("textarea"===this.input[0].type)a=this.input.val();else if(this.input.is(":checkbox"))a=this.input.is(":checked");else if(this.input.is(":text"))a=this.input.val();else{alert("unknown input field");return}var b={};b[this.update_key]=a;$.ajax({url:this.update_url,data:b,type:"PUT"})};pe.AjaxInput.instantiate=function(){$(".AjaxFlag").each(function(a,b){new pe.AjaxInput($(b))})};
pe.accentMap={"&":"and","\u00e0":"a","\u00e1":"a","\u00e2":"a","\u00e3":"a","\u00e4":"a","\u00e5":"a","\u00e7":"c","\u00c0":"a","\u00c1":"a","\u00e8":"e","\u00e9":"e","\u00ea":"e","\u00eb":"e","\u00c8":"e","\u00c9":"e","\u00ec":"i","\u00f1":"n","\u00ed":"i","\u00ee":"i","\u00ef":"i","\u00f2":"o","\u00f3":"o","\u00f4":"o","\u00f5":"o","\u00f6":"o","\u00f9":"u","\u00fa":"u","\u00fb":"u","\u00fc":"u","!":"i",$:"s","-":""," ":"","'":"","\u2019":"",".":""};
pe.animated_scrolling=function(a,b){if(0!==a.length){var d=a.offset().top-(b||25);$("html,body").stop().animate({scrollTop:d+"px"},800,"cubicEaseInOut",function(){return!1})}};pe.scrolling=function(a,b){if(0!==a.length){var d=a.offset().top-(b||25);$("html,body").scrollTop(d)}};pe.days_of_week="Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" ");pe.array_contains=function(a,b){return _.isArray(b)?0===_.difference(b,a).length:-1<_.indexOf(a,b)};
pe.arrays_equal=function(a,b){if(!a&&!b||!a&&0===b.length||0===a.length&&!b)return!0;if(a.length!=b.length)return!1;for(var d=a.sort(),c=b.sort(),e=0,f=a.length;e<f;e++)if(d[e]!==c[e])return!1;return!0};pe.array_match=function(a,b){var d=!1;$.each(a,function(a,e){if(-1<b.indexOf(e))return d=!0,!1});return d};pe.array_merge=function(a,b){var d=a.concat(b);d.sort();return d};
pe.array_remove=function(a,b){return!a?a:pe.is_array(b)?$.grep(a,function(a){return-1===b.indexOf(a)}):$.grep(a,function(a){return a!==b})};pe.assign_photo_size=function(a,b,d){return!a?"/assets/no_image_"+d+".png":"original"===b?a.replace("xxx.jpg",b+".jpg"):a.replace("xxx.jpg","s"+b+".jpg")};pe.remove_timestamp_from_asset_url=function(a){return a.split("?")[0]};pe.browser_is_ie8=function(){return $.browser.msie&&"8.0"===$.browser.version};
pe.build_dob_field_name=function(a,b,d){return[a||"user","[",b?b+"_":"","dob(",d,"i)]"].join("")};pe.capitalise_first_letter=function(a){return null===a?"":a.charAt(0).toUpperCase()+a.slice(1)};pe.classes_starting_with=function(a,b){return $.map(a.attr("class").split(/\s+/),function(a){if(pe.string_starts_with(a,b))return a})};pe.compare=function(a,b){return pe.is_array(a)&&pe.is_array(b)?pe.arrays_equal(a,b):a===b};
pe.convert_to_rounded_corners=function(a){a=a||$(".ConvertToRoundedCorners");a.each(function(a,d){var c=$(d);c.removeClass("ConvertToRoundedCorners");c.addClass("rounded_corner_wrapper");$('<div class="rounded_corner top_left"></div>').appendTo(c);$('<div class="rounded_corner top_right"></div>').appendTo(c);$('<div class="rounded_corner bottom_left"></div>').appendTo(c);$('<div class="rounded_corner bottom_right"></div>').appendTo(c)});return a};
pe.convert_to_tabbed_pod=function(a,b){return $.map(a,function(a){a=$(a);if(!a.hasClass("ConvertToTabbedPod"))return alert("format_tabbed_pod: element to convert must have class ConvertToTabbedPod. It only has "+a[0].className);var c=a.children("ul");c.addClass("tab");c.children("li").each(function(a,b){b=$(b);var d=b.html();b.html(pe.templatize('<div class="left_end pod_sprite float_left"></div>{{content}}<div class="right_end pod_sprite float_left"></div>',{content:d}))});var e=c.html();c.remove();
var c=a.html(),f=pe.classes_starting_with(a,"width");if(0===f.length)return alert("no width class found");if(1<f.length)return alert("more than 1 width class found");var g=f[0].substr(5);a.addClass("tabs");a.removeClass("ConvertToTabs");a.removeClass(f[0]);a.html(pe.templatize('<div><table class="width{{width}}" cellpadding="0" cellspacing="0"><tbody><tr><td class="header" colspan="4"><div class="header_row"><ul class="tab">{{headers}}</ul><div class="mid_section"></div><div class="right_corner pod_sprite"></div></div></td></tr><tr class="content_container"><td class="left_side pod_sides"></td><td class="content">{{content}}</td><td class="right_side pod_sides"></td></tr><tr class="footer_row"><td class="left_corner pod_sprite"></td><td class="mid_section"></td><td class="right_corner pod_sprite"></td></tr></tbody></table></div>',
{width:g,headers:e,content:c}));var e=a.children().tabs(b),h=["first","second","third","fourth"];a.find("ul.tab li").each(function(a,b){$(b).addClass(h[a])});return e})};
pe.new_convert_to_tabbed_pod=function(a,b){return $.map(a,function(a){a=$(a);if(!a.hasClass("ConvertToTabbedPod"))return alert("format_tabbed_pod: element to convert must have class ConvertToTabbedPod. It only has "+a[0].className);var c=a.children("ul"),e=c.html();c.remove();var c=a.html(),f=pe.classes_starting_with(a,"width");if(0===f.length)return alert("no width class found");if(1<f.length)return alert("more than 1 width class found");var g=f[0].substr(5);a.addClass("tabs");a.removeClass("ConvertToTabs");
a.removeClass(f[0]);a.html(pe.templatize('<div class="width{{width}}"><ul class="tab">{{headers}}</ul>{{content}}</div>',{width:g,headers:e,content:c}));var e=a.children().tabs(b),h=["first","second","third","fourth"];a.find("ul.tab li").each(function(a,b){$(b).addClass(h[a])});return e})};pe.date_string=function(a){return"string"===typeof a?a:a.getMonth()+1+"/"+a.getDate()+"/"+a.getFullYear()};
pe.days_between_dates=function(a,b){var d="string"===typeof a?Date.parse(a):a,c="string"===typeof b?Date.parse(b):b;return Math.abs(Math.floor((d-c)/864E5))};pe.event_search_text=function(a){var b=[a.name,a.description,a.location_name,a.category,a.neighborhood_name,a.neighborhood_id];a.tags&&$.each(a.tags,function(a,c){b.push(c)});a.performer_names&&$.each(a.performer_names,function(a,c){b.push(c)});return b.join(" ")};pe.fetch_photo_id_from_url=function(a){return a.split("/photos/")[1]};
pe.fix_ie7_rendering_bug=function(){$(".ConvertToTabbedPod").addClass("IeSucks")};pe.format_date=function(a){return a.getMonth()+1+"/"+a.getDate()+"/"+a.getFullYear()};pe.format_price=function(a){var b=Math.floor(a/100).toString();a=(a%100).toString();2>a.length&&(a="0"+a);return"$"+b+"."+a};pe.format_duration=function(a,b){if(!a)return"0:00";var d=Math.floor(a%60);return pe.string_padding_left(Math.floor(a/60).toString(),b||1,"0")+":"+pe.string_padding_left(d.toString(),2,"0")};
pe.get_url_parameter=function(a,b){var d=RegExp("[\\?&]"+b+"=([^&]+)","i").exec(a);return d?d[1]:null};pe.hash_length=function(a){var b=0,d;for(d in a)a.hasOwnProperty(d)&&b++;return b};pe.hashes_equal=function(a,b){if(a===b)return!0;if(pe.hash_length(a)!=pe.hash_length(b))return!1;for(var d in a){var c=a[d],e=b[d];if(pe.is_array(c)){if(!pe.arrays_equal(c,e))return!1}else if(c!==e)return!1}return!0};
pe.hashes_match=function(a,b){for(var d in a){var c=a[d],e=b[d];if(pe.is_array(c)){if(!pe.array_contains(e,c))return!1}else if(c!==e)return!1}return!0};pe.https=function(a){return-1===window.location.href.indexOf("https://")?a:a.replace("http://","https://")};pe.inject=function(a,b,d){var c=b;$.each(a,function(a,b){c=d(c,b)});return c};pe.install_easing=function(){jQuery.easing.cubicEaseInOut||(jQuery.easing.cubicEaseInOut=function(a,b,d,c){b=d+c;return 1>(a/=0.5)?b/2*a*a*a+d:b/2*((a-=2)*a*a+2)+d})};
pe.is_array=function(a){return!(!a||!("object"===typeof a&&"number"===typeof a.length&&"function"===typeof a.splice&&!a.propertyIsEnumerable("length")))};pe.is_valid_credit_card_number=function(a){return!!a.match(/^\d{4}(\s*|\s*\-\s*)?\d{4}(\s*|\s*\-\s*)?\d{4}(\s*|\s*\-\s*)?\d{4}$/)};pe.is_valid_date=function(a){return!a.match(/^(\d{1,2})(\/|-)(\d{1,2})(\/|-)(\d{4})$/)?!1:a!==$.datepicker.formatDate("m/d/yy",new Date(a))?a===$.datepicker.formatDate("mm/dd/yy",new Date(a)):!0};
pe.is_valid_zip_code=function(a){return!!a.match(/^\d{5}(\s*\-\s*\d{4})?$/)};pe.load=function(a){pe.assert(a,"error loading data");return a};pe.link_title_for_city=function(a){return"See the latest hotspots and events happening in "+a+"."};pe.link_title_for_city_party_climate=function(a){return"Check out the overview and photos of "+a+"."};
pe.link_title_for_event=function(a,b){return b?"Check out event details, photos and videos of "+a+" at "+b+".":"Check out event details, photos and videos of "+a+"."};pe.link_title_for_neighborhood=function(a,b){return"Check out "+a+" description, photos, and venues in "+b+"."};pe.link_title_for_performer=function(a){return"See the latest "+a+" schedule, photos, videos and news."};
pe.link_title_for_reviewer=function(a){switch(a){case "Lucas":return"Meet Lucas, the quintessential fun- loving, pub-crawling \u201cguy\u2019s guy\u201d. Learn about his personality and ratings.";case "Adriana":return"Meet Adriana, the epitome of a cosmopolitan girl. Learn about her personality and ratings.";case "Jonah":return"Meet Jonah, an affable, non-mainstream guy with natural curiosity about people and cultures. Learn about his personality and ratings.";case "Emma":return"Meet Emma, a lively, witty, and sociable \u201cgirl next door\u201d. Learn about her personality and ratings.";
case "All":return"Meet Lucas, Adriana, Jonah and Emma. Learn how their personalities can help you maximize your social experiences in your city and your travels."}};pe.link_title_for_venue=function(a,b,d){return d?"Check out the review, photos, videos, map and events schedule of "+a+" - "+d+" in "+b+".":"Check out the review, photos, videos, map and events schedule of "+a+" in "+b+"."};
pe.normalize=function(a){for(var b="",d=0,c=a.length;d<c;d++)var e=a.charAt(d),f=pe.accentMap[e],b=b+("undefined"===typeof f?e:f);return b};pe.object_hash_from_array=function(a){var b={};$.each(a,function(a,c){b[c.id]=c});return b};pe.object_length=function(a){var b=0,d;for(d in a)a.hasOwnProperty(d)&&b++;return b};pe.parse_price=function(a){return Math.ceil(100*parseFloat(a.substring(1)))};
pe.prepare_autocomplete_data=function(a){var b=[];$.each(a,function(a,c){$.each(c,function(c,f){f.category=a;b.push(f)})});return b};pe.remove_anchor_from_url=function(a){return a?a.split("#")[0]:""};pe.remove_query_string_from_url=function(a){return a?a.split("?")[0]:""};
pe.set_autocomplete_source=function(a,b,d){var c=pe.normalize(b.term).toLowerCase(),e=RegExp($.ui.autocomplete.escapeRegex(c),"i");a=$.grep(pe.prepare_autocomplete_data(a),function(a){a=a.label||a.value||a;return e.test(a)||e.test(pe.normalize(a))});a=_.sortBy(a,function(a){var b=a.label||a.value||a,b=pe.normalize(b).toLowerCase();return[a.category,b!=c,a.label]});d(a)};pe.shuffle_array=function(a){if(!a)return[];for(var b,d,c=a.length;c;)b=parseInt(Math.random()*c,10),d=a[--c],a[c]=a[b],a[b]=d;return a};
pe.string_padding_left=function(a,b,d){for(;a.length<b;)a=d+a;return a};pe.structured_tags_as_flat_array=function(a){var b=[];$.each(a,function(a,c){$.merge(b,c)});return b};pe.text_contains_query=function(a,b){var d=b.split(" "),c=!0;$.each(d,function(b,d){if(-1===a.indexOf(d))return c=!1,!0});return c};pe.today_date_string=function(){return pe.date_string(new Date)};
pe.venue_search_text=function(a){var b=[a.name,a.description,a.address,a.hotspot_text,a.neighborhood_name];a.types&&$.each(a.types,function(a,c){b.push(c)});a.tags&&$.each(a.tags,function(a,c){b.push(c)});return b.join(" ")};pe.xor=function(a,b){return!!(a?!b:b)};
pe.DropdownModule=function(a,b,d,c,e,f){pe.init_widget(this,a);this.container.html(this.html(c,e));this.container.attr("tabindex",0);this.container.addClass("Dropdown");this.container.focusout(this.callback(this.container_focusout));this.container.click(this.callback(this.title_clicked));this.title_string_function=d;this.title_container_div=this.container.find(".TitleContainer");this.title_div=pe.load(this.container.find(".Title"));this.title_div.html(this.title_string_function(null));this.dropdown_input_field=
this.container.find(".DropdownInput");this.dropdown_div=pe.load(this.container.find(".Dropdown"));this.dropdown_div.hide();this.choices_div=pe.load(this.container.find(".Choices"));"function"===typeof b?this.dropdown_html_function=b:"string"===typeof b?this.set_choices_content(b):alert("Unknown dropdown_html type given.");f?(this.set_default_selection('div[data_result="'+f+'"]'),this.set_input_field_value(f)):this.current_selection=null;this.prevent_next_collapse_flag=!1;c&&(new pe.CloseButton(this.container,
pe.CloseButton.close_methods.REMOVE)).bind_event(pe.CloseButton.events.CLOSED,this.callback(this.close_button_clicked));this.auto_collapse=0;this.scroll_timeout=null};pe.DropdownModule.events={OPENED:"DropdownModule_OPENED",CHANGED:"DropdownModule_CHANGED",CLOSED:"DropdownModule_CLOSED",MINIMIZED:"DropdownModule_MINIMIZED"};
pe.DropdownModule.prototype.choice_clicked=function(a){this.current_selection=$(a.target).closest(".Choice");this.collapse_dropdown();this.dropdown_div.hide();this.fire_event(pe.DropdownModule.events.CHANGED,this.current_selection);return!1};pe.DropdownModule.prototype.close_button_clicked=function(){this.fire_event(pe.DropdownModule.events.CLOSED)};
pe.DropdownModule.prototype.collapse_dropdown=function(){this.dropdown_div.hide();this.title_div.html(this.title_string_function(this.current_selection));this.title_div.addClass(this.current_selection&&0<this.current_selection.length?"ClosedWithSelection":"Closed");this.title_container_div.addClass(this.current_selection&&0<this.current_selection.length?"ClosedWithSelection":"Closed");this.title_div.removeClass("Opened");this.title_container_div.removeClass("Opened");this.fire_event(pe.DropdownModule.events.MINIMIZED)};
pe.DropdownModule.prototype.container_focusout=function(){0>this.auto_collapse||setTimeout(this.callback(function(){0<=this.auto_collapse&&!this.prevent_next_collapse_flag&&this.collapse_dropdown();this.prevent_next_collapse_flag=!1}),200)};pe.DropdownModule.prototype.content_scrolling=function(){this.disable_auto_collapse(0);this.scroll_timeout&&clearTimeout(this.scroll_timeout);this.scroll_timeout=setTimeout(this.callback(function(){this.enable_auto_collapse();this.container.focus()}),300)};
pe.DropdownModule.prototype.disable_auto_collapse=function(a){this.auto_collapse-=1;a&&setTimeout(this.callback(function(){this.enable_auto_collapse()}),a)};pe.DropdownModule.prototype.enable_auto_collapse=function(){this.auto_collapse+=1;0<this.auto_collapse&&(this.auto_collapse=0)};
pe.DropdownModule.prototype.expand_dropdown=function(){this.dropdown_html_function&&this.set_choices_content(this.dropdown_html_function());this.dropdown_div.show();this.title_div.html(this.title_string_function("selecting"));this.title_div.removeClass("Closed ClosedWithSelection");this.title_container_div.removeClass("Closed ClosedWithSelection");this.title_div.addClass("Opened");this.title_container_div.addClass("Opened");this.fire_event(pe.DropdownModule.events.OPENED)};
pe.DropdownModule.prototype.html=function(a,b){return'<div class="TitleContainer Closed"><div class="Title select Closed"></div>'+(a?'<div class="CloseButton close_btn fake_link"></div>':"")+'<input type="hidden" class="DropdownInput" name="'+b+'" ></div><div class="Dropdown dropdown"><div class="choices_wrapper"><div class="Choices choices"></div></div><div class="footer_bottom"><div class="footer_right"></div></div></div>'};pe.DropdownModule.prototype.is_expanded=function(){return this.dropdown_div.is(":visible")};
pe.DropdownModule.prototype.prevent_next_collapse=function(){this.prevent_next_collapse_flag=!0};pe.DropdownModule.prototype.reset_dropdown=function(a){this.title_div.html(this.title_string_function(a));this.dropdown_input_field.val("")};pe.DropdownModule.prototype.set_choices_content=function(a){this.choices_div.html(a);this.choices_div.find(".Choice").click(this.callback(this.choice_clicked));this.choices_div.scroll(this.callback(this.content_scrolling))};
pe.DropdownModule.prototype.set_default_selection=function(a){this.current_selection=pe.load(this.dropdown_div.find(a));this.title_div.html(this.title_string_function(this.current_selection))};pe.DropdownModule.prototype.set_error_as_title=function(){this.title_div.html(this.title_string_function("error"))};pe.DropdownModule.prototype.set_input_field_value=function(a){this.dropdown_input_field.val(a)};
pe.DropdownModule.prototype.title_clicked=function(){this.is_expanded()?this.collapse_dropdown():(this.disable_auto_collapse(500),this.expand_dropdown())};pe.DropdownModule.prototype.val=function(a){if(a)this.current_selection="string"===typeof a?this.dropdown_div.find(a):a,this.title_div.html(this.title_string_function(this.current_selection));else return this.current_selection};
pe.PhotoQualityStatusSelect=function(a){pe.init_widget(this,a);this.photo_id=this.container.attr("data_photo_id");this.dropdown_module=new pe.DropdownModule(a,this.dropdown_html(),this.callback(this.title_html),!1);this.dropdown_module.bind_event(pe.DropdownModule.events.CHANGED,this.callback(this.value_changed));(a=this.container.attr("data_default"))&&this.dropdown_module.set_default_selection(".Choice[data='"+a+"']")};pe.PhotoQualityStatusSelect.events={CHANGED:"PhotoQualityStatusSelect_CHANGED"};
pe.PhotoQualityStatusSelect.prototype.dropdown_html=function(){return'<div class="Choice" data="good">good</div><div class="Choice" data="bad">bad</div><div class="Choice" data="on_the_fence">on fence</div>'};pe.PhotoQualityStatusSelect.prototype.value_changed=function(a,b){$.ajax({url:"/admin/photos/"+this.photo_id+".json",type:"PUT",data:{"photo[quality_status]":this.result_value(b)}});this.fire_event(pe.PhotoQualityStatusSelect.events.CHANGED,this.result_value(b))};
pe.PhotoQualityStatusSelect.prototype.title_html=function(a){return a?"selecting"===a?"click on a choice":a.html():"quality status"};pe.PhotoQualityStatusSelect.prototype.result_value=function(a){if(!a)return"";a=$(a).attr("data");return"string"===typeof a?a:""};pe.PhotoQualityStatusSelect.prototype.val=function(){return this.result_value(this.dropdown_module.val())};pe.PhotoQualityStatusSelect.create_all=function(){$(".PhotoQualityStatusSelect").each(function(a,b){new pe.PhotoQualityStatusSelect($(b))})};
pe.PhotoStatusSelect=function(a){pe.init_widget(this,a);this.container.data("widget",this);this.photo_id=pe.load(this.container.attr("data_photo_id"));this.dropdown_module=new pe.DropdownModule(a,this.dropdown_html(),this.callback(this.title_html),!1);this.dropdown_module.bind_event(pe.DropdownModule.events.CHANGED,this.callback(this.value_changed));(a=this.container.attr("data_default"))&&this.dropdown_module.set_default_selection(".Choice[data='"+a+"']")};pe.PhotoStatusSelect.events={CHANGED:"PhotoStatusSelect_CHANGED"};
pe.PhotoStatusSelect.prototype.dropdown_html=function(){return'<div class="Choice" data="not_reviewed">not reviewed</div><div class="Choice" data="disabled">disabled</div><div class="Choice" data="live">live</div>'};pe.PhotoStatusSelect.prototype.value_changed=function(a,b){$.ajax({url:"/admin/photos/"+this.photo_id+".json",type:"PUT",data:{"photo[status]":this.result_value(b)}});this.fire_event(pe.PhotoStatusSelect.events.CHANGED,this.result_value($(b)))};
pe.PhotoStatusSelect.prototype.title_html=function(a){return a?"selecting"===a?"click on a choice":a.html():"photo status"};pe.PhotoStatusSelect.prototype.result_value=function(a){if(!a)return"";a=$(a).attr("data");return"string"===typeof a?a:""};pe.PhotoStatusSelect.prototype.val=function(a){if(a)a=pe.load(this.container.find('.Choice[data="'+a+'"]')),this.dropdown_module.val(a);else return this.result_value(this.dropdown_module.val())};
pe.PhotoStatusSelect.create_all=function(){$(".PhotoStatusSelect").each(function(a,b){new pe.PhotoStatusSelect($(b))})};
(function(a){var b;a.rails=b={linkClickSelector:"a[data-confirm], a[data-method], a[data-remote]",formSubmitSelector:"form",formInputClickSelector:"form input[type=submit], form input[type=image], form button[type=submit], form button:not([type])",disableSelector:"input[data-disable-with], button[data-disable-with], textarea[data-disable-with]",enableSelector:"input[data-disable-with]:disabled, button[data-disable-with]:disabled, textarea[data-disable-with]:disabled",requiredInputSelector:"input[name][required],textarea[name][required]",
fileInputSelector:"input:file",CSRFProtection:function(b){var c=a('meta[name="csrf-token"]').attr("content");c&&b.setRequestHeader("X-CSRF-Token",c)},fire:function(b,c,e){c=a.Event(c);b.trigger(c,e);return!1!==c.result},confirm:function(a){return confirm(a)},ajax:function(b){return a.ajax(b)},handleRemote:function(d){var c,e,f,g=d.data("type")||a.ajaxSettings&&a.ajaxSettings.dataType;if(b.fire(d,"ajax:before")){if(d.is("form")){c=d.attr("method");e=d.attr("action");f=d.serializeArray();var h=d.data("ujs:submit-button");
h&&(f.push(h),d.data("ujs:submit-button",null))}else c=d.data("method"),e=d.attr("href"),f=null;b.ajax({url:e,type:c||"GET",data:f,dataType:g,beforeSend:function(a,c){void 0===c.dataType&&a.setRequestHeader("accept","*/*;q=0.5, "+c.accepts.script);return b.fire(d,"ajax:beforeSend",[a,c])},success:function(a,b,c){d.trigger("ajax:success",[a,b,c])},complete:function(a,b){d.trigger("ajax:complete",[a,b])},error:function(a,b,c){d.trigger("ajax:error",[a,b,c])}})}},handleMethod:function(b){var c=b.attr("href"),
e=b.data("method");b=a("meta[name=csrf-token]").attr("content");var f=a("meta[name=csrf-param]").attr("content"),c=a('<form method="post" action="'+c+'"></form>'),e='<input name="_method" value="'+e+'" type="hidden" />';void 0!==f&&void 0!==b&&(e+='<input name="'+f+'" value="'+b+'" type="hidden" />');c.hide().append(e).appendTo("body");c.submit()},disableFormElements:function(d){d.find(b.disableSelector).each(function(){var b=a(this),d=b.is("button")?"html":"val";b.data("ujs:enable-with",b[d]());
b[d](b.data("disable-with"));b.attr("disabled","disabled")})},enableFormElements:function(d){d.find(b.enableSelector).each(function(){var b=a(this),d=b.is("button")?"html":"val";if(b.data("ujs:enable-with"))b[d](b.data("ujs:enable-with"));b.removeAttr("disabled")})},allowAction:function(a){var c=a.data("confirm"),e=!1,f;if(!c)return!0;b.fire(a,"confirm")&&(e=b.confirm(c),f=b.fire(a,"confirm:complete",[e]));return e&&f},blankInputs:function(b,c,e){var f=a(),g;b.find(c||"input,textarea").each(function(){g=
a(this);if(e?g.val():!g.val())f=f.add(g)});return f.length?f:!1},nonBlankInputs:function(a,c){return b.blankInputs(a,c,!0)},stopEverything:function(a){a.stopImmediatePropagation();return!1},callFormSubmitBindings:function(b){b=b.data("events");var c=!0;void 0!==b&&void 0!==b.submit&&a.each(b.submit,function(a,b){if("function"===typeof b.handler)return c=b.handler(b.data)});return c}};"ajaxPrefilter"in a?a.ajaxPrefilter(function(a,c,e){b.CSRFProtection(e)}):a(document).ajaxSend(function(a,c){b.CSRFProtection(c)});
a(b.linkClickSelector).live("click.rails",function(d){var c=a(this);if(!b.allowAction(c))return b.stopEverything(d);if(void 0!==c.data("remote"))return b.handleRemote(c),!1;if(c.data("method"))return b.handleMethod(c),!1});a(b.formSubmitSelector).live("submit.rails",function(d){var c=a(this),e=void 0!==c.data("remote"),f=b.blankInputs(c,b.requiredInputSelector),g=b.nonBlankInputs(c,b.fileInputSelector);if(!b.allowAction(c))return b.stopEverything(d);if(f&&b.fire(c,"ajax:aborted:required",[f]))return!e;
if(e){if(g)return b.fire(c,"ajax:aborted:file",[g]);if(!a.support.submitBubbles&&!1===b.callFormSubmitBindings(c))return b.stopEverything(d);b.handleRemote(c);return!1}setTimeout(function(){b.disableFormElements(c)},13)});a(b.formInputClickSelector).live("click.rails",function(d){var c=a(this);if(!b.allowAction(c))return b.stopEverything(d);d=(d=c.attr("name"))?{name:d,value:c.val()}:null;c.closest("form").data("ujs:submit-button",d)});a(b.formSubmitSelector).live("ajax:beforeSend.rails",function(d){this==
d.target&&b.disableFormElements(a(this))});a(b.formSubmitSelector).live("ajax:complete.rails",function(d){this==d.target&&b.enableFormElements(a(this))})})(jQuery);
