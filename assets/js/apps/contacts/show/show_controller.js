ContactManager.module('ContactsApp.Show', function(Show, ContactManager, Backbone, Marionette, $, _){
  Show.Controller = {
    showContact: function(id){
      var contacts = ContactManager.request("contact:entities");
      var model = contacts.get(id);
      var contact_view;
      if(model !== undefined){
        contact_view = new Show.Contact({
          model: model
        });
      }
      else{
        contact_view = new Show.MissingContact();
      }
      
      ContactManager.mainRegion.show(contact_view);
    }
  }
});