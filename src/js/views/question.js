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
            guidance: '#guidance',
            initialize: function(){
                this.render();
            },
            render: function(){
                this.$el.html( this.my_template(this.model.toJSON()));

            },
            events: {
                'click a[data-star]': 'starClicked',
                'mouseover a[data-star]': 'starHover'
            },
            starClicked: function(e){
                console.log(e);
            },

            starHover: function(e){
                this.rating = e.currentTarget.dataset.star;
                this.advice = this.model.get('a' + this.rating)
                $(guidance).html(this.advice)
                    

            }
        })

        return qView;
});



