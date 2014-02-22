bookMySuite.controller('newHotelController', function($scope){
	$scope.save = function(hotel, newHotelForm){

		console.log(newHotelForm);
		if ( newHotelForm.$valid )
		{
			alert('YES');
		}
		else
		{
			alert('NO');
		}

		console.log('new hotel' + hotel);
		console.log('name ' + hotel.name);
		console.log('location' + hotel.location);
	}
});