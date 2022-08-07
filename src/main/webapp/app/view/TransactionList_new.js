/**
 * View::TransactionList
 * 일반원장_신규
 */
Ext.define('MIS.view.TransactionList_new', {
    extend: 'Ext.window.Window',
    alias: 'widget.transactionlist_new',
    layout: 'fit',
    title: '신규 거래',
    autoShow: true,
    requires: [
        
    ],
    items: [
        {
            xtype: 'form',
            items: [
               {
                   xtype: 'datefield',
                   name: 'transaction_date',
                   format: 'Y m d',
                   fieldLabel: '거래일자'
               }
            ]
        }
    ],
    buttons: [
        {
            text: '생성',
            action: 'create'
        }, {
            text: 'Cancel'
        }
    ],
    initComponent: function() {
        this.buttons[1].scope = this;
        this.buttons[1].handler = this.close;
        
        this.callParent(arguments);
    }
});