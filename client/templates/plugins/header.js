/**
 * Created by ibox on 4/4/15.
 */
Template.header.helpers({
    activeRouteClass: function(/* route names */) {
        var args = Array.prototype.slice.call(arguments, 0);
        args.pop();

        var active = _.any(args, function(name) {
            return Router.current() && Router.current().route.getName() === name
        });

        return active && 'active';
    }
});

if (Meteor.isClient) {
    Meteor.startup(function() {
        GoogleMaps.load();
    });
}