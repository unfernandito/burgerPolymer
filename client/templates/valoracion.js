Template.valoracion.events({
	"submit .valorar": function () {
		var text = $("#text").val();
		if(Meteor.user().username){
			Valoraciones.insert({
				Usuario: Meteor.user().username,
				valoracion: text
			});
		}else{
			Valoraciones.insert({
				Usuario: Meteor.user().profile.name,
				valoracion: text
			});
		}
	}
});