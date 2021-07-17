myApp.controller('myCtrl', function ($scope, $http, API_URL) {
    $scope.check = function (yourIP) {
        var url    = API_URL + yourIP + '/json';
        
        console.log(url);

        $http({
            method  : 'GET',
            url     : url
        }).then(function (response) {
            if (response.data.error) {
                $scope.desc = true;
                alert(response.data.reason);
            }

            $scope.ipRes    = response.data;
            $scope.tableStatus   = true;
        }, function (error) {
            console.log(error);
            alert('This is embarassing. An error has occurred. Please check the log for details');
        })
    }
})