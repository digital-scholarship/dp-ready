define(function (require) {

    "use strict";

    var $           = require('jquery'),
        Backbone    = require('backbone'),
        Questions =   require('./questions.js')

    var Section = Backbone.Model.extend({
            questions: null,
            title: 'Section',
            order: 0
        });

        var Sections = Backbone.Collection.extend({
            model: Section
        });

    return  Sections;

});
