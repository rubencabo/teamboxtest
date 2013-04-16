(function () {
  // Initialize a basic Teambox app
  Teambox.Apps.BreadFish = Teambox.BaseApp.extend({});
 
  // Router to handle paths (in this case, /#!/breadfish) with regular links
  Teambox.Apps.BreadFish.Controller = Teambox.Controllers.BaseController.extend({
    routes: { '!/breadfish'  : 'index' },
    index: function () {
      // Helper Teambox function to highlight the sidebar
      Teambox.Views.Sidebar.highlightSidebar('breadfish_link');
 
      // Helper Teambox function to render content to the main area
      Teambox.helpers.views.renderContent(
        "<iframe src='http://breadfish.co.uk/' style='width:100%;height:100%'></iframe>",
        "Breadfish"
      );
    }
  });
 
  // Init app. Will be executed once on pageload when apps are instantiated.
  Teambox.Apps.BreadFish = Teambox.Apps.BreadFish.extend({
    initialize: function () {
      // Instantiate the controller
      this.controller = new Teambox.Apps.BreadFish.Controller();
 
      // Add an element to the Apps section in the sidebar
      Teambox.views.sidebar.apps_list.addApp("breadfish", "Breadfish app", "#!/breadfish", "star");
    }
  });
 
}());
