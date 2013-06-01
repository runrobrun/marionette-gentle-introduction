Marionette.Region.Dialog = Marionette.Region.extend({
  onShow: function(view){
    var self = this;
    view.$el.dialog({
      modal: true,
      title: view.title,
      minWidth: 500,
      close: function(e, ui){
        self.closeDialog();
      }
    });
  },
  
  closeDialog: function(){
    this.stopListening();
    this.close();
    this.$el.dialog("destroy");
  }
});