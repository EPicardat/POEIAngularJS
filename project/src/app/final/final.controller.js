(function() {
	'use strict';

	function FinalCtrl($location, searchConfigService,cocktailSearchService) {
		var vm = this;
		vm.service = searchConfigService;
		vm.cocktailSearchService=cocktailSearchService;
	
		vm.clicBoutonFinal = clicBoutonFinal;
		vm.texteFinalInput = '';

		function clicBoutonFinal(){
			vm.service.ingredient=vm.texteFinalInput;
			cocktailSearchService.getCocktails();
		}
		

	}

	FinalCtrl.$inject = [ '$location','searchConfigService','cocktailSearchService'];

	angular.module('daproject')
		.controller('FinalCtrl', FinalCtrl);

})();
