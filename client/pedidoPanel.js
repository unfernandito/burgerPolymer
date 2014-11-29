Template.pedidoPanel.helpers({
	pedidos: function(){
      return Pedidos.find({Usuario: Meteor.user().username || Meteor.user().profile.name });
    }
});