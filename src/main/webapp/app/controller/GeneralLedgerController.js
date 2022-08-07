Ext.define('MIS.controller.GeneralLedgerController', {
    extend: 'Ext.app.Controller',
    init: function() {
        this.control({
            'transactionlist grid' : {
                edit: this.gridEdit,
                render: this.gridRender
            },
            'transactionlist_new button[action=create]' : {
                click: this.newTransaction
            },
            'transactionlist button' : {
                click: this.buttonClick
            }
        });
        this.application.on({
            loadTransactions: this.loadTransactions,
            saveTransactions: this.saveTransactions,
            addTransaction: this.addTransaction,
            deleteTransactions: this.deleteTransactions,
            reload: this.reloadData,
            scope: this
        });
        
//        this.getTransactionlist().on({
//            edit: this.onEdit,
//            scope: this
//        });
        if ( console != undefined ) console.log('Initialized GeneralLedgerController!');
    },
    loadTransactions: function(obj) {
        //console.log(this.getTabPanel1().down('#userlistpanel'));
        console.log(this.getTransactionsStore().load());
        console.log('getTransactionList');
    },
    saveTransactions: function() {
        this.getTransactionsStore().sync();
    },
    addTransaction: function() {
        var view = Ext.widget('transactionlist_new');
    },
    deleteTransactions: function(selection) {
        console.log("deleteTransactions");
        if (selection) {
            this.getTransactionsStore().remove(selection);
        }
    },
    newTransaction: function(button) {
        var inputDate = button.up('toolbar').up('window').down('datefield').value;
        
        var year = inputDate.getFullYear();
        var month = inputDate.getMonth() + 1 < 10 ? '0' + ( inputDate.getMonth() + 1 ) : inputDate.getMonth() + 1;
        var date = inputDate.getDate() < 10 ? '0' + inputDate.getDate() : inputDate.getDate();
        var transactionBase = year +''+ month +''+ date;
        
        Ext.Ajax.request({
            url: 'data/transactions/new/' + transactionBase,
        });
        
        this.getTransactionsStore().load();
        
        button.up('toolbar').up('window').close();
        
    },
    buttonClick: function(btn, e, eOpts) {
        console.log('TransactionController.buttonClicked');
        if (btn.text == '조회') {
            this.application.fireEvent('loadTransactions');
        } else if ( btn.text == '저장' ) {
            this.application.fireEvent('saveTransactions');
        } else if ( btn.text == '추가' ) {
            this.application.fireEvent('addTransaction');
        } else if ( btn.text == '삭제' ) {
            var selection = btn.up('grid').getView().getSelectionModel().getSelection()[0];
            this.application.fireEvent("deleteTransactions", selection);
        } else {
            Ext.MessageBox.alert('구현되지 않음.', '기능이 구현되지 않았습니다.');
        }
    },
    gridEdit: function(obj, e, eOpts) {
        console.log('GeneralLedgerController.gridEdit');
        e.record.data.id = e.record.data.transaction_id;
//        if (obj.text == '조회') {
//            this.application.fireEvent('loadUsers');
//        } else if ( obj.text == '' ) {
//            
//        } else {
//            Ext.MessageBox.alert('구현되지 않음.', '기능이 구현되지 않았습니다.');
//        }
    },
    gridRender: function(obj) {
        console.log('GeneralLedgerController.gridRender');
    },
//    openUserList: function(obj, event, eOpts) {
//        this.application.fireEvent('userList', obj);
//    },
    reloadData: function(store) {
        console.log(store);
        if (store !== undefined) {
            console.log(eval('this.get' + store + 'Store().load()'));
        } else {
            console.log('obj.store is undefined');
        }
    },
    refs: [{
        selector: 'viewport > #tabPanel1 > transactionlist > grid',
        ref: 'transactionlist'
    }],
    stores: [
        'Transactions'
    ],
    models: [
        'Transaction'
    ],
    views: [
        'TransactionList',
        'TransactionList_new'
    ]
});