var person = { name: 'Stavros', weight: 85 };
var app = angular.module('myApplication', []);

app.controller('myController', function(){
  this.person = person;
});
