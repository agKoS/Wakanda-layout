import webpackStream from "webpack-stream"

export const js = () => {
    return app.gulp
        .src(app.path.src.js)
        .pipe(
            app.plugins.plumber(
                app.plugins.notify.onError({
                    title: "JS",
                    message: "Error: <%= error.message %>",
                })
            )
        )
        .pipe(
            webpackStream({
                mode: app.isBuild ? "production" : "development",
                devtool: "eval",
                output: {
                    filename: "main.min.js",
                },
                module: {
                    rules: [
                        {
                            test: /\.js$/,
                            loader: "babel-loader",
                            exclude: /node_modules/,
                        },
                    ],
                },
            })
        )
        .pipe(app.gulp.dest(app.path.build.js))
        .pipe(app.plugins.browserSync.stream())
}
