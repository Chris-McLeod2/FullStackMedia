

module.exports= function(req, res, next){
    console.log('auth middle', req.session.loggedIn)
    if(  req.session.loggedIn === true) {
        next()
    }
   else {res.redirect('/login')}
}