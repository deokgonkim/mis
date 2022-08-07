Ext.define('MIS.store.Users', {
    extend: 'Ext.data.Store',
    model: 'MIS.model.User',
    autoLoad: false,
    proxy: {
        type: 'rest',
        url: 'data/users',
//        api: {
//            create: 'data/createUsers.json',
//            read: 'data/users.json',
//            update: 'data/updateUsers.json',
//            destroy: 'data/deleteUsers.json'
//        },
        reader: {
            type: 'json',
            root: 'users',
            successProperty: 'success'
        }
    }
});