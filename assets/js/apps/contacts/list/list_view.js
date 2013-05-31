ContactManager.module('ContactsApp.List', function(List, ContactManager, Backbone, Marionette, $, _){
  List.Layout = Marionette.Layout.extend({
    template: "#contact_list_layout",
    
    regions: {
      panelRegion: "#panel_region",
      contactsRegion: "#contacts_region"
    }
  });

  List.Panel = Marionette.ItemView.extend({
    template: "#contact_list_panel",
    
    events: {
      'click button.js-new': 'newContact'
    },
    
    newContact: function(){
      console.log("new contact to be created");
    }
  });
  
  List.ContactItemView = Backbone.Marionette.ItemView.extend({
    tagName: "tr",
    template: "#contact-list-item",
    
    events: {
      "click": "highlightName",
      "click td a.js-show": "showClicked",
      "click td a.js-edit": "editClicked",
      "click td a.js-delete": "deleteClicked"
    },

    flash: function(cssClass){
      var $view = this.$el;
      $view.hide().toggleClass(cssClass).fadeIn(800, function(){
        setTimeout(function(){
          $view.toggleClass(cssClass)
        }, 500);
      });
    },

    highlightName: function(e){
      this.$el.toggleClass('warning');
    },

    showClicked: function(e){
      e.preventDefault();
      e.stopPropagation();
      this.trigger("contact:show", this.model);
    },

    editClicked: function(e){
      e.preventDefault();
      e.stopPropagation();
      this.trigger("contact:edit", this.model);
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