ContactManager.module('ContactsApp.Show', function(Show, ContactManager, Backbone, Marionette, $, _){
  Show.Controller = {
    showContact: function(id){
      var loading_view = new ContactManager.Common.Views.Loading();
      ContactManager.mainRegion.show(loading_view);

      var fetching_contact = ContactManager.request("contact:entity", id);
      $.when(fetching_contact).done(function(contact){
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
      });
    }
  }
});