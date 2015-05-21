'use strict';
var isInit = true,
    frameModule = require('ui/frame'),

    service = require('./signInView-service'),

    // additional requires
    viewModel = require('./signInView-view-model');

function onLogged() {
    frameModule.topmost().navigate('components/home/home');
}

function onLogin(data) {
    if (!data.username) {
        alert('Missing username');

        return;
    }

    if (!data.password) {
        alert('Missing password');

        return;
    }

    service.login(data)
        .then(onLogged);
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

        viewModel.on(viewModel.events.login, onLogin);

        // additional pageInit
    }
}

exports.pageLoaded = pageLoaded;