Template.nombreChicaPollo.events({
      "click .probar": function(){
        twilioClient = Twilio('AC2888dff0aec5065b9976fee7d186a511', 'efdbeede498d27a3c44c47fa124c05ca');
            twilioClient.sendSms({
              to:   '+584242591001',
              from: '+17746437079',
              body: 'funciona con meteor :D'
          },function(err, data) {
            if(err){
            console.log(err, data);
            }
            console.log("enviado");
          });
          },
      "submit .chicaPollo": function(event){
        var text = $("#text").val();
      if(Meteor.user().username){
        Pedidos.insert({
          Usuario: Meteor.user().username,
          Pedido: {
            hamburgesa: "Hamburgesa Chica Pollo",
            extras: text,
            precio: 100
          },
          fecha: new Date(),
          realizada: false
        }, function(err){
          if(err){
            console.log(err);
          }
          
        });
      }else{
        Pedidos.insert({
          Usuario: Meteor.user().profile.name,
          Pedido: {
            hamburgesa: "Hamburgesa Chica Pollo",
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