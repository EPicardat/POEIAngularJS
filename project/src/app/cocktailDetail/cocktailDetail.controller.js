(function() {
  'use strict';

  function DetailCtrl(cocktailSearchService) {
    var vm = this;
	  vm.cocktailSearchService=cocktailSearchService;
  }

  DetailCtrl.$inject = [ 'cocktailSearchService'];

  angular.module('daproject')
    .controller('DetailCtrl', DetailCtrl);

})();
