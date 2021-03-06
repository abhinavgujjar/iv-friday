bookMySuite.controller('hotelsController', function($scope, hotelDataProvider){
	$scope.message = "Yay!! Weekend";

	$scope.allowRegister = true;

	$scope.upVote = function(hotel){
		hotel.rating++;
	}

	$scope.downVote = function(hotel){
		hotel.rating--;
	}

	var promise = hotelDataProvider.getHotels();

	promise.then(function (data){
		$scope.hotels = data;
	});

	$scope.yell = function(input)
	{
		if (input)
		{
			alert (input);
		}
		else
		{
			alert($scope.message);
		}
	}

});