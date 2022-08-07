Ext.define('MIS.store.Transactions', {
    extend: 'Ext.data.Store',
    model: 'MIS.model.Transaction',
    autoLoad: false,
    proxy: {
        type: 'rest',
        url: 'data/transactions',
        reader: {
            type: 'json',
            root: 'transactions',
            successProperty: 'success'
        }
    }
});