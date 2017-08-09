define(function (require) {

    "use strict";

    var $           = require('jquery'),
        Backbone    = require('backbone'),

        Question = Backbone.Model.extend({
            idAttribute: 'question_id',

            getRelative: function(direction) {
                    return this.collection.at(this.collection.indexOf(this) + direction);
            }
        });


        var Questions = Backbone.Collection.extend({
            model: Question,
            url: 'sdfsdfs' 
        });

    return Questions;

});
