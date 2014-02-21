helloApp.controller('worldController', function($scope){
	$scope.message = "Yay!! Weekend";

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