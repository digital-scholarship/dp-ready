// sections model
// - we get passed the list of questions and then we generate the sections


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
        model: Section,
        initialize: function(questions){
            this.gqs = questions.groupBy('area')
            console.log(this.gqs)

        },

    });

    return  Sections;

});
