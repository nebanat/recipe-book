FlowRouter.route('/',{
  name:'home',
  action() {
    BlazeLayout.render('HomeLayout')
  }
});

FlowRouter.route('/recipe-book',{
  name:'test',
  action() {
    BlazeLayout.render('MainLayout',{ main:'Recipes' })
  }
}); 