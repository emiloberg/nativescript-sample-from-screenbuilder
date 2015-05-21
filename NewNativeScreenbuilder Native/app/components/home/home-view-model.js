'use strict';
var ViewModel,
    Observable = require('data/observable').Observable;

ViewModel = new Observable({

    pageTitle: 'Home',
    // additional properties
});

module.exports = ViewModel;