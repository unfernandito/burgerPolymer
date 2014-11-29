Template.nombreDesubikte.events({
  "submit .dobleCarne": function(event){
    var text = $("#text").val();
      if(Meteor.user().username){
        Pedidos.insert({
          Usuario: Meteor.user().username,
          Pedido: {
            hamburgesa: "Hamburgesa Desubikte",
            extras: text,
            precio: 100
          },
          fecha: new Date(),
          realizada: false
        }, function(err){
          if(err){
            console.log(err);
          }
          alert("enviada");
        });
      }else{
        Pedidos.insert({
          Usuario: Meteor.user().profile.name,
          Pedido: {
            hamburgesa: "Hamburgesa Desubikte",
            extras: text,
            precio: 100
          },
          fecha: new Date(),
          realizada: false,
          valoracion: ""
        }, function(err){
          if(err){
            console.log(err);
          }
          alert("enviada");
        });
      }
    }
}); 