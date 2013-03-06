pe.ShippingTypeDropDown=function(a){pe.init_widget(this,a);pe.ajax_loader.shipping_types.load(this.callback(function(b){this.dropdown_widget=new pe.DropdownModule(a,this.dropdown_html(b),this.callback(this.title_html),!1,"order[shipping_type_id]");this.dropdown_widget.bind_event(pe.DropdownModule.events.CHANGED,this.callback(this.selected));this.val(b[0].id)}))};pe.ShippingTypeDropDown.events={OPENED:"ShippingTypeDropDown_OPENED",CHANGED:"ShippingTypeDropDown_CHANGED"};
pe.ShippingTypeDropDown.prototype.dropdown_html=function(a){var b=[];$.each(a,function(a,h){b.push(pe.templatize('<div class="Choice choice" data_result="{{id}}">{{name}}</div>',h))});return b.join("\n")};pe.ShippingTypeDropDown.prototype.result_value=function(a){return a&&(a=a.attr("data_result"),"string"===typeof a)?a:""};
pe.ShippingTypeDropDown.prototype.selected=function(a,b){var d=this.result_value($(b));this.dropdown_widget.set_input_field_value(d);this.fire_event(pe.ShippingTypeDropDown.events.CHANGED,d)};pe.ShippingTypeDropDown.prototype.title_html=function(a){return a?"selecting"===a?(this.fire_event(pe.ShippingTypeDropDown.events.OPENED,$(a)),'<span class="unselected">Select a Shipping Type</span>'):a.html():'<span class="unselected">Select a Shipping Type</span>'};
pe.ShippingTypeDropDown.prototype.val=function(a){if(a)this.dropdown_widget.val(".Choice[data_result='"+a+"']"),this.dropdown_widget.set_input_field_value(a),this.fire_event(pe.ShippingTypeDropDown.events.CHANGED);else return this.result_value(this.dropdown_widget.val())};
pe.StateDropdown=function(a,b){pe.init_widget(this,a);this.validation_enabled=!1;this.dropdown_widget=new pe.DropdownModule(a,this.dropdown_html(),this.callback(this.title_html),!1,b);this.dropdown_widget.bind_event(pe.DropdownModule.events.CHANGED,this.callback(this.selected))};pe.StateDropdown.events={OPENED:"StateDropdown_OPENED",CHANGED:"StateDropdown_CHANGED"};
pe.StateDropdown.prototype.dropdown_html=function(){var a=[];a.push('<div class="Choice choice" data_result="AL">Alabama</div>');a.push('<div class="Choice choice" data_result="AK">Alaska</div>');a.push('<div class="Choice choice" data_result="AZ">Arizona</div>');a.push('<div class="Choice choice" data_result="AR">Arkansas</div>');a.push('<div class="Choice choice" data_result="CA">California</div>');a.push('<div class="Choice choice" data_result="CO">Colorado</div>');a.push('<div class="Choice choice" data_result="CT">Connecticut</div>');
a.push('<div class="Choice choice" data_result="DE">Delaware</div>');a.push('<div class="Choice choice" data_result="DC">District of Columbia</div>');a.push('<div class="Choice choice" data_result="FL">Florida</div>');a.push('<div class="Choice choice" data_result="GA">Georgia</div>');a.push('<div class="Choice choice" data_result="HI">Hawaii</div>');a.push('<div class="Choice choice" data_result="ID">Idaho</div>');a.push('<div class="Choice choice" data_result="IL">Illinois</div>');a.push('<div class="Choice choice" data_result="IN">Indiana</div>');
a.push('<div class="Choice choice" data_result="IA">Iowa</div>');a.push('<div class="Choice choice" data_result="KS">Kansas</div>');a.push('<div class="Choice choice" data_result="KY">Kentucky</div>');a.push('<div class="Choice choice" data_result="LA">Louisiana</div>');a.push('<div class="Choice choice" data_result="ME">Maine</div>');a.push('<div class="Choice choice" data_result="MD">Maryland</div>');a.push('<div class="Choice choice" data_result="MA">Massachusetts</div>');a.push('<div class="Choice choice" data_result="MI">Michigan</div>');
a.push('<div class="Choice choice" data_result="MN">Minnesota</div>');a.push('<div class="Choice choice" data_result="MS">Mississippi</div>');a.push('<div class="Choice choice" data_result="MO">Missouri</div>');a.push('<div class="Choice choice" data_result="MT">Montana</div>');a.push('<div class="Choice choice" data_result="NE">Nebraska</div>');a.push('<div class="Choice choice" data_result="NV">Nevada</div>');a.push('<div class="Choice choice" data_result="NH">New Hampshire</div>');a.push('<div class="Choice choice" data_result="NJ">New Jersey</div>');
a.push('<div class="Choice choice" data_result="NM">New Mexico</div>');a.push('<div class="Choice choice" data_result="NY">New York</div>');a.push('<div class="Choice choice" data_result="NC">North Carolina</div>');a.push('<div class="Choice choice" data_result="ND">North Dakota</div>');a.push('<div class="Choice choice" data_result="OH">Ohio</div>');a.push('<div class="Choice choice" data_result="OK">Oklahoma</div>');a.push('<div class="Choice choice" data_result="OR">Oregon</div>');a.push('<div class="Choice choice" data_result="PA">Pennsylvania</div>');
a.push('<div class="Choice choice" data_result="RI">Rhode Island</div>');a.push('<div class="Choice choice" data_result="SC">South Carolina</div>');a.push('<div class="Choice choice" data_result="SD">South Dakota</div>');a.push('<div class="Choice choice" data_result="TN">Tennessee</div>');a.push('<div class="Choice choice" data_result="TX">Texas</div>');a.push('<div class="Choice choice" data_result="UT">Utah</div>');a.push('<div class="Choice choice" data_result="VT">Vermont</div>');a.push('<div class="Choice choice" data_result="VA">Virginia</div>');
a.push('<div class="Choice choice" data_result="WA">Washington</div>');a.push('<div class="Choice choice" data_result="WV">West Virginia</div>');a.push('<div class="Choice choice" data_result="WI">Wisconsin</div>');a.push('<div class="Choice choice" data_result="WY">Wyoming</div>');return a.join("\n")};pe.StateDropdown.prototype.result_value=function(a){return a&&(a=a.attr("data_result"),"string"===typeof a)?a:""};
pe.StateDropdown.prototype.selected=function(a,b){var d=this.result_value($(b));this.dropdown_widget.set_input_field_value(d);this.fire_event(pe.StateDropdown.events.CHANGED,d)};pe.StateDropdown.prototype.show_error=function(){this.dropdown_widget.set_error_as_title()};pe.StateDropdown.prototype.reset_state_title=function(){this.dropdown_widget.reset_dropdown(this.title_html(""))};
pe.StateDropdown.prototype.title_html=function(a){return a?"selecting"===a?(this.fire_event(pe.StateDropdown.events.OPENED,$(a)),'<span class="unselected">Select a State</span>'):"error"===a?'<span class="unselected error">Please select a state</span>':$(a).html():'<span class="unselected">Select a State</span>'};
pe.StateDropdown.prototype.val=function(a){if(a)this.dropdown_widget.val(".Choice[data_result='"+a+"']"),this.dropdown_widget.set_input_field_value(a),this.fire_event(pe.StateDropdown.events.CHANGED,null);else return this.result_value(this.dropdown_widget.val())};pe.StateDropdown.prototype.validate_on_submit=function(){return""===this.val()?(this.show_error(),!1):!0};
pe.ShippingOrderRecap=function(a,b,d,h){pe.init_widget(this,a);this.order_id=b;this.shipping_type_dropdown=d;this.state_dropdown=h;this.sales_tax_div=this.container.find(".SalesTax");this.shipping_handling_div=this.container.find(".ShippingHandling");this.order_total_div=this.container.find(".OrderTotal");this.shipping_type_dropdown.bind_event(pe.ShippingTypeDropDown.events.CHANGED,this.callback(this.calculate_order_total));this.state_dropdown.bind_event(pe.StateDropdown.events.CHANGED,this.callback(this.calculate_order_total))};
pe.ShippingOrderRecap.prototype.calculate_order_total=function(){$.ajax({url:"/api/orders/calculate_order_total.json",data:{order:this.order_id,state:this.state_dropdown.val(),shipping_type_id:this.shipping_type_dropdown.val()},type:"GET",success:this.callback(function(a){if(a.error)return alert(a.error),!1;this.sales_tax_div.html(a.sales_tax);this.shipping_handling_div.html(a.shipping_cost);this.order_total_div.html(a.total_cost);return!0})})};
(function(a){var b=(a.browser.msie?"paste":"input")+".mask",d=void 0!=window.orientation;a.mask={definitions:{9:"[0-9]",a:"[A-Za-z]","*":"[A-Za-z0-9]"}};a.fn.extend({caret:function(a,b){if(0!=this.length){if("number"==typeof a)return b="number"==typeof b?b:a,this.each(function(){if(this.setSelectionRange)this.focus(),this.setSelectionRange(a,b);else if(this.createTextRange){var f=this.createTextRange();f.collapse(!0);f.moveEnd("character",b);f.moveStart("character",a);f.select()}});if(this[0].setSelectionRange)a=
this[0].selectionStart,b=this[0].selectionEnd;else if(document.selection&&document.selection.createRange)var d=document.selection.createRange(),a=0-d.duplicate().moveStart("character",-1E5),b=a+d.text.length;return{begin:a,end:b}}},unmask:function(){return this.trigger("unmask")},mask:function(h,k){if(!h&&0<this.length){var n=a(this[0]),f=n.data("tests");return a.map(n.data("buffer"),function(a,b){return f[b]?a:null}).join("")}var k=a.extend({placeholder:"_",completed:null},k),s=a.mask.definitions,
f=[],m=h.length,p=null,j=h.length;a.each(h.split(""),function(a,b){"?"==b?(j--,m=a):s[b]?(f.push(RegExp(s[b])),null==p&&(p=f.length-1)):f.push(null)});return this.each(function(){function o(a){for(;++a<=j&&!f[a];);return a}function n(c){var b=a(this).caret(),c=c.keyCode;q=16>c||16<c&&32>c||32<c&&41>c;0!=b.begin-b.end&&(!q||8==c||46==c)&&u(b.begin,b.end);if(8==c||46==c||d&&127==c){for(b=b.begin+(46==c?0:-1);!f[b]&&0<=--b;);for(c=b;c<j;c++)if(f[c]){i[c]=k.placeholder;var e=o(c);if(e<j&&f[c].test(i[e]))i[c]=
i[e];else break}r();g.caret(Math.max(p,b));return!1}if(27==c)return g.val(t),g.caret(0,l()),!1}function w(c){if(q)return q=!1,8==c.keyCode?!1:null;var c=c||window.event,b=c.charCode||c.keyCode||c.which,e=a(this).caret();if(c.ctrlKey||c.altKey||c.metaKey)return!0;if(32<=b&&125>=b||186<b)if(c=o(e.begin-1),c<j&&(b=String.fromCharCode(b),f[c].test(b))){for(var e=c,v=k.placeholder;e<j;e++)if(f[e]){var d=o(e),h=i[e];i[e]=v;if(d<j&&f[d].test(h))v=h;else break}i[c]=b;r();c=o(c);a(this).caret(c);k.completed&&
c==j&&k.completed.call(g)}return!1}function u(a,b){for(var e=a;e<b&&e<j;e++)f[e]&&(i[e]=k.placeholder)}function r(){return g.val(i.join("")).val()}function l(a){for(var b=g.val(),e=-1,d=0,h=0;d<j;d++)if(f[d]){for(i[d]=k.placeholder;h++<b.length;){var l=b.charAt(h-1);if(f[d].test(l)){i[d]=l;e=d;break}}if(h>b.length)break}else i[d]==b[h]&&d!=m&&(h++,e=d);if(!a&&e+1<m)g.val(""),u(0,j);else if(a||e+1>=m)r(),a||g.val(g.val().substring(0,e+1));return m?d:p}var g=a(this),i=a.map(h.split(""),function(a){if("?"!=
a)return s[a]?k.placeholder:a}),q=!1,t=g.val();g.data("buffer",i).data("tests",f);g.attr("readonly")||g.one("unmask",function(){g.unbind(".mask").removeData("buffer").removeData("tests")}).bind("focus.mask",function(){t=g.val();var a=l();r();setTimeout(function(){a==h.length?g.caret(0,a):g.caret(a)},0)}).bind("blur.mask",function(){l();g.val()!=t&&g.change()}).bind("keydown.mask",n).bind("keypress.mask",w).bind(b,function(){setTimeout(function(){g.caret(l(!0))},0)});l()})}})})(jQuery);
$(document).ready(function(){$("#order_shipping_phone").mask("(999) 999-9999");var a=new pe.ShippingTypeDropDown($(".ShippingTypeDropDown")),b=new pe.StateDropdown($(".ShippingInputState"),"order[shipping_state]");window.shipping_state&&b.val(window.shipping_state);new pe.ShippingOrderRecap($(".OrderRecap"),window.order,a,b);pe.validatables.push(b);pe.validate_on_blur($("#order_shipping_first_name"),pe.validation.validate_name);pe.validate_on_blur($("#order_shipping_last_name"),pe.validation.validate_name);
pe.validate_on_blur($("#order_shipping_address_1"),pe.validation.ensure_not_blank);pe.validate_on_blur($("#order_shipping_city"),pe.validation.ensure_not_blank);pe.validate_on_blur($("#order_shipping_email"),pe.validation.ensure_email_not_blank_and_is_valid);pe.validate_on_blur($("#order_shipping_zip"),pe.validation.ensure_not_blank);pe.validate_on_blur($("#order_shipping_zip"),pe.validation.validate_zip_code);pe.validate_before_submit($("form"));$("#order_shipping_first_name").focus();pe.init_page_framework()});
