(function () {
  var  app = angular.module("myapp", []);
    app.controller("FirstController", function ($scope) {
        $scope.firstName = "Sai";
        $scope.lastName="Sasank";
        $scope.fun1 = function() {
          alert("hii " +  $scope.lastName);
          $scope.x=200;
      };
    });
})();