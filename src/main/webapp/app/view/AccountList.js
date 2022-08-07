/**
 * View::AccountList
 * 계정 목록
 */
Ext.define('MIS.view.AccountList', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.accountlist',
    layout: 'fit',
    requires: [
        
    ],
    items: [
        {
            title: '계정',
            layout: {
                type: 'vbox',
                align: 'stretch'
            },
            items: [
                {
                    id: 'accountlist_grid',
                    xtype: 'grid',
                    store: 'Accounts',
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
                        header: '계정코드',
                        dataIndex: 'account_id',
                        flex: 1,
                        editor: 'textfield'
                    }, {
                        header: '계정명',
                        dataIndex: 'account_name',
                        flex: 1,
                        editor: 'textfield'
                    }, {
                        header: '계정유형',
                        dataIndex: 'account_type',
                        flex: 1,
                        editor: 'textfield'
                    }, {
                        header: '계정설명',
                        dataIndex: 'account_description',
                        flex: 1,
                        editor: 'textfield'
                    }, {
                        header: '상위계정코드',
                        dataIndex: 'parent_account_id',
                        flex: 1,
                        editor: 'textfield'
                    }],
                    plugins: [
                        Ext.create('Ext.grid.plugin.RowEditing', {
                            autoCancel: true,
                            clicksToEdit: 1
                        })
                    ]
                }
            ]
        }
    ]
});