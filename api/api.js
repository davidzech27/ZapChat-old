import express from "express"
import User from "./models/User"
import Room from "./models/Room"
import { ensureAuth } from "./middleware"

const app = express()

app.get("/profile", ensureAuth, (req, res) => {
    res.status(200).send(req.user)
})



export default app