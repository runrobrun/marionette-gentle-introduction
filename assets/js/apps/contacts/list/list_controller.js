ContactManager.module('ContactsApp.List', function(List, ContactManager, Backbone, Marionette, $, _){
  List.Controller = {
    listContacts: function(){
      var loading_view = new ContactManager.Common.Views.Loading();
      ContactManager.mainRegion.show(loading_view);

      var fetching_contacts = ContactManager.request("contact:entities");
      
      var contacts_list_layout = new List.Layout();
      var contacts_list_panel = new List.Panel();

      $.when(fetching_contacts).done(function(contacts){
        var contacts_list_view = new List.ContactsView({
          collection: contacts
        });

        contacts_list_layout.on("show", function(){
          contacts_list_layout.panelRegion.show(contacts_list_panel);
          contacts_list_layout.contactsRegion.show(contacts_list_view);
        });

        contacts_list_view.on("itemview:contact:show", function(childView, model){
          ContactManager.trigger("contact:show", model.get('id'));
        });
        
        contacts_list_view.on("itemview:contact:edit", function(childView, model){
          var view = new ContactManager.ContactsApp.Edit.Contact({
            model: model,
            asModal: true
          });

          view.on("form:submit", function(data){
            if(model.save(data)){
              childView.render();
              ContactManager.dialogRegion.close();
              childView.flash("success");
            }
            else{
              view.triggerMethod("form:data:invalid", model.validationError);
            }
          });
          
          ContactManager.dialogRegion.show(view);
        });

        contacts_list_view.on("itemview:contact:delete", function(childView, model){
          model.destroy();
        });
        
        ContactManager.mainRegion.show(contacts_list_layout);
      });
    }
  }
});