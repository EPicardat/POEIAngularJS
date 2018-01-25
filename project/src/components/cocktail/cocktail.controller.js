(function() {
	'use strict';

	function CocktailCtrl($location, cocktailSearchService) {
		var vm = this;
		vm.cocktailSearchService=cocktailSearchService;
		vm.goToDetail=goToDetail;
		vm.idDrink='';

		function goToDetail(){
			$location.path('/cocktailDetail');
			cocktailSearchService.getCocktailDetails(vm.cocktailElement.idDrink);
		}
	}



	CocktailCtrl.$inject = ['$location','cocktailSearchService'];

	angular.module('daproject')
		.controller('CocktailCtrl', CocktailCtrl);

})();
