

    //Function to authenticate our routes, use this on your requests to ensure authentication
 module.exports = function requireLogin(req, res, next) {
        if (!req.user) {

            //TODO renable for authentication
          res.redirect('/loginforms'); // or render a form, etc. */ 
          //   next();
        } else {
            next(); // allow the next route to run

        }

    }



