angular.module('returnOfInvestment.directives', [])
.directive('smartWizard', ['$location','shareService',function(location, shareService){
    return {
        restrict: 'A',
        scope: true,
        controller: ['$scope', function($scope, $element, $attrs){
            $scope.summarize = function(objs, context) {
                console.log("summerize getting called");
                
                $scope.resourceCost = $scope.input21 + $scope.input22 + $scope.input23 + $scope.input24 + $scope.input25 +      $scope.input26 + $scope.input27 + $scope.input28 + $scope.input35;

                $scope.licenseCost = $scope.input31 + $scope.input32 + $scope.input33 + $scope.input34
                
                shareService.setResourceCost($scope.resourceCost);
                shareService.setLicenseCost($scope.licenseCost);
                shareService.setprodUpdateCost($scope.input35);
                
                location.path('/summary');
                $scope.$apply();
            };
        }],
        link: function(scope, elem, attrs){
            var options = {
                onFinish: scope.summarize
            };
            angular.element(document).ready(function (){
                $(elem).smartWizard(options);
                $('.buttonNext').addClass('btn btn-success');
                $('.buttonPrevious').addClass('btn btn-primary');
                $('.buttonFinish').addClass('btn btn-default');
            });
        }
    }
}])
.directive('echartWizard', function(){
    return {
        restrict: 'A',
        link: function(scope, elem, attrs){
            scope.compChart= echarts.init(elem[0],scope.theme);
            console.log("initialized");
            scope.compChart.setOption(scope.eoption);
        }
    }
})