ContactManager.module("ContactsApp.List", function(List, ContactManager, Backbone, Marionette, $, _){
  List.Contact = Marionette.ItemView.extend({
    tagName: "li",
    template: "#contact-list-item",
    events: {"click p": "alertPhone"},
    alertPhone: function() {
      console.log("Hey, " + this.model.escape("firstName") + " " + this.model.escape("lastName") + "! Your phone number is: " + this.model.escape("phoneNumber"));
    }
  });

  List.Contacts = Marionette.CollectionView.extend({
    tagName: "ul",
    childView: List.Contact
  });

});
