$(document).ready(function(){var d=$(".StartDate, .EndDate").datepicker({defaultDate:"+1w",changeMonth:!0,changeYear:!0,onSelect:function(a){var c=$(this).hasClass("StartDate")?"minDate":"maxDate",b=$(this).data("datepicker"),a=$.datepicker.parseDate(b.settings.dateFormat||$.datepicker._defaults.dateFormat,a,b.settings);d.not(this).datepicker("option",c,a)}});pe.init_page_framework()});
