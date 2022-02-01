(function(){
angular.module("myApp1",[])
.controller('myController',FunImage)
FunImage.$inject=['$scope', '$filter'];
function FunImage($scope,$filter) {
    $scope.x="monthend";
    $scope.y='Hello there';
    $scope.fun1= function () {
var temp= $filter('lowercase');
        $scope.x="monthstart";
        $scope.y=temp($scope.y);

    };
};
})();