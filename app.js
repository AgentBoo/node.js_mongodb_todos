// NOTE: Module dependencies =====================================================
const express = require('express'),
      bodyParser = require('body-parser'),
      cookieParser = require('cookie-parser'),
      morgan = require('morgan'),
      mustacheExpress = require('mustache-express'),
      path = require('path');
// Routers
const todos = require('./routes/todos'),
      users = require('./routes/users');

// NOTE: Mongo config ============================================================

// NOTE: Express app =============================================================
const app = express();
      app.engine('mustache', mustacheExpress());
      app.set('view engine', 'mustache');
      app.set('views', path.join(__dirname + 'views'));
      app.use('/public', express.static(path.join(__dirname, 'public')));
      app.use(bodyParser.json());
      app.use(bodyParser.urlencoded({ extended: true }));
      app.use(cookieParser())
      app.use(morgan('dev'));
      // Routers
      app.use('/', todos);
      app.use('/users', users);
      // catch 404 and forward to error handler
      app.use(function(req, res, next) {
          let err = new Error('Not Found');
          err.status = 404;
          next(err);
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


// NOTE: Index page
      app.get('/', (req, res) => res.send('You landed on the index page'));


// NOTE: Export to bin/www ========================================================
module.exports = app;
