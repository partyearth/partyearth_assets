CKEDITOR.skins.add("office2003",function(){return{editor:{css:["editor.css"]},dialog:{css:["dialog.css"]},separator:{canGroup:!1},templates:{css:["templates.css"]},margins:[0,14,18,14]}}());
(function(){function c(){CKEDITOR.dialog.on("resize",function(c){var a=c.data,d=a.height,e=a.dialog;"office2003"==a.skin&&(e.parts.contents.setStyles({width:a.width+"px",height:d+"px"}),CKEDITOR.env.ie&&!CKEDITOR.env.ie9Compat&&(a=function(){var a=e.parts.dialog.getChild([0,0,0]),b=a.getChild(0),c=b.getSize("width");d+=b.getChild(0).getSize("height")+1;b=a.getChild(2);b.setSize("width",c);b=a.getChild(7);b.setSize("width",c-28);b=a.getChild(4);b.setSize("height",d);b=a.getChild(5);b.setSize("height",
d)},setTimeout(a,100),"rtl"==c.editor.lang.dir&&setTimeout(a,1E3)))})}CKEDITOR.dialog?c():CKEDITOR.on("dialogPluginReady",c)})();
