pe.Input=function(a,b){pe.init_widget(this,a);this.options=b;this.options.label||(this.options.label="");this.container.html(this.html(this.options));this.carrier=this.options.carrier||null;this.state=b.initial_state?b.initial_state:pe.Input.states.UNCHECKED;this.update_ui();this.type=b.type;this.click_state=pe.Input.click_states.NOT_PRESSED;this.disabled=!1;this.container.addClass(b.type);this.container.click(this.callback(this.clicked));this.container.mousedown(this.callback(this.mouse_down));this.container.mouseup(this.callback(this.mouse_up))};
pe.Input.events={CHANGED:"Input_CHANGED"};pe.Input.states={CHECKED:"CHECKED",UNCHECKED:"UNCHECKED"};pe.Input.click_states={PRESSED:"PRESSED",NOT_PRESSED:"NOT PRESSED"};pe.Input.types={CHECKBOX:"Checkbox",RADIO_BUTTON:"RadioButton"};pe.Input.prototype.clicked=function(a){this.toggle_checked_status();this.update_ui();a&&a.stopPropagation();this.fire_event(pe.Input.events.CHANGED,this)};pe.Input.prototype.check=function(){this.set_checked(!0)};pe.Input.prototype.disable=function(){this.disabled=!0;this.update_ui()};
pe.Input.prototype.enable=function(){this.disabled=!1;this.update_ui()};pe.Input.prototype.is_checked=function(){return this.state===pe.Input.states.CHECKED};pe.Input.prototype.html=function(a){return pe.templatize('<div class="Input input_selection"></div>{{label}}',a)};pe.Input.prototype.mouse_down=function(){this.click_state=pe.Input.click_states.PRESSED;this.update_ui()};pe.Input.prototype.mouse_up=function(){this.click_state=pe.Input.click_states.NOT_PRESSED;this.update_ui()};
pe.Input.prototype.set_checked=function(a){this.state=a?pe.Input.states.CHECKED:pe.Input.states.UNCHECKED;this.carrier&&this.carrier.attr("checked",a);this.update_ui()};pe.Input.prototype.toggle_checked_status=function(){this.set_checked(!this.is_checked())};pe.Input.prototype.uncheck=function(){this.set_checked(!1)};
pe.Input.prototype.update_ui=function(){this.container.removeClass("checked unchecked checked_pressed unchecked_pressed checked_disabled unchecked_disabled");var a=this.state===pe.Input.states.UNCHECKED?"unchecked":"checked",b=this.disabled?"_disabled":"",c=this.click_state===pe.Input.click_states.PRESSED?"_pressed":"";b&&(c="");this.container.addClass(a+b+c)};
pe.InputGroup=function(a){pe.init_widget(this,a);this.inputs=this.container.find("input:visible");this.input_wrapper=this.inputs.closest("ul");this.inputs.each(this.callback(function(a,c){$(c).change(this.callback(this.validate))}))};pe.InputGroup.prototype.has_checked_input=function(){var a=!1;$.each(this.inputs,function(){$(this).is(":checked")&&(a=!0)});return a};
pe.InputGroup.prototype.validate=function(){if(this.has_checked_input())return pe.validation.show_message(this.input_wrapper,""),!0;pe.validation.show_message(this.input_wrapper,"Please make a choice.");return!1};pe.InputGroup.prototype.validate_on_submit=function(){return this.validate()};
pe.HelpModule=function(a,b,c){pe.init_widget(this,a);this.help_module_open=!1;this.help_id=b;this.container.append(this.html(c));this.container.click(this.callback(this.help_button_clicked));this.help_button_div=this.container.find(".HelpButton");(this.admin_link=this.container.find(".AdminLink"))&&this.admin_link.click(this.callback(this.admin_link_clicked))};
pe.HelpModule.prototype.html=function(a){var b="";0===this.container.contents().length&&(b+='<div class="fake_link help_btn HelpButton"></div>');a&&(b+='<div><a class="AdminLink admin_edit" target="_blank" href="/admin/pages/'+this.help_id+'/edit">Edit Tip</a></div>');return b};pe.HelpModule.prototype.admin_link_clicked=function(a){a.stopPropagation()};
pe.HelpModule.prototype.help_button_clicked=function(a){this.help_module_open?a.stopPropagation():pe.ajax_loader.help_page.load({page_id:this.help_id,timestamp:pe.pages_timestamp()},this.callback(function(a){this.help_button_div.append(this.dialog_box_html(a));a=this.container.find(".DialogBox");this.help_module_open=!0;new pe.CloseButton(a,this.callback(this.close_dialog,a))}))};
pe.HelpModule.prototype.dialog_box_html=function(a){return pe.templatize('<div id="tool_tip"><table class="DialogBox" cellpadding="0" cellspacing="0"><tbody><tr class="tip_header_row"><td class="tip_left_corner tooltip_sprite"></td><td class="tip_mid_section tooltip_sprite"></td><td class="tip_right_corner tooltip_sprite"></td></tr><tr class="tip_content_container"><td class="tip_left_side tooltip_sprite" width="10"><div class="tooltip_arrow tooltip_sprite"></div></td><td width="220"><div class="tip_content"><div class="CloseButton tip_close_btn tooltip_sprite" title="Close"></div><h1 class="tooltip_title">{{title}}</h1>{{content}}</div></td><td class="tip_right_side tooltip_sprite" width="17"></td></tr><tr class="tip_footer_row"><td class="tip_left_corner tooltip_sprite"></td><td class="tip_mid_section tooltip_sprite"></td><td class="tip_right_corner tooltip_sprite"></td></tr></tbody></table></div>',a)};
pe.HelpModule.prototype.close_dialog=function(a,b){this.help_module_open=!1;a.remove();b.stopPropagation()};
pe.accentMap={"&":"and","\u00e0":"a","\u00e1":"a","\u00e2":"a","\u00e3":"a","\u00e4":"a","\u00e5":"a","\u00e7":"c","\u00c0":"a","\u00c1":"a","\u00e8":"e","\u00e9":"e","\u00ea":"e","\u00eb":"e","\u00c8":"e","\u00c9":"e","\u00ec":"i","\u00f1":"n","\u00ed":"i","\u00ee":"i","\u00ef":"i","\u00f2":"o","\u00f3":"o","\u00f4":"o","\u00f5":"o","\u00f6":"o","\u00f9":"u","\u00fa":"u","\u00fb":"u","\u00fc":"u","!":"i",$:"s","-":""," ":"","'":""};
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
pe.venue_search_text=function(a){var b=[a.name,a.description,a.address,a.hotspot_text,a.neighborhood_name];a.types&&$.each(a.types,function(a,d){b.push(d)});a.tags&&$.each(a.tags,function(a,d){b.push(d)});return b.join(" ")};pe.xor=function(a,b){return!!(a?!b:b)};
pe.DropdownModule=function(a,b,c,d,e,f){pe.init_widget(this,a);this.container.html(this.html(d,e));this.container.attr("tabindex",0);this.container.addClass("Dropdown");this.container.focusout(this.callback(this.container_focusout));this.container.click(this.callback(this.title_clicked));this.title_string_function=c;this.title_container_div=this.container.find(".TitleContainer");this.title_div=pe.load(this.container.find(".Title"));this.title_div.html(this.title_string_function(null));this.dropdown_input_field=
this.container.find(".DropdownInput");this.dropdown_div=pe.load(this.container.find(".Dropdown"));this.dropdown_div.hide();this.choices_div=pe.load(this.container.find(".Choices"));"function"===typeof b?this.dropdown_html_function=b:"string"===typeof b?this.set_choices_content(b):alert("Unknown dropdown_html type given.");f?(this.set_default_selection('div[data_result="'+f+'"]'),this.set_input_field_value(f)):this.current_selection=null;this.prevent_next_collapse_flag=!1;d&&(new pe.CloseButton(this.container,
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
pe.RatingsDropdown=function(a,b,c){pe.init_widget(this,a);this.dropdown_widget=new pe.DropdownModule(a,this.dropdown_html(),this.callback(this.title_html),!1,b,c);this.dropdown_widget.bind_event(pe.DropdownModule.events.CHANGED,this.callback(this.selected))};pe.RatingsDropdown.events={OPENED:"RatingsDropdown_OPENED",CHANGED:"RatingsDropdown_CHANGED"};pe.RatingsDropdown.prototype.dropdown_html=function(){return'<div class="Choice choice" data_result="0">0</div><div class="Choice choice" data_result="1">1</div><div class="Choice choice" data_result="2">2</div><div class="Choice choice" data_result="3">3</div><div class="Choice choice" data_result="4">4</div><div class="footer_bottom"></div>'};
pe.RatingsDropdown.prototype.result_value=function(a){return a&&(a=a.attr("data_result"),"string"===typeof a)?a:""};pe.RatingsDropdown.prototype.selected=function(a,b){var c=this.result_value($(b));this.dropdown_widget.set_input_field_value(c);this.fire_event(pe.RatingsDropdown.events.CHANGED,c)};
pe.RatingsDropdown.prototype.title_html=function(a){return a?"selecting"===a?(this.fire_event(pe.RatingsDropdown.events.OPENED,$(a)),'<span class="unselected">Select a rating</span>'):a.attr("data_result"):'<span class="unselected">Select a rating</span>'};pe.RatingsDropdown.prototype.val=function(a){if(a)this.dropdown_widget.val(".Choice[data_result='"+a+"']"),this.dropdown_widget.set_input_field_value(a);else return this.result_value(this.dropdown_widget.val())};
pe.CloseButton=function(a,b){pe.init_widget(this,a);this.close_button=a.find(".CloseButton");if("function"===typeof b)this.close_button.click(b);else switch(b){case pe.CloseButton.close_methods.REMOVE:this.close_button.click(this.callback(this.remove_container));break;case pe.CloseButton.close_methods.HIDE:this.close_button.click(this.callback(this.hide_container));break;default:alert("unknown value for 'close_method' parameter.")}};pe.CloseButton.close_methods={REMOVE:"REMOVE",HIDE:"HIDE"};
pe.CloseButton.events={CLOSED:"CloseButton_CLOSED"};pe.CloseButton.prototype.remove_container=function(){this.container.detach();this.fire_event(pe.CloseButton.events.CLOSED);this.container.remove();return!1};pe.CloseButton.prototype.hide_container=function(){this.fire_event(pe.CloseButton.events.CLOSED);this.container.hide();return!1};
pe.SingleSelectionAutocompleteField=function(a,b,c,d){pe.init_widget(this,a);this.close_button_callback=this.on_item_selected=null;this.autocomplete_data_or_url=b;this.input_field_name=c;this.container.html(this.html());this.dummy_input_field=this.container.find(".DummyInputField");this.autocomplete_input_field=this.container.find(".AutocompleteField");this.autocomplete_handler();this.selected_data_container=this.container.find(".SelectedValue");d&&this.set_field_value(d)};
pe.SingleSelectionAutocompleteField.events={SELECTED:"SingleSelectionAutocompleteField_SELECTED"};pe.SingleSelectionAutocompleteField.prototype.set_autocomplete_url=function(a){a&&(this.autocomplete_data_or_url=a,this.autocomplete_handler())};pe.SingleSelectionAutocompleteField.prototype.set_field_value=function(a){a&&(this.remove_dummy_row(),this.autocomplete_data_selected(a))};
pe.SingleSelectionAutocompleteField.prototype.add_dummy_row=function(){this.dummy_input_field||(this.dummy_input_field=$('<input class="DummyInputField"        type="hidden" name="'+this.input_field_name+'"       value="x_mock_single_value_x">'),this.autocomplete_input_field.after(this.dummy_input_field))};
pe.SingleSelectionAutocompleteField.prototype.autocomplete_data_selected=function(a){this.selected_data=a;this.remove_dummy_row();this.selected_data_container.append(this.selected_data_html(a.label,a.id,a.category));(new pe.CloseButton(this.selected_data_container.find(".SelectedInputData").last(),pe.CloseButton.close_methods.REMOVE)).bind_event(pe.CloseButton.events.CLOSED,this.callback(this.close_button_clicked));if(this.on_item_selected)this.on_item_selected(a)};
pe.SingleSelectionAutocompleteField.prototype.item_selected=function(a){this.on_item_selected=a};
pe.SingleSelectionAutocompleteField.prototype.autocomplete_handler=function(){this.autocomplete_input_field.autocomplete({source:this.autocomplete_data_or_url,minLength:1,close:this.callback(function(){this.autocomplete_input_field.val("")}),select:this.callback(function(a,b){var c=b.item;this.autocomplete_data_selected(c);this.fire_event(pe.SingleSelectionAutocompleteField.events.SELECTED,c.id)})}).data("autocomplete")._renderItem=function(a,b){b.display_label=b.category?pe.templatize("{{label}} ({{category}})",
b):b.label;return $("<li></li>").data("item.autocomplete",b).append(pe.templatize("<a>{{display_label}}</a>",b)).appendTo(a)}};pe.SingleSelectionAutocompleteField.prototype.clear_selected_data=function(){this.selected_data_container.html("");this.add_dummy_row()};
pe.SingleSelectionAutocompleteField.prototype.close_button_clicked=function(){0===this.selected_data_container.find(".SelectedInputData").length&&this.add_dummy_row();this.close_button_callback&&this.close_button_callback();this.autocomplete_input_field.show();this.autocomplete_input_field.focus()};pe.SingleSelectionAutocompleteField.prototype.display_close_button=function(){this.selected_data_container.find(".CloseButton").show()};pe.SingleSelectionAutocompleteField.prototype.hide_close_button=function(){this.selected_data_container.find(".CloseButton").hide()};
pe.SingleSelectionAutocompleteField.prototype.html=function(){return'<input class="AutocompleteField" type="text"><input class="DummyInputField" type="hidden" name="'+this.input_field_name+'" value="x_mock_single_value_x"><div class="SelectedValue"></div>'};pe.SingleSelectionAutocompleteField.prototype.remove_dummy_row=function(){this.dummy_input_field&&(this.dummy_input_field.remove(),this.dummy_input_field=null)};
pe.SingleSelectionAutocompleteField.prototype.replace_data_in_list=function(a){this.clear_selected_data();this.set_field_value(a)};pe.SingleSelectionAutocompleteField.prototype.selected_data_html=function(a,b,c){return'<div class="SelectedInputData selected_data">  <div class="CloseButton close_button">'+(c?a+"("+c+")":a)+'</div>  <input type="hidden" value="'+b+'" name="'+this.input_field_name+'"></div>'};
(function(){var a=function(a,c){return function(){return a.apply(c,arguments)}};pe.PerformerJumper=function(){function b(b,d,e){var f=this;this.container=b;this.url=d;this.field_name=e;this.on_item_selected=a(this.on_item_selected,this);this.item=null;this.autocomplete=new pe.SingleSelectionAutocompleteField(this.container.find(".Autocomplete"),this.url,this.field_name);this.write_review_button=this.container.find(".WriteReviewButton");this.write_review_button.click(function(){return f.item?!0:!1});
this.autocomplete.item_selected(this.on_item_selected);this.autocomplete.close_button_callback=function(){f.item=null;return f.write_review_button.addClass("disabled")}}b.prototype.on_item_selected=function(a){this.write_review_button.toggleClass("disabled",a);if(this.item=a)return this.write_review_button.attr("href",""+a.value+"#WriteComment")};return b}()}).call(this);
(function(){var a=function(a,c){return function(){return a.apply(c,arguments)}};pe.CityBasedVenueJumper=function(){function b(b,d,e){var f=this;this.container=b;this.url=d;this.field_name=e;this.on_item_selected=a(this.on_item_selected,this);this.city_changed=a(this.city_changed,this);this.item=null;this.write_review_button=this.container.find(".WriteReviewButton");this.cities_selector_container=this.container.find(".CitySelector");this.venues_selector_container=this.container.find(".VenueSelector");
this.write_review_button.click(this.on_write_review_button_clicked);this.cities_selector_container.change(this.city_changed);this.venues_selector_container.change(this.on_item_selected);this.write_review_button.click(function(){return f.venues_selector_container.val()?!0:!1})}b.prototype.city_changed=function(){var a=this;this.city=this.cities_selector_container.val();this.container=this.venues_selector_container;this.options="";if(this.city)return $.getJSON(this.url,{city_id:this.city},function(b){var e,
f,g;e=f=0;for(g=b.length;0<=g?f<g:f>g;e=0<=g?++f:--f)a.options+='<option value="'+b[e].value+'">'+b[e].label+"</option>";a.container.html(a.options);return a.on_item_selected()});this.container.html(this.options);return this.on_item_selected()};b.prototype.on_item_selected=function(){var a;return(a=this.venues_selector_container.val())?(this.write_review_button.attr("href",""+a+"#WriteComment"),this.write_review_button.removeClass("disabled")):this.write_review_button.addClass("disabled")};return b}()}).call(this);
(function(){var a=function(a,c){return function(){return a.apply(c,arguments)}};pe.CityBasedEventJumper=function(){function b(b,d,e){var f=this;this.container=b;this.url=d;this.field_name=e;this.on_item_selected=a(this.on_item_selected,this);this.city_changed=a(this.city_changed,this);this.item=null;this.write_review_button=this.container.find(".WriteReviewButton");this.cities_selector_container=this.container.find(".CitySelector");this.events_selector_container=this.container.find(".EventSelector");
this.write_review_button.click(this.on_write_review_button_clicked);this.cities_selector_container.change(this.city_changed);this.events_selector_container.change(this.on_item_selected);this.write_review_button.click(function(){return f.events_selector_container.val()?!0:!1})}b.prototype.city_changed=function(){var a=this;this.city=this.cities_selector_container.val();this.container=this.events_selector_container;this.options="";if(this.city)return $.getJSON(this.url,{city_id:this.city},function(b){var e,
f,g;e=f=0;for(g=b.length;0<=g?f<g:f>g;e=0<=g?++f:--f)a.options+='<option value="'+b[e].value+'">'+b[e].label+"</option>";a.container.html(a.options);return a.on_item_selected()});this.container.html(this.options);return this.on_item_selected()};b.prototype.on_item_selected=function(){var a;return(a=this.events_selector_container.val())?(this.write_review_button.attr("href",""+a+"#WriteComment"),this.write_review_button.removeClass("disabled")):this.write_review_button.addClass("disabled")};return b}()}).call(this);
(function(){var a=function(a,c){return function(){return a.apply(c,arguments)}};pe.MultipleSelect=function(){function b(b,d,e){var f=this;this.container=b;this.app_id=d;this.type=null!=e?e:"writer";this.populate_selected_reviews=a(this.populate_selected_reviews,this);this.populate_avaliable_reviews=a(this.populate_avaliable_reviews,this);this.receive_data=a(this.receive_data,this);this.append_notice=a(this.append_notice,this);this.move=a(this.move,this);this.notice_messages="You need to write at least one user review to continue,That was a good first try. Think you can show us more?,Nice work so far. What else have you got?,Getting better. But where else have you been?,You\u2019ve almost hit the average. Who wants to be below average?,Well done! Feel free to add as many as you would like!".split(",");
this.data=[];this.receive_data();this.container.find(".Item").live("click",function(a){return"LI"===$(a.target).get(0).tagName?$(a.target).toggleClass("selected"):$(a.target).parent("li").toggleClass("selected")});this.container.find(".add").live("click",function(){return f.move($(".SourceSelect li.selected"),!0)});this.container.find(".remove").live("click",function(){return f.move($(".DestinationSelect li.selected"),!1)});this.container.find(".refresh").click(function(){var a;a=f.selected_reviews();
f.data=[];f.receive_data(a);return!1})}b.prototype.move=function(a,b){var e=this;_.each($(a),function(a){return _.find(e.data,function(b){return b.id===parseInt($(a).attr("id"))}).selected=b});this.populate_avaliable_reviews();this.populate_selected_reviews();this.append_notice();pe.check_button();return!1};b.prototype.append_notice=function(){var a;a=Math.min(this.selected_reviews().length,5);return this.container.find(".DestinationSelect ol li.Empty:first").replaceWith("<li class='Notice notice' id='Notice'><span>"+
this.notice_messages[a]+"</span></li>")};b.prototype.receive_data=function(a){var b=this;null==a&&(a=!1);return $.getJSON("/api/users/reviews.json","writer"===this.type?{writer_application_id:this.app_id}:{photographer_application_id:this.app_id},function(e){$.each(e,function(f,e){var h;h=!a?e.selected:_.find(a,function(a){return a.id===parseInt(e.id)});return b.data.push({name:e.label,id:e.id,selected:h,order:f})});b.populate_avaliable_reviews();b.populate_selected_reviews();return b.append_notice()})};
b.prototype.selected_reviews=function(){return _.filter(this.data,function(a){return a.selected})};b.prototype.avaliable_reviews=function(){return _.filter(this.data,function(a){return!a.selected})};b.prototype.populate_avaliable_reviews=function(){var a;a="";_.each(this.avaliable_reviews(),function(b){return a+="<li class='Item' id='"+b.id+"' data-order='"+b.order+"'>"+b.name+"</li>\n"});return this.container.find(".SourceSelect ul").html(a)};b.prototype.populate_selected_reviews=function(){var a;
a=[];for(_.each(this.selected_reviews(),function(b){return a.push("<li class='Item' id='"+b.id+"' data-order='"+b.order+"'><span>"+b.name+"</span></li>")});5>=a.length;)a.push("<li class='notice Empty'></li>");return this.container.find(".DestinationSelect ol").html(a.join("\n"))};return b}()}).call(this);
pe.check_button=function(){$(".DestinationSelect li[id!=Notice][class=Item]").length?pe.submit_button.hasClass("disabled")&&pe.submit_button.removeClass("disabled").removeAttr("disabled"):pe.submit_button.hasClass("disabled")||pe.submit_button.addClass("disabled").attr("disabled","disabled");pe.save_button.hasClass("disabled")&&pe.save_button.removeClass("disabled").removeAttr("disabled")};
$(document).ready(function(){$("form").submit(function(){$(".DestinationSelect li[id!=Notice]").each(function(a,b){$("form").append("<input type='hidden' name='photographer_application[user_review_id][]' value='"+$(b).attr("id")+"' />")})});$(".ShowSampleReview").click(function(){$(".SampleReview").show();return!1});$(".SampleReview .Close").click(function(){$(".SampleReview").hide()});$("#show_do_it_stuff").click(function(){$(".event_review_field").show();$(".performer_review_field").show();$(".DoItStuff").hide();
return!1});pe.validate_before_submit($(".formtastic.photographer_application"));pe.submit_button=$(".SubmitButton");pe.save_button=$(".SaveButton");pe.multiple_selects=new pe.MultipleSelect($("#select_list_cont"),window.application_id,"photographer");new pe.CityBasedVenueJumper($(".VenueReview"),"/api/venues/list","write_now[venue]");new pe.CityBasedEventJumper($(".EventReview"),"/api/events/recurring","write_now[event]");new pe.PerformerJumper($(".PerformerAutocomplete"),"/api/performers/autocomplete",
"write_now[performer]");pe.init_page_framework()});
