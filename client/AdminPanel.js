Template.AdminPanel.helpers({
    pedidos: function(){
      return Pedidos.find({}, {sort: {fecha: -1}});
    }
});