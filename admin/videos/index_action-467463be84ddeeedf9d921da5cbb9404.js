pe.CommentsSection=function(a,b){pe.init_widget(this,a);this.comments_input=a.find(".Comments");this.comments_save_btn=a.find(".SaveComments");this.comments_save_btn.click(this.callback(this.save_video_comments));this.videoable_path=b};pe.CommentsSection.prototype.save_video_comments=function(){this.comments_save_btn.hide();$.ajax({url:this.videoable_path+"/videos/update_comments",type:"POST",data:{comments:this.comments_input.val()},dataType:"text",success:this.callback(this.save_video_comments_success)})};
pe.CommentsSection.prototype.save_video_comments_success=function(){this.comments_save_btn.show()};
pe.ExistingVideo=function(a){pe.init_widget(this,a);var b=a.find(".YoutubeId").val();this.youtube_id="string"===typeof b?b:"";b=a.find(".UrlParam").val();this.url_param="string"===typeof b?b:"";a.find(".DeleteButton").click(this.callback(this.delete_button_clicked));a.find("img").click(pe.video_image_clicked);a.find(".Title").editable("/admin/videos/"+this.url_param+"/update_in_place",{type:"textarea",select:!0,submit:"Save",cancel:"cancel",indicator:"<img src='/assets/content_bg/loading.gif'>",submitdata:{_method:"put",
attr_name:"title"},cssclass:"editable"});new pe.VideoStatusSelect(a.find(".Status"))};pe.ExistingVideo.prototype.delete_button_clicked=function(){confirm("Seriously?")&&$.ajax({url:"/admin/videos/"+this.url_param,type:"DELETE",dataType:"text",success:this.callback(this.video_deleted)})};pe.ExistingVideo.prototype.video_deleted=function(){this.container.remove()};
pe.accentMap={"&":"and","\u00e0":"a","\u00e1":"a","\u00e2":"a","\u00e3":"a","\u00e4":"a","\u00e5":"a","\u00e7":"c","\u00c0":"a","\u00c1":"a","\u00e8":"e","\u00e9":"e","\u00ea":"e","\u00eb":"e","\u00c8":"e","\u00c9":"e","\u00ec":"i","\u00f1":"n","\u00ed":"i","\u00ee":"i","\u00ef":"i","\u00f2":"o","\u00f3":"o","\u00f4":"o","\u00f5":"o","\u00f6":"o","\u00f9":"u","\u00fa":"u","\u00fb":"u","\u00fc":"u","!":"i",$:"s","-":""," ":"","'":""};
pe.animated_scrolling=function(a,b){if(0!==a.length){var d=a.offset().top-(b||25);$("html,body").stop().animate({scrollTop:d+"px"},800,"cubicEaseInOut",function(){return!1})}};pe.scrolling=function(a,b){if(0!==a.length){var d=a.offset().top-(b||25);$("html,body").scrollTop(d)}};pe.days_of_week="Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday".split(",");pe.array_contains=function(a,b){return _.isArray(b)?0===_.difference(b,a).length:-1<_.indexOf(a,b)};
pe.arrays_equal=function(a,b){if(!a&&!b||!a&&0===b.length||0===a.length&&!b)return!0;if(a.length!=b.length)return!1;for(var d=a.sort(),c=b.sort(),e=0,f=a.length;e<f;e++)if(d[e]!==c[e])return!1;return!0};pe.array_match=function(a,b){var d=!1;$.each(a,function(a,e){if(-1<b.indexOf(e))return d=!0,!1});return d};pe.array_merge=function(a,b){var d=a.concat(b);d.sort();return d};
pe.array_remove=function(a,b){return!a?a:pe.is_array(b)?$.grep(a,function(a){return-1===b.indexOf(a)}):$.grep(a,function(a){return a!==b})};pe.assign_photo_size=function(a,b,d){return!a?"/assets/no_image_"+d+".png":"original"===b?a.replace("xxx.jpg",b+".jpg"):a.replace("xxx.jpg","s"+b+".jpg")};pe.remove_timestamp_from_asset_url=function(a){return a.split("?")[0]};pe.browser_is_ie8=function(){return $.browser.msie&&"8.0"===$.browser.version};
pe.build_dob_field_name=function(a,b,d){return[a||"user","[",b?b+"_":"","dob(",d,"i)]"].join("")};pe.capitalise_first_letter=function(a){return null===a?"":a.charAt(0).toUpperCase()+a.slice(1)};pe.classes_starting_with=function(a,b){return $.map(a.attr("class").split(/\s+/),function(a){if(pe.string_starts_with(a,b))return a})};pe.compare=function(a,b){return pe.is_array(a)&&pe.is_array(b)?pe.arrays_equal(a,b):a===b};
pe.convert_to_rounded_corners=function(a){a=a||$(".ConvertToRoundedCorners");a.each(function(a,d){var c=$(d);c.removeClass("ConvertToRoundedCorners");c.addClass("rounded_corner_wrapper");$('<div class="rounded_corner top_left"></div>').appendTo(c);$('<div class="rounded_corner top_right"></div>').appendTo(c);$('<div class="rounded_corner bottom_left"></div>').appendTo(c);$('<div class="rounded_corner bottom_right"></div>').appendTo(c)});return a};
pe.convert_to_tabbed_pod=function(a,b){return $.map(a,function(a){a=$(a);if(!a.hasClass("ConvertToTabbedPod"))return alert("format_tabbed_pod: element to convert must have class ConvertToTabbedPod. It only has "+a[0].className);var c=a.children("ul");c.addClass("tab");c.children("li").each(function(a,b){var b=$(b),c=b.html();b.html(pe.templatize('<div class="left_end pod_sprite float_left"></div>{{content}}<div class="right_end pod_sprite float_left"></div>',{content:c}))});var e=c.html();c.remove();
var c=a.html(),f=pe.classes_starting_with(a,"width");if(0===f.length)return alert("no width class found");if(1<f.length)return alert("more than 1 width class found");var k=f[0].substr(5);a.addClass("tabs");a.removeClass("ConvertToTabs");a.removeClass(f[0]);a.html(pe.templatize('<div><table class="width{{width}}" cellpadding="0" cellspacing="0"><tbody><tr><td class="header" colspan="4"><div class="header_row"><ul class="tab">{{headers}}</ul><div class="mid_section"></div><div class="right_corner pod_sprite"></div></div></td></tr><tr class="content_container"><td class="left_side pod_sides"></td><td class="content">{{content}}</td><td class="right_side pod_sides"></td></tr><tr class="footer_row"><td class="left_corner pod_sprite"></td><td class="mid_section"></td><td class="right_corner pod_sprite"></td></tr></tbody></table></div>',
{width:k,headers:e,content:c}));var e=a.children().tabs(b),j=["first","second","third","fourth"];a.find("ul.tab li").each(function(a,b){$(b).addClass(j[a])});return e})};
pe.new_convert_to_tabbed_pod=function(a,b){return $.map(a,function(a){a=$(a);if(!a.hasClass("ConvertToTabbedPod"))return alert("format_tabbed_pod: element to convert must have class ConvertToTabbedPod. It only has "+a[0].className);var c=a.children("ul"),e=c.html();c.remove();var c=a.html(),f=pe.classes_starting_with(a,"width");if(0===f.length)return alert("no width class found");if(1<f.length)return alert("more than 1 width class found");var k=f[0].substr(5);a.addClass("tabs");a.removeClass("ConvertToTabs");
a.removeClass(f[0]);a.html(pe.templatize('<div class="width{{width}}"><ul class="tab">{{headers}}</ul>{{content}}</div>',{width:k,headers:e,content:c}));var e=a.children().tabs(b),j=["first","second","third","fourth"];a.find("ul.tab li").each(function(a,b){$(b).addClass(j[a])});return e})};pe.date_string=function(a){return"string"===typeof a?a:a.getMonth()+1+"/"+a.getDate()+"/"+a.getFullYear()};
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
pe.VideoStatusSelect=function(a){pe.init_widget(this,a);this.video_id=pe.load(this.container.attr("data_video_id"));this.dropdown_module=new pe.DropdownModule(a,this.dropdown_html(),this.callback(this.title_html),!1);this.dropdown_module.bind_event(pe.DropdownModule.events.CHANGED,this.callback(this.dropdown_changed));(a=this.container.attr("data_default_value"))&&this.dropdown_module.set_default_selection(".Choice[data='"+a+"']")};pe.VideoStatusSelect.events={CHANGED:"VideoStatusSelect_CHANGED"};
pe.VideoStatusSelect.prototype.dropdown_html=function(){return'<div class="Choice choice" data="live">live</div><div class="Choice choice" data="disabled">disabled</div>'};pe.VideoStatusSelect.prototype.dropdown_changed=function(a,b){$.ajax({url:"/admin/videos/"+this.video_id+".json",type:"PUT",data:{status:this.result_value(b)}})};pe.VideoStatusSelect.prototype.title_html=function(a){return a?"selecting"===a?"Click your choice!":a.html():"video status"};
pe.VideoStatusSelect.prototype.result_value=function(a){if(!a)return"";a=$(a).attr("data");return"string"===typeof a?a:""};pe.VideoStatusSelect.prototype.val=function(a){if(a)this.dropdown_module.val(pe.load(this.container.find('.Choice[data="'+a+'"]')));else return this.result_value(this.dropdown_module.val())};
(function(a){a.fn.editable=function(b,d){if("disable"==b)a(this).data("disabled.editable",!0);else if("enable"==b)a(this).data("disabled.editable",!1);else if("destroy"==b)a(this).unbind(a(this).data("event.editable")).removeData("disabled.editable").removeData("event.editable");else{var c=a.extend({},a.fn.editable.defaults,{target:b},d),e=a.editable.types[c.type].plugin||function(){},f=a.editable.types[c.type].submit||function(){},k=a.editable.types[c.type].buttons||a.editable.types.defaults.buttons,
j=a.editable.types[c.type].content||a.editable.types.defaults.content,p=a.editable.types[c.type].element||a.editable.types.defaults.element,n=a.editable.types[c.type].reset||a.editable.types.defaults.reset,o=c.callback||function(){},q=c.onedit||function(){},r=c.onsubmit||function(){},s=c.onreset||function(){},t=c.onerror||n;c.tooltip&&a(this).attr("title",c.tooltip);c.autowidth="auto"==c.width;c.autoheight="auto"==c.height;return this.each(function(){var b=this,d=a(b).width(),u=a(b).height();a(this).data("event.editable",
c.event);a.trim(a(this).html())||a(this).html(c.placeholder);a(this).bind(c.event,function(i){if(!0!==a(this).data("disabled.editable")&&!b.editing&&!1!==q.apply(this,[c,b])){i.preventDefault();i.stopPropagation();c.tooltip&&a(b).removeAttr("title");if(0==a(b).width())c.width=d,c.height=u;else if("none"!=c.width&&(c.width=c.autowidth?a(b).width():c.width),"none"!=c.height)c.height=c.autoheight?a(b).height():c.height;a(this).html().toLowerCase().replace(/(;|")/g,"")==c.placeholder.toLowerCase().replace(/(;|")/g,
"")&&a(this).html("");b.editing=!0;b.revert=a(b).html();a(b).html("");var g=a("<form />");c.cssclass&&("inherit"==c.cssclass?g.attr("class",a(b).attr("class")):g.attr("class",c.cssclass));c.style&&("inherit"==c.style?(g.attr("style",a(b).attr("style")),g.css("display",a(b).css("display"))):g.attr("style",c.style));var h=p.apply(g,[c,b]),l;if(c.loadurl){var m=setTimeout(function(){h.disabled=true;j.apply(g,[c.loadtext,c,b])},100),i={};i[c.id]=b.id;a.isFunction(c.loaddata)?a.extend(i,c.loaddata.apply(b,
[b.revert,c])):a.extend(i,c.loaddata);a.ajax({type:c.loadtype,url:c.loadurl,data:i,async:!1,success:function(a){window.clearTimeout(m);l=a;h.disabled=false}})}else c.data?(l=c.data,a.isFunction(c.data)&&(l=c.data.apply(b,[b.revert,c]))):l=b.revert;j.apply(g,[l,c,b]);h.attr("name",c.name);k.apply(g,[c,b]);a(b).append(g);e.apply(g,[c,b]);a(":input:visible:enabled:first",g).focus();c.select&&h.select();h.keydown(function(a){if(a.keyCode==27){a.preventDefault();n.apply(g,[c,b])}});"cancel"==c.onblur?
h.blur(function(){m=setTimeout(function(){n.apply(g,[c,b])},500)}):"submit"==c.onblur?h.blur(function(){m=setTimeout(function(){g.submit()},200)}):a.isFunction(c.onblur)?h.blur(function(){c.onblur.apply(b,[h.val(),c])}):h.blur(function(){});g.submit(function(d){m&&clearTimeout(m);d.preventDefault();if(false!==r.apply(g,[c,b])&&false!==f.apply(g,[c,b]))if(a.isFunction(c.target)){d=c.target.apply(b,[h.val(),c]);a(b).html(d);b.editing=false;o.apply(b,[b.innerHTML,c]);a.trim(a(b).html())||a(b).html(c.placeholder)}else{d=
{};d[c.name]=h.val();d[c.id]=b.id;a.isFunction(c.submitdata)?a.extend(d,c.submitdata.apply(b,[b.revert,c])):a.extend(d,c.submitdata);"PUT"==c.method&&(d._method="put");a(b).html(c.indicator);var e={type:"POST",data:d,dataType:"html",url:c.target,success:function(d){e.dataType=="html"&&a(b).html(d);b.editing=false;o.apply(b,[d,c]);a.trim(a(b).html())||a(b).html(c.placeholder)},error:function(a){t.apply(g,[c,b,a])}};a.extend(e,c.ajaxoptions);a.ajax(e)}a(b).attr("title",c.tooltip);return false})}});
this.reset=function(d){this.editing&&!1!==s.apply(d,[c,b])&&(a(b).html(b.revert),b.editing=!1,a.trim(a(b).html())||a(b).html(c.placeholder),c.tooltip&&a(b).attr("title",c.tooltip))}})}};a.editable={types:{defaults:{element:function(){var b=a('<input type="hidden"></input>');a(this).append(b);return b},content:function(b){a(":input:first",this).val(b)},reset:function(a,d){d.reset(this)},buttons:function(b,d){var c=this;if(b.submit){if(b.submit.match(/>$/))var e=a(b.submit).click(function(){"submit"!=
e.attr("type")&&c.submit()});else e=a('<button type="submit" />'),e.html(b.submit);a(this).append(e)}if(b.cancel){if(b.cancel.match(/>$/))var f=a(b.cancel);else f=a('<button type="cancel" />'),f.html(b.cancel);a(this).append(f);a(f).click(function(){(a.isFunction(a.editable.types[b.type].reset)?a.editable.types[b.type].reset:a.editable.types.defaults.reset).apply(c,[b,d]);return!1})}}},text:{element:function(b){var d=a("<input />");"none"!=b.width&&d.width(b.width);"none"!=b.height&&d.height(b.height);
d.attr("autocomplete","off");a(this).append(d);return d}},textarea:{element:function(b){var d=a("<textarea />");b.rows?d.attr("rows",b.rows):"none"!=b.height&&d.height(b.height);b.cols?d.attr("cols",b.cols):"none"!=b.width&&d.width(b.width);a(this).append(d);return d}},select:{element:function(){var b=a("<select />");a(this).append(b);return b},content:function(b,d,c){if(String==b.constructor)eval("var json = "+b);else var e=b;for(var f in e)e.hasOwnProperty(f)&&"selected"!=f&&(b=a("<option />").val(f).append(e[f]),
a("select",this).append(b));a("select",this).children().each(function(){(a(this).val()==e.selected||a(this).text()==a.trim(c.revert))&&a(this).attr("selected","selected")})}}},addInputType:function(b,d){a.editable.types[b]=d}};a.fn.editable.defaults={name:"value",id:"id",type:"text",width:"auto",height:"auto",event:"click.editable",onblur:"cancel",loadtype:"GET",loadtext:"Loading...",placeholder:"Click to edit",loaddata:{},submitdata:{},ajaxoptions:{}}})(jQuery);
$(document).ready(function(){new pe.CommentsSection($(".CommentsContainer"),window.videoable_path);$(".CurrentVideos li").each(function(a,b){new pe.ExistingVideo($(b))});pe.search_query_input=$(".SearchQuery");pe.search_query_input.keyup(pe.search_query_keyup);pe.search_results_div=$(".SearchResults");pe.search_button=$(".SearchButton");pe.search_button.click(pe.search);pe.found_channels_div=$(".FoundChannels");pe.current_channels_div=$(".CurrentChannels");pe.current_channels_div.click(pe.unsubscribe_clicked);
pe.current_videos_div=$(".CurrentVideos");pe.make_sortable();pe.init_page_framework()});pe.make_sortable=function(){$(".CurrentVideos, .SearchResults").sortable({connectWith:".ConnectedSortable",placeholder:"placeholder",forcePlaceholderSize:!0})};
pe.search=function(){pe.search_button.hide();var a=pe.search_query_input.val();a?$.ajax({data:{query:a,sort:$("input[name=search_sort]:checked").val()},dataType:"json",url:window.videoable_path+"/videos/search_youtube",type:"GET",success:pe.search_success}):alert("Please enter a search query")};pe.search_query_keyup=function(a){13===a.keyCode&&pe.search()};
pe.search_success=function(a){pe.search_button.show();pe.search_results_div.html(a.videos);pe.make_sortable();pe.search_results_div.find("img").click(pe.video_image_clicked);pe.found_channels_div.html(a.channels);pe.found_channels_div.find(".Subscribe").click(pe.subscribe_button_clicked)};
pe.subscribe_button_clicked=function(a){a=$(a.target).closest(".YoutubeChannel").attr("data_youtube_id");$.ajax({data:{channel_id:a},dataType:"json",url:window.videoable_path+"/youtube_channels/subscribe.json",type:"POST",success:pe.subscribe_success})};pe.subscribe_success=function(a){pe.current_channels_div.html(a.current_channels);pe.current_videos_div.html(a.current_videos);pe.found_channels_div.html("");pe.search_results_div.html("")};
pe.unsubscribe_clicked=function(a){a=$(a.target).closest(".Channel").attr("data_youtube_id");$.ajax({data:{id:a},dataType:"json",url:window.videoable_path+"/youtube_channels/unsubscribe",type:"POST",success:pe.unsubscribe_success})};pe.unsubscribe_success=function(a){pe.current_channels_div.html(a.current_channels)};
pe.video_image_clicked=function(a){var a=$(a.target).closest("li"),b=a.find(".YoutubeId").val();a.find(".Image").html('<iframe title="YouTube video player" width="560" height="349" src="http://www.youtube.com/embed/'+b+'?autoplay=1" frameborder="0" allowfullscreen></iframe>')};
