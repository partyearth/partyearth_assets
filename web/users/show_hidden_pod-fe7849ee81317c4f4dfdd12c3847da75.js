(function(){var e=pe,d=function(a,b,c){this.container=a;this.left_container=b;this.right_container=c;0<this.container.length&&this.show_if_possible()};d.prototype.show_if_possible=function(){var a,b,c;b=this.left_container.height();c=this.right_container.height();a=this.container.outerHeight();if(b>c+a)return this.container.show()};e.ShowHiddenPod=d}).call(this);
