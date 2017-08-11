// questions view

define(function (require) {

        "use strict";

        var $           = require('jquery'),
            _           = require('lodash'),
            Backbone    = require('backbone'),
            template    = require('../templates/question.html')
        
        var sView = Backbone.View.extend({
            my_template : _.template(template),
            el: '#sections',
            initialize: function(){
                this.listenTo(this.model, "change", this.render);
                this.render();
            },
            render: function(){
                this.$el.html( this.my_template(this.model.toJSON()));

            },
            events: {
            }
        })

        return sView;
});



