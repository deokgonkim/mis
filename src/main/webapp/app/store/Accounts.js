Ext.define('MIS.store.Accounts', {
    extend: 'Ext.data.Store',
    model: 'MIS.model.Account',
    autoLoad: true,
    proxy: {
        type: 'rest',
        url: 'data/accounts',
        reader: {
            type: 'json',
            root: 'accounts',
            successProperty: 'success'
        }
    }
});