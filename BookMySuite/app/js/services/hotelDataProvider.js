bookMySuite.factory('hotelDataProvider', function($http, $q)
{
	var dataProvider =  {
		getHotels : function(){
			var deferred = $q.defer();

			$http({ method: 'GET', url:'/data/hotel'})
			
			.success(function(data){
				deferred.resolve(data);
			})
			.error(function(){
				deferred.reject();
			});

			return deferred.promise;
		}
		
	};

	return dataProvider;
});
