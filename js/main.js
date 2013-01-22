(function($){
	"use strict";

	var scroll = function(){
		$('html,body').animate({scrollTop:0}, 'slow');
		return false;
	};

	var connexion = function(){
		$('#panneauConnex').fadeIn();
	};
	var closeConnex = function(){
		$('#panneauConnex').fadeOut();
	};

	$(function() {
		$('#top').on('click', scroll);
		$('#panneauConnex').hide();
		$('#connexionButton').on('click', connexion);
		$('#panneauConnex button').on('click', closeConnex);
	});
})(jQuery);
