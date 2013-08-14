pe.CloseButton=function(a,b){pe.init_widget(this,a);this.close_button=a.find(".CloseButton");if("function"===typeof b)this.close_button.click(b);else switch(b){case pe.CloseButton.close_methods.REMOVE:this.close_button.click(this.callback(this.remove_container));break;case pe.CloseButton.close_methods.HIDE:this.close_button.click(this.callback(this.hide_container));break;default:alert("unknown value for 'close_method' parameter.")}};pe.CloseButton.close_methods={REMOVE:"REMOVE",HIDE:"HIDE"};
pe.CloseButton.events={CLOSED:"CloseButton_CLOSED"};pe.CloseButton.prototype.remove_container=function(){this.container.detach();this.fire_event(pe.CloseButton.events.CLOSED);this.container.remove();return!1};pe.CloseButton.prototype.hide_container=function(){this.fire_event(pe.CloseButton.events.CLOSED);this.container.hide();return!1};
pe.GeneralAutocompleteInputModule=function(a,b,c,d){pe.init_widget(this,a);this.autocomplete_data_or_url=b;this.input_field_name=c;this.container.html(this.html());this.dummy_input_field=this.container.find(".DummyInputField");this.autocomplete_input_field=this.container.find(".AutocompleteField");this.autocomplete_handler();this.selected_data_list_div=this.container.find(".SelectedDataList");this.selected_data_list_div.sortable();d&&this.add_data_to_list(d)};
pe.GeneralAutocompleteInputModule.events={SELECTED:"GeneralAutocompleteInputModule_SELECTED",REMOVED:"GeneralAutocompleteInputModule_REMOVED",EMPTIED:"GeneralAutocompleteInputMOdule_EMPTIED"};pe.GeneralAutocompleteInputModule.prototype.add_data_to_list=function(a){this.remove_dummy_row();$.each(a,this.callback(function(a,c){-1===$.inArray(c.id.toString(),this.all_values())&&this.autocomplete_data_selected(c.label,c.id,c.category)}))};
pe.GeneralAutocompleteInputModule.prototype.add_dummy_row=function(){this.dummy_input_field||(this.dummy_input_field=$('<input class="DummyInputField"        type="hidden" name="'+this.input_field_name+'"       value="x_mock_single_value_x">'),this.autocomplete_input_field.after(this.dummy_input_field))};pe.GeneralAutocompleteInputModule.prototype.all_values=function(){return this.selected_data_list_div.find('[name="'+this.input_field_name+'"]').map(function(){return this.value}).toArray()};
pe.GeneralAutocompleteInputModule.prototype.autocomplete_data_selected=function(a,b,c){this.remove_dummy_row();this.selected_data_list_div.append(this.selected_data_html(a,b,c));(new pe.CloseButton(this.selected_data_list_div.find(".SelectedInputData").last(),pe.CloseButton.close_methods.REMOVE)).bind_event(pe.CloseButton.events.CLOSED,this.callback(this.close_button_clicked))};
pe.GeneralAutocompleteInputModule.prototype.autocomplete_handler=function(){this.autocomplete_input_field.autocomplete({source:this.set_autocomplete_data(),minLength:1,close:this.callback(function(){this.autocomplete_input_field.val("")}),select:this.callback(function(a,b){var c=b.item;this.autocomplete_data_selected(c.label,c.id,c.category);this.fire_event(pe.GeneralAutocompleteInputModule.events.SELECTED,c.id)})}).data("autocomplete")._renderItem=function(a,b){b.display_label=b.category?pe.templatize("{{label}} ({{category}})",
b):b.label;return $("<li></li>").data("item.autocomplete",b).append(pe.templatize("<a>{{display_label}}</a>",b)).appendTo(a)}};
pe.GeneralAutocompleteInputModule.prototype.set_autocomplete_data=function(){return"string"==typeof this.autocomplete_data_or_url?this.callback(function(a,b){$.getJSON(this.autocomplete_data_or_url,{term:this.autocomplete_input_field.val(),val:this.all_values().join(",")},function(c){pe.GeneralAutocompleteInputModule.sort_autocomplete_results(c,a,b)})}):this.callback(pe.GeneralAutocompleteInputModule.sort_autocomplete_results,this.autocomplete_data_or_url)};
pe.GeneralAutocompleteInputModule.sort_autocomplete_results=function(a,b,c){var d=pe.normalize(b.term).toLowerCase(),e=RegExp($.ui.autocomplete.escapeRegex(d),"i");a=$.grep(a,function(a){a=a.label||a.value||a;return e.test(a)||e.test(pe.normalize(a))});var f=RegExp("^"+$.ui.autocomplete.escapeRegex(d),"i");a=_.sortBy(a,function(a){a=pe.normalize(a.label).toLowerCase();return[a!=d,!f.test(a)]});c(a)};
pe.GeneralAutocompleteInputModule.prototype.clear_selected_data=function(){this.selected_data_list_div.html("");this.add_dummy_row()};pe.GeneralAutocompleteInputModule.prototype.close_button_clicked=function(){this.is_empty()&&this.add_dummy_row();this.fire_event(pe.GeneralAutocompleteInputModule.events.REMOVED);this.is_empty()&&this.fire_event(pe.GeneralAutocompleteInputModule.events.EMPTIED)};pe.GeneralAutocompleteInputModule.prototype.display_close_button=function(){this.selected_data_list_div.find(".CloseButton").show()};
pe.GeneralAutocompleteInputModule.prototype.hide_close_button=function(){this.selected_data_list_div.find(".CloseButton").hide()};pe.GeneralAutocompleteInputModule.prototype.html=function(){return'<input class="AutocompleteField" type="text"><input class="DummyInputField" type="hidden" name="'+this.input_field_name+'" value="x_mock_single_value_x"><ul class="SelectedDataList" id="sortable"></ul>'};pe.GeneralAutocompleteInputModule.prototype.is_empty=function(){return 0===this.selected_data_list_div.find(".SelectedInputData").length};
pe.GeneralAutocompleteInputModule.prototype.remove_dummy_row=function(){this.dummy_input_field&&(this.dummy_input_field.remove(),this.dummy_input_field=null)};pe.GeneralAutocompleteInputModule.prototype.replace_data_in_list=function(a){a&&(this.clear_selected_data(),this.add_data_to_list(a))};
pe.GeneralAutocompleteInputModule.prototype.selected_data_html=function(a,b,c){return'<li class="SelectedInputData">  <img style="padding-right:20px; width: 15px; height: 15px;" src="/assets/events/close.png"\t\tclass="CloseButton float_left">  <p class="float_left">'+(c?a+"("+c+")":a)+'</p>  <input type="hidden" value="'+b+'" name="'+this.input_field_name+'">  <div class="clear"></div></li>'};
(function(){$(function(){new pe.GeneralAutocompleteInputModule($(".TicketClientsSelector"),"/api/users/ticket_clients.json","client_ids[]",window.ticket_clients);return pe.init_page_framework()})}).call(this);
