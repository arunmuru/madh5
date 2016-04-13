angular.module('app.controllers', [])

.controller('bookACabCtrl', function($scope) {
  $scope.info = {postalcode:"",pickuppoint:""};
  
 // $scope.postalcode="";
  //$scope.pickuppoint="";

  $scope.bookACab = function()
  {
    var number = 81899097;
    var message =  "BOOK " +  $scope.info.postalcode + " #" +$scope.info.pickuppoint;
    console.info( $scope.info.postalcode);
    console.info($scope.info.pickuppoint);
    console.info(number);
    console.info(message);

    //CONFIGURATION
    var options = {
      replaceLineBreaks: false, // true to replace \n by a new line, false by default
      android: {
        intent: 'INTENT'  // send SMS with the native android SMS messaging
        //intent: '' // send SMS without open any other app
      }
    };

    var success = function () { alert('Message sent successfully'); };
    var error = function (e) { alert('Message Failed:' + e); };
    sms.send(number, message, options, success, error);
  };

});
