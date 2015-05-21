'use strict';
var menuItems,
    observable = require('data/observable'),
    navigationViewModel = new observable.Observable();

menuItems = [{
    "title": "Home",
    "modulePath": "components/home/home",
    "icon": "~/images/icons/home.png"
}, {
    "title": "Data List",
    "modulePath": "components/dataListView/dataListView",
    "icon": "~/images/icons/organize.png"
}, {
    "title": "Sign In",
    "modulePath": "components/signInView/signInView",
    "icon": "~/images/icons/contacts.png"
}];

navigationViewModel.set('menuItems', menuItems);
navigationViewModel.set('backButtonHidden', true);

module.exports = navigationViewModel;