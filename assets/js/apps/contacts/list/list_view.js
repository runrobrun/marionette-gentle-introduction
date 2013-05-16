ContactManager.module('ContactsApp.List', function(List, ContactManager, Backbone, Marionette, $, _){
    List.ContactItemView = Backbone.Marionette.ItemView.extend({
      tagName: "tr",
      template: "#contact-list-item"
    });
    
    List.ContactsView = Backbone.Marionette.CompositeView.extend({
      tagName: "table",
      className: "table table-hover",
      template: "#contact-list",
      itemView: List.ContactItemView,
      itemViewContainer: "tbody"
    });
});