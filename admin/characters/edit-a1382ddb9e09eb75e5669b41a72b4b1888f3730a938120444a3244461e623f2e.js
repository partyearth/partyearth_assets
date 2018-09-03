pe.Floater=function(t,e,o){pe.init_widget(this,t),this.bottom_margin=o||0,this.start_point_div=t.find(".FloatingAreaStart"),this.end_point_div=e||null,this.start_from=0,this.stop_at=0,this.is_floating=!1,this.sticked=!1,this.floater=this.container.find(".Floater"),this.offset=0,this.disabled=!1,this.top=parseInt(this.floater.css("margin-top"),10)||0,$(window).scroll(this.callback(this.scrolling)),this.set_floating_area(),pe.Floater.register_floater(this)},pe.Floater.events={TOP_REACHED:"Floater_TOP_REACHED",FLOATING:"Floater_FLOATING",BOTTOM_REACHED:"Floater_BOTTOM_REACHED"},pe.Floater.prototype.set_floating_area=function(){this.start_from=this.start_point_div.offset().top,this.end_point_div&&(this.stop_at=this.end_point_div.offset().top)},pe.Floater.prototype.scrolling=function(){if(!this.disabled){this.set_floating_area();var t=$(window).scrollTop(),e=t+this.offset+this.bottom_margin<=this.start_from,o=t+this.offset+this.bottom_margin>this.start_from,i=this.floater.position().top+this.floater.outerHeight(!0)>this.stop_at;this.is_floating||!o||i||this.sticked?this.is_floating&&e?(this.stop_scrolling(),this.fire_event(pe.Floater.events.TOP_REACHED,this)):this.end_point_div&&(!this.sticked&&i?(this.stick(),this.fire_event(pe.Floater.events.BOTTOM_REACHED,this)):this.sticked&&t+this.floater.outerHeight(!0)<=this.stop_at&&this.unstick()):(this.start_floating(),this.fire_event(pe.Floater.events.FLOATING,this),pe.fire_global_event(pe.Floater.events.FLOATING,this))}},pe.Floater.prototype.start_floating=function(){this.floater.addClass("fixed"),this.floater.removeClass("bottom"),this.is_floating=!0,this.sticked=!1,this.set_offset()},pe.Floater.prototype.stick=function(){this.floater.css("top",this.end_point_div.position().top-this.floater.outerHeight(!0)+"px"),this.floater.removeClass("fixed"),this.floater.css("position","absolute"),this.is_floating=!1,this.sticked=!0},pe.Floater.prototype.disable=function(){this.floater.css("top",this.floater.position().top-140+"px"),this.floater.removeClass("fixed"),this.floater.css("position","absolute"),this.is_floating=!1,this.sticked=!0,this.disabled=!0},pe.Floater.prototype.enable=function(){this.disabled=!1},pe.Floater.prototype.unstick=function(){this.floater.css("margin-top",""),this.floater.css("top",""),this.floater.css("position",""),this.start_floating(),this.fire_event(pe.Floater.events.FLOATING,this)},pe.Floater.prototype.stop_scrolling=function(){this.floater.css("margin-top",""),this.floater.removeClass("fixed"),this.floater.removeClass("bottom"),this.is_floating=!1,this.sticked=!1,this.set_offset()},pe.Floater.prototype.set_offset=function(t){t&&(this.offset=t),0!==this.offset&&this.is_floating?this.floater.css("margin-top",this.top+this.offset+"px"):this.floater.css("margin-top","")},pe.Floater.registered_floaters=[],pe.Floater.register_floater=function(t){pe.Floater.registered_floaters.push(t),pe.Floater.update_positions()},pe.Floater.update_positions=function(){if(pe.Floater.registered_floaters=_.sortBy(pe.Floater.registered_floaters,function(t){return t.container.offset().top},null),pe.Floater.registered_floaters[0]&&(pe.Floater.registered_floaters[0].offset=0,1<pe.Floater.registered_floaters.length))for(var t=1;t<pe.Floater.registered_floaters.length;t++){var e=pe.Floater.registered_floaters[t-1].floater,o=(pe.Floater.registered_floaters[t].floater,pe.Floater.registered_floaters[t-1].offset+e.outerHeight());pe.Floater.registered_floaters[t].offset=o,pe.Floater.registered_floaters[t].is_floating&&pe.Floater.registered_floaters[t].start_floating(),pe.Floater.registered_floaters[t].set_floating_area()}},pe.CloseButton=function(t,e){if(pe.init_widget(this,t),this.close_button=t.find(".CloseButton"),"function"==typeof e)this.close_button.click(e);else switch(e){case pe.CloseButton.close_methods.REMOVE:this.close_button.click(this.callback(this.remove_container));break;case pe.CloseButton.close_methods.HIDE:this.close_button.click(this.callback(this.hide_container));break;default:alert("unknown value for 'close_method' parameter.")}},pe.CloseButton.close_methods={REMOVE:"REMOVE",HIDE:"HIDE"},pe.CloseButton.events={CLOSED:"CloseButton_CLOSED"},pe.CloseButton.prototype.remove_container=function(){return this.container.detach(),this.fire_event(pe.CloseButton.events.CLOSED),this.container.remove(),!1},pe.CloseButton.prototype.hide_container=function(){return this.fire_event(pe.CloseButton.events.CLOSED),this.container.hide(),!1},pe.SortableAutocomplete=function(t,e,o,i,s){pe.init_widget(this,t),this.autocomplete_data_or_url=e,this.limit=i,this.input_field_name=o,this.container.html(this.html()),this.dummy_input_field=this.container.find(".DummyInputField"),this.messaging_area=this.container.find(".Messaging"),this.autocomplete_input_field=this.container.find(".AutocompleteField");var a=this.autocomplete_input_field.autocomplete({source:this.autocomplete_data_or_url,minLength:1,close:this.callback(this.autocomplete_closed),select:this.callback(this.autocomplete_entry_selected)}).data("autocomplete");a._renderItem=pe.SortableAutocomplete.render_autocomplete_entry,a._renderMenu=pe.SortableAutocomplete.render_autocomplete_list,this.selected_data_list_div=this.container.find(".SelectedDataList"),this.selected_data_list_div.sortable(),this.selected_data_list_div.disableSelection(),s&&this.add_data_to_list(s)},pe.SortableAutocomplete.events={SELECTED:"SortableAutocomplete_SELECTED"},pe.SortableAutocomplete.prototype.add_data_to_list=function(t){0!==t.length&&(this.remove_dummy_row(),$.each(t,this.callback(function(t,e){this.add_selected_data(e.label,e.id,e.category)})),this.enforce_limit())},pe.SortableAutocomplete.prototype.add_dummy_row=function(){this.dummy_input_field||(this.dummy_input_field=$('<input class="DummyInputField" type="hidden" name="'+this.input_field_name+'" value="">'),this.autocomplete_input_field.after(this.dummy_input_field))},pe.SortableAutocomplete.prototype.add_selected_data=function(t,e,o){this.remove_dummy_row(),this.selected_data_list_div.append(this.selected_data_html(t,e,o)),new pe.CloseButton(this.selected_data_list_div.find(".SelectedInputData").last(),pe.CloseButton.close_methods.REMOVE).bind_event(pe.CloseButton.events.CLOSED,this.callback(this.close_button_clicked)),this.enforce_limit()},pe.SortableAutocomplete.prototype.autocomplete_closed=function(){this.autocomplete_input_field.val("")},pe.SortableAutocomplete.prototype.autocomplete_entry_selected=function(t,e){var o=e.item;this.add_selected_data(o.label,o.id,o.category),this.fire_event(pe.SortableAutocomplete.events.SELECTED,o.id)},pe.SortableAutocomplete.prototype.close_button_clicked=function(){0===this.selected_data_list_div.find(".SelectedInputData").length&&this.add_dummy_row(),this.enforce_limit()},pe.SortableAutocomplete.prototype.enforce_limit=function(){this.selected_data_list_div.find(".SelectedInputData").length>=this.limit?(this.messaging_area.html("You have reached the selection limit. Please remove before adding."),this.autocomplete_input_field.autocomplete("disable")):(this.messaging_area.html(""),this.autocomplete_input_field.autocomplete("enable"))},pe.SortableAutocomplete.prototype.html=function(){return'<input class="AutocompleteField" type="text"><div class="Messaging"></div><input class="DummyInputField" type="hidden" name="'+this.input_field_name+'" value=""><ul class="SelectedDataList" id="sortable"></ul>'},pe.SortableAutocomplete.prototype.remove_dummy_row=function(){this.dummy_input_field&&(this.dummy_input_field.remove(),this.dummy_input_field=null)},pe.SortableAutocomplete.render_autocomplete_entry=function(t,e){e.display_label=e.category?pe.templatize("{{label}} ({{category}})",e):e.label;var o=$(pe.templatize("<li><a>{{display_label}}</a></li>",e));return o.data("item.autocomplete",e),t.append(o),o},pe.SortableAutocomplete.render_autocomplete_list=function(o,t){var i=this,s="",a=" first_category";$.each(t,function(t,e){e.type!=s&&(o.append("<li class='ui-autocomplete-category "+a+"'>"+e.type+"</li>"),s=e.type),i._renderItem(o,e)})},pe.SortableAutocomplete.prototype.selected_data_html=function(t,e,o){return'<li class="SelectedInputData ui-state-default"><img style="margin-right:20px; width: 15px; height: 15px;" src="/assets/events/close.png"class="CloseButton float_left"><p class="float_left">'+(o?t+"("+o+")":t)+'</p><input type="hidden" value="'+e+'" name="'+this.input_field_name+'"><div class="clear"></div></li>'},$(document).ready(function(){pe.ajax_loader.character_tags.load(function(t){new pe.SortableAutocomplete($(".CharacterTags"),t,"ordered_tag_ids[]",25,window.existing_tags)}),new pe.Floater($(".FloaterContainer")),pe.init_page_framework()});