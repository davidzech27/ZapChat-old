import User from "../models/User"
import passport from "passport"
import GoogleOAuth20 from "passport-google-oauth20"

const GoogleStrategy = GoogleOAuth20.Strategy

export default () => {
    passport.use(
        new GoogleStrategy({
            clientID: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            callbackURL: process.env.CALLBACK_URL
        },
        async (_accessToken, _refreshToken, profile, done) => {
            const newUser = {
                email: profile.emails[0].value,
                username: profile.emails[0].value.slice(0, profile.emails[0].value.lastIndexOf("@")),
                photo: profile.photos[0].value,
                googleId: profile.id
            }
            
            try {
                let user = await User.findOne({ email: profile.emails[0].value })

                if (user) {
                    return done(null, userSchema)
                }
                else {
                    user = await User.create(newUser)
                    return done(null, user)
                }
            }
            catch (err) {
                return done(err)
            }
        })
    )

    passport.serializeUser((user, done) => {
        return done(null, user.googleId)
    })
      
    passport.deserializeUser((id, done) => {
        User.findOne({ googleId: id }, (err, user) => {
            return done(err, user)
        })
    })
}