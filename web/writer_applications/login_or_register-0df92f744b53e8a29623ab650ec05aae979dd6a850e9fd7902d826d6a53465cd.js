pe.PasswordBox=function(e){pe.init_widget(this,e),this.obfuscate_password=!0,this.password_obfuscated_field=pe.load(this.container.find("input.password")),this.password_clear_field=$("<input type='text' class='text_field' />"),this.password_clear_field.insertBefore(this.password_obfuscated_field),this.password_clear_field.hide(),this.password_clear_field.keyup(this.callback(this.on_clear_field_key_up)),$('<br><span class="ToggleLink toggle fake_link blue_link">Show Password</span>').insertAfter(this.password_obfuscated_field),this.toggle_link=pe.load(this.container.find(".ToggleLink")),this.toggle_link.click(this.callback(this.on_toggle_link_clicked))},pe.PasswordBox.prototype.on_clear_field_key_up=function(){if(!this.obfuscate_password){var e=this.password_clear_field.val();"string"==typeof e&&this.password_obfuscated_field.val(e).keyup()}},pe.PasswordBox.prototype.on_toggle_link_clicked=function(){if(this.obfuscate_password=!this.obfuscate_password,this.obfuscate_password){var e=this.password_clear_field.val();"string"==typeof e&&(this.password_obfuscated_field.val(e),this.toggle_link.html("Show Password"))}else{var s=this.password_obfuscated_field.val();"string"==typeof s&&this.password_clear_field.val(s),this.toggle_link.html("Hide Password")}this.password_obfuscated_field.toggle(),this.password_clear_field.toggle()},$(document).ready(function(){pe.ajax_loader.cities.load(function(e){new pe.CityDropDown($(".DefaultLocation"),e)}),new pe.PasswordBox($("#user_password_input")),$("#user_user_name_input span.inline-errors")&&$("#user_user_name_input span.inline-errors").remove(),$("#user_email_input span.inline-errors")&&$("#user_email_input span.inline-errors").remove(),pe.validate_on_blur($("#user_user_name"),pe.validation.validate_user_name),pe.validate_on_blur($("#user_email"),pe.validation.validate_email),pe.validate_on_key_up($("#user_password"),pe.validation.validate_password),pe.validate_before_submit($(".formtastic.user")),pe.validate_on_blur($("#name"),pe.validation.ensure_not_blank),pe.validate_on_key_up($("#password"),pe.validation.validate_password),pe.validate_before_submit($("#login_form")),$("#name").focus(),pe.init_page_framework()});