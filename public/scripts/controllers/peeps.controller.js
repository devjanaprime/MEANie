myApp.controller( 'WhereMyPeeps', function( $http, PeepsService ){
var vm = this;
vm.newPeep = function(){
console.log( 'in newPeep' );
var peepToAdd = {
name= vm.nameIn,
location= vm.locationIn
}; //end peepToAdd
PeepsService.peeps.add( peepToAdd );
}; //end whereMyPeepsAt
vm.whereMyPeepsAt = function(){
console.log( 'in whereMyPeepsAt' );
PeepsService.peeps.get();
}; //end whereMyPeepsAt
}); // end controller
