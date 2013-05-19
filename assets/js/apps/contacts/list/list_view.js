ContactManager.module('ContactsApp.List', function(List, ContactManager, Backbone, Marionette, $, _){
  List.ContactItemView = Backbone.Marionette.ItemView.extend({
    tagName: "tr",
    template: "#contact-list-item",
    
    events: {
      "click": "highlightName",
      "click td a.js-show": "showClicked",
      "click td a.js-delete": "deleteClicked"
    },

    highlightName: function(e){
      this.$el.toggleClass('warning');
    },

    showClicked: function(e){
      e.preventDefault();
      e.stopPropagation();
      this.trigger("contact:show", this.model);
    },

    deleteClicked: function(e){
      e.preventDefault();
      e.stopPropagation();
      this.trigger("contact:delete", this.model);
    },

    remove: function(){
      this.$el.fadeOut(function(){
        $(this).remove();
      });
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