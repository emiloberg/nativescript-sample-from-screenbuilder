'use strict';
var ViewModel,
    Observable = require('data/observable').Observable;

ViewModel = new Observable({

    pageTitle: 'Blank',
    // additional properties
});

module.exports = ViewModel;