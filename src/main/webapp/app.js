//Ext.Loader.setConfig({enabled:true});
Ext.application({
    name: 'MIS',
    appFolder: 'app',
    autoCreateViewport: true,
    launch: function() {
        
    },
    controllers: [
        'Main',
        'UserController',
        'GeneralLedgerController',
        'AccountController'
    ]
});