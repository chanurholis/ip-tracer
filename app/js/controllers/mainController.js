myApp.controller('myCtrl', function ($scope, $http, API_URL) {
    $http({
        method: 'GET',
        url: API_URL + '8.8.8.8' + '/json'
    }).then(function (response) {
        $scope.ipRes = response.data;
    }, function (error) {
        console.log(error);
        alert('This is embarassing. An error has occurred. Please check the log for details');
    })
})