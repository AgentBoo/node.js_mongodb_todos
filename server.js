// NOTE: Modules =================================================================
const express = require('express'),
      bodyParser = require('body-parser'),
      morgan = require('morgan'),
      mustacheExpress = require('mustache-express');

// NOTE: Mongo config ============================================================

// NOTE: Express app =============================================================
const app = express();
      app.engine('mustache', mustacheExpress());
      app.set('view engine', 'mustache');
      app.set('views', __dirname + '/views');
      app.use('/public', express.static(__dirname + '/public'));
      app.use(bodyParser.json());
      app.use(bodyParser.urlencoded({ extended: true }));
      app.use(morgan('dev'));

// NOTE: Index page
app.get('/', (req, res) => res.send('You landed on the index page'));

// NOTE: Port ====================================================================
      app.set('port', (process.env.PORT || 5000));
      app.listen(app.get('port'), () => console.log('Iscreamyouscreamgimmethatgimmethat ice cream, on port ', app.get('port')));
