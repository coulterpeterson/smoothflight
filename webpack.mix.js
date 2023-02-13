const mix = require('laravel-mix');

//require('laravel-mix-purgecss');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/app.ts', 'public/js')
    .react()
    .sass('resources/sass/app.scss', 'public/css')
    .postCss('resources/css/app.css', 'public/css', [
        require('tailwindcss'),
    ])
    .setResourceRoot("/") // This allows easy resource linking from React components
    ;

mix.extend('customAdditions', function(webpackConfig, ...args) {
    webpackConfig.resolve.extensions.push('.ts', '.tsx');
});

mix.customAdditions();


    /*
    .purgeCss({
        //enabled: mix.inProduction(),
        enabled: true,
        folders: ['resources', 'app'],
        extensions: ['html', 'js', 'ts', 'tsx', 'php', 'vue'],
    })

    */