helloApp.controller('worldController', function($scope){
	$scope.message = "Yay!! Weekend";

	$scope.hotels = [{
		name : 'Radisson',
		location: 'Noida',
		image: 'img/radisson.jpg'
	},
	{
		name: 'Park Plaza',
		location: 'Sector 52',
		image: 'img/taj.jpg'
	},
	{
		name: 'Hilton',
		location: 'Janakpuri',
		image: 'img/ashok.jpg'
	}];

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