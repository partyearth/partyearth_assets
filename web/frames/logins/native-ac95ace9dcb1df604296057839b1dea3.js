(function(){$(document).ready(function(){return $("form").submit(function(){var b;b={login:$(".Login").val(),password:$(".Password").val()};$.post("/api/users/login",b,function(a){if(_.isEmpty(a))return window.parent.pe.fire_global_event(pe.events.LOGGED_IN),$(".Error").empty();a=(a.username||"")+(a.password||"")+(a.general||"");return $(".Error").html(a)});return!1})})}).call(this);
