// Profike Images Collection
ProfileImages = new FS.Collection("ProfileImages", {
	stores: [new FS.Store.GridFS("ProfileImages")]
	});

UserImages = new Mongo.Collection("UserImages");

ProfileImages.allow({
  insert:function(userId,doc){
    return true;
  },
  update:function(userId,doc,fields,modifier){
   return true;
  },
  download:function(){
    return true;
  }
});

Posts = new Mongo.Collection("posts");

Posts.attachSchema(({
	body: {
		type: String,
		max: 500
	},
	userID: {
		type: String,
		autoValue: function(){return Meteor.userId()}
	},
	userName: {
		type: String,
		autoValue: function(){return Meteor.users.findOne({_id: this.userId}).userName}
	},
	createdAt: {
		type: Date,
		autoValue: function(){return new Date()}
	}
}));

Posts.allow({
  insert:function(userId,doc){
    return true;
  }
});