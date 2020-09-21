const gulp = require('gulp');
const postcss = require('gulp-postcss');
const pxToViewport = require('postcss-px-to-viewport');

gulp.task('css', function () {

    var processors = [
        pxToViewport({
            // 要转化的单位
            unitToConvert: "px",
            // 设计稿的宽度 
            viewportWidth: 750,
            // 转换后的精度，即小数点位数
            unitPrecision: 6,
            // 指定转换的 css 属性的单位，* 代表全部 css 属性的单位都进行转换 
            propList: ["*"],
            // 指定需要转换成的视窗单位，默认 vw
            viewportUnit: "vw",
            // 指定字体需要转换成的视窗单位，默认 vw
            fontViewportUnit: "vw",
            // 指定不转换为视窗单位的类名，
            selectorBlackList: ["ignore"],
            // 默认值1，小于或等于 1px 则不进行转换
            minPixelValue: 1,
            // 是否在媒体查询的 css 代码中也进行转换，默认 false
            mediaQuery: false,
            // 是否转换后直接更换属性值
            replace: true,
            // 设置忽略文件，用正则做目录名匹配
            exclude: [/node_modules/],
            // 是否处理横屏情况
            landscape: false
        })
    ];

    return gulp.src(['src/**/*.css'])
        .pipe(postcss(processors))
        .pipe(gulp.dest('dist/'));
});