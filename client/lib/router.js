ApplicationController = RouteController.extend({
  
  layoutTemplate: 'content',
  //loadingTemplate: 'loading',
  //notFoundTemplate: 'notFound',

  onBeforeAction: function () {
    // do some login checks or other custom logic
    Template.content.onRendered(function () {
      $(document).ready(function () {
        var trigger = $('.hamburger'),
            overlay = $('.overlay'),
           isClosed = false;
      
        trigger.click(function () {
          hamburger_cross();      
        });
      
        function hamburger_cross() {
          if (isClosed == true) {          
            overlay.hide();
            trigger.removeClass('is-open');
            trigger.addClass('is-closed');
            isClosed = false;
          } else {   
            overlay.show();
            trigger.removeClass('is-closed');
            trigger.addClass('is-open');
            isClosed = true;
          }
        }
        
        $('[data-toggle="offcanvas"]').click(function () {
          $('#wrapper').toggleClass('toggled');
        });  
      });
    });

    this.next();
  },
  action: function () {
    console.log('this should be overridden!');
    this.next();
  }
});

Router.configure({
  controller: 'ApplicationController'
});

Router.route('/', {
  name: 'home',
  controller: 'HomeController'
});

Router.route('/create', {
  name: 'create',
  controller: 'CreateController'
});