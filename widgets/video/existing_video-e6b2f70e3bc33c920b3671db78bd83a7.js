pe.ExistingVideo=function(a){pe.init_widget(this,a);var b=a.find(".YoutubeId").val();this.youtube_id="string"===typeof b?b:"";b=a.find(".UrlParam").val();this.url_param="string"===typeof b?b:"";a.find(".DeleteButton").click(this.callback(this.delete_button_clicked));a.find("img").click(pe.video_image_clicked);a.find(".Title").editable("/admin/videos/"+this.url_param+"/update_in_place",{type:"textarea",select:!0,submit:"Save",cancel:"cancel",indicator:"<img src='/assets/content_bg/loading.gif'>",submitdata:{_method:"put",
attr_name:"title"},cssclass:"editable"});new pe.VideoStatusSelect(a.find(".Status"))};pe.ExistingVideo.prototype.delete_button_clicked=function(){confirm("Seriously?")&&$.ajax({url:"/admin/videos/"+this.url_param,type:"DELETE",dataType:"text",success:this.callback(this.video_deleted)})};pe.ExistingVideo.prototype.video_deleted=function(){this.container.remove()};
