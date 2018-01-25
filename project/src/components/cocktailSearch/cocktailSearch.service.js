(function() {
	'use strict';

	function cocktailSearchService($http,searchConfigService) {
		var service = {};

		service.searchConfigService = searchConfigService;
		service.cocktailList = [];
		service.getCocktails = getCocktails;
		service.cocktailDetail = {};
		service.getCocktailDetails=getCocktailDetails;
		service.cocktailId='';

		

		function getCocktails(){
			return $http.get('http://www.thecocktaildb.com/api/json/v1/1/filter.php?i='+searchConfigService.ingredient)
				.then(function(response){
				console.log('succes');
				service.cocktailList = response.data.drinks;
			})
				.catch(function(error){
				console.log('error');
				service.cocktailList = {};
			});
		}
		
		function getCocktailDetails(cocktailId){
			return $http.get('http://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='+cocktailId)
				.then(function(response){
				console.log('succes');
				service.cocktailDetail = response.data.drinks[0];
			})
				.catch(function(error){
				console.log('error');
				service.cocktailList = {};
			});
		}
		
		
		return service;
	}

	cocktailSearchService.$inject = ['$http','searchConfigService'];

	angular.module('daproject')
		.factory('cocktailSearchService', cocktailSearchService);
	
 })();