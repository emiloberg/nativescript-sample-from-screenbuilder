var provider,
    TelerikBackendServices = require('../everlive/everlive.all.min');

provider = new TelerikBackendServices({

    offlineStorage: true,

    apiKey: 'jcu3PhvNqHOh4Afg',
    scheme: 'https'
});

module.exports = provider;