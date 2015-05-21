'use strict';
var ViewModel,
    Observable = require('data/observable').Observable;

ViewModel = new Observable({

    pageTitle: 'Register',

    username: '',
    password: '',
    email: '',

    events: {
        register: 'register',
        showLogin: 'showLogin'
    },

    onRegister: function() {
        this.notify({
            eventName: this.events.register,
            username: this.get("username"),
            password: this.get("password"),
            email: this.get("email")
        });
    },

    onShowRegister: function() {
        this.notify({
            eventName: this.events.showLogin
        });
    },

    // additional properties
});

module.exports = ViewModel;