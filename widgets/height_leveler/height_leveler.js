(function(){pe.HeightLeveler=function(){return function(b){pe.init_widget(this,b);this.distributed_items=b.find(".LevelHeight");this.max_heigth=_.max(_.map(this.distributed_items,function(a){return $(a).height()}));_.each(this.distributed_items,function(a){return $(a).height(this.max_heigth)},this)}}()}).call(this);
