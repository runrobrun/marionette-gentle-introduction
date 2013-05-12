ContactManager.module('ContactsApp.List', function(List, ContactManager, Backbone, Marionette, $, _){
    List.ContactItemView = Backbone.Marionette.ItemView.extend({
      tagName: "li",
      template: "#contact-list-item"
    });
    
    List.ContactsView = Backbone.Marionette.CollectionView.extend({
      tagName: "ul",
      itemView: List.ContactItemView
    });
});