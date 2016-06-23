var myApp=angular.module( 'myApp', [] );
// create a controller
myApp.controller( 'whereMyPeeps', [ '$scope', '$http', function( $scope, $http ){
  $scope.addRecord = function(){
    event.preventDefault();
    // get the user input and store in an object
    var objectToSend ={
      name: $scope.nameIn,
      location: $scope.locationIn
    };
    // make a call to server with object to be stored in DB
    $http({
      method: 'POST',
      url: '/testPost',
      data: objectToSend
    });
    // clear inputs
    $scope.nameIn ='';
    $scope.locationIn='';
  }; // end addRecord
  $scope.getRecords = function(){
    // read button clicked
    // retrieve records via http call (GET)
    $http({
      method: 'GET',
      url: '/getRecords',
    }).then( function( response ){
      // like an ajax success
      // we have been sent back "response"
      // .data is the data in the reponse
      $scope.allTheRecords = response; // .data;
      console.log( $scope.allTheRecords );
    }), function myError( response ){
      console.log( response.statusText );
    };
  }; // end getRecords
}]); // end whereMyPeeps controller
