pe.CategoryDropdown=function(a,c,b){pe.init_widget(this,a);this.container.html(this.dom());this.categories=c;this.tags_widget_list=b;this.show_category_dropdown_link=this.container.find(".ShowCategoriesLink");this.show_category_dropdown_link.click(this.callback(this.show_category_dropdown_link_clicked));this.category_list_div=this.container.find(".CategoriesDropdown");this.category_list_div.hide();this.dropdown_module=new pe.DropdownModule(this.category_list_div,this.callback(this.dropdown_html),
this.callback(this.dropdown_title),!1);this.dropdown_module.bind_event(pe.DropdownModule.events.CHANGED,this.callback(this.category_selected))};pe.CategoryDropdown.events={CHANGED:"CategoryDropdown_CHANGED"};pe.CategoryDropdown.prototype.category_selected=function(a,c){var b=$(c).html();this.tags_widget_list.add_category(b);this.dropdown_module.current_selection=null;this.fire_event(pe.CategoryDropdown.events.CHANGED,b)};
pe.CategoryDropdown.prototype.dropdown_html=function(){var a=this.tags_widget_list.visible_categories(),a=pe.array_remove(this.categories,a);return $.map(a,function(a){return'<div class="Choice choice '+("Venue Type"===a||"Event Type"===a?"large":"")+'">'+a+"</div>"}).join("\n")};pe.CategoryDropdown.prototype.dropdown_title=function(){return"Choose from list"};pe.CategoryDropdown.prototype.dom=function(){return'<div class="ShowCategoriesLink arrow_link"><span class="blue_link fake_link">or Choose from list</span></div><div class="CategoriesDropdown search_dropdown dropdown_wrapper"></div>'};
pe.CategoryDropdown.prototype.set_categories=function(a){this.categories=a};pe.CategoryDropdown.prototype.show_category_dropdown_link_clicked=function(){this.show_category_dropdown_link.hide();this.category_list_div.show()};
