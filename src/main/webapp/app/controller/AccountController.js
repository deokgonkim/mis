Ext.define('MIS.controller.AccountController', {
    extend: 'Ext.app.Controller',
    init: function() {
        this.control({
            'accountlist grid' : {
                edit: this.gridEdit
            },
            'accountlist button' : {
                click: this.buttonClick
            }
        });
        this.application.on({
            loadAccounts: this.loadAccounts,
            saveAccounts: this.saveAccounts,
            addAccount: this.addAccount,
            deleteAccounts: this.deleteAccounts,
            reload: this.reloadData,
            scope: this
        });
        
        if ( console != undefined ) console.log('Initialized AccountController!');
    },
    loadAccounts: function(obj) {
        console.log(this.getAccountsStore().load());
        console.log('getAccountList');
    },
    saveAccounts: function() {
        this.getAccountsStore().sync();
    },
    addAccount: function() {
        this.getAccountsStore.add({});
    },
    deleteAccounts: function(selection) {
        console.log("deleteAccounts");
        if (selection) {
            this.getAccountsStore().remove(selection);
        }
    },
    buttonClick: function(btn, e, eOpts) {
        console.log('AccountController.buttonClicked');
        if (btn.text == '조회') {
            this.application.fireEvent('loadAccounts');
        } else if ( btn.text == '저장' ) {
            this.application.fireEvent('saveAccounts');
        } else if ( btn.text == '추가' ) {
            this.application.fireEvent('addAccount');
        } else if ( btn.text == '삭제' ) {
            var selection = btn.up('grid').getView().getSelectionModel().getSelection()[0];
            this.application.fireEvent("deleteAccounts", selection);
        } else {
            Ext.MessageBox.alert('구현되지 않음.', '기능이 구현되지 않았습니다.');
        }
    },
    gridEdit: function(obj, e, eOpts) {
        console.log('AccountController.gridEdit');
        e.record.data.id = e.record.data.account_id;
//        if (obj.text == '조회') {
//            this.application.fireEvent('loadUsers');
//        } else if ( obj.text == '' ) {
//            
//        } else {
//            Ext.MessageBox.alert('구현되지 않음.', '기능이 구현되지 않았습니다.');
//        }
    },
    openAccountList: function(obj, event, eOpts) {
        this.application.fireEvent('accountList', obj);
    },
    reloadData: function(store) {
        console.log(store);
        if (store !== undefined) {
            console.log(eval('this.get' + store + 'Store().load()'));
        } else {
            console.log('obj.store is undefined');
        }
    },
    refs: [{
        selector: 'viewport > #tabPanel1 > accountlist > grid',
        ref: 'accountlist'
    }],
    stores: [
        'Accounts'
    ],
    models: [
        'Account'
    ],
    views: [
        'AccountList'
    ]
});