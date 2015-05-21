'use strict';
var isInit = true,
    frameModule = require('ui/frame'),
    // additional requires
    viewModel = require('./formView-view-model');

function onformViewModelFormSubmit() {

}

function onformViewModelFormCancel() {

}

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

        viewModel.on(viewModel.events.formViewModelCancel, onformViewModelFormSubmit);

        viewModel.on(viewModel.events.formViewModelCancel, onformViewModelFormCancel);

        // additional pageInit
    }
}

exports.pageLoaded = pageLoaded;