//sidebar mobile
Template.header.onRendered(function(){
    $('.button-collapse').sideNav({
            menuWidth: 180, // Default is 240
            edge: 'left', // Choose the horizontal origin
            closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteor
        }
    );
});
