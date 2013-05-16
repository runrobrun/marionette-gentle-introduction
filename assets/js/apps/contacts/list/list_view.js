ContactManager.module('ContactsApp.List', function(List, ContactManager, Backbone, Marionette, $, _){
    List.ContactItemView = Backbone.Marionette.ItemView.extend({
      tagName: "tr",
      template: "#contact-list-item",
      
      events: {
        "click": "highlightName"
      },
    
      highlightName: function(e){
        this.$el.toggleClass('warning');
      }
    });
    
    List.ContactsView = Backbone.Marionette.CompositeView.extend({
      tagName: "table",
      className: "table table-hover",
      template: "#contact-list",
      itemView: List.ContactItemView,
      itemViewContainer: "tbody"
    });
});