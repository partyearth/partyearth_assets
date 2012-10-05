pe.accentMap={"&":"and","\u00e0":"a","\u00e1":"a","\u00e2":"a","\u00e3":"a","\u00e4":"a","\u00e5":"a","\u00e7":"c","\u00c0":"a","\u00c1":"a","\u00e8":"e","\u00e9":"e","\u00ea":"e","\u00eb":"e","\u00c8":"e","\u00c9":"e","\u00ec":"i","\u00f1":"n","\u00ed":"i","\u00ee":"i","\u00ef":"i","\u00f2":"o","\u00f3":"o","\u00f4":"o","\u00f5":"o","\u00f6":"o","\u00f9":"u","\u00fa":"u","\u00fb":"u","\u00fc":"u","!":"i",$:"s","-":""," ":"","'":""};
pe.animated_scrolling=function(a,b){if(0!==a.length){var d=a.offset().top-(b||25);$("html,body").stop().animate({scrollTop:d+"px"},800,"cubicEaseInOut",function(){return!1})}};pe.scrolling=function(a,b){if(0!==a.length){var d=a.offset().top-(b||25);$("html,body").scrollTop(d)}};pe.days_of_week="Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday".split(",");pe.array_contains=function(a,b){return _.isArray(b)?0===_.difference(b,a).length:-1<_.indexOf(a,b)};
pe.arrays_equal=function(a,b){if(!a&&!b||!a&&0===b.length||0===a.length&&!b)return!0;if(a.length!=b.length)return!1;for(var d=a.sort(),c=b.sort(),e=0,f=a.length;e<f;e++)if(d[e]!==c[e])return!1;return!0};pe.array_match=function(a,b){var d=!1;$.each(a,function(a,e){if(-1<b.indexOf(e))return d=!0,!1});return d};pe.array_merge=function(a,b){var d=a.concat(b);d.sort();return d};
pe.array_remove=function(a,b){return!a?a:pe.is_array(b)?$.grep(a,function(a){return-1===b.indexOf(a)}):$.grep(a,function(a){return a!==b})};pe.assign_photo_size=function(a,b,d){return!a?"/assets/no_image_"+d+".png":"original"===b?a.replace("xxx.jpg",b+".jpg"):a.replace("xxx.jpg","s"+b+".jpg")};pe.remove_timestamp_from_asset_url=function(a){return a.split("?")[0]};pe.browser_is_ie8=function(){return $.browser.msie&&"8.0"===$.browser.version};
pe.build_dob_field_name=function(a,b,d){return[a||"user","[",b?b+"_":"","dob(",d,"i)]"].join("")};pe.capitalise_first_letter=function(a){return null===a?"":a.charAt(0).toUpperCase()+a.slice(1)};pe.classes_starting_with=function(a,b){return $.map(a.attr("class").split(/\s+/),function(a){if(pe.string_starts_with(a,b))return a})};pe.compare=function(a,b){return pe.is_array(a)&&pe.is_array(b)?pe.arrays_equal(a,b):a===b};
pe.convert_to_rounded_corners=function(a){a=a||$(".ConvertToRoundedCorners");a.each(function(a,d){var c=$(d);c.removeClass("ConvertToRoundedCorners");c.addClass("rounded_corner_wrapper");$('<div class="rounded_corner top_left"></div>').appendTo(c);$('<div class="rounded_corner top_right"></div>').appendTo(c);$('<div class="rounded_corner bottom_left"></div>').appendTo(c);$('<div class="rounded_corner bottom_right"></div>').appendTo(c)});return a};
pe.convert_to_tabbed_pod=function(a,b){return $.map(a,function(a){a=$(a);if(!a.hasClass("ConvertToTabbedPod"))return alert("format_tabbed_pod: element to convert must have class ConvertToTabbedPod. It only has "+a[0].className);var c=a.children("ul");c.addClass("tab");c.children("li").each(function(a,b){var b=$(b),d=b.html();b.html(pe.templatize('<div class="left_end pod_sprite float_left"></div>{{content}}<div class="right_end pod_sprite float_left"></div>',{content:d}))});var e=c.html();c.remove();
var c=a.html(),f=pe.classes_starting_with(a,"width");if(0===f.length)return alert("no width class found");if(1<f.length)return alert("more than 1 width class found");var g=f[0].substr(5);a.addClass("tabs");a.removeClass("ConvertToTabs");a.removeClass(f[0]);a.html(pe.templatize('<div><table class="width{{width}}" cellpadding="0" cellspacing="0"><tbody><tr><td class="header" colspan="4"><div class="header_row"><ul class="tab">{{headers}}</ul><div class="mid_section"></div><div class="right_corner pod_sprite"></div></div></td></tr><tr class="content_container"><td class="left_side pod_sides"></td><td class="content">{{content}}</td><td class="right_side pod_sides"></td></tr><tr class="footer_row"><td class="left_corner pod_sprite"></td><td class="mid_section"></td><td class="right_corner pod_sprite"></td></tr></tbody></table></div>',
{width:g,headers:e,content:c}));var e=a.children().tabs(b),h=["first","second","third","fourth"];a.find("ul.tab li").each(function(a,b){$(b).addClass(h[a])});return e})};
pe.new_convert_to_tabbed_pod=function(a,b){return $.map(a,function(a){a=$(a);if(!a.hasClass("ConvertToTabbedPod"))return alert("format_tabbed_pod: element to convert must have class ConvertToTabbedPod. It only has "+a[0].className);var c=a.children("ul"),e=c.html();c.remove();var c=a.html(),f=pe.classes_starting_with(a,"width");if(0===f.length)return alert("no width class found");if(1<f.length)return alert("more than 1 width class found");var g=f[0].substr(5);a.addClass("tabs");a.removeClass("ConvertToTabs");
a.removeClass(f[0]);a.html(pe.templatize('<div class="width{{width}}"><ul class="tab">{{headers}}</ul>{{content}}</div>',{width:g,headers:e,content:c}));var e=a.children().tabs(b),h=["first","second","third","fourth"];a.find("ul.tab li").each(function(a,b){$(b).addClass(h[a])});return e})};pe.date_string=function(a){return"string"===typeof a?a:a.getMonth()+1+"/"+a.getDate()+"/"+a.getFullYear()};
pe.days_between_dates=function(a,b){var d="string"===typeof a?Date.parse(a):a,c="string"===typeof b?Date.parse(b):b;return Math.abs(Math.floor((d-c)/864E5))};pe.event_search_text=function(a){var b=[a.name,a.description,a.location_name,a.category,a.neighborhood_name,a.neighborhood_id];a.tags&&$.each(a.tags,function(a,c){b.push(c)});a.performer_names&&$.each(a.performer_names,function(a,c){b.push(c)});return b.join(" ")};pe.fetch_photo_id_from_url=function(a){return a.split("/photos/")[1]};
pe.fix_ie7_rendering_bug=function(){$(".ConvertToTabbedPod").addClass("IeSucks")};pe.format_date=function(a){return a.getMonth()+1+"/"+a.getDate()+"/"+a.getFullYear()};pe.format_price=function(a){var b=Math.floor(a/100).toString(),a=(a%100).toString();2>a.length&&(a="0"+a);return"$"+b+"."+a};pe.format_duration=function(a,b){if(!a)return"0:00";var d=Math.floor(a%60);return pe.string_padding_left(Math.floor(a/60).toString(),b||1,"0")+":"+pe.string_padding_left(d.toString(),2,"0")};
pe.get_url_parameter=function(a,b){var d=RegExp("[\\?&]"+b+"=([^&]+)","i").exec(a);return d?d[1]:null};pe.hash_length=function(a){var b=0,d;for(d in a)a.hasOwnProperty(d)&&b++;return b};pe.hashes_equal=function(a,b){if(a===b)return!0;if(pe.hash_length(a)!=pe.hash_length(b))return!1;for(var d in a){var c=a[d],e=b[d];if(pe.is_array(c)){if(!pe.arrays_equal(c,e))return!1}else if(c!==e)return!1}return!0};
pe.hashes_match=function(a,b){for(var d in a){var c=a[d],e=b[d];if(pe.is_array(c)){if(!pe.array_contains(e,c))return!1}else if(c!==e)return!1}return!0};pe.https=function(a){return-1===window.location.href.indexOf("https://")?a:a.replace("http://","https://")};pe.inject=function(a,b,d){var c=b;$.each(a,function(a,b){c=d(c,b)});return c};pe.install_easing=function(){jQuery.easing.cubicEaseInOut=function(a,b,d,c){b=d+c;return 1>(a/=0.5)?b/2*a*a*a+d:b/2*((a-=2)*a*a+2)+d}};
pe.is_array=function(a){return!(!a||!("object"===typeof a&&"number"===typeof a.length&&"function"===typeof a.splice&&!a.propertyIsEnumerable("length")))};pe.is_valid_credit_card_number=function(a){return!!a.match(/^\d{4}(\s*|\s*\-\s*)?\d{4}(\s*|\s*\-\s*)?\d{4}(\s*|\s*\-\s*)?\d{4}$/)};pe.is_valid_date=function(a){return!a.match(/^(\d{1,2})(\/|-)(\d{1,2})(\/|-)(\d{4})$/)?!1:a!==$.datepicker.formatDate("m/d/yy",new Date(a))?a===$.datepicker.formatDate("mm/dd/yy",new Date(a)):!0};
pe.is_valid_zip_code=function(a){return!!a.match(/^\d{5}(\s*\-\s*\d{4})?$/)};pe.load=function(a){pe.assert(a,"error loading data");return a};pe.link_title_for_city=function(a){return"See the latest hotspots and events happening in "+a+"."};pe.link_title_for_city_party_climate=function(a){return"Check out the overview and photos of "+a+"."};
pe.link_title_for_event=function(a,b){return b?"Check out event details, photos and videos of "+a+" at "+b+".":"Check out event details, photos and videos of "+a+"."};pe.link_title_for_neighborhood=function(a,b){return"Check out "+a+" description, photos, and venues in "+b+"."};pe.link_title_for_performer=function(a){return"See the latest "+a+" schedule, photos, videos and news."};
pe.link_title_for_reviewer=function(a){switch(a){case "Lucas":return"Meet Lucas, the quintessential fun- loving, pub-crawling \u201cguy\u2019s guy\u201d. Learn about his personality and ratings.";case "Adriana":return"Meet Adriana, the epitome of a cosmopolitan girl. Learn about her personality and ratings.";case "Jonah":return"Meet Jonah, an affable, non-mainstream guy with natural curiosity about people and cultures. Learn about his personality and ratings.";case "Emma":return"Meet Emma, a lively, witty, and sociable \u201cgirl next door\u201d. Learn about her personality and ratings.";
case "All":return"Meet Lucas, Adriana, Jonah and Emma. Learn how their personalities can help you maximize your social experiences in your city and your travels."}};pe.link_title_for_venue=function(a,b,d){return d?"Check out the review, photos, videos, map and events schedule of "+a+" - "+d+" in "+b+".":"Check out the review, photos, videos, map and events schedule of "+a+" in "+b+"."};
pe.normalize=function(a){for(var b="",d=0,c=a.length;d<c;d++)var e=a.charAt(d),f=pe.accentMap[e],b=b+("undefined"===typeof f?e:f);return b};pe.object_hash_from_array=function(a){var b={};$.each(a,function(a,c){b[c.id]=c});return b};pe.object_length=function(a){var b=0,d;for(d in a)a.hasOwnProperty(d)&&b++;return b};pe.parse_price=function(a){return Math.ceil(100*parseFloat(a.substring(1)))};
pe.prepare_autocomplete_data=function(a){var b=[];$.each(a,function(a,c){$.each(c,function(c,f){f.category=a;b.push(f)})});return b};pe.remove_anchor_from_url=function(a){return a?a.split("#")[0]:""};pe.set_autocomplete_source=function(a,b,d){var c=RegExp($.ui.autocomplete.escapeRegex(pe.normalize(b.term)),"i");d($.grep(pe.prepare_autocomplete_data(a),function(a){a=a.label||a.value||a;return c.test(a)||c.test(pe.normalize(a))}))};
pe.shuffle_array=function(a){if(!a)return[];for(var b,d,c=a.length;c;)b=parseInt(Math.random()*c,10),d=a[--c],a[c]=a[b],a[b]=d;return a};pe.string_padding_left=function(a,b,d){for(;a.length<b;)a=d+a;return a};pe.structured_tags_as_flat_array=function(a){var b=[];$.each(a,function(a,c){$.merge(b,c)});return b};pe.text_contains_query=function(a,b){var d=b.split(" "),c=!0;$.each(d,function(b,d){if(-1===a.indexOf(d))return c=!1,!0});return c};pe.today_date_string=function(){return pe.date_string(new Date)};
pe.venue_search_text=function(a){var b=[a.name,a.description,a.address,a.hotspot_text,a.neighborhood_name];a.types&&$.each(a.types,function(a,c){b.push(c)});a.tags&&$.each(a.tags,function(a,c){b.push(c)});return b.join(" ")};pe.xor=function(a,b){return!!(a?!b:b)};pe.EventHelperTools={};pe.EventHelperTools.autocomplete_closed=function(){pe.EventHelperTools.autocomplete_open=!1};pe.EventHelperTools.autocomplete_opened=function(){pe.EventHelperTools.autocomplete_open=!0};
pe.EventHelperTools.remove_comma_at_the_end=function(a){return!a?"":a.replace(/,$/,"")};pe.EventHelperTools.show_message=function(a,b){a.removeClass("wrong correct new").parent().find(".errors").remove().find(".message").remove();b?a.addClass("wrong").after('<span class="errors">'+b+"</span>"):a.addClass("correct")};pe.EventHelperTools.validate_url=function(a){return!a?!0:/^(http|https):\/\/[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/i.test(a)};
pe.NewPerformerDialogForm=function(a,b,d,c){pe.init_widget(this,a);this.success_callback_method=d;this.cancel_callback_method=c;this.dialog_box=$(this.dialog_html(b));this.performer_name_input=this.dialog_box.find(".PerformerName");this.performer_url_input=this.dialog_box.find(".PerformerURL");this.performer_description_input=this.dialog_box.find(".PerformerDescription");this.dialog_box.dialog({modal:!0,show:!1,close:this.callback(this.close_button_clicked),buttons:{"Create Performer":this.callback(this.create_button_clicked),
Close:this.callback(this.close_button_clicked)}})};pe.NewPerformerDialogForm.prototype.close_button_clicked=function(){this.destroy_dialog();this.cancel_callback_method()};
pe.NewPerformerDialogForm.prototype.create_button_clicked=function(){var a=this.performer_name_input.val();if(!a)return pe.EventHelperTools.show_message(this.performer_name_input,"Name is required"),!1;if(150<a.length)return pe.EventHelperTools.show_message(this.performer_name_input,"Name is too long"),!1;var b=this.performer_url_input.val();if(b&&!pe.EventHelperTools.validate_url(b))return pe.EventHelperTools.show_message(this.performer_url_input,"Please input a valid url"),!1;$.ajax({url:"/admin/events_admin/performer_create",
type:"POST",data:{name:a,url:b,description:this.performer_description_input.val()},error:pe.ajax_error,success:this.callback(function(a){a.error?pe.EventHelperTools.show_message(this.performer_name_input,a.error):(this.destroy_dialog(),this.success_callback_method(a))})})};pe.NewPerformerDialogForm.prototype.destroy_dialog=function(){this.dialog_box.dialog("destroy");this.dialog_box.remove()};
pe.NewPerformerDialogForm.prototype.dialog_html=function(a){return'<div title="Create Performer"><ul><li><label><strong>Only Entertainer Type can be created in the Events Importer</strong></label><br></li><li><label for="performer_name">Name</label> <input name="performer_name" class="PerformerName" value="'+a+'"></li><li><label for="performer_url">Official Site</label> <input name="performer_url" class="PerformerURL" value=""></li><li><label for="performer_description">Description</label> <textarea name="performer_description" class="PerformerDescription"></textarea></li></ul></div>'};
