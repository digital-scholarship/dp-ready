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
                this.listenTo(this.model, "change", this.render);
                this.render();
            },
            render: function(){
                this.$el.html( this.my_template(this.model.toJSON()));

            },
            events: {
                'click a[data-star]': 'starClicked',
                'mouseover a[data-star]': 'starHover',
                'click a.next': 'next',
                'click a.prev': 'prev'
            },
            starClicked: function(e){
                e.preventDefault()
                var a = $(e.currentTarget).data("star")
                this.model.answered(a)
            },
            starHover: function(e){
                this.rating = e.currentTarget.dataset.star;
                this.advice = this.model.get('a' + this.rating)
                $(guidance).html(this.advice)
            },
            next: function(e){
                e.preventDefault();
                this.model = this.model.getRelative(1)
                this.render();
            },
            prev: function(e){
                e.preventDefault();
                this.model = this.model.getRelative(-1);
                this.render();
            }
        })

        return qView;
});



