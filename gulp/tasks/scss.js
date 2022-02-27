import Sass from "sass"
import gulpSass from "gulp-sass"
import rename from "gulp-rename"
import cleanCss from "gulp-clean-css"
import webpcss from "gulp-webpcss"
import bulkImporter from "gulp-sass-bulk-importer"
import autoprefixer from "gulp-autoprefixer"
import sourcemaps from "gulp-sourcemaps"

const sass = gulpSass(Sass)

export const scss = () => {
    return app.gulp
        .src(app.path.src.scss)
        .pipe(
            app.plugins.plumber(
                app.plugins.notify.onError({
                    title: "SCSS",
                    message: "Error: <%= error.message %>",
                })
            )
        )
        .pipe(app.plugins.if(app.isDev, sourcemaps.init()))
        .pipe(bulkImporter())
        .pipe(
            sass({
                outputStyle: "expanded",
            })
        )
        .pipe(app.plugins.replace(/@img\//g, "../img/"))
        .pipe(
            webpcss({
                webpClass: ".webp",
                noWebpClass: ".no-webp",
            })
        )
        .pipe(
            app.plugins.if(
                app.isBuild,
                autoprefixer({
                    grid: true,
                    overrideBrowserslist: ["last 10 versions"],
                    cascade: true,
                })
            )
        )
        .pipe(
            app.plugins.if(
                app.isBuild,
                cleanCss({
                    level: 2,
                })
            )
        )
        .pipe(
            rename({
                extname: ".min.css",
            })
        )
        .pipe(app.plugins.if(app.isDev, sourcemaps.write()))
        .pipe(app.gulp.dest(app.path.build.css))
        .pipe(app.plugins.browserSync.stream())
}
