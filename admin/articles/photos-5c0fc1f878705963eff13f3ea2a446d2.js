pe.CloseButton=function(a,b){pe.init_widget(this,a);this.close_button=a.find(".CloseButton");if("function"===typeof b)this.close_button.click(b);else switch(b){case pe.CloseButton.close_methods.REMOVE:this.close_button.click(this.callback(this.remove_container));break;case pe.CloseButton.close_methods.HIDE:this.close_button.click(this.callback(this.hide_container));break;default:alert("unknown value for 'close_method' parameter.")}};pe.CloseButton.close_methods={REMOVE:"REMOVE",HIDE:"HIDE"};
pe.CloseButton.events={CLOSED:"CloseButton_CLOSED"};pe.CloseButton.prototype.remove_container=function(){this.container.detach();this.fire_event(pe.CloseButton.events.CLOSED);this.container.remove();return!1};pe.CloseButton.prototype.hide_container=function(){this.fire_event(pe.CloseButton.events.CLOSED);this.container.hide();return!1};
pe.SingleSelectionAutocompleteField=function(a,b,c,f){pe.init_widget(this,a);this.close_button_callback=this.on_item_selected=null;this.autocomplete_data_or_url=b;this.input_field_name=c;this.container.html(this.html());this.dummy_input_field=this.container.find(".DummyInputField");this.autocomplete_input_field=this.container.find(".AutocompleteField");this.autocomplete_handler();this.selected_data_container=this.container.find(".SelectedValue");f&&this.set_field_value(f)};
pe.SingleSelectionAutocompleteField.events={SELECTED:"SingleSelectionAutocompleteField_SELECTED"};pe.SingleSelectionAutocompleteField.prototype.set_autocomplete_url=function(a){a&&(this.autocomplete_data_or_url=a,this.autocomplete_handler())};pe.SingleSelectionAutocompleteField.prototype.set_field_value=function(a){a&&0!==a.length&&(this.remove_dummy_row(),this.autocomplete_data_selected(a))};
pe.SingleSelectionAutocompleteField.prototype.add_dummy_row=function(){this.dummy_input_field||(this.dummy_input_field=$('<input class="DummyInputField"        type="hidden" name="'+this.input_field_name+'"       value="x_mock_single_value_x">'),this.autocomplete_input_field.after(this.dummy_input_field))};
pe.SingleSelectionAutocompleteField.prototype.autocomplete_data_selected=function(a){this.selected_data=a;this.remove_dummy_row();this.selected_data_container.append(this.selected_data_html(a.label,a.id,a.category));(new pe.CloseButton(this.selected_data_container.find(".SelectedInputData").last(),pe.CloseButton.close_methods.REMOVE)).bind_event(pe.CloseButton.events.CLOSED,this.callback(this.close_button_clicked));if(this.on_item_selected)this.on_item_selected(a)};
pe.SingleSelectionAutocompleteField.prototype.item_selected=function(a){this.on_item_selected=a};
pe.SingleSelectionAutocompleteField.prototype.autocomplete_handler=function(){this.autocomplete_input_field.autocomplete({source:this.autocomplete_data_or_url,minLength:1,focus:function(){return!1},close:this.callback(function(){this.autocomplete_input_field.val("")}),select:this.callback(function(a,b){var c=b.item;this.autocomplete_data_selected(c);this.fire_event(pe.SingleSelectionAutocompleteField.events.SELECTED,c.id)})}).data("autocomplete")._renderItem=function(a,b){b.display_label=b.category?
pe.templatize("{{label}} ({{category}})",b):b.label;return $("<li></li>").data("item.autocomplete",b).append(pe.templatize("<a>{{display_label}}</a>",b)).appendTo(a)}};pe.SingleSelectionAutocompleteField.prototype.clear_selected_data=function(){this.selected_data_container.html("");this.add_dummy_row()};
pe.SingleSelectionAutocompleteField.prototype.close_button_clicked=function(){0===this.selected_data_container.find(".SelectedInputData").length&&this.add_dummy_row();this.close_button_callback&&this.close_button_callback();this.autocomplete_input_field.show();this.autocomplete_input_field.focus()};pe.SingleSelectionAutocompleteField.prototype.display_close_button=function(){this.selected_data_container.find(".CloseButton").show()};pe.SingleSelectionAutocompleteField.prototype.hide_close_button=function(){this.selected_data_container.find(".CloseButton").hide()};
pe.SingleSelectionAutocompleteField.prototype.html=function(){return'<input class="AutocompleteField" type="text"><input class="DummyInputField" type="hidden" name="'+this.input_field_name+'" value="x_mock_single_value_x"><div class="SelectedValue"></div>'};pe.SingleSelectionAutocompleteField.prototype.remove_dummy_row=function(){this.dummy_input_field&&(this.dummy_input_field.remove(),this.dummy_input_field=null)};
pe.SingleSelectionAutocompleteField.prototype.replace_data_in_list=function(a){this.clear_selected_data();this.set_field_value(a)};pe.SingleSelectionAutocompleteField.prototype.selected_data_html=function(a,b,c){return'<div class="SelectedInputData selected_data">  <div class="CloseButton close_button">'+(c?a+"("+c+")":a)+'</div>  <input type="hidden" value="'+b+'" name="'+this.input_field_name+'"></div>'};
pe.SeeMoreButton=function(a,b){pe.init_widget(this,a);this.options={item_container_id:a.attr("rel"),initial_page_number:1,item_class:"Paginable",per_page:16,server_url:"index.ehtml",autoload:!0};$.extend(this.options,b);this.current_page_number=this.options.initial_page_number;this.item_container=$("#"+this.options.item_container_id);this.on_page_loaded=this.options.on_page_loaded;this.options.per_page=this.item_container.find("."+this.options.item_class).length||this.options.per_page;this.next_page_content=
"";this.container.click(this.callback(this.show_next_page));this.hide();this.options.autoload&&this.load_next_page()};pe.SeeMoreButton.prototype.load_next_page=function(a){var b=this.url()+"page="+(this.current_page_number+1)+"&per_page="+this.options.per_page;$.get(b,null,a?a:this.callback(this.set_next_page_content))};
pe.SeeMoreButton.prototype.set_next_page_content=function(a){this.next_page_content=a;this.refresh_photo_links();/\S/.test(a)?this.show():this.hide();if(this.on_page_loaded&&"function"===typeof this.on_page_loaded)this.on_page_loaded()};pe.SeeMoreButton.prototype.refresh_photo_links=function(){window.location.href.match(/events/)&&$(".Paginable a").each(function(){var a=pe.fetch_photo_id_from_url($(this).attr("href")+"");$(this).attr("href",window.location+"/"+a)})};
pe.SeeMoreButton.prototype.reset=function(){this.current_page_number=this.options.initial_page_number;this.container.show()};
pe.SeeMoreButton.prototype.show_next_page=function(){if("function"===typeof this.options.on_click)this.options.on_click();this.options.autoload?(this.item_container.append(this.next_page_content),this.current_page_number+=1,this.load_next_page()):this.load_next_page(this.callback(function(a){this.item_container.append(a);this.current_page_number+=1;this.container.toggle(!_.isEmpty(a));if(this.on_page_loaded&&"function"===typeof this.on_page_loaded)this.on_page_loaded()}));return!1};
pe.SeeMoreButton.prototype.url=function(){var a;a="function"===typeof this.options.server_url?this.options.server_url():this.options.server_url;return a+=/\?/.test(a)?"&":"?"};
(function(a){a.extend(a.fn,{swapClass:function(a,b){var e=this.filter("."+a);this.filter("."+b).removeClass(b).addClass(a);e.removeClass(a).addClass(b);return this},replaceClass:function(a,b){return this.filter("."+a).removeClass(a).addClass(b).end()},hoverClass:function(b){b=b||"hover";return this.hover(function(){a(this).addClass(b)},function(){a(this).removeClass(b)})},heightToggle:function(a,b){a?this.animate({height:"toggle"},a,b):this.each(function(){jQuery(this)[jQuery(this).is(":hidden")?
"show":"hide"]();b&&b.apply(this,arguments)})},heightHide:function(a,b){a?this.animate({height:"hide"},a,b):(this.hide(),b&&this.each(b))},prepareBranches:function(a){a.prerendered||(this.filter(":last-child:not(ul)").addClass(b.last),this.filter((a.collapsed?"":"."+b.closed)+":not(."+b.open+")").find(">ul").hide());return this.filter(":has(>ul)")},applyClasses:function(c,f){this.filter(":has(>ul):not(:has(>a))").find(">span").unbind("click.treeview").bind("click.treeview",function(b){this==b.target&&
f.apply(a(this).next())}).add(a("a",this)).hoverClass();if(!c.prerendered){this.filter(":has(>ul:hidden)").addClass(b.expandable).replaceClass(b.last,b.lastExpandable);this.not(":has(>ul:hidden)").addClass(b.collapsable).replaceClass(b.last,b.lastCollapsable);var e=this.find("div."+b.hitarea);e.length||(e=this.prepend('<div class="'+b.hitarea+'"/>').find("div."+b.hitarea));e.removeClass().addClass(b.hitarea).each(function(){var b="";a.each(a(this).parent().attr("class").split(" "),function(){b+=this+
"-hitarea "});a(this).addClass(b)})}this.find("div."+b.hitarea).click(f)},treeview:function(c){function f(c,i){function d(d){return function(){e.apply(a("div."+b.hitarea,c).filter(function(){return d?a(this).parent("."+d).length:!0}));return!1}}a("a:eq(0)",i).click(d(b.collapsable));a("a:eq(1)",i).click(d(b.expandable));a("a:eq(2)",i).click(d())}function e(){a(this).parent().find(">.hitarea").swapClass(b.collapsableHitarea,b.expandableHitarea).swapClass(b.lastCollapsableHitarea,b.lastExpandableHitarea).end().swapClass(b.collapsable,
b.expandable).swapClass(b.lastCollapsable,b.lastExpandable).find(">ul").heightToggle(c.animated,c.toggle);c.unique&&a(this).parent().siblings().find(">.hitarea").replaceClass(b.collapsableHitarea,b.expandableHitarea).replaceClass(b.lastCollapsableHitarea,b.lastExpandableHitarea).end().replaceClass(b.collapsable,b.expandable).replaceClass(b.lastCollapsable,b.lastExpandable).find(">ul").heightHide(c.animated,c.toggle)}function m(){var b=[];g.each(function(c,d){b[c]=a(d).is(":has(>ul:visible)")?1:0});
a.cookie(c.cookieId,b.join(""),c.cookieOptions)}function j(){var b=a.cookie(c.cookieId);if(b){var i=b.split("");g.each(function(b,c){a(c).find(">ul")[parseInt(i[b])?"show":"hide"]()})}}c=a.extend({cookieId:"treeview"},c);if(c.toggle){var n=c.toggle;c.toggle=function(){return n.apply(a(this).parent()[0],arguments)}}this.data("toggler",e);this.addClass("treeview");var g=this.find("li").prepareBranches(c);switch(c.persist){case "cookie":var i=c.toggle;c.toggle=function(){m();i&&i.apply(this,arguments)};
j();break;case "location":var l=this.find("a").filter(function(){return this.href.toLowerCase()==location.href.toLowerCase()});l.length&&(l=l.addClass("selected").parents("ul, li").add(l.next()).show(),c.prerendered&&l.filter("li").swapClass(b.collapsable,b.expandable).swapClass(b.lastCollapsable,b.lastExpandable).find(">.hitarea").swapClass(b.collapsableHitarea,b.expandableHitarea).swapClass(b.lastCollapsableHitarea,b.lastExpandableHitarea))}g.applyClasses(c,e);c.control&&(f(this,c.control),a(c.control).show());
return this}});a.treeview={};var b=a.treeview.classes={open:"open",closed:"closed",expandable:"expandable",expandableHitarea:"expandable-hitarea",lastExpandableHitarea:"lastExpandable-hitarea",collapsable:"collapsable",collapsableHitarea:"collapsable-hitarea",lastCollapsableHitarea:"lastCollapsable-hitarea",lastCollapsable:"lastCollapsable",lastExpandable:"lastExpandable",last:"last",hitarea:"hitarea"}})(jQuery);
(function(a){var b={topSpacing:0,bottomSpacing:0,className:"is-sticky",wrapperClassName:"sticky-wrapper"},c=a(window),f=a(document),e=[],m=c.height(),j=function(){for(var a=c.scrollTop(),b=f.height(),k=b-m,k=a>k?k-a:0,g=0;g<e.length;g++){var d=e[g],h=d.stickyWrapper.offset().top-d.topSpacing-k;a<=h?null!==d.currentTop&&(d.stickyElement.css("position","").css("top","").removeClass(d.className),d.stickyElement.parent().removeClass(d.className),d.currentTop=null):(h=b-d.stickyElement.outerHeight()-d.topSpacing-
d.bottomSpacing-a-k,h=0>h?h+d.topSpacing:d.topSpacing,d.currentTop!=h&&(d.stickyElement.css("position","fixed").css("top",h).addClass(d.className),d.stickyElement.parent().addClass(d.className),d.currentTop=h))}},n=function(){m=c.height()},g={init:function(c){var f=a.extend(b,c);return this.each(function(){var b=a(this);stickyId=b.attr("id");wrapper=a("<div></div>").attr("id",stickyId+"-sticky-wrapper").addClass(f.wrapperClassName);b.wrapAll(wrapper);var c=b.parent();c.css("height",b.outerHeight());
e.push({topSpacing:f.topSpacing,bottomSpacing:f.bottomSpacing,stickyElement:b,currentTop:null,stickyWrapper:c,className:f.className})})},update:j};window.addEventListener?(window.addEventListener("scroll",j,!1),window.addEventListener("resize",n,!1)):window.attachEvent&&(window.attachEvent("onscroll",j),window.attachEvent("onresize",n));a.fn.sticky=function(b){if(g[b])return g[b].apply(this,Array.prototype.slice.call(arguments,1));if(typeof b==="object"||!b)return g.init.apply(this,arguments);a.error("Method "+
b+" does not exist on jQuery.sticky")};a(function(){setTimeout(j,0)})})(jQuery);
pe.PhotoBloodhound=function(a){pe.init_widget(this,a);this.base_url="/admin/articles/photos.ehtml";this.filters_form=this.container.find(".Filters");this.filters_form.submit(function(){return!1});this.form=this.container.find(".PhotosForm");this.form.parent().hide();this.hider=this.container.find(".Hider");this.hider.click(this.callback(this.hider_clicked));this.last_checked=null;this.reset_button=this.container.find(".ResetButton");this.reset_button.click(this.callback(this.reset));this.search_button=
this.container.find(".SearchButton");this.search_button.click(this.callback(this.search_button_clicked));this.subtagger=this.container.find(".Subtagger");this.see_more_button=new pe.SeeMoreButton(this.container.find(".ShowMoreButton"),{autoload:!1,on_click:this.callback(this.init_loading),on_page_loaded:this.callback(this.reset_ui),server_url:this.callback(this.url)});this.container.find(".TagsTree").treeview({collapsed:!0});this.container.find(".Searcher").sticky({topSpacing:0});this.filters_form.find("input, textarea, select").change(this.callback(function(){this.search_button.removeClass("disabled").removeAttr("disabled")}));
this.filters_form.find(".FilterTrigger").click(function(a){$(a.currentTarget).toggleClass("blue_text");$(a.currentTarget).parent(".Filter").find(".FilterOptions").toggle()});this.container.find(".DeselectAllButton").click(this.callback(function(){this.form[0].reset();this.update_counters()}));this.form.find("input").live("click",this.callback(this.photo_checked))};
pe.PhotoBloodhound.prototype.init_loading=function(){this.search_button.addClass("disabled").attr("disabled","disabled");this.container.find(".Spinner").removeClass("hidden");this.form.parent().show()};
pe.PhotoBloodhound.prototype.hider_clicked=function(){this.filters_form.toggle(!this.filters_form.is(":visible"));this.container.find(".sticky-wrapper").css("height",this.container.find(".Searcher").outerHeight()+"px");if(this.filters_form.is(":visible"))this.container.find(".Debugger").html("Filters: ");else{var a="Filters: "+this.filters_form.serialize(),a=a.replace(/utf8=[^&]+(&|$)/,""),a=a.replace(/authenticity_token=[^&]+(&|$)/,""),a=a.replace(/&/g,", "),a=decodeURIComponent(a),a=a.replace(/(\w+)\[\]=/g,
"<b>$1</b>:&nbsp;");this.container.find(".Debugger").html(a)}return!1};pe.PhotoBloodhound.prototype.photo_checked=function(a){if(this.last_checked&&a.shiftKey)for(var b=this.form.find("input"),c=b.index(this.last_checked),f=b.index(a.target),e=Math.min(c,f),c=Math.max(c,f);e<c;e++)this.last_checked.is(":checked")?$(b[e]).attr("checked","checked"):$(b[e]).removeAttr("checked");this.last_checked=$(a.target);this.update_counters()};
pe.PhotoBloodhound.prototype.search_button_clicked=function(){this.init_loading();this.form.html("");$.get(this.base_url,this.serialize(),this.callback(function(a){this.form.html(a);this.see_more_button.reset();this.reset_ui()}));return!1};pe.PhotoBloodhound.prototype.reset=function(){this.filters_form[0].reset();this.search_button.removeClass("disabled").removeAttr("disabled");return!1};pe.PhotoBloodhound.prototype.reset_ui=function(){this.container.find(".Spinner").addClass("hidden");this.update_counters()};
pe.PhotoBloodhound.prototype.serialize=function(){var a;this.subtagger.is(":checked")?(this.container.find(".TagsTree>.Tag .Tag input:checked").addClass("Checked").removeAttr("checked"),a=this.filters_form.serialize(),this.filters_form.find(".Checked").removeClass("Checked").attr("checked","checked")):a=this.filters_form.serialize();return a};pe.PhotoBloodhound.prototype.update_counters=function(){this.container.find(".TotalCount").html(this.form.find("input[type=checkbox]").length);this.container.find(".SelectedCount").html(this.form.find("input:checked").length)};
pe.PhotoBloodhound.prototype.url=function(){return this.base_url+"?"+this.serialize()};
$(document).ready(function(){pe.bloodhound=new pe.PhotoBloodhound($(".Bloodhound"));pe.autocomplete=new pe.SingleSelectionAutocompleteField($(".DestinationAutocomplete"),"/api/articles/autocomplete","article_id",[]);$(".CopyPhotosButton").click(function(a){var b=$(a.target);b.addClass("disabled");var a=$(".PhotosForm").serialize(),c=$(".SelectedInputData > input[name=article_id]").val();$.post("/admin/articles/photos/copy",a+"&article_id="+c).success(function(){b.removeClass("disabled")})});$(".Copier").sticky({topSpacing:0});
pe.init_page_framework()});
