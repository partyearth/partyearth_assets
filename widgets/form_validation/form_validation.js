pe.validation={};pe.validatables=[];pe.validation.autocomplete_open=!1;pe.validate_on_key_up=function(a,c){a.keyup(function(){c(a)});a.val()&&c(a);return a};pe.validate_on_blur=function(a,c,b){a.blur(function(){c(a)});!b&&a.val()&&c(a);return a};pe.validate_on_change=function(a,c,b){a.change(function(){c(a)});!b&&a.val()&&c(a);return a};
pe.validate_before_submit=function(a){a.submit(function(){pe.validation.clear_error_messages(a);a.find("input").each(function(a,c){var b=$(c);b.data("text_entered",!0);b.keyup();b.blur()});a.find("select").each(function(a,c){var b=$(c);b.data("text_entered",!0);b.change()});a.find("textarea").each(function(a,c){var b=$(c);b.data("text_entered",!0);b.keyup();b.blur()});var c=!0;$.each(pe.validatables,function(a,b){c=b.validate_on_submit()&&c});if(0<a.find(".inline-errors").length||!c){var b=a.find(".inline-errors:first").parent(),
d=b.find("input:first");0<d.length?d.is(":hidden")?(d.show(),d.focus(),d.hide()):d.focus():(b=b.find("textarea"))&&b.focus();return!1}})};pe.validate_user_exists=function(a,c){form=$(a.parents("form")[0]);form.submit(function(){pe.validation.clear_error_messages(form);$.post("/api/users/check_user_exists",{login:a.val(),password:c.val()},function(b){pe.validation.show_message(a,b.username);pe.validation.show_message(c,b.password);_.isEmpty(b)&&(form.unbind("submit"),form.submit())});return!1})};
pe.validation.clear_error_messages=function(a){pe.validation.find_error_messages(a).remove()};pe.validation.find_error_messages=function(a){return a.find(".inline-errors")};pe.validation.show_message=function(a,c){a.parent().find(".inline-errors,img").remove();c?a.after('<span class="inline-errors">'+c+"</span>"):a.after('<img src="/assets/users/check.png" />')};
