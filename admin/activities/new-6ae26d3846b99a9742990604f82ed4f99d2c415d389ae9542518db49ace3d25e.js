pe.CloseButton=function(t,e){if(pe.init_widget(this,t),this.close_button=t.find(".CloseButton"),"function"==typeof e)this.close_button.click(e);else switch(e){case pe.CloseButton.close_methods.REMOVE:this.close_button.click(this.callback(this.remove_container));break;case pe.CloseButton.close_methods.HIDE:this.close_button.click(this.callback(this.hide_container));break;default:alert("unknown value for 'close_method' parameter.")}},pe.CloseButton.close_methods={REMOVE:"REMOVE",HIDE:"HIDE"},pe.CloseButton.events={CLOSED:"CloseButton_CLOSED"},pe.CloseButton.prototype.remove_container=function(){return this.container.detach(),this.fire_event(pe.CloseButton.events.CLOSED),this.container.remove(),!1},pe.CloseButton.prototype.hide_container=function(){return this.fire_event(pe.CloseButton.events.CLOSED),this.container.hide(),!1},pe.GeneralAutocompleteInputModule=function(t,e,o,i){pe.init_widget(this,t),this.autocomplete_data_or_url=e,this.input_field_name=o,this.container.html(this.html()),this.dummy_input_field=this.container.find(".DummyInputField"),this.autocomplete_input_field=this.container.find(".AutocompleteField"),this.autocomplete_handler(),this.selected_data_list_div=this.container.find(".SelectedDataList"),this.selected_data_list_div.sortable(),i&&this.add_data_to_list(i)},pe.GeneralAutocompleteInputModule.events={SELECTED:"GeneralAutocompleteInputModule_SELECTED",REMOVED:"GeneralAutocompleteInputModule_REMOVED",EMPTIED:"GeneralAutocompleteInputMOdule_EMPTIED"},pe.GeneralAutocompleteInputModule.prototype.add_data_to_list=function(t){this.remove_dummy_row(),$.each(t,this.callback(function(t,e){-1===$.inArray(e.id.toString(),this.all_values())&&this.autocomplete_data_selected(e.label,e.id,e.category)}))},pe.GeneralAutocompleteInputModule.prototype.add_dummy_row=function(){this.dummy_input_field||(this.dummy_input_field=$('<input class="DummyInputField"        type="hidden" name="'+this.input_field_name+'"       value="x_mock_single_value_x">'),this.autocomplete_input_field.after(this.dummy_input_field))},pe.GeneralAutocompleteInputModule.prototype.all_values=function(){return this.selected_data_list_div.find('[name="'+this.input_field_name+'"]').map(function(){return this.value}).toArray()},pe.GeneralAutocompleteInputModule.prototype.autocomplete_data_selected=function(t,e,o){this.remove_dummy_row(),this.selected_data_list_div.append(this.selected_data_html(t,e,o)),new pe.CloseButton(this.selected_data_list_div.find(".SelectedInputData").last(),pe.CloseButton.close_methods.REMOVE).bind_event(pe.CloseButton.events.CLOSED,this.callback(this.close_button_clicked))},pe.GeneralAutocompleteInputModule.prototype.autocomplete_handler=function(){this.autocomplete_input_field.autocomplete({source:this.set_autocomplete_data(),minLength:1,close:this.callback(function(){this.autocomplete_input_field.val("")}),select:this.callback(function(t,e){var o=e.item;this.autocomplete_data_selected(o.label,o.id,o.category),this.fire_event(pe.GeneralAutocompleteInputModule.events.SELECTED,o.id)})}).data("autocomplete")._renderItem=function(t,e){return e.display_label=e.category?pe.templatize("{{label}} ({{category}})",e):e.label,$("<li></li>").data("item.autocomplete",e).append(pe.templatize("<a>{{display_label}}</a>",e)).appendTo(t)}},pe.GeneralAutocompleteInputModule.prototype.set_autocomplete_data=function(){return"string"==typeof this.autocomplete_data_or_url?this.callback(function(e,o){$.getJSON(this.autocomplete_data_or_url,{term:this.autocomplete_input_field.val(),val:this.all_values().join(",")},function(t){pe.GeneralAutocompleteInputModule.sort_autocomplete_results(t,e,o)})}):this.callback(pe.GeneralAutocompleteInputModule.sort_autocomplete_results,this.autocomplete_data_or_url)},pe.GeneralAutocompleteInputModule.sort_autocomplete_results=function(t,e,o){var i=pe.normalize(e.term).toLowerCase(),s=new RegExp($.ui.autocomplete.escapeRegex(i),"i"),l=$.grep(t,function(t){return t=t.label||t.value||t,s.test(t)||s.test(pe.normalize(t))}),a=new RegExp("^"+$.ui.autocomplete.escapeRegex(i),"i");o(l=_.sortBy(l,function(t){var e=pe.normalize(t.label).toLowerCase();return[e!=i,!a.test(e)]}))},pe.GeneralAutocompleteInputModule.prototype.clear_selected_data=function(){this.selected_data_list_div.html(""),this.add_dummy_row()},pe.GeneralAutocompleteInputModule.prototype.close_button_clicked=function(){this.is_empty()&&this.add_dummy_row(),this.fire_event(pe.GeneralAutocompleteInputModule.events.REMOVED),this.is_empty()&&this.fire_event(pe.GeneralAutocompleteInputModule.events.EMPTIED)},pe.GeneralAutocompleteInputModule.prototype.display_close_button=function(){this.selected_data_list_div.find(".CloseButton").show()},pe.GeneralAutocompleteInputModule.prototype.hide_close_button=function(){this.selected_data_list_div.find(".CloseButton").hide()},pe.GeneralAutocompleteInputModule.prototype.html=function(){return'<input class="AutocompleteField" type="text"><input class="DummyInputField" type="hidden" name="'+this.input_field_name+'" value="x_mock_single_value_x"><ul class="SelectedDataList" id="sortable"></ul>'},pe.GeneralAutocompleteInputModule.prototype.is_empty=function(){return 0===this.selected_data_list_div.find(".SelectedInputData").length},pe.GeneralAutocompleteInputModule.prototype.remove_dummy_row=function(){this.dummy_input_field&&(this.dummy_input_field.remove(),this.dummy_input_field=null)},pe.GeneralAutocompleteInputModule.prototype.replace_data_in_list=function(t){t&&(this.clear_selected_data(),this.add_data_to_list(t))},pe.GeneralAutocompleteInputModule.prototype.selected_data_html=function(t,e,o){return'<li class="SelectedInputData">  <img style="padding-right:20px; width: 15px; height: 15px;" src="/assets/events/close.png"\t\tclass="CloseButton float_left">  <p class="float_left">'+(o?t+"("+o+")":t)+'</p>  <input type="hidden" value="'+e+'" name="'+this.input_field_name+'">  <div class="clear"></div></li>'},pe.Floater=function(t,e,o){pe.init_widget(this,t),this.bottom_margin=o||0,this.start_point_div=t.find(".FloatingAreaStart"),this.end_point_div=e||null,this.start_from=0,this.stop_at=0,this.is_floating=!1,this.sticked=!1,this.floater=this.container.find(".Floater"),this.offset=0,this.disabled=!1,this.top=parseInt(this.floater.css("margin-top"),10)||0,$(window).scroll(this.callback(this.scrolling)),this.set_floating_area(),pe.Floater.register_floater(this)},pe.Floater.events={TOP_REACHED:"Floater_TOP_REACHED",FLOATING:"Floater_FLOATING",BOTTOM_REACHED:"Floater_BOTTOM_REACHED"},pe.Floater.prototype.set_floating_area=function(){this.start_from=this.start_point_div.offset().top,this.end_point_div&&(this.stop_at=this.end_point_div.offset().top)},pe.Floater.prototype.scrolling=function(){if(!this.disabled){this.set_floating_area();var t=$(window).scrollTop(),e=t+this.offset+this.bottom_margin<=this.start_from,o=t+this.offset+this.bottom_margin>this.start_from,i=this.floater.position().top+this.floater.outerHeight(!0)>this.stop_at;this.is_floating||!o||i||this.sticked?this.is_floating&&e?(this.stop_scrolling(),this.fire_event(pe.Floater.events.TOP_REACHED,this)):this.end_point_div&&(!this.sticked&&i?(this.stick(),this.fire_event(pe.Floater.events.BOTTOM_REACHED,this)):this.sticked&&t+this.floater.outerHeight(!0)<=this.stop_at&&this.unstick()):(this.start_floating(),this.fire_event(pe.Floater.events.FLOATING,this),pe.fire_global_event(pe.Floater.events.FLOATING,this))}},pe.Floater.prototype.start_floating=function(){this.floater.addClass("fixed"),this.floater.removeClass("bottom"),this.is_floating=!0,this.sticked=!1,this.set_offset()},pe.Floater.prototype.stick=function(){this.floater.css("top",this.end_point_div.position().top-this.floater.outerHeight(!0)+"px"),this.floater.removeClass("fixed"),this.floater.css("position","absolute"),this.is_floating=!1,this.sticked=!0},pe.Floater.prototype.disable=function(){this.floater.css("top",this.floater.position().top-140+"px"),this.floater.removeClass("fixed"),this.floater.css("position","absolute"),this.is_floating=!1,this.sticked=!0,this.disabled=!0},pe.Floater.prototype.enable=function(){this.disabled=!1},pe.Floater.prototype.unstick=function(){this.floater.css("margin-top",""),this.floater.css("top",""),this.floater.css("position",""),this.start_floating(),this.fire_event(pe.Floater.events.FLOATING,this)},pe.Floater.prototype.stop_scrolling=function(){this.floater.css("margin-top",""),this.floater.removeClass("fixed"),this.floater.removeClass("bottom"),this.is_floating=!1,this.sticked=!1,this.set_offset()},pe.Floater.prototype.set_offset=function(t){t&&(this.offset=t),0!==this.offset&&this.is_floating?this.floater.css("margin-top",this.top+this.offset+"px"):this.floater.css("margin-top","")},pe.Floater.registered_floaters=[],pe.Floater.register_floater=function(t){pe.Floater.registered_floaters.push(t),pe.Floater.update_positions()},pe.Floater.update_positions=function(){if(pe.Floater.registered_floaters=_.sortBy(pe.Floater.registered_floaters,function(t){return t.container.offset().top},null),pe.Floater.registered_floaters[0]&&(pe.Floater.registered_floaters[0].offset=0,1<pe.Floater.registered_floaters.length))for(var t=1;t<pe.Floater.registered_floaters.length;t++){var e=pe.Floater.registered_floaters[t-1].floater,o=(pe.Floater.registered_floaters[t].floater,pe.Floater.registered_floaters[t-1].offset+e.outerHeight());pe.Floater.registered_floaters[t].offset=o,pe.Floater.registered_floaters[t].is_floating&&pe.Floater.registered_floaters[t].start_floating(),pe.Floater.registered_floaters[t].set_floating_area()}},$(document).ready(function(){pe.ajax_loader.content_tags_autocomplete.load(function(t){pe.content_tag_autocomplete=new pe.GeneralAutocompleteInputModule($(".TagSelector"),t,"activity[content_tag_ids][]",window.activity_tags)}),pe.ajax_loader.activity_type_tags.load(function(t){pe.actvity_type_autocomplete=new pe.GeneralAutocompleteInputModule($(".TypeSelector"),t,"activity[type_ids][]",window.activity_types)}),pe.venue_autocomplete=new pe.GeneralAutocompleteInputModule($(".VenueSelector"),"/api/venues/autocomplete.json","activity[venue_ids][]",window.activity_venues),new pe.Floater($(".FloaterContainer")),pe.init_page_framework()});