ContactManager.module('ContactsApp.Show', function(Show, ContactManager, Backbone, Marionette, $, _){
  Show.MissingContact = Marionette.ItemView.extend({
    template: "#missing_contact_view"
  });
  
  Show.Contact = Marionette.ItemView.extend({
    template: "#contact_view"
  });
});