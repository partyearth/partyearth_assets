pe.BottombarEmailPageToFriendPopup=function(a){pe.init_widget(this,a);this.bottombar_popup_module=new pe.BottombarPopupModule(this.container,"EmailPageToFriendPopup",400,400,"Email this page to a friend",this.html());this.bottombar_popup_module.container.addClass("popup email_page_to_friend_popup");this.name_input=this.bottombar_popup_module.container.find(".Name");this.email_input=this.bottombar_popup_module.container.find(".Emails");pe.validate_on_blur(this.email_input,pe.validation.ensure_email_not_blank_and_is_valid);
this.message_input=this.bottombar_popup_module.container.find(".MessageInput");this.submit_button=this.bottombar_popup_module.container.find(".Submit");this.submit_button.click(this.callback(this.submit_button_clicked))};pe.BottombarEmailPageToFriendPopup.prototype.html=function(){return'<div class="field_item"><label for="your_name">Your Name</label><input id="your_name" class="Name" type="text"></div><div class="field_item"><label for="friend_email">Friends\' Email(s) <span class="blue_text">*</span><br><span class="grey_text">separated by<br> commas</span></label><textarea id="friend_email" data_label="Email(s)" class="Emails friends_emails_input"></textarea></div><div class="field_item"><label for="message">Message</label><textarea id="message" class="MessageInput message_input"></textarea></div><div class="clear"></div><div class="Submit btn submit_btn float_right">Submit</div>'};
pe.BottombarEmailPageToFriendPopup.prototype.submit_button_clicked=function(){if(this.validate_on_submit())$.ajax({url:"/api/email_page_to_friend.json",data:{name:this.name_input.val(),emails:this.email_input.val(),url:window.location.href,message:this.message_input.val()},type:"POST",success:this.callback(function(a){this.form_submitted(a)})});else return!1};
pe.BottombarEmailPageToFriendPopup.prototype.form_submitted=function(a){if(1===a.message)this.bottombar_popup_module.show_thank_you("Thank you");else return this.submit_button.before('<p class="inline-errors">'+a.message+"</p>"),!1};pe.BottombarEmailPageToFriendPopup.prototype.validate_on_submit=function(){pe.validation.clear_error_messages(this.bottombar_popup_module.container);this.email_input.data("text_entered",!0).blur();return 0===this.bottombar_popup_module.container.find(".inline-errors").length};
