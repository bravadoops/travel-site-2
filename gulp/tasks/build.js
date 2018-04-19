var gulp = require('gulp'),
imagemin = require('gulp-imagemin'),
del = require('del'),
usemin = require('gulp-usemin'),
rev = require('gulp-rev'),
cssnano = require('gulp-cssnano'),
uglify = require('gulp-uglify'),
browserSync = require('browser-sync').create();

gulp.task('previewBrow', function() {
  browserSync.init({
    notify: false,
    server: {
      baseDir: "docs"
    }
  });
});

gulp.task('deleteDist', ['icons'], function(){
  return del('./docs');
});

gulp.task('compressImage', ['deleteDist'],function(){
  return gulp.src(['./app/assets/images/**/*', '!./app/assets/images/icons', '!./app/assets/images/icons/**/*'])
  .pipe(imagemin({
    progressive:true,
    interland:true,
    multipass:true
  }))
  .pipe(gulp.dest('./docs/assets/images'));
});

// gulp.task('ES6toES5', ['deletedocs'], function() {
//   return gulp.src('./app/temp/scripts/**/*.js')
//     .pipe(babel({
//       presets: ['es2015']
//     }))
//     .pipe(gulp.dest('./app/temp/es5'));
// });

gulp.task('copyFiles', ['deleteDist'], function() {
  var pathToCopy = ['./app/**/*',
                    '!./app/index.html',
                    '!./app/assets/images/**',
                    '!./app/assets/scripts/**',
                    '!./app/assets/styles/**',
                    "!./app/temp",
                    '!./app/temp/**'
];
  return gulp.src(pathToCopy)
  .pipe(gulp.dest('./docs'));
});


gulp.task('usemin', ['deleteDist', 'styles', 'scripts'],function(){
  return gulp.src('./app/index.html')
  .pipe(usemin({
    css:[function(){return rev()}, function(){return cssnano()}],
    js:[function() {return rev()}]
  }))
  .pipe(gulp.dest('./docs'))
});

gulp.task('build', ['deleteDist', 'copyFiles', 'usemin', 'compressImage']);
