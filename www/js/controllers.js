angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
})

.factory('PhotoAlbum', function() {

 var PhotoAlbum = {
    photos: [
        { link: "img/img (1).jpg", id: 1 },
        { link: "img/img (2).jpg", id: 2 },
        { link: "img/img (3).jpg", id: 3 },
        { link: "img/img (4).jpg", id: 4 },
        { link: "img/img (5).jpg", id: 5 },
        { link: "img/img (6).jpg", id: 6 },
        { link: "img/img (7).jpg", id: 7 },
        { link: "img/img (8).jpg", id: 8 },
        { link: "img/img (9).jpg", id: 9 },
        { link: "img/img (10).jpg", id: 10 },
        { link: "img/img (11).jpg", id: 11 },
        { link: "img/img (12).jpg", id: 12 },
        { link: "img/img (13).jpg", id: 13 },
        { link: "img/img (14).jpg", id: 14 },
        { link: "img/img (15).jpg", id: 15 },
    ]
  };

 return PhotoAlbum;
})

.controller('GalleryCtrl', function($scope, PhotoAlbum) {
  $scope.photos = PhotoAlbum.photos;
})

.controller('SlideShowCtrl', function($scope, PhotoAlbum, $stateParams) {
    $scope.photos = PhotoAlbum.photos;


    // initial image index
    $scope._Index = parseInt($stateParams.photoId) - 1;

    // if a current image is the same as requested image
    $scope.isActive = function (index) {
        return $scope._Index === index;
    };

    // show prev image
    $scope.showPrev = function () {
        $scope._Index = ($scope._Index > 0) ? --$scope._Index : $scope.photos.length - 1;
    };

    // show next image
    $scope.showNext = function () {
        $scope._Index = ($scope._Index < $scope.photos.length - 1) ? ++$scope._Index : 0;
    };

});
