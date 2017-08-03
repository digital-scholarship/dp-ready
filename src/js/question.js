define(function (require) {

    "use strict";

    var $           = require('jquery'),
        Backbone    = require('backbone'),

        Question = Backbone.Model.extend({
            idAttribute: 'question_id'
        }),


        Questions = Backbone.Collection.extend({

            model: Question,

            url: "/questions/"

        });

    return new Questions();

});
