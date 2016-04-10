var gulp = require('gulp');
var stylus = require('gulp-stylus');
var watch = require('gulp-watch');
var nib = require('nib');
var rename = require('gulp-rename');

// 浏览器兼容自动处理
var autoprefixer = require('gulp-autoprefixer');
var browserslist = ['Android 2.3', 'Android >= 4', 'Chrome >= 20', 'Firefox >= 24', 'Explorer >= 8', 'iOS >= 6', 'Opera >= 12', 'Safari >= 6'];

gulp.task('default', ['stylus']);

// 侦听文件改变执行任务
gulp.task('watch', function (cb) {
    gulp.watch('./styl/**/*', ['stylus']);
});


gulp.task('stylus',function(){

    gulp.src('./style/hover.styl')
        .pipe(stylus({
            compress:true,
            use: nib()
        }))
        .pipe(rename('hover.min.css'))//重命命
        .pipe(gulp.dest('./build/css/'));//压缩到的文件夹
})
