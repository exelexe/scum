AboutController = ApplicationController.extend({
  action: function () {
    console.log('AboutController call');
    this.render('about');
  }
});

