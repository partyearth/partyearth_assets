(function(){var b=function(a,b){return function(){return a.apply(b,arguments)}};pe.gigya=pe.gigya||{};var s=pe,c=function(a,c){this.container=a;this.url=c;this.iframe_loaded=b(this.iframe_loaded,this);this.init=b(this.init,this);this.show=b(this.show,this);this.iframe=null};c.prototype.show=function(){this.container.show();return this.init()};c.prototype.init=function(){this.container.addClass("spinnable");this.iframe=$("<iframe></iframe>");this.iframe.attr("scrolling","no");this.iframe.attr("scroll",
"no");this.iframe.attr("src",this.url);this.iframe.attr("frameborder","0");this.collapse_iframe();this.iframe.load(this.iframe_loaded);return this.container.html(this.iframe)};c.prototype.iframe_loaded=function(){return this.container.removeClass("spinnable")};c.prototype.collapse_iframe=function(){this.iframe.css("width","0px");return this.iframe.css("height","0px")};s.Iframe=c}).call(this);
(function(b,s,c){b.fn.jScrollPane=function(a){function g(a,g){function oa(n){var h,g,u,pa,qa,T=!1,j=!1;d=n;if(e===c)pa=a.scrollTop(),qa=a.scrollLeft(),a.css({overflow:"hidden",padding:0}),l=a.innerWidth()+Q,k=a.innerHeight(),a.width(l),e=b('<div class="jspPane" />').css("padding",va).append(a.children()),f=b('<div class="jspContainer" />').css({width:l+"px",height:k+"px"}).append(e).appendTo(a);else{a.css("width","");if(T=d.stickToBottom)T=q-k,T=20<T&&10>T-F();if(j=d.stickToRight)j=t-l,j=20<j&&10>
j-G();if(u=a.innerWidth()+Q!=l||a.outerHeight()!=k)l=a.innerWidth()+Q,k=a.innerHeight(),f.css({width:l+"px",height:k+"px"});if(!u&&wa==t&&e.outerHeight()==q){a.width(l);return}wa=t;e.css("width","");a.width(l);f.find(">.jspVerticalBar,>.jspHorizontalBar").remove().end()}e.css("overflow","auto");t=n.contentWidth?n.contentWidth:e[0].scrollWidth;q=e[0].scrollHeight;e.css("overflow","");ra=t/l;ga=q/k;z=1<ga;y=1<ra;if(!y&&!z)a.removeClass("jspScrollable"),e.css({top:0,width:f.width()-Q}),f.unbind(sa),
e.find(":input,a").unbind("focus.jsp"),a.attr("tabindex","-1").removeAttr("tabindex").unbind("keydown.jsp keypress.jsp"),xa(),ya();else{a.addClass("jspScrollable");if(n=d.maintainPosition&&(r||p))h=G(),g=F();z&&(f.append(b('<div class="jspVerticalBar" />').append(b('<div class="jspCap jspCapTop" />'),b('<div class="jspTrack" />').append(b('<div class="jspDrag" />').append(b('<div class="jspDragTop" />'),b('<div class="jspDragBottom" />'))),b('<div class="jspCap jspCapBottom" />'))),ha=f.find(">.jspVerticalBar"),
C=ha.find(">.jspTrack"),v=C.find(">.jspDrag"),d.showArrows&&(aa=b('<a class="jspArrow jspArrowUp" />').bind("mousedown.jsp",H(0,-1)).bind("click.jsp",U),ba=b('<a class="jspArrow jspArrowDown" />').bind("mousedown.jsp",H(0,1)).bind("click.jsp",U),d.arrowScrollOnHover&&(aa.bind("mouseover.jsp",H(0,-1,aa)),ba.bind("mouseover.jsp",H(0,1,ba))),za(C,d.verticalArrowPositions,aa,ba)),I=k,f.find(">.jspVerticalBar>.jspCap:visible,>.jspVerticalBar>.jspArrow").each(function(){I-=b(this).outerHeight()}),v.hover(function(){v.addClass("jspHover")},
function(){v.removeClass("jspHover")}).bind("mousedown.jsp",function(a){b("html").bind("dragstart.jsp selectstart.jsp",U);v.addClass("jspActive");var n=a.pageY-v.position().top;b("html").bind("mousemove.jsp",function(a){R(a.pageY-n,!1)}).bind("mouseup.jsp mouseleave.jsp",Aa);return!1}),s());y&&(f.append(b('<div class="jspHorizontalBar" />').append(b('<div class="jspCap jspCapLeft" />'),b('<div class="jspTrack" />').append(b('<div class="jspDrag" />').append(b('<div class="jspDragLeft" />'),b('<div class="jspDragRight" />'))),
b('<div class="jspCap jspCapRight" />'))),ja=f.find(">.jspHorizontalBar"),D=ja.find(">.jspTrack"),w=D.find(">.jspDrag"),d.showArrows&&(ca=b('<a class="jspArrow jspArrowLeft" />').bind("mousedown.jsp",H(-1,0)).bind("click.jsp",U),da=b('<a class="jspArrow jspArrowRight" />').bind("mousedown.jsp",H(1,0)).bind("click.jsp",U),d.arrowScrollOnHover&&(ca.bind("mouseover.jsp",H(-1,0,ca)),da.bind("mouseover.jsp",H(1,0,da))),za(D,d.horizontalArrowPositions,ca,da)),w.hover(function(){w.addClass("jspHover")},
function(){w.removeClass("jspHover")}).bind("mousedown.jsp",function(a){b("html").bind("dragstart.jsp selectstart.jsp",U);w.addClass("jspActive");var n=a.pageX-w.position().left;b("html").bind("mousemove.jsp",function(a){V(a.pageX-n,!1)}).bind("mouseup.jsp mouseleave.jsp",Aa);return!1}),A=f.innerWidth(),Ba());if(y&&z){u=D.outerHeight();var Ca=C.outerWidth();I-=u;b(ja).find(">.jspCap:visible,>.jspArrow").each(function(){A+=b(this).outerWidth()});A-=Ca;k-=Ca;l-=u;D.parent().append(b('<div class="jspCorner" />').css("width",
u+"px"));s();Ba()}y&&e.width(f.outerWidth()-Q+"px");q=e.outerHeight();ga=q/k;y&&(J=Math.ceil(1/ra*A),J>d.horizontalDragMaxWidth?J=d.horizontalDragMaxWidth:J<d.horizontalDragMinWidth&&(J=d.horizontalDragMinWidth),w.width(J+"px"),K=A-J,ta(p));z&&(L=Math.ceil(1/ga*I),L>d.verticalDragMaxHeight?L=d.verticalDragMaxHeight:L<d.verticalDragMinHeight&&(L=d.verticalDragMinHeight),v.height(L+"px"),E=I-L,ua(r));n&&(W(j?t-l:h,!1),M(T?q-k:g,!1));e.find(":input,a").unbind("focus.jsp").bind("focus.jsp",function(a){ea(a.target,
!1)});f.unbind(sa).bind(sa,function(a,n,b,h){a=p;n=r;m.scrollBy(b*d.mouseWheelSpeed,-h*d.mouseWheelSpeed,!1);return a==p&&n==r});var Da,S,N,O,fa,P=!1;f.unbind("touchstart.jsp touchmove.jsp touchend.jsp click.jsp-touchclick").bind("touchstart.jsp",function(a){a=a.originalEvent.touches[0];Da=G();S=F();N=a.pageX;O=a.pageY;fa=!1;P=!0}).bind("touchmove.jsp",function(a){if(P){a=a.originalEvent.touches[0];var n=p,b=r;m.scrollTo(Da+N-a.pageX,S+O-a.pageY);fa=fa||5<Math.abs(N-a.pageX)||5<Math.abs(O-a.pageY);
return n==p&&b==r}}).bind("touchend.jsp",function(){P=!1}).bind("click.jsp-touchclick",function(){if(fa)return fa=!1});if(d.enableKeyboardNavigation){var Y=function(){var a=p,n=r;switch(X){case 40:m.scrollByY(d.keyboardSpeed,!1);break;case 38:m.scrollByY(-d.keyboardSpeed,!1);break;case 34:case 32:m.scrollByY(k*d.scrollPagePercent,!1);break;case 33:m.scrollByY(-k*d.scrollPagePercent,!1);break;case 39:m.scrollByX(d.keyboardSpeed,!1);break;case 37:m.scrollByX(-d.keyboardSpeed,!1)}return ka=a!=p||n!=
r},X,ka,la=[];y&&la.push(ja[0]);z&&la.push(ha[0]);e.focus(function(){a.focus()});a.attr("tabindex",0).unbind("keydown.jsp keypress.jsp").bind("keydown.jsp",function(a){if(!(a.target!==this&&(!la.length||!b(a.target).closest(la).length))){var n=p,h=r;switch(a.keyCode){case 40:case 38:case 34:case 32:case 33:case 39:case 37:X=a.keyCode;Y();break;case 35:M(q-k);X=null;break;case 36:M(0),X=null}ka=a.keyCode==X&&n!=p||h!=r;return!ka}}).bind("keypress.jsp",function(a){a.keyCode==X&&Y();return!ka});d.hideFocus?
(a.css("outline","none"),"hideFocus"in f[0]&&a.attr("hideFocus",!0)):(a.css("outline",""),"hideFocus"in f[0]&&a.attr("hideFocus",!1))}d.clickOnTrack&&(xa(),z&&C.bind("mousedown.jsp",function(a){if(a.originalTarget===c||a.originalTarget==a.currentTarget){var n=b(this),h=n.offset(),g=a.pageY-h.top-r,B,u=!0,e=function(){var b=n.offset(),b=a.pageY-b.top-L/2,h=k*d.scrollPagePercent,c=E*h/(q-k);if(0>g)r-c>b?m.scrollByY(-h):R(b);else if(0<g)r+c<b?m.scrollByY(h):R(b);else{f();return}B=setTimeout(e,u?d.initialDelay:
d.trackClickRepeatFreq);u=!1},f=function(){B&&clearTimeout(B);B=null;b(document).unbind("mouseup.jsp",f)};e();b(document).bind("mouseup.jsp",f);return!1}}),y&&D.bind("mousedown.jsp",function(a){if(a.originalTarget===c||a.originalTarget==a.currentTarget){var n=b(this),h=n.offset(),g=a.pageX-h.left-p,B,u=!0,f=function(){var b=n.offset(),b=a.pageX-b.left-J/2,h=l*d.scrollPagePercent,c=K*h/(t-l);if(0>g)p-c>b?m.scrollByX(-h):V(b);else if(0<g)p+c<b?m.scrollByX(h):V(b);else{e();return}B=setTimeout(f,u?d.initialDelay:
d.trackClickRepeatFreq);u=!1},e=function(){B&&clearTimeout(B);B=null;b(document).unbind("mouseup.jsp",e)};f();b(document).bind("mouseup.jsp",e);return!1}}));a:if(location.hash&&1<location.hash.length){var Z,Ea,ma=escape(location.hash);try{Z=b(ma)}catch(Ga){break a}Z.length&&e.find(ma)&&(0===f.scrollTop()?Ea=setInterval(function(){0<f.scrollTop()&&(ea(ma,!0),b(document).scrollTop(f.position().top),clearInterval(Ea))},50):(ea(ma,!0),b(document).scrollTop(f.position().top)))}d.hijackInternalLinks&&Fa()}d.autoReinitialise&&
!na?na=setInterval(function(){oa(d)},d.autoReinitialiseDelay):!d.autoReinitialise&&na&&clearInterval(na);pa&&a.scrollTop(0)&&M(pa,!1);qa&&a.scrollLeft(0)&&W(qa,!1);a.trigger("jsp-initialised",[y||z])}function s(){C.height(I+"px");r=0;Y=d.verticalGutter+C.outerWidth();e.width(l-Y-Q);try{0===ha.position().left&&e.css("margin-left",Y+"px")}catch(a){}}function Ba(){f.find(">.jspHorizontalBar>.jspCap:visible,>.jspHorizontalBar>.jspArrow").each(function(){A-=b(this).outerWidth()});D.width(A+"px");p=0}function za(a,
b,c,d){var g="before",e="after";"os"==b&&(b=/Mac/.test(navigator.platform)?"after":"split");b==g?e=b:b==e&&(g=b,b=c,c=d,d=b);a[g](c)[e](d)}function H(a,h,c){return function(){var g=this,e=c,g=b(g).addClass("jspActive"),f,x,k=!0,l=function(){0!==a&&m.scrollByX(a*d.arrowButtonSpeed);0!==h&&m.scrollByY(h*d.arrowButtonSpeed);x=setTimeout(l,k?d.initialDelay:d.arrowRepeatFreq);k=!1};l();f=e?"mouseout.jsp":"mouseup.jsp";e=e||b("html");e.bind(f,function(){g.removeClass("jspActive");x&&clearTimeout(x);x=null;
e.unbind(f)});this.blur();return!1}}function xa(){D&&D.unbind("mousedown.jsp");C&&C.unbind("mousedown.jsp")}function Aa(){b("html").unbind("dragstart.jsp selectstart.jsp mousemove.jsp mouseup.jsp mouseleave.jsp");v&&v.removeClass("jspActive");w&&w.removeClass("jspActive")}function R(a,b){z&&(0>a?a=0:a>E&&(a=E),b===c&&(b=d.animateScroll),b?m.animate(v,"top",a,ua):(v.css("top",a),ua(a)))}function ua(b){b===c&&(b=v.position().top);f.scrollTop(0);r=b;var h=0===r,g=r==E;b=-(b/E)*(q-k);if(S!=h||N!=g)S=
h,N=g,a.trigger("jsp-arrow-change",[S,N,O,P]);d.showArrows&&(aa[h?"addClass":"removeClass"]("jspDisabled"),ba[g?"addClass":"removeClass"]("jspDisabled"));e.css("top",b);a.trigger("jsp-scroll-y",[-b,h,g]).trigger("scroll")}function V(a,b){y&&(0>a?a=0:a>K&&(a=K),b===c&&(b=d.animateScroll),b?m.animate(w,"left",a,ta):(w.css("left",a),ta(a)))}function ta(b){b===c&&(b=w.position().left);f.scrollTop(0);p=b;var h=0===p,g=p==K;b=-(b/K)*(t-l);if(O!=h||P!=g)O=h,P=g,a.trigger("jsp-arrow-change",[S,N,O,P]);d.showArrows&&
(ca[h?"addClass":"removeClass"]("jspDisabled"),da[g?"addClass":"removeClass"]("jspDisabled"));e.css("left",b);a.trigger("jsp-scroll-x",[-b,h,g]).trigger("scroll")}function M(a,b){R(a/(q-k)*E,b)}function W(a,b){V(a/(t-l)*K,b)}function ea(a,c,g){var e,x,j=0,m=0,r,p,q;try{e=b(a)}catch(s){return}x=e.outerHeight();a=e.outerWidth();f.scrollTop(0);for(f.scrollLeft(0);!e.is(".jspPane");)if(j+=e.position().top,m+=e.position().left,e=e.offsetParent(),/^body|html$/i.test(e[0].nodeName))return;e=F();r=e+k;j<
e||c?p=j-d.verticalGutter:j+x>r&&(p=j-k+x+d.verticalGutter);p&&M(p,g);j=G();p=j+l;m<j||c?q=m-d.horizontalGutter:m+a>p&&(q=m-l+a+d.horizontalGutter);q&&W(q,g)}function G(){return-e.position().left}function F(){return-e.position().top}function U(){return!1}function ya(){b("a.jspHijack").unbind("click.jsp-hijack").removeClass("jspHijack")}function Fa(){ya();b("a[href^=#]").addClass("jspHijack").bind("click.jsp-hijack",function(){var a=this.href.split("#");if(1<a.length&&(a=a[1],0<a.length&&0<e.find("#"+
a).length))return ea("#"+a,!0),!1})}var d,m=this,e,l,k,f,t,q,ra,ga,z,y,v,E,r,w,K,p,ha,C,Y,I,L,aa,ba,ja,D,A,J,ca,da,na,va,Q,wa,S=!0,O=!0,N=!1,P=!1,Z=a.clone(!1,!1).empty(),sa=b.fn.mwheelIntent?"mwheelIntent.jsp":"mousewheel.jsp";va=a.css("paddingTop")+" "+a.css("paddingRight")+" "+a.css("paddingBottom")+" "+a.css("paddingLeft");Q=(parseInt(a.css("paddingLeft"),10)||0)+(parseInt(a.css("paddingRight"),10)||0);b.extend(m,{reinitialise:function(a){a=b.extend({},d,a);oa(a)},scrollToElement:function(a,b,
c){ea(a,b,c)},scrollTo:function(a,b,c){W(a,c);M(b,c)},scrollToX:function(a,b){W(a,b)},scrollToY:function(a,b){M(a,b)},scrollToPercentX:function(a,b){W(a*(t-l),b)},scrollToPercentY:function(a,b){M(a*(q-k),b)},scrollBy:function(a,b,c){m.scrollByX(a,c);m.scrollByY(b,c)},scrollByX:function(a,b){var c=(G()+Math[0>a?"floor":"ceil"](a))/(t-l);V(c*K,b)},scrollByY:function(a,b){var c=(F()+Math[0>a?"floor":"ceil"](a))/(q-k);R(c*E,b)},positionDragX:function(a,b){V(a,b)},positionDragY:function(a,b){R(a,b)},animate:function(a,
b,c,g){var e={};e[b]=c;a.animate(e,{duration:d.animateDuration,easing:d.animateEase,queue:!1,step:g})},getContentPositionX:function(){return G()},getContentPositionY:function(){return F()},getContentWidth:function(){return t},getContentHeight:function(){return q},getPercentScrolledX:function(){return G()/(t-l)},getPercentScrolledY:function(){return F()/(q-k)},getIsScrollableH:function(){return y},getIsScrollableV:function(){return z},getContentPane:function(){return e},scrollToBottom:function(a){R(E,
a)},hijackInternalLinks:function(){Fa()},destroy:function(){var b=F(),c=G();a.removeClass("jspScrollable").unbind(".jsp");a.replaceWith(Z.append(e.children()));Z.scrollTop(b);Z.scrollLeft(c)}});oa(g)}a=b.extend({},b.fn.jScrollPane.defaults,a);b.each(["mouseWheelSpeed","arrowButtonSpeed","trackClickSpeed","keyboardSpeed"],function(){a[this]=a[this]||a.speed});return this.each(function(){var c=b(this),j=c.data("jsp");j?j.reinitialise(a):(j=new g(c,a),c.data("jsp",j))})};b.fn.jScrollPane.defaults={showArrows:!1,
maintainPosition:!0,stickToBottom:!1,stickToRight:!1,clickOnTrack:!0,autoReinitialise:!1,autoReinitialiseDelay:500,verticalDragMinHeight:0,verticalDragMaxHeight:99999,horizontalDragMinWidth:0,horizontalDragMaxWidth:99999,contentWidth:c,animateScroll:!1,animateDuration:300,animateEase:"linear",hijackInternalLinks:!1,verticalGutter:4,horizontalGutter:4,mouseWheelSpeed:0,arrowButtonSpeed:0,arrowRepeatFreq:50,arrowScrollOnHover:!1,trackClickSpeed:0,trackClickRepeatFreq:70,verticalArrowPositions:"split",
horizontalArrowPositions:"split",enableKeyboardNavigation:!0,hideFocus:!1,keyboardSpeed:0,initialDelay:300,speed:30,scrollPagePercent:0.8}})(jQuery,this);
(function(b){function s(a){var c=a||window.event,x=[].slice.call(arguments,1),j=0,s=0,ia=0;a=b.event.fix(c);a.type="mousewheel";a.wheelDelta&&(j=a.wheelDelta/120);a.detail&&(j=-a.detail/3);ia=j;void 0!==c.axis&&c.axis===c.HORIZONTAL_AXIS&&(ia=0,s=-1*j);void 0!==c.wheelDeltaY&&(ia=c.wheelDeltaY/120);void 0!==c.wheelDeltaX&&(s=-1*c.wheelDeltaX/120);x.unshift(a,j,s,ia);return b.event.handle.apply(this,x)}var c=["DOMMouseScroll","mousewheel"];b.event.special.mousewheel={setup:function(){if(this.addEventListener)for(var a=
c.length;a;)this.addEventListener(c[--a],s,!1);else this.onmousewheel=s},teardown:function(){if(this.removeEventListener)for(var a=c.length;a;)this.removeEventListener(c[--a],s,!1);else this.onmousewheel=null}};b.fn.extend({mousewheel:function(a){return a?this.bind("mousewheel",a):this.trigger("mousewheel")},unmousewheel:function(a){return this.unbind("mousewheel",a)}})})(jQuery);
(function(){var b=function(a,b){return function(){return a.apply(b,arguments)}};pe.gigya=pe.gigya||{};var s=pe.gigya,c=function(a){this.container=a;this.on_logged_in=b(this.on_logged_in,this);this.on_registered=b(this.on_registered,this);this.show_login_screen=b(this.show_login_screen,this);this.list_clicked=b(this.list_clicked,this);this.add_to_list_button_clicked=b(this.add_to_list_button_clicked,this);this.add_item=b(this.add_item,this);this.login_required=this.container.data("login-required");
this.form_container=this.container.find(".Form");this.login_container=this.container.find(".Login");this.login_iframe=new pe.Iframe(this.login_container,"/frames/login");this.errors_container=this.container.find(".Errors");this.errors=[];this.list_container=this.container.find(".List");this.scroll_pane=this.list_container.jScrollPane({maintainPosition:!1}).data("jsp");this.checked_list_ids=this.list_container.data("checked");_.each(this.get_checked_lis(),function(a){return $(a).addClass("checked")});
this.submit_button=this.container.find(".SubmitButton");this.submit_button.click(this.add_to_list_button_clicked);this.show_login_screen_button=this.container.find(".LoginTrigger");this.show_login_screen_button.click(this.show_login_screen);this.get_lis().live("click",this.list_clicked);pe.bind_global_event(pe.events.LOGGED_IN,this.on_logged_in);pe.bind_global_event(pe.events.REGISTRATION_COMPLETE,this.on_registered)};c.errors={NOTHING_SELECTED:"NOTHING_SELECTED",NOTHING_CHANGED:"NOTHING_CHANGED",
messages:{NOTHING_SELECTED:"Please select a list",NOTHING_CHANGED:"Item already on selected list"}};c.prototype.add_item=function(a){var b,c,j=this;b=$("<li data-id='"+a.id+"' data-name='"+a.name+"'>"+a.name+"</li>");b.data("id",a.id);c=this.get_lis().toArray();c.push(b);c=_.sortBy(c,function(a){return String($(a).data("name")).toLowerCase()});this.scroll_pane.getContentPane().empty();_.each(c,function(a){return j.scroll_pane.getContentPane().append(a)});this.scroll_pane.reinitialise();this.select_by_id(a.id);
return this.submit_button.focus()};c.prototype.add_to_list_button_clicked=function(){return this.validate()?this.on_validation_passed():this.on_validation_failed()};c.prototype.list_clicked=function(a){return this.select($(a.currentTarget))};c.prototype.select=function(a){if(0<a.length)return this.get_lis().removeClass("selected"),a.addClass("selected"),this.scroll_pane.scrollToElement(a,!0,!0)};c.prototype.get_lis=function(){return this.list_container.find("li")};c.prototype.get_selected_li=function(){return this.get_lis().filter(".selected:first")};
c.prototype.get_checked_lis=function(){var a=this;return _.filter(this.get_lis(),function(b){return _.find(a.checked_list_ids,function(a){return a===$(b).data("id")})})};c.prototype.select_by_id=function(a){var b;b=_.find(this.get_lis(),function(b){return $(b).data("id")===a});return this.select($(b))};c.prototype.get_validation_message=function(){return _.map(this.errors,function(a){return pe.gigya.FavoritesList.errors.messages[a]}).join(", ")};c.prototype.on_validation_failed=function(){if(_.isEmpty(this.errors)){if(this.login_required)return this.show_login_screen()}else return this.errors_container.html(this.get_validation_message())};
c.prototype.show_login_screen=function(){this.form_container.hide();this.login_container.show();return this.login_iframe.show()};c.prototype.on_registered=function(){this.form_container.show();this.login_container.hide();this.login_required=!1;return this.validate()?this.on_validation_passed():this.show_login_screen_button.hide()};c.prototype.on_logged_in=function(){this.form_container.show();this.login_container.hide();this.login_required=!1;return this.validate()?this.on_validation_passed():window.location.reload()};
c.prototype.on_validation_passed=function(){var a;a=this.get_selected_li().data("name");this.container.append("<input type='hidden' name='user_list[name]' value='"+a+"'/>");$("body").css("opacity",0.3);return this.container.submit()};c.prototype.validation_failed=function(a){return this.on_validation_failed=a};c.prototype.validation_passed=function(a){return this.on_validation_passed=a};c.prototype.validate=function(){var a,b;this.errors=[];b=this.get_selected_li();if(0===b.length)return this.errors.push(pe.gigya.FavoritesList.errors.NOTHING_SELECTED),
!1;a=b.data("id");_.detect(this.checked_list_ids,function(b){return b===a})&&this.errors.push(pe.gigya.FavoritesList.errors.NOTHING_CHANGED);return _.isEmpty(this.errors)&&!this.login_required};s.FavoritesList=c}).call(this);
(function(){var b=function(a,b){return function(){return a.apply(b,arguments)}};pe.gigya=pe.gigya||{};var s=pe.gigya,c=function(a){var c=this;this.container=a;this.input_field_focused=b(this.input_field_focused,this);this.input_field_focusouted=b(this.input_field_focusouted,this);this.error_message_container_clicked=b(this.error_message_container_clicked,this);this.on_list_created=b(this.on_list_created,this);this.submit_button_clicked=b(this.submit_button_clicked,this);this.error_message_container=
this.container.find(".Error");this.input_field=this.container.find(".Input");this.submit_button=this.container.find(".CreateButton");this.input_field.attr("placeholder",pe.gigya.ListCreator.default_label);this.input_field.focus(this.input_field_focused);this.input_field.focusout(this.input_field_focusouted);this.input_field.keypress(function(a){if(13===a.which)return a.preventDefault(),c.hide_error_message(),a=c.input_field.val(),_.isEmpty(a.replace(/\s/g,""))||c.create_list(a),!1});this.error_message_container.click(this.error_message_container_clicked);
this.submit_button.click(this.submit_button_clicked);this.hide_error_message();this.put_name(pe.gigya.ListCreator.default_label)};c.default_label="Enter new list title";c.prototype.create_list=function(a){this.on_before_create();return $.post("/api/user_lists",{user_list:{name:a}},this.on_list_created,"json")};c.prototype.put_name=function(a){return this.input_field.val(a)};c.prototype.validate=function(){return!this.is_empty()};c.prototype.show_error_message=function(){return this.error_message_container.show().removeClass("hidden")};
c.prototype.hide_error_message=function(){return this.error_message_container.hide().removeClass("visible")};c.prototype.is_empty=function(){var a;a=this.input_field.val();return _.isEmpty(a)||a===pe.gigya.ListCreator.default_label};c.prototype.submit_button_clicked=function(){return this.validate()?(this.hide_error_message(),this.create_list(this.input_field.val()),this.put_name("")):this.show_error_message()};c.prototype.on_list_created=function(a){return 0===a.status?(this.put_name(""),this.on_after_create(a.instance)):
alert("Something went wrong: ListCreator#on_list_created")};c.prototype.on_after_create=function(){return!0};c.prototype.on_before_create=function(){return!0};c.prototype.after_create=function(a){return this.on_after_create=a};c.prototype.before_create=function(a){return this.on_before_create=a};c.prototype.error_message_container_clicked=function(){this.error_message_container.hide();this.put_name("");return this.input_field.focus()};c.prototype.input_field_focusouted=function(){if(_.isEmpty(this.input_field.val()))return this.put_name(pe.gigya.ListCreator.default_label)};
c.prototype.input_field_focused=function(){if(this.is_empty())return this.put_name("")};s.ListCreator=c}).call(this);(function(){pe.gigya.UserListsForm=function(b){this.container=b;this.favorites_list=new pe.gigya.FavoritesList(this.container);this.creator=new pe.gigya.ListCreator(this.container.find(".Creator"));this.creator.after_create(this.favorites_list.add_item)};$(document).ready(function(){pe.favorites_form=new pe.gigya.UserListsForm($(".UserLists"));return pe.init_page_framework()})}).call(this);
