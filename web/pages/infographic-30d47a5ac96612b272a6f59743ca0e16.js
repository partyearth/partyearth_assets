pe.dependency_manager=new pe.DependencyManager;
$(document).ready(function(){pe.install_easing();pe.load_google_plus_script();pe.convert_to_rounded_corners();$(".EmbedImage").click(function(){pe.animated_scrolling($("textarea#embed-code"),25)});$("textarea#embed-code").click(function(){$(this).select()});setTimeout(function(){$("#masthead_search").find("input").unbind().click(function(){$(".top_line>.toggle_line>span.open").click()}).css({cursor:"default"});$("ul.main_nav").find("a").click(function(){$(".top_line>.toggle_line>span.open").click()})},150);
$(".logo_city>a").attr("href","/");setTimeout(function(){$("#infographic_simple_share").click(pe.initialize_infographic_share);pe.init_page_framework()},10)});
pe.initialize_infographic_share=function(){var a=new gigya.socialize.UserAction,d=$('meta[property="og:title"]').attr("content"),b=pe.remove_anchor_from_url(window.location.href);a.setTitle(d);a.setLinkBack(b);a.setDescription($('meta[property="og:description"]').attr("content"));var c=$('meta[property="og:image"]').attr("content");c&&void 0!==c&&a.addMediaItem({type:"image",src:c,href:b});gigya.socialize.showShareUI({userAction:a,cid:"",operationMode:"simpleShare",enabledProviders:"facebook, twitter, yahoo,messenger, linkedin, myspace, orkut",
showMoreButton:!0,showEmailButton:!0,shortURLs:"never",snapToElementID:"infographic_simple_share",dontSendEmail:!0,onSendDone:function(a){pe.send_infographic_email(a,d,b)}})};pe.send_infographic_email=function(a,d,b){var c=$.map(a.recipients,function(a){return a.email}).join(", ");$.post("/api/share_link_by_email.json",{sender:a.sender,recipients:c,subject:d.split("|")[0],link:b,message:a.userMessage})};
