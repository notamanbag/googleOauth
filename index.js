const  session = require("express-session");

const express = require('express');
const passport = require('passport');
 require('./Auth')
function isLoggedIn(req,res,next) {
    req.user ? next() :res.sendStatus(401);

}

const app = express();
app.use(session({ secret: "cats" }));
app.use(passport.initialize());
app.use(passport.session());


app.get('/',(req,res)=>{
    res.send('<a href="/auth/google">Link to google authenticate</a>')
})
app.get('/logout',(req,res)=>{
    req.logOut();
    res.send("Goodbue");
})
app.get('/protected',isLoggedIn,(req,res)=>{
    console.log(req.user);
    res.send("Hello")
})
app.get('/auth/google',passport.authenticate('google',{scope:['email' , 'profile']}))
app.get('/google/callback', passport.authenticate('google',{
    successRedirect:'/protected',
    failureRedirect:'/auth/failed'
}))
app.get('/auth/fail',(req,res)=>{
    res.send("<h1>Failed nigga</h1>")
})
app.listen(3000,(req,res)=>{
    console.log("Server started");
})