ContactManager.module('ContactsApp.List', function(List, ContactManager, Backbone, Marionette, $, _){
  List.Controller = {
    listContacts: function(){
      var contacts = ContactManager.request("contact:entities");
      
      var contacts_list_view = new List.ContactsView({
        collection: contacts
      });

      contacts_list_view.on("itemview:contact:show", function(childView, model){
        ContactManager.trigger("contact:show", model.get('id'));
      });

      contacts_list_view.on("itemview:contact:delete", function(childView, model){
        contacts.remove(model);
      });
      
      ContactManager.mainRegion.show(contacts_list_view);
    }
  }
});