require('dotenv').config(); 
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var analisisRouter = require('./routes/apis/analisisRouter');
var authRouter= require('./routes/apis/authRouter'); 
var camaRouter= require('./routes/apis/camasRouter');
var obraRouter= require('./routes/apis/obrasRouter'); 
var departamentoRouter= require('./routes/apis/departamentosRouter'); 
var especialidadRouter= require('./routes/apis/especialidadesRouter'); 
var habitacionRouter= require('./routes/apis/habitacionesRouter'); 
var pacientesRouter= require('./routes/apis/pacientesRouter'); 
var turnosRouter= require('./routes/apis/turnosRouter'); 
var doctorRouter= require('./routes/apis/doctoresRouter'); 


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '..', 'public')));

app.use('/', indexRouter);
app.use('/api/analisis', analisisRouter);
app.use('/api/auth', authRouter);
app.use('/api/cama', camaRouter);
app.use('/api/obra', obraRouter);
app.use('/api/paciente', pacientesRouter);
app.use('/api/departamento', departamentoRouter);
app.use('/api/doctor', doctorRouter );
app.use('/api/turno', turnosRouter );
app.use('/api/especialidad', especialidadRouter );
app.use('/api/habitacion', habitacionRouter );



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
