(function(a){var b=(a.browser.msie?"paste":"input")+".mask",c=void 0!=window.orientation;a.mask={definitions:{9:"[0-9]",a:"[A-Za-z]","*":"[A-Za-z0-9]"}};a.fn.extend({caret:function(a,b){if(0!=this.length){if("number"==typeof a)return b="number"==typeof b?b:a,this.each(function(){if(this.setSelectionRange)this.focus(),this.setSelectionRange(a,b);else if(this.createTextRange){var f=this.createTextRange();f.collapse(!0);f.moveEnd("character",b);f.moveStart("character",a);f.select()}});if(this[0].setSelectionRange)a=
this[0].selectionStart,b=this[0].selectionEnd;else if(document.selection&&document.selection.createRange){var c=document.selection.createRange();a=0-c.duplicate().moveStart("character",-1E5);b=a+c.text.length}return{begin:a,end:b}}},unmask:function(){return this.trigger("unmask")},mask:function(h,l){if(!h&&0<this.length){var q=a(this[0]),f=q.data("tests");return a.map(q.data("buffer"),function(a,b){return f[b]?a:null}).join("")}l=a.extend({placeholder:"_",completed:null},l);var v=a.mask.definitions,
f=[],p=h.length,s=null,k=h.length;a.each(h.split(""),function(a,b){"?"==b?(k--,p=a):v[b]?(f.push(RegExp(v[b])),null==s&&(s=f.length-1)):f.push(null)});return this.each(function(){function r(a){for(;++a<=k&&!f[a];);return a}function q(e){var b=a(this).caret();e=e.keyCode;t=16>e||16<e&&32>e||32<e&&41>e;0!=b.begin-b.end&&(!t||8==e||46==e)&&x(b.begin,b.end);if(8==e||46==e||c&&127==e){for(b=b.begin+(46==e?0:-1);!f[b]&&0<=--b;);for(e=b;e<k;e++)if(f[e]){j[e]=l.placeholder;var d=r(e);if(d<k&&f[e].test(j[d]))j[e]=
j[d];else break}u();g.caret(Math.max(s,b));return!1}if(27==e)return g.val(w),g.caret(0,m()),!1}function z(b){if(t)return t=!1,8==b.keyCode?!1:null;b=b||window.event;var n=b.charCode||b.keyCode||b.which,d=a(this).caret();if(b.ctrlKey||b.altKey||b.metaKey)return!0;if(32<=n&&125>=n||186<n)if(b=r(d.begin-1),b<k&&(n=String.fromCharCode(n),f[b].test(n))){for(var d=b,y=l.placeholder;d<k;d++)if(f[d]){var c=r(d),h=j[d];j[d]=y;if(c<k&&f[c].test(h))y=h;else break}j[b]=n;u();b=r(b);a(this).caret(b);l.completed&&
b==k&&l.completed.call(g)}return!1}function x(a,b){for(var d=a;d<b&&d<k;d++)f[d]&&(j[d]=l.placeholder)}function u(){return g.val(j.join("")).val()}function m(a){for(var b=g.val(),d=-1,c=0,h=0;c<k;c++)if(f[c]){for(j[c]=l.placeholder;h++<b.length;){var m=b.charAt(h-1);if(f[c].test(m)){j[c]=m;d=c;break}}if(h>b.length)break}else j[c]==b[h]&&c!=p&&(h++,d=c);if(!a&&d+1<p)g.val(""),x(0,k);else if(a||d+1>=p)u(),a||g.val(g.val().substring(0,d+1));return p?c:s}var g=a(this),j=a.map(h.split(""),function(a){if("?"!=
a)return v[a]?l.placeholder:a}),t=!1,w=g.val();g.data("buffer",j).data("tests",f);g.attr("readonly")||g.one("unmask",function(){g.unbind(".mask").removeData("buffer").removeData("tests")}).bind("focus.mask",function(){w=g.val();var a=m();u();setTimeout(function(){a==h.length?g.caret(0,a):g.caret(a)},0)}).bind("blur.mask",function(){m();g.val()!=w&&g.change()}).bind("keydown.mask",q).bind("keypress.mask",z).bind(b,function(){setTimeout(function(){g.caret(m(!0))},0)});m()})}})})(jQuery);
pe.Validator=function(a){this.message=a.message||"Invalid value.";this.callback=a.callback;this.unless_callback=a.unless||function(){return!1};this.options=a;this.value=a.value?a.value:function(b){return a.callback(b)}};pe.Validator.prototype.passed=function(a){return!!this.callback($(a))};pe.Validator.prototype.failed=function(a){return!this.passed(a)};pe.Validator.prototype.unless=function(){return this.unless_callback()};
pe.validation.name_validator=new pe.Validator({callback:function(a){return _.isEmpty($.trim(a.val()))?(this.message="Field cannot be blank.",!1):50<a.val().length?(this.message="Please shorten your name.",!1):!0},message:"Invalid name."});pe.validation.not_blank_validator=new pe.Validator({callback:function(a){return!_.isEmpty($.trim(a.val()))},message:"Field cannot be blank."});
pe.ValidatableForm=function(a,b,c){pe.init_widget(this,a);this.bindings=c||{};this.chained_fields=[];this.errors={};this.rules=b||{};this.save_button=this.container.find(".SaveButton");this.submit_button=this.container.find(".SubmitButton");this.init_bindings();this.validate();this.toggle_submit();this.submit_button.click(this.callback(this.on_submit))};
pe.ValidatableForm.prototype.init_bindings=function(){this.container.find("input, textarea, select").change(this.callback(function(){this.save_button.removeClass("disabled").removeAttr("disabled")}));_.each(this.bindings,function(a,b){"string"===typeof a?$(b).bind(a,this.callback(function(){this.validate_field(b)})):"function"===typeof a&&this.callback(a)();this.rules[b].value($(b))&&this.validate_field(b)},this)};
pe.ValidatableForm.prototype.on_submit=function(){var a=this.validate();this.highlight_first_failed();return a};pe.ValidatableForm.prototype.delete_error=function(a){delete this.errors[a];_.each(this.chained_fields,function(b){_.include(b,a)&&_.each(b,function(a){this.errors[a]&&this.delete_error(a)},this)},this)};pe.ValidatableForm.prototype.focus_on_failed=function(){if(!this.valid())return pe.install_easing(),pe.animated_scrolling($(".inline-errors:first").parents("li"),2),!1};
pe.ValidatableForm.prototype.highlight_first_failed=function(){if(!this.validate()){if(!this.validation_shown()){var a=_.keys(this.errors)[0];this.render_field_error(a)}this.focus_on_failed()}};pe.ValidatableForm.prototype.render_errors=function(){_.each(this.errors,function(a,b){this.render_field_error(b)},this)};
pe.ValidatableForm.prototype.render_field_error=function(a){var b=$(a).parents("li.input");0===b.length&&(b=$(a));b.find(".inline-errors").remove();b.append('<span class="inline-errors">'+this.errors[a]+"</span>");b.find(".inline-success").remove()};pe.ValidatableForm.prototype.render_field_success=function(a){var b=$(a).parents("li.input");0===b.length&&(b=$(a));b.find(".inline-success").remove();b.append('<img class="inline-success" src="/assets/users/check.png" />');b.find(".inline-errors").remove()};
pe.ValidatableForm.prototype.render_success=function(){_.each(this.valid_fields(),function(a){this.render_field_success(a)},this)};pe.ValidatableForm.prototype.toggle_submit=function(){this.valid()?this.submit_button.removeClass("disabled").removeAttr("disabled"):this.submit_button.addClass("disabled")};pe.ValidatableForm.prototype.valid_fields=function(){return _.difference(_.keys(this.rules),_.keys(this.errors))};
pe.ValidatableForm.prototype.validate_field=function(a){var b=this.rules[a],c=b.passed(a);b.unless()?this.delete_error(a):c?(this.delete_error(a),this.render_field_success(a)):(this.errors[a]=b.message,this.render_field_error(a));this.toggle_submit();return c};pe.ValidatableForm.prototype.valid=function(){return _.isEmpty(this.errors)};pe.ValidatableForm.prototype.validate=function(){_.each(this.rules,function(a,b){a.failed(b)&&(this.errors[b]=a.message)},this);return this.valid()};
pe.ValidatableForm.prototype.validate_together=function(){this.chained_fields.push(arguments)};pe.ValidatableForm.prototype.validation_shown=function(){return 0<this.container.find(".inline-errors").length};
(function(){pe.tax_id_type_changed=function(){pe.tax_id_no.val("");pe.tax_id_no.unmask();pe.mask_tax_id_no();return pe.tax_id_no.change()};pe.mask_tax_id_no=function(){return"Employer Identification Number"===pe.tax_id_type.val()?pe.tax_id_no.mask("99-9999999"):pe.tax_id_no.mask("999-99-9999")};$(function(){var a;pe.tax_id_type=$("#IdentificationType");pe.tax_id_no=$("#TaxIdentificationNo");pe.tax_id_type.change(pe.tax_id_type_changed);pe.mask_tax_id_no();a={"#Name":pe.validation.name_validator,"#Address":pe.validation.not_blank_validator,
"#City":pe.validation.not_blank_validator,"#State":pe.validation.not_blank_validator,"#ZipCode":pe.validation.not_blank_validator,"#TaxIdentificationNo":pe.validation.not_blank_validator,"#Signature":pe.validation.not_blank_validator};window.x=new pe.ValidatableForm($("form.TaxInfo"),a,{"#Name":"blur","#Address":"blur","#City":"blur","#State":"blur","#ZipCode":"blur","#TaxIdentificationNo":"change","#Signature":"blur"});return pe.init_page_framework()})}).call(this);
