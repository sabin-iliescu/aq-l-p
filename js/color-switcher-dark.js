/* Styles Switcher */

window.console = window.console || (function(){
	var c = {}; c.log = c.warn = c.debug = c.info = c.error = c.time = c.dir = c.profile = c.clear = c.exception = c.trace = c.assert = function(){};
	return c;
})();


jQuery(document).ready(function($) {
	"use strict"
	
	$("ul.colors .color8" ).click(function(){
		$("#colors" ).attr("href", "css/colors/default-dark.css" );
		return false;
	});

	$("ul.colors .color9" ).click(function(){
		$("#colors" ).attr("href", "css/colors/color-9.css" );
		return false;
	});

	$("ul.colors .color10" ).click(function(){
		$("#colors" ).attr("href", "css/colors/color-10.css" );
		return false;
	});

	$("ul.colors .color11" ).click(function(){
		$("#colors" ).attr("href", "css/colors/color-11.css" );
		return false;
	});

	$("ul.colors .color12" ).click(function(){
		$("#colors" ).attr("href", "css/colors/color-12.css" );
		return false;
	});

	$("ul.colors .color13" ).click(function(){
		$("#colors" ).attr("href", "css/colors/color-13.css" );
		return false;
	});

	$("ul.colors .color14" ).click(function(){
		$("#colors" ).attr("href", "css/colors/color-14.css" );
		return false;
	});


	$("#color-style-switcher .bottom a.settings").click(function(e){
		e.preventDefault();
		var div = $("#color-style-switcher");
		if (div.css("left") === "-189px") {
			$("#color-style-switcher").animate({
				left: "0px"
			}); 
		} else {
			$("#color-style-switcher").animate({
				left: "-189px"
			});
		}
	})

	$("ul.colors li a").click(function(e){
		e.preventDefault();
		$(this).parent().parent().find("a").removeClass("active");
		$(this).addClass("active");
	})

});



//Inject Necessary Styles and HTML
jQuery('head').append('<link rel="stylesheet" id="colors" href="css/colors/default-dark.css" type="text/css" />');
jQuery('head').append('<link rel="stylesheet" href="css/color-switcher.css" type="text/css" />'); 

jQuery('body').append('' + 
	'<div id="color-style-switcher">' +
		'<div>' + 
			'<h3>Color Palette</h3>' +
			'<ul class="colors">' +
				'<li><a class="color8 active" href="#"></a></li>' +
				'<li><a class="color9" href="#"></a></li>' +
				'<li><a class="color10" href="#"></a></li>' +
				'<li><a class="color11" href="#"></a></li>' +
				'<li><a class="color12" href="#"></a></li>' +
				'<li><a class="color13" href="#"></a></li>' +
				'<li><a class="color14" href="#"></a></li>' +
			'</ul>' +
		'</div>' +
		'<div class="bottom"> <a href="#" class="settings"></a> </div>' +
	'</div>' +
'');
