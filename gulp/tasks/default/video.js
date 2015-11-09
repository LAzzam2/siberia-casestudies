'use strict';

var gulp    = require( 'gulp' );
var connect = require( 'gulp-connect' );

var path    = require( '../../paths.js' );


gulp.task( 'videos', function (  )
{
	return gulp.src( path.to.videos.source )
		.pipe( gulp.dest( path.to.videos.destination ) );
} );

