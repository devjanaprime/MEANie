myApp.service( 'PeepsService', function( $http ){
var sv = this;
sv.peeps = {
add: function( newPeep ){
console.log( 'in addRecord:', newPeep );
$.http( {
method: 'POST',
url: '/peeps',
data: newPeep
})
},
get: function(){
console.log( 'in getRecords' );
return $http({
method: 'GET',
url: '/peeps',
}).then( function( response ){
console.log( 'in service, back from server with:', response );
});
}
}
});
