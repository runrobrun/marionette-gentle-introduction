ContactManager.module('ContactsApp.Edit', function(Edit, ContactManager, Backbone, Marionette, $, _){
  Edit.Contact = Marionette.ItemView.extend({
    template: "#contact_form",
    
    events: {
      'click button.js-submit': 'updateContact'
    },
    
    updateContact: function(e){
      e.preventDefault();
      var data = Backbone.Syphon.serialize(this);
      this.trigger("form:submit", data);
    },

    onFormDataInvalid: function(errors){
      var $view = this.$el;

      var clearFormErrors = function(){
        var $form = $view.find("form");
        $form.find(".help-inline.error").each(function(){
          $(this).remove();
        });
        $form.find(".control-group.error").each(function(){
          $(this).removeClass("error");
        });
      }

      var markErrors = function(value, key){
        var $control_group = $view.find("#contact_" + key).parent();
        var $error_el = $('<span>', { class: "help-inline error", text: value });
        $control_group.append($error_el).addClass("error");
      }

      clearFormErrors();
      _.each(errors, markErrors);
    }
  });
});