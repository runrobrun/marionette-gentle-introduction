ContactManager.module('ContactsApp.List', function(List, ContactManager,
Backbone, Marionette, $, _){
    List.Controller = {
      listContacts: function(){
        var contacts = ContactManager.request("contact:entities");
        
        var contacts_list_view = new List.ContactsView({
          collection: contacts
        });
        
        ContactManager.mainRegion.show(contacts_list_view);
      }
    }
});