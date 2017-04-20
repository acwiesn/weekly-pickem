'use strict';

module.exports = function(app, mongoose){
    
    //Must export this to models files............
    mongoose.Promise = require('bluebird');
    var Schema = mongoose.Schema;

    var UserSchema = Schema({
        username: { type: String, required: true, unique : true },
        password: { type: String }
    });
    var User = mongoose.model('User', UserSchema);
    
    //...............................................................
    
    app.post('/login', (req, res) => {
        console.log(req.body);
      res.send('loginTODO');
    });
    
    app.post('/signup', (req, res) => {
        
        var newuser = new User(req.body);
        newuser.save((err,user,numRows)=>{
            if(err){
                if(err.code === 11000){
                    console.log('User already exists');
                    res.send('User already exists');
                }else{
                    console.log(err);
                }

            }else{
                    req.login(user,()=>{
                    res.redirect('/profile');
                });
            }

        });        
    });
    app.get('/profile',(req,res)=>{
        res.json(req.user);
    });
    
    
    
    
    
    //Test passport using small html form ,use angular after**************************
    app.get('/form',(req,res)=>{
        res.sendfile('./form.html', {root: __dirname });
    });
    
    //********************************************************
    
    
    
    
    // Tell express to use this router with /api before.
    app.use('/api',require('./users'));
    return app;
};
