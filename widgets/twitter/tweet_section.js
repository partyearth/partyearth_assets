pe.ServersidePaginator=function(a,b){pe.init_widget(this,a);this.current_page_number=0;this.loader=new pe.ajax_loader.MultiLoader(b,pe.ajax_loader.Loader.data_types.EHTML);this.objects_list=pe.load(this.container.find(".ObjectsList"));this.previous_button=pe.load(this.container.find(".PrevButton"));this.previous_button.click(this.callback(this.previous_button_clicked));this.next_button=pe.load(this.container.find(".NextButton"));this.next_button.click(this.callback(this.next_button_clicked));this.current_page_number_display=
pe.load(this.container.find(".CurrentPageNumber"));this.max_page_number_display=pe.load(this.container.find(".MaxPageNumber"));this.max_page_number=parseInt(this.max_page_number_display.text(),10);this.update_buttons();pe.convert_to_rounded_corners(this.objects_list.find(".ConvertToRoundedCorners"))};pe.ServersidePaginator.events={PAGE_CHANGED:"ServersidePaginator_PAGE_CHANGED"};
pe.ServersidePaginator.prototype.destroy=function(){this.previous_button.unbind("click");this.next_button.unbind("click");this.current_page_number_display=this.next_button=this.previous_button=this.objects_list=this.loader=null};
pe.ServersidePaginator.prototype.show_page=function(a){this.current_page_number=a;this.current_page_number_display.html((a+1).toString());this.update_buttons();this.loader.load(a.toString(),this.callback(function(a){this.objects_list.html(a);this.fire_event(pe.ServersidePaginator.events.PAGE_CHANGED);pe.convert_to_rounded_corners(this.objects_list.find(".ConvertToRoundedCorners"));""===a&&this.current_page_number_display.html("0")}))};
pe.ServersidePaginator.prototype.next_button_clicked=function(a){this.current_page_number>=this.max_page_number-1?a.stopPropagation():this.show_page(this.current_page_number+1)};pe.ServersidePaginator.prototype.previous_button_clicked=function(a){0===this.current_page_number?a.stopPropagation():this.show_page(this.current_page_number-1)};
pe.ServersidePaginator.prototype.update_buttons=function(){0===this.current_page_number?(this.previous_button.addClass("disabled"),2>this.max_page_number?this.next_button.addClass("disabled"):this.next_button.removeClass("disabled")):this.current_page_number>=this.max_page_number-1?(this.previous_button.removeClass("disabled"),this.next_button.addClass("disabled")):(this.previous_button.removeClass("disabled"),this.next_button.removeClass("disabled"))};
pe.TweetSection=function(a,b,c,d){pe.init_widget(this,a);this.tweets_display=a.find(".Tweets");this.live_update_url=b+".ehtml";d&&this.update_tweets();this.tweet_update_delay=10;this.paginator=c?new pe.ServersidePaginator(a,c+"?page={{id}}"):null};pe.TweetSection.prototype.update_tweets=function(){$.ajax({url:this.live_update_url,type:"GET",dataType:"text",success:this.callback(this.update_tweets_success)})};
pe.TweetSection.prototype.update_tweets_success=function(a){"later"===a?(setTimeout(this.callback(function(){this.update_tweets()}),1E3*this.tweet_update_delay),this.tweet_update_delay*=2):this.tweets_display.html(a)};
