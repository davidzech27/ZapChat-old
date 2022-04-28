import mongoose from "mongoose"

const RoomSchema = new mongoose.Schema({
	name: {
		type: String,
		unique: true
	},
	topic1: {
		name: {
			type: String,
			default: "Topic 1"
		},
		messages: [
			{
				text: String,
				sentBy: String,
				sentAt: String, //hour:minute:seconds
				email: String,
				bio: String
			}
		]
	},
	topic2: {
		name: {
			type: String,
			default: "Topic 2"
		},
		messages: [
			{
				text: String,
				sentBy: String,
				sentAt: String,
				email: String,
				bio: String
			}
		]
	},
	topic3: {
		name: {
			type: String,
			default: "Topic 3"
		},
		messages: [
			{
				text: String,
				sentBy: String,
				sentAt: String,
				email: String,
				bio: String
			}
		]
	},
	administrator: {
		username: String
	},
	createdOn: {
		type: Date,
		default: Date.now
	}
})

RoomSchema.index({ "topic1.messages.sentAt": 1 })
RoomSchema.index({ "topic2.messages.sentAt": 1 })
RoomSchema.index({ "topic3.messages.sentAt": 1 })

export default mongoose.model("Room", RoomSchema)
