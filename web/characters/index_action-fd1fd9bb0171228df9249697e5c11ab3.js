pe.ReadMore=function(a,b,c){0<a.length&&(pe.init_widget(this,a),this.read_more_control=this.container.find(".ReadMoreControl"),this.read_less_control=this.container.find(".ReadLessControl"),this.read_more_link=this.container.find(".ReadMoreLink"),this.read_more_link.click(this.callback(this.on_read_more_link_clicked)),this.read_less_link=this.container.find(".ReadLessLink"),this.read_less_link.click(this.callback(this.on_read_less_link_clicked)),this.long_description=this.container.find(".LongDescription"),
this.thumbs=this.container.find(".thumbnails"),this.photos=this.container.find(".photo"),this.read_more_handler=b,this.read_less_handler=c)};pe.ReadMore.events={LONG_DESC_OPENED:"ReadMore_LONG_DESC_OPENED"};
pe.ReadMore.prototype.on_read_more_link_clicked=function(){this.long_description.removeClass("clipped");this.read_less_control.show();this.read_more_control.hide();this.thumbs.addClass("hidden");this.photos.removeClass("hidden");pe.fire_global_event(pe.ReadMore.events.LONG_DESC_OPENED);"function"===typeof this.read_more_handler&&this.read_more_handler()};
pe.ReadMore.prototype.on_read_less_link_clicked=function(){this.read_less_control.hide();this.read_more_control.show();this.thumbs.removeClass("hidden");this.photos.addClass("hidden");this.long_description.addClass("clipped");"function"===typeof this.read_less_handler&&this.read_less_handler()};pe.ReadMore.instantiate=function(){return $.map($(".ReadMore"),function(a){return new pe.ReadMore($(a))})};
pe.CharacterHoverSelect=function(a){pe.init_widget(this,a);this.character_image_div=this.container.find(".CharacterSelect");this.character_image_div.html(this.html());this.character_image_element=this.character_image_div.find(".CharacterImage");this.lucas_div=this.character_image_element.find(".Lucas");this.lucas_div.mouseover(this.callback(this.on_mouse_over));this.lucas_div.click(this.callback(this.on_click));this.adriana_div=this.character_image_element.find(".Adriana");this.adriana_div.mouseover(this.callback(this.on_mouse_over));
this.adriana_div.click(this.callback(this.on_click));this.jonah_div=this.character_image_element.find(".Jonah");this.jonah_div.mouseover(this.callback(this.on_mouse_over));this.jonah_div.click(this.callback(this.on_click));this.emma_div=this.character_image_element.find(".Emma");this.emma_div.mouseover(this.callback(this.on_mouse_over));this.emma_div.click(this.callback(this.on_click));this.container.find(".Content").hide()};pe.CharacterHoverSelect.prototype.html=function(){return'<div class="CharacterImage"><div class="Lucas characters lucas float_left" data="Lucas" title="Lucas"></div><div class="Adriana characters adriana float_left" data="Adriana" title="Adriana"></div><div class="Jonah characters jonah float_left" data="Jonah" title="Jonah"></div><div class="Emma characters emma float_left" data="Emma" title="Emma"></div><div class="clear"></div></div>'};
pe.CharacterHoverSelect.prototype.on_mouse_over=function(a){var b=$(a.target).attr("data");"undefined"!==typeof b?(this.container.find(".Content").hide(),this.container.find("."+b).show()):a.stopPropagation()};pe.CharacterHoverSelect.prototype.on_click=function(a){var b=$(a.target).attr("data");"undefined"!==typeof b?window.location="/pe-reviewers/"+b.toLowerCase():a.stopPropagation()};
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
pe.CharacterDropdown=function(a,b){pe.init_widget(this,a);this.dropdown_widget=new pe.DropdownModule(a,this.dropdown_html(b),this.callback(this.title_html),!1);this.dropdown_widget.bind_event(pe.DropdownModule.events.CHANGED,this.callback(this.selected));this.dropdown_widget.bind_event(pe.DropdownModule.events.MINIMIZED,this.callback(this.dropdown_closed))};pe.CharacterDropdown.events={OPENED:"CharacterDropdown_OPENED",CHANGED:"CharacterDropdown_CHANGED",CLOSED:"CharacterDropdown_CLOSED"};
pe.CharacterDropdown.prototype.dropdown_closed=function(){this.fire_event(pe.CharacterDropdown.events.CLOSED)};pe.CharacterDropdown.prototype.dropdown_html=function(a){return""+(a?'<div class="Choice choice" data_result="" data_character_name="Anyone">Anyone</div>':"")+'<div class="Choice choice" data_result="lucas" data_character_name="Lucas">Lucas</div><div class="Choice choice" data_result="adriana" data_character_name="Adriana">Adriana</div><div class="Choice choice" data_result="jonah" data_character_name="Jonah">Jonah</div><div class="Choice choice" data_result="emma" data_character_name="Emma">Emma</div>'};
pe.CharacterDropdown.prototype.result_value=function(a){return a&&(a=a.attr("data_result"),"string"===typeof a)?a:""};pe.CharacterDropdown.prototype.selected=function(a,b){this.fire_event(pe.CharacterDropdown.events.CHANGED,this.result_value($(b)))};pe.CharacterDropdown.prototype.title_html=function(a){return a?"selecting"===a?(this.fire_event(pe.CharacterDropdown.events.OPENED,$(a)),'<span class="unselected">Select a Personality</span>'):a.attr("data_character_name"):'<span class="unselected">Select a Personality</span>'};
pe.CharacterDropdown.prototype.val=function(a){if(a)this.dropdown_widget.val(".Choice[data_result='"+a+"']");else return this.result_value(this.dropdown_widget.val())};
pe.CityDropDown=function(a,b){pe.init_widget(this,a);this.dropdown_widget=new pe.DropdownModule(a,this.dropdown_html(b),this.callback(this.title_html),!1,"city_url_param");this.dropdown_widget.bind_event(pe.DropdownModule.events.CHANGED,this.callback(this.dropdown_selected));this.dropdown_widget.bind_event(pe.DropdownModule.events.MINIMIZED,this.callback(this.dropdown_closed))};pe.CityDropDown.events={OPENED:"CityDropDown_OPENED",CHANGED:"CityDropDown_CHANGED",CLOSED:"CityDropDown_CLOSED"};
pe.CityDropDown.prototype.dropdown_closed=function(){this.fire_event(pe.CityDropDown.events.CLOSED)};pe.CityDropDown.prototype.dropdown_html=function(a){return $.map(a,function(a){return pe.templatize('<div class="Choice choice" data_result="{{id}}"><div class="choice_city_name">{{name}}</div></div>',a)}).join("\n")};pe.CityDropDown.prototype.dropdown_selected=function(a,b){var c=this.result_value($(b));this.dropdown_widget.set_input_field_value(c);this.fire_event(pe.CityDropDown.events.CHANGED,c)};
pe.CityDropDown.prototype.result_value=function(a){return a&&(a=a.attr("data_result"),"string"===typeof a)?a:""};pe.CityDropDown.prototype.show_error=function(){this.dropdown_widget.set_error_as_title()};pe.CityDropDown.prototype.title_html=function(a){return a?"selecting"===a?(this.fire_event(pe.CityDropDown.events.OPENED,a),'<span class="unselected">Select a City</span>'):"error"===a?'<span class="unselected error">Please select a city</span>':a.html():'<span class="unselected">Select a City</span>'};
pe.CityDropDown.prototype.val=function(a){if(a)this.dropdown_widget.val(".Choice[data_result='"+a+"']"),this.dropdown_widget.set_input_field_value(a);else return this.result_value(this.dropdown_widget.val())};
pe.MiniKevinModule=function(a,b,c){pe.init_widget(this,a);this.container.html(this.dom());this.city_dropdown=new pe.CityDropDown(this.container.find(".CityDropdown"),b);this.city_dropdown.bind_event(pe.CityDropDown.events.OPENED,this.callback(this.city_dropdown_opened));this.character_dropdown=new pe.CharacterDropdown(this.container.find(".CharacterDropdown"),!1);this.character_dropdown.bind_event(pe.CharacterDropdown.events.OPENED,this.callback(this.character_dropdown_opened));c&&this.character_dropdown.val(c);
this.go_button=this.container.find(".Go");this.go_button.click(this.callback(this.go_button_clicked))};pe.MiniKevinModule.prototype.dom=function(){return'<h3 class="show_me_label float_left">Show me recommendations by</h3><div class="CharacterDropdown character_dropdown dropdown_wrapper text float_left"></div><h3 class="city_label float_left">In city</h3><div class="CityDropdown city_dropdown dropdown_wrapper text float_left"></div><input class="Go go_btn blue_btn" type="button" value="Go">'};
pe.MiniKevinModule.prototype.go_button_clicked=function(){var a=this.city_dropdown.val(),b=this.character_dropdown.val(),c="See all "+pe.capitalise_first_letter(b+"")+" recommendations in {{city}}";pe.city_configuration_widget.set_cookie_and_redirect({personality:b,city_id:a,filters_section_visible:!0,message:c})};pe.MiniKevinModule.prototype.city_dropdown_opened=function(){this.character_dropdown.dropdown_widget.collapse_dropdown()};pe.MiniKevinModule.prototype.character_dropdown_opened=function(){this.city_dropdown.dropdown_widget.collapse_dropdown()};
$(document).ready(function(){new pe.ReadMore.instantiate;new pe.CharacterHoverSelect($(".CharacterSelectModule"));pe.ajax_loader.cities.load(pe.cities_timestamp(),function(a){new pe.MiniKevinModule($(".MiniKevinModule"),a);pe.init_page_framework()})});
