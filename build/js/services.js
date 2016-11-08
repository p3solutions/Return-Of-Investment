angular.module('returnOfInvestment.services', [])
.factory('firebaseDB', function(){
    return firebase.database().ref();
})
.factory('shareService', function(){
    var resourceCost = 0;
    var licenseCost = 0;
    var prodUpdateCost = 0;
    
    return{
        getResourceCost : function(){
          return resourceCost;  
        },
        setResourceCost : function(value){
         resourceCost = value;   
        },
        getLicenceCost : function(){
            return licenseCost;
        },
        setLicenseCost : function(value){
            licenseCost = value;
        },
        getprodUpdateCost: function(){
            return prodUpdateCost;
        },
        setprodUpdateCost: function(value){
            prodUpdateCost = value;
        },
        getResourceCost2 : function(){
            return resourceCost + prodUpdateCost;
        },
        getResourceCost3 : function(){
            return getResourceCost2() + prodUpdateCost;
        },
        getResourceCost4 : function(){
            return getResourceCost3() + prodUpdateCost;
        },
        getResourceCost5 : function(){
            return getResourceCost4() + prodUpdateCost;
        }
    }
    
})