pe.TagsWidget=function(b,a,c){pe.init_widget(this,b);this.category_name=a;this.tags=this.filter_top_level_tags(c);this.dropdown_widget=new pe.DropdownModule(this.container,this.html(this.tags),this.callback(this.title_html),!0);this.dropdown_widget.bind_event(pe.DropdownModule.events.CLOSED,this.callback(this.dropdown_closed));this.dropdown_widget.dropdown_div.find(".Buttons .GoButton").click(this.callback(this.go_button_clicked));this.dropdown_widget.dropdown_div.find(".Buttons .ClearButton").click(this.callback(this.clear_button_clicked));
this.checkboxes=$.map(this.container.find(".Input"),this.callback(function(a){a=$(a);a=new pe.Input(a,{type:pe.Input.types.CHECKBOX,label:a.attr("data_label"),initial_state:pe.Input.states.UNCHECKED});a.bind_event(pe.Input.events.CHANGED,this.callback(this.checkbox_clicked));return a}));this.dropdown_widget.expand_dropdown()};pe.TagsWidget.events={CHANGED:"TagsWidget_CHANGED",CLOSED:"TagsWidget_CLOSED"};
pe.TagsWidget.prototype.add_search_configuration=function(b){var a=$.map(this.checkboxes_selected(),function(a){return a.options.label});if(0!==a.length)if("Venue Type"===this.category_name||"Event Type"===this.category_name)b.add_filter(this.category_name,a);else{var c=b.get_filter("tags");c||(c={});c[this.category_name]=a;b.add_filter("tags",c)}};pe.TagsWidget.prototype.checkbox_clicked=function(){this.fire_event(pe.TagsWidget.events.CHANGED)};
pe.TagsWidget.prototype.checkboxes_selected=function(){return $.grep(this.checkboxes,function(b){return b.state==pe.Input.states.CHECKED})};pe.TagsWidget.prototype.clear_button_clicked=function(){$.each(this.checkboxes,function(b,a){a.uncheck()})};pe.TagsWidget.prototype.dropdown_closed=function(){this.fire_event(pe.TagsWidget.events.CLOSED,this)};pe.TagsWidget.prototype.filter_top_level_tags=function(b){var a=[];$.each(b,function(b){a.push(b)});return a.sort()};
pe.TagsWidget.prototype.go_button_clicked=function(){this.dropdown_widget.collapse_dropdown();return!1};pe.TagsWidget.prototype.html=function(b){var a="";if(10>b.length)a+="<table>",$.each(b,this.callback(function(b,c){a+="<tr><td>";a+=this.tag_html(c);a+="</td></tr>"})).join("\n");else for(var a=a+"<table>",c=0,d=b.length,e=Math.ceil(d/2);c<e;c++)a+="<tr>",a+="<td>"+this.tag_html(b[c])+"</td>",c+e<d&&(a+="<td>"+this.tag_html(b[c+e])+"</td>"),a+="</tr>";a+="</table>";return a+='<div class="Buttons"><div class="GoButton btn go_btn float_right">go</div><span class="ClearButton fake_link">clear</span></div>'};
pe.TagsWidget.prototype.select_tags=function(b,a){$.each(this.checkboxes,function(c,d){-1<b.indexOf(d.options.label)?d.check():a||d.uncheck()})};
pe.TagsWidget.prototype.set_tags=function(b){var a=$.map(this.checkboxes_selected(),function(a){return $(a).val()});this.tags=this.filter_top_level_tags(b);this.dropdown_widget.dropdown_div.html(this.html(this.tags));this.checkboxes=this.dropdown_widget.dropdown_div.find("input:checkbox");this.checkboxes.click(this.callback(this.checkbox_clicked));$.each(a,this.callback(function(a,b){this.checkboxes.filter("input[value="+b+"]").attr("checked",!0)}))};
pe.TagsWidget.prototype.tag_html=function(b){return'<div class="Input" data_label="'+b+'"></div>'};
pe.TagsWidget.prototype.title_html=function(){if(!this.dropdown_widget)return this.category_name;this.dropdown_widget.current_selection=$(this.checkboxes_selected());if(this.dropdown_widget.is_expanded())return this.category_name;var b=this.checkboxes_selected();return 0<b.length?'<div class="category_name">'+this.category_name+'</div><div class="selections">'+$.map(b,function(a){return a.options.label}).join(", ")+'</div><div class="footer_bottom"><div class="footer_right"></div></div>':this.category_name};
