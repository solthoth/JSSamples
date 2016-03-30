(function(){
  angular.module('StatesApp', [])
  .factory('StateListService', ['$http', function($http){
    return $http.get("/api/states");
  }])
  .directive('statesAutoComplete',['StateListService',function(stateListSrvc){
    return {
      restrict: 'A',
      link: function(scope, elem, attr, ctrl) {
        stateListSrvc.success(function(data){
          elem.autocomplete({
              source: data,
              minLength: 2
          });
        });
      }
    };
  }]);
})();
