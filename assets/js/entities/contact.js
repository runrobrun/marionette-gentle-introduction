ContactManager.module('Entities', function(Entities, ContactManager, Backbone, Marionette, $, _){
  Entities.Contact = Backbone.Model.extend({});

  Entities.ContactCollection = Backbone.Collection.extend({
    model: Entities.Contact,
    comparator: "first_name"
  });
  
  var contacts;
  
  var initializeContacts = function(){
    contacts = new Entities.ContactCollection([
      { id: 1, first_name: 'Alice', last_name: 'Arten', phone_number: '555-0184' },
      { id: 2, first_name: 'Bob', last_name: 'Brigham', phone_number: '555-0163' },
      { id: 3, first_name: 'Charlie', last_name: 'Campbell', phone_number: '555-0129' }
    ]);
  };
  
  var API = {
    getContactEntities: function(){
      if(contacts === undefined){
        initializeContacts();
      }
      return contacts;
    }
  };
  
  ContactManager.reqres.setHandler("contact:entities", function(){
    return API.getContactEntities();
  });
});