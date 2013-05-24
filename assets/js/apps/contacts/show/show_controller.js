ContactManager.module('ContactsApp.Show', function(Show, ContactManager, Backbone, Marionette, $, _){
  Show.Controller = {
    showContact: function(id){
      var contact = ContactManager.request("contact:entity", id);
      var contact_view;
      if(contact !== undefined){
        contact_view = new Show.Contact({
          model: contact
        });
      }
      else{
        contact_view = new Show.MissingContact();
      }
      
      ContactManager.mainRegion.show(contact_view);
    }
  }
});