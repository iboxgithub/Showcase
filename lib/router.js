/**
 * Created by ibox on 4/4/15.
 */
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

Router.route('/blog', {
    name: 'blog'/*, //TODO add blog data loading
    waitOn: function(){
        return [
            Meteor.subscribe('transaction_user'),
            Meteor.subscribe('userWallets')
        ];
    }*/
});