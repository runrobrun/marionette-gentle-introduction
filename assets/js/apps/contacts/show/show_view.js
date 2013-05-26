ContactManager.module('ContactsApp.Show', function(Show, ContactManager, Backbone, Marionette, $, _){
  Show.MissingContact = Marionette.ItemView.extend({
    template: "#missing_contact_view"
  });
  
  Show.Contact = Marionette.ItemView.extend({
    template: "#contact_view",
    
    events: {
      "click a.js-edit": "editClicked"
    },
    
    editClicked: function(e){
      e.preventDefault();
      this.trigger("contact:edit", this.model);
    }
  });
});