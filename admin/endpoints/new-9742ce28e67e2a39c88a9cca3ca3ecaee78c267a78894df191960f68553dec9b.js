pe.CloseButton=function(e,t){if(pe.init_widget(this,e),this.close_button=e.find(".CloseButton"),"function"==typeof t)this.close_button.click(t);else switch(t){case pe.CloseButton.close_methods.REMOVE:this.close_button.click(this.callback(this.remove_container));break;case pe.CloseButton.close_methods.HIDE:this.close_button.click(this.callback(this.hide_container));break;default:alert("unknown value for 'close_method' parameter.")}},pe.CloseButton.close_methods={REMOVE:"REMOVE",HIDE:"HIDE"},pe.CloseButton.events={CLOSED:"CloseButton_CLOSED"},pe.CloseButton.prototype.remove_container=function(){return this.container.detach(),this.fire_event(pe.CloseButton.events.CLOSED),this.container.remove(),!1},pe.CloseButton.prototype.hide_container=function(){return this.fire_event(pe.CloseButton.events.CLOSED),this.container.hide(),!1},pe.GeneralAutocompleteInputModule=function(e,t,o,l){pe.init_widget(this,e),this.autocomplete_data_or_url=t,this.input_field_name=o,this.container.html(this.html()),this.dummy_input_field=this.container.find(".DummyInputField"),this.autocomplete_input_field=this.container.find(".AutocompleteField"),this.autocomplete_handler(),this.selected_data_list_div=this.container.find(".SelectedDataList"),this.selected_data_list_div.sortable(),l&&this.add_data_to_list(l)},pe.GeneralAutocompleteInputModule.events={SELECTED:"GeneralAutocompleteInputModule_SELECTED",REMOVED:"GeneralAutocompleteInputModule_REMOVED",EMPTIED:"GeneralAutocompleteInputMOdule_EMPTIED"},pe.GeneralAutocompleteInputModule.prototype.add_data_to_list=function(e){this.remove_dummy_row(),$.each(e,this.callback(function(e,t){-1===$.inArray(t.id.toString(),this.all_values())&&this.autocomplete_data_selected(t.label,t.id,t.category)}))},pe.GeneralAutocompleteInputModule.prototype.add_dummy_row=function(){this.dummy_input_field||(this.dummy_input_field=$('<input class="DummyInputField"        type="hidden" name="'+this.input_field_name+'"       value="x_mock_single_value_x">'),this.autocomplete_input_field.after(this.dummy_input_field))},pe.GeneralAutocompleteInputModule.prototype.all_values=function(){return this.selected_data_list_div.find('[name="'+this.input_field_name+'"]').map(function(){return this.value}).toArray()},pe.GeneralAutocompleteInputModule.prototype.autocomplete_data_selected=function(e,t,o){this.remove_dummy_row(),this.selected_data_list_div.append(this.selected_data_html(e,t,o)),new pe.CloseButton(this.selected_data_list_div.find(".SelectedInputData").last(),pe.CloseButton.close_methods.REMOVE).bind_event(pe.CloseButton.events.CLOSED,this.callback(this.close_button_clicked))},pe.GeneralAutocompleteInputModule.prototype.autocomplete_handler=function(){this.autocomplete_input_field.autocomplete({source:this.set_autocomplete_data(),minLength:1,close:this.callback(function(){this.autocomplete_input_field.val("")}),select:this.callback(function(e,t){var o=t.item;this.autocomplete_data_selected(o.label,o.id,o.category),this.fire_event(pe.GeneralAutocompleteInputModule.events.SELECTED,o.id)})}).data("autocomplete")._renderItem=function(e,t){return t.display_label=t.category?pe.templatize("{{label}} ({{category}})",t):t.label,$("<li></li>").data("item.autocomplete",t).append(pe.templatize("<a>{{display_label}}</a>",t)).appendTo(e)}},pe.GeneralAutocompleteInputModule.prototype.set_autocomplete_data=function(){return"string"==typeof this.autocomplete_data_or_url?this.callback(function(t,o){$.getJSON(this.autocomplete_data_or_url,{term:this.autocomplete_input_field.val(),val:this.all_values().join(",")},function(e){pe.GeneralAutocompleteInputModule.sort_autocomplete_results(e,t,o)})}):this.callback(pe.GeneralAutocompleteInputModule.sort_autocomplete_results,this.autocomplete_data_or_url)},pe.GeneralAutocompleteInputModule.sort_autocomplete_results=function(e,t,o){var l=pe.normalize(t.term).toLowerCase(),i=new RegExp($.ui.autocomplete.escapeRegex(l),"i"),a=$.grep(e,function(e){return e=e.label||e.value||e,i.test(e)||i.test(pe.normalize(e))}),n=new RegExp("^"+$.ui.autocomplete.escapeRegex(l),"i");o(a=_.sortBy(a,function(e){var t=pe.normalize(e.label).toLowerCase();return[t!=l,!n.test(t)]}))},pe.GeneralAutocompleteInputModule.prototype.clear_selected_data=function(){this.selected_data_list_div.html(""),this.add_dummy_row()},pe.GeneralAutocompleteInputModule.prototype.close_button_clicked=function(){this.is_empty()&&this.add_dummy_row(),this.fire_event(pe.GeneralAutocompleteInputModule.events.REMOVED),this.is_empty()&&this.fire_event(pe.GeneralAutocompleteInputModule.events.EMPTIED)},pe.GeneralAutocompleteInputModule.prototype.display_close_button=function(){this.selected_data_list_div.find(".CloseButton").show()},pe.GeneralAutocompleteInputModule.prototype.hide_close_button=function(){this.selected_data_list_div.find(".CloseButton").hide()},pe.GeneralAutocompleteInputModule.prototype.html=function(){return'<input class="AutocompleteField" type="text"><input class="DummyInputField" type="hidden" name="'+this.input_field_name+'" value="x_mock_single_value_x"><ul class="SelectedDataList" id="sortable"></ul>'},pe.GeneralAutocompleteInputModule.prototype.is_empty=function(){return 0===this.selected_data_list_div.find(".SelectedInputData").length},pe.GeneralAutocompleteInputModule.prototype.remove_dummy_row=function(){this.dummy_input_field&&(this.dummy_input_field.remove(),this.dummy_input_field=null)},pe.GeneralAutocompleteInputModule.prototype.replace_data_in_list=function(e){e&&(this.clear_selected_data(),this.add_data_to_list(e))},pe.GeneralAutocompleteInputModule.prototype.selected_data_html=function(e,t,o){return'<li class="SelectedInputData">  <img style="padding-right:20px; width: 15px; height: 15px;" src="/assets/events/close.png"\t\tclass="CloseButton float_left">  <p class="float_left">'+(o?e+"("+o+")":e)+'</p>  <input type="hidden" value="'+t+'" name="'+this.input_field_name+'">  <div class="clear"></div></li>'},pe.ConfirmationDialog=function(e,t){pe.init_widget(this,null),this.success_callback=t,this.container=$(this.html(e)),this.container.appendTo("body");var o=this.callback(this.confirm_clicked);this.container.dialog({title:"Please confirm",modal:!0,resizable:!1,width:300,buttons:{Yes:o,Cancel:function(){$(this).remove()}}})},pe.ConfirmationDialog.prototype.html=function(e){return"<div>"+e+"</div>"},pe.ConfirmationDialog.prototype.confirm_clicked=function(){this.success_callback(),this.container.remove()},pe.SortableAutocomplete=function(e,t,o,l,i){pe.init_widget(this,e),this.autocomplete_data_or_url=t,this.limit=l,this.input_field_name=o,this.container.html(this.html()),this.dummy_input_field=this.container.find(".DummyInputField"),this.messaging_area=this.container.find(".Messaging"),this.autocomplete_input_field=this.container.find(".AutocompleteField");var a=this.autocomplete_input_field.autocomplete({source:this.autocomplete_data_or_url,minLength:1,close:this.callback(this.autocomplete_closed),select:this.callback(this.autocomplete_entry_selected)}).data("autocomplete");a._renderItem=pe.SortableAutocomplete.render_autocomplete_entry,a._renderMenu=pe.SortableAutocomplete.render_autocomplete_list,this.selected_data_list_div=this.container.find(".SelectedDataList"),this.selected_data_list_div.sortable(),this.selected_data_list_div.disableSelection(),i&&this.add_data_to_list(i)},pe.SortableAutocomplete.events={SELECTED:"SortableAutocomplete_SELECTED"},pe.SortableAutocomplete.prototype.add_data_to_list=function(e){0!==e.length&&(this.remove_dummy_row(),$.each(e,this.callback(function(e,t){this.add_selected_data(t.label,t.id,t.category)})),this.enforce_limit())},pe.SortableAutocomplete.prototype.add_dummy_row=function(){this.dummy_input_field||(this.dummy_input_field=$('<input class="DummyInputField" type="hidden" name="'+this.input_field_name+'" value="">'),this.autocomplete_input_field.after(this.dummy_input_field))},pe.SortableAutocomplete.prototype.add_selected_data=function(e,t,o){this.remove_dummy_row(),this.selected_data_list_div.append(this.selected_data_html(e,t,o)),new pe.CloseButton(this.selected_data_list_div.find(".SelectedInputData").last(),pe.CloseButton.close_methods.REMOVE).bind_event(pe.CloseButton.events.CLOSED,this.callback(this.close_button_clicked)),this.enforce_limit()},pe.SortableAutocomplete.prototype.autocomplete_closed=function(){this.autocomplete_input_field.val("")},pe.SortableAutocomplete.prototype.autocomplete_entry_selected=function(e,t){var o=t.item;this.add_selected_data(o.label,o.id,o.category),this.fire_event(pe.SortableAutocomplete.events.SELECTED,o.id)},pe.SortableAutocomplete.prototype.close_button_clicked=function(){0===this.selected_data_list_div.find(".SelectedInputData").length&&this.add_dummy_row(),this.enforce_limit()},pe.SortableAutocomplete.prototype.enforce_limit=function(){this.selected_data_list_div.find(".SelectedInputData").length>=this.limit?(this.messaging_area.html("You have reached the selection limit. Please remove before adding."),this.autocomplete_input_field.autocomplete("disable")):(this.messaging_area.html(""),this.autocomplete_input_field.autocomplete("enable"))},pe.SortableAutocomplete.prototype.html=function(){return'<input class="AutocompleteField" type="text"><div class="Messaging"></div><input class="DummyInputField" type="hidden" name="'+this.input_field_name+'" value=""><ul class="SelectedDataList" id="sortable"></ul>'},pe.SortableAutocomplete.prototype.remove_dummy_row=function(){this.dummy_input_field&&(this.dummy_input_field.remove(),this.dummy_input_field=null)},pe.SortableAutocomplete.render_autocomplete_entry=function(e,t){t.display_label=t.category?pe.templatize("{{label}} ({{category}})",t):t.label;var o=$(pe.templatize("<li><a>{{display_label}}</a></li>",t));return o.data("item.autocomplete",t),e.append(o),o},pe.SortableAutocomplete.render_autocomplete_list=function(o,e){var l=this,i="",a=" first_category";$.each(e,function(e,t){t.type!=i&&(o.append("<li class='ui-autocomplete-category "+a+"'>"+t.type+"</li>"),i=t.type),l._renderItem(o,t)})},pe.SortableAutocomplete.prototype.selected_data_html=function(e,t,o){return'<li class="SelectedInputData ui-state-default"><img style="margin-right:20px; width: 15px; height: 15px;" src="/assets/events/close.png"class="CloseButton float_left"><p class="float_left">'+(o?e+"("+o+")":e)+'</p><input type="hidden" value="'+t+'" name="'+this.input_field_name+'"><div class="clear"></div></li>'},$(document).ready(function(){pe.ajax_loader.tags.load(function(e){new pe.SortableAutocomplete($(".TagSelector"),e,"endpoint[ordered_tag_ids][]",1e4,window.existing_tags)}),pe.init_page_framework()});