pe.CharacterSelect=function(a,b){pe.init_widget(this,a);this.container.html(pe.CharacterSelect.images_html(b));this.container.find(".Lucas").addClass("selected");this.container.click(this.callback(this.image_clicked))};pe.CharacterSelect.events={CLICKED:"CharacterSelect_CLICKED"};
pe.CharacterSelect.images_html=function(a){return'<div class="character_select_wrapper"><div class="character lucas float_left Lucas" title="Check out Lucas\' overall impression of '+a+'." data="Lucas"></div><div class="character adriana float_right" title="Check out Adriana\'s overall impression of '+a+'." data="Adriana"></div><div class="character jonah float_left" title="Check out Jonah\'s overall impression of '+a+'." data="Jonah"></div><div class="character emma float_right" title="Check out Emma\'s overall impression of '+
a+'." data="Emma"></div></div> '};pe.CharacterSelect.prototype.image_clicked=function(a){var b=$(a.target),c=b.attr("data");if("undefined"===typeof c)return a.stopPropagation(),!1;this.container.find(".selected").removeClass("selected");b.addClass("selected");this.fire_event(pe.CharacterSelect.events.CLICKED,c);a.stopPropagation()};
pe.CharacterDivSelect=function(a,b){pe.init_widget(this,a);this.container.find(".Content").hide();this.container.find(".Lucas").show();this.character_select=new pe.CharacterSelect(this.container.find(".CharacterSelect"),b);this.character_select.bind_event(pe.CharacterSelect.events.CLICKED,this.callback(this.change_div))};pe.CharacterDivSelect.prototype.change_div=function(a,b){"undefined"!==typeof b&&(this.container.find(".Content").hide(),this.container.find("."+b).show())};
pe.ReadMore=function(a,b,c){0<a.length&&(pe.init_widget(this,a),this.read_more_control=this.container.find(".ReadMoreControl"),this.read_less_control=this.container.find(".ReadLessControl"),this.read_more_link=this.container.find(".ReadMoreLink"),this.read_more_link.click(this.callback(this.on_read_more_link_clicked)),this.read_less_link=this.container.find(".ReadLessLink"),this.read_less_link.click(this.callback(this.on_read_less_link_clicked)),this.long_description=this.container.find(".LongDescription"),
this.thumbs=this.container.find(".thumbnails"),this.photos=this.container.find(".photo"),this.read_more_handler=b,this.read_less_handler=c)};pe.ReadMore.events={LONG_DESC_OPENED:"ReadMore_LONG_DESC_OPENED"};
pe.ReadMore.prototype.on_read_more_link_clicked=function(){this.long_description.removeClass("clipped");this.read_less_control.show();this.read_more_control.hide();this.thumbs.addClass("hidden");this.photos.removeClass("hidden");pe.fire_global_event(pe.ReadMore.events.LONG_DESC_OPENED);"function"===typeof this.read_more_handler&&this.read_more_handler()};
pe.ReadMore.prototype.on_read_less_link_clicked=function(){this.read_less_control.hide();this.read_more_control.show();this.thumbs.removeClass("hidden");this.photos.addClass("hidden");this.long_description.addClass("clipped");"function"===typeof this.read_less_handler&&this.read_less_handler()};pe.ReadMore.instantiate=function(){return $.map($(".ReadMore"),function(a){return new pe.ReadMore($(a))})};
pe.PhotoModule=function(a,b,c,f,e,g){pe.init_widget(this,a);this.container.html(this.dom(c));this.slide_show_div=this.container.find(".SlideShow");this.slide_show_div.html(this.render_photos(b,f,e,g));0<b.length&&(this.slide_show_div.addClass("slider"),this.slide_show_div.nivoSlider({effect:"slideInRight",startSlide:0,animSpeed:70,pauseTime:0,directionNav:1<b.length,directionNavHide:!0,controlNav:!1,keyboardNav:!0,manualAdvance:!0}))};
pe.PhotoModule.prototype.dom=function(a){return'<div class="SlideShow '+a+'"></div>'};
pe.PhotoModule.prototype.render_photos=function(a,b,c,f){var e="";if(0===a.length)e+='<img src="'+pe.https(pe.assign_photo_size("",b,c))+'" alt="" title="">';else{var g=this,h=a.length;$.each(a,function(a,d){d.photo=pe.https(pe.assign_photo_size(d.src,b,c));d.position=a+1+" of "+h;d.title_div="title_div_"+f+"_"+a;d.photo_caption_container=""===d.title?"":'<div class="photo_caption float_left"><span class="text float_left">'+d.title+'</span><div class="line_divider"></div></div>';g.container.append(pe.templatize('<div id="{{title_div}}" class="nivo-html-caption"><table width="100%" cellpadding="0" cellspacing="0"><tbody><tr><td width="90%">{{photo_caption_container}}</td><td valign="bottom"><div class="photo_number float_right"><span class="text"><nobr>{{position}}</nobr></span><div></td></tr></tbody></table></div>',
d));e=d.url?e+pe.templatize('<a href="{{url}}"><img src="{{photo}}" alt="" title="#{{title_div}}"/></a>',d):e+pe.templatize('<img src="{{photo}}" alt="" title="#{{title_div}}"/>',d)})}return e};pe.HelpModule=function(a,b,c){pe.init_widget(this,a);this.help_module_open=!1;this.help_id=b;this.container.append(this.html(c));this.container.click(this.callback(this.help_button_clicked));this.help_button_div=this.container.find(".HelpButton");(this.admin_link=this.container.find(".AdminLink"))&&this.admin_link.click(this.callback(this.admin_link_clicked))};
pe.HelpModule.prototype.html=function(a){var b="";0===this.container.contents().length&&(b+='<div class="help_btn HelpButton"></div>');a&&(b+='<div><a class="AdminLink admin_edit" target="_blank" href="/admin/pages/'+this.help_id+'/edit">Edit Tip</a></div>');return b};pe.HelpModule.prototype.admin_link_clicked=function(a){a.stopPropagation()};
pe.HelpModule.prototype.help_button_clicked=function(a){this.help_module_open?a.stopPropagation():pe.ajax_loader.help_page.load({page_id:this.help_id,timestamp:pe.pages_timestamp()},this.callback(function(a){a=$(this.dialog_box_html(a));this.help_button_div.append(a);this.help_module_open=!0;new pe.CloseButton(a,this.callback(this.close_dialog,a))}))};
pe.HelpModule.prototype.dialog_box_html=function(a){return pe.templatize('<div class="DialogBox dialog_box"><div class="dialog_content_wrapper clearfix"><div class="CloseButton close_btn" title="Close"></div><div class="dialog_img"></div><div class="dialog_content"> <h1>{{title}}</h1>{{content}}</div></div></div><div class="dialog_point"><div class="dialog_inner_point"></div></div>',a)};pe.HelpModule.prototype.close_dialog=function(a,b){this.help_module_open=!1;a.remove();b.stopPropagation()};
$(document).ready(function(){pe.ReadMore.instantiate();pe.ajax_loader.city_photos.load({city_id:window.city_data.id,timestamp:pe.photos_timestamp()},function(a){new pe.PhotoModule($(".PhotoSlideShow"),a,"width334","334","334x252","party_climate")});setTimeout(function(){pe.init_page_framework()},10)});
