(function(){var d=function(a,b){return function(){return a.apply(b,arguments)}},g=pe,c=function(a,b,c){var e=this;this.container=a;this.app_id=b;this.type=null!=c?c:"writer";this.populate_selected_reviews=d(this.populate_selected_reviews,this);this.populate_avaliable_reviews=d(this.populate_avaliable_reviews,this);this.receive_data=d(this.receive_data,this);this.append_notice=d(this.append_notice,this);this.move=d(this.move,this);this.notice_messages="You need to write at least one user review to continue;That was a good first try. Think you can show us more?;Nice work so far. What else have you got?;Getting better. But where else have you been?;You\u2019ve almost hit the average. Who wants to be below average?;Well done! Feel free to add as many as you would like!".split(";");
this.data=[];this.receive_data();this.container.find(".Item").live("click",function(a){return"LI"===$(a.target).get(0).tagName?$(a.target).toggleClass("selected"):$(a.target).parent("li").toggleClass("selected")});this.container.find(".add").live("click",function(){return e.move($(".SourceSelect li.selected"),!0)});this.container.find(".remove").live("click",function(){return e.move($(".DestinationSelect li.selected"),!1)});this.container.find(".refresh").click(function(){var a;a=e.selected_reviews();
e.data=[];e.receive_data(a);return!1})};c.prototype.move=function(a,b){var c=this;_.each($(a),function(a){return _.find(c.data,function(b){return b.id===parseInt($(a).attr("id"))}).selected=b});this.populate_avaliable_reviews();this.populate_selected_reviews();this.append_notice();pe.check_button();return!1};c.prototype.append_notice=function(){var a;a=Math.min(this.selected_reviews().length,5);return this.container.find(".DestinationSelect ol li.Empty:first").replaceWith("<li class='Notice notice' id='Notice'><span>"+
this.notice_messages[a]+"</span></li>")};c.prototype.receive_data=function(a){var b=this;null==a&&(a=!1);return $.getJSON("/api/users/reviews.json","writer"===this.type?{writer_application_id:this.app_id}:{photographer_application_id:this.app_id},function(c){$.each(c,function(c,d){var f;f=!a?d.selected:_.find(a,function(a){return a.id===parseInt(d.id)});return b.data.push({name:d.label,id:d.id,selected:f,order:c})});b.populate_avaliable_reviews();b.populate_selected_reviews();return b.append_notice()})};
c.prototype.selected_reviews=function(){return _.filter(this.data,function(a){return a.selected})};c.prototype.avaliable_reviews=function(){return _.filter(this.data,function(a){return!a.selected})};c.prototype.populate_avaliable_reviews=function(){var a;a="";_.each(this.avaliable_reviews(),function(b){return a+="<li class='Item' id='"+b.id+"' data-order='"+b.order+"'>"+b.name+"</li>\n"});return this.container.find(".SourceSelect ul").html(a)};c.prototype.populate_selected_reviews=function(){var a;
a=[];for(_.each(this.selected_reviews(),function(b){return a.push("<li class='Item' id='"+b.id+"' data-order='"+b.order+"'><span>"+b.name+"</span></li>")});5>=a.length;)a.push("<li class='notice Empty'></li>");return this.container.find(".DestinationSelect ol").html(a.join("\n"))};g.MultipleSelect=c}).call(this);
