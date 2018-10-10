angular.module('myApp', []);

angular.module('myApp').controller('main', function ($scope, $http) {
	$scope.message = 'Welcome';

	$http.get('/getTasks')
		.then(function successCallback(response) {
		    $scope.tasks = response.data;
		}, function errorCallback(response) {
	    	console.log(`error ${response}`)
	});

	$scope.addTask = function(newTask) {
       $http.post('/newTask', newTask)
             .then(function (response) {
                   $scope.tasks.push(response.data);
             }, function errorCallback(response) {
		    	   console.log(`error when Posting Task ${response}`)
			 });
    };
	
});