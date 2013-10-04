pe.Floater=function(a,b,c){pe.init_widget(this,a);this.bottom_margin=c||0;this.start_point_div=a.find(".FloatingAreaStart");this.end_point_div=b||null;this.stop_at=this.start_from=0;this.sticked=this.is_floating=!1;this.floater=this.container.find(".Floater");this.offset=0;this.disabled=!1;this.top=parseInt(this.floater.css("margin-top"),10)||0;$(window).scroll(this.callback(this.scrolling));this.set_floating_area();pe.Floater.register_floater(this)};
pe.Floater.events={TOP_REACHED:"Floater_TOP_REACHED",FLOATING:"Floater_FLOATING",BOTTOM_REACHED:"Floater_BOTTOM_REACHED"};pe.Floater.prototype.set_floating_area=function(){this.start_from=this.start_point_div.offset().top;this.end_point_div&&(this.stop_at=this.end_point_div.offset().top)};
pe.Floater.prototype.scrolling=function(){if(!this.disabled){this.set_floating_area();var a=$(window).scrollTop(),b=a+this.offset+this.bottom_margin<=this.start_from,c=a+this.offset+this.bottom_margin>this.start_from,d=this.floater.position().top+this.floater.outerHeight(!0)>this.stop_at;!this.is_floating&&c&&!d&&!this.sticked?(this.start_floating(),this.fire_event(pe.Floater.events.FLOATING,this),pe.fire_global_event(pe.Floater.events.FLOATING,this)):this.is_floating&&b?(this.stop_scrolling(),this.fire_event(pe.Floater.events.TOP_REACHED,
this)):this.end_point_div&&(!this.sticked&&d?(this.stick(),this.fire_event(pe.Floater.events.BOTTOM_REACHED,this)):this.sticked&&a+this.floater.outerHeight(!0)<=this.stop_at&&this.unstick())}};pe.Floater.prototype.start_floating=function(){this.floater.addClass("fixed");this.floater.removeClass("bottom");this.is_floating=!0;this.sticked=!1;this.set_offset()};
pe.Floater.prototype.stick=function(){this.floater.css("top",this.end_point_div.position().top-this.floater.outerHeight(!0)+"px");this.floater.removeClass("fixed");this.floater.css("position","absolute");this.is_floating=!1;this.sticked=!0};pe.Floater.prototype.disable=function(){this.floater.css("top",this.floater.position().top-140+"px");this.floater.removeClass("fixed");this.floater.css("position","absolute");this.is_floating=!1;this.disabled=this.sticked=!0};
pe.Floater.prototype.enable=function(){this.disabled=!1};pe.Floater.prototype.unstick=function(){this.floater.css("margin-top","");this.floater.css("top","");this.floater.css("position","");this.start_floating();this.fire_event(pe.Floater.events.FLOATING,this)};pe.Floater.prototype.stop_scrolling=function(){this.floater.css("margin-top","");this.floater.removeClass("fixed");this.floater.removeClass("bottom");this.sticked=this.is_floating=!1;this.set_offset()};
pe.Floater.prototype.set_offset=function(a){a&&(this.offset=a);0!==this.offset&&this.is_floating?this.floater.css("margin-top",this.top+this.offset+"px"):this.floater.css("margin-top","")};pe.Floater.registered_floaters=[];pe.Floater.register_floater=function(a){pe.Floater.registered_floaters.push(a);pe.Floater.update_positions()};
pe.Floater.update_positions=function(){pe.Floater.registered_floaters=_.sortBy(pe.Floater.registered_floaters,function(a){return a.container.offset().top},null);if(pe.Floater.registered_floaters[0]&&(pe.Floater.registered_floaters[0].offset=0,1<pe.Floater.registered_floaters.length))for(var a=1;a<pe.Floater.registered_floaters.length;a++){var b=pe.Floater.registered_floaters[a-1].offset+pe.Floater.registered_floaters[a-1].floater.outerHeight();pe.Floater.registered_floaters[a].offset=b;pe.Floater.registered_floaters[a].is_floating&&
pe.Floater.registered_floaters[a].start_floating();pe.Floater.registered_floaters[a].set_floating_area()}};pe.CloseButton=function(a,b){pe.init_widget(this,a);this.close_button=a.find(".CloseButton");if("function"===typeof b)this.close_button.click(b);else switch(b){case pe.CloseButton.close_methods.REMOVE:this.close_button.click(this.callback(this.remove_container));break;case pe.CloseButton.close_methods.HIDE:this.close_button.click(this.callback(this.hide_container));break;default:alert("unknown value for 'close_method' parameter.")}};
pe.CloseButton.close_methods={REMOVE:"REMOVE",HIDE:"HIDE"};pe.CloseButton.events={CLOSED:"CloseButton_CLOSED"};pe.CloseButton.prototype.remove_container=function(){this.container.detach();this.fire_event(pe.CloseButton.events.CLOSED);this.container.remove();return!1};pe.CloseButton.prototype.hide_container=function(){this.fire_event(pe.CloseButton.events.CLOSED);this.container.hide();return!1};
pe.SortableAutocomplete=function(a,b,c,d,f){pe.init_widget(this,a);this.autocomplete_data_or_url=b;this.limit=d;this.input_field_name=c;this.container.html(this.html());this.dummy_input_field=this.container.find(".DummyInputField");this.messaging_area=this.container.find(".Messaging");this.autocomplete_input_field=this.container.find(".AutocompleteField");a=this.autocomplete_input_field.autocomplete({source:this.autocomplete_data_or_url,minLength:1,close:this.callback(this.autocomplete_closed),select:this.callback(this.autocomplete_entry_selected)}).data("autocomplete");
a._renderItem=pe.SortableAutocomplete.render_autocomplete_entry;a._renderMenu=pe.SortableAutocomplete.render_autocomplete_list;this.selected_data_list_div=this.container.find(".SelectedDataList");this.selected_data_list_div.sortable();this.selected_data_list_div.disableSelection();f&&this.add_data_to_list(f)};pe.SortableAutocomplete.events={SELECTED:"SortableAutocomplete_SELECTED"};
pe.SortableAutocomplete.prototype.add_data_to_list=function(a){0!==a.length&&(this.remove_dummy_row(),$.each(a,this.callback(function(a,c){this.add_selected_data(c.label,c.id,c.category)})),this.enforce_limit())};pe.SortableAutocomplete.prototype.add_dummy_row=function(){this.dummy_input_field||(this.dummy_input_field=$('<input class="DummyInputField" type="hidden" name="'+this.input_field_name+'" value="">'),this.autocomplete_input_field.after(this.dummy_input_field))};
pe.SortableAutocomplete.prototype.add_selected_data=function(a,b,c){this.remove_dummy_row();this.selected_data_list_div.append(this.selected_data_html(a,b,c));(new pe.CloseButton(this.selected_data_list_div.find(".SelectedInputData").last(),pe.CloseButton.close_methods.REMOVE)).bind_event(pe.CloseButton.events.CLOSED,this.callback(this.close_button_clicked));this.enforce_limit()};pe.SortableAutocomplete.prototype.autocomplete_closed=function(){this.autocomplete_input_field.val("")};
pe.SortableAutocomplete.prototype.autocomplete_entry_selected=function(a,b){var c=b.item;this.add_selected_data(c.label,c.id,c.category);this.fire_event(pe.SortableAutocomplete.events.SELECTED,c.id)};pe.SortableAutocomplete.prototype.close_button_clicked=function(){0===this.selected_data_list_div.find(".SelectedInputData").length&&this.add_dummy_row();this.enforce_limit()};
pe.SortableAutocomplete.prototype.enforce_limit=function(){this.selected_data_list_div.find(".SelectedInputData").length>=this.limit?(this.messaging_area.html("You have reached the selection limit. Please remove before adding."),this.autocomplete_input_field.autocomplete("disable")):(this.messaging_area.html(""),this.autocomplete_input_field.autocomplete("enable"))};
pe.SortableAutocomplete.prototype.html=function(){return'<input class="AutocompleteField" type="text"><div class="Messaging"></div><input class="DummyInputField" type="hidden" name="'+this.input_field_name+'" value=""><ul class="SelectedDataList" id="sortable"></ul>'};pe.SortableAutocomplete.prototype.remove_dummy_row=function(){this.dummy_input_field&&(this.dummy_input_field.remove(),this.dummy_input_field=null)};
pe.SortableAutocomplete.render_autocomplete_entry=function(a,b){b.display_label=b.category?pe.templatize("{{label}} ({{category}})",b):b.label;var c=$(pe.templatize("<li><a>{{display_label}}</a></li>",b));c.data("item.autocomplete",b);a.append(c);return c};pe.SortableAutocomplete.render_autocomplete_list=function(a,b){var c=this,d="";$.each(b,function(b,e){e.type!=d&&(a.append("<li class='ui-autocomplete-category  first_category'>"+e.type+"</li>"),d=e.type);c._renderItem(a,e)})};
pe.SortableAutocomplete.prototype.selected_data_html=function(a,b,c){return'<li class="SelectedInputData ui-state-default"><img style="margin-right:20px; width: 15px; height: 15px;" src="/assets/events/close.png"class="CloseButton float_left"><p class="float_left">'+(c?a+"("+c+")":a)+'</p><input type="hidden" value="'+b+'" name="'+this.input_field_name+'"><div class="clear"></div></li>'};
$(document).ready(function(){pe.ajax_loader.character_tags.load(function(a){new pe.SortableAutocomplete($(".CharacterTags"),a,"ordered_tag_ids[]",25,window.existing_tags)});new pe.Floater($(".FloaterContainer"));pe.init_page_framework()});
