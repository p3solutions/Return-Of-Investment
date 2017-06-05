angular.module('returnOfInvestment.controllers', [])
.controller("InputController", function($scope){
    $scope.input11= $scope.input12= $scope.input13= $scope.input21= $scope.input22= $scope.input23= $scope.input24= $scope.input25= $scope.input26= $scope.input27= $scope.input28= $scope.input31= $scope.input32= $scope.input33= $scope.input34= $scope.input35= $scope.input36= $scope.input61= $scope.input62= $scope.input63= $scope.input711= $scope.input712= $scope.input721= $scope.input722=  $scope.input731= $scope.input732= $scope.input811= $scope.input812= $scope.input813= $scope.input821= $scope.input822= $scope.input823= $scope.input831= $scope.input832= $scope.input833=0;
    
    $scope.input41="yearly";
    $scope.input51=5;
    
    $scope.activeTab = 1;
    $scope.setActiveTab = function(tabNo){
        $scope.activeTab = tabNo;
    }
    
})
.controller("SummaryController", function($scope, $firebaseObject,$firebaseArray, firebaseDB, shareService){
    $scope.archivalLicenseCost = firebaseDB.getObject('licensing');
    $scope.professionalServicesCost = firebaseDB.getObject('professionalServices');
    $scope.nonarchresourceCost = shareService.getResourceCost();
    $scope.nonarchlicenseCost = shareService.getLicenceCost();
})
.controller("SettingsController", function($scope, firebaseDB){
    var syncLicensing = firebaseDB.getObject('licensing');
    var syncProfessionalServices = firebaseDB.getObject('professionalServices');
    var syncParameters = firebaseDB.getObject('parameters');
    var syncLowComplexityParams = firebaseDB.getObject('lowComplexityParams');
    var syncMedComplexityParams = firebaseDB.getObject('medComplexityParams');
    var syncHighComplexityParams = firebaseDB.getObject('highComplexityParams');
    
    syncLicensing.$bindTo($scope,'licensing');
    syncProfessionalServices.$bindTo($scope,'professionalServices');
    syncParameters.$bindTo($scope,'parameters');
    syncLowComplexityParams.$bindTo($scope,'lowComplexityParams');
    syncMedComplexityParams.$bindTo($scope,'medComplexityParams');
    syncHighComplexityParams.$bindTo($scope,'highComplexityParams');
    
    $scope.activeTab = 1;
    $scope.setActiveTab = function(tabNo){
        $scope.activeTab = tabNo;
    }
})