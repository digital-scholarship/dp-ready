define(function (require) {

    "use strict";

    var $           = require('jquery'),
        Backbone    = require('backbone'),

        Question = Backbone.Model.extend({
            idAttribute: 'question_id',
            // get next (1) or prev(-1) model
            getRelative: function(direction) {
                if(this.collection.indexOf(this) === 0 && direction === -1){
                    // don't move if we are at first element and direction is -ve
                    direction = 0;
                }
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
