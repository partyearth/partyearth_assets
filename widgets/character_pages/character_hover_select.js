pe.CharacterHoverSelect=function(a){pe.init_widget(this,a);this.character_image_div=this.container.find(".CharacterSelect");this.character_image_div.html(this.html());this.character_image_element=this.character_image_div.find(".CharacterImage");this.lucas_div=this.character_image_element.find(".Lucas");this.lucas_div.mouseover(this.callback(this.on_mouse_over));this.lucas_div.click(this.callback(this.on_click));this.adriana_div=this.character_image_element.find(".Adriana");this.adriana_div.mouseover(this.callback(this.on_mouse_over));
this.adriana_div.click(this.callback(this.on_click));this.jonah_div=this.character_image_element.find(".Jonah");this.jonah_div.mouseover(this.callback(this.on_mouse_over));this.jonah_div.click(this.callback(this.on_click));this.emma_div=this.character_image_element.find(".Emma");this.emma_div.mouseover(this.callback(this.on_mouse_over));this.emma_div.click(this.callback(this.on_click));this.container.find(".Content").hide()};pe.CharacterHoverSelect.prototype.html=function(){return'<div class="CharacterImage"><div class="Lucas characters lucas float_left" data="Lucas" title="Lucas"></div><div class="Adriana characters adriana float_left" data="Adriana" title="Adriana"></div><div class="Jonah characters jonah float_left" data="Jonah" title="Jonah"></div><div class="Emma characters emma float_left" data="Emma" title="Emma"></div><div class="clear"></div></div>'};
pe.CharacterHoverSelect.prototype.on_mouse_over=function(a){var b=$(a.target).attr("data");"undefined"!==typeof b?(this.container.find(".Content").hide(),this.container.find("."+b).show()):a.stopPropagation()};pe.CharacterHoverSelect.prototype.on_click=function(a){var b=$(a.target).attr("data");"undefined"!==typeof b?window.location="/pe-reviewers/"+b.toLowerCase():a.stopPropagation()};
