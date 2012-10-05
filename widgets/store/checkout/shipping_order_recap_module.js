pe.ShippingOrderRecap=function(a,b,c,d){pe.init_widget(this,a);this.order_id=b;this.shipping_type_dropdown=c;this.state_dropdown=d;this.sales_tax_div=this.container.find(".SalesTax");this.shipping_handling_div=this.container.find(".ShippingHandling");this.order_total_div=this.container.find(".OrderTotal");this.shipping_type_dropdown.bind_event(pe.ShippingTypeDropDown.events.CHANGED,this.callback(this.calculate_order_total));this.state_dropdown.bind_event(pe.StateDropdown.events.CHANGED,this.callback(this.calculate_order_total))};
pe.ShippingOrderRecap.prototype.calculate_order_total=function(){$.ajax({url:"/api/orders/calculate_order_total.json",data:{order:this.order_id,state:this.state_dropdown.val(),shipping_type_id:this.shipping_type_dropdown.val()},type:"GET",success:this.callback(function(a){if(a.error)return alert(a.error),!1;this.sales_tax_div.html(a.sales_tax);this.shipping_handling_div.html(a.shipping_cost);this.order_total_div.html(a.total_cost);return!0})})};
