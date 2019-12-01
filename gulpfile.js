const { src, dest, parallel, watch } = require('gulp');
const gulpLoadPlugins = require('gulp-load-plugins');
const plugins = gulpLoadPlugins();

function material_blue() {
  const theme_name = 'material_blue';

  return src(`./src/${theme_name}/styles.scss`)
    .pipe(plugins.sass())
    .pipe(plugins.csscomb())
    .pipe(plugins.cssbeautify({indent: '  '}))
    .pipe(dest(`./dest/${theme_name}/`));
}

exports.prod = parallel(material_blue);
exports.watch = function() {
  watch('./src/material_blue/*.scss', material_blue);
  watch('./src/material_blue/components/*.scss', material_blue);
};
