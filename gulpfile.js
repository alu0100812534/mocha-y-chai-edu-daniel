
//-----> DEPENDENCIAS
var gulp = require('gulp'),
	uglify = require('gulp-uglify');

//-----> CONFIGURACIÓN DE LAS TAREAS
gulp.task('demo', function () { // gulp.task: Definición de una tarea.
gulp.src('js/*.js') // Indicamos los ficheros.
.pipe(uglify('minified/'))
.pipe(gulp.dest('js/build/'))
});