pe.CloseButton=function(a,b){pe.init_widget(this,a);this.close_button=a.find(".CloseButton");if("function"===typeof b)this.close_button.click(b);else switch(b){case pe.CloseButton.close_methods.REMOVE:this.close_button.click(this.callback(this.remove_container));break;case pe.CloseButton.close_methods.HIDE:this.close_button.click(this.callback(this.hide_container));break;default:alert("unknown value for 'close_method' parameter.")}};pe.CloseButton.close_methods={REMOVE:"REMOVE",HIDE:"HIDE"};
pe.CloseButton.events={CLOSED:"CloseButton_CLOSED"};pe.CloseButton.prototype.remove_container=function(){this.container.detach();this.fire_event(pe.CloseButton.events.CLOSED);this.container.remove();return!1};pe.CloseButton.prototype.hide_container=function(){this.fire_event(pe.CloseButton.events.CLOSED);this.container.hide();return!1};
pe.SingleSelectionAutocompleteField=function(a,b,c,d){pe.init_widget(this,a);this.close_button_callback=this.on_item_selected=null;this.autocomplete_data_or_url=b;this.input_field_name=c;this.container.html(this.html());this.dummy_input_field=this.container.find(".DummyInputField");this.autocomplete_input_field=this.container.find(".AutocompleteField");this.autocomplete_handler();this.selected_data_container=this.container.find(".SelectedValue");d&&this.set_field_value(d)};
pe.SingleSelectionAutocompleteField.events={SELECTED:"SingleSelectionAutocompleteField_SELECTED"};pe.SingleSelectionAutocompleteField.prototype.set_autocomplete_url=function(a){a&&(this.autocomplete_data_or_url=a,this.autocomplete_handler())};pe.SingleSelectionAutocompleteField.prototype.set_field_value=function(a){a&&(this.remove_dummy_row(),this.autocomplete_data_selected(a))};
pe.SingleSelectionAutocompleteField.prototype.add_dummy_row=function(){this.dummy_input_field||(this.dummy_input_field=$('<input class="DummyInputField"        type="hidden" name="'+this.input_field_name+'"       value="x_mock_single_value_x">'),this.autocomplete_input_field.after(this.dummy_input_field))};
pe.SingleSelectionAutocompleteField.prototype.autocomplete_data_selected=function(a){this.selected_data=a;this.remove_dummy_row();this.selected_data_container.append(this.selected_data_html(a.label,a.id,a.category));(new pe.CloseButton(this.selected_data_container.find(".SelectedInputData").last(),pe.CloseButton.close_methods.REMOVE)).bind_event(pe.CloseButton.events.CLOSED,this.callback(this.close_button_clicked));if(this.on_item_selected)this.on_item_selected(a)};
pe.SingleSelectionAutocompleteField.prototype.item_selected=function(a){this.on_item_selected=a};
pe.SingleSelectionAutocompleteField.prototype.autocomplete_handler=function(){this.autocomplete_input_field.autocomplete({source:this.autocomplete_data_or_url,minLength:1,close:this.callback(function(){this.autocomplete_input_field.val("")}),select:this.callback(function(a,b){var c=b.item;this.autocomplete_data_selected(c);this.fire_event(pe.SingleSelectionAutocompleteField.events.SELECTED,c.id)})}).data("autocomplete")._renderItem=function(a,b){b.display_label=b.category?pe.templatize("{{label}} ({{category}})",
b):b.label;return $("<li></li>").data("item.autocomplete",b).append(pe.templatize("<a>{{display_label}}</a>",b)).appendTo(a)}};pe.SingleSelectionAutocompleteField.prototype.clear_selected_data=function(){this.selected_data_container.html("");this.add_dummy_row()};
pe.SingleSelectionAutocompleteField.prototype.close_button_clicked=function(){0===this.selected_data_container.find(".SelectedInputData").length&&this.add_dummy_row();this.close_button_callback&&this.close_button_callback();this.autocomplete_input_field.show();this.autocomplete_input_field.focus()};pe.SingleSelectionAutocompleteField.prototype.display_close_button=function(){this.selected_data_container.find(".CloseButton").show()};pe.SingleSelectionAutocompleteField.prototype.hide_close_button=function(){this.selected_data_container.find(".CloseButton").hide()};
pe.SingleSelectionAutocompleteField.prototype.html=function(){return'<input class="AutocompleteField" type="text"><input class="DummyInputField" type="hidden" name="'+this.input_field_name+'" value="x_mock_single_value_x"><div class="SelectedValue"></div>'};pe.SingleSelectionAutocompleteField.prototype.remove_dummy_row=function(){this.dummy_input_field&&(this.dummy_input_field.remove(),this.dummy_input_field=null)};
pe.SingleSelectionAutocompleteField.prototype.replace_data_in_list=function(a){this.clear_selected_data();this.set_field_value(a)};pe.SingleSelectionAutocompleteField.prototype.selected_data_html=function(a,b,c){return'<div class="SelectedInputData selected_data">  <div class="CloseButton close_button">'+(c?a+"("+c+")":a)+'</div>  <input type="hidden" value="'+b+'" name="'+this.input_field_name+'"></div>'};
(function(){var a=function(a,c){return function(){return a.apply(c,arguments)}};pe.PerformerJumper=function(){function b(b,d,f){var e=this;this.container=b;this.url=d;this.field_name=f;this.on_item_selected=a(this.on_item_selected,this);this.item=null;this.autocomplete=new pe.SingleSelectionAutocompleteField(this.container.find(".Autocomplete"),this.url,this.field_name);this.write_review_button=this.container.find(".WriteReviewButton");this.write_review_button.click(function(){return e.item?!0:!1});
this.autocomplete.item_selected(this.on_item_selected);this.autocomplete.close_button_callback=function(){e.item=null;return e.write_review_button.addClass("disabled")}}b.prototype.on_item_selected=function(a){this.write_review_button.toggleClass("disabled",a);if(this.item=a)return this.write_review_button.attr("href",""+a.value+"#WriteComment")};return b}()}).call(this);
