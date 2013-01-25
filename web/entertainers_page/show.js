pe.init_calendar_buttons=function(){new pe.AddToCalendarButton};pe.AddToCalendarButton=function(){pe.init_widget(this,null);$(".AddToCalendarButton").live("click",this.callback(this.show_dialog))};pe.AddToCalendarButton.prototype.close_dialog=function(){};
pe.AddToCalendarButton.prototype.show_dialog=function(a){var b=$('<div title="Add to your calendar">'),c=function(){b.empty();b.dialog("destroy")};b.dialog({modal:!0,show:!1,close:c});b.html('<div style="margin:0 auto; width: 80px;"><img src="/assets/content_bg/spinner.gif"/></div>');a=$(a.currentTarget);pe.ajax_loader.add_to_calendar_dialog.load({event_id:a.data("event_id"),date:a.data("date")},function(a){b.html(a);b.find("a").click(c)});return!1};
pe.Scroller=function(a,b,c,d,e,f,g,h){pe.init_widget(this,a);this.scroller_container=this.container.find(".ScreensContainer");this.current_item=0;this.scroll_duration=b;this.inactive_button_class=c;this.visible_items_count=d||1;this.scroll_by=e||1;this.single_item_width=f;this.individual_items=this.scroller_container.find(".IndividualItem");this.items_count=this.individual_items.length;this.next_button=this.container.find(".NextButton");this.next_button.click(this.callback(this.next_button_clicked));
this.previous_button=this.container.find(".PreviousButton");this.previous_button.click(this.callback(this.previous_button_clicked));this.page_display_container=this.container.find(".PageDisplay");this.page_display_format=g||"";this.loop_scrolling=h||!1;this.update_display()};
pe.Scroller.prototype.animate_scrolling=function(a){a!=this.current_item&&(this.current_item=a,this.scroller_container.animate({left:"-"+this.current_item*(this.single_item_width||this.individual_items.width())+"px"},this.scroll_duration,"cubicEaseInOut"),this.update_display())};
pe.Scroller.prototype.update_display=function(){0>=this.current_item?this.previous_button.addClass(this.inactive_button_class):this.previous_button.removeClass(this.inactive_button_class);this.current_item>=this.items_count-this.visible_items_count?this.next_button.addClass(this.inactive_button_class):this.next_button.removeClass(this.inactive_button_class);this.page_display_container.html(pe.templatize(this.page_display_format,{current_item_number:this.current_item+1,items_count:this.items_count}))};
pe.Scroller.prototype.next_button_clicked=function(){var a=this.current_item+this.scroll_by;a>this.items_count-this.visible_items_count&&(a=this.loop_scrolling?0:this.items_count-this.visible_items_count);this.animate_scrolling(a)};pe.Scroller.prototype.previous_button_clicked=function(){var a=this.current_item-this.scroll_by;0>a&&(a=this.loop_scrolling?this.items_count-this.visible_items_count:0);this.animate_scrolling(a)};
pe.ChangeImageOnHover=function(a,b){pe.init_widget(this,a);this.image_container=this.container.find(".ImageContainer");this.link_parent_class=b||null;this.include_caption=this.container.data("include-caption")||!1;this.object_links=this.container.find(".HoverLinkToChange");this.object_links.mouseover(this.callback(this.object_link_hovered));var c=b?this.container.find("."+b):[];this.link_wrappers=0<c.length?c:this.object_links.parent()};
pe.ChangeImageOnHover.prototype.image_html=function(a){var b='<a href="{{object_url}}" title="{{link_title}}" class="thumbnail_link"><img src="{{image_url}}" alt="{{alt_tag}}"></a>';this.include_caption&&(b+='<p class="name"><span class="date">{{link_prefix}}</span><a href="{{object_url}}">{{image_caption}}</a></p>');a={object_url:a.attr("href"),image_url:a.data("image-url"),link_title:a.data("title")||"",alt_tag:a.data("image-alt-tag")||"",link_prefix:a.data("link-prefix")||"",image_caption:a.html()};
return pe.templatize(b,a)};pe.ChangeImageOnHover.instantiate_all=function(a){return $.map($(".ChangeImageOnHoverContainer"),function(b){return new pe.ChangeImageOnHover($(b),a)})};pe.ChangeImageOnHover.prototype.object_link_hovered=function(a){a=$(a.target);this.object_links.removeClass("selected");this.link_wrappers.removeClass("selected");a.addClass("selected");this.link_wrapper(a).addClass("selected");this.image_container.html(this.image_html(a));pe.convert_to_rounded_corners()};
pe.ChangeImageOnHover.prototype.link_wrapper=function(a){return this.link_parent_class?a.closest("."+this.link_parent_class):a.parent()};pe.PrefetcherModule=function(a){pe.init_widget(this,a);this.elements_with_prefetch_urls=this.container.find("[data-prefetch-url]");this.prefetch_data()};pe.PrefetcherModule.instantiate=function(){return new pe.PrefetcherModule($("body"))};pe.PrefetcherModule.prototype.is_image_url=function(a){return/\.(jpe?g|gif|png)(\?.*)?$/i.test(a)};
pe.PrefetcherModule.prototype.prefetch_ajax_request=function(a){$.getScript(a)};pe.PrefetcherModule.prototype.prefetch_data=function(){$.each(this.elements_with_prefetch_urls,this.callback(function(a,b){var b=$(b),c=b.data("prefetch-url");this.is_image_url(c)?this.prefetch_image(c):this.prefetch_ajax_request(c);b.removeAttr("data-prefetch-url")}))};pe.PrefetcherModule.prototype.prefetch_image=function(a){this.container.append(pe.templatize('<div style="display:none;"><img src="{{url}}"></div>',{url:a}))};
pe.ServersidePaginator=function(a,b){pe.init_widget(this,a);this.current_page_number=0;this.loader=new pe.ajax_loader.MultiLoader(b,pe.ajax_loader.Loader.data_types.EHTML);this.objects_list=pe.load(this.container.find(".ObjectsList"));this.previous_button=pe.load(this.container.find(".PrevButton"));this.previous_button.click(this.callback(this.previous_button_clicked));this.next_button=pe.load(this.container.find(".NextButton"));this.next_button.click(this.callback(this.next_button_clicked));this.current_page_number_display=
pe.load(this.container.find(".CurrentPageNumber"));this.max_page_number_display=pe.load(this.container.find(".MaxPageNumber"));this.max_page_number=parseInt(this.max_page_number_display.text(),10);this.update_buttons();pe.convert_to_rounded_corners(this.objects_list.find(".ConvertToRoundedCorners"))};pe.ServersidePaginator.events={PAGE_CHANGED:"ServersidePaginator_PAGE_CHANGED"};
pe.ServersidePaginator.prototype.destroy=function(){this.previous_button.unbind("click");this.next_button.unbind("click");this.current_page_number_display=this.next_button=this.previous_button=this.objects_list=this.loader=null};
pe.ServersidePaginator.prototype.show_page=function(a){this.current_page_number=a;this.current_page_number_display.html((a+1).toString());this.update_buttons();this.loader.load(a.toString(),this.callback(function(a){this.objects_list.html(a);this.fire_event(pe.ServersidePaginator.events.PAGE_CHANGED);pe.convert_to_rounded_corners(this.objects_list.find(".ConvertToRoundedCorners"));""===a&&this.current_page_number_display.html("0")}))};
pe.ServersidePaginator.prototype.next_button_clicked=function(a){this.current_page_number>=this.max_page_number-1?a.stopPropagation():this.show_page(this.current_page_number+1)};pe.ServersidePaginator.prototype.previous_button_clicked=function(a){0===this.current_page_number?a.stopPropagation():this.show_page(this.current_page_number-1)};
pe.ServersidePaginator.prototype.update_buttons=function(){0===this.current_page_number?(this.previous_button.addClass("disabled"),2>this.max_page_number?this.next_button.addClass("disabled"):this.next_button.removeClass("disabled")):this.current_page_number>=this.max_page_number-1?(this.previous_button.removeClass("disabled"),this.next_button.addClass("disabled")):(this.previous_button.removeClass("disabled"),this.next_button.removeClass("disabled"))};
pe.TweetSection=function(a,b,c,d){pe.init_widget(this,a);this.tweets_display=a.find(".Tweets");this.live_update_url=b+".ehtml";d&&this.update_tweets();this.tweet_update_delay=10;this.paginator=c?new pe.ServersidePaginator(a,c+"?page={{id}}"):null};pe.TweetSection.prototype.update_tweets=function(){$.ajax({url:this.live_update_url,type:"GET",dataType:"text",success:this.callback(this.update_tweets_success)})};
pe.TweetSection.prototype.update_tweets_success=function(a){"later"===a?(setTimeout(this.callback(function(){this.update_tweets()}),1E3*this.tweet_update_delay),this.tweet_update_delay*=2):this.tweets_display.html(a)};
pe.ReadMore=function(a,b,c){0<a.length&&(pe.init_widget(this,a),this.read_more_control=this.container.find(".ReadMoreControl"),this.read_less_control=this.container.find(".ReadLessControl"),this.read_more_link=this.container.find(".ReadMoreLink"),this.read_more_link.click(this.callback(this.on_read_more_link_clicked)),this.read_less_link=this.container.find(".ReadLessLink"),this.read_less_link.click(this.callback(this.on_read_less_link_clicked)),this.long_description=this.container.find(".LongDescription"),
this.thumbs=this.container.find(".thumbnails"),this.photos=this.container.find(".photo"),this.read_more_handler=b,this.read_less_handler=c)};pe.ReadMore.events={LONG_DESC_OPENED:"ReadMore_LONG_DESC_OPENED"};
pe.ReadMore.prototype.on_read_more_link_clicked=function(){this.long_description.removeClass("clipped");this.read_less_control.show();this.read_more_control.hide();this.thumbs.addClass("hidden");this.photos.removeClass("hidden");pe.fire_global_event(pe.ReadMore.events.LONG_DESC_OPENED);"function"===typeof this.read_more_handler&&this.read_more_handler()};
pe.ReadMore.prototype.on_read_less_link_clicked=function(){this.read_less_control.hide();this.read_more_control.show();this.thumbs.removeClass("hidden");this.photos.addClass("hidden");this.long_description.addClass("clipped");"function"===typeof this.read_less_handler&&this.read_less_handler()};pe.ReadMore.instantiate=function(){return $.map($(".ReadMore"),function(a){return new pe.ReadMore($(a))})};
pe.CloseButton=function(a,b){pe.init_widget(this,a);this.close_button=a.find(".CloseButton");if("function"===typeof b)this.close_button.click(b);else switch(b){case pe.CloseButton.close_methods.REMOVE:this.close_button.click(this.callback(this.remove_container));break;case pe.CloseButton.close_methods.HIDE:this.close_button.click(this.callback(this.hide_container));break;default:alert("unknown value for 'close_method' parameter.")}};pe.CloseButton.close_methods={REMOVE:"REMOVE",HIDE:"HIDE"};
pe.CloseButton.events={CLOSED:"CloseButton_CLOSED"};pe.CloseButton.prototype.remove_container=function(){this.container.detach();this.fire_event(pe.CloseButton.events.CLOSED);this.container.remove();return!1};pe.CloseButton.prototype.hide_container=function(){this.fire_event(pe.CloseButton.events.CLOSED);this.container.hide();return!1};
pe.BottombarPopupModule=function(a,b,c,d,e,f){pe.BottombarPopupModule.active_popup&&pe.BottombarPopupModule.active_popup.close();a.append(this.html(b,e,f));pe.init_widget(this,a.find("."+b));this.container.attr("height",d);this.container.attr("width",c);this.parent_container=a;a=this.parent_container.attr("title");this.parent_container_link_title="string"===typeof a?a:"";this.form_container=this.container.find(".FormContainer");pe.BottombarPopupModule.active_popup=this;this.close_button=new pe.CloseButton(this.container,
pe.CloseButton.close_methods.REMOVE);this.close_button.bind_event(pe.CloseButton.events.CLOSED,this.callback(this.closed));this.container.hover(this.callback(this.mouse_enter),this.callback(this.mouse_leave));this.container.click(this.callback(this.popup_element_clicked))};pe.BottombarPopupModule.prototype.html=function(a,b,c){return'<div class="'+a+'">  <div class="CloseButton fake_link"></div>  <div class="title headline">'+b+'</div>  <div class="FormContainer">'+c+'</div>  <div class="bottom_arrow"></div></div>'};
pe.BottombarPopupModule.prototype.closed=function(){pe.BottombarPopupModule.active_popup&&pe.BottombarPopupModule.active_popup.mouse_leave();pe.BottombarPopupModule.active_popup=null};pe.BottombarPopupModule.prototype.close=function(){this.close_button.remove_container();this.closed();return!1};pe.BottombarPopupModule.prototype.mouse_enter=function(){this.parent_container.attr("title","")};pe.BottombarPopupModule.prototype.mouse_leave=function(){this.parent_container.attr("title",this.parent_container_link_title)};
pe.BottombarPopupModule.prototype.show_thank_you=function(a){this.form_container.html(this.thank_you_html(a))};pe.BottombarPopupModule.prototype.thank_you_html=function(a){return"<div>  <p>"+a+"</p></div>"};pe.BottombarPopupModule.prototype.popup_element_clicked=function(a){a.stopPropagation()};pe.validation={};pe.validatables=[];pe.validation.autocomplete_open=!1;pe.validate_on_key_up=function(a,b){a.keyup(function(){b(a)});a.val()&&b(a);return a};
pe.validate_on_blur=function(a,b,c){a.blur(function(){b(a)});!c&&a.val()&&b(a);return a};pe.validate_on_change=function(a,b,c){a.change(function(){b(a)});!c&&a.val()&&b(a);return a};
pe.validate_before_submit=function(a){a.submit(function(){pe.validation.clear_error_messages(a);a.find("input").each(function(a,b){var c=$(b);c.data("text_entered",!0);c.keyup();c.blur()});a.find("select").each(function(a,b){var c=$(b);c.data("text_entered",!0);c.change()});a.find("textarea").each(function(a,b){var c=$(b);c.data("text_entered",!0);c.keyup();c.blur()});var b=!0;$.each(pe.validatables,function(a,c){b=c.validate_on_submit()&&b});if(0<a.find(".inline-errors").length||!b){var c=a.find(".inline-errors:first").parent(),
d=c.find("input:first");0<d.length?d.is(":hidden")?(d.show(),d.focus(),d.hide()):d.focus():(d=c.find("textarea"),c=c.find('select option:selected[value=""]').parent(),d&&d.focus(),c&&c.focus());return!1}})};
pe.validate_user_exists=function(a,b){form=$(a.parents("form")[0]);form.submit(function(){pe.validation.clear_error_messages(form);$.post("/api/users/check_user_exists",{login:a.val(),password:b.val()},function(c){pe.validation.show_message(a,c.username);pe.validation.show_message(b,c.password);_.isEmpty(c)&&(form.unbind("submit"),form.submit())});return!1})};pe.validation.clear_error_messages=function(a){pe.validation.find_error_messages(a).remove()};pe.validation.find_error_messages=function(a){return a.find(".inline-errors")};
pe.validation.show_message=function(a,b){a.parent().find(".inline-errors,img").remove();b?a.after('<span class="inline-errors">'+b+"</span>"):a.after('<img src="/assets/users/check.png" />')};pe.validation.is_more_than_5_words=function(a){return!!a.match(/(\w+\s+){5}\w+/)};pe.validation.is_single_non_character=function(a){return!a?!1:!a.match(/[a-zA-Z]+/)};pe.validation.is_valid_email_address=function(a){return!!a.match(/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9])([A-Za-z0-9_\-\.])*\.([A-Za-z]{2,4})$/)};
pe.validation.is_valid_email_list=function(a){if(!a)return"Please enter at least one email.";var a=a.split(","),b="";$.each(a,function(a,d){d=$.trim(d);if(!pe.validation.is_valid_email_address(d))return b=d+" is not a valid email address.",!1});return b};pe.validation.contains_illegal_characters=function(a){return!!a.match(/[\!@#\$%\^&\*\(\)\{\}\[\]\/\=\"<>\~\;_\+\?\\]/)};
pe.validation.ensure_email_not_blank_and_is_valid=function(a){var b=a.val();if(!("string"!==typeof b||!b&&!a.data("text_entered"))){a.data("text_entered",!0);var c=a.attr("data_label")||"Email";if(0===b.length)pe.validation.show_message(a,c+" cannot be blank.");else{var d=!0,e=/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9])([A-Za-z0-9_\-\.])*\.([A-Za-z]{2,4})$/;$.each(b.split(","),function(a,b){d=d&&0<b.length&&e.test($.trim(b))});d?(pe.validation.show_message(a,""),a.data("text_entered",!0)):pe.validation.show_message(a,
"Please enter a valid email.")}}};
pe.validation.validate_name=function(a){var b=a.val();"string"!==typeof b||!b&&!a.data("text_entered")||(a.data("text_entered",!0),pe.validation.is_single_non_character(b)?pe.validation.show_message(a,"Please enter a valid "+pe.validation.get_name_error_message(a)+"."):pe.validation.contains_illegal_characters(b)?pe.validation.show_message(a,"Please enter a valid name."):50<b.length?pe.validation.show_message(a,"Please shorten your name."):pe.validation.is_more_than_5_words(b)?pe.validation.show_message(a,
"Please enter fewer than 5 words."):0<b.length?pe.validation.show_message(a,""):0<a[0].id.indexOf("first_name")?pe.validation.show_message(a,"Please enter your first name."):0<a[0].id.indexOf("last_name")?pe.validation.show_message(a,"Please enter your last name."):pe.validation.show_message(a,"Please enter your name."))};
pe.validation.ensure_not_blank=function(a){var b=a.val();"string"!==typeof b||!b&&!a.data("text_entered")||(a.data("text_entered",!0),0===a.val().length?(b=a.attr("data_label")||"Field",pe.validation.show_message(a,b+" cannot be blank.")):(pe.validation.show_message(a,""),a.data("text_entered",!0)))};
pe.validation.validate_credit_card_number=function(a){var b=a.val();if(!(16>b.length)||a.data("text_entered"))a.data("text_entered",!0),"string"===typeof b&&pe.is_valid_credit_card_number(b)?pe.validation.show_message(a,""):pe.validation.show_message(a,"Please enter a valid card number.")};pe.validation.validate_email=function(a){var b=a.val();if(b||a.data("text_entered"))a.data("text_entered",!0),$.getJSON("/api/users/check_email",{email:b},function(b){pe.validation.show_message(a,b.message)})};
pe.validation.validate_edited_email=function(a,b){var c=b.val();if(c||b.data("text_entered"))b.data("text_entered",!0),$.getJSON("/api/users/"+a+"/check_edited_email",{email:c},function(a){pe.validation.show_message(b,a.message)})};
pe.validation.validate_email_format=function(a){var b=a.val(),c=/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9])([A-Za-z0-9_\-\.])*\.([A-Za-z]{2,4})$/;0<b.length&&!c.test(b)?pe.validation.show_message(a,"Please enter a valid email."):0<b.length&&c.test(b)&&(pe.validation.show_message(a,""),a.data("text_entered",!0))};pe.validation.validate_email_list=function(a){var b=a.val();"string"===typeof b&&(b=pe.validation.is_valid_email_list(b))&&pe.validation.show_message(a,b)};
pe.validation.validate_password=function(a){var b=a.val();b?0<b.length&&-1<b.indexOf(" ")?pe.validation.show_message(a,"No spaces allowed for password."):6>b.length?pe.validation.show_message(a,"Please enter a longer password."):(pe.validation.show_message(a,""),a.data("text_entered",!0)):a.data("text_entered")&&pe.validation.show_message(a,"Please enter a password.")};
pe.validation.validate_security_code=function(a){var b=a.val();if(!(3>b.length)||a.data("text_entered"))a.data("text_entered",!0),b.match(/^\d{3}$/)||pe.validation.show_message(a,"Please enter a valid security code.")};
pe.validation.validate_user_name=function(a){var b=a.val();a.attr("disabled")||!b&&!a.data("text_entered")||(a.data("text_entered",!0),50<b.length?pe.validation.show_message(a,"Please shorten your name."):0===b.length?pe.validation.show_message(a,"Please enter a user name."):$.getJSON("/api/users/check_username",{username:b},function(b){pe.validation.show_message(a,b.message)}))};
pe.validation.validate_change_of_username=function(a,b){var c=b.val();if(c||b.data("text_entered"))b.data("text_entered",!0),50<c.length?pe.validation.show_message(b,"Please shorten your name."):0===c.length?pe.validation.show_message(b,"Please enter a user name."):$.getJSON("/api/users/"+a+"/check_edited_username",{username:c},function(a){pe.validation.show_message(b,a.message)})};
pe.validation.validate_zip_code=function(a){var b=a.val();if(!(5>b.length)||a.data("text_entered"))a.data("text_entered",!0),5>b.length?pe.validation.show_message(a,"Please enter a valid zip code."):"string"===typeof b&&pe.is_valid_zip_code(b)?pe.validation.show_message(a,""):pe.validation.show_message(a,"Please enter a valid zip code.")};
pe.validation.terms_accepted=function(a){if(a.attr("checked")||a.data("text_entered"))a.data("text_entered",!0),a.attr("checked")?pe.validation.show_message(a.parent(),""):pe.validation.show_message(a.parent(),"Please accept the terms of use")};pe.validation.get_name_error_message=function(a){return 0<a[0].id.indexOf("first_name")?"first name":0<a[0].id.indexOf("last_name")?"last name":"name"};
pe.BottombarMissingPerformerDialog=function(a){pe.init_widget(this,a);pe.BottombarPopupModule.active_popup&&pe.BottombarPopupModule.active_popup.close();pe.BottombarPopupModule.active_popup=this;this.parent_container=this.container;this.dialog_box=$('<div title="Are we missing an entertainer?"></div>');this.dialog_box.html(this.html());this.performer_input=this.dialog_box.find(".Performer");pe.validate_on_blur(this.performer_input,pe.validation.ensure_not_blank);this.your_email_input=this.dialog_box.find(".YourEmail");
pe.validate_on_blur(this.your_email_input,pe.validation.ensure_email_not_blank_and_is_valid);this.message_input=this.dialog_box.find(".MessageInput");this.submit_button=this.dialog_box.find(".Submit");this.submit_button.click(this.callback(this.submit_button_clicked));this.dialog_box.find(".Cancel").click(this.callback(this.close));this.dialog_box.dialog({modal:!0,show:!1,close:this.callback(this.close),dialogClass:"missing_dialog"})};
pe.BottombarMissingPerformerDialog.prototype.close=function(){this.dialog_box.empty();this.dialog_box.dialog("destroy");pe.BottombarPopupModule.active_popup=null};pe.BottombarMissingPerformerDialog.prototype.html=function(){return'<fieldset><ol><li><label for="venue_event">Performer\'s Name <span class="ast">*</span></label><input id="venue_event" data_label="Performer" class="Performer" type="text"></li><li><label for="message">Message</label><textarea id="message" class="MessageInput"></textarea></li><li><label for="email">Your E-mail <span class="ast">*</span></label><input id="email" data_label="Your email" class="YourEmail" type="text"></li></ol></fieldset><div class="footer clearfix"><span class="note"><span class="ast">*</span> - required fields</span><span class="Submit blue_btn">Submit</span><span class="Cancel fake_link">Cancel</span></div>'};
pe.BottombarMissingPerformerDialog.prototype.submit_button_clicked=function(){if(this.validate_on_submit())$.ajax({url:"/api/missing_performer.json",data:{email:this.your_email_input.val(),performer:this.performer_input.val(),message:this.message_input.val()},type:"POST",success:this.callback(function(a){this.form_submitted(a)})});else return!1};
pe.BottombarMissingPerformerDialog.prototype.form_submitted=function(a){if(1===a.message)this.show_thank_you();else return this.submit_button.before('<p class="inline-errors">'+a.message+"</p>"),!1};pe.BottombarMissingPerformerDialog.prototype.show_thank_you=function(){this.dialog_box.html("<div><p>Thank you for your suggestion, we appreciate your input</p></div>")};
pe.BottombarMissingPerformerDialog.prototype.validate_on_submit=function(){pe.validation.clear_error_messages(this.container);this.your_email_input.data("text_entered",!0).blur();this.performer_input.data("text_entered",!0).blur();return 0===this.dialog_box.find(".inline-errors").length};
$(document).ready(function(){pe.ChangeImageOnHover.instantiate_all();pe.install_easing();pe.convert_to_rounded_corners();var a=$(".TeamsScroller");6<a.find(".IndividualItem").length&&new pe.Scroller(a,1100,"disabled",6,6);pe.init_calendar_buttons();new pe.ReadMore($(".MissingEntertainerReadMore"));pe.init_page_framework(function(){$(".MissingPerformerLink").click(pe.missing_performer_link_clicked);pe.PrefetcherModule.instantiate();0<$(".TweetSection").length&&new pe.TweetSection($(".TweetSection"),
"/performers/"+window.main_performer_url_param+"/tweets/last",null,window.update_tweets)})});pe.missing_performer_link_clicked=function(){new pe.BottombarMissingPerformerDialog($(".MissingPerformerLink"))};
