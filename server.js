'use strict';
// modules =================================================
var express        = require('express');
var app            = express();
var mongoose       = require('mongoose');
var bodyParser     = require('body-parser');
var methodOverride = require('method-override');
var session = require('express-session');
var cookieParser = require('cookie-parser');
var flash = require('connect-flash');
var favicon = require('serve-favicon');
var exphbs  = require('express-handlebars');
var path = require('path');

const publicPath = path.join(__dirname, '../views');

// config files
// var db = require('./app/config/db');
// Here we find an appropriate database to connect to, defaulting to
    // localhost if we don't find one.
var uristring =
    process.env.MONGOLAB_URI ||
    process.env.MONGOHQ_URL ||
    'mongodb://127.0.0.1/pickEmPool';
var port = process.env.PORT || 5000; // set our port
// mongoose.connect(db.url); 
// connect to our mongoDB database (commented out after you enter in your own credentials)
// Makes connection asynchronously.  Mongoose will queue up database
    // operations and release them when the connection is complete.
    mongoose.connect(uristring, function (err, res) {
      if (err) {
      console.log ('ERROR connecting to: ' + uristring + '. ' + err);
      } else {
      console.log ('Succeeded connected to: ' + uristring);
      }
    });

// get all data/stuff of the body (POST) parameters
app.use(bodyParser.json()); // parse application/json 
// parse application/vnd.api+json as json
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
 // parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// override with the X-HTTP-Method-Override header in the request. simulate DELETE/PUT
app.use(methodOverride('X-HTTP-Method-Override'));
app.use(cookieParser('thissecret'));
app.use(session({ resave: true ,secret: 'thissecret' , saveUninitialized: true}));
app.use(flash());
app.use(favicon(__dirname + '/public/favicon.ico'));
require('./app/config/passport')(app);
// routes ==================================================
require('./app/controllers')(app);
// set the static files location /public/img will be /img for users
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
app.use('/',express.static(__dirname + '/public'));
app.use('/',express.static(__dirname + publicPath));

// Handle 404 error. 
// The last middleware.
app.use('*',(req,res)=>{
  res.status(404).send('404');
});



// start app ===============================================
app.listen(port);	
console.log('Server running on ' + port); 			// shoutout to the user
exports = module.exports = app; 						// expose app
