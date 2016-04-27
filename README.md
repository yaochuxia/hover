# hover

 CSS3 的鼠标悬停效果和动画，这些可以非常轻松的被应用到按钮、LOGO 以及图片等元素。所有这些效果都是只需要单一的标签，必要的时候使用 before 和 after 伪元素。因为使用了 CSS3 过渡、转换和动画效果，因此只支持 Chrome、Firefox 和 Safari 等现代浏览器。

# 使用

## 在 gulp 中使用

### gulp

```js
var gulp = require('gulp');
var stylus = require('gulp-stylus');
var watch = require('gulp-watch');
var nib = require('nib');
var rename = require('gulp-rename');

var autoprefixer = require('gulp-autoprefixer');
var browserslist = ['Android 2.3', 'Android >= 4', 'Chrome >= 20', 'Firefox >= 24', 'Explorer >= 8', 'iOS >= 6', 'Opera >= 12', 'Safari >= 6'];


    gulp.src('./style/hover.styl')
        .pipe(stylus({
            compress:true,
            use: nib()
        }))
        .pipe(rename('hover.min.css'))//重命命
        .pipe(gulp.dest('./build/css/'));//压缩到的文件夹

```


## 常规使用方法

直接在页面中引用`./build/css/hover.min.css`

```html
<link rel="stylesheet" href="./build/css/hover.min.css">
<a href="#" class="hvr_pulse_grow">Pulse Grow</a>
```


