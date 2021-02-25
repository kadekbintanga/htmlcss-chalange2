var app = angular.module('myApp',[]);

app.controller('myCtrl', function($scope, $window){
    $scope.data = data;
    $scope.showAlert = function ($index) {
        $window.alert("Succes to Buy " + data[$index].title);
    }
});

var data = [{
    id:0,
    title: 'BASIC',
    price: './source/image/4 dolar.png',
    benefit1: '10 Projects',
    benefit2: '10 Pages',
    benefit3: '100 Mb Disk Space'
},{
    id:1,
    title: 'STANDARD',
    price: './source/image/8 dolar.png',
    benefit1: '20 Projects',
    benefit2: '20 Pages',
    benefit3: '200 Mb Disk Space'
},{
    id:2,
    title: 'ADVANCED',
    price: './source/image/12 dolar.png',
    benefit1: '40 Projects',
    benefit2: '40 Pages',
    benefit3: '500 Mb Disk Space'
}];