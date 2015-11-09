'use strict';

var homepage = angular.module( 'homepage' );

homepage.controller( 'HomepageController', function( $rootScope, $scope, $state, sessionFactory )
{
	// This is a controller.

	$scope.stateName = 'homepage';

	$scope.email = '';
	$scope.password = '';

	$scope.registerAndLogin = function(  )
	{
		var user = {  };

		user.email = $scope.email;
		user.password = $scope.password;

		console.log( user );

		sessionFactory.registerAndLogin( user )
		.then( function(  )
		{
			$state.go( 'app-root.list' );
		} );
	};

	$scope.projects = [ 'proj1', 'proj2', 'proj3' ];

	console.log( 'HomepageController active!' );

} );
