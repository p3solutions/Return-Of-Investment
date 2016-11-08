angular.module('returnOfInvestment.controllers', [])
.controller("InputController", function($scope, $location){
    $scope.input11= $scope.input12= $scope.input13= $scope.input21= $scope.input22= $scope.input23= $scope.input24= $scope.input25= $scope.input26= $scope.input27= $scope.input28= $scope.input31= $scope.input32= $scope.input33= $scope.input34= $scope.input35= $scope.input36= $scope.input61= $scope.input62= $scope.input63= $scope.input711= $scope.input712= $scope.input721= $scope.input722=  $scope.input731= $scope.input732= $scope.input811= $scope.input812= $scope.input813= $scope.input821= $scope.input822= $scope.input823= $scope.input831= $scope.input832= $scope.input833=0;
    
    $scope.input41="yearly";
    $scope.input51=5;
    
    $scope.activeTab = 1;
    $scope.setActiveTab = function(tabNo){
        $scope.activeTab = tabNo;
    }
    
})
.controller("SummaryController", function($scope, $firebaseObject,$firebaseArray, shareService){
    var ref = firebase.database().ref();
    $scope.archivalLicenseCost = $firebaseObject(ref.child('licensing'));
    $scope.professionalServicesCost = $firebaseObject(ref.child('professionalServices'));

    $scope.nonarchresourceCost = shareService.getResourceCost();
    $scope.nonarchlicenseCost = shareService.getLicenceCost();
    $scope.dataArray1 = [];
    $scope.dataArray2 = [$scope.nonarchlicenseCost, $scope.nonarchlicenseCost, $scope.nonarchlicenseCost, $scope.nonarchlicenseCost, $scope.nonarchlicenseCost];
    
    $scope.archivalLicenseCost.$loaded().then(function(){
        $scope.dataArray1= [];
        console.log($scope.archivalLicenseCost);
        angular.forEach($scope.archivalLicenseCost, function(value, key){
            $scope.dataArray1.push(value);
        })
        $scope.dataArray1.splice(0,1);
    })
    
    $scope.$watch('dataArray',function(newValue, oldValue){
        console.log("It is changing");
        console.log($scope.dataArray1);
        $scope.eoption.series[0].data= $scope.dataArray1;
        $scope.eoption.series[1].data= $scope.dataArray2;
        console.log($scope.eoption.series[0].data);
        console.log($scope.eoption.series[1].data);
    })
    
    $scope.$watch('eoption',function(newValue,oldValue,scope){
        var option = scope.eoption;
        console.log("Yes it is being watched");
        if(angular.isObject(option)){
            scope.compChart.setOption(option);
            console.log("and is getting changed");
        }
    },true);  
    $scope.theme = {
          color: [
              '#26B99A', '#34495E', '#BDC3C7', '#3498DB',
              '#9B59B6', '#8abb6f', '#759c6a', '#bfd3b7'
          ],

          title: {
              itemGap: 8,
              textStyle: {
                  fontWeight: 'normal',
                  color: '#408829'
              }
          },

          dataRange: {
              color: ['#1f610a', '#97b58d']
          },

          toolbox: {
              color: ['#408829', '#408829', '#408829', '#408829']
          },

          tooltip: {
              backgroundColor: 'rgba(0,0,0,0.5)',
              axisPointer: {
                  type: 'line',
                  lineStyle: {
                      color: '#408829',
                      type: 'dashed'
                  },
                  crossStyle: {
                      color: '#408829'
                  },
                  shadowStyle: {
                      color: 'rgba(200,200,200,0.3)'
                  }
              }
          },

          dataZoom: {
              dataBackgroundColor: '#eee',
              fillerColor: 'rgba(64,136,41,0.2)',
              handleColor: '#408829'
          },
          grid: {
              borderWidth: 0
          },

          categoryAxis: {
              axisLine: {
                  lineStyle: {
                      color: '#408829'
                  }
              },
              splitLine: {
                  lineStyle: {
                      color: ['#eee']
                  }
              }
          },

          valueAxis: {
              axisLine: {
                  lineStyle: {
                      color: '#408829'
                  }
              },
              splitArea: {
                  show: true,
                  areaStyle: {
                      color: ['rgba(250,250,250,0.1)', 'rgba(200,200,200,0.1)']
                  }
              },
              splitLine: {
                  lineStyle: {
                      color: ['#eee']
                  }
              }
          },
          timeline: {
              lineStyle: {
                  color: '#408829'
              },
              controlStyle: {
                  normal: {color: '#408829'},
                  emphasis: {color: '#408829'}
              }
          },

          k: {
              itemStyle: {
                  normal: {
                      color: '#68a54a',
                      color0: '#a9cba2',
                      lineStyle: {
                          width: 1,
                          color: '#408829',
                          color0: '#86b379'
                      }
                  }
              }
          },
          map: {
              itemStyle: {
                  normal: {
                      areaStyle: {
                          color: '#ddd'
                      },
                      label: {
                          textStyle: {
                              color: '#c12e34'
                          }
                      }
                  },
                  emphasis: {
                      areaStyle: {
                          color: '#99d2dd'
                      },
                      label: {
                          textStyle: {
                              color: '#c12e34'
                          }
                      }
                  }
              }
          },
          force: {
              itemStyle: {
                  normal: {
                      linkStyle: {
                          strokeColor: '#408829'
                      }
                  }
              }
          },
          chord: {
              padding: 4,
              itemStyle: {
                  normal: {
                      lineStyle: {
                          width: 1,
                          color: 'rgba(128, 128, 128, 0.5)'
                      },
                      chordStyle: {
                          lineStyle: {
                              width: 1,
                              color: 'rgba(128, 128, 128, 0.5)'
                          }
                      }
                  },
                  emphasis: {
                      lineStyle: {
                          width: 1,
                          color: 'rgba(128, 128, 128, 0.5)'
                      },
                      chordStyle: {
                          lineStyle: {
                              width: 1,
                              color: 'rgba(128, 128, 128, 0.5)'
                          }
                      }
                  }
              }
          },
          gauge: {
              startAngle: 225,
              endAngle: -45,
              axisLine: {
                  show: true,
                  lineStyle: {
                      color: [[0.2, '#86b379'], [0.8, '#68a54a'], [1, '#408829']],
                      width: 8
                  }
              },
              axisTick: {
                  splitNumber: 10,
                  length: 12,
                  lineStyle: {
                      color: 'auto'
                  }
              },
              axisLabel: {
                  textStyle: {
                      color: 'auto'
                  }
              },
              splitLine: {
                  length: 18,
                  lineStyle: {
                      color: 'auto'
                  }
              },
              pointer: {
                  length: '90%',
                  color: 'auto'
              },
              title: {
                  textStyle: {
                      color: '#333'
                  }
              },
              detail: {
                  textStyle: {
                      color: 'auto'
                  }
              }
          },
          textStyle: {
              fontFamily: 'Arial, Verdana, sans-serif'
          }
      };

      $scope.eoption = {
        title: {
          text: 'Cost Comparisions',
          subtext: 'Comparision between Archiving and Not archiving'
        },
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          x: 220,
          y: 40,
          data: ['Archival', 'Non-Archival']
        },
        toolbox: {
          show: true,
          feature: {
            magicType: {
              show: true,
              title: {
                line: 'Line',
                bar: 'Bar',
                stack: 'Stack',
                tiled: 'Tiled'
              },
              type: ['line', 'bar', 'stack', 'tiled']
            },
            restore: {
              show: true,
              title: "Restore"
            },
            saveAsImage: {
              show: true,
              title: "Save Image"
            }
          }
        },
        calculable: true,
        xAxis: [{
          type: 'category',
          boundaryGap: false,
          data: ['Year1', 'Year2', 'Year3', 'Year4', 'Year5']
        }],
        yAxis: [{
          type: 'value'
        }],
        series: [{
          name: 'Archival',
          type: 'line',
          smooth: true,
          itemStyle: {
            normal: {
              areaStyle: {
                type: 'default'
              }
            }
          },
          data: [0, 0, 0, 0, 0]
        }, {
          name: 'Non-Archival',
          type: 'line',
          smooth: true,
          itemStyle: {
            normal: {
              areaStyle: {
                type: 'default'
              }
            }
          },
          data: [0, 0, 0, 0, 0]
        }]
      };
})
.controller("SettingsController", function($scope, $firebaseObject){
    var ref = firebase.database().ref();
    var syncLicensing = $firebaseObject(ref.child('licensing'));
    var syncProfessionalServices = $firebaseObject(ref.child('professionalServices'));
    syncLicensing.$bindTo($scope,'licensing');
    syncProfessionalServices.$bindTo($scope,'professionalServices');
})