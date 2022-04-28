import mongoose from "mongoose"

const UserSchema = new mongoose.Schema({
	email: {
		//can't be viewed by other users and can't be changed
		type: String,
		unique: true
	},
	username: {
		//can be viewed by other users and can be changed by user directly
		type: String,
		maxlength: 100
	},
	bio: {
		//can be viewed by other users and can be changed by user directly
		type: String,
		default: "...",
		maxlength: 10000
	},
	joinedOn: {
		//can be viewed by other users but can't be changed
		type: Date,
		default: Date.now
	},
	googleId: String //can't be viewed by other users or changed
})

export default mongoose.model("User", UserSchema)
