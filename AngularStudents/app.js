var app = angular.module('studentApp', []);

app.controller('StudentController', function ($scope) {
  $scope.students = []
  $scope.newStudent = {}

  $scope.addStudent = function () {
    if ($scope.newStudent.name && $scope.newStudent.age && $scope.newStudent.branch) {
      $scope.students.push(angular.copy($scope.newStudent))
      $scope.newStudent = {}
    }
  }

  $scope.removeStudent = function (index) {
    $scope.students.splice(index, 1)
  }
})