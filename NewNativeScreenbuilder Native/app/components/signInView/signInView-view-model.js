'use strict';
var ViewModel,
    Observable = require('data/observable').Observable;

ViewModel = new Observable({

    pageTitle: 'Sign In',

    username: '',
    password: '',

    events: {
        login: 'login',
        showRegister: 'showRegister'
    },

    onLogin: function() {
        this.notify({
            eventName: this.events.login,
            username: this.get('username'),
            password: this.get('password')
        });
    },

    onShowRegister: function() {
        this.notify({
            eventName: this.events.showRegister
        });
    },

    // additional properties
});

module.exports = ViewModel;