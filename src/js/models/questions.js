define(function (require) {

    "use strict";

    var $           = require('jquery'),
        Backbone    = require('backbone'),

        Question = Backbone.Model.extend({
            idAttribute: 'question_id',
            // get next (1) or prev(-1) model
            getRelative: function(direction) {
                    return this.collection.at(this.collection.indexOf(this) + direction) || this;
            },
            answered: function(a){
                console.log("I was answered " + a)
            }
        });


        var Questions = Backbone.Collection.extend({
            model: Question,
            url: 'sdfsdfs' 
        });

    return Questions;

});
