const passport = require('passport')
const  GoogleStrategy = require( 'passport-google-oauth2' ).Strategy;


const GOOGLE_CLIENT_ID = '111451724374-5rf7805fuer76iu8jarm8v5up7t6vhvh.apps.googleusercontent.com'; // These are obtained by going into foofle credential .
const GOOGLE_CLIENT_SECRET = '_fgR4yFK6fyeb--wPT-_caYl'

passport.use(new GoogleStrategy({
    clientID:     GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:3000/google/callback",
    passReqToCallback   : true
  },
  function(request, accessToken, refreshToken, profile, done) {
 return done(null, profile);
    }
  
));

passport.serializeUser(function(user,done){
    done(null,user)

})
passport.deserializeUser(function(user,done){
    done(null,user)

})
