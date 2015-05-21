'use strict';
var _,

    _consts,
    dataService = require('../../providers/defaultProvider-data-provider'),
    localSettings = require('application-settings'),

    // additional requires
    consts;

function Service() {}

_consts = {
    accessTokenKey: 'accessToken'
};

function onRequestSuccess(e) {
    localSettings.setString(_consts.accessTokenKey, e.result.access_token);

    return 'Success';
}

function onRequestFail(err) {
    alert(JSON.stringify(err));
    return err;
}

Service.prototype.login = function(args) {
    if (!args.username) {
        throw new Error('Service: login - missing username');
    }

    if (!args.password) {
        throw new Error('Service: login - missing password');
    }

    return dataService.Users.login(args.username, args.password)
        .then(onRequestSuccess.bind(this))
        .catch(onRequestFail.bind(this));
};

Service.prototype.getCurrentUser = function() {
    return dataService.Users.currentUser();
};

Service.prototype.isAuthenticated = function() {
    return localSettings.getString(_consts.accessTokenKey);
};

Service.prototype.setAuthorization = function() {
    dataService.Users.setAuthorization(localSettings.getString(_consts.accessTokenKey), 'bearer');
};

// additional properties

module.exports = new Service();