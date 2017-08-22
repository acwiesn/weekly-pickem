'use strict';
/*Current routes:
    GET:
    get : / -> serves public folder
    get : /index -> serves home hbs
    get : /logout -> logs user and destroys session
    get : /profile -> returns signed in user
    get : api/users -> returns a json object of users
    
    POST:
    post: /login -> authenticates a user using passport locally
    post: /signup -> registers a user and adds to DB
    post: /entrySubmit -> saves an entry req.body must have user, week 
        games, selections which has all of the games for that week and the game 
        that has been locked.
    
*/ 
var requireLogin = require('./requireLogin')

module.exports = function (app) {

    //First route which is not authenticated
    app.get('/loginforms', (req, res) => {
        if(req.session.flash){
            console.log(req.session.flash);
        }
        res.render('loginforms',{layout: 'loginlayout'});

    });

    //Require login for all of static routes
    app.all('/',requireLogin, (req, res, next)=> {
        res.redirect("/index");
    });
    app.get('/index',requireLogin, (req, res, next)=> {
        if(req.session.flash){
            console.log(req.session.flash);
        }
        res.render('index',{user:req.user});
    });

    //Requireing login for all of our api routes
    app.all('/api/*',requireLogin, (req, res, next)=> {
                next();
    });

     require('./authenticateRoutes')(app,requireLogin);

    // Tell express to use this router with /api before.
    app.use(require('./usersRoutes'));
    app.use(require('./hbsRoutes'));
    app.use(require('./gameRoutes'));

    return app;
};
