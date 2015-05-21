'use strict';
var ViewModel,
    Observable = require('data/observable').Observable;

ViewModel = new Observable({

    pageTitle: 'Data List',

    listItems: [],

    // additional properties
});

module.exports = ViewModel;