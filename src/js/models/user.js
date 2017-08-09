define(function (require) {

    "use strict";

    var $           = require('jquery'),
        Backbone    = require('backbone'),
        Questions =   require('./questions.js')


    var Result = Backbone.Model.extend({
    })        

    var Results = Backbone.Collection.extend({
        model: Result,
    })

    var User = Backbone.Model.extend({
        results: new Results(),
        id: null,
        hash: null,
        region: null,
        country: null
    })

    return User;

});
