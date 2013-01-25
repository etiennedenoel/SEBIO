(function($){
	"use strict";

	var availableTags = [
      "Alimentation Bio",
      "Article",
      "Aromathérapie",
      "Allaitement",
      "Activités manuelle",
      "Bien être et santé",
      "Biberons",
      "Bébé",
      "Couches",
      "Nos ateliers nature",
      "Bons plans",
      "Vêtements",
      "Hygiène",
      "Maison et jardin",
      "promotions",
      "inscription",
      "Destockage",
      "Bio",
      "SeBio",
      "panier",
      "Huile de soin & massage",
      "Diffuseur d'arôme",
      "Contact",
      "liens",
      "Newsletter",
      "Coton",
      "Crème éternelle Visage anti-âge"
    ];



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
	var simulationDelete = function(){
		if(confirm('Voulez-vous vraiment l\'enlever de votre panier?')){
			$(this).parent().parent().fadeOut();
		}

	}

	$(function() {
		$('#top').on('click', scroll);
		$('#panneauConnex').hide();
		$('#connexionButton').on('click', connexion);
		$('#panneauConnex button').on('click', closeConnex);
		$('.delete').on('click', simulationDelete);
		$('#inputRecherche').autocomplete({source: availableTags});
		$("#featured").tabs({fx:{opacity: "toggle"}}).tabs("rotate", 5000, true);
		$("#featured").tabs({fx:{opacity: "toggle"}}).tabs("rotate", 5000, true);


	});
})(jQuery);
