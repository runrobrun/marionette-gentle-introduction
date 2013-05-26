ContactManager.module('ContactsApp.Edit', function(Edit, ContactManager, Backbone, Marionette, $, _){
  Edit.Contact = Marionette.ItemView.extend({
    template: "#contact_form",
    
    events: {
      'click button.js-submit': 'updateContact'
    },
    
    updateContact: function(e){
      e.preventDefault();
      console.log("edit contact");
    }
  });
});