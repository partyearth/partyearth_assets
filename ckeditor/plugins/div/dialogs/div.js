(function(){function q(c,k,l){if(!k.is||!k.getCustomData("block_processed"))k.is&&CKEDITOR.dom.element.setMarker(l,k,"block_processed",!0),c.push(k)}function n(c,k){function l(){this.foreach(function(a){if(/^(?!vbox|hbox)/.test(a.type)&&(a.setup||(a.setup=function(b){a.setValue(b.getAttribute(a.id)||"")}),!a.commit))a.commit=function(b){var c=this.getValue();"dir"==a.id&&b.getComputedStyle("direction")==c||(c?b.setAttribute(a.id,c):b.removeAttribute(a.id))}})}var n=function(){var a=CKEDITOR.tools.extend({},
CKEDITOR.dtd.$blockLimit);delete a.div;c.config.div_wrapTable&&(delete a.td,delete a.th);return a}(),r=CKEDITOR.dtd.div,m={},o=[];return{title:c.lang.div.title,minWidth:400,minHeight:165,contents:[{id:"info",label:c.lang.common.generalTab,title:c.lang.common.generalTab,elements:[{type:"hbox",widths:["50%","50%"],children:[{id:"elementStyle",type:"select",style:"width: 100%;",label:c.lang.div.styleSelectLabel,"default":"",items:[[c.lang.common.notSet,""]],onChange:function(){var a=["info:class","advanced:dir",
"advanced:style"],b=this.getDialog(),h=b._element&&b._element.clone()||new CKEDITOR.dom.element("div",c.document);this.commit(h,!0);for(var a=[].concat(a),d=a.length,i,e=0;e<d;e++)(i=b.getContentElement.apply(b,a[e].split(":")))&&i.setup&&i.setup(h,!0)},setup:function(a){for(var b in m)m[b].checkElementRemovable(a,!0)&&this.setValue(b)},commit:function(a){var b;if(b=this.getValue()){b=m[b];var c=a.getCustomData("elementStyle")||"";b.applyToObject(a);a.setCustomData("elementStyle",c+b._.definition.attributes.style)}}},
{id:"class",type:"text",label:c.lang.common.cssClass,"default":""}]}]},{id:"advanced",label:c.lang.common.advancedTab,title:c.lang.common.advancedTab,elements:[{type:"vbox",padding:1,children:[{type:"hbox",widths:["50%","50%"],children:[{type:"text",id:"id",label:c.lang.common.id,"default":""},{type:"text",id:"lang",label:c.lang.link.langCode,"default":""}]},{type:"hbox",children:[{type:"text",id:"style",style:"width: 100%;",label:c.lang.common.cssStyle,"default":"",commit:function(a){var b=this.getValue()+
(a.getCustomData("elementStyle")||"");a.setAttribute("style",b)}}]},{type:"hbox",children:[{type:"text",id:"title",style:"width: 100%;",label:c.lang.common.advisoryTitle,"default":""}]},{type:"select",id:"dir",style:"width: 100%;",label:c.lang.common.langDir,"default":"",items:[[c.lang.common.notSet,""],[c.lang.common.langDirLtr,"ltr"],[c.lang.common.langDirRtl,"rtl"]]}]}]}],onLoad:function(){l.call(this);var a=this,b=this.getContentElement("info","elementStyle");c.getStylesSet(function(c){var d;
if(c)for(var i=0;i<c.length;i++){var e=c[i];e.element&&"div"==e.element&&(d=e.name,m[d]=new CKEDITOR.style(e),b.items.push([d,d]),b.add(d,d))}b[1<b.items.length?"enable":"disable"]();setTimeout(function(){b.setup(a._element)},0)})},onShow:function(){if("editdiv"==k){var a;(a=(a=(new CKEDITOR.dom.elementPath(c.getSelection().getStartElement())).blockLimit)&&a.getAscendant("div",!0))&&this.setupContent(this._element=a)}},onOk:function(){var a;if("editdiv"==k)a=[this._element];else{a=[];var b={},h=[],
d,i=c.document.getSelection(),e=i.getRanges(),m=i.createBookmarks(),g,j;for(g=0;g<e.length;g++)for(j=e[g].createIterator();d=j.getNextParagraph();)if(d.getName()in n){var f=d.getChildren();for(d=0;d<f.count();d++)q(h,f.getItem(d),b)}else{for(;!r[d.getName()]&&"body"!=d.getName();)d=d.getParent();q(h,d,b)}CKEDITOR.dom.element.clearAllMarkers(b);e=[];g=null;for(j=0;j<h.length;j++){d=h[j];for(var f=(new CKEDITOR.dom.elementPath(d)).elements,l=void 0,p=0;p<f.length;p++)if(f[p].getName()in n){l=f[p];break}f=
l;f.equals(g)||(g=f,e.push([]));e[e.length-1].push(d)}for(g=0;g<e.length;g++){f=e[g][0];h=f.getParent();for(d=1;d<e[g].length;d++)h=h.getCommonAncestor(e[g][d]);j=new CKEDITOR.dom.element("div",c.document);for(d=0;d<e[g].length;d++){for(f=e[g][d];!f.getParent().equals(h);)f=f.getParent();e[g][d]=f}for(d=0;d<e[g].length;d++)if(f=e[g][d],!f.getCustomData||!f.getCustomData("block_processed"))f.is&&CKEDITOR.dom.element.setMarker(b,f,"block_processed",!0),d||j.insertBefore(f),j.append(f);CKEDITOR.dom.element.clearAllMarkers(b);
a.push(j)}i.selectBookmarks(m)}o=a;a=o.length;for(b=0;b<a;b++)this.commitContent(o[b]),!o[b].getAttribute("style")&&o[b].removeAttribute("style");this.hide()},onHide:function(){"editdiv"==k&&this._element.removeCustomData("elementStyle");delete this._element}}}CKEDITOR.dialog.add("creatediv",function(c){return n(c,"creatediv")});CKEDITOR.dialog.add("editdiv",function(c){return n(c,"editdiv")})})();
