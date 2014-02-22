bookMySuite.controller('newHotelController', function($scope){
	$scope.save = function(hotel){
		console.log('new hotel' + hotel);
		console.log('name ' + hotel.name);
		console.log('location' + hotel.location);
	}
});