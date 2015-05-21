'use strict';
var isInit = true,
    frameModule = require('ui/frame'),
    // additional requires
    viewModel = require('./home-view-model');

// additional functions
function _removeIOSNavBar() {
    var iosFrame = frameModule.topmost().ios;

    if (iosFrame) {
        iosFrame.navBarVisibility = 'never';
    }
}

function pageLoaded(args) {
    var page = args.object;

    _removeIOSNavBar();
    page.bindingContext = viewModel;
    // additional pageLoaded

    if (isInit) {
        isInit = false;

        // additional pageInit
    }
}

exports.pageLoaded = pageLoaded;