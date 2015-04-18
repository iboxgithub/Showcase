var postsData = [
    {
        title: 'Introducing Telescope',
        url: 'http://localhost:3000/contact'
    },
    {
        title: 'Meteor',
        url: 'http://meteor.com'
    },
    {
        title: 'The Meteor Book',
        url: 'http://themeteorbook.com'
    }
];
Template.blog.helpers({
    posts: postsData
});

Template.postItem.helpers({
    domain: function() {
        var a = document.createElement('a');
        a.href = this.url;
        return a.hostname;
    }
});