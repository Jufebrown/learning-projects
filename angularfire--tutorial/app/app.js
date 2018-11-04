
// Initialize Firebase
var config = {
  apiKey: "AIzaSyCMMNNzEP5HY_JMOGQoam-xH5AZqtvzhAk",
  authDomain: "angularfire-practice.firebaseapp.com",
  databaseURL: "https://angularfire-practice.firebaseio.com",
  storageBucket: "angularfire-practice.appspot.com",
  messagingSenderId: "330870997829"
};
firebase.initializeApp(config);

var app = angular.module("sampleApp", ["firebase"]);


/*********************************************
this does 3 way binding with an array
*********************************************/
app.controller("SampleCtrl", function($scope, $firebaseArray) {
  var ref = firebase.database().ref().child("messages");
  // create a synchronized array
  $scope.messages = $firebaseArray(ref);
  // add new items to the array
  // the message is automatically added to our Firebase database!
  $scope.addMessage = function() {
    $scope.messages.$add({
      text: $scope.newMessageText
    });
  };
});





/*********************************************
user auth with a service (google, facebook)
*********************************************/
// app.factory("Auth", ["$firebaseAuth",
//   function($firebaseAuth) {
//     return $firebaseAuth();
//   }
// ]);

// app.controller("SampleCtrl", ["$scope", "Auth",
//   function($scope, Auth) {
//     $scope.auth = Auth;

//     // any time auth state changes, add the user data to scope
//     $scope.auth.$onAuthStateChanged(function(firebaseUser) {
//       $scope.firebaseUser = firebaseUser;
//     });
//   }
// ]);

// app.config(["$routeProvider", function($routeProvider) {
//   $routeProvider.when("/", {
//     // the rest is the same for ui-router and ngRoute...
//     controller: "HomeCtrl",
//     templateUrl: "/partials/home.html",
//     resolve: {
//       // controller will not be loaded until $waitForSignIn resolves
//       // Auth refers to our $firebaseAuth wrapper in the factory below
//       "currentAuth": ["Auth", function(Auth) {
//         // $waitForSignIn returns a promise so the resolve waits for it to complete
//         return Auth.$waitForSignIn();
//       }]
//     }
//   }).when("/account", {
//     // the rest is the same for ui-router and ngRoute...
//     controller: "AccountCtrl",
//     templateUrl: "/partials/account.html",
//     resolve: {
//       // controller will not be loaded until $requireSignIn resolves
//       // Auth refers to our $firebaseAuth wrapper in the factory below
//       "currentAuth": ["Auth", function(Auth) {
//         // $requireSignIn returns a promise so the resolve waits for it to complete
//         // If the promise is rejected, it will throw a $routeChangeError (see above)
//         return Auth.$requireSignIn();
//       }]
//     }
//   });
// }]);

// // app.controller("HomeCtrl", ["currentAuth", function(currentAuth) {
// //   // currentAuth (provided by resolve) will contain the
// //   // authenticated user or null if not signed in
// // }]);

// app.controller("AccountCtrl", ["currentAuth", function(currentAuth) {
//   // currentAuth (provided by resolve) will contain the
//   // authenticated user or throw a $routeChangeError (see above) if not signed in
// }]);

// app.factory("Auth", ["$firebaseAuth",
//   function($firebaseAuth) {
//     return $firebaseAuth();
//   }
// ]);


// app.run(["$rootScope", "$location", function($rootScope, $location) {
//   $rootScope.$on("$routeChangeError", function(event, next, previous, error) {
//     // We can catch the error thrown when the $requireSignIn promise is rejected
//     // and redirect the user back to the home page
//     if (error === "AUTH_REQUIRED") {
//       $location.path("/home");
//     }
//   });
// }]);

// /*********************************************
// this creates/deletes users with email/password
// *********************************************/
// app.controller("HomeCtrl", ["$scope", "Auth",
//   function($scope, Auth, currentAuth) {
//     $scope.createUser = function() {
//       $scope.message = null;
//       $scope.error = null;

//       // Create a new user
//       Auth.$createUserWithEmailAndPassword($scope.email, $scope.password)
//         .then(function(firebaseUser) {
//           $scope.message = "User created with uid: " + firebaseUser.uid;
//         }).catch(function(error) {
//           $scope.error = error;
//         });
//     };

//     $scope.deleteUser = function() {
//       $scope.message = null;
//       $scope.error = null;

//       // Delete the currently signed-in user
//       Auth.$deleteUser().then(function() {
//         $scope.message = "User deleted";
//       }).catch(function(error) {
//         $scope.error = error;
//       });
//     };
//   }
// ]);

// app.factory("Auth", ["$firebaseAuth",
//   function($firebaseAuth) {
//     return $firebaseAuth();
//   }
// ]);
