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

module.exports = function (app) {

       //Function to authenticate our routes, use this on your requests to ensure authentication
    function requireLogin(req, res, next) {
        if (!req.user) {

            //TODO renable for authentication
          res.redirect('/loginforms'); // or render a form, etc. */ 
          //   next();
        } else {
            next(); // allow the next route to run

        }

    }
    //First route which is not authenticated
    app.get('/loginforms', (req, res) => {
        if(req.session.flash){
            console.log(req.session.flash);
        }
        res.render('loginforms');

    });

    //Requireing login for all of static routes
    app.all('/',requireLogin, (req, res, next)=> {
                next();
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
    app.use('/',require('./usersRoutes'));
    app.use('/',require('./entryRoutes'));

    return app;
};
