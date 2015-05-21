'use strict';
var frameModule = require('ui/frame'),
    navigationViewModel = require('./navigation-view-model');

function _removeIOSNavBar() {
    var iosFrame = frameModule.topmost().ios;

    if (iosFrame) {
        iosFrame.navBarVisibility = 'never';
    }
}

function pageLoaded(args) {
    var page = args.object;

    _removeIOSNavBar();
    page.bindingContext = navigationViewModel;
    navigationViewModel.set('pageTitle', 'nativeScriptApp');
}

function menuItemTap(args) {
    var navigateToPath = navigationViewModel.menuItems[args.index].modulePath;

    frameModule.topmost().navigate(navigateToPath);
}

exports.pageLoaded = pageLoaded;
exports.menuItemTap = menuItemTap;