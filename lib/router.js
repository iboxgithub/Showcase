
Router.configure({
    layoutTemplate: 'layout',
    loadingTemplate: 'loading',
    notFoundTemplate: 'notFound'
});

Router.route('/', {
    name: 'welcome'
});

Router.route('/contact', {
    name: 'contact'
});

Router.route('/about', {
    name: 'about'
});

Router.route('/howitworks', {
    name: 'howitworks'
});

Router.route('/blog', {
    name: 'blog' //TODO add blog data loading
    /*waitOn: function(){
        return [
            Meteor.subscribe('transaction_user'),
            Meteor.subscribe('userWallets')
        ];
     Router.route('/blog/:_id', {
     name: 'blog',
     data: function() { return Posts.findOne(this.params._id); }
     });
*/


});


