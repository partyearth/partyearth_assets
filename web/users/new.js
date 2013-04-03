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
pe.prepare_autocomplete_data=function(a){var b=[];$.each(a,function(a,d){$.each(d,function(d,f){f.category=a;b.push(f)})});return b};pe.remove_anchor_from_url=function(a){return a?a.split("#")[0]:""};
pe.set_autocomplete_source=function(a,b,c){var d=pe.normalize(b.term).toLowerCase(),e=RegExp($.ui.autocomplete.escapeRegex(d),"i");a=$.grep(pe.prepare_autocomplete_data(a),function(a){a=a.label||a.value||a;return e.test(a)||e.test(pe.normalize(a))});a=_.sortBy(a,function(a){var b=a.label||a.value||a,b=pe.normalize(b).toLowerCase();return[a.category,b!=d,a.label]});c(a)};pe.shuffle_array=function(a){if(!a)return[];for(var b,c,d=a.length;d;)b=parseInt(Math.random()*d,10),c=a[--d],a[d]=a[b],a[b]=c;return a};
pe.string_padding_left=function(a,b,c){for(;a.length<b;)a=c+a;return a};pe.structured_tags_as_flat_array=function(a){var b=[];$.each(a,function(a,d){$.merge(b,d)});return b};pe.text_contains_query=function(a,b){var c=b.split(" "),d=!0;$.each(c,function(b,c){if(-1===a.indexOf(c))return d=!1,!0});return d};pe.today_date_string=function(){return pe.date_string(new Date)};
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
pe.DayDropdown=function(a,b){pe.init_widget(this,a);this.dropdown_widget=new pe.DropdownModule(a,this.dropdown_html(),this.callback(this.title_html),!1,b);this.dropdown_widget.bind_event(pe.DropdownModule.events.CHANGED,this.callback(this.selected))};pe.DayDropdown.events={OPENED:"DayDropdown_OPENED",CHANGED:"DayDropdown_CHANGED"};pe.DayDropdown.prototype.dropdown_html=function(){for(var a=[],b=1;31>=b;b++)a[b]='<div class="Choice choice" data_result="'+b+'">'+b+"</div>";return a.join("\n")};
pe.DayDropdown.prototype.result_value=function(a){return a&&(a=a.attr("data_result"),"string"===typeof a)?a:""};pe.DayDropdown.prototype.selected=function(a,b){var c=this.result_value($(b));this.dropdown_widget.set_input_field_value(c);this.fire_event(pe.DayDropdown.events.CHANGED,c)};pe.DayDropdown.prototype.title_html=function(a){return a?"selecting"===a?(this.fire_event(pe.DayDropdown.events.OPENED,$(a)),'<span class="unselected">Day</span>'):a.attr("data_result"):'<span class="unselected">Day</span>'};
pe.DayDropdown.prototype.val=function(a){if(a)this.dropdown_widget.val(".Choice[data_result='"+a+"']"),this.dropdown_widget.set_input_field_value(a),this.fire_event(pe.DayDropdown.events.CHANGED,null);else return this.result_value(this.dropdown_widget.val())};
pe.MonthDropdown=function(a,b,c,d){pe.init_widget(this,a);this.remove_error_messages=d;this.dropdown_widget=new pe.DropdownModule(a,this.dropdown_html(c),this.callback(this.title_html),!1,b);this.dropdown_widget.bind_event(pe.DropdownModule.events.CHANGED,this.callback(this.selected))};pe.MonthDropdown.events={OPENED:"MonthDropdown_OPENED",CHANGED:"MonthDropdown_CHANGED"};
pe.MonthDropdown.prototype.dropdown_html=function(a){return a?'<div class="Choice choice" data_result="1" data_month="January">January</div><div class="Choice choice" data_result="2" data_month="February">February</div><div class="Choice choice" data_result="3" data_month="March">March</div><div class="Choice choice" data_result="4" data_month="April">April</div><div class="Choice choice" data_result="5" data_month="May">May</div><div class="Choice choice" data_result="6" data_month="June">June</div><div class="Choice choice" data_result="7" data_month="July">July</div><div class="Choice choice" data_result="8" data_month="August">August</div><div class="Choice choice" data_result="9" data_month="September">September</div><div class="Choice choice" data_result="10" data_month="October">October</div><div class="Choice choice" data_result="11" data_month="November">November</div><div class="Choice choice" data_result="12" data_month="December">December</div>':'<div class="Choice choice" data_result="01" data_month="01">01</div><div class="Choice choice" data_result="02" data_month="02">02</div><div class="Choice choice" data_result="03" data_month="03">03</div><div class="Choice choice" data_result="04" data_month="04">04</div><div class="Choice choice" data_result="05" data_month="05">05</div><div class="Choice choice" data_result="06" data_month="06">06</div><div class="Choice choice" data_result="07" data_month="07">07</div><div class="Choice choice" data_result="08" data_month="08">08</div><div class="Choice choice" data_result="09" data_month="09">09</div><div class="Choice choice" data_result="10" data_month="10">10</div><div class="Choice choice" data_result="11" data_month="11">11</div><div class="Choice choice" data_result="12" data_month="12">12</div>'};
pe.MonthDropdown.prototype.result_value=function(a){return a&&(a=a.attr("data_result"),"string"===typeof a)?a:""};pe.MonthDropdown.prototype.selected=function(a,b){var c=this.result_value($(b));this.dropdown_widget.set_input_field_value(c);this.fire_event(pe.MonthDropdown.events.CHANGED,c);this.remove_error_messages&&this.container.parent().parent().find(".inline-errors,img").remove()};pe.MonthDropdown.prototype.show_error=function(){this.dropdown_widget.set_error_as_title()};
pe.MonthDropdown.prototype.title_html=function(a){return a?"selecting"===a?(this.fire_event(pe.MonthDropdown.events.OPENED,$(a)),'<span class="unselected">Month</span>'):"error"===a?'<span class="unselected error">Month</span>':a.attr("data_month"):'<span class="unselected">Month</span>'};pe.MonthDropdown.prototype.val=function(a){if(a)this.dropdown_widget.val(".Choice[data_result='"+a+"']"),this.dropdown_widget.set_input_field_value(a),this.fire_event(pe.MonthDropdown.events.CHANGED,null);else return this.result_value(this.dropdown_widget.val())};
pe.MonthDropdown.prototype.validate_on_submit=function(){return""===this.val()?(this.show_error(),!1):!0};pe.YearDropdown=function(a,b,c,d,e){pe.init_widget(this,a);this.remove_error_messages=e;this.dropdown_widget=new pe.DropdownModule(a,this.dropdown_html(c,d),this.callback(this.title_html),!1,b);this.dropdown_widget.bind_event(pe.DropdownModule.events.CHANGED,this.callback(this.selected))};pe.YearDropdown.events={OPENED:"YearDropdown_OPENED",CHANGED:"YearDropdown_CHANGED"};
pe.YearDropdown.prototype.dropdown_html=function(a,b){for(var c=[],d=a;d<=b;d++)c[d]='<div class="Choice choice" data_result="'+d+'">'+d+"</div>";return c.join("\n")};pe.YearDropdown.prototype.result_value=function(a){return a&&(a=$(a).attr("data_result"),"string"===typeof a)?a:""};pe.YearDropdown.prototype.selected=function(a,b){var c=this.result_value(b);this.dropdown_widget.set_input_field_value(c);this.fire_event(pe.YearDropdown.events.CHANGED,c);this.remove_error_messages&&this.container.parent().parent().find(".inline-errors,img").remove()};
pe.YearDropdown.prototype.show_error=function(){this.dropdown_widget.set_error_as_title()};pe.YearDropdown.prototype.title_html=function(a){if(a){if("selecting"===a)return this.fire_event(pe.YearDropdown.events.OPENED,$(a)),'<span class="unselected">Year</span>';if("error"===a)return'<span class="unselected error">Year</span>';a=a.attr("data_result");return"string"===typeof a?a:""}return'<span class="unselected">Year</span>'};
pe.YearDropdown.prototype.val=function(a){if(a)this.dropdown_widget.val(".Choice[data_result='"+a+"']"),this.dropdown_widget.set_input_field_value(a),this.fire_event(pe.YearDropdown.events.CHANGED,null);else return this.result_value(this.dropdown_widget.val())};pe.YearDropdown.prototype.validate_on_submit=function(){return""===this.val()?(this.show_error(),!1):!0};
pe.DateOfBirthModule=function(a,b,c,d,e,f,g){pe.init_widget(this,a);this.container.html(this.html());this.model_name=e||null;this.attribute_name=f||null;this.validate_presence=g||!1;this.validation_enabled=!1;this.month_div=this.container.find(".MonthDropdown");this.month_dropdown_module=new pe.MonthDropdown(this.month_div,this.build_field_name(2),!0,!1);"undefined"!==typeof b&&this.month_dropdown_module.val(b);this.day_div=this.container.find(".DayDropdown");this.day_dropdown_module=new pe.DayDropdown(this.day_div,
this.build_field_name(3));"undefined"!==typeof c&&this.day_dropdown_module.val(c);this.year_div=this.container.find(".YearDropdown");this.year_dropdown_module=new pe.YearDropdown(this.year_div,this.build_field_name(1),1950,2009,!1);"undefined"!==typeof d&&this.year_dropdown_module.val(d);this.month_dropdown_module.bind_event(pe.MonthDropdown.events.CHANGED,this.callback(this.validate));this.day_dropdown_module.bind_event(pe.DayDropdown.events.CHANGED,this.callback(this.validate));this.year_dropdown_module.bind_event(pe.YearDropdown.events.CHANGED,
this.callback(this.validate))};pe.DateOfBirthModule.prototype.html=function(){return'<input type="text" style="display:none"><div class="MonthDropdown month_dropdown dropdown_wrapper float_left" tabindex="0"></div><div class="DayDropdown day_dropdown dropdown_wrapper float_left" tabindex="0"></div><div class="YearDropdown year_dropdown dropdown_wrapper float_left" tabindex="0"></div>'};pe.DateOfBirthModule.prototype.is_valid=function(){var a=this.val();return""===a&&!this.validate_presence?!0:pe.is_valid_date(a)};
pe.DateOfBirthModule.prototype.val=function(){var a="undefined"===typeof this.day_dropdown_module?"":this.day_dropdown_module.val(),b="undefined"===typeof this.month_dropdown_module?"":this.month_dropdown_module.val(),c="undefined"===typeof this.year_dropdown_module?"":this.year_dropdown_module.val();a&&(b&&c)&&(this.validation_enabled=!0);return""===a&&""===b&&""===c?"":b+"/"+a+"/"+c};
pe.DateOfBirthModule.prototype.validate=function(){if(""===this.val()&&!this.validate_presence||!this.validation_enabled)return!0;if(this.is_valid())return pe.validation.show_message(this.container,""),!0;pe.validation.show_message(this.container,"Please enter a valid date of birth");return!1};pe.DateOfBirthModule.prototype.validate_on_submit=function(){this.validation_enabled=!0;return this.validate()};
pe.DateOfBirthModule.prototype.build_field_name=function(a){return pe.build_dob_field_name(this.model_name,this.attribute_name,a)};
pe.PasswordBox=function(a){pe.init_widget(this,a);this.obfuscate_password=!0;this.password_obfuscated_field=pe.load(this.container.find("input.password"));this.password_clear_field=$("<input type='text' class='text_field' />");this.password_clear_field.insertBefore(this.password_obfuscated_field);this.password_clear_field.hide();this.password_clear_field.keyup(this.callback(this.on_clear_field_key_up));$('<br><span class="ToggleLink toggle fake_link blue_link">Show Password</span>').insertAfter(this.password_obfuscated_field);
this.toggle_link=pe.load(this.container.find(".ToggleLink"));this.toggle_link.click(this.callback(this.on_toggle_link_clicked))};pe.PasswordBox.prototype.on_clear_field_key_up=function(){if(!this.obfuscate_password){var a=this.password_clear_field.val();"string"===typeof a&&this.password_obfuscated_field.val(a).keyup()}};
pe.PasswordBox.prototype.on_toggle_link_clicked=function(){if(this.obfuscate_password=!this.obfuscate_password){var a=this.password_clear_field.val();"string"===typeof a&&(this.password_obfuscated_field.val(a),this.toggle_link.html("Show Password"))}else a=this.password_obfuscated_field.val(),"string"===typeof a&&this.password_clear_field.val(a),this.toggle_link.html("Hide Password");this.password_obfuscated_field.toggle();this.password_clear_field.toggle()};
$(document).ready(function(){if(0<$(".DateOfBirth").length){var a=window.date_of_birth;a?pe.validatables.push(new pe.DateOfBirthModule($(".DateOfBirth"),a.month,a.day,a.year)):pe.validatables.push(new pe.DateOfBirthModule($(".DateOfBirth")))}0<$(".DefaultLocation").length&&pe.ajax_loader.cities.load(function(a){a=new pe.CityDropDown($(".DefaultLocation"),a);window.default_city&&a.val(window.default_city)});pe.validate_on_blur($("#user_first_name"),pe.validation.validate_name);pe.validate_on_blur($("#user_last_name"),
pe.validation.validate_name);pe.validate_on_blur($("#user_user_name"),pe.validation.validate_user_name);pe.validate_on_blur($("#user_email"),pe.validation.validate_email);pe.validate_on_blur($("#user_terms_of_service"),pe.validation.terms_accepted);0<$("#user_password").length&&pe.validate_on_key_up($("#user_password"),pe.validation.validate_password);0<$("#user_password_input").length&&new pe.PasswordBox($("#user_password_input"));pe.validate_before_submit($("#new_user"));0<$("#user_first_name").length&&
$("#user_first_name").focus();pe.check_user_exists($("#user_email"),$("#user_user_name"));pe.init_page_framework()});
pe.check_user_exists=function(a,b){form=$(a.parents("form")[0]);form.submit(function(){var c=!0;pe.validation.clear_error_messages(form);$.getJSON("/api/users/check_username",{username:b.val()},function(d){d.message&&(c=!1);pe.validation.show_message(b,d.message);$.getJSON("/api/users/check_email",{email:a.val()},function(b){b.message&&(c=!1);pe.validation.show_message(a,b.message);c&&(form.unbind("submit"),form.submit())})});return!1})};
