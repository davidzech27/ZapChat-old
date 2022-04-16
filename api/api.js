import express from "express"
import User from "./models/User"
import Room from "./models/Room"
import { ensureAuth } from "./middleware"

const app = express()

/*
    summary of api calls:
    /profile: send profile json.
    /profile/update: update name and/or bio. sends back new profile json. body args: username (optional), bio (optional).

    /room/create: create room. sends 409 error if room already exists. body args: roomName.
    /room/:name/update: update topic names of room. body args: topic1.name (optional), topic2.name (optional), topic3.name (optional).
    /room/:name/send: send message in topic of room. body args: topicNumber, text.
    /room/:name: get room info.

*/

app.get("/profile", ensureAuth, (req, res) => {
    res.status(200).send(req.user)
})

app.post("/profile/update", ensureAuth, async (req, res) => {
    const newFields = {
        username: req.body.username || req.user.username,
        bio: req.body.bio || req.user.bio
    }

    try {
        const newProfile = await User.findByIdAndUpdate(req.user._id, newFields).lean()
        res.status(200).send(newProfile)
    }
    catch (err) {
        res.status(500).send(err)
    }
})

app.post("/room/create", ensureAuth, async (req, res) => {
    try {
        const existingRoom = await Room.findOne({ name: req.body.roomName }).lean()

        if (!existingRoom) {
            await Room.create({ name: req.body.roomName, administrator: { email: req.user.email } })
            res.sendStatus(200)
        }
        else {
            res.status(409).send("room already exists")
        }
    }
    catch (err) {
        res.status(500).send(err)
    }
})

app.post("/room/:name/update", ensureAuth, async (req, res) => {
    try {
        const room = await Room.findOne({ name: req.params.name })

        const newFields = {
            topic1: {
                name: req.body.topic1.name || room.topic1.name
            },
            topic2: {
                name: req.body.topic2.name || room.topic2.name
            },
            topic3: {
                name: req.body.topic3.name || room.topic3.name
            }
        }

        room = await room.update(newFields)//probably dont need to .save, but not 100% sure
        res.sendStatus(200)
    }
    catch (err) {
        res.status(500).send(err)
    }
    
})

app.post("/room/:name/send", ensureAuth, async (req, res) => {
    const topicNumber = req.body.topicNumber

    try {
        const room = await Room.findOne({ name: req.params.name })

        room["topic" + topicNumber].messages.push({
            text: req.body.text,
            sentBy: req.user.username
        })
        await room.save()
        res.sendStatus(200)
    }
    catch (err) {
        res.status(500).send(err)
    }
})

app.get("/room/:name", ensureAuth, async (req, res) => {
    try {
        const room = await Room.findOne({ name: req.params.name }).lean()
        res.status(200).send(room)
    }
    catch (err) {
        res.status(500).send(err)
    }
})




export default app