pe.bind_fields=function(a){$(a).find("li input, textarea, select").change(function(){pe.save_button.removeClass("disabled").removeAttr("disabled")})};
pe.bind_required_fields=function(a){a=$(a);pe.required_inputs=a.find("li.required input:visible[type!=file][type!=radio]");pe.required_selects=a.find("li.required select");pe.required_textarea=a.find("li.required textarea");pe.required_fields=$.merge($.merge($.merge(pe.required_inputs,pe.required_selects),pe.required_textarea),pe.required_file_fields);pe.required_inputs.keyup(pe.required_field_focused_out);pe.required_selects.change(pe.required_field_focused_out);pe.required_textarea.keyup(pe.required_field_focused_out)};
pe.ApplicationOtherCity=function(a,b){var c=$(b),d=$(a);"Other"!==d.val()&&c.hide();$(d).change(function(){"Other"===$(this).val()?c.show():c.hide();pe.bind_required_fields()})};pe.validation.validate_other_city=function(a){var b=a.val();"Other"===pe.city_element.val()&&(0===b.length?pe.validation.show_message(a,"Please enter or select a city"):b.length&&pe.validation.show_message(a,""))};
