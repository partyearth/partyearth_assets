pe.ReadMore=function(e,t,i){0<e.length&&(pe.init_widget(this,e),this.read_more_control_selector=".ReadMoreControl",this.read_more_control=this.container.find(this.read_more_control_selector),this.read_less_control_selector=".ReadLessControl",this.read_less_control=this.container.find(this.read_less_control_selector),this.read_more_link=this.container.find(".ReadMoreLink"),this.read_more_link.click(this.callback(this.on_read_more_link_clicked)),this.read_less_link=this.container.find(".ReadLessLink"),this.read_less_link.click(this.callback(this.on_read_less_link_clicked)),this.long_description_selector=".LongDescription",this.long_description=this.container.find(this.long_description_selector),this.thumbs_selector=".thumbnails",this.thumbs=this.container.find(this.thumbs_selector),this.photos_selector=".photo",this.photos=this.container.find(this.photos_selector),this.read_more_handler=t,this.read_less_handler=i)},pe.ReadMore.events={LONG_DESC_OPENED:"ReadMore_LONG_DESC_OPENED"},pe.ReadMore.instantiate_all=function(){var e=$(".ReadMore");0<e.length&&new pe.ReadMore(e)},pe.ReadMore.prototype.on_read_more_link_clicked=function(e){this.expand_section($(e.currentTarget).closest(this.container.selector)),pe.fire_global_event(pe.ReadMore.events.LONG_DESC_OPENED),"function"==typeof this.read_more_handler&&this.read_more_handler()},pe.ReadMore.prototype.expand_section=function(e){0<e.length?(e.find(this.long_description_selector).removeClass("clipped"),e.find(this.read_less_control_selector).show(),e.find(this.read_more_control_selector).hide(),e.find(this.thumbs_selector).addClass("hidden"),e.find(this.photos_selector).removeClass("hidden")):(this.long_description.removeClass("clipped"),this.read_less_control.show(),this.read_more_control.hide(),this.thumbs.addClass("hidden"),this.photos.removeClass("hidden"))},pe.ReadMore.prototype.collapse_section=function(e){0<e.length?(e.find(this.read_less_control_selector).hide(),e.find(this.read_more_control_selector).show(),e.find(this.thumbs_selector).removeClass("hidden"),e.find(this.photos_selector).addClass("hidden"),e.find(this.long_description_selector).addClass("clipped")):(this.read_less_control.hide(),this.read_more_control.show(),this.thumbs.removeClass("hidden"),this.photos.addClass("hidden"),this.long_description.addClass("clipped"))},pe.ReadMore.prototype.on_read_less_link_clicked=function(e){this.collapse_section($(e.currentTarget).closest(this.container.selector)),"function"==typeof this.read_less_handler&&this.read_less_handler()},pe.ReadMore.instantiate=function(){return $.map($(".ReadMore"),function(e){return new pe.ReadMore($(e))})},pe.PhotoModule=function(e,t,i,o,s,n){pe.init_widget(this,e),this.container.html(this.dom(i)),this.slide_show_div=this.container.find(".SlideShow"),this.slide_show_div.html(this.render_photos(t,o,s,n)),0<t.length&&(this.slide_show_div.addClass("slider"),this.slide_show_div.nivoSlider({effect:"slideInRight",startSlide:0,animSpeed:70,pauseTime:0,directionNav:1<t.length,directionNavHide:!0,controlNav:!1,keyboardNav:!0,manualAdvance:!0}))},pe.PhotoModule.prototype.dom=function(e){return'<div class="SlideShow '+e+'"></div>'},pe.PhotoModule.prototype.render_photos=function(e,o,s,n){var l="";if(0===e.length)l+='<img src="'+pe.https(pe.assign_photo_size("",o,s))+'" alt="" title="">';else{var d=this,a=e.length;$.each(e,function(e,t){t.photo=pe.https(pe.assign_photo_size(t.src,o,s)),t.position=e+1+" of "+a,t.title_div="title_div_"+n+"_"+e,t.photo_caption_container=""===t.title?"":'<div class="photo_caption float_left"><span class="text float_left">'+t.title+'</span><div class="line_divider"></div></div>',d.container.append(pe.templatize('<div id="{{title_div}}" class="nivo-html-caption"><table width="100%" cellpadding="0" cellspacing="0"><tbody><tr><td width="90%">{{photo_caption_container}}</td><td valign="bottom"><div class="photo_number float_right"><span class="text"><nobr>{{position}}</nobr></span><div></td></tr></tbody></table></div>',t));var i='<img src="{{photo}}" alt="" title="#{{title_div}}"/>';t.url?l+=pe.templatize('<a href="{{url}}">'+i+"</a>",t):l+=pe.templatize(i,t)})}return l},pe.HelpModule=function(e,t,i){pe.init_widget(this,e),this.help_module_open=!1,this.help_id=t,this.container.append(this.html(i)),this.container.click(this.callback(this.help_button_clicked)),this.help_button_div=this.container.find(".HelpButton"),this.admin_link=this.container.find(".AdminLink"),this.admin_link&&this.admin_link.click(this.callback(this.admin_link_clicked))},pe.HelpModule.prototype.html=function(e){var t="";return 0===this.container.contents().length&&(t+='<div class="help_btn HelpButton"></div>'),e&&(t+='<div><a class="AdminLink admin_edit" target="_blank" href="/admin/pages/'+this.help_id+'/edit">Edit Tip</a></div>'),t},pe.HelpModule.prototype.admin_link_clicked=function(e){e.stopPropagation()},pe.HelpModule.prototype.help_button_clicked=function(e){this.help_module_open?e.stopPropagation():pe.ajax_loader.help_page.load({page_id:this.help_id},this.callback(function(e){var t=$(this.dialog_box_html(e));this.help_button_div.append(t),this.help_module_open=!0,new pe.CloseButton(t,this.callback(this.close_dialog,t))}))},pe.HelpModule.prototype.dialog_box_html=function(e){return pe.templatize('<div class="DialogBox dialog_box"><div class="dialog_content_wrapper clearfix"><div class="CloseButton close_btn" title="Close"></div><div class="dialog_img"></div><div class="dialog_content"> <h1>{{title}}</h1>{{content}}</div></div></div><div class="dialog_point"><div class="dialog_inner_point"></div></div>',e)},pe.HelpModule.prototype.close_dialog=function(e,t){this.help_module_open=!1,e.remove(),t.stopPropagation()},$(document).ready(function(){pe.ReadMore.instantiate(),pe.ajax_loader.city_photos.load({city_id:window.city_data.id},function(e){new pe.PhotoModule($(".PhotoSlideShow"),e,"width334","334","334x252","party_climate")}),setTimeout(function(){pe.init_page_framework()},10)});