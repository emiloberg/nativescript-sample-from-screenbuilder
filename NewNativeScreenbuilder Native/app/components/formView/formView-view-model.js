'use strict';
var ViewModel,
    Observable = require('data/observable').Observable;

ViewModel = new Observable({

    pageTitle: 'Form',

    events: {
        formViewModelSubmit: 'formViewModelSubmit',
        formViewModelCancel: 'formViewModelCancel'
    },

    onformViewModelFormSubmit: function() {
        this.notify({
            eventName: this.events.formViewModelFormSubmit
        });
    },

    onformViewModelFormCancel: function() {
        this.notify({
            eventName: this.events.formViewModelFormCancel
        });
    },

    // additional properties
});

module.exports = ViewModel;