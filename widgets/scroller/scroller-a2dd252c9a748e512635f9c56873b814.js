pe.Scroller=function(a,b,c,d,e,f,g,h){pe.init_widget(this,a);this.scroller_container=this.container.find(".ScreensContainer");this.current_item=0;this.scroll_duration=b;this.inactive_button_class=c;this.visible_items_count=d||1;this.scroll_by=e||1;this.single_item_width=f;this.individual_items=this.scroller_container.find(".IndividualItem");this.items_count=this.individual_items.length;this.next_button=this.container.find(".NextButton");this.next_button.click(this.callback(this.next_button_clicked));
this.previous_button=this.container.find(".PreviousButton");this.previous_button.click(this.callback(this.previous_button_clicked));this.page_display_container=this.container.find(".PageDisplay");this.page_display_format=g||"";this.loop_scrolling=h||!1;this.update_display()};
pe.Scroller.prototype.animate_scrolling=function(a){a!=this.current_item&&(this.current_item=a,this.scroller_container.animate({left:"-"+this.current_item*(this.single_item_width||this.individual_items.width())+"px"},this.scroll_duration,"cubicEaseInOut"),this.update_display())};
pe.Scroller.prototype.update_display=function(){0>=this.current_item?this.previous_button.addClass(this.inactive_button_class):this.previous_button.removeClass(this.inactive_button_class);this.current_item>=this.items_count-this.visible_items_count?this.next_button.addClass(this.inactive_button_class):this.next_button.removeClass(this.inactive_button_class);this.page_display_container.html(pe.templatize(this.page_display_format,{current_item_number:this.current_item+1,items_count:this.items_count}))};
pe.Scroller.prototype.next_button_clicked=function(){var a=this.current_item+this.scroll_by;a>this.items_count-this.visible_items_count&&(a=this.loop_scrolling?0:this.items_count-this.visible_items_count);this.animate_scrolling(a)};pe.Scroller.prototype.previous_button_clicked=function(){var a=this.current_item-this.scroll_by;0>a&&(a=this.loop_scrolling?this.items_count-this.visible_items_count:0);this.animate_scrolling(a)};
