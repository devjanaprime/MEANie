var myApp=angular.module( 'myApp', [] );
myApp.controller( 'WhereMyPeeps', [ '$http', function( $http ){
var vm = this;
vm.addRecord = function(){
var objectToSend ={
name: vm.nameIn,
location: vm.locationIn,
};
$http({
method: 'POST',
url: '/testPost',
data: objectToSend
});
vm.nameIn ='';
vm.locationIn='';
};
vm.getRecords = function(){
$http({
method: 'GET',
url: '/getRecords',
}).then( function( response ){
vm.allTheRecords = response;
console.log( vm.allTheRecords );
}), function myError( response ){
console.log( response.statusText );
};
};
}]);
