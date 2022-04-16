import mongoose from "mongoose"

const UserSchema = new mongoose.Schema({
    email: {//can't be viewed by other users and can't be changed
        type: String,
        unique: true
    },
    username: {//can be viewed by other users and can be changed by user directly
        type: String,
        required: true,
        maxlength: 50
    },
    photo: {//can be viewed by other users but probably will not be able to be changed by user
        type: String,
        default: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fyt3.ggpht.com%2F-W_I3nmqsQXo%2FAAAAAAAAAAI%2FAAAAAAAAAAA%2FjHWqdgoEjNw%2Fs900-c-k-no-mo-rj-c0xffffff%2Fphoto.jpg",
        maxlength: 1000
    },
    bio: {//can be viewed by other users and can be changed by user directly
        type: String,
        default: "...",
        maxlength: 10000
    },
    joinedOn: {//can be viewed by other users but can't be changed
        type: Date,
        default: Date.now
    },
    data: {//can't be viewed by other users but can be changed by backend
        
    },
    googleId: String//can't be viewed by other users or changed
})


export default mongoose.model("User", UserSchema)