// Profike Images Collection
ProfileImages = new FS.Collection("ProfileImages", {
	stores: [new FS.Store.GridFS("ProfileImages")]
	});

UserImages = new Mongo.Collection("UserImages");

Posts = new Mongo.Collection("posts");

Posts.attachSchema(({
	body: {
		type: String,
		max: 500
	},
	userID: {
		type: String
	},
	userName: {
		type: String
	},
	createdAt: {
		type: Date
	}
}));