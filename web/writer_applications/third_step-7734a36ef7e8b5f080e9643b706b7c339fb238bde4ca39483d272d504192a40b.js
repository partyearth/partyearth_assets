$(document).ready(function(){pe.input_list_wrapper=$(".InputList");var e=$(".InputList .Last");pe.next_list_number=parseInt(e.find(".ListNumber").html(),10),pe.empty_row_template='<li class="clearfix">'+e.html()+"</li>",$(".AddMoreVenues").click(pe.add_more_venues_button_clicked),pe.submit_button=$(".SubmitButton"),pe.submit_button.click(pe.submit_button_clicked),pe.required_inputs=$(".RequiredInputs :input"),pe.required_inputs.focusout(pe.required_field_focused_out),pe.required_inputs.keyup(pe.required_field_focused_out),pe.init_page_framework()}),pe.add_more_venues_button_clicked=function(){var e=$(pe.empty_row_template);return pe.input_list_wrapper.append(e),e.find(".ListNumber").html(pe.next_list_number),pe.next_list_number++,!1},pe.all_required_fields_valid=function(){return _.reduce(pe.required_inputs,function(e,t){return e&&!!$(t).val()},!0)},pe.remove_error_message=function(e){e.parent("li").find(".Error").html("")},pe.required_field_focused_out=function(e){var t=$(e.target);t.val()&&pe.remove_error_message(t),pe.submit_button.toggleClass("disabled",!pe.all_required_fields_valid())},pe.show_error_message=function(e){e.parent("li").find(".Error").html("(!) Field cannot be blank")},pe.submit_button_clicked=function(){var r,i=!0;return $.each(pe.required_inputs,function(e,t){(r=$(t)).val()?pe.remove_error_message(r):(i=!1,pe.show_error_message(r))}),i};