// questions view

define(function (require) {

        "use strict";

        var $           = require('jquery'),
            _           = require('lodash'),
            Backbone    = require('backbone'),
            template    = require('../templates/question.html')
        
        var qView = Backbone.View.extend({
            my_template : _.template(template),
            el: '#question',
            initialize: function(){
                this.render();
            },
            render: function(){
                this.$el.html( this.my_template(this.model.toJSON()));

            },
            events: {
                'click a[data-star]': 'starClicked'
            },
            starClicked: function(e){
                console.log(e);
            }
        })

        return qView;
});



