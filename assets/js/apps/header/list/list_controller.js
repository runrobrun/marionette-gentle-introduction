ContactManager.module('HeaderApp.List', function(List, ContactManager, Backbone, Marionette, $, _){
  List.Controller = {
    listHeader: function(){
      var links = ContactManager.request("header:entities");
      var headers = new List.Headers({collection: links});
      
      headers.on("brand:clicked", function(){
        ContactManager.trigger("contacts:list");
      });

      headers.on("itemview:navigate", function(childView, model){
        var url = model.get('url');
        if(url === 'contacts'){
          ContactManager.trigger("contacts:list");
        }
        else if(url === 'about'){
          ContactManager.trigger("about:show");
        }
        else{
          throw "No such sub-application: " + url;
        }
      });

      ContactManager.headerRegion.show(headers);
    },

    setActiveHeader: function(header_url){
      var links = ContactManager.request("header:entities");
      var header_to_select = links.find(function(header){ return header.get("url") === header_url; });
      header_to_select.select();
      links.trigger("reset");
    }
  };
});