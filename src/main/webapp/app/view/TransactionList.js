/**
 * View::TransactionList
 * 일반원장
 */
Ext.define('MIS.view.TransactionList', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.transactionlist',
    layout: 'fit',
    requires: [
        
    ],
    items: [
        {
            id: 'generalledger_grid',
            xtype: 'grid',
            store: 'Transactions',
            selType: 'rowmodel',
            flex: 1,
            dockedItems: [{
                xtype: 'toolbar',
                items: [{
                    iconCls: 'icon-add',
                    text: '추가'
                },{
                    iconCls: 'icon-delete',
                    text: '삭제'
                },{
                    text: '조회'
                },{
                    text: '저장'
                }]
            }],
            columns: [{
                header: '개별거래ID',
                dataIndex: 'transaction_id',
                flex: 2,
                editor: 'textfield'
            }, {
                header: '거래번호',
                dataIndex: 'transaction_group_id',
                flex: 2,
                editor: 'textfield'
            }, {
                header: '등록자',
                dataIndex: 'owner',
                flex: 1,
                editor: 'textfield'
            }, {
                header: '일별참조번호',
                dataIndex: 'transaction_daily_no',
                flex: 1,
                editor: 'textfield'
            }, {
                header: '증빙번호',
                dataIndex: 'transaction_reference_no',
                flex: 1,
                editor: 'textfield'
            }, {
                header: '계정',
                dataIndex: 'affecting_account_id',
                flex: 2,
                editor: {
                    xtype: 'combobox',
                    store: 'Accounts',
                    displayField: 'account_name',
                    valueField: 'account_id',
                    queryMode: 'local'
                },
                renderer: function(val) {
                    index = Ext.getStore('Accounts').findExact('account_id', val);
                    if (index!=-1) {
                        return Ext.getStore('Accounts').getAt(index).get('account_name');;
                    }
                }
            }, {
                header: '금액',
                dataIndex: 'amount',
                flex: 1,
                editor: 'textfield'
            }, {
                xtype: 'datecolumn',
                header: '일자',
                dataIndex: 'transaction_datetime',
                flex: 2,
                format:'Y/m/d',
                editor: {
                    xtype: 'datefield',
                    format: 'Y/m/d'
                }
            }, {
                header: '연관사업ID',
                dataIndex: 'related_business_id',
                flex: 1,
                editor: 'textfield'
            }, {
                header: '적요',
                dataIndex: 'comment',
                flex: 2,
                editor: 'textfield'
            }],
            /*plugins: [
                Ext.create('Ext.grid.plugin.RowEditing', {
                    autoCancel: true,
                    clicksToEdit: 1
                })
            ]*/
            plugins: [
                Ext.create('Ext.grid.plugin.CellEditing', {
                    clicksToEdit: 1
                })
            ]
        }
    ]
});