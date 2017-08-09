define(function (require) {

    "use strict";

    var $           = require('jquery'),
        Backbone    = require('backbone')


    var CrowdResult = Backbone.Model.extend({
    })        


    var Crowd = Backbone.Collection.extend({
        model: CrowdResult,
        url: ''
    })

    return Crowd;

});
