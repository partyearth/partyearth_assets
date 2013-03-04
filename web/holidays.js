pe.routes={map:{holiday:"/{{city_id}}/holidays/{{id}}-7",holiday_comments:"/services/holidays/{{id}}/comments",holiday_reactions:"/holidays/{{id}}/reactions/all",new_holiday_reactions:"/holidays/{{id}}/reactions",holiday_calendar:"/{{city_id}}/holidays/{{id}}-7/calendar",holiday_photos:"/api/{{city_id}}/holidays/{{id}}/photos",event:"/{{city_id}}/{{*endpoints}}/{{id}}-1"}};
pe.routes.build_path=function(a,b){var c=pe.routes.map[a],d=c.match(/\{\{\*(.+)\}\}/);_.each(d,function(a){b[a]&&(b[a]=b[a].join("/"))});c=c.replace(/\*/,"");return pe.routes.clean_url(pe.templatize(c,b))};pe.routes.clean_url=function(a){return("/"+a).replace(/#[^$\/]+/,"").replace(/(^[^?]+)([^:])\/\//,"$1$2/").replace(/\/\//g,"/")};
pe.routes.recognize_path=function(a){var a=pe.routes.clean_url(a),b,c,d=_.find(_.keys(pe.routes.map),function(d){b=pe.routes.map[d];c=RegExp(b.replace(/\//g,"\\/").replace(/\{\{[^\{\}]+\}\}/g,"(.+)"));return c.test(a)});if(d){for(var f=_.map(b.match(/\{\{[^\}]+\}\}/g),function(a){return a.replace(/\{|\}/g,"")}),g=a.match(c).slice(1,99),h={params:{}},i=function(a){return!_.isEmpty(a)},e=0;e<f.length;e++)"*"==f[e][0]&&(f[e]=f[e].replace(/\*/g,""),g[e]=_.select(g[e].replace(/\*/g,"").split("/"),i)),
h.params[f[e]]=g[e];h.path_info={name:d,template:b};return h}return!1};pe.routes.Request=function(a,b,c){pe.routes.map[a]?(this.path=a,"object"!==typeof b&&(b={id:b}),this.params=b,this.callback=c):alert("This path is not registered in the routes map.")};pe.routes.Request.factory=function(a,b,c){return new pe.routes.Request(a,b,c)};
pe.routes.Request.from_current_location=function(a,b,c){var b=b||{},d=pe.routes.recognize_path(window.location.pathname);return new pe.routes.Request(a,_.extend(d.params,b),c)};pe.routes.Request.prototype.ajax=function(a,b){var c="function"===typeof b?b:this.callback;$.ajax({url:this.build_path(),data:this.params,type:a,success:c})};pe.routes.Request.prototype.build_path=function(){return pe.routes.build_path(this.path,this.params)};pe.routes.Request.prototype.get=function(a){this.ajax("GET",a)};
pe.routes.Request.prototype.post=function(a){this.ajax("POST",a)};pe.init_calendar_buttons=function(){new pe.AddToCalendarButton};pe.AddToCalendarButton=function(){pe.init_widget(this,null);$(".AddToCalendarButton").live("click",this.callback(this.show_dialog))};pe.AddToCalendarButton.prototype.close_dialog=function(){};
pe.AddToCalendarButton.prototype.show_dialog=function(a){var b=$('<div title="Add to your calendar">'),c=function(){b.empty();b.dialog("destroy")};b.dialog({modal:!0,show:!1,close:c});b.html('<div style="margin:0 auto; width: 80px;"><img src="/assets/content_bg/spinner.gif"/></div>');a=$(a.currentTarget);_.isEmpty(a.data("event_id"))?(a=a.data("source_path"),_.isEmpty(a)?alert("NOR event_id, source_path is set for calendar button"):(a=pe.routes.recognize_path(a))?pe.routes.Request.factory(a.path_info.name+
"_calendar",a.params,function(a){b.html(a);b.find("a").click(c)}).get():alert("Calendar route is not recognized")):pe.ajax_loader.add_to_calendar_dialog.load({event_id:a.data("event_id"),date:a.data("date")},function(a){b.html(a);b.find("a").click(c)});return!1};
pe.ChangeImageOnHover=function(a,b){pe.init_widget(this,a);this.image_container=this.container.find(".ImageContainer");this.link_parent_class=b||null;this.include_caption=this.container.data("include-caption")||!1;this.object_links=this.container.find(".HoverLinkToChange");this.object_links.mouseover(this.callback(this.object_link_hovered));var c=b?this.container.find("."+b):[];this.link_wrappers=0<c.length?c:this.object_links.parent()};
pe.ChangeImageOnHover.prototype.image_html=function(a){var b='<a href="{{object_url}}" title="{{link_title}}" class="thumbnail_link"><img src="{{image_url}}" alt="{{alt_tag}}"></a>';this.include_caption&&(b+='<p class="name"><span class="date">{{link_prefix}}</span><a href="{{object_url}}">{{image_caption}}</a></p>');a={object_url:a.attr("href"),image_url:a.data("image-url"),link_title:a.data("title")||"",alt_tag:a.data("image-alt-tag")||"",link_prefix:a.data("link-prefix")||"",image_caption:a.html()};
return pe.templatize(b,a)};pe.ChangeImageOnHover.instantiate_all=function(a){return $.map($(".ChangeImageOnHoverContainer"),function(b){return new pe.ChangeImageOnHover($(b),a)})};pe.ChangeImageOnHover.prototype.object_link_hovered=function(a){a=$(a.target);this.object_links.removeClass("selected");this.link_wrappers.removeClass("selected");a.addClass("selected");this.link_wrapper(a).addClass("selected");this.image_container.html(this.image_html(a));pe.convert_to_rounded_corners()};
pe.ChangeImageOnHover.prototype.link_wrapper=function(a){return this.link_parent_class?a.closest("."+this.link_parent_class):a.parent()};
pe.ReadMore=function(a,b,c){0<a.length&&(pe.init_widget(this,a),this.read_more_control=this.container.find(".ReadMoreControl"),this.read_less_control=this.container.find(".ReadLessControl"),this.read_more_link=this.container.find(".ReadMoreLink"),this.read_more_link.click(this.callback(this.on_read_more_link_clicked)),this.read_less_link=this.container.find(".ReadLessLink"),this.read_less_link.click(this.callback(this.on_read_less_link_clicked)),this.long_description=this.container.find(".LongDescription"),
this.thumbs=this.container.find(".thumbnails"),this.photos=this.container.find(".photo"),this.read_more_handler=b,this.read_less_handler=c)};pe.ReadMore.events={LONG_DESC_OPENED:"ReadMore_LONG_DESC_OPENED"};pe.ReadMore.instantiate_all=function(){var a=$(".ReadMore");0<a.length&&new pe.ReadMore(a)};
pe.ReadMore.prototype.on_read_more_link_clicked=function(){this.long_description.removeClass("clipped");this.read_less_control.show();this.read_more_control.hide();this.thumbs.addClass("hidden");this.photos.removeClass("hidden");pe.fire_global_event(pe.ReadMore.events.LONG_DESC_OPENED);"function"===typeof this.read_more_handler&&this.read_more_handler()};
pe.ReadMore.prototype.on_read_less_link_clicked=function(){this.read_less_control.hide();this.read_more_control.show();this.thumbs.removeClass("hidden");this.photos.addClass("hidden");this.long_description.addClass("clipped");"function"===typeof this.read_less_handler&&this.read_less_handler()};pe.ReadMore.instantiate=function(){return $.map($(".ReadMore"),function(a){return new pe.ReadMore($(a))})};
pe.init_multiline_titles=function(a){var b=a||"two_line_title",c,d;_.each($(".FlexibleHeight"),function(a){d=$(a).find(".FlexibleHeightItem");for(c=0;c<d.length;c++)if(a=$(d[c]),parseInt(a.css("line-height"),10)<a.height()){a.parents(".FlexibleHeight").addClass(b);break}})};
(function(){$(document).ready(function(){return pe.init_page_framework(function(){setTimeout(function(){return pe.ChangeImageOnHover.instantiate_all("LinkWrapper")},5);setTimeout(function(){return pe.ReadMore.instantiate_all()},5);setTimeout(function(){return pe.init_calendar_buttons()},5);return setTimeout(function(){return pe.init_multiline_titles()},5)})})}).call(this);
