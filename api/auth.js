import express from "express"
import passport from "passport"

const app = express()



app.get("/", passport.authenticate("google", { scope: ["profile", "email"] }))


app.get("/redirect", passport.authenticate("google", { successRedirect: "/dashboard", failureRedirect: "/signin"}))




export default app