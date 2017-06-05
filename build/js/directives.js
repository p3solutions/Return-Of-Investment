angular.module('returnOfInvestment.directives', [])
.directive('collapseQuestion',function(){
    return {
        restrict: 'A',
        scope: true,
        link: function(scope, elem, attrs){
            angular.element(document).ready(function (){
               $('.collapse-question').on('click', function() {
                var $BOX_PANEL = $(this).closest('.q_panel'),
                    $ICON = $(this).find('i'),
                    $BOX_CONTENT = $BOX_PANEL.find('.q_content');

                // fix for some div with hardcoded fix class
                if ($BOX_PANEL.attr('style')) {
                    $BOX_CONTENT.slideToggle(200, function(){
                        $BOX_PANEL.removeAttr('style');
                    });
                } else {
                    $BOX_CONTENT.slideToggle(200); 
                    $BOX_PANEL.css('height', 'auto');  
                }

                $ICON.toggleClass('fa-chevron-up fa-chevron-down');
            }); 
            });
        }
    }
})
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
.directive('echartWizard', ['shareService','firebaseDB','theme','eoption',function(shareService,firebaseDB,theme,eoption){
    return {
        restrict: 'A',
        scope: true,
        controller: ['$scope', function($scope, $element, $attrs){
            var dataArray1= [];
            var archivalLicenseCost = firebaseDB.getObjectPromise('licensing');
            var professionalServicesCost = firebaseDB.getObjectPromise('professionalServices');
            archivalLicenseCost.then(function(archivalLicenseCost){
                angular.forEach(archivalLicenseCost, function(value, key){
                    dataArray1.push(value);
                })
                dataArray1.splice(0,1); 
                var nonarchlicenseCost = shareService.getLicenceCost();
                var dataArray2 = [nonarchlicenseCost, nonarchlicenseCost, nonarchlicenseCost, nonarchlicenseCost, nonarchlicenseCost];
                eoption.series[0].data= dataArray1;
                eoption.series[1].data= dataArray2;
                $scope.eoption = eoption;
            })
                
        }],
        link: function(scope, elem, attrs){
            scope.compChart = echarts.init(elem[0],theme);
            if (attrs.eoption) {
                scope.$watch(attrs['eoption'], function() {
                    var option = scope.$eval(attrs.eoption);
                    if (angular.isObject(option)) {
                        scope.compChart.setOption(option);
                    }
                }, true); // deep watch
            }
        }
    }
}])
.directive('echartPyramid', ['shareService','firebaseDB','theme','pyramidoption',function(shareService,firebaseDB,theme,pyramidoption){
    return {
        restrict: 'A',
        scope: true,
        controller: ['$scope', function($scope, $element, $attrs){
            var parameters = firebaseDB.getObjectPromise('parameters');
            var lowComplexityParams = firebaseDB.getObjectPromise('lowComplexityParams');
            var medComplexityParams = firebaseDB.getObjectPromise('medComplexityParams');
            var highComplexityParams = firebaseDB.getObjectPromise('highComplexityParams');
            console.log(parameters);
            pyramidoption.series[0].data[0].value = (parameters.storageEstimatetoDataSizeRange/100)*(highComplexityParams.dataSize/100)*$scope.input63;
            console.log(pyramidoption.series[0].data[0].value);
            pyramidoption.series[0].data[1].value = (parameters.storageEstimatetoDataSizeRange/100)*(medComplexityParams.dataSize/100)*$scope.input62;
            pyramidoption.series[0].data[2].value = (parameters.storageEstimatetoDataSizeRange/100)*(lowComplexityParams.dataSize/100)*$scope.input61;
                $scope.pyramidoption = pyramidoption;
        }],
        link: function(scope, elem, attrs){
            scope.echartPyramid = echarts.init(elem[0],theme);
            if (attrs.pyramidoption) {
                scope.$watch(attrs['pyramidoption'], function() {
                    var option = scope.$eval(attrs.pyramidoption);
                    if (angular.isObject(option)) {
                        scope.echartPyramid.setOption(option);
                    }
                }, true); // deep watch
            }
        }
    }
}])
.directive('echartSonar', ['shareService','firebaseDB','theme','sonaroption',function(shareService,firebaseDB,theme,sonaroption){
    return {
        restrict: 'A',
        scope: true,
        controller: ['$scope', function($scope, $element, $attrs){
                $scope.sonaroption = sonaroption;
        }],
        link: function(scope, elem, attrs){
            scope.echartSonar = echarts.init(elem[0],theme);
            if (attrs.sonaroption) {
                scope.$watch(attrs['sonaroption'], function() {
                    var option = scope.$eval(attrs.sonaroption);
                    if (angular.isObject(option)) {
                        scope.echartSonar.setOption(option);
                    }
                }, true); // deep watch
            }
        }
    }
}])