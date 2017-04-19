(function() {
    var app = angular.module('RacingApp', []);
    app.controller('DriverCtrl', function ($http, $scope) {
        $http.get("http://ergast.com/api/f1/2017/driverStandings.json").then(function (response) {
            $scope.information = response.data;
        });
        $scope.column = "";
    });
})();