$(document).ready(function(){pe.validate_on_blur($("#email"),pe.validation.ensure_not_blank);pe.validate_on_blur($("#password"),pe.validation.ensure_not_blank);pe.validate_before_submit($("form"));$("#email").focus();pe.init_page_framework()});
