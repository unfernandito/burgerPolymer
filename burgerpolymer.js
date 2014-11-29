Pedidos = new Mongo.Collection("pedidos");
Valoraciones = new Mongo.Collection("valoraciones");

Router.configure({
  layoutTemplate: "layout", 
  loadingTemplate: "loading"
});

Router.route('/', function(){
  if(! Meteor.user()){
    this.render("LoginPanel");
  } else {
    if(Meteor.user().username === "Admin"){
      this.render("AdminPanel");
    } else{
      this.render("Main");
    }
  }
});

Router.route('/pedidos', function(){
  this.render("pedidoPanel");
});

Router.route('/valoraciones', function(){
  this.render("panelValoracion");
});

if(Meteor.isClient){

  Accounts.ui.config({
    passwordSignupFields: "USERNAME_ONLY"
  });

}