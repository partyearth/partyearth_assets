$(document).ready(function(){$(".RelatedEndpoint").change(function(){var n=$(this).val(),o=[window.location.href,n,"toggle_related"].join("/");$.post(o,function(){alert("Saved - "+n)})}),$(".Endpoint").change(function(){var n=$(this).val(),o=[window.location.href,n,"toggle"].join("/");$.post(o,function(){alert("Saved - "+n)})}),pe.init_page_framework()});