pe.PasswordBox=function(a){pe.init_widget(this,a);this.obfuscate_password=!0;this.password_obfuscated_field=pe.load(this.container.find("input.password"));this.password_clear_field=$("<input type='text' class='text_field' />");this.password_clear_field.insertBefore(this.password_obfuscated_field);this.password_clear_field.hide();this.password_clear_field.keyup(this.callback(this.on_clear_field_key_up));$('<br><span class="ToggleLink toggle fake_link blue_link">Show Password</span>').insertAfter(this.password_obfuscated_field);
this.toggle_link=pe.load(this.container.find(".ToggleLink"));this.toggle_link.click(this.callback(this.on_toggle_link_clicked))};pe.PasswordBox.prototype.on_clear_field_key_up=function(){if(!this.obfuscate_password){var a=this.password_clear_field.val();"string"===typeof a&&this.password_obfuscated_field.val(a).keyup()}};
pe.PasswordBox.prototype.on_toggle_link_clicked=function(){if(this.obfuscate_password=!this.obfuscate_password){var a=this.password_clear_field.val();"string"===typeof a&&(this.password_obfuscated_field.val(a),this.toggle_link.html("Show Password"))}else a=this.password_obfuscated_field.val(),"string"===typeof a&&this.password_clear_field.val(a),this.toggle_link.html("Hide Password");this.password_obfuscated_field.toggle();this.password_clear_field.toggle()};
$(document).ready(function(){pe.validate_on_key_up($("#new_password"),pe.validation.validate_password);pe.validate_before_submit($("#update_password"));new pe.PasswordBox($(".PasswordContainer"));$("#new_password").focus();pe.init_page_framework()});
