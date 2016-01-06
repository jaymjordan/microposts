Template.profile.events({
	"submit .edit-profile": function(event){
		var file = $('#profileImage').get(0).file[0];
		console.log(file);

		if(file){
			fsFile = new FS.File(file);

			ProfileImages.insert(fsFile, function(err, result){
				if(err){
					throw new Meteor.Error(err);
				} else {
					var imageLoc = '/cfs/files/ProfileImages/'+result._id;

					UserImages.insert({
						userID: Meteor.userID(),
						userName: Meteor.user.username,
						image: imageLoc
					});
					Router.go('/');
				}
			});
		}

		return false;
	}
});