var gulp = require('gulp');
var gutil = require('gulp-util');
var stylus = require('gulp-stylus');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var watch = require('gulp-watch');
var nib = require('nib');
var rename = require('gulp-rename');

// 浏览器兼容自动处理
var autoprefixer = require('gulp-autoprefixer');
var browserslist = ['Android 2.3', 'Android >= 4', 'Chrome >= 20', 'Firefox >= 24', 'Explorer >= 8', 'iOS >= 6', 'Opera >= 12', 'Safari >= 6'];

gulp.task('default', ['script','stylus','copy']);

// 侦听文件改变执行任务
gulp.task('watch', function (cb) {
    gulp.watch('./js/**/*', ['script']);
    gulp.watch('./styl/**/*', ['stylus']);
    gulp.watch('./manifest.json', ['copy']);
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

gulp.task('script',function(){

// 复制js
    // gulp.src([
    //         'js/tab.js',
    //         'js/resetpassword.js',
    //         'js/xcConfirm.js',
    //         'js/index.js',
    //         'js/jquery.flexslider.js'
    //     ])
    //     .pipe(gulp.dest('./build/js'));
    // // index.html使用到的插件
    // gulp.src([
    //         'node_modules/rui/js/jquery.js',
    //         'js/superslide.js'
    //     ])
    //     .pipe(uglify())
    //     .pipe(concat('index.plugs.js'))
    //     .pipe(gulp.dest('./build/js/'));
    // gulp.src([
    //         'node_modules/rui/js/jquery.js',
    //         'node_modules/rui/js/tab.js',
    //         'node_modules/rui/js/modal.js',
    //         'node_modules/rui/js/transition.js',
    //     ])
    //     .pipe(uglify())
    //     .pipe(concat('invest_detail.plugs.js'))
    //     .pipe(gulp.dest('./build/js/'));

})

gulp.task('copy',function(){
    
    // gulp.src('./img/*')
    //     .pipe(gulp.dest('./build/img'));
    // // 复制字体文件
    // gulp.src(['node_modules/rui/rui/fonts/**/*'])
    //     .pipe(gulp.dest('./build/fonts'));
})