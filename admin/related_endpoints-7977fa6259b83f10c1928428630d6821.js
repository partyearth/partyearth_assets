$(document).ready(function(){$(".RelatedEndpoint").change(function(){var a=$(this).val(),b=[window.location.href,a,"toggle_related"].join("/");$.post(b,function(){alert("Saved - "+a)})});$(".Endpoint").change(function(){var a=$(this).val(),b=[window.location.href,a,"toggle"].join("/");$.post(b,function(){alert("Saved - "+a)})});pe.init_page_framework()});
